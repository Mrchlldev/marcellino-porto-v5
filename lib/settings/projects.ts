export type ProjectStatus = "Live" | "In Progress" | "Archived" | "Open Source";
export type ProjectCategory = "Web App" | "API" | "Tool" | "Mobile" | "Design" | "Other";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image?: string; // path in /public
  tags: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  year: number;
}

export const projectsConfig = {
  title: "Projects",
  subtitle: "Things I've Built",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",

  // Category filter options (leave empty to show all)
  filterCategories: ["All", "Web App", "API", "Tool", "Design"],

  items: [
    {
      id: "whatsapp-bot-platform",
      title: "WhatsApp Bot REST API Platform",
      tagline: "Multi-tenant WhatsApp automation with tiered rate limiting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "REST API"],
      category: "API",
      status: "Live",
      featured: true,
      links: {
        live: "https://example.com",
        github: "https://github.com/marcellino/wa-platform",
      },
      year: 2024,
    },
    {
      id: "nokia-sms-generator",
      title: "Nokia SMS Generator",
      tagline: "Retro nostalgia web tool with Neo Brutalism aesthetic",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      tags: ["Canvas API", "JavaScript", "CSS", "Neo Brutalism"],
      category: "Tool",
      status: "Live",
      featured: true,
      links: {
        live: "https://example.com",
        github: "https://github.com/marcellino/nokia-sms",
      },
      year: 2024,
    },
    {
      id: "dev-tools-platform",
      title: "Developer Tools Website",
      tagline: "Multi-tool platform with auto-discovery from JSON config",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.",
      tags: ["Node.js", "Express", "HTML", "Shadcn-inspired UI"],
      category: "Web App",
      status: "Live",
      featured: true,
      links: {
        live: "https://example.com",
        github: "https://github.com/marcellino/dev-tools",
      },
      year: 2024,
    },
    {
      id: "ecommerce-dashboard",
      title: "E-Commerce Analytics Dashboard",
      tagline: "Real-time sales analytics with interactive charts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      tags: ["React", "TypeScript", "Recharts", "PostgreSQL", "Prisma"],
      category: "Web App",
      status: "Live",
      featured: false,
      links: {
        live: "https://example.com",
        github: "https://github.com/marcellino/dashboard",
      },
      year: 2023,
    },
    {
      id: "open-auth-lib",
      title: "OpenAuth Library",
      tagline: "Lightweight authentication middleware for Express",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      tags: ["TypeScript", "Node.js", "JWT", "Open Source"],
      category: "API",
      status: "Open Source",
      featured: false,
      links: {
        github: "https://github.com/marcellino/open-auth",
      },
      year: 2023,
    },
    {
      id: "design-system",
      title: "Violet Design System",
      tagline: "Component library with dark-first design philosophy",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.",
      tags: ["Figma", "Storybook", "React", "Tailwind CSS"],
      category: "Design",
      status: "In Progress",
      featured: false,
      links: {
        demo: "https://example.com",
        github: "https://github.com/marcellino/violet-ui",
      },
      year: 2024,
    },
  ] as Project[],
};
