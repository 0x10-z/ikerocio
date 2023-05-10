export class Project {
  title: string;
  image: string;
  languages: string[];
  url: string;

  constructor(title: string, image: string, languages: string[], url: string) {
    this.title = title;
    this.image = image;
    this.languages = languages;
    this.url = url;
  }
}
