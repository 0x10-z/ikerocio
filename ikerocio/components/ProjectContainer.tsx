import Container from "./Container";
import useIndexTranslation from "@/hooks/IndexTranslation";
import ProjectCard from "./ProjectCard";
import { Project } from "@/models/Project";

interface ProjectContainerProps {
  projects: Project[];
}

export default function ProjectContainer({ projects }: ProjectContainerProps) {
  const { t } = useIndexTranslation();

  return (
    <section className="dark:bg-gray-900 w-screen bg-white">
      <div className="mx-auto max-w-screen-xl py-2">
        <Container title={t("Portfolio")}>
          <div className="grid grid-cols-1 gap-6 lg:mx-auto lg:max-w-4xl">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
