export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  name: string;
  level: SkillLevel;
  percentage: number; // 0–100
  icon?: string; // emoji or leave empty
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsConfig = {
  title: "Skills",
  subtitle: "My Tech Stack",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",

  categories: [
    {
      category: "Frontend",
      skills: [
        { name: "React / Next.js", level: "Expert", percentage: 92 },
        { name: "TypeScript", level: "Advanced", percentage: 85 },
        { name: "Tailwind CSS", level: "Expert", percentage: 95 },
        { name: "Framer Motion", level: "Advanced", percentage: 80 },
        { name: "Vue.js", level: "Intermediate", percentage: 65 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "Advanced", percentage: 85 },
        { name: "Express.js", level: "Advanced", percentage: 82 },
        { name: "REST API Design", level: "Expert", percentage: 90 },
        { name: "GraphQL", level: "Intermediate", percentage: 68 },
        { name: "Python", level: "Intermediate", percentage: 60 },
      ],
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "Firebase", level: "Advanced", percentage: 85 },
        { name: "PostgreSQL", level: "Intermediate", percentage: 70 },
        { name: "MongoDB", level: "Advanced", percentage: 78 },
        { name: "Vercel / Netlify", level: "Expert", percentage: 95 },
        { name: "Docker", level: "Intermediate", percentage: 62 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git / GitHub", level: "Expert", percentage: 95 },
        { name: "Figma", level: "Advanced", percentage: 80 },
        { name: "VS Code", level: "Expert", percentage: 98 },
        { name: "Linux / CLI", level: "Advanced", percentage: 78 },
        { name: "Postman", level: "Advanced", percentage: 85 },
      ],
    },
  ] as SkillCategory[],

  // Tech stack logos / tags (shown as badges)
  techBadges: [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
    "Firebase", "PostgreSQL", "MongoDB", "Docker", "Git",
    "Figma", "Vercel", "Framer Motion", "GraphQL", "Express",
  ],
};
