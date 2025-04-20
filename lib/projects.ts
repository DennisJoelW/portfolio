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

const bestinteria_images = [
  "/images/bestinteria1.png",
  "/images/bestinteria2.png",
  "/images/bestinteria3.png",
  "/images/bestinteria4.png",
  "/images/bestinteria5.png",
  "/images/bestinteria6.png",
  "/images/bestinteria7.png",
]

export const projects: Project[] = [
  {
    id: "bestinteria",
    title: "Best Interia | Interior Sales Website",
    description: "A web-based e-commerce platform for interior products, specializing in window fashion and room accessories.",
    longDescription:
      "Best Interia is a modern e-commerce platform designed for selling interior products, including blinds, curtains, and screens. Built with a user-friendly interface, it allows customers to browse, filter, and order products seamlessly. The admin panel provides easy order management and tracking.",
    image: bestinteria_images[0],
    type: "Web Application",
    technologies: ["React.js", "Supabase", "TailwindCSS"],
    features: [
      "Product catalog with image galleries",
      "Dynamic product filtering without a separate filter button",
      "User authentication and order history",
      "Admin dashboard for order and payment management",
      "Integrated payment confirmation system",
    ],
    year: 2025,
    liveUrl: "",
    githubUrl: "https://github.com/yourusername/bestinteria",
    gallery: bestinteria_images,
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

