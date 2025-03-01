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

export interface Education {
  school: string
  degree: string
  field: string
  duration: string
  description?: string
  logo?: string
}

export interface Experience {
  company: string
  role: string
  duration: string
  description: string
  logo?: string
  skills?: string[]
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
  role: "Trailblazer in tech innovation, champion of AI and the self-hosting frontier, and dynamic Account Manager",
  company: "Devoteam Luxembourg 🇱🇺",
  avatar: "avatar.jpeg",
  bio: "I'm Account Manager at Devoteam Luxembourg with a passion for new technologies and sports. In my free time, I love exploring the latest AI advancements and experimenting with them. Though my background isn't technical, I’m driven to create AI-powered products that make a difference.",
  passion: "I'm passionate about AI and its potential to transform industries and improve people's lives. And also about sports.",
  social: {
    twitter: "https://x.com/Lmasson04pro",
    linkedin: "https://www.linkedin.com/in/louis-masson-businessdeveloper/",
    github: "https://github.com/LouisMasson"
  }
}

export const technologies: Technology[] = [
  { name: "Replit", emoji: "🔸" },
  { name: "Cursor", emoji: "▪️" },
  { name: "Perplexity", emoji: "🔹" },
  { name: "HuggingFace", emoji: "🤗" },
  { name: "Runtipi", emoji: "⛺" },
  { name: "Coolify", emoji: "🆒" },
  { name: "Python", emoji: "🐍" },
  { name: "Streamlit", emoji: "💻" },
]

export interface Certification {
  title: string
  issuer: string
  date: string
  description: string
  badge?: string
  credentialUrl?: string
  skills?: string[]
}

export const certifications: Certification[] = [
  {
    title: "Generative AI For Everyone",
    issuer: "DeepLearning.AI",
    date: "2024",
    description: "Certification on Gen AI for Everyone",
    badge: "Deeplearning.jpg",
    credentialUrl:"https://www.coursera.org/account/accomplishments/verify/HKW5AJWDGK2Q",
    skills: ["Gen AI", "Prompting", "Model Deployment"]
  },

  {
    title: "Devoteam GenAI Level 1",
    issuer: "Devoteam Academy",
    date: "2024",
    description: "Certification on Gen AI for Devoteam Employee",
    badge: "Genai_devoteam.png",
credentialUrl:"https://eu.badgr.com/public/assertions/FoibiNFQQeSS4j8sT9w4ag",
    skills: ["Gen AI","Model Deployment"]
  },

  {
    title: "Devoteam GenAI Level 2",
    issuer: "Devoteam Academy",
    date: "2024",
    description: "Certification on Gen AI for Devoteam Employee",
    badge: "Genai_devoteam.png",
  credentialUrl:"https://eu.badgr.com/public/assertions/WEhtqk74TqSspbzbypDk8w",
    skills: ["Gen AI","Model Deployment"]
  },
  
  {
    title: "Microsoft Certified Azure Fundemantals",
    issuer: "Microsoft",
    date: "2024",
    description: "Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure",
    badge: "badge_azure.png",
    credentialUrl:"https://learn.microsoft.com/api/credentials/share/fr-fr/Louis-3423/6979B97237EA0633?sharingId=F6ECF5B78B1049F1",
    skills: ["Azure", "Cloud", "AZ-900"]
  },

  {
    title: "Microsoft Certified Azure Data Fundemantals",
    issuer: "Microsoft",
    date: "2024",
    description: "The Azure DP-900: Microsoft Azure Data Fundamentals certification validates your foundational knowledge of core data concepts, including relational and non-relational data, as well as various types of data workloads such as transactional and analytical, and how these are implemented using Microsoft Azure data services",
    badge: "dp900.png",
    credentialUrl:"https://learn.microsoft.com/fr-fr/users/louis-3423/credentials/certification/azure-data-fundamentals",
    skills: ["Azure", "Data", "DP-900", "Azure Data Factory", "Data Warehouse"]
  },
  // Add more certifications as needed
]

export const projects: Project[] = [

  {
    name: "Github Receipt Generator",
    description: "Generate your own GitHub profile receipts with this simple web app.",
    image: "Github_receipt.png",
    github: "https://github.com/LouisMasson/Github_ReceiptGenerator",
    demo: "https://gitreceipt.patronusguardian.org", // Ajout du lien de démo
    tags: ["JavaScript", "Python", "AI"]
  },

  {
    name: "RSS feed reader auto-tagging and autosummarize",
    description: "A new way to read RSS feed",
    image: "RSSfeed.png",
    github: "https://github.com/LouisMasson/RSSfeedreader",
    demo: "https://rssfeedaicompanion.replit.app", // Ajout du lien de démo
    tags: ["JavaScript", "Python", "Replit", "Gemini", "AI", "Firebase"]
  },

  {
    name: "Auto-convert mobile application Hungary trip - HUF to EUR",
    description: "An easy way to convert HUF in EUR and vice-versa",
    image: "App_screen.png",
    github: "https://github.com/LouisMasson/Currency-HUF-to-EUR-and-tips",
    demo: "https://currency-tip-lmasson.replit.app/", // Ajout du lien de démo
    tags: ["React-native", "Typrescript", "Replit", "Gemini", "Finance API"]
  },
  
]

export const education: Education[] = [
  {
    school: "Euridis Business School",
    degree: "Master's Degree in IT business engineering",
    field: "Business in IT industry",
    duration: "2020 - 2022",
    description: "A business school specializing in the high-tech sector, trains business engineers for complex sales jobs.",
    logo: "euridis_business_school_logo.jpg"
  }
]

export const experiences: Experience[] = [
  {
    company: "Devoteam Luxembourg",
    role: "Account Manager",
    duration: "2024 - Present",
    description: "Key responsibilities:Developing and maintaining strong client relationships across diverse industries (Insurance, Industrial & Manufacturing, Banking, Transport & Logistics).",
    logo: "devoteam-logo.png",
    skills: ["Business Development", "Cloud", "Data" , "AI", "Sales", "Recruitment", "Digital Workplace", "Customer Relationship Management", "Customer Service",]
  }
,
  {
    company: "Synergy France",
    role: "Account Manager",
    duration: "2023 - 2024",
    description: "Key responsibilities: Developing and maintaining strong client relationships, Identifying new business opportunities in Paris and Lille, Collaborating with cross-functional teams to deliver tailored solutions based on data, Identify new way for companies to value their data.",
    logo: "synergylogo.jpeg",
    skills: ["Business Development", "Data" , "AI", "Sales", "Snowflake", "Power BI", "Customer Relationship Management", "Customer Service",]
  }
,
  {
    company: "Acteam-IT",
    role: "Business Developer",
    duration: "2020-2023",
    description: "Key responsibilities: Creating new business relation with stakeholers, New business opportunity research, Monitoring customer portfolio.",
    logo: "acteam_it_logo.png",
    skills: ["Business Development", "Sales", "ICT services", "Customer Relationship Management", "Customer Service",]
  }
  
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