import Education from "./Education";
import Misc from "./misc/Misc";
import Projects from "./Projects";
import Work from "./Work";

export default function Right() {
  return (
    <div className="grid-span-1">
      <Work />
      <Projects />
      <Education />
      <Misc />
    </div>
  );
}
