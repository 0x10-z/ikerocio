import useIndexTranslation from "../hooks/IndexTranslation";
import Image from "next/image";
import { useState } from "react";

export default function ItsMe() {
  const [theme, setTheme] = useState("light");
  const { t } = useIndexTranslation();

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="container mx-auto m-10 mx-40 flex flex-col md:flex-row items-center">
      <div className="order-first animate__animated animate__pulse">
        <Image
          priority={true}
          src="/image/iker.png"
          alt="Iker Ocio Avatar"
          width={250}
          height={250}
          className=" rounded-lg"
        />
      </div>
      <div className="text-center md:text-left md:ml-10 mt-4 md:mt-0">
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-2xl mb-2">{t("helloWorld")}</h2>
          <Image
            priority={true}
            alt="switch-theme"
            width={32}
            height={32}
            id="theme-toggler"
            role="button"
            onClick={toggleTheme}
            src={
              theme === "light"
                ? "/image/switch-on.png"
                : "/image/switch-off-white.png"
            }
            className="ml-2 hover:ring animate__infinite animate__animated animate__pulse"
          />
        </div>
        <p className="text-lg">{t("personalDescription")}</p>
      </div>
    </div>
  );
}
