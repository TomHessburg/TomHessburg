import Card from "../../utilities/Card";

export default function Work() {
  return (
    <section>
      <h2 className="font-bold text-3xl mb-6">Work</h2>

      {/* SkillSpace */}
      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl mb-2">
          Co-Founder/Software Developer
        </h3>
        {/* INFO */}
        <p className="font-light mb-2">
          <a
            href="https://www.skillspace.build/"
            target="_blank"
            className="font-bold text-brand hover:underline"
          >
            SkillSpace
          </a>{" "}
          • Full-Time • Jan 2021 - Now
        </p>
        <p className="font-light mb-4">Orlando, Florida</p>
        {/* CONTENT */}
        <p className="font-light leading-7 mb-4">
          Planned, designed, built, and launched SkillSpace alongside my brother{" "}
          <a
            href="https://www.linkedin.com/in/frank-hessburg-92a96296/"
            target="_blank"
            className="font-bold text-brand hover:underline"
          >
            Frank
          </a>
          . Grew from 0 to thousands of users, facilitating thousands of
          connections, and generating millions in ecenomic opportunity for
          construction companies, crews, and skilled tradesmen across the US.
        </p>
        <p className="font-light leading-7">
          My primary role is handling product. Responsibilities range from
          designing and building an MVP for iOS and Android, hiring and managing
          independent contractors to help iterate on our initial idea, building
          out our web app, and launching new features based on user activity and
          feedback. I also assist with things like marketing and al that fun
          stuff.
        </p>
      </Card>

      {/* Wayfair */}
      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl mb-2">Software Engineer</h3>
        {/* INFO */}
        <p className="font-light mb-2">
          <a
            href="https://www.wayfair.com/"
            target="_blank"
            className="font-bold text-brand hover:underline"
          >
            Wayfair
          </a>{" "}
          • Full-Time • Jan 2020 - Jun 2021
        </p>
        <p className="font-light mb-4">Boston, Massachusetts</p>
        {/* CONTENT */}

        <p className="font-light leading-7 mb-4">
          I worked on the bidding {"&"} optimizations team creating tools for
          marketing analysts and data scientists. Tech stack used during my time
          here includes Java, PHP, Python, Spark, React, and more.
        </p>
        <p className="font-light leading-7 mb-4">
          Some of the projects that I've worked on include:
        </p>
        <p className="font-light leading-7 mb-4">
          - A suite of tools used by marketing analysts to directly drive
          efficiency in hundreds of millions of dollars of ad spend (React,
          Java, Dropwizard, Python, Vertica, Hive, MSSQL, Presto and more)
        </p>
        <p className="font-light leading-7 mb-4">
          - "Forge" framework for designing jobs which pipe billions of rows of
          data daily (Python, Aerospike, Spark, Hive)
        </p>
        <p className="font-light leading-7 mb-4">
          - Custom data analytics user interfaces which allow analysts to track
          performance of ad campaigns over time (React, PrestoDB, Vertica, Java,
          Dropwizard)
        </p>
        <p className="font-light leading-7">
          - The "Generic CSV Uploader" API which has cut development time of new
          CSV upload utilities (we've got many of them) down from a week to day
          (Java, Dropwizard)
        </p>
      </Card>

      {/* Crewly */}
      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl mb-2">Software Engineer</h3>

        {/* INFO */}
        <p className="font-light mb-2">
          Freelance • Full-Time • Mar 2020 - Nov 2020
        </p>
        <p className="font-light mb-4">Orlando, Florida</p>

        {/* CONTENT */}
        <p className="font-light leading-7 mb-4">
          Planned and built a custom project management solution for a large
          construction company.
        </p>
        <p className="font-light leading-7 mb-4">
          Took project specs, ideated with client, designed and implemented
          solution and integrated the product into their day to day work flow
          including training employees.
        </p>
        <p className="font-light leading-7">
          Solution provided has saved 5+ hours per week for 10+ employees
          (hundreds of thousands per year in $$ saved), increased communication
          efficiency between departments and subcontractors and dramatically
          simplified a core function of the business.
        </p>
      </Card>
    </section>
  );
}
