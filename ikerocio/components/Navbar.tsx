import Link from "next/link";
import useIndexTranslation from "../hooks/IndexTranslation";
import Image from "next/image";

export default function Navbar() {
  const { t, lang } = useIndexTranslation();

  return (
    <header className="text-gray-900 dark:text-white">
      <nav className="border-b dark:border-gray-900 border-gray-200 container mx-auto flex flex-wrap items-center justify-between p-5">
        <div className="flex items-center">
          <Image
            src="/image/io-icon.png"
            width={40}
            height={40}
            alt="Logo"
            className="h-10 mr-3"
          />
          <span className="font-bold text-xl tracking-tight">
            Iker Ocio Zuazo
          </span>
        </div>
        <div className="flex dark:text-black">
          <Link
            href="/"
            className="btn active:ring hover:bg-gray-300 inline-block py-1 px-4 bg-gray-200 dark:bg-white dark:hover:bg-gray-400 rounded-lg"
            locale="en">
            English
          </Link>
          <Link
            href="/"
            className="btn active:ring hover:bg-gray-300 inline-block py-1 px-4 bg-gray-200 dark:bg-white dark:hover:bg-gray-400 rounded-lg ml-2"
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
