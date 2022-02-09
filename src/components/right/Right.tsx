import { useState } from "react";

export default function Right() {
  return (
    <div className="w-full md:w-1/2 flex flex-wrap items-center justify-start md:justify-end mb-12 relative md:sticky md:top-20 md:right-0 z-10">
      <Link text="WORK" label="01" />
      <Link text="PROJECTS" label="02" />
      <Link text="EDUCATION" label="03" />
      <Link text="MISC" label="04" />
    </div>
  );
}

const Link = ({ text, label }: { text: string; label: string }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className="flex items-center justify-center text-sm md:text-base font-light ml-0 md:ml-8 mr-4 md:mr-0 mb-2 cursor-pointer"
    >
      <span
        className={`transition-colors ${
          selected ? "text-brand" : "text-white"
        }`}
      >
        {label}
      </span>
      <div
        className={`w-[12px] md:w-[20px] h-[1px] mx-1 transition-colors ${
          selected ? "bg-brand" : "bg-white"
        }`}
      />
      <span
        className={`transition-colors ${
          selected ? "text-brand" : "text-white"
        }`}
      >
        {text.toUpperCase()}
      </span>
    </div>
  );
};
