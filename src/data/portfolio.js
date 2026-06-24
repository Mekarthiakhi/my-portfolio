export const personalInfo = {
  name: "Akhilesh Mekarthi",
  role: "Frontend & Full Stack Developer",
  tagline: "Building scalable, high-performance web applications & healthcare solutions",
  summary: "Full Stack Engineer with 2+ years of experience building scalable, high-performance web applications in production environments. Proficient in React.js, Node.js, and modern frontend technologies with a strong foundation in Data Structures & Algorithms, system design, and database optimization. Track record of reducing manual effort and improving response times through thoughtful architecture and clean code at Medicover Hospitals.",
  strengths: [
    "Scalable System Design",
    "Real-Time Systems",
    "Clean UI/UX Architecture",
    "Performance Optimization"
  ],
  email: "akhileshmekarthi74@gmail.com",
  phone: "+91 7347234445",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/akhilesh-mekarthi-a62501227/",
  github: "https://github.com/Mekarthiakhi",
  leetcode: "https://leetcode.com/akhileshmekarthi",
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "#3b82f6",
    items: ["React.js", "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "DataTables", "Redux"]
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#8b5cf6",
    items: ["Node.js", "PHP", "REST APIs", "Express.js", "WebSockets"]
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "#06b6d4",
    items: ["MySQL", "Query Optimization", "Indexing", "Database Design"]
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    color: "#10b981",
    items: ["Firebase FCM", "Redis", "Socket.io", "Git", "Vite"]
  },
  {
    category: "Languages",
    icon: "💻",
    color: "#f59e0b",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "C++"]
  },
  {
    category: "Core Concepts",
    icon: "🧠",
    color: "#ef4444",
    items: ["DSA", "OOP", "System Design", "Caching", "Load Balancing"]
  }
];

export const experience = [
  {
    role: "Software Developer",
    company: "Medicover Hospitals",
    location: "Hyderabad",
    period: "Jan 2024 – Present",
    type: "Full-time",
    description: "Building and maintaining production-grade hospital management systems serving thousands of patients daily.",
    achievements: [
      {
        metric: "1,000+",
        label: "Daily Transactions",
        detail: "Developed and maintained scalable hospital management systems processing 1,000+ daily transactions with high availability."
      },
      {
        metric: "~40%",
        label: "Effort Reduction",
        detail: "Built automated billing modules that reduced manual processing effort by approximately 40%, improving operational efficiency."
      },
      {
        metric: "~30%",
        label: "DB Performance Boost",
        detail: "Optimized complex SQL queries with indexing strategies, achieving a ~30% improvement in database response time."
      },
      {
        metric: "React + Node",
        label: "Architecture Migration",
        detail: "Led migration of legacy monolithic applications to a modern React.js + Node.js architecture, improving maintainability and performance."
      },
      {
        metric: "Real-time",
        label: "Push Notifications",
        detail: "Designed and implemented a real-time push notification system (Firebase FCM) and secure OTP-based authentication for patient workflows."
      }
    ]
  }
];

