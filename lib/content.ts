export interface Technology {
  name: string
  emoji: string
}

export interface Project {
  name: string
  description: string
  image: string
  github: string
  demo?: string
  tags?: string[]
}

export interface Book {
  title: string
  author: string
  description: string
  link?: string
}

export interface Profile {
  name: string
  role: string
  company: string
  avatar: string
  bio: string
  passion: string
  social: {
    twitter: string
    linkedin: string
    github: string
  }
}

export const profile: Profile = {
  name: "Louis Masson",
  role: "Tech lovers (AI lovers) and business developer",
  company: "Devoteam",
  avatar: "avatar.jpeg",
  bio: "I'm a business developer at Devoteam with a passion for new technologies and sports. In my free time, I love exploring the latest AI advancements and experimenting with them. Though my background isn't technical, I’m driven to create AI-powered products that make a difference.",
  passion: "I'm passionate about AI and its potential to transform industries and improve people's lives. And also about sports.",
  social: {
    twitter: "https://x.com/Lmasson04pro",
    linkedin: "https://www.linkedin.com/in/louis-masson-businessdeveloper/",
    github: "https://github.com/LouisMasson"
  }
}

export const technologies: Technology[] = [
  { name: "React", emoji: "⚛️" },
  { name: "TypeScript", emoji: "📘" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Next.js", emoji: "▲" },
  { name: "TailwindCSS", emoji: "🎨" },
]

export const projects: Project[] = [
  {
    name: "DocuBoost AI",
    description: "Unlock technical insights for coding AI tools with this Streamlit app that scrapes technical documentation and downloads it in Markdown format, providing seamless context for Cursor AI, Bolt.new, and more.",
    image: "docuboost_banner.png",
    github: "https://github.com/LouisMasson/DocuBoost_AI",
    demo: "https://docuboost.patronusguardian.org/", // Ajout du lien de démo
    tags: ["Streamlit", "Python", "AI"]
  },
]

export const books = {
  currentlyReading: [
    {
      title: "L'almanach de Naval Ravikant",
      author: "Naval Ravikant",
      description: "A comprehensive guide to wealth and happiness, combining Naval's insights on life, philosophy, and investing.",
      link: "https://www.amazon.fr/Lalmanach-Naval-Ravikant-senrichir-heureux/dp/236117071X",
    },    
  ],
  recentlyFinished: [
    {
      title: "Le Comte de Monte-Cristo",
      author: "Alexandre Dumas",
      description: "A classic tale of betrayal, adventure, and revenge, following Edmond Dantès as he transforms into the enigmatic Count of Monte Cristo.",
      link: "https://www.amazon.fr/Comte-Monte-Cristo-1-Alexandre-Dumas/dp/2253098051",
    },    
  ]
}