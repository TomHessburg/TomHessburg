import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../../utilities/Card";

export default function Projects({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("projects");
  }, [inView]);

  const renderTags = (tech: string[]) => {
    return (
      <div className="flex flex-wrap items-center justify-start -mb-2">
        {tech.map((tag) => {
          return (
            <span
              className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section ref={ref} className="mb-16" id="projects">
      <h2 className="font-bold text-3xl mb-2">Projects</h2>

      {/* SkillSpace */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">SkillSpace</h3>
          <div>
            <a
              href="https://www.skillspace.build/"
              target="_blank"
              className="text-brand font-semibold hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          My brother Frank and I have been running SkillSpace since late 2020.
          Many fields in construction (for instance drywall and roofing) do not
          hire individual tradesmen. Instead, they hire independent labor crews.
          Until now, this process has occured either through Craigslist or via
          word of mouth. We created SkillSpace to modernize this process, and
          have grown our user base to thousands of people.
        </p>
        {renderTags([
          "iOS",
          "Android",
          "React (Next JS)",
          "React Native",
          "Node",
          "GCP",
          "Firebase",
          "Serverless",
        ])}
        <div className="mt-6 flex justify-center">
          <video width="300" height="auto" controls>
            <source src="/skillspace/preview.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Card>

      {/* Crewly */}
      <Card>
        <h3 className="font-bold text-2xl mb-6">Crewly</h3>
        <p className="font-light leading-7 mb-6">
          Crewly is a project I built for a large roofing company in Apopka,
          Florida. It's project management software, helping this company to
          plan and execute thousands of projects per year, and saving tens of
          hours per week for their employees. If you're interested in checking
          it out, contact me for access.
        </p>
        {renderTags([
          "React (CRA)",
          "Node",
          "Express",
          "Postgres",
          "Knex JS",
          "Heroku",
          "Web Sockets",
        ])}
        <div className="mt-6 flex justify-center">
          <video width="100%" height="auto" controls>
            <source src="/crewly/preview.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Card>

      {/* WIPs */}
      <Card>
        <h3 className="font-bold text-2xl mb-6">wips.co</h3>
        <p className="font-light leading-7 mb-6">
          WIPs is a free royalty-free music library for content creators. Think
          Unsplash for music. I offer thousands of songs and sound effects which
          I've crafted myself to anyone who needs them for use in the in their
          content, commercial or otherwise. Paying customers get access to
          additional content, as well as stems and higher quality audio files.
          Set for release mid-2022.
        </p>
        {renderTags([
          "React (Next JS)",
          "TypeScript",
          "Node",
          "Express",
          "Web Audio",
        ])}
        <div className="mt-6 flex justify-center">
          <video width="100%" height="auto" controls>
            <source src="/wips/preview.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Card>
    </section>
  );
}