export const projects = [
  {
    title: "Auto Job Apply Bot",
    description: "High-performance automated job application bot built with TypeScript that automates and optimizes the job hunting process, auto-filling listings and tracking applications.",
    tech: ["TypeScript", "Node.js", "Puppeteer", "Git"],
    features: ["Automated Form Filling", "Application Status Tracking", "Custom Selector Mapping", "Headless/Headful Modes"],
    color: "#3178c6",
    icon: "🤖",
    github: "https://github.com/Mekarthiakhi/autoJobApply",
    demo: "#",
    category: "Backend / Automation"
  },
  {
    title: "DSA Practice Visualizer",
    description: "An interactive algorithm and data structure visualizer designed to help developers practice and master DSA concepts through real-time step-by-step code execution tracing.",
    tech: ["TypeScript", "React", "Framer Motion", "Vite"],
    features: ["Visual Call Stack Tracing", "Interactive Code Step Execution", "Custom Data Input Testing", "Animated Graph & Tree Traversals"],
    color: "#3b82f6",
    icon: "📊",
    github: "https://github.com/Mekarthiakhi/DSA-practice-visual",
    demo: "#",
    category: "Frontend"
  },
  {
    title: "Compliance Graph Visualizer",
    description: "A dynamic force-directed relationship graph representing medical compliance rules, hierarchies, nodes, and parent-child dependencies inside healthcare systems.",
    tech: ["JavaScript", "D3.js", "React", "SVG Rendering"],
    features: ["Force-Directed Node Graph", "Interactive Hierarchical Drilling", "Dynamic Live Search & Filters", "Dependency Conflict Alerts"],
    color: "#f1e05a",
    icon: "🕸️",
    github: "https://github.com/Mekarthiakhi/ComplianceGraph",
    demo: "#",
    category: "Frontend"
  },
  {
    title: "Real-Time Chat App",
    description: "A secure bidirectional messaging application featuring online presence tracking, typing indicators, and persistent chat history with a responsive glassmorphic layout.",
    tech: ["Socket.io", "Firebase", "React.js", "Node.js"],
    features: ["Real-time Messaging", "Persistent History", "Typing Indicators", "Online Presence Status"],
    color: "#f59e0b",
    icon: "💬",
    github: "https://github.com/Mekarthiakhi/Chat-App",
    demo: "https://chat-app-d3uk.onrender.com",
    category: "Full Stack"
  },
  {
    title: "DealScout AI Dashboard",
    description: "An AI-powered product deals aggregator and comparison dashboard that integrates multiple live e-commerce APIs to fetch and sort deals in real time.",
    tech: ["React", "Node.js", "AI APIs", "Vite"],
    features: ["AI Product Comparison", "Real-time Deal Fetching", "Secure API Integration", "Dynamic responsive layout"],
    color: "#ec4899",
    icon: "🛍️",
    github: "https://github.com/Mekarthiakhi/dealScout",
    demo: "https://dealscout-1-oz24.onrender.com/",
    category: "Frontend"
  },
  {
    title: "Loan Management System",
    description: "A robust financial dashboard tracking loans, interest rates, payments, and metrics. Integrates full spreadsheet imports/exports and automated interest math.",
    tech: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    features: ["Complex Interest Calculations", "CSV/Excel Export Functionality", "Real-Time Analytics Dashboard", "Dark Mode UI"],
    color: "#14b8a6",
    icon: "💰",
    github: "https://github.com/Mekarthiakhi/loan-app",
    demo: "https://loan-app-chi-seven.vercel.app/",
    category: "Full Stack"
  },
  {
    title: "Real-Time Notification System",
    description: "Push notification platform with token-based delivery and background service workers for reliable message handling across hospital workflows at Medicover.",
    tech: ["Firebase FCM", "Service Workers", "JavaScript", "Node.js"],
    features: ["Token-based delivery", "Background sync", "Delivery receipts", "Multi-device support"],
    color: "#3b82f6",
    icon: "🔔",
    github: "https://github.com/Mekarthiakhi",
    demo: "#",
    category: "Backend"
  },
  {
    title: "Patient Portal Dashboard",
    description: "Secure OTP-authenticated portal for patients to view lab, radiology, and diagnostic reports in real time with role-based access control.",
    tech: ["React.js", "Node.js", "OTP Auth", "MySQL"],
    features: ["OTP authentication", "Real-time reports", "Radiology viewer", "Mobile responsive"],
    color: "#06b6d4",
    icon: "🩺",
    github: "https://github.com/Mekarthiakhi",
    demo: "#",
    category: "Full Stack"
  },
  {
    title: "Antigravity Portfolio",
    description: "An immersive, award-winning 3D portfolio featuring a custom weightless physics engine, Three.js holographic avatars, and futuristic UI design.",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    features: ["Custom 60FPS Physics Engine", "WebGL Particle Systems", "AI Voice Integration", "Immersive Audio Ambience"],
    color: "#8b5cf6",
    icon: "🌌",
    github: "https://github.com/Mekarthiakhi/my-portfolio",
    demo: "#",
    category: "Frontend"
  }
];

export const education = {
  degree: "B.Tech – Computer Science",
  university: "Chandigarh University",
  period: "2019 – 2023",
  gpa: "7.3 / 10"
};

export const awards = [
  "Multiple Medals – Science Olympiads",
  "Runner-up – District Cricket Tournament"
];

export const dsaStats = {
  solved: "300+",
  platform: "LeetCode",
  topics: ["Arrays", "Strings", "Trees", "Graphs", "Dynamic Programming"],
  strengths: ["Big-O Time & Space Complexity", "Optimal Problem Solving", "Pattern Recognition"]
};
