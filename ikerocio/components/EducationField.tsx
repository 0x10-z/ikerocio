import useIndexTranslation from "@/hooks/IndexTranslation";
import { useState, useRef } from "react";

interface EducationFieldProps {
  title: string;
  description: string;
  dateString: string;
  dateUrl: string;
  imageUrl: string;
  thesisTitle?: string;
  thesisDescription?: string;
  thesisType?: "TFG" | "TFM";
}

export default function EducationField({
  title,
  description,
  dateString,
  dateUrl,
  imageUrl,
  thesisTitle,
  thesisDescription,
  thesisType = "TFG",
}: EducationFieldProps) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useIndexTranslation();

  // Ref para detectar clics fuera del modal
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowModal(false);
    }
  };

  return (
    <>
      <li className="flex flex-col sm:flex-row items-start gap-4 m-2 pb-4 border-b border-gray-200 dark:border-gray-700">
        <img
          src={imageUrl}
          alt={`${t(title)} logo`}
          className="w-12 h-12 rounded-md object-contain hover:cursor-pointer hover:scale-110 transition-transform duration-300"
        />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="font-bold">{t(title)}</span>
            <a
              className="font-bold text-blue-600 hover:underline"
              href={dateUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(dateString)}
            </a>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t(description)}
          </p>

          {thesisTitle && thesisDescription && (
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center mt-1 justify-center gap-2 px-3 py-1 rounded-xl bg-blue-500 text-gray-100 text-sm font-semibold shadow hover:bg-blue-600 transition-all duration-300"
            >
              {thesisType === "TFG" ? t("seeTfg") : t("seeTfm")}
            </button>
          )}
        </div>
      </li>

      {showModal && thesisTitle && thesisDescription && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={handleOverlayClick}
        >
          <div
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl w-full relative"
          >
            <button
              className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">{t(thesisTitle)}</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
              {renderWithHighlights(t(thesisDescription))}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function renderWithHighlights(text: string): JSX.Element[] {
  const parts = text.split(/(\[[^\]]+\])/g); // divide por bloques con [texto]
  return parts.map((part, i) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      const clean = part.slice(1, -1);
      return (
        <span
          key={i}
          className="bg-blue-700 dark:bg-yellow-700 text-white font-bold dark:text-white px-1 rounded-md"
        >
          {clean}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
