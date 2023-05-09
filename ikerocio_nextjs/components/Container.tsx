import useIndexTranslation from "../pages/hooks/IndexTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCodeBranch,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

interface ContainerProps {
  title: string;
  children: React.ReactNode;
}

export default function Container({ title, children }: ContainerProps) {
  const { t } = useIndexTranslation();
  return (
    <div className="container mx-auto m-10 flex flex-col md:flex-row items-center">
      <div className="">
        <h2 className="border-b dark:border-white border-gray-200 text-2xl mb-8">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
