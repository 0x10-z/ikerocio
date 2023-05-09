import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Header from "./components/Header";
import ItsMe from "./components/ItsMe";
export default function ExamplePage() {
  const { t, lang } = useTranslation("index");

  return (
    <div className="overflow-x-hidden font-sans text-black w-full mx-auto max-w-screen-xl bg-white">
      <Header />
      <ItsMe />
    </div>
  ); // <div>Using a variable 42</div>
}
