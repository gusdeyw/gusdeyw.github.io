import type { SiteConfig } from './types/config';

export const siteConfig: SiteConfig = {
  name: "Gusde Widnyana",
  title: "Senior Developer & Full Stack Engineer",
  description: "Portfolio website of Gusde Widnyana - Senior Developer passionate about creating amazing applications",
  accentColor: "#1d4ed8",
  site: "https://gusdeyw.github.io",
  social: {
    email: "widnyana.bagus@gmail.com",
    linkedin: "https://www.linkedin.com/in/widnyana-masthara-67505b164/", // ⚠️ NEEDED: Your LinkedIn profile URL
    twitter: "#", // ⚠️ NEEDED: Your Twitter/X handle (optional)
    github: "https://github.com/gusdeyw", // ⚠️ NEEDED: Your GitHub username
  },
  aboutMe:
    "Love to create amazing applications, helping people to know the limitless technology around the world. Developing giant applications with thousands of databases interacting simultaneously. Experienced Full Stack Developer with expertise in modern web technologies and a passion for building scalable solutions.",
  skills: ["PHP", "Golang", "Node.js", "Laravel", "Vue.js", "React.js", "MySQL/MariaDB", "Docker", "Tailwind CSS", "Linux", "Git", "WordPress"],
  projects: [
    {
      name: "S-Console",
      description:
        "A lightweight, customizable JavaScript console library for web applications. Features built-in commands, multiple build formats (ESM, CJS, UMD, IIFE), and TypeScript support with customizable themes and fonts.",
      link: "https://gusdeyw.github.io/s-console/",
      linkType: "demo", // "demo" for live demo, "github" for GitHub repository, "external" for other links
      githubLink: "https://github.com/gusdeyw/s-console", // Optional: GitHub repository link
      skills: ["TypeScript", "Vite", "UnoCSS", "JavaScript"],
      detailedContent: `
        <div class="project-detail-content">
          <h2>🖥️ S-Console - Web Console Library</h2>
          
          <p>S-Console is a modern, lightweight JavaScript console library designed specifically for web applications. It provides developers with a powerful terminal-like interface that can be easily integrated into any web project.</p>

          <h3>✨ Key Features</h3>
          <ul>
            <li><strong>Lightweight & Fast</strong> - Minimal bundle size with maximum performance</li>
            <li><strong>Customizable Themes</strong> - Multiple built-in themes and full customization support</li>
            <li><strong>Built-in Commands</strong> - Pre-configured commands like <code>help</code>, <code>clear</code>, <code>version</code></li>
            <li><strong>Multiple Build Formats</strong> - ESM, CommonJS, UMD, and IIFE support</li>
            <li><strong>TypeScript Support</strong> - Full TypeScript definitions and type safety</li>
            <li><strong>Font Customization</strong> - Support for custom fonts and typography</li>
            <li><strong>Command History</strong> - Navigate through command history with arrow keys</li>
            <li><strong>Auto-completion</strong> - Smart command suggestions and tab completion</li>
          </ul>

          <h3>🚀 Quick Start</h3>
          <pre><code>// Install via npm
npm install s-console

// Basic usage
import { SConsole } from 's-console';

const console = new SConsole({
  container: '#console-container',
  theme: 'dark',
  font: 'Monaco, monospace'
});

console.addCommand('hello', () => {
  console.print('Hello, World!');
});</code></pre>

          <h3>🎨 Customization</h3>
          <p>S-Console offers extensive customization options:</p>
          <ul>
            <li><strong>Themes</strong>: Dark, Light, Matrix, Retro, and custom themes</li>
            <li><strong>Colors</strong>: Fully customizable color schemes</li>
            <li><strong>Fonts</strong>: Support for any web font or font family</li>
            <li><strong>Prompts</strong>: Customizable command prompts and styling</li>
          </ul>

          <h3>📦 Build Formats</h3>
          <p>The library is available in multiple formats to suit different project needs:</p>
          <ul>
            <li><strong>ESM</strong> - Modern ES modules for bundlers</li>
            <li><strong>CommonJS</strong> - Node.js compatible format</li>
            <li><strong>UMD</strong> - Universal module definition for browsers</li>
            <li><strong>IIFE</strong> - Immediately invoked function expression for direct browser use</li>
          </ul>

          <h3>🛠️ Technical Implementation</h3>
          <p>Built with modern web technologies:</p>
          <ul>
            <li><strong>TypeScript</strong> - Type-safe development and better IDE support</li>
            <li><strong>Vite</strong> - Fast build tool and development server</li>
            <li><strong>UnoCSS</strong> - Atomic CSS framework for styling</li>
            <li><strong>Rollup</strong> - Module bundler for production builds</li>
          </ul>

          <h3>🎯 Use Cases</h3>
          <ul>
            <li>Developer tools and debugging interfaces</li>
            <li>Interactive tutorials and documentation</li>
            <li>Game development consoles</li>
            <li>Administrative panels and dashboards</li>
            <li>Educational programming environments</li>
          </ul>

          <h3>🌟 Live Demo</h3>
          <p>Experience S-Console in action with the interactive demo showcasing all features, themes, and customization options.</p>
        </div>
      `,
    },
    {
      name: "Elvoiz - Invoice Management Expert",
      description:
        "Smart SaaS application handling invoices with template creation, editing, value adding, and advanced scheduling for professional businesses. Currently under development with planned release in Q1 2026.",
      link: "#", // ⚠️ NEEDED: Project URL when available
      linkType: "demo", // Will be updated when demo is available
      skills: ["Golang", "Vue.js", "MySQL", "Docker"],
    },
    {
      name: "HTMLEmail - Go Package",
      description:
        "A powerful and flexible Go package for generating dynamic HTML email content from templates. Features struct-based template population, multiple placeholder styles, HTML table generation, and CSS integration with comprehensive error handling.",
      link: "https://github.com/gusdeyw/htmlemail",
      linkType: "github",
      skills: ["Golang", "HTML", "Email Templates", "Go Modules"],
    },
    {
      name: "PGBridge-Go",
      description:
        "A lightweight, production-ready payment gateway bridge built with Go. Integrates with Midtrans and supports secure payment flows, webhooks, QR code generation, and Docker deployment with Swagger API documentation.",
      link: "https://github.com/gusdeyw/pgbridge-go",
      linkType: "github",
      skills: ["Golang", "Fiber", "Docker", "Payment Gateway", "Swagger", "Midtrans"],
    },
    {
      name: "Laravel API Sanctum Boilerplate",
      description:
        "Comprehensive Laravel API boilerplate with Sanctum authentication, featuring user management, post CRUD operations, weather API integration, email system, and comprehensive testing. Built with Laravel 12 and includes 94+ tests with 98.6% pass rate.",
      link: "https://github.com/gusdeyw/laravel-api-sanctum-boilerplate",
      linkType: "github",
      skills: ["Laravel", "PHP", "Sanctum", "MySQL", "Redis", "PHPUnit", "API"],
    },
    {
      name: "Spring Vacancy Management",
      description:
        "Java Spring Boot application for vacancy and candidate management with intelligent ranking system. Features MongoDB integration, Docker deployment, comprehensive REST API, and smart candidate scoring based on configurable criteria.",
      link: "https://github.com/gusdeyw/spring-vacancy",
      linkType: "github",
      skills: ["Java", "Spring Boot", "MongoDB", "Docker", "Maven", "REST API"],
    },
    {
      name: "Litepicker (Enhanced Fork)",
      description:
        "Enhanced fork of the lightweight date range picker with no dependencies. Added 'Today' button functionality to calendar footer UI, maintaining compatibility with multiple browsers and mobile devices while supporting plugins and keyboard accessibility.",
      link: "https://github.com/gusdeyw/Litepicker",
      linkType: "github",
      skills: ["TypeScript", "JavaScript", "SCSS", "Date Picker", "Frontend"],
    },
    {
      name: "ElvDoc - Document Management Library",
      description:
        "Go package for reading, writing, and manipulating .elv files, specifically designed for invoice management in the Elvoiz application. Provides easy-to-use API for parsing and generating structured document data with comprehensive file operations.",
      link: "https://github.com/elvoiz-enterprises/elvdoc",
      linkType: "github",
      skills: ["Golang", "File Processing", "Document Management", "API Design"],
    },
    // {
    //   name: "University Syllabus Management System",
    //   description:
    //     "Collaborative web application for managing university project applications serving campus administration. Created syllabus apps for lecturers with modern frameworks.",
    //   link: "#", // ⚠️ NEEDED: Project URL or demo link (optional)
    //   skills: ["Laravel", "Bootstrap", "jQuery", "MySQL"],
    // },
    // {
    //   name: "BVR Group Asia - Multi-Company Website Management",
    //   description:
    //     "Full Stack development controlling 18 company websites, maintaining performance and creating new company profile websites as Webmaster.",
    //   link: "", // ⚠️ NEEDED: Company website URL (optional)
    //   skills: ["PHP", "Laravel", "WordPress", "Tailwind", "React.js", "Firebase"],
    // },
  ],
  experience: [
    {
      company: "Cakrasoft Hotel System",
      title: "Senior Developer",
      dateRange: "2022 - Present",
      bullets: [
        "Started as backend developer using Golang and expanded to database management for MySQL, MariaDB, and PostgreSQL",
        "Contributed to frontend development in Vue 3.js and managed deployments with Docker, Nginx, and Linux on DigitalOcean",
        "Led code training, workshops, and client presentations while overseeing full development lifecycle from coding to deployment",
      ],
    },
    {
      company: "BVR Group Asia",
      title: "Webmaster",
      dateRange: "2021 - 2022",
      bullets: [
        "Worked as Full Stack website developer controlling 18 company websites and maintaining performance",
        "Created new company profile websites and managed all hosting access of company websites",
        "Developed using PHP, Laravel, Firebase, WordPress, Tailwind, jQuery, and ReactJS with MySQL database",
      ],
    },
    {
      company: "Instiki University",
      title: "Front End Developer",
      dateRange: "2020 - 2021",
      bullets: [
        "Collaborated with backend team to manage university project applications serving campus administration",
        "Created syllabus apps for lecturers using Laravel framework and Bootstrap with Admin Panel 5 Template",
        "Worked with jQuery for interactive features and MySQL for database management",
      ],
    },
    {
      company: "Self Employment",
      title: "Website Developer Freelance",
      dateRange: "2020 - Present",
      bullets: [
        "Working on freelance with project-based work, creating interactive websites connected to microcontrollers (Node MCU ESP32)",
        "Accept various projects from outsourcing using PHP, WordPress, Tailwind, jQuery, and MySQL",
        "Specialized in IoT integration and custom web solutions for diverse client needs",
      ],
    },
  ],
  education: [
    {
      school: "INSTIKI University",
      degree: "Bachelor of Technology Informatics",
      dateRange: "2018 - 2022",
      achievements: [
        "Graduated with GPA: 3.67",
        "Specialized in Technology Informatics with focus on web development",
        "Located in Bali, Indonesia",
      ],
    },
  ],
};
