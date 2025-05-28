export class Experience {
  title: string;
  description: string;
  dateString: string;
  dateUrl: string;
  imageUrl: string | "https://placehold.co/600x400?text=No%20image";

  constructor(
    title: string,
    description: string,
    dateString: string,
    dateUrl: string,
    imageUrl: string = "https://placehold.co/200x200?text=No%20image"
  ) {
    this.title = title;
    this.description = description;
    this.dateString = dateString;
    this.dateUrl = dateUrl;
    this.imageUrl = imageUrl;
  }
}
