import {
  faBlog,
  faCodeBranch,
  faEnvelope,
  faShieldAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import useIndexTranslation from "./hooks/IndexTranslation";
import Divider from "../components/Divider";
import { Skill } from "@/models/Skill";
import SkillContainer from "@/components/SkillContainer";
import PageHeader from "@/components/PageHeader";
import {
  faDocker,
  faAws,
  faLinkedin,
  faFlickr,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import ExperienceContainer from "@/components/ExperienceContainer";
import { Experience } from "@/models/Experience";
import { Education } from "@/models/Education";
import { Certification } from "@/models/Certification";
import { Network } from "@/models/Network";

export default function IndexPage() {
  const { t } = useIndexTranslation();

  const skills = [
    new Skill(
      t("skillDataAnalysis"),
      t("skillDataAnalysisDescription"),
      faCodeBranch,
      "#d910f1"
    ),
    new Skill(
      t("skillCybersec"),
      t("skillCybersecDescription"),
      faShieldAlt,
      "rgb(221, 149, 81)"
    ),
    new Skill(
      t("skillDevops"),
      t("skillDevopsDescription"),
      faDocker,
      "#0db7ed"
    ),
    new Skill(t("skillCloud"), t("skillCloudDescription"), faAws, "ff9900"),
    new Skill(t("css"), t("cssDescription"), faCss3Alt, "264de4", true),
  ];

  const experiences = [
    new Experience(
      "Kurago",
      "Software Engineer",
      "2021-Actualidad",
      "https://kurago.software/"
    ),
    new Experience(
      "SMC International Training ",
      "I develop MES of SIF-400 in SMC. Between OT and IT environments.",
      "2018-2021",
      "https://www.smctraining.com/es/webpage/indexpage/1181"
    ),
    new Experience(
      "Becario Mondragon Unibertsitatea",
      "I participated in a research project related to ML on laser machining system.",
      "2016-2017",
      "#"
    ),
    new Experience(
      "Freelance",
      "En mi tiempo libre siempre me han gustado los retos nuevos de aprender nuevas tecnologías y si puede ser de manera remunerada, mejor aun.",
      "2015-2018",
      "https://ikerocio.com/"
    ),
    new Experience(
      "Njoy Party & Events",
      "Software developer, webmaster and sysadmin on this small event company. Specific software to make parties more enjoyable.",
      "2014-2015",
      "#"
    ),
  ];

  const educations = [
    new Education(
      "Cybersecurity, Data Analysis and Cloud Computing Master's Degree",
      "Universidad de Mondragón",
      "2019-2020",
      "https://www.mondragon.edu/es/master-universitario-analisis-datos-ciberseguridad-computacion-nube"
    ),
    new Education(
      "Software Engineering",
      "Universidad de Mondragón",
      "2010-2018",
      "https://www.mondragon.edu/es/grado-ingenieria-informatica"
    ),
  ];

  const certs = [
    new Certification(
      "eJPT: Junior Penetration Tester",
      "https://verified.elearnsecurity.com/certificates/cdbd4f81-182a-42f7-a48c-8c5199fe4b1d"
    ),
    new Certification(
      "Microsoft Certified: Azure Fundamentals",
      "https://www.credly.com/badges/4b7b87fe-3638-488d-8668-263beeca79f2?source=linked_in_profile"
    ),
    new Certification(
      "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
      "https://www.credly.com/badges/65f67530-9b8f-4953-baeb-2e96b4e90434/linked_in_profile"
    ),
    new Certification(
      "Cisco CCNA2: Routing and Switching essentials",
      "http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html"
    ),
    new Certification(
      "Cisco CCNA3: Scaling Networks",
      "http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html"
    ),
    new Certification(
      "Cisco CCNA4: Routing and Switching. Connecting Networks",
      "http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html"
    ),
    new Certification(
      "Cisco IoE: Introduction to the Internet of Everything",
      "https://learningnetwork.cisco.com/community/certifications/iot"
    ),
    new Certification(
      "Desarrollo Web ágil con Python y Django (15h)",
      "http://www.spri.eus/euskadinnova/es/enpresa-digitala/agenda/desarrollo-agil-con-python-django/3889.aspx"
    ),
  ];

  const rrss = [
    new Network("Iker Ocio Zuazo", "https://ikerocio.com", faUser),
    new Network("Blog", "https://blog.ikerocio.com", faBlog),
    new Network(
      "LinkedIn",
      "https://www.linkedin.com/hp/?dnr=TGyOzgcX4qa3QuJirGRNGgjo4qaIQIhgxmnw",
      faLinkedin
    ),
    new Network("FlickR", "https://www.flickr.com/photos/ikerocio/", faFlickr),
    new Network("iker@ikerocio.com", "mailto://iker@ikerocio.com", faEnvelope),
  ];

  return (
    <div className="text-gray-700 overflow-x-hidden dark:text-white">
      <PageHeader />
      <Divider />
      <SkillContainer skills={skills} />
      <Divider />
      <ExperienceContainer
        experiences={experiences}
        education={educations}
        certifications={certs}
        rrss={rrss}
      />
      <Divider />
      <SkillContainer skills={skills} />
    </div>
  ); // <div>Using a variable 42</div>
}
