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
      fetchReadme: true,
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
      link: "https://github.com/gusdeyw/go-htmlemail",
      linkType: "github",
      skills: ["Golang", "HTML", "Email Templates", "Go Modules"],
      fetchReadme: true,
    },
    {
      name: "JSONLog - Go Package",
      description:
        "A lightweight Go package for structured JSON logging with support for multiple log levels, custom fields, and flexible output formatting. Simplifies logging in Go applications with an intuitive API and zero external dependencies.",
      link: "https://github.com/gusdeyw/jsonlog-go",
      linkType: "github",
      skills: ["Golang", "Logging", "JSON", "Go Modules"],
      fetchReadme: true,
    },
    {
      name: "PGBridge-Go",
      description:
        "A lightweight, production-ready payment gateway bridge built with Go. Integrates with Midtrans and supports secure payment flows, webhooks, QR code generation, and Docker deployment with Swagger API documentation.",
      link: "https://github.com/gusdeyw/pgbridge-go",
      linkType: "github",
      skills: ["Golang", "Fiber", "Docker", "Payment Gateway", "Swagger", "Midtrans"],
      fetchReadme: true,
      detailedContent: `
        <h2>💳 PGBridge-Go - Payment Gateway Bridge</h2>

        <p>A production-ready payment gateway bridge built with Go that integrates with Midtrans payment gateway.</p>

        <h3>✨ Features</h3>
        <ul>
          <li>🔒 Secure payment processing</li>
          <li>🪝 Webhook handling</li>
          <li>📱 QR code generation</li>
          <li>🐳 Docker deployment ready</li>
          <li>📚 Swagger API documentation</li>
        </ul>

        <p><em>This project uses manual content instead of fetching README from GitHub.</em></p>
      `,
    },
    {
      name: "Laravel API Sanctum Boilerplate",
      description:
        "Comprehensive Laravel API boilerplate with Sanctum authentication, featuring user management, post CRUD operations, weather API integration, email system, and comprehensive testing. Built with Laravel 12 and includes 94+ tests with 98.6% pass rate.",
      link: "https://github.com/gusdeyw/laravel-api-sanctum-boilerplate",
      linkType: "github",
      skills: ["Laravel", "PHP", "Sanctum", "MySQL", "Redis", "PHPUnit", "API"],
      fetchReadme: true,
    },
    {
      name: "Spring Vacancy Management",
      description:
        "Java Spring Boot application for vacancy and candidate management with intelligent ranking system. Features MongoDB integration, Docker deployment, comprehensive REST API, and smart candidate scoring based on configurable criteria.",
      link: "https://github.com/gusdeyw/spring-vacancy",
      linkType: "github",
      skills: ["Java", "Spring Boot", "MongoDB", "Docker", "Maven", "REST API"],
      fetchReadme: true,
    },
    {
      name: "Litepicker (Enhanced Fork)",
      description:
        "Enhanced fork of the lightweight date range picker with no dependencies. Added 'Today' button functionality to calendar footer UI, maintaining compatibility with multiple browsers and mobile devices while supporting plugins and keyboard accessibility.",
      link: "https://github.com/gusdeyw/Litepicker",
      linkType: "github",
      skills: ["TypeScript", "JavaScript", "SCSS", "Date Picker", "Frontend"],
      fetchReadme: true,
    },
    {
      name: "ElvDoc - Document Management Library",
      description:
        "Go package for reading, writing, and manipulating .elv files, specifically designed for invoice management in the Elvoiz application. Provides easy-to-use API for parsing and generating structured document data with comprehensive file operations.",
      link: "https://github.com/elvoiz-enterprises/elvdoc",
      linkType: "github",
      skills: ["Golang", "File Processing", "Document Management", "API Design"],
      fetchReadme: true,
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
