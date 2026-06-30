export type LeadershipRole = {
  id: string;
  title: string;
  organization: string;
  period: string;
  icon: string;
  achievements: string[];
};

export const leadershipRoles: LeadershipRole[] = [
  {
    id: "lead-1",
    title: "Deputy",
    organization: "ACM Management",
    period: "aug 2024 — jan 2025",
    icon: "Rocket",
    achievements: [
      "Coordinated chapter activities, managed member onboarding, and organized technical events for 100+ students",
    ],
  },
  {
    id: "lead-2",
    title: "Coordinator",
    organization: "DevDay",
    period: "feb 2024 — may 2024",
    icon: "Rocket",
    achievements: [
      "Facilitated project showcases and managed event logistics for 50+ teams at the university development day.",
    ],
  },
  {
    id: "lead-3",
    title: "Member",
    organization: "ACM Management",
    period: "aug 2023 — jan 2024",
    icon: "Calendar",
    achievements: [
      "Assisted in organizing ACM technical events, workshops, seminars, and student engagement activities",
      "Coordinated with team members to ensure the smooth execution of on-campus events and initiatives",
      "Managed event logistics, registrations, and participant communication.",
      "Collaborated with the ACM management team to promote events and increase student participation.",
      "Supported administrative and operational tasks while contributing to a productive team environment.",
    ],
  },
];
