import { Skill } from "./models/Skill";
import {
  faBlog,
  faCodeBranch,
  faDatabase,
  faEnvelope,
  faServer,
  faShieldAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDocker,
  faAws,
  faLinkedin,
  faFlickr,
  faCss3Alt,
  faJava,
  faPhp,
  faAndroid,
  faPython,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Experience } from "@/models/Experience";
import { Education } from "@/models/Education";
import { Certification } from "@/models/Certification";
import { Network } from "@/models/Network";
import { Project } from "@/models/Project";

export const skills = [
  new Skill(
    "skillDataAnalysis",
    "skillDataAnalysisDescription",
    faCodeBranch,
    "#d910f1"
  ),
  new Skill(
    "skillCybersec",
    "skillCybersecDescription",
    faShieldAlt,
    "rgb(221, 149, 81)"
  ),
  new Skill("skillDevops", "skillDevopsDescription", faDocker, "#0db7ed"),
  new Skill("skillCloud", "skillCloudDescription", faAws, "ff9900"),
  new Skill("skillPython", "skillPythonDescription", faPython, "4584b6"),
  new Skill("skillItOt", "skillItOtDescription", faServer, "868e96"),
  new Skill(
    "skillJavascript",
    "skillJavascriptDescription",
    faJsSquare,
    "f7df1e"
  ),
  new Skill("skillCss", "skillCssDescription", faCss3Alt, "264de4", true),
  new Skill("skillJava", "skillJavaDescription", faJava, "db1f29"),
  new Skill("skillPhp", "skillPhpDescription", faPhp, "4f5b93"),
  new Skill("skillDb", "skillDbDescription", faDatabase, "00758f"),
  new Skill("skillAndroid", "skillAndroidDescription", faAndroid, "a4c639"),
];

export const experiences = [
  new Experience(
    "Kurago",
    "experienceKuragoDescription",
    "experienceKurago",
    "https://kurago.software/"
  ),
  new Experience(
    "SMC International Training ",
    "experienceSmcDescription",
    "experienceSmc",
    "https://www.smctraining.com/es/webpage/indexpage/1181"
  ),
  new Experience(
    "Becario Mondragon Unibertsitatea",
    "experienceMuDescription",
    "experienceMu",
    "#"
  ),
  new Experience(
    "Freelance",
    "experienceFreelanceDescription",
    "experienceFreelance",
    "https://ikerocio.com/"
  ),
  new Experience(
    "Njoy Party & Events",
    "experienceNjoyDescription",
    "experienceNjoy",
    "#"
  ),
];

export const educations = [
  new Education(
    "educationMaster",
    "educationMasterDescription",
    "2019-2020",
    "https://www.mondragon.edu/es/master-universitario-analisis-datos-ciberseguridad-computacion-nube"
  ),
  new Education(
    "educationDegree",
    "educationDegreeDescription",
    "2010-2018",
    "https://www.mondragon.edu/es/grado-ingenieria-informatica"
  ),
];

export const certs = [
  new Certification(
    "certEjpt",
    "https://verified.elearnsecurity.com/certificates/cdbd4f81-182a-42f7-a48c-8c5199fe4b1d"
  ),
  new Certification(
    "certAz900",
    "https://www.credly.com/badges/4b7b87fe-3638-488d-8668-263beeca79f2?source=linked_in_profile"
  ),
  new Certification(
    "certAz400",
    "https://www.credly.com/badges/65f67530-9b8f-4953-baeb-2e96b4e90434/linked_in_profile"
  ),
  new Certification(
    "certCcna2",
    "http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html"
  ),
  new Certification(
    "certCcna3",
    "http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html"
  ),
  new Certification(
    "certCcna4",
    "http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html"
  ),
  new Certification(
    "certCcnaIoe",
    "https://learningnetwork.cisco.com/community/certifications/iot"
  ),
  new Certification(
    "certDjango",
    "http://www.spri.eus/euskadinnova/es/enpresa-digitala/agenda/desarrollo-agil-con-python-django/3889.aspx"
  ),
];

export const rrss = [
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

export const projects = [
  new Project(
    "FastGPT",
    "/image/portfolio/fastapi.png",
    ["/image/portfolio/python.png", "/image/portfolio/react.png"],
    "https://chat.ikerocio.com"
  ),
  new Project(
    "EzdagoGasteizB",
    "/image/portfolio/ezdago.png",
    ["/image/portfolio/django.png", "/image/portfolio/python.png"],
    "https://ezdagogasteizb.ikerocio.com"
  ),
  new Project(
    "Aitor viewbook",
    "/image/portfolio/aitor_viewbook.png",
    ["/image/portfolio/django.png", "/image/portfolio/python.png"],
    "https://aitorrayo.com"
  ),
];
