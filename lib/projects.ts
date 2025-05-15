export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  type: string
  technologies: string[]
  features: string[]
  year: number
  liveUrl?: string
  githubUrl?: string
  gallery: string[]
  mobilePreview?: string
}

const smartchat_images = [
  "/images/smartchat.png",
  "/images/smartchat2.png",
  "/images/smartchat3.png"
];

const resepku_images = [
  "/images/RESEPKU.png",
]

const nova_images = [
  "/images/nova.png",
  "/images/nova2.png",
  "/images/nova3.png",
  "/images/nova4.png",
]

const sneakerz_mobile_images = [
  "/images/sneakerz_mobile1.png",
  "/images/sneakerz_mobile2.png"
]

const sneakerz_web_images = [
  "/images/sneakerz_web1.png",
  "/images/sneakerz_web2.png",
  "/images/sneakerz_web3.png"
]



export const projects: Project[] = [
  {
    id: "goatsplit",
    title: "GoatSplit | Fitness Tracker",
    description: "A comprehensive mobile application for tracking fitness progressive overload",
    longDescription: 
      "GoatSplit is a powerful fitness tracking application designed to help users monitor and optimize their training progress. Built with a focus on tracking progressive overload, the app enables users to log workouts, track personal records, and visualize strength gains over time.",
    image: "/images/goatsplit.png",
    type: "Web Application",
    technologies: ["React Native", "Redux", "Nativewind", "Supabase"],
    features: [
      "Progressive overload tracking with visual metrics",
      "Workout plan creation and customization",
      "Personal records and achievement tracking",
      "Exercise library with proper form instructions",
      "Progress analytics and performance insights"
    ],
    year: 2025,
    liveUrl: "https://goatsplit.vercel.app",
    githubUrl: "https://github.com/username/goatsplit",
    gallery: ["/images/goatsplit.png"]
  },
  {
    id: "vadexp",
    title: "VadExp | Expense Tracker",
    description: "Smart expense tracking app with image transaction detection that automatically extracts amount data from receipt screenshots.",
    longDescription: 
      "VadExp is an innovative expense tracking application that simplifies financial management through advanced image recognition technology. The platform can automatically extract transaction amount from receipt images.",
    image: "/images/vadexp2.png",
    type: "Mobile Application",
    technologies: ["React Native", "Zustand", "OCR API", "Supabase"],
    features: [
      "OCR-powered receipt scanning and data extraction",
      "Automatic amount and merchant detection from images",
      "Expense categorization and budget tracking",
    ],
    year: 2025,
    liveUrl: "",
    githubUrl: "https://github.com/username/vadexp",
    gallery: ["/images/vadexp2.png"],
    mobilePreview: "/images/mobile_vadexp.png" // TODO: Add mobile preview phot
  },

  {
    id: "smartchat",
    title: "SmartChat | Virtual Assistant Bot",
    description: "An AI-powered virtual assistant chatbot with natural language processing capabilities.",
    longDescription:
      "A Fullstack Web application that uses Google’s Generative AI (GEMINI) to answer interactive conversations. It provides a chat interface where users can communicate with an AI model, manage their chat history, and handle multiple conversations.",
    image: smartchat_images[0],
    type: "Web Application",
    technologies: ["ReactJS", "Laravel", "Gemini API", "TailwindCSS"],
    features: [
      "Natural language processing for human-like conversations",
      "Context-aware responses that remember previous messages",
      "Dark mode interface for comfortable viewing",
      "Responsive design that works on all devices",
    ],
    year: 2024,
    liveUrl: "",
    githubUrl: "https://github.com/dennisjoel/smartchat",
    gallery: smartchat_images,
  },
  {
    id: "resepku",
    title: "ResepKu | Food Recipe Seeker App",
    description: "A mobile application for discovering and saving food recipes with personalized recommendations.",
    longDescription:
      "ResepKu is a comprehensive food recipe application that helps users discover, save, and organize their favorite recipes. The app features an elegant UI with beautiful food photography and an intuitive navigation system that makes finding the perfect recipe a delightful experience.",
    image: resepku_images[0],
    type: "Mobile Application",
    technologies: ["Android Kotlin", "MVVM", "MealDB API"],
    features: [
      "Advanced search with filtering by ingredients, cuisine, and dietary restrictions",
      "Save favorite recipes to personalized collections",
      "Step-by-step cooking instructions",
    ],
    year: 2024,
    liveUrl: "",
    githubUrl: "https://github.com/dennisjoel/resepku",
    gallery: resepku_images,
    mobilePreview: "/images/resepku_mobile_preview.png"
  },
  {
    id: "sneakerz-react-native",
    title: "Sneakerz | React Native App",
    description: "A mobile e-commerce application for sneaker enthusiasts.",
    longDescription:
      "Sneakerz is a cutting-edge mobile e-commerce platform specifically designed for sneaker enthusiasts. The React Native app offers a seamless shopping experience with high-quality product images, and detailed descriptions.",
    image: sneakerz_mobile_images[1],
    type: "Mobile Application",
    technologies: ["React Native", "Redux", "Appwrite"],
    features: [
      "User Authentication",
      "Real-time inventory and availability updates",
      "User reviews and ratings system",
      "Cart and checkout system"
    ],
    year: 2024,
    liveUrl: "",
    githubUrl: "https://github.com/dennisjoel/sneakerz-app",
    gallery: sneakerz_mobile_images,
    mobilePreview: "/images/sneakerz_mobile_preview.png"
  },
  {
    id: "nova",
    title: "Nova | Crypto Landing Page",
    description: "A modern landing page for a cryptocurrency investment platform with blockchain integration.",
    longDescription:
      "Nova is a sleek, modern landing page designed for a cryptocurrency investment platform. The website features a dark theme with vibrant green accents, creating a futuristic and tech-forward aesthetic that appeals to crypto enthusiasts and investors alike.",
    image: nova_images[0],
    type: "Web Design",
    technologies: ["React", "Next.js", "TailwindCSS", "GSAP Animations", "Web3.js"],
    features: [
      "Interactive blockchain visualization",
      "Real-time cryptocurrency price tracking",
      "Animated UI elements for engaging user experience",
      "Responsive design optimized for all devices",
      "Newsletter subscription with Web3 wallet integration",
    ],
    year: 2024,
    liveUrl: "",
    githubUrl: "https://github.com/dennisjoel/nova",
    gallery: nova_images,
  },

  {
    id: "sneakerz-web",
    title: "Sneakerz | Web App",
    description: "The web version of the Sneakerz platform with advanced filtering and 3D product views.",
    longDescription:
      "The Sneakerz Web App is the desktop counterpart to the mobile application, offering an expanded feature set and enhanced visualization options. The web platform provides a comprehensive sneaker shopping experience with advanced filtering, and detailed product information.",
    image: sneakerz_web_images[1],
    type: "Web Application",
    technologies: ["EJS", "Express.js", "BootstrapCSS", "PostgreSQL"],
    features: [
      "Advanced filtering and search capabilities",
      "User account management with order history",
      "Admin page to input and edit products",
      "Wishlist and saved items functionality",
    ],
    year: 2023,
    liveUrl: "",
    githubUrl: "https://github.com/dennisjoel/sneakerz-web",
    gallery: sneakerz_web_images,
  },
  
]

