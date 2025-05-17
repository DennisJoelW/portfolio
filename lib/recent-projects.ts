import type { Project } from "./projects"

const bestinteria_images = [
  "/images/bestinteria1.png",
  "/images/bestinteria2.png",
  "/images/bestinteria3.png",
  "/images/bestinteria4.png",
  "/images/bestinteria5.png",
  "/images/bestinteria6.png",
  "/images/bestinteria7.png",
]

const tinyprettycloset_images = [
  "/images/tpc_1.png",
  "/images/tpc_2.png",
  "/images/tpc_3.png",
  "/images/tpc_4.png",
  "/images/tpc_6.png",
  "/images/tpc_7.png",
]

const samanko_images = [
  "/images/samanko_1.png",
  "/images/samanko_2.png",
  "/images/samanko_3.png",
  "/images/samanko_4.png",
  "/images/samanko_5.png",
  "/images/samanko_6.png",
]

const limitless_images = [
  "/images/badak0.jpg",
  "/images/badak1.jpg",
  "/images/badak2.jpg",
  "/images/badak3.jpg",
  "/images/badak4.jpg",
  "/images/badak5.jpg",
  "/images/badak6.jpg",
]

export const recentProjects: Project[] = [
  {
    id: "limitlessgymapp",
    title: "Limitless Gym | Class Booking Mobile App",
    description: "A powerful mobile app for seamless fitness class bookings and real-time schedule management for limitless fitness.",
    longDescription:
      "Limitless is a feature-rich mobile application built for limitless gym  to streamline the booking process for classes. Developed using React Native, Redux, and modern mobile technologies, it is built for members to browse availability, make instant bookings, and manage their workout schedules—all within an intuitive and responsive interface. Designed with performance and user experience in mind, Limitless bridges the gap between fitness enthusiasts and facility providers.",
    image: "/images/limitles.png",
    type: "Mobile Application",
    technologies: [
      "React Native",
      "Expo",
      "Redux",
      "Tailwind CSS (via NativeWind)",
      "TypeScript",
    ],
    features: [
      "Facility and class booking with real-time availability",
      "User authentication and profile management",
      "Booking history and upcoming schedules",
      "Push notifications for booking reminders",
      "Dark mode and responsive design",
    ],
    year: 2025,
    liveUrl: "", 
    githubUrl: "https://github.com/yourusername/limitless",
    gallery: limitless_images,
    mobilePreview: limitless_images[3],
  },  
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
    id: "tinyprettycloset",
    title: "Tiny Pretty Closet",
    description: "A minimalist web showcase for displaying thrifted fashion items, complete with an admin panel for inventory management.",
    longDescription:
      "The Tiny Pretty Closet is a thrift product display web application that presents available fashion pieces with details such as price, size, and condition. It is not an e-commerce site, but a product showcase. Admins can easily add, edit, delete, or mark items as sold through a dedicated admin interface.",
    image: tinyprettycloset_images[0],
    type: "Web Application",
    technologies: ["Next.js", "Express.js", "PostgreSQL"],
    features: [
      "Thrift product gallery with photos and descriptions",
      "Display product price, size, and condition",
      "Admin panel for adding, editing, and deleting products",
      "Mark items as sold to hide or distinguish from available stock",
      "Responsive layout with clean, user-friendly UI"
    ],
    year: 2025,
    liveUrl: "https://tinyprettycloset.vercel.app", 
    githubUrl: "https://github.com/yourusername/tinyprettycloset",
    gallery: tinyprettycloset_images
  },  
  {
    id: "samanko",
    title: "Samanko | Coffee Shop Landing Page",
    description: "A clean and elegant landing page for Samanko, a premium coffee roaster and café.",
    longDescription:
      "Samanko is a modern landing page built for a premium coffee brand. It highlights the brand's story, location, and product visuals with a minimalist and elegant aesthetic. The website is designed to give visitors a glimpse into the Samanko experience and encourage in-person visits or contact.",
    image: samanko_images[0],
    type: "Web Application",
    technologies: ["Next.js"],
    features: [
      "Responsive landing page for desktop and mobile",
      "Hero section with brand tagline and call-to-action",
      "About section introducing the coffee shop",
      "Image gallery showcasing the café ambiance and products",
      "Location and contact information section"
    ],
    year: 2025,
    liveUrl: "", // Add if hosted
    githubUrl: "https://github.com/yourusername/samanko",
    gallery: samanko_images
  },  
] 