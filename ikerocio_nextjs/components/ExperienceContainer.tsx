import ExperienceField from "./ExperienceField";
import Container from "./Container";
import { Experience } from "@/models/Experience";
import useIndexTranslation from "@/pages/hooks/IndexTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faGraduationCap,
  faShareAltSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Education } from "@/models/Education";
import { Certification } from "@/models/Certification";
import CertificationField from "./CertificationField";
import { Network } from "@/models/Network";

interface ExperienceContainerProps {
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  rrss: Network[];
}

export default function ExperienceContainer({
  experiences,
  education,
  certifications,
  rrss,
}: ExperienceContainerProps) {
  const { t } = useIndexTranslation();

  return (
    <section className="dark:bg-gray-900 w-screen bg-white">
      <div className="mx-auto max-w-screen-xl py-2">
        <Container title={t("Experience & education")}>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <ul className="list-disc">
              {experiences &&
                experiences.map((experience, index) => (
                  <ExperienceField
                    key={index}
                    title={experience.title}
                    description={experience.description}
                    dateString={experience.dateString}
                    dateUrl={experience.dateUrl}
                  />
                ))}
            </ul>
            <div>
              <div className="flex items-center justify-start font-bold">
                <FontAwesomeIcon icon={faCertificate} className="w-8 mr-2" />
                <h3>{t("Diplomas")}</h3>
              </div>
              <ul className="list-disc">
                {certifications &&
                  certifications.map((cert, index) => (
                    <CertificationField
                      key={index}
                      title={cert.title}
                      url={cert.url}
                    />
                  ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="grid m-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-start font-bold">
                <FontAwesomeIcon icon={faGraduationCap} className="w-8 mr-2" />
                <h3>{t("Education")}</h3>
              </div>
              <ul className="list-disc">
                {education &&
                  education.map((ed, index) => (
                    <ExperienceField
                      key={index}
                      title={ed.title}
                      description={ed.description}
                      dateString={ed.dateString}
                      dateUrl={ed.dateUrl}
                    />
                  ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-start font-bold">
                <FontAwesomeIcon icon={faUser} className="w-8 mr-2" />
                <h3>{t("aboutMe")}</h3>
              </div>
              <p>{t("aboutMeDescription")}</p>
            </div>
          </div>
          <hr />
          <div className="grid m-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-start font-bold">
                <FontAwesomeIcon icon={faShareAltSquare} className="w-8 mr-2" />
                <h3>{t("socialNetworks")}</h3>
              </div>
              <ul className="list-disc list-inside m-4">
                {rrss &&
                  rrss.map((rs, index) => (
                    <li key={index} className="flex items-center">
                      <FontAwesomeIcon
                        className="text-gray-400 mr-2 w-4"
                        icon={rs.fa}
                      />
                      <a href={rs.url} target="_blank">
                        {rs.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
