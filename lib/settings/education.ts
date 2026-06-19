export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  description: string;
  highlights: string[];
  type: "education" | "certification" | "course";
}

export const educationConfig = {
  title: "Education",
  subtitle: "My Academic Journey",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  items: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Indonesia",
      location: "Depok, Indonesia",
      period: "2019 — 2023",
      gpa: "3.85 / 4.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      highlights: [
        "Thesis: Building Scalable Microservice Architecture with Node.js",
        "Dean's List for 6 consecutive semesters",
        "President of the Software Engineering Student Club",
        "Teaching Assistant for Web Programming course",
      ],
      type: "education",
    },
    {
      degree: "Senior High School — Science Program",
      institution: "SMA Negeri 1 Jakarta",
      location: "Jakarta, Indonesia",
      period: "2016 — 2019",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.",
      highlights: [
        "National Science Olympiad — Bronze Medal (Computer Science)",
        "School representative for National Robotics Competition",
        "Graduated with distinction (Nilai UN 38.5 / 40)",
      ],
      type: "education",
    },
  ] as EducationItem[],

  certifications: [
    {
      degree: "AWS Certified Developer – Associate",
      institution: "Amazon Web Services",
      location: "Online",
      period: "2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      highlights: ["Cloud architecture", "Serverless deployment", "IAM & Security"],
      type: "certification" as const,
    },
    {
      degree: "Google UX Design Certificate",
      institution: "Google / Coursera",
      location: "Online",
      period: "2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      highlights: ["User research", "Wireframing & prototyping", "Usability testing"],
      type: "certification" as const,
    },
    {
      degree: "Meta Front-End Developer Certificate",
      institution: "Meta / Coursera",
      location: "Online",
      period: "2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      highlights: ["React advanced patterns", "Performance optimization", "Accessibility"],
      type: "certification" as const,
    },
  ] as EducationItem[],
};
