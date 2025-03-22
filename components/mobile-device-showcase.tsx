"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MobileProject {
  id: string
  title: string
  description: string
  image: string
}

const mobileProjects: MobileProject[] = [
  {
    id: "resepku",
    title: "ResepKu",
    description: "Food Recipe Seeker App",
    image: "/images/resepku_mobile_preview.png",
  },
  {
    id: "sneakerz-react-native",
    title: "Sneakerz",
    description: "React Native Shopping App",
    image: "/images/sneakerz_mobile_preview.png",
  },
]

export default function MobileDeviceShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % mobileProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + mobileProjects.length) % mobileProjects.length)
  }

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="diagonal-lines opacity-30"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="relative">
            MOBILE PROJECTS
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#47E3E3]"></span>
          </span>
        </h2>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-4xl">
            {/* Navigation buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full border border-[#47E3E3]/30 hover:bg-[#47E3E3]/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full border border-[#47E3E3]/30 hover:bg-[#47E3E3]/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Device showcase */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              {/* Main device */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="phone-frame floating"
              >
                <div className="phone-screen">
                  <Image
                    src={mobileProjects[currentIndex].image || "/placeholder.svg"}
                    alt={mobileProjects[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-[#47E3E3] font-bold">{mobileProjects[currentIndex].title}</p>
                  <p className="text-xs text-gray-300">{mobileProjects[currentIndex].description}</p>
                </div>
              </motion.div>

              {/* Project info */}
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-4 text-[#47E3E3]">{mobileProjects[currentIndex].title}</h3>
                <p className="text-gray-300 mb-6">
                  {currentIndex === 0 &&
                    "A comprehensive food recipe application that helps users discover, save, and organize their favorite recipes with an elegant UI and intuitive navigation."}
                  {currentIndex === 1 &&
                    "A cutting-edge mobile e-commerce platform for sneaker enthusiasts with AR try-on features, real-time inventory updates, and secure payment processing."}
                  {currentIndex === 2 &&
                    "An AI-powered virtual assistant chatbot with natural language processing capabilities, context-aware responses, and a sleek dark mode interface."}
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentIndex === 0 &&
                    ["React Native", "Firebase", "Redux", "Food API"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 text-[#47E3E3] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  {currentIndex === 1 &&
                    ["React Native", "Redux", "Firebase", "AR Kit"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 text-[#47E3E3] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  {currentIndex === 2 &&
                    ["React Native", "TypeScript", "OpenAI API", "Firebase"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 text-[#47E3E3] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 gap-2">
              {mobileProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#47E3E3]" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

