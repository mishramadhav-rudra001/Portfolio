/**
 * Centralized Portfolio Data Configuration for Madhav Mishra
 * Update all personal details, skills, projects, and links here.
 */

export const personalInfo = {
  name: "Madhav Mishra",
  initials: "MM",
  headline: "Building Software. Exploring Intelligence. Understanding Security.",
  designation: "Aspiring Software Developer | AI/ML Enthusiast | Cybersecurity Learner",
  heroGreeting: "Hi, I'm Madhav Mishra.",
  shortIntro: "I'm Madhav Mishra, a BCA student passionate about technology, software engineering, artificial intelligence, and cybersecurity. I enjoy exploring how technology works, developing my programming skills, understanding intelligent systems, and learning how to build secure and useful digital solutions.",
  aboutIntro: "I am a Bachelor of Computer Applications (BCA) student at IGNOU, deeply driven by the mechanisms that power our digital world. Rather than viewing software engineering, artificial intelligence, and cybersecurity as isolated silos, I explore them as interconnected disciplines that make modern technology resilient, intelligent, and useful.",
  email: "mishramadhav03@gmail.com",
  phone: "8340111208",
  location: "India",
  status: "Open to Internships & Junior Roles",
  resumePath: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/mishramadhav-rudra001",
    linkedin: "https://www.linkedin.com/in/madhav-kumar-1a9b84238/",
    email: "mailto:mishramadhav03@gmail.com",
  },
  pillars: [
    {
      title: "Software Development",
      color: "from-blue-500 to-cyan-500",
      accent: "#3B82F6",
      short: "Engineering reliable, modern web applications & scalable software."
    },
    {
      title: "AI & Machine Learning",
      color: "from-purple-500 to-indigo-500",
      accent: "#8B5CF6",
      short: "Exploring intelligent algorithms, data patterns & neural networks."
    },
    {
      title: "Cybersecurity",
      color: "from-emerald-500 to-teal-500",
      accent: "#10B981",
      short: "Understanding systems, networking protocols & digital defense."
    }
  ]
};

export const aboutHighlights = [
  {
    label: "Education",
    value: "BCA Student",
    subtext: "IGNOU (Ongoing)",
    icon: "GraduationCap",
    accent: "blue"
  },
  {
    label: "Primary Focus",
    value: "Software Dev",
    subtext: "Full-Stack & Systems",
    icon: "Code",
    accent: "cyan"
  },
  {
    label: "Exploring",
    value: "AI / ML",
    subtext: "Data & Intelligent Models",
    icon: "Cpu",
    accent: "purple"
  },
  {
    label: "Special Interest",
    value: "Cybersecurity",
    subtext: "Linux, Networks & Defense",
    icon: "ShieldCheck",
    accent: "emerald"
  }
];

