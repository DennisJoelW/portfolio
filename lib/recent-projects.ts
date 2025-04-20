import type { Project } from "./projects"

export const recentProjects: Project[] = [
  {
    id: "goatsplit",
    title: "GoatSplit | Fitness Tracker",
    description: "A comprehensive web application for tracking fitness progressive overload",
    longDescription: 
      "GoatSplit is a powerful fitness tracking web application designed to help users monitor and optimize their training progress. Built with a focus on tracking progressive overload, the app enables users to log workouts, track personal records, and visualize strength gains over time.",
    image: "/images/goatsplit.png",
    type: "Web Application",
    technologies: ["Next.js", "Tailwind", "Supabase"],
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
    description: "Smart expense tracking web app with image transaction detection that automatically extracts amount data from receipt screenshots.",
    longDescription: 
      "VadExp is an innovative expense tracking application that simplifies financial management through advanced image recognition technology. The platform can automatically extract transaction details from receipt images, including amounts, dates, and vendors, streamlining the expense logging process.",
    image: "/images/vadexp.png",
    type: "Web Application",
    technologies: ["Next.js", "OCR API", "Supabase"],
    features: [
      "OCR-powered receipt scanning and data extraction",
      "Automatic amount and merchant detection from images",
      "Expense categorization and budget tracking",
      "Financial insights and spending patterns analysis",
      "Exportable reports for financial planning"
    ],
    year: 2025,
    liveUrl: "https://vadexp.vercel.app",
    githubUrl: "https://github.com/username/vadexp",
    gallery: ["/images/vadexp.png"]
  },
  {
    id: "upcoming",
    title: "Coming Soon | Future Project",
    description: "A new project currently in development.",
    longDescription: "Details about this exciting new project will be revealed soon. Stay tuned for updates on the latest innovation.",
    image: "/images/placeholder.svg",
    type: "Web Application",
    technologies: ["???"],
    features: [
      "Feature 1 coming soon",
      "Feature 2 coming soon",
      "Feature 3 coming soon"
    ],
    year: 2025,
    gallery: ["/images/placeholder.svg"]
  }
] 