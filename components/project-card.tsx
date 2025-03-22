"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800 h-[400px] backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

      {/* Glowing border effect */}
      <div
        className={`
        absolute inset-0 rounded-xl border border-[#47E3E3]/50
        transition-all duration-500 opacity-0 blur-sm
        ${isHovered ? "opacity-100" : "opacity-0"}
      `}
      ></div>

      <div className="relative h-[60%] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <Link href={`/project/${project.id}`}>
          <div
            className={`
            flex items-center gap-2 text-[#47E3E3] 
            transition-all duration-300
            ${isHovered ? "translate-x-2" : "translate-x-0"}
          `}
          >
            View Project <ArrowUpRight className="h-4 w-4" />
          </div>
        </Link>
      </div>

      {/* Tech tags */}
      <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-2 justify-end">
        {project.technologies.slice(0, 2).map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-black/50 backdrop-blur-md text-[#47E3E3] rounded-full text-xs border border-[#47E3E3]/30"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Glowing effect on hover */}
      <div
        className={`
        absolute inset-0 bg-gradient-to-r from-[#47E3E3]/10 to-blue-500/10
        opacity-0 transition-opacity duration-300
        ${isHovered ? "opacity-100" : "opacity-0"}
      `}
      ></div>
    </motion.div>
  )
}

