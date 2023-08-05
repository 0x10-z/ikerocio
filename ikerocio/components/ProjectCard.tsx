import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Image from "next/image";

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
  return (
    <a href={url} className="flex justify-center items-center" target="_blank">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={400}
        className="transition-all duration-500 ease-in-out hover:transform hover:scale-110 hover:z-10 rounded shadow-xl"
      />
    </a>
  );
}
