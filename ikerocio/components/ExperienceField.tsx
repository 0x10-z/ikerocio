interface ExperienceFieldProps {
  title: string;
  description: string;
  dateString: string;
  dateUrl: string;
  imageUrl: string;
}

export default function ExperienceField({
  title,
  description,
  dateString,
  dateUrl,
  imageUrl,
}: ExperienceFieldProps) {
  return (
    <li className="flex flex-col sm:flex-row items-start sm:items-start gap-4 m-2 pb-4 border-b border-gray-200 dark:border-gray-700 sm:border-b-0">
      <img
        src={imageUrl}
        alt={`${title} logo`}
        className="w-12 h-12 rounded-md object-contain hover:cursor-pointer hover:scale-110 transition-transform duration-300"
      />
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="font-bold">{title}</span>
          <a
            className="font-bold text-blue-600 hover:underline"
            href={dateUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dateString}
          </a>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </li>
  );
}
