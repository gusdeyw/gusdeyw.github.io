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