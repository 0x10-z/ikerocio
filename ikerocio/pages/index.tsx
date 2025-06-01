import useIndexTranslation from "../hooks/IndexTranslation";
import Divider from "../components/Divider";
import SkillContainer from "@/components/SkillContainer";
import PageHeader from "@/components/PageHeader";
import ExperienceContainer from "@/components/ExperienceContainer";
import { skills, experiences, educations, certs, rrss, projects } from "@/data";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function IndexPage() {
  const { t } = useIndexTranslation();

  const translatedSkills = skills.map((skill) => ({
    ...skill,
    title: t(skill.title),
    description: t(skill.description),
  }));

  const translatedExperiences = experiences.map((experience) => ({
    ...experience,
    dateString: t(experience.dateString),
    description: t(experience.description),
  }));

  const translatedCerts = certs.map((cert) => ({
    ...cert,
    title: t(cert.title),
  }));

  const translatedRrss = rrss.map((rs) => ({
    ...rs,
    title: t(rs.title),
  }));

  const translatedProjects = projects.map((project) => ({
    ...project,
    title: t(project.title),
  }));

  return (
    <div className="text-gray-700 overflow-x-hidden dark:text-white">
      <PageHeader />
      <Divider />
      <SkillContainer skills={translatedSkills} />
      <Divider />
      <ExperienceContainer
        experiences={translatedExperiences}
        education={educations}
        certifications={translatedCerts}
        rrss={translatedRrss}
      />
      <Divider />
      <PortfolioGrid projects={translatedProjects} />
      <Divider />
      <Footer />
    </div>
  );
}
