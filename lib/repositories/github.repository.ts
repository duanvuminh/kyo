import { apiFetch } from "@/lib/api-fetch";
import { env } from "@/lib/env";

export type RepoConfig = {
    owner: string;
    repo: string;
    token: string;
    baseBranch: string;
};

export type FileContentResponse = {
    sha: string;
    content: string;
};

export function getRepoConfig(): RepoConfig | null {
    const { GITHUB_TOKEN: token, GITHUB_OWNER: owner, GITHUB_REPO: repo, GITHUB_BASE_BRANCH: baseBranch } = env;

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
    const res = await apiFetch(url, {
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

export async function getBaseBranchSha(cfg: RepoConfig): Promise<string> {
    const data = await githubRequest<{ object: { sha: string } }>(
        `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/git/ref/heads/${cfg.baseBranch}`,
        cfg.token,
    );
    return data.object.sha;
}

export async function createBranch(cfg: RepoConfig, branchName: string, sha: string) {
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

export async function getFileContent(
    cfg: RepoConfig,
    targetPath: string,
): Promise<FileContentResponse> {
    const encodedPath = toGitHubPath(targetPath);
    return githubRequest<FileContentResponse>(
        `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${encodedPath}?ref=${cfg.baseBranch}`,
        cfg.token,
    );
}

export async function updateFileInBranch({
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

export async function createPullRequest({
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
