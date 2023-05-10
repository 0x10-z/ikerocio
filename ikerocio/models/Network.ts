import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class Network {
  title: string;
  url: string;
  fa: IconDefinition;

  constructor(title: string, url: string, fa: IconDefinition) {
    this.title = title;
    this.url = url;
    this.fa = fa;
  }
}
