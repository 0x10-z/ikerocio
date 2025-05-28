import useTyped from "@/hooks/useTyped";
import useIndexTranslation from "../hooks/IndexTranslation";
import Image from "next/image";
import { useState } from "react";
import { TypedOptions } from "typed.js";

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

  const typedOptions: TypedOptions = {
    strings: [
      t("personalDescription1"),
      t("personalDescription2"),
      t("personalDescription3"),
      t("personalDescription4"),
    ],
    typeSpeed: 30,
    backSpeed: 4,
    backDelay: 4500,
    shuffle: false,
    loop: true,
  };
  const typedElement = useTyped(typedOptions);

  return (
    <div className="container mx-auto m-10 flex flex-col md:flex-row items-center">
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
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-row items-center justify-center md:justify-start">
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
              className="ml-2 hover:ring animate__animated animate__pulse"
            />
          </div>
          <div className="type-wrap">
            <span
              className="mt-3 text-xl text-customDark dark:text-white typed"
              style={{ whiteSpace: "pre-wrap" }}
              ref={typedElement}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
