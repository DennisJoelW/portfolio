import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { projects } from "@/lib/projects"
import ProjectCard from "@/components/project-card"
import TerminalSection from "@/components/terminal-section"
import MobileDeviceShowcase from "@/components/mobile-device-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section with Animated Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="diagonal-lines"></div>
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 md:p-8">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-[#47E3E3] cursor-pointer">Dennis</span><span className="cursor-pointer">Joel</span>
          </div>
          <div className="md:flex hidden gap-6">
            <Link href="#about" className="hover:text-[#47E3E3] transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-[#47E3E3] transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-[#47E3E3] transition-colors">
              Contact
            </Link>
          </div>
        </nav>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-[#47E3E3]">Dennis Joel</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300">Mobile & Web Apps Developer</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-400">
            Creating innovative digital experiences with a focus on user-centered design and cutting-edge technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#47E3E3] hover:bg-[#3bc7c7] text-black font-medium">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-[#47E3E3] text-[#47E3E3] hover:bg-[#47E3E3]/10">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-[#47E3E3] flex justify-center">
            <div className="w-1 h-3 bg-[#47E3E3] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Add this after the hero section and before the projects section */}
      <TerminalSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="diagonal-lines opacity-30"></div>
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative">
              MY PROJECTS
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#47E3E3]"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Replace the "Featured Mobile Projects" section with this: */}
      <MobileDeviceShowcase />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-black/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#47E3E3] to-blue-500 blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#47E3E3]">
                <Image src="/placeholder.svg?height=400&width=400" alt="Dennis Joel" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate developer with expertise in creating modern web and mobile applications. My journey in
              tech has led me to work on diverse projects from AI chatbots to e-commerce platforms.
            </p>
            <p className="text-gray-300 mb-8">
              I specialize in React, Next.js, React Native, and modern frontend technologies, with a strong focus on
              creating intuitive and visually stunning user interfaces.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "React Native", "UI/UX Design"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-800 text-[#47E3E3] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through any of the platforms below.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#47E3E3] text-[#47E3E3] hover:bg-[#47E3E3]/10"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#47E3E3] text-[#47E3E3] hover:bg-[#47E3E3]/10"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#47E3E3] text-[#47E3E3] hover:bg-[#47E3E3]/10"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#47E3E3] text-[#47E3E3] hover:bg-[#47E3E3]/10"
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </div>

          <Button className="bg-[#47E3E3] hover:bg-[#3bc7c7] text-black font-medium">Send Message</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dennis Joel. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

