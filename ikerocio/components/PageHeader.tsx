import Navbar from "./Navbar";
import ItsMe from "./ItsMe";

export default function PageHeader() {
  return (
    <section className="dark:bg-gray-900 w-screen bg-white">
      <div className="mx-auto max-w-screen-xl py-2">
        <Navbar />
        <ItsMe />
      </div>
    </section>
  );
}
