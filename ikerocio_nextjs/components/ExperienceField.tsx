interface ExperienceFieldProps {
  title: string;
  description: string;
  dateString: string;
  dateUrl: string;
}

export default function ExperienceField({
  title,
  description,
  dateString,
  dateUrl,
}: ExperienceFieldProps) {
  return (
    <li className="m-2">
      <span className="font-bold rounded-md mr-2">{title}</span>
      <a
        className="font-bold"
        href={dateUrl}
        target="_blank"
        rel="noopener noreferrer">
        {dateString}
      </a>
      <br />
      {description}
    </li>
  );
}
