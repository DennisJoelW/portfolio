import { projects } from "@/lib/projects"
import ProjectPageClient from "./ProjectPageClient"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectPageClient id={params.id} />;
}

