import useIndexTranslation from "../hooks/IndexTranslation";
import Divider from "../components/Divider";
import SkillContainer from "@/components/SkillContainer";
import PageHeader from "@/components/PageHeader";
import ExperienceContainer from "@/components/ExperienceContainer";
import ProjectContainer from "@/components/ProjectContainer";
import { skills, experiences, educations, certs, rrss, projects } from "@/data";

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

  const translatedEducations = educations.map((education) => ({
    ...education,
    university: t(education.university),
    description: t(education.description),
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
        education={translatedEducations}
        certifications={translatedCerts}
        rrss={translatedRrss}
      />
      <Divider />
      <ProjectContainer projects={translatedProjects} />
    </div>
  );
}
