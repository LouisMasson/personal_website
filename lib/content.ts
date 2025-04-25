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

export interface ExperiencePoint {
  text: string
  subpoints?: string[]
}

export interface Experience {
  company: string
  role: string
  duration: string
  description: string
  bulletPoints?: ExperiencePoint[]
  logo?: string
  skills?: string[]
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

export interface TechnologyCategory {
  name: string;
  emoji: string;
  technologies: Technology[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    name: "AI-Powered IDEs",
    emoji: "🧠",
    technologies: [
      { name: "Replit", emoji: "🔸" },
      { name: "Cursor", emoji: "▪️" },
      { name: "Windsurf", emoji: "🏄‍♂️" },
      { name: "Perplexity", emoji: "🔹" },
    ]
  },
  {
    name: "Self-Hosting",
    emoji: "🏠",
    technologies: [
      { name: "Runtipi", emoji: "⛺" },
      { name: "Coolify", emoji: "🆒" },
      { name: "HuggingFace", emoji: "🤗" },
    ]
  },
  {
    name: "Development Tools",
    emoji: "🛠️",
    technologies: [
      { name: "Python", emoji: "🐍" },
      { name: "Streamlit", emoji: "💻" },
    ]
  }
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

    {
      title: "Build Apps with Windsurf’s AI Coding Agents!",
      issuer: "DeepLearning.AI & Windsurf",
      date: "2025",
      description: "Learn to build, debug, and deploy applications with an Agentic AI-powered integrated development environment.",
      badge: "Deeplearning.jpg",
      credentialUrl:"https://learn.deeplearning.ai/accomplishments/85d90dc5-4800-4a20-b925-84d34f4d7b32?usp=sharing",
      skills: ["Windsurf", "Data", "AI", "Agent Coding"]
    },

    {
      title: "Multi AI Agent Systems with crewAI",
      issuer: "DeepLearning.AI & CrewAI",
      date: "2025",
      description: "Automate business workflows with multi-AI agent systems. Exceed the performance of prompting a single LLM by designing and prompting a team of AI agents through natural language.",
      badge: "Deeplearning.jpg",
      credentialUrl:"https://learn.deeplearning.ai/accomplishments/83cb54cc-739f-4937-a867-2bf031694497",
      skills: ["CrewAI", "Agentic", "AI", "Task", "Role"]
    },

