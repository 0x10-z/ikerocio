export class Education {
  university: string;
  description: string;
  dateString: string;
  dateUrl: string;
  imageUrl: string | "https://placehold.co/200x200?text=No%20image";

  constructor(
    university: string,
    description: string,
    dateString: string,
    dateUrl: string,
    imageUrl: string = "https://placehold.co/200x200?text=No%20image"
  ) {
    this.university = university;
    this.description = description;
    this.dateString = dateString;
    this.dateUrl = dateUrl;
    this.imageUrl = imageUrl;
  }
}
