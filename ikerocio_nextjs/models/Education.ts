export class Education {
  university: string;
  description: string;
  dateString: string;
  dateUrl: string;

  constructor(
    university: string,
    description: string,
    dateString: string,
    dateUrl: string
  ) {
    this.university = university;
    this.description = description;
    this.dateString = dateString;
    this.dateUrl = dateUrl;
  }
}
