import { projects } from "@/lib/projects"
import ProjectPageClient from "./ProjectPageClient"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ProjectPageClient id={resolvedParams.id} />;
}

