export class Experience {
  title: string;
  description: string;
  dateString: string;
  dateUrl: string;

  constructor(
    title: string,
    description: string,
    dateString: string,
    dateUrl: string
  ) {
    this.title = title;
    this.description = description;
    this.dateString = dateString;
    this.dateUrl = dateUrl;
  }
}