export const coreDomains = [
  {
    id: "software-dev",
    title: "Software Development",
    tagline: "Building Software Solutions",
    accentColor: "#3B82F6",
    accentClass: "blue",
    glowClass: "glow-blue",
    borderGradient: "from-blue-500/50 via-cyan-500/20 to-transparent",
    bgGradient: "from-blue-950/30 to-slate-900/40",
    icon: "Code2",
    description: "Exploring software engineering, programming, and building modern digital applications that solve real-world problems. Focused on writing clean, modular code and understanding robust application architectures.",
    topics: [
      "Python",
      "JavaScript",
      "HTML & CSS",
      "MERN Stack (React, Node, Express, MongoDB)",
      "Software Engineering Principles",
      "Data Structures & Algorithms",
      "RESTful API Architecture"
    ],
    codePreview: `// Software Architecture Blueprint
const createService = (config) => {
  return {
    async process(data) {
      const validated = await schema.validate(data);
      return database.save(validated);
    }
  };
};`
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    tagline: "Exploring Intelligent Systems",
    accentColor: "#8B5CF6",
    accentClass: "purple",
    glowClass: "glow-purple",
    borderGradient: "from-purple-500/50 via-indigo-500/20 to-transparent",
    bgGradient: "from-purple-950/30 to-slate-900/40",
    icon: "BrainCircuit",
    description: "Exploring intelligent systems, machine learning concepts, and how data can be transformed into meaningful insights and useful applications. Learning the mathematical and practical intuition behind neural networks.",
    topics: [
      "Python for Machine Learning",
      "Artificial Intelligence Fundamentals",
      "Machine Learning Algorithms (Supervised/Unsupervised)",
      "Data Science & Exploration",
      "Neural Network Architectures",
      "Intelligent Applications & Automation"
    ],
    codePreview: `# Machine Learning Pipeline Exploration
import numpy as np
from sklearn.model_selection import train_test_split

class IntelligentModel:
    def fit_pipeline(self, features, labels):
        X_train, X_test = train_test_split(features, test_size=0.2)
        return "Model trained on resilient patterns"`
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Systems",
    tagline: "Understanding Digital Security",
    accentColor: "#10B981",
    accentClass: "emerald",
    glowClass: "glow-emerald",
    borderGradient: "from-emerald-500/50 via-teal-500/20 to-transparent",
    bgGradient: "from-emerald-950/30 to-slate-900/40",
    icon: "ShieldAlert",
    description: "Understanding how digital systems work, identifying security vulnerabilities, and learning how applications and networks can be protected against modern threat vectors.",
    topics: [
      "Linux Fundamentals & Administration",
      "Bash Scripting & Automation",
      "Networking Fundamentals (TCP/IP, OSI, DNS)",
      "Cybersecurity Fundamentals",
      "Ethical Hacking Concepts",
      "Information Security & Defense-in-Depth"
    ],
    codePreview: `#!/usr/bin/env bash
# Security reconnaissance & host verification
TARGET="127.0.0.1"
echo "[+] Probing baseline system defenses..."
netstat -tuln | grep LISTEN
iptables -L -n -v`
  }
];

