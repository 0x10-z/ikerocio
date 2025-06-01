export class Education {
  university: string;
  description: string;
  dateString: string;
  dateUrl: string;
  thesisTitle?: string;
  thesisDescription?: string;
  thesisType?: "TFG" | "TFM";
  imageUrl: string | "https://placehold.co/200x200?text=No%20image";

  constructor(
    university: string,
    description: string,
    dateString: string,
    dateUrl: string,
    thesisTitle?: string,
    thesisDescription?: string,
    thesisType?: "TFG" | "TFM",
    imageUrl: string = "https://placehold.co/200x200?text=No%20image"
  ) {
    this.university = university;
    this.description = description;
    this.dateString = dateString;
    this.dateUrl = dateUrl;
    this.thesisTitle = thesisTitle;
    this.thesisDescription = thesisDescription;
    this.thesisType = thesisType;
    this.imageUrl = imageUrl;
  }
}
