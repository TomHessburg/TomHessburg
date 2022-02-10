import Card from "../../utilities/Card";

export default function Education() {
  return (
    <section className="mb-16">
      <h2 className="font-bold text-3xl mb-6">Education</h2>

      <Card>
        <h3 className="font-bold text-2xl mb-6">
          Lambda School (now Bloom Tech)
        </h3>
        <p className="font-light leading-7 mb-6">
          Lambda School is a 6+ month Computer Science {"&"} Software
          Engineering Academy that provides an immersive hands-on curriculum
          with a focus on computer science, software engineering, and web
          development.
        </p>

        <div className="mt-6">
          <a
            href="https://www.bloomtech.com/"
            target="_blank"
            className="text-brand text-sm underline"
          >
            Website
          </a>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Icon Collective</h3>
        <p className="font-light leading-7 mb-6">
          Icon Collective is as much of a “family” as it is a “school”. Icon
          offers courses in music production, management, and singing. I took
          their 1 year music production course where I learned the in's and
          out's of audio engineering and production. During my time and Icon, I
          was able to build a following of thousands around my music, reach
          millions of plays, and launched an{" "}
          <a
            href="https://soundcloud.com/adbcrecords"
            target="_blank"
            className="font-bold text-brand hover:underline"
          >
            independent record label
          </a>{" "}
          with one of my teachers and mentors (
          <a
            href="https://soundcloud.com/grrrreatdane"
            target="_blank"
            className="font-bold text-brand hover:underline"
          >
            Great Dane
          </a>
          ).
        </p>

        <div className="mt-6">
          <a
            href="https://iconcollective.edu/"
            target="_blank"
            className="text-brand text-sm underline"
          >
            Website
          </a>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Tulsa Welding School</h3>
        <p className="font-light leading-7 mb-6">
          Tulsa Welding School is a 7 month program where students are taught
          structural and pipe welding. I graduated highschool 6 months early and
          attended Tulsa between my early graduation and the beginning of the
          next actual school year. After graduation, I went on to work a hand
          full of years as a welder and fitter before finding my passion in
          coding.
        </p>

        <div className="mt-6">
          <a
            href="https://www.tws.edu/"
            target="_blank"
            className="text-brand text-sm underline"
          >
            Website
          </a>
        </div>
      </Card>
    </section>
  );
}
