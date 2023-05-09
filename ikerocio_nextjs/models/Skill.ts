import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class Skill {
  title: string;
  description: string;
  fa: IconDefinition;
  faColor: string;
  canBeClick: boolean;

  constructor(
    title: string,
    description: string,
    fa: IconDefinition,
    faColor: string,
    canBeClick = false
  ) {
    this.title = title;
    this.description = description;
    this.fa = fa;
    this.faColor = faColor;
    this.canBeClick = canBeClick;
  }
}
