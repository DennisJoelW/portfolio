"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import { recentProjects } from "@/lib/recent-projects"

// Combine both project sources
const allProjects = [...projects, ...recentProjects]

// Update the project detail page to include mobile device frames for mobile projects
export default function ProjectPageClient({ id }: { id: string }) {
  const project = allProjects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const isMobileProject = project.type.toLowerCase().includes("mobile")

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Add the grid pattern and diagonal lines to the background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="diagonal-lines"></div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8 relative z-10">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-[#47E3E3]">Dennis</span>Joel
        </Link>
        <Link href="/">
          <Button variant="ghost" className="text-[#47E3E3] hover:bg-[#47E3E3]/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>
      </nav>

      {/* Project Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="diagonal-lines opacity-50"></div>
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{project.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#47E3E3] pl-4">Project Overview</h2>
            <p className="text-gray-300 mb-8">{project.longDescription}</p>

            <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#47E3E3] pl-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* Mobile Device Preview for mobile projects */}
            {isMobileProject && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#47E3E3] pl-4">Mobile Preview</h2>
                <div className="flex justify-center">
                  <div className="phone-frame floating">
                    <div className="phone-screen">
                      <Image
                        src={project.mobilePreview || "/placeholder.svg?height=600&width=280"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#47E3E3] pl-4">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {project.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-gray-800 group relative">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <p className="text-white text-sm">Screenshot {index + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 sticky top-8">
              <h3 className="text-xl font-bold mb-6">Project Details</h3>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-sm text-gray-400">Project Type</h4>
                  <p>{project.type}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-[#47E3E3] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Year</h4>
                  <p>{project.year}</p>
                </div>
              </div>

              <div className="space-y-3">
                {project.liveUrl && (
                  <Button className="w-full bg-[#47E3E3] hover:bg-[#3bc7c7] text-black" onClick={() => window.open(project.liveUrl)}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Preview
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" className="w-full border-[#47E3E3] text-[#47E3E3] hover:bg-[#47E3E3]/10">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Projects */}
      <div className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-800 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allProjects
            .filter((p) => p.id !== project.id)
            .slice(0, 3)
            .map((p) => (
              <Link key={p.id} href={`/project/${p.id}`} className="group">
                <div className="relative rounded-xl overflow-hidden h-64 mb-4 border border-gray-800">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dennis Joel. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

