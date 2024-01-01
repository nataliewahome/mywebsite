// Profile Configuration
// This file contains all customizable profile data
// To create a new profile, simply update the values in this object

const profileConfig = {
    // Personal Information
    name: "Natalie Wahome",
    title: "Software/DevOps Engineer",
    subtitle: "Open Source Contributor",
    location: "",
    email: "walkernatalie614@gmail.com",
    phone: "", // Removed as requested
    
    // Education
    education: {
        institution: "Software/DevOps Engineering",
        degree: "Software/DevOps Engineering",
        status: "Professional"
    },
    
    // Current Work/Experience
    currentWork: {
        show: false, // Set to true if you want to show current work
        company: "",
        description: "",
        link: ""
    },
    
    // Skills and Technologies
    skills: [
        "Kubernetes",
        "Docker",
        "Helm",
        "AWS",
        "Azure",
        "GCP",
        "Terraform",
        "CI/CD",
        "Jenkins",
        "GitLab CI",
        "GitHub Actions",
        "Ansible",
        "Python",
        "Bash",
        "Linux",
        "Git/GitHub"
    ],
    
    // Experience (years calculation)
    experience: {
        startDate: "January 1 2019 00:00", // Format: "Month Day Year HH:MM"
        show: true
    },
    
    // Interests/Hobbies
    interests: [
        "Open Source Contributions",
        "Kubernetes Ecosystem",
        "DevOps Practices",
        "Cloud Infrastructure",
        "Container Technologies",
        "Infrastructure Automation",
        "CI/CD Pipelines"
    ],
    
    // Social Media Links
    social: {
        github: "https://github.com/nataliewahome",
        linkedin: "", // Add if available
        medium: "", // Add if available
        twitter: "", // Add if available
        email: "walkernatalie614@gmail.com"
    },
    
    // Open Source Contributions
    openSource: {
        highlight: true,
        description: "Active contributor to Kubernetes and DevOps projects. Passionate about container orchestration, infrastructure automation, and building scalable cloud solutions. Contributing to Helm and Kubernetes ecosystem projects.",
        projects: [
            {
                name: "helm",
                description: "Contributing to Helm - The Kubernetes Package Manager, helping improve package management and deployment workflows for Kubernetes applications",
                link: "https://github.com/nataliewahome/helm"
            },
            {
                name: "ingress-nginx",
                description: "Working on Ingress NGINX Controller for Kubernetes - contributing to ingress management and load balancing capabilities",
                link: "https://github.com/nataliewahome/ingress-nginx"
            },
            {
                name: "Kubernetes Projects",
                description: "Contributing to various Kubernetes ecosystem projects - focusing on container orchestration and cloud infrastructure",
                link: "https://github.com/nataliewahome"
            }
        ]
    },
    
    // Typed.js Terminal Messages
    terminal: {
        skillSetQuestion: "Skill Set?",
        experienceQuestion: "Experience?",
        interestsQuestion: "My Interests?",
        coolStuffQuestion: "Open Source Contributions?"
    },
    
    // SEO Meta Tags
    seo: {
        description: "Natalie Wahome, Software/DevOps Engineer specializing in Cloud Computing and Kubernetes. Building scalable infrastructure solutions and contributing to open source DevOps projects.",
        keywords: "Natalie Wahome, Software Engineer, DevOps Engineer, Kubernetes, Docker, Helm, AWS, Azure, GCP, CI/CD, Terraform, Ansible, Open Source",
        author: "Natalie Wahome"
    },
    
    // Additional Info
    additionalInfo: "Passionate Software/DevOps Engineer with expertise in Kubernetes, cloud infrastructure, and DevOps practices. Committed to building scalable infrastructure solutions and automating deployment workflows. Active open source contributor focused on Kubernetes ecosystem projects including Helm and Ingress NGINX."
};

