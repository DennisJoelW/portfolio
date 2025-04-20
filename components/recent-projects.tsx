"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { recentProjects } from "@/lib/recent-projects" //u

export default function RecentProjects() {
  return (
    <section className="pt-20 pb-24 px-4 md:px-8 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="diagonal-lines opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-gray-900/90 to-black/90"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#47E3E3] to-blue-400">Recent Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#47E3E3] to-blue-400 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">Showcasing my latest works that blend beautiful design with powerful functionality</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <Link href={`/project/${project.id}`} key={project.id}>
              <div 
                className="group rounded-xl overflow-hidden bg-gray-900/30 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-[#47E3E3]/50 hover:shadow-[0_0_30px_rgba(71,227,227,0.15)] transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#47E3E3] text-black rounded-full text-xs font-medium">
                    {project.year}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#47E3E3] transition-colors">{project.title}</h3>
                    <div className="flex gap-1">
                      {project.type === "Web Application" ? (
                        <span className="px-2 py-1 bg-gray-800/80 text-[#47E3E3] rounded-full text-xs">Web</span>
                      ) : project.type === "Mobile Application" ? (
                        <span className="px-2 py-1 bg-gray-800/80 text-[#47E3E3] rounded-full text-xs">Mobile</span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-800/80 text-[#47E3E3] rounded-full text-xs">Upcoming</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">{project.description}</p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800/50">
                    <div className="flex -space-x-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        tech !== "???" && (
                          <span 
                            key={tech} 
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 text-xs text-[#47E3E3] border border-gray-700" 
                            style={{ zIndex: 3-i }}
                          >
                            {tech.charAt(0)}
                          </span>
                        )
                      ))}
                    </div>
                    <div className="flex items-center text-[#47E3E3] group-hover:translate-x-1 transition-transform">
                      Details <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 