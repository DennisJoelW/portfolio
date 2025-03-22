import { projects } from "@/lib/projects"
import ProjectPageClient from "./ProjectPageClient"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const id = params.id
  return <ProjectPageClient id={id} />
}

