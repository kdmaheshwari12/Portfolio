import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/kdmaheshwari12?tab=repositories",
    icon: GitHubIcon,
    label: "View GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kundan-kumar-maheshwari/",
    icon: LinkedInIcon,
    label: "Connect on LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:kundanmaheshwari553@gmail.com",
    icon: Mail,
    label: "Send email",
  },
  {
    name: "Phone",
    href: "tel:03302545952",
    icon: Phone,
    label: "Call phone",
  },
] as const;

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Certifications", href: "#certifications" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume" },
] as const;

export const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume" },
] as const;
