export class Project {
  title: string;
  image: string;
  codeUrl: string | null;
  url: string | null;
  tags: string[];
  description: string;

  constructor(
    title: string,
    image: string,
    codeUrl: string | null,
    url: string | null,
    tags: string[],
    description: string
  ) {
    this.title = title;
    this.image = image;
    this.codeUrl = codeUrl;
    this.url = url;
    this.tags = tags;
    this.description = description;
  }
}
