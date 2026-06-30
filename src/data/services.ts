import {
  Code2,
  Layers,
  Brain,
  Plug,
  TestTube2,
  Smartphone,
} from "lucide-react";

export const services = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive interfaces built with React, Next.js, and modern CSS frameworks. Performance-optimized with accessibility baked in.",
    icon: Code2,
    features: ["React / Next.js", "Responsive Design", "Animation", "Accessibility"],
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "End-to-end application development from database design to deployment. Scalable architectures with clean, maintainable code.",
    icon: Layers,
    features: ["Node.js / Express", "Database Design", "API Development", "Deployment"],
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "Intelligent features powered by OpenAI, LangChain, and custom ML pipelines. From chatbots to content generation and analysis.",
    icon: Brain,
    features: ["OpenAI API", "Prompt Engineering", "NLP", "AI Workflows"],
  },
  {
    id: "api",
    title: "API Development",
    description:
      "Robust RESTful and GraphQL APIs with authentication, rate limiting, documentation, and comprehensive testing.",
    icon: Plug,
    features: ["REST / GraphQL", "Authentication", "Documentation", "Testing"],
  },
  {
    id: "testing",
    title: "Software Testing",
    description:
      "Comprehensive QA strategies including manual testing, test automation, performance testing, and CI/CD integration.",
    icon: TestTube2,
    features: ["Manual QA", "Automation", "Test Planning", "Bug Tracking"],
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description:
      "Mobile-first designs that look stunning on every device. Cross-browser compatibility and performance optimization.",
    icon: Smartphone,
    features: ["Mobile-First", "Cross-Browser", "Performance", "UI/UX"],
  },
];
