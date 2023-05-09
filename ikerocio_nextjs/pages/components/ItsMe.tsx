import Link from "next/link";
import useIndexTranslation from "./IndexTranslation";
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
      <div className="order-first">
        <Image
          src="/image/iker.png"
          alt="Iker Ocio Avatar"
          width={300}
          height={300}
          className=" rounded-lg"
        />
      </div>
      <div className="text-center md:text-left md:ml-10 mt-4 md:mt-0">
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-2xl mb-2">{t("helloWorld")}</h2>
          <Image
            alt="switch-theme"
            width={32}
            height={32}
            id="theme-toggler"
            role="button"
            onClick={toggleTheme}
            src={
              theme === "light"
                ? "/image/switch-on.png"
                : "/image/switch-off.png"
            }
            className="ml-2"
          />
        </div>
        <p className="text-lg">
          I love software development and Python, specially. I am interested in
          Physics and Astronomy.
        </p>
      </div>
    </div>
  );
}
