/**
 * Get the GitHub repository URL from project data
 * @param project - Project configuration object
 * @returns GitHub URL or null
 */
export function getGitHubUrlFromProject(project: any): string | null {
    // Check if main link is GitHub
    if (project.link && project.link.includes('github.com')) {
        return project.link;
    }

    // Check if githubLink is available
    if (project.githubLink && project.githubLink.includes('github.com')) {
        return project.githubLink;
    }

    return null;
}

/**
 * Extract GitHub repository information from URL
 * @param githubUrl - GitHub repository URL
 * @returns Object with owner and repo, or null if invalid
 */
export function extractGitHubRepoInfo(githubUrl: string): { owner: string; repo: string } | null {
    try {
        const url = new URL(githubUrl);
        if (url.hostname !== 'github.com') return null;

        const pathParts = url.pathname.split('/').filter(Boolean);
        if (pathParts.length < 2) return null;

        return {
            owner: pathParts[0],
            repo: pathParts[1]
        };
    } catch {
        return null;
    }
}

/**
 * Get the raw README URL from GitHub repository URL
 * @param githubUrl - GitHub repository URL
 * @returns Raw README URL or null if invalid
 */
export function getRawReadmeUrl(githubUrl: string): string | null {
    const repoInfo = extractGitHubRepoInfo(githubUrl);
    if (!repoInfo) return null;

    return `https://raw.githubusercontent.com/${repoInfo.owner}/${repoInfo.repo}/main/README.md`;
}

/**
 * Fetch README content from GitHub and convert to HTML
 * @param githubUrl - GitHub repository URL
 * @returns Promise resolving to HTML content or fallback message
 */
export async function fetchGitHubReadme(githubUrl: string): Promise<string> {
    try {
        const rawUrl = getRawReadmeUrl(githubUrl);
        if (!rawUrl) {
            throw new Error('Invalid GitHub URL');
        }

        const response = await fetch(rawUrl);
        if (!response.ok) {
            // Try with master branch if main fails
            const masterUrl = rawUrl.replace('/main/', '/master/');
            const masterResponse = await fetch(masterUrl);
            if (!masterResponse.ok) {
                throw new Error('README not found');
            }
            const markdown = await masterResponse.text();
            const { marked } = await import('marked');
            const { JSDOM } = await import('jsdom');
            const { default: DOMPurify } = await import('dompurify');
            const window = new JSDOM('').window;
            const DOMPurifyInstance = DOMPurify(window);
            const html = await marked(markdown);
            return DOMPurifyInstance.sanitize(html);
        }

        const markdown = await response.text();
        const { marked } = await import('marked');
        const { JSDOM } = await import('jsdom');
        const { default: DOMPurify } = await import('dompurify');
        const window = new JSDOM('').window;
        const DOMPurifyInstance = DOMPurify(window);
        const html = await marked(markdown);
        return DOMPurifyInstance.sanitize(html);
    } catch (error) {
        console.warn('Failed to fetch README:', error);
        return `
            <div class="text-center py-8">
                <h3 class="text-xl font-semibold mb-4">README Not Available</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                    Unable to load README from GitHub. The repository might be private or the README file might not exist.
                </p>
                <a href="${githubUrl}" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                    View Repository on GitHub →
                </a>
            </div>
        `;
    }
}