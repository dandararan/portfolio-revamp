export interface Job {
  year: string;
  role: string;
  company: string;
  description: string;
  tech?: string[];
}
export interface Post {
  title: string;
  excerpt: string;
  date: string;
  content?: string;
  techStack?: string[];
}

export const work: Job[] = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Cavite State University Bacoor City Campus",
    description:
      "Building and maintaining web applications and websites to streamline university operations and enhance student services.",
    tech: ["React", "NodeJs", "NextJS", "TypeScript", "Postgres"],
  },
  {
    year: "2024",
    role: "Benefits System Administrator",
    company: "Collabera Digital",
    description:
      "Monitoring and managing employee benefits systems to ensure accurate enrollment and compliance.",
    tech: ["Administrative Role", "System Management"],
  },
];

export const projects: Post[] = [
  {
    title: "Dish Recommendation System Based on Available Ingredients Web App",
    excerpt:
      "A web application that suggests recipes based on the ingredients users have on hand, reducing food waste and enhancing meal planning.",
    date: "2023",
    techStack: ["PHP", "Python", "HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "Cavite State University Bacoor City Campus Student Portal",
    excerpt:
      "A comprehensive student portal for Cavite State University Bacoor City Campus, providing access to academic resources and campus updates.",
    date: "2024",
    techStack: ["React", "NextJS", "NodeJS", "Postgres", "TypeScript"],
  },
  {
    title: "Cavit State University Bacoor City Campus Official Website",
    excerpt:
      "The official website for Cavite State University Bacoor City Campus, offering information about programs, admissions, and campus news.",
    date: "2025",
    techStack: ["React", "NextJS", "TypeScript", "CSS"],
  },
  // {
  //   title: "Tournament Management System",
  //   excerpt:
  //     "A system designed to streamline the organization and management of sports tournaments, including scheduling, scoring, and team management.",
  //   date: "2025",
  //   techStack: ["React", "NextJS", "NodeJS", "TypeScript", "Postgres"],
  // },
];

export interface Social {
  name: string;
  handle: string;
  url: string;
  icon: string;
}

export const social: Social[] = [
  {
    name: "GitHub",
    handle: "@dandararan",
    url: "https://github.com/dandararan",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "@Danilo Borreros Jr.",
    url: "https://www.linkedin.com/in/danilo-borreros-jr-361a98284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: "linkedin",
  },
];
