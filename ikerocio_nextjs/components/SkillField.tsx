import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

interface SkillFieldProps {
  fa: IconDefinition;
  faStyle: string;
  title: string;
  description: string;
  canBeClicked: boolean;
}

export default function SkillField({
  fa,
  faStyle,
  title,
  description,
  canBeClicked = false,
}: SkillFieldProps) {
  return (
    <div
      style={{ pointerEvents: canBeClicked ? "auto" : "none" }}
      className={
        `flex flex-col space-x-4` + canBeClicked
          ? "transition duration-300 ease-in-out hover:transform hover:scale-110 hover:-rotate-3"
          : ""
      }>
      <div className="flex flex-row ml-3 items-center justify-start">
        <FontAwesomeIcon icon={fa} style={{ color: faStyle }} className="w-8" />
        <h2
          className={`m-2 text-lg ${
            canBeClicked ? "font-bold" : "font-medium"
          }`}>
          {title}
        </h2>
      </div>
      <p className="items-center">{description}</p>
    </div>
  );
}
