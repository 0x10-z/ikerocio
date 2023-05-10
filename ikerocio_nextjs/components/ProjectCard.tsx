import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

interface ProjectCardProps {
  title: string;
  image: string;
  languages: string[];
  url: string;
}

export default function ProjectCard({
  title,
  image,
  languages,
  url,
}: ProjectCardProps) {
  const style = {
    backgroundImage: `url('${image}')`,
  };
  return (
    <a href={url} target="_blank">
      <Card
        shadow={false}
        className="relative shadow-xl hover:transform hover:scale-110 hover:z-10 rounded grid h-80 w-full max-w-20 items-end justify-center overflow-hidden text-center">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          style={style}
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}>
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-8 px-6 md:px-12">
          <Typography
            variant="h1"
            color="white"
            className="mb-6 text-xl shadow-xl font-medium leading-[1.5] text-white">
            {title}
          </Typography>
          <div className="flex flex-col justify-end">
            <div className="flex flex-row justify-center">
              {languages.map((language, index) => (
                <Avatar
                  key={index}
                  size="xl"
                  alt="candice wu"
                  className="border-2 w-10 border-white rounded-full shadow-xl"
                  src={language}
                />
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </a>
  );
}
