import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

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

  const movementDelta = 5; // less quantity is more movement
  const [parallaxData, setParallaxData] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    if (!e.currentTarget) return;
    const cardHeader = e.currentTarget.getBoundingClientRect();
    const xPos = ((e.clientX - cardHeader.left) / cardHeader.width) * 100;
    const yPos = ((e.clientY - cardHeader.top) / cardHeader.height) * 100;
    setParallaxData({ x: xPos, y: yPos });
  };

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMoveWithAnimationFrame = (e: any) => {
      // Cancel the previous animation frame request
      cancelAnimationFrame(animationFrameId);

      // Request a new animation frame with the updated parallax data
      animationFrameId = requestAnimationFrame(() => {
        handleMouseMove(e);
      });
    };

    document.addEventListener("mousemove", handleMouseMoveWithAnimationFrame);

    return () => {
      // Cancel the animation frame request and remove the event listener
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", handleMouseMoveWithAnimationFrame);
    };
  }, []);
  
  return (
    <a href={url} target="_blank">
      <Card
        shadow={false}
        className="relative shadow-xl transition-all duration-500 ease-in-out hover:transform hover:scale-110 hover:z-10 rounded grid h-80 w-full max-w-20 items-end justify-center overflow-hidden text-center">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          style={{
            backgroundPositionX: `${-parallaxData.x / movementDelta}px`,
            backgroundPositionY: `${-parallaxData.y / movementDelta}px`,
            backgroundImage: `url('${image}')`,
          }}
          onMouseMove={handleMouseMove}
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
