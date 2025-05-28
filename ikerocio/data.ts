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
  // new Experience(
  //   "Bystronic Software",
  //   "experienceBystronicDescription",
  //   "experienceBystronic",
  //   "https://bystronic.software/",
  //   "/image/companies/bystronic.png"
  // ),
  new Experience(
    "Kurago Software",
    "experienceKuragoDescription",
    "experienceKurago",
    "https://kurago.software/",
    "/image/companies/kurago_software.jpg"
  ),
  new Experience(
    "SMC International Training ",
    "experienceSmcDescription",
    "experienceSmc",
    "https://www.smctraining.com/es/webpage/indexpage/1181",
    "/image/companies/smc.png"
  ),
  new Experience(
    "Becario Mondragon Unibertsitatea",
    "experienceMuDescription",
    "experienceMu",
    "#",
    "/image/companies/mu.png"
  ),
  new Experience(
    "Freelance",
    "experienceFreelanceDescription",
    "experienceFreelance",
    "https://ikerocio.com/",
    "/image/io-icon.png"
  ),
  new Experience(
    "Njoy Party & Events",
    "experienceNjoyDescription",
    "experienceNjoy",
    "#",
    "/image/companies/njoy.jpg"
  ),
];

export const educations = [
  new Education(
    "educationMasterOffSec",
    "educationMasterOffSecDescription",
    "2024-2025",
    "https://www.campusciberseguridad.com/master-en-seguridad-ofensiva",
    "/image/companies/ucam.png"
  ),
  new Education(
    "educationMaster",
    "educationMasterDescription",
    "2019-2020",
    "https://www.mondragon.edu/es/master-universitario-analisis-datos-ciberseguridad-computacion-nube",
    "/image/companies/mu.png"
  ),
  new Education(
    "educationDegree",
    "educationDegreeDescription",
    "2010-2018",
    "https://www.mondragon.edu/es/grado-ingenieria-informatica",
    "/image/companies/mu.png"
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
    "Image 2 PDF converter",
    "/image/portfolio/image-to-pdf.png",
    "https://github.com/0x10-z/image-to-pdf-converter",
    "https://image-to-pdf-converter-two.vercel.app/",
    ["React", "PDF", "Tool", "Frontend"],
    "projectImageToPdfConverter"
  ),
  new Project(
    "Whatsapp Chat Analyzer",
    "/image/portfolio/whatsapp-chat-analyzer.png",
    "https://github.com/0x10-z/Whatsapp-Chat-Analyzer",
    "https://whatsapp-chat-analyzer-two.vercel.app/",
    ["React", "Chat Analysis", "Visualization", "Tool"],
    "projectWhatsappChatAnalyzer"
  ),
  new Project(
    "IPTV List Manager",
    "/image/portfolio/iptv-list-manager.png",
    "https://github.com/0x10-z/iptv-list-manager",
    "https://iptv-list-manager.vercel.app/",
    ["React", "Media", "Tool", "Frontend"],
    "projectIptvListManager"
  ),
  new Project(
    "One Cat a Day",
    "/image/portfolio/one-cat-a-day.png",
    "https://github.com/0x10-z/One-Cat-a-Day",
    "https://one-cat-a-day.vercel.app/",
    ["React Native", "Mobile App", "Humor", "Daily Content"],
    "projectOneCatADay"
  ),
  new Project(
    "Music Player",
    "/image/portfolio/gasteizko-rap.png",
    "https://github.com/0x10-z/gasteizko-rap-player/",
    "https://gasteizko-rap-player.vercel.app/",
    ["React", "Music"],
    "projectGasteizkoRap"
  ),
  new Project(
    "Retrogasteiz",
    "/image/portfolio/retrogasteiz_landscape2.png",
    "https://github.com/0x10-z/retrogasteiz",
    "https://retrogasteiz.com",
    ["Python", "AI", "Image Processing", "Photography", "Personal"],
    "projectRetrogasteiz"
  ),
  new Project(
    "DB Multiverse",
    "/image/portfolio/dbmultiverse.png",
    "https://github.com/0x10-z/python-dbuniverse-downloader",
    "https://github.com/0x10-z/python-dbuniverse-downloader/releases/tag/DragonBallMultiverse-PDF-latest",
    ["Python", "Scraping", "PDF"],
    "projectDbMultiverse"
  ),
  new Project(
    "FastGPT",
    "/image/portfolio/fastapi_landscape2.png",
    "https://github.com/0x10-z/fast-gpt",
    null,
    ["FastAPI", "React", "OpenAI", "Chatbot", "Fullstack"],
    "projectFastGpt"
  ),
  new Project(
    "EzdagoGasteizB",
    "/image/portfolio/ezdago_landscape2.png",
    null,
    "https://ezdagogasteizb.ikerocio.com",
    ["Django", "Sustainability", "Civic Tech", "Personal"],
    "projectEzDagoGasteizB"
  ),
  new Project(
    "Aitor viewbook",
    "/image/portfolio/aitorrayo.png",
    null,
    "https://aitorrayo.com",
    ["Django", "Photography", "Personal Website"],
    "projectAitorViewbook"
  ),

  new Project(
    "Breakout",
    "/image/portfolio/mubreakout.png",
    "https://github.com/0x10-z/mubreakout",
    null,
    ["Python", "PyGame"],
    "projectBreakout"
  ),
];
