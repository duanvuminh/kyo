import { AppError, ErrorCode } from "@/shared/type/models/error";
import { BaseItem } from "@/shared/type/models/word";
import path from "node:path";

type RepoConfig = {
    owner: string;
    repo: string;
    token: string;
    baseBranch: string;
};

type FileContentResponse = {
    sha: string;
    content: string;
};

function getRepoConfig(): RepoConfig | null {
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const baseBranch = process.env.GITHUB_BASE_BRANCH || "main";

    if (!token || !owner || !repo) {
        return null;
    }

    return { token, owner, repo, baseBranch };
}

async function githubRequest<T>(
    url: string,
    token: string,
    options?: RequestInit,
): Promise<T> {
    const res = await fetch(url, {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
            ...(options?.headers || {}),
        },
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`GitHub API error: ${res.status} ${text}`);
    }

    return (await res.json()) as T;
}

function toGitHubPath(targetPath: string): string {
    return targetPath
        .split("/")
        .map((part) => encodeURIComponent(part))
        .join("/");
}

async function getBaseBranchSha(cfg: RepoConfig): Promise<string> {
    const data = await githubRequest<{ object: { sha: string } }>(
        `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/git/ref/heads/${cfg.baseBranch}`,
        cfg.token,
    );
    return data.object.sha;
}

async function createBranch(cfg: RepoConfig, branchName: string, sha: string) {
    await githubRequest<{ ref: string; object: { sha: string } }>(
        `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/git/refs`,
        cfg.token,
        {
            method: "POST",
            body: JSON.stringify({
                ref: `refs/heads/${branchName}`,
                sha,
            }),
        },
    );
}

async function getFileContent(
    cfg: RepoConfig,
    targetPath: string,
): Promise<FileContentResponse> {
    const encodedPath = toGitHubPath(targetPath);
    return githubRequest<FileContentResponse>(
        `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${encodedPath}?ref=${cfg.baseBranch}`,
        cfg.token,
    );
}

async function updateFileInBranch({
    cfg,
    branch,
    targetPath,
    content,
    currentSha,
    message,
}: {
    cfg: RepoConfig;
    branch: string;
    targetPath: string;
    content: string;
    currentSha: string;
    message: string;
}) {
    const encodedPath = toGitHubPath(targetPath);
    const base64Content = Buffer.from(content, "utf8").toString("base64");

    await githubRequest<{ content: { sha: string } }>(
        `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${encodedPath}`,
        cfg.token,
        {
            method: "PUT",
            body: JSON.stringify({
                message,
                content: base64Content,
                sha: currentSha,
                branch,
            }),
        },
    );
}

async function createPullRequest({
    owner,
    repo,
    base,
    head,
    title,
    body,
    token,
}: {
    owner: string;
    repo: string;
    base: string;
    head: string;
    title: string;
    body: string;
    token: string;
}) {
    return githubRequest<{ html_url?: string }>(
        `https://api.github.com/repos/${owner}/${repo}/pulls`,
        token,
        {
            method: "POST",
            body: JSON.stringify({ title, head, base, body }),
        },
    );
}

function getValidatedHuusennararePayload(item: BaseItem): {
    slug: string;
    content: string;
    targetPath: string;
} {
    const slug = item.documentId?.trim();
    if (!slug || !item.content) {
        throw new AppError(ErrorCode.VALIDATION);
    }

    if (!/^[a-z0-9-]+$/i.test(slug)) {
        throw new AppError(ErrorCode.VALIDATION);
    }

    const targetPath = path.join("app", "huusennarare", slug, "page.mdx");
    return { slug, content: item.content, targetPath };
}

async function createEditCommitAndPr({
    slug,
    targetPath,
    content,
    cfg,
    branchPrefix = "edit",
    prBody,
}: {
    slug: string;
    targetPath: string;
    content: string;
    cfg: RepoConfig;
    branchPrefix?: string;
    prBody?: string;
}) {
    const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 12);
    const branch = `${branchPrefix}/${slug}-${timestamp}`;
    const commitMessage = `update: ${slug}`;

    const baseSha = await getBaseBranchSha(cfg);
    await createBranch(cfg, branch, baseSha);

    const currentFile = await getFileContent(cfg, targetPath);
    await updateFileInBranch({
        cfg,
        branch,
        targetPath,
        content,
        currentSha: currentFile.sha,
        message: commitMessage,
    });

    await createPullRequest({
        owner: cfg.owner,
        repo: cfg.repo,
        base: cfg.baseBranch,
        head: branch,
        title: commitMessage,
        body: prBody ?? `Auto-generated from /update-content for ${slug}.`,
        token: cfg.token,
    });
}

export async function updateHuusennarareViaGithub(item: BaseItem) {
    const { slug, content, targetPath } = getValidatedHuusennararePayload(item);

    const cfg = getRepoConfig();
    if (!cfg) {
        console.error(
            "Missing GitHub config. Required: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO",
        );
        return;
    }

    try {
        await createEditCommitAndPr({
            slug,
            targetPath,
            content,
            cfg,
            branchPrefix: "edit/huusennarare",
            prBody: `Auto-generated from /update-content for ${slug}.`,
        });
    } catch (error) {
        console.error("Failed to auto-create PR:", (error as Error).message);
    }
}

export async function updateGrammarViaGithub(slug: string, content: string) {
    const targetPath = path.join("app", "grammar", "n1", slug, "flash-card", "cards.ts");

    const cfg = getRepoConfig();
    if (!cfg) {
        console.error(
            "Missing GitHub config. Required: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO",
        );
        return;
    }

    try {
        await createEditCommitAndPr({
            slug,
            targetPath,
            content,
            cfg,
            branchPrefix: "edit/grammar",
            prBody: `Auto-generated grammar update for ${slug}.`,
        });
    } catch (error) {
        console.error("Failed to auto-create grammar PR:", (error as Error).message);
    }
}
