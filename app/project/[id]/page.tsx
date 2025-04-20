import { projects } from "@/lib/projects"
import ProjectPageClient from "./ProjectPageClient"
import { recentProjects } from "@/lib/recent-projects"

// Combine all projects for static path generation
const allProjects = [...projects, ...recentProjects]

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ProjectPageClient id={resolvedParams.id} />;
}