export const technicalSkills = [
  {
    category: "Programming",
    icon: "Terminal",
    accent: "blue",
    skills: [
      { name: "Python", status: "Core Skill", note: "Scripting, Automation, ML Basics" },
      { name: "JavaScript", status: "Core Skill", note: "ES6+, Async, DOM, Modern Web" }
    ]
  },
  {
    category: "Web Development",
    icon: "Globe",
    accent: "cyan",
    skills: [
      { name: "HTML5", status: "Core Skill", note: "Semantic Structure, Accessibility" },
      { name: "CSS3 / Tailwind", status: "Core Skill", note: "Responsive Design, Glassmorphism" },
      { name: "React.js", status: "Core Skill", note: "Component Architecture, Hooks, State" },
      { name: "Node.js", status: "Actively Learning", note: "Backend Runtimes, Event-loop" },
      { name: "Express.js", status: "Actively Learning", note: "REST APIs, Middleware" },
      { name: "MongoDB", status: "Actively Learning", note: "NoSQL Schemas, Document Storage" }
    ]
  },
  {
    category: "Cybersecurity & Systems",
    icon: "Shield",
    accent: "emerald",
    skills: [
      { name: "Linux Fundamentals", status: "Core Skill", note: "CLI, Permissions, File Systems" },
      { name: "Bash Scripting", status: "Practiced", note: "Shell Automation, Process Management" },
      { name: "Networking Fundamentals", status: "Core Skill", note: "TCP/IP, Subnets, OSI Model, Ports" },
      { name: "Cybersecurity Fundamentals", status: "Actively Learning", note: "Threat Models, OWASP, Defense" },
      { name: "Ethical Hacking Concepts", status: "Actively Learning", note: "Recon, Vulnerability Scanning" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "Cpu",
    accent: "purple",
    skills: [
      { name: "Artificial Intelligence Basics", status: "Actively Learning", note: "Intelligent Agents, Search Algorithms" },
      { name: "Machine Learning Concepts", status: "Actively Learning", note: "Regression, Classification, Evaluation" },
      { name: "Data Science Intuition", status: "Actively Learning", note: "Data Cleaning, Exploratory Analysis" },
      { name: "Neural Network Fundamentals", status: "Actively Learning", note: "Perceptrons, Forward/Backprop Basics" }
    ]
  },
  {
    category: "Tools & Environments",
    icon: "Wrench",
    accent: "blue",
    skills: [
      { name: "Git", status: "Core Skill", note: "Version Control, Branching, Merging" },
      { name: "GitHub", status: "Core Skill", note: "Repositories, Collaboration, Workflows" },
      { name: "VS Code", status: "Core Skill", note: "Extensions, Debugging, Environment Setup" },
      { name: "Linux Terminal", status: "Core Skill", note: "Command Line Mastery & Tools" }
    ]
  }
];

export const learningPaths = [
  {
    domain: "Software Development",
    accent: "blue",
    icon: "Code",
    description: "Building scalable, maintainable, user-focused digital systems.",
    stages: [
      {
        title: "Programming Fundamentals",
        topics: "Variables, loops, control structures, OOP concepts in Python & JavaScript.",
        status: "Completed",
        level: "Phase 1"
      },
      {
        title: "Data Structures & Algorithms",
        topics: "Arrays, strings, linked lists, sorting, searching, time complexity analysis.",
        status: "In Progress",
        level: "Phase 2"
      },
      {
        title: "Full-Stack Web Development",
        topics: "React component architecture, state management, REST APIs, responsive CSS.",
        status: "In Progress",
        level: "Phase 3"
      },
      {
        title: "Databases & Persistence",
        topics: "Relational concepts vs NoSQL, schema modeling, MongoDB integration.",
        status: "Next Up",
        level: "Phase 4"
      },
      {
        title: "Software Engineering Principles",
        topics: "Testing, modular patterns, CI/CD pipelines, production deployment.",
        status: "Upcoming Horizon",
        level: "Phase 5"
      }
    ]
  },
  {
    domain: "Artificial Intelligence & ML",
    accent: "purple",
    icon: "Brain",
    description: "Unlocking patterns in data to engineer intelligent capabilities.",
    stages: [
      {
        title: "Python for AI & Computing",
        topics: "NumPy, data structures, algorithmic implementations, syntax fluency.",
        status: "Completed",
        level: "Phase 1"
      },
      {
        title: "Mathematical Foundations",
        topics: "Linear algebra intuition, basic calculus, probability, and statistics.",
        status: "In Progress",
        level: "Phase 2"
      },
      {
        title: "Classical Machine Learning",
        topics: "Supervised and unsupervised models, scikit-learn, metric evaluation.",
        status: "In Progress",
        level: "Phase 3"
      },
      {
        title: "Deep Learning Foundations",
        topics: "Neural network layers, activation functions, loss optimization, backpropagation.",
        status: "Next Up",
        level: "Phase 4"
      },
      {
        title: "Intelligent Applications",
        topics: "Model deployment, inference APIs, AI-driven automation systems.",
        status: "Upcoming Horizon",
        level: "Phase 5"
      }
    ]
  },
  {
    domain: "Cybersecurity & Systems",
    accent: "emerald",
    icon: "Shield",
    description: "Hardening operating environments and securing digital infrastructure.",
    stages: [
      {
        title: "Linux & Operating Systems",
        topics: "Process management, user permissions, shell commands, file hierarchy.",
        status: "Completed",
        level: "Phase 1"
      },
      {
        title: "Computer Networking",
        topics: "TCP/IP suite, DNS, HTTP/HTTPS, routing, subnets, packet capture concepts.",
        status: "In Progress",
        level: "Phase 2"
      },
      {
        title: "Security Fundamentals & OWASP",
        topics: "Authentication, authorization, common web attack vectors (SQLi, XSS).",
        status: "In Progress",
        level: "Phase 3"
      },
      {
        title: "Ethical Hacking Concepts",
        topics: "Reconnaissance techniques, port scanning, vulnerability discovery methodologies.",
        status: "Next Up",
        level: "Phase 4"
      },
      {
        title: "Practical Security Labs",
        topics: "Capture The Flag (CTF) challenges, network defense, system hardening drills.",
        status: "Upcoming Horizon",
        level: "Phase 5"
      }
    ]
  }
];

export const educationInfo = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Indira Gandhi National Open University (IGNOU)",
  type: "Undergraduate Degree",
  academicSession: "Active Enrollment",
  status: "Currently Pursuing",
  expectedGraduation: "2026",
  location: "India",
  description: "Comprehensive university degree curriculum spanning programming, computer architecture, databases, data structures, and computer networks.",
  coursework: [
    "Programming in Python & C",
    "Data Structures & Algorithms",
    "Computer Networks & Protocols",
    "Database Management Systems (DBMS)",
    "Operating Systems & Linux Concepts",
    "Web Development & Internet Technologies",
    "Object-Oriented Programming (OOP)",
    "Software Engineering Principles"
  ],
  keyTakeaways: [
    "Strong theoretical understanding of core computer science primitives",
    "Rigorous practice with algorithmic logic and mathematical fundamentals",
    "Balanced academic training paired with self-directed software development"
  ]
};

export const projectsData = [
  {
    id: "fullstack-portal",
    title: "Modern Web Application Architecture",
    category: "Software Development",
    categoryKey: "software",
    status: "In Active Development",
    isBlueprint: true,
    accent: "blue",
    description: "A full-featured responsive web application exploring MERN stack patterns, component hierarchy, secure client-side routing, and RESTful API integration.",
    architecture: "React.js + Tailwind CSS frontend coupled with Node/Express REST endpoints and MongoDB persistent storage.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/mishramadhav-rudra001",
    demoUrl: null,
    highlights: [
      "Modular component design with custom hooks",
      "Dynamic data binding and responsive UI states",
      "Secure API communication patterns"
    ]
  },
  {
    id: "ai-data-explorer",
    title: "Intelligent Data & ML Explorer",
    category: "AI / ML",
    categoryKey: "ai",
    status: "Under Research & Prototyping",
    isBlueprint: true,
    accent: "purple",
    description: "A Python-based exploratory environment for ingesting datasets, performing statistical analysis, and running baseline classification algorithms.",
    architecture: "Python analytical pipeline utilizing NumPy, Pandas, and scikit-learn for automated feature inspection.",
    techStack: ["Python", "Machine Learning", "Data Analysis", "NumPy", "Scikit-Learn"],
    githubUrl: "https://github.com/mishramadhav-rudra001",
    demoUrl: null,
    highlights: [
      "Exploratory data analysis and feature correlation",
      "Baseline supervised learning models",
      "Visualizing predictive classification boundaries"
    ]
  },
  {
    id: "network-recon-toolkit",
    title: "System & Network Reconnaissance Suite",
    category: "Cybersecurity",
    categoryKey: "cybersecurity",
    status: "Lab Prototype",
    isBlueprint: true,
    accent: "emerald",
    description: "A collection of Linux and Bash automation utilities created to analyze local network interfaces, check open listening ports, and review basic system hardening posture.",
    architecture: "Modular shell scripts leveraging native Linux networking utilities and security audit best practices.",
    techStack: ["Linux", "Bash Scripting", "Networking Protocols", "Security Auditing"],
    githubUrl: "https://github.com/mishramadhav-rudra001",
    demoUrl: null,
    highlights: [
      "Automated socket and port audit scripts",
      "DNS resolution and packet path tracing",
      "System baseline permission checking"
    ]
  }
];

export const fallbackRepos = [
  {
    name: "Software-Engineering-Labs",
    description: "Core algorithms, data structure experiments, and modern JavaScript / Python solutions.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    stars: 0,
    forks: 0,
    html_url: "https://github.com/mishramadhav-rudra001"
  },
  {
    name: "AI-ML-Explorations",
    description: "Foundational machine learning exercises, data science prototypes, and Python algorithms.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 0,
    forks: 0,
    html_url: "https://github.com/mishramadhav-rudra001"
  },
  {
    name: "Cybersecurity-Networking-Notes",
    description: "Hands-on Linux shell scripts, networking protocol experiments, and system security practices.",
    language: "Shell",
    languageColor: "#89E051",
    stars: 0,
    forks: 0,
    html_url: "https://github.com/mishramadhav-rudra001"
  }
];
