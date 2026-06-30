export type ProjectCategory =
  | "All"
  | "AI"
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "Database"
  | "Mobile"
  | "Testing"
  | "C++"
  | "Python"
  | "React"
  | "Next.js"
  | "TypeScript"
  | "JavaScript"
  | "Desktop Application";

export type Project = {
  id: string;
  title: string;
  slug: string;
  categories: Exclude<ProjectCategory, "All">[];
  featured: boolean;
  description: string;
  overview: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  solutions: string[];
  gallery: string[];
  image: string;
  github?: string;
  live?: string;
  pdf?: string;
  tags: string[];
};

export const projectCategories: ProjectCategory[] = [
  "All",
  "AI",
  "Frontend",
  "Backend",
  "Full Stack",
  "Database",
  "Mobile",
  "Testing",
  "C++",
  "Python",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Desktop Application",
];

export const projects: Project[] = [
  {
    id: "pakvel",
    title: "Pakvel",
    slug: "pakvel",
    categories: ["Full Stack", "Mobile", "Database", "Next.js", "JavaScript"],
    featured: true,
    description:
      "A comprehensive vehicle management platform with real-time tracking, analytics dashboard, and fleet optimization.",
    overview:
      "Pakvel is a full-stack vehicle management system designed for logistics companies. It provides real-time GPS tracking, maintenance scheduling, fuel analytics, and driver performance metrics in a unified dashboard.",
    features: [
      "Real-time vehicle tracking with interactive maps",
      "Maintenance scheduling and alert system",
      "Fuel consumption analytics and reporting",
      "Driver performance scoring dashboard",
      "Role-based access control for admins and operators",
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS", "Chart.js"],
    challenges: [
      "Handling real-time data streams from multiple vehicles simultaneously",
      "Designing an intuitive dashboard for non-technical fleet managers",
    ],
    solutions: [
      "Implemented WebSocket connections with Socket.io for live updates",
      "Created modular dashboard widgets with drag-and-drop customization",
    ],
    gallery: [
      "/projects/pakvel/Traveller_dashboard_no_bg.png",
      "/projects/pakvel/AI_chat_bot_camera_no_bg.png",
      "/projects/pakvel/Active_trips_no_bg.png",
      "/projects/pakvel/Broker_add new itinerary.png",
      "/projects/pakvel/Broker_searh_filters_no_bg.png",
      "/projects/pakvel/Complete_trip_section_no_bg (1).png",
      "/projects/pakvel/Itinerary_generate_no_bg.png",
      "/projects/pakvel/Register_acc_page_no_bg.png",
      "/projects/pakvel/Review_section_no_bg.png",
      "/projects/pakvel/broker incoming request.png",
      "/projects/pakvel/trip_chat.png",
    ],
    image: "/projects/pakvel/Traveller_dashboard_no_bg.png",
    github: "https://github.com/kdmaheshwari12/FYP-Projects",
    live: "https://pakvel.vercel.app",
    pdf: "/projects/pakvel/pakvel-report.pdf",
    tags: ["Mern Stack", "Real-time", "Dashboard"],
  },
  {
    id: "recipe-generator",
    title: "Recipe Generator",
    slug: "recipe-generator",
    categories: ["Full Stack", "AI", "Database", "Next.js", "TypeScript"],
    featured: true,
    description:
      "AI-powered recipe generator that creates personalized recipes based on available ingredients and dietary preferences.",
    overview:
      "An intelligent recipe application leveraging OpenAI to generate creative, personalized recipes. Users input available ingredients and dietary restrictions to receive detailed recipes with step-by-step instructions.",
    features: [
      "AI-generated recipes from ingredient lists",
      "Dietary preference filtering (vegan, gluten-free, etc.)",
      "Nutritional information estimation",
      "Save and share favorite recipes",
      "Beautiful recipe card UI with images",
    ],
    techStack: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "MongoDB"],
    challenges: [
      "Crafting effective prompts for consistent, safe recipe output",
      "Managing API rate limits and response caching",
    ],
    solutions: [
      "Developed a structured prompt template system with validation",
      "Implemented Redis caching for frequently requested ingredient combinations",
    ],
    gallery: ["/projects/recipe-generator/Recipe Generator.jpg"],
    image: "/projects/recipe-generator/Recipe Generator.jpg",
    github: "hhttps://github.com/kdmaheshwari12/Recipe-Generator",
    live: "https://www.linkedin.com/posts/kundan-kumar-maheshwari_nextjs-tailwindcss-shadcn-activity-7358540265608953857-QCy5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEdPklQBOhCOzmEcx-PHIUVg5ZzdYkYs7u0",
    tags: ["AI", "OpenAI", "Full Stack"],
  },
  {
    id: "blog-summarizer",
    title: "Blog Summarizer",
    slug: "blog-summarizer",
    categories: ["AI", "Backend", "Python"],
    featured: true,
    description:
      "Intelligent blog summarization tool that extracts key insights from lengthy articles using NLP.",
    overview:
      "Blog Summarizer uses advanced NLP techniques to condense long-form articles into concise, actionable summaries while preserving key insights and context.",
    features: [
      "URL-based article extraction and summarization",
      "Adjustable summary length (brief, detailed, bullet points)",
      "Multi-language support",
      "Export summaries as PDF or Markdown",
      "Reading time estimation",
    ],
    techStack: ["React", "Python", "Flask", "OpenAI API", "Tailwind CSS"],
    challenges: [
      "Accurately extracting content from diverse blog layouts",
      "Maintaining context in shortened summaries",
    ],
    solutions: [
      "Built a robust HTML parser with fallback selectors for major CMS platforms",
      "Used chain-of-thought prompting for context-aware summarization",
    ],
    gallery: ["/projects/blog-1.jpg"],
    image: "/projects/blog-summarizer/Blog Summarizer.png",
    github: "https://github.com/kdmaheshwari12/Blog-summuraizer",
    tags: ["AI", "NLP", "Python"],
  },
  {
    id: "quote-generator",
    title: "Quote Generator",
    slug: "quote-generator",
    categories: ["AI", "Frontend", "Database", "Next.js", "TypeScript"],
    featured: true,
    description:
      "Elegant quote generator with beautiful typography, category filtering, and social sharing capabilities.",
    overview:
      "A visually stunning quote generator featuring curated collections, random quote discovery, and one-click social media sharing with auto-generated quote cards.",
    features: [
      "Curated quote collections by category and author",
      "Random quote with smooth animation transitions",
      "Auto-generated shareable quote cards",
      "Dark/light theme with glassmorphism UI",
      "Favorite quotes with local storage persistence",
    ],
    techStack: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Supabase"],
    challenges: [
      "Creating visually appealing shareable quote cards across devices",
      "Smooth animation performance on lower-end devices",
    ],
    solutions: [
      "Used html2canvas with optimized rendering pipeline for card generation",
      "Implemented GPU-accelerated CSS transforms for animations",
    ],
    gallery: ["/projects/quote-1.jpg"],
    image: "/projects/quote.jpg",
    github: "https://github.com/kdmaheshwari12/Quoate-Generator",
    live: "https://quote-gen.vercel.app",
    tags: ["Frontend", "UI/UX", "Animation"],
  },
  {
    id: "book-bank",
    title: "Book Bank Management System",
    slug: "book-bank-management",
    categories: ["Frontend", "Database", "JavaScript"],
    featured: true,
    description:
      "Complete library management system with book inventory, member tracking, and automated fine calculations.",
    overview:
      "A comprehensive book bank management system for educational institutions featuring inventory management, member registration, book lending/return workflows, and automated overdue fine calculations.",
    features: [
      "Book inventory with ISBN scanning support",
      "Member registration and profile management",
      "Automated lending and return workflows",
      "Overdue fine calculation engine",
      "Admin dashboard with analytics and reports",
    ],
    techStack: ["Reactjs", "Javascript", "Tailwind CSS", "Postgre"],
    challenges: [
      "Designing normalized database schema for complex lending rules",
      "Handling concurrent book reservations",
    ],
    solutions: [
      "Implemented optimistic locking for concurrent reservation handling",
      "Created stored procedures for fine calculation automation",
    ],
    gallery: ["/projects/bookbank-1.jpg"],
    image: "/projects/bookbank.jpg",
    github: "",
    tags: ["Database", "Java", "Management"],
  },
  {
    id: "student-management",
    title: "Student Management System",
    slug: "student-management",
    categories: ["Database", "C++", "Desktop Application"],
    featured: true,
    description:
      "End-to-end student management platform with enrollment, grades, attendance, and parent portal.",
    overview:
      "A full-stack student management system providing comprehensive tools for academic institutions to manage enrollment, grades, attendance tracking, and parent communication.",
    features: [
      "Student enrollment and profile management",
      "Grade book with weighted GPA calculation",
      "Attendance tracking with automated notifications",
      "Parent portal for progress monitoring",
      "Report generation and export (PDF/CSV)",
    ],
    techStack: ["C++"],
    challenges: [
      "Implementing role-based access for admins, teachers, students, and parents",
      "Ensuring data integrity across grade calculations",
    ],
    solutions: [
      "Built granular RBAC middleware with JWT token scoping",
      "Created audit trail system for all grade modifications",
    ],
    gallery: ["/projects/student-1.jpg"],
    image: "",
    github: "",
    tags: ["C++", "Education", "Basic Filing CRUD in C++"],
  },
];
