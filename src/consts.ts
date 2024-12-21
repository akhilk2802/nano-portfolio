import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Akhilesh Kumbar",
  EMAIL: "akhilkumbar@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "I am a software engineer based in Boston, USA.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const RESUME: Metadata = {
  TITLE: "Resume",
  DESCRIPTION: "A summary of my work experience education and everything else.",
}

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/AkhileshSKumba1",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/akhilk2802"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/akhileshkumbar/",
  },
  {
    NAME: "medium",
    HREF: "https://medium.com/@akakhilkumbar",
  }
];
