export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Shadcn UI", level: 80 },
      { name: "HTML5 / CSS3", level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "FAST APIs", level: 85 },
      { name: "Python / Flask", level: 75 },
      { name: "Authentication", level: 65 },
    ],
  },
  {
    id: "ai",
    title: "AI",
    icon: "Brain",
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "LangChain", level: 75 },
      { name: "Prompt Engineering", level: 90 },
      { name: "ML Fundamentals", level: 65 },
      { name: "LLM Models", level: 82 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "C++", level: 82 },
      { name: "C", level: 74 },
    ],
  },
  {
    id: "testing",
    title: "Testing & QA",
    icon: "TestTube2",
    skills: [
      { name: "Manual Testing", level: 92 },
      { name: "Selenium", level: 85 },
      { name: "Test Planning", level: 90 },
      { name: "Bug Tracking", level: 93 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: "Cloud",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 78 },
      { name: "CI/CD", level: 75 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "AWS Basics", level: 70 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "VS Code", level: 96 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 92 },
      { name: "Jira", level: 88 },
    ],
  },
  {
    id: "soft",
    title: "Soft Skills",
    icon: "Users",
    skills: [
      { name: "Communication", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Team Leadership", level: 88 },
      { name: "Agile / Scrum", level: 90 },
      { name: "Time Management", level: 90 },
    ],
  },
];

export const marqueeSkills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB",
  "PostgreSQL", "Tailwind CSS", "Shadcn UI", "OpenAI", "Docker",
  "Git", "Jest", "Selenium", "FAST APIs","LLM Models","RAG Models",
  "AWS", "Figma", "Agile", "CI/CD", "Express", "LangChain", "MySQL",
];
