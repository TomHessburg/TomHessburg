import Education from "./Education";
import Hero from "./Hero";
import Misc from "./misc/Misc";
import Projects from "./Projects";
import Work from "./Work";

export default function Left() {
  return (
    <div className="w-full lg:w-1/2 relative z-10">
      <Hero />
      <Work />
      <Projects />
      <Education />
      <Misc />
    </div>
  );
}
