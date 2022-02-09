import Hero from "./Hero";
import Work from "./Work";

export default function Left() {
  return (
    <div className="w-full md:w-1/2 relative z-10">
      <Hero />
      <Work />
    </div>
  );
}
