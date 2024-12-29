import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Manavees",
  DESCRIPTION: "Welcome to Manavees, a blog and general personal space.",
  AUTHOR: "Christos",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I find interesting.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contact@manavees.com",
    HREF: "mailto:contact@manavees.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "manavees",
    HREF: "https://github.com/manavees"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "",
    HREF: "",
  },
  { 
    NAME: "Twitter / X",
    ICON: "twitter-x",
    TEXT: "manavees",
    HREF: "https://x.com/manavees",
  },
]

