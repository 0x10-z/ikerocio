import useIndexTranslation from "@/hooks/IndexTranslation";
import Container from "./Container";
import { PortfolioCard } from "./PortfolioCard";
import { Project } from "@/models/Project";

interface ProjectContainerProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: ProjectContainerProps) {
  const { t } = useIndexTranslation();

  return (
    <section className="dark:bg-gray-900 w-screen bg-white">
      <div className="mx-auto max-w-screen-xl py-2">
        <Container title={t("Portfolio")}>
          <div className="grid m-2 grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, index) => (
              <PortfolioCard key={index} number={index + 1} {...p} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
