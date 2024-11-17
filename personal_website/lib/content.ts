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
  name: "John Doe",
  role: "Software Engineer",
  company: "Amazing Corp",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=400&auto=format&fit=crop",
  bio: "I'm a software engineer passionate about creating beautiful and functional web experiences. Currently building the future of web development at Amazing Corp.",
  passion: "I'm passionate about creating intuitive user experiences and solving complex problems through elegant code. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.",
  social: {
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe"
  }
}

export const technologies: Technology[] = [
  { name: "React", emoji: "⚛️" },
  { name: "TypeScript", emoji: "📘" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Next.js", emoji: "▲" },
  { name: "TailwindCSS", emoji: "🎨" },
  { name: "GraphQL", emoji: "📊" },
]

export const projects: Project[] = [
  {
    name: "Project Awesome",
    description: "A real-time collaboration tool built with React and WebSocket",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
    github: "https://github.com/johndoe/project-awesome",
    demo: "https://project-awesome.demo",
    tags: ["React", "WebSocket", "TypeScript"]
  },
  {
    name: "Cool API",
    description: "RESTful API service built with Node.js and Express",
    image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?w=800&auto=format&fit=crop&q=80",
    github: "https://github.com/johndoe/cool-api",
    tags: ["Node.js", "Express", "REST"]
  },
  {
    name: "Dev Tools",
    description: "Collection of developer utilities and productivity tools",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&auto=format&fit=crop&q=80",
    github: "https://github.com/johndoe/dev-tools",
    demo: "https://devtools.demo",
    tags: ["TypeScript", "React", "CLI"]
  },
]

export const books = {
  currentlyReading: [
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas, Andrew Hunt",
      description: "A guide to becoming a better programmer through practical examples and philosophy.",
      link: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      description: "Rules for focused success in a distracted world.",
      link: "https://www.calnewport.com/books/deep-work/",
    },
  ],
  recentlyFinished: [
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "An easy and proven way to build good habits and break bad ones.",
      link: "https://jamesclear.com/atomic-habits",
    },
    {
      title: "The Phoenix Project",
      author: "Gene Kim, Kevin Behr, George Spafford",
      description: "A novel about IT, DevOps, and helping your business win.",
      link: "https://itrevolution.com/product/the-phoenix-project/",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      description: "A handbook of agile software craftsmanship.",
      link: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/",
    },
  ]
}