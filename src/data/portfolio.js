export const personalInfo = {
  name: "Akhilesh Mekarthi",
  role: "Full Stack Developer",
  tagline: "Building scalable, high-performance web applications",
  summary: "Full Stack Engineer with 2+ years of experience building scalable, high-performance web applications in production environments. Proficient in React.js and Node.js with a strong foundation in Data Structures & Algorithms, system design, and database optimization. Track record of reducing manual effort and improving response times through thoughtful architecture and clean code.",
  strengths: [
    "Scalable System Design",
    "Real-Time Systems",
    "Clean Architecture",
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
    items: ["React.js", "HTML5", "CSS3", "jQuery", "Bootstrap", "Redux"]
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
    items: ["Firebase FCM", "Redis", "Socket.io", "Git", "REST APIs"]
  },
  {
    category: "Languages",
    icon: "💻",
    color: "#f59e0b",
    items: ["JavaScript", "Python", "Java", "C++"]
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
    title: "Real-Time Notification System",
    description: "Push notification platform with token-based delivery and background service workers for reliable message handling across hospital workflows.",
    tech: ["Firebase FCM", "Service Workers", "JavaScript", "Node.js"],
    features: ["Token-based delivery", "Background sync", "Delivery receipts", "Multi-device support"],
    color: "#3b82f6",
    icon: "🔔",
    github: "https://github.com/akhileshmekarthi",
    demo: "#",
    category: "Backend"
  },
  {
    title: "Hospital Management System",
    description: "Full-stack system covering billing, reporting, and authentication modules for end-to-end hospital operations serving 1,000+ daily transactions.",
    tech: ["PHP", "MySQL", "JavaScript", "REST APIs"],
    features: ["Billing automation", "Patient records", "Role-based auth", "Real-time reports"],
    color: "#8b5cf6",
    icon: "🏥",
    github: "https://github.com/akhileshmekarthi",
    demo: "#",
    category: "Full Stack"
  },
  {
    title: "Patient Portal Dashboard",
    description: "Secure OTP-authenticated portal for patients to view lab, radiology, and diagnostic reports in real time with role-based access control.",
    tech: ["React.js", "Node.js", "OTP Auth", "MySQL"],
    features: ["OTP authentication", "Real-time reports", "Radiology viewer", "Mobile responsive"],
    color: "#06b6d4",
    icon: "🩺",
    github: "https://github.com/akhileshmekarthi",
    demo: "#",
    category: "Full Stack"
  },
  {
    title: "URL Shortener",
    description: "High-performance URL shortener with Redis caching for sub-millisecond redirect resolution at scale with analytics and click tracking.",
    tech: ["Node.js", "Redis", "Express.js", "MySQL"],
    features: ["Sub-ms redirects", "Click analytics", "Custom slugs", "Redis caching"],
    color: "#10b981",
    icon: "🔗",
    github: "https://github.com/akhileshmekarthi",
    demo: "#",
    category: "Backend"
  },
  {
    title: "Real-Time Chat App",
    description: "Bidirectional messaging application with persistent storage via Firebase and live updates through WebSockets for seamless communication.",
    tech: ["Socket.io", "Firebase", "React.js", "Node.js"],
    features: ["Real-time messaging", "Persistent history", "Typing indicators", "Online presence"],
    color: "#f59e0b",
    icon: "💬",
    github: "https://github.com/akhileshmekarthi",
    demo: "#",
    category: "Full Stack"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack store with product catalog, cart management, and integrated payment gateway processing with inventory management.",
    tech: ["React", "Node.js", "Payment API", "MySQL"],
    features: ["Product catalog", "Cart & checkout", "Payment gateway", "Order tracking"],
    color: "#ef4444",
    icon: "🛒",
    github: "https://github.com/akhileshmekarthi",
    demo: "#",
    category: "Full Stack"
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
