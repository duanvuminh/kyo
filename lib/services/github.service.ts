import {
    RepoConfig,
    createBranch,
    createPullRequest,
    getBaseBranchSha,
    getFileContent,
    getRepoConfig,
    updateFileInBranch,
} from "@/lib/repositories/github.repository";
import type { ContentSection } from "@/lib/content-section";
import path from "node:path";

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

export async function updateCardsFileViaGithub(
    section: ContentSection,
    level: string,
    slug: string,
    content: string,
): Promise<void> {
    const targetPath = path.join("app", section, level, slug, "flash-card", "cards.ts");

    const cfg = getRepoConfig();
    if (!cfg) {
        throw new Error(
            "Missing GitHub config. Required: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO",
        );
    }

    await createEditCommitAndPr({
        slug,
        targetPath,
        content,
        cfg,
        branchPrefix: `edit/${section}`,
        prBody: `Auto-generated ${section} update for ${slug}.`,
    });
}

export async function updatePageFileViaGithub(
    section: ContentSection,
    level: string,
    slug: string,
    content: string,
): Promise<void> {
    const targetPath = path.join("app", section, level, slug, "page.mdx");

    const cfg = getRepoConfig();
    if (!cfg) {
        throw new Error(
            "Missing GitHub config. Required: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO",
        );
    }

    await createEditCommitAndPr({
        slug,
        targetPath,
        content,
        cfg,
        branchPrefix: `edit/${section}-page`,
        prBody: `Auto-generated ${section} page update for ${slug}.`,
    });
}
