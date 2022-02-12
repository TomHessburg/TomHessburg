import Contributions from "./Contributions";
import Contact from "./Contact";
import Music from "./Music";
import Tech from "./Tech";

export default function Misc() {
  return (
    <section>
      <h2 className="font-bold text-3xl mb-6">Misc</h2>

      <Contact />
      <Tech />
      <Contributions />
      <Music />
    </section>
  );
}
