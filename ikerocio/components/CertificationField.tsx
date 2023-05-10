interface CertificationFieldProps {
  title: string;
  url: string;
}

export default function CertificationField({
  title,
  url,
}: CertificationFieldProps) {
  return (
    <li className="m-2">
      <a
        className="font-bold"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        {title}
      </a>
    </li>
  );
}
