import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export default function Header() {
  const { t, lang } = useTranslation("index");

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="border-b border-gray-200 container mx-auto flex flex-wrap items-center justify-between p-5">
        <div className="flex items-center">
          <Image
            src="/image/io-icon.png"
            width={40}
            height={40}
            alt="Logo"
            className="h-10 mr-3"
          />
          <span className="font-semibold text-xl tracking-tight">
            Iker Ocio Zuazo
          </span>
        </div>
        <div className="flex dark:text-black">
          <Link
            href="/"
            className="btn inline-block py-1 px-4 bg-gray-200 dark:bg-white rounded-lg"
            locale="en">
            English
          </Link>
          <Link
            href="/"
            className="btn inline-block py-1 px-4 bg-gray-200 dark:bg-white rounded-lg ml-2"
            locale="es">
            Español
          </Link>
        </div>
      </nav>
    </header>
  ); // <div>Using a variable 42</div>
}

// <Link href="/" locale="en">
//   <h2>English</h2>
// </Link>
// <Link href="/" locale="es">
//   <h2>Español</h2>
// </Link>
