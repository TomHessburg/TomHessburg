import { useState } from "react";

export default function Links() {
  return (
    <div className="flex flex-wrap items-center justify-start mt-12">
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
      onClick={() => {
        const el = document.getElementById(text.toLowerCase());
        el?.scrollIntoView({ behavior: "smooth" });
      }}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className="flex items-center justify-center text-xs font-bold mr-4 mb-2 cursor-pointer"
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
