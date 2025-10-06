// Import siteConfig for the utility function
import { siteConfig } from '../config';

export function createSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
        .replace(/\s+/g, '-')      // Replace spaces with hyphens
        .replace(/-+/g, '-')       // Replace multiple hyphens with single hyphen
        .trim()                    // Remove leading/trailing spaces
        .replace(/^-+|-+$/g, '');  // Remove leading/trailing hyphens
}

export function getProjectBySlug(slug: string) {
    return siteConfig.projects.find(project => createSlug(project.name) === slug);
}