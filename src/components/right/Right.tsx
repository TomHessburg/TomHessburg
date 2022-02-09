import { useState } from "react";

export default function Right() {
  return (
    <div className="w-full lg:w-1/2 flex flex-wrap items-center justify-end mb-6 relative lg:sticky lg:top-12 lg:right-0 z-10">
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
      className="flex items-center justify-center text-sm lg:text-base font-light ml-6 mb-2 cursor-pointer"
    >
      <span
        className={`transition-colors ${
          selected ? "text-brand" : "text-white"
        }`}
      >
        {label}
      </span>
      <div
        className={`w-[12px] lg:w-[20px] h-[1px] mx-1 transition-colors ${
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
