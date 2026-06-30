export type Experience = {
  id: string;
  role: string;
  company: string;
  type: "Internship" | "Teaching Assistant" | "Full-time" | "Part-time";
  period: string;
  location: string;
  logo?: string;
  responsibilities: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "AI Full Stack Developer Intern",
    company: "Nexium Pvt. Ltd.",
    type: "Internship",
    period: "Jul 2025 — Aug 2025",
    location: "Remote",
    responsibilities: [
      "Developed and maintained full-stack web applications using Next.js, TypeScript, Node.js, and MongoDB.",
      "Designed and implemented responsive, user-friendly interfaces with React.js and Tailwind CSS.",
      "Built and integrated Open AI APIs, ensuring seamless communication between frontend and backend systems.",
      "Collaborated with developers and designers using Git/GitHub, participated in code reviews, and resolved bugs to maintain high code quality.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Nextjs", "TypeScript","Shadcn UI", "Git"],
  },
  {
    id: "exp-2",
    role: "Teaching Assistant — Operating Systems",
    company: "University CS Department",
    type: "Teaching Assistant",
    period: "Feb 2026 — May 2026",
    location: "On-campus",
    responsibilities: [
      "Assisted the course instructor in managing Operating Systems coursework for undergraduate students.",
      "Evaluated and graded quizzes, assignments, and project submissions based on the provided marking criteria.",
      "Maintained accurate records of student grades and ensured timely feedback",
      "Supported the instructor in organizing course assessments and academic activities.",
      "Communicated with students to clarify grading-related queries while maintaining fairness and consistency.",
    ],
    technologies: ["Operating Systems", "Linux"],
    
  },
  {
    id: "exp-3",
    role: "Teaching Assistant — Probability and Statistics",
    company: "University CS Department",
    type: "Teaching Assistant",
    period: "aug 2025 — jan 2025",
    location: "On-campus",
    responsibilities: [
      "Assisted the course instructor in managing Probability and Statistics coursework for undergraduate students.",
      "Evaluated and graded quizzes, assignments, and project submissions based on the provided marking criteria.",
      "Maintained accurate records of student grades and ensured timely feedback",
      "Supported the instructor in organizing course assessments and academic activities.",
      "Communicated with students to clarify grading-related queries while maintaining fairness and consistency.",
    ],
    
    technologies: ["Probability and Statistics"],
  },
  {
    id: "exp-4",
    role: "Teaching Assistant — Linear Algebra",
    company: "University CS Department",
    type: "Teaching Assistant",
    period: "feb 2025 — may 2025",
    location: "On-campus",
    responsibilities: [
      "Assisted the course instructor in managing Linear Algebra coursework for undergraduate students.",
      "Evaluated and graded quizzes, assignments, and project submissions based on the provided marking criteria.",
      "Maintained accurate records of student grades and ensured timely feedback",
      "Supported the instructor in organizing course assessments and academic activities.",
      "Communicated with students to clarify grading-related queries while maintaining fairness and consistency.",
    ],
    
    technologies: ["Linear Algebra"],
  },
];
