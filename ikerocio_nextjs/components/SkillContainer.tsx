import SkillField from "./SkillField";
import Container from "./Container";
import { Skill } from "@/models/Skill";
import useIndexTranslation from "@/pages/hooks/IndexTranslation";

interface SkillContainerProps {
  skills: Skill[];
}

export default function SkillContainer({ skills }: SkillContainerProps) {
  const { t } = useIndexTranslation();

  return (
    <section className="dark:bg-gray-900 w-screen bg-white">
      <div className="mx-auto max-w-screen-xl py-2">
        <Container title={t("Skills")}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillField
                key={index}
                fa={skill.fa}
                faStyle={skill.faColor}
                title={skill.title}
                description={skill.description}
                canBeClicked={skill.canBeClick}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
