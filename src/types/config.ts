export interface ProjectConfig {
    name: string;
    description: string;
    link: string;
    linkType: 'demo' | 'github' | 'external';
    githubLink?: string; // Optional GitHub repository link for demo projects
    skills: string[];
    detailedContent?: string; // Optional detailed HTML content for project pages
}

export interface SocialConfig {
    email: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
}

export interface ExperienceConfig {
    company: string;
    title: string;
    dateRange: string;
    bullets: string[];
}

export interface EducationConfig {
    school: string;
    degree: string;
    dateRange: string;
    achievements: string[];
}

export interface SiteConfig {
    name: string;
    title: string;
    description: string;
    accentColor: string;
    site?: string; // Base URL for SEO and canonical links
    social: SocialConfig;
    aboutMe: string;
    skills: string[];
    projects: ProjectConfig[];
    experience: ExperienceConfig[];
    education: EducationConfig[];
}