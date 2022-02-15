import Education from "../left/Education";
import Misc from "../left/misc/Misc";
import Projects from "../left/Projects";
import Work from "../left/Work";

export default function Right() {
  return (
    <div className="grid-span-1">
      {/* <div className="w-full flex flex-wrap items-center justify-end mb-6 relative lg:fixed lg:top-12 lg:right-12 z-10"> */}
      {/* <Links /> */}
      {/* </div> */}
      <Work />
      <Projects />
      <Education />
      <Misc />
    </div>
  );
}