  {
    title: "Vibe coding 101 with replit",
    issuer: "DeepLearning.AI & Replit",
    date: "2025",
    description: "Design, build, and deploy apps with an AI coding agent in an integrated web development environment.",
    badge: "Deeplearning.jpg",
    credentialUrl:"https://learn.deeplearning.ai/accomplishments/2f497119-1f02-43f0-b318-9a3a9856d8e6",
    skills: ["Replit", "Vibe Coding", "AI"]
  },
  // Add more certifications as needed
]

export const projects: Project[] = [
  {
    name: "Supplier Chain Analysis Bloomber Like",
    description: "A powerful web application for visualizing complex supplier relationships between companies using Perplexity API and interactive network diagrams. This tool enables users to gain deep insights into corporate interconnections through advanced visualization and enriched financial data.",
    image: "SupplychainIQ.png",
    github: "https://github.com/LouisMasson/Supplainchain_analysis_bloomberglike",
    demo: "https://supplier-sight-lmasson.replit.app/", // Ajout du lien de démo
    tags: ["Typescript", "SQL", "Replit", "Perplexity API", "Network Diagram", "Sonar API"]
  },

  {
    name: "Africa National Parks Ranker Elo",
    description: "A dynamic web application that gamifies the exploration of African national parks through an innovative ELO rating system.",
    image: "Capture d’écran 2025-04-12 142645.png",
    github: "https://github.com/LouisMasson/AfricaParkRanker_Replit",
    demo: "https://africa-park-ranker.replit.app/", // Ajout du lien de démo
    tags: ["Typescript", "SQL", "Replit"]
  },
  
  {
    name: "SEO tools analysis",
    description: "Easy way to scan your SEO ranking",
    image: "Capture d’écran 2025-04-06 à 10.03.26.png",
    github: "https://github.com/LouisMasson/Friendly_SeoScanner",
    demo: "https://seo-scanner-interactive.replit.app/", // Ajout du lien de démo
    tags: ["Typescript", "Python", "Replit"]
  },

  {
    name: "Auto-convert mobile application Hungary trip - HUF to EUR",
    description: "An easy way to convert HUF in EUR and vice-versa",
    image: "App_screen.png",
    github: "https://github.com/LouisMasson/Currency-HUF-to-EUR-and-tips",
    demo: "https://currency-tip-lmasson.replit.app/", // Ajout du lien de démo
    tags: ["React-native", "Typrescript", "Replit", "Gemini", "Finance API"]
  },

  {
    name: "Little Fancy Snake Game built with Windsurf",
    description: "A fancy way to play Snake Game",
    image: "Snake_game.png",
    github: "https://github.com/LouisMasson/snake_game",
    demo: "https://louismasson.github.io/snake_game/snake.html", // Ajout du lien de démo
    tags: ["Windsurg", "HTML", "JS", "Claude Sonnet 3.7"]
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
    description: "Key responsibilities in account management at Devoteam Luxembourg:",
    bulletPoints: [
      { text: "Developing and maintaining strong client relationships across diverse industries (Insurance, Industrial & Manufacturing, Banking, Transport & Logistics)." },
      { text: "Managing strategic accounts for the Luxembourg office, including Large Enterprise Customers and SMBs." },
      { text: "Identifying new business opportunities in the Luxembourg market as a CSP." },
      { text: "Collaborating with cross-functional teams to deliver tailored solutions (Pre-sales)" },
      { text: "Exploring nearshore capabilities and cost optimization opportunities for client contracts (Portugal, Maroc, Tunisie)." },
      { text: "Developing a strong relationship with Devoteam BELGIQUE team to deliver ServiceNow offerings in Luxembourg." },
      { text: "Engaging in recruitment phases to meet client talent requirements." },
      { text: "Main vendor partners : Microsoft, ServiceNow, Redhat, etc." },
      { text: "Achivement : Driving €5M annual signing target for Devoteam Luxembourg." },
    ],
    logo: "devoteam-logo.png",
    skills: ["Business Development", "Cloud", "Data" , "AI", "Sales", "Recruitment", "Digital Workplace", "Customer Relationship Management", "Customer Service"]
  }
,
  {
    company: "Synergy France",
    role: "Account Manager",
    duration: "2023 - 2024",
    description: "Key responsibilities as Account Manager at Synergy France (Lille & Paris):",
    bulletPoints: [
      { text: "Developing and maintaining strong client relationships." },
      { text: "Identifying new business opportunities in Paris and Lille." },
      { text: "Collaborating with cross-functional teams to deliver tailored solutions based on data." },
      { text: "Successfully opened a new account by leading the global overhaul of a data platform for a world leader in the fragrance industry." },
      { text: "Successfully completed a global rebranding of a data platform for a world leader in the fragrance"},
      { text: "Secured the renewal of a strategic data governance system contract, supporting 5,000+ users in the energy sector."},
    ],
    logo: "synergylogo.jpeg",
    skills: ["Business Development", "Data" , "AI", "Sales", "Snowflake", "Power BI", "Customer Relationship Management", "Customer Service"]
  }
,
  {
    company: "Acteam-IT",
    role: "Business Developer",
    duration: "2020-2023",
    description: "Key responsibilities as Business Developer at Acteam-IT (Lille & Toulon):",
    bulletPoints: [
      { text: "Creating new business relations with stakeholders." },
      { text: "New business opportunity research." },
      { text: "Monitoring customer portfolio." }
    ],
    logo: "acteam_it_logo.png",
    skills: ["Business Development", "Sales", "ICT services", "Customer Relationship Management", "Customer Service"]
  }

]

// Books section removed