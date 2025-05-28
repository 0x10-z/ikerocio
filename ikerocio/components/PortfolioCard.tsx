import useIndexTranslation from "@/hooks/IndexTranslation";
import { SiGithub } from "react-icons/si";
import { FC } from "react";
import { Globe } from "lucide-react";

interface PortfolioCardProps {
  number: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl: string | null;
  url: string | null;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({
  number,
  image,
  title,
  description,
  tags,
  codeUrl,
  url,
}) => {
  const { t } = useIndexTranslation();

  return (
    <div className="bg-white rounded-lg  overflow-hidden max-w-sm">
      <div className="relative group overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:cursor-pointer"
        />
        <span className="absolute top-2 left-2 bg-black/60 text-white text-sm font-bold px-2 py-1 rounded transform -rotate-12 group-hover:scale-150 transition-transform duration-300">
          #{number}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold transition-colors duration-300 hover:text-yellow-400 hover:cursor-pointer">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{t(description)}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-gray-800 bg-white text-gray-900 text-sm font-semibold shadow hover:bg-gray-900 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
            >
              <SiGithub className="w-5 h-5" />
              {t("seeRepo")}
            </a>
          )}

          {url && (
            <a
              href={url}
              target="_blank"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-yellow-400 text-gray-900 text-sm font-semibold shadow hover:bg-yellow-500 transition-all duration-300 w-full sm:w-auto text-center"
            >
              <Globe className="w-5 h-5" />
              {t("seeDemo")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
