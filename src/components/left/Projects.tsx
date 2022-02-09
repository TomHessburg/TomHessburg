import Card from "../../utilities/Card";

export default function Projects() {
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
    <section className="mb-16">
      <h2 className="font-bold text-3xl mb-6">Projects</h2>

      {/* SkillSpace */}
      <Card>
        <h3 className="font-bold text-2xl mb-6">SkillSpace</h3>
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
        <div className="mt-6">
          <a href="#" target="_blank" className="text-brand text-sm underline">
            More Details
          </a>
        </div>
      </Card>

      {/* Crewly */}
      <Card>
        <h3 className="font-bold text-2xl mb-6">Crewly</h3>
        <p className="font-light leading-7 mb-6">
          Crewly is a project I built for a large roofing company in Apopka,
          Florida. It's project management software, helping this company to
          plan and execute thousands of projects per year, and saving tens of
          hours per week for their employees.
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
        <div className="mt-6">
          <a href="#" target="_blank" className="text-brand text-sm underline">
            More Details
          </a>
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
        <div className="mt-6">
          <a href="#" target="_blank" className="text-brand text-sm underline">
            More Details
          </a>
        </div>
      </Card>
    </section>
  );
}
