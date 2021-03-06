import Links from "./Links";

export default function Hero({ section }: { section: string }) {
  return (
    <div className="mb-6 sticky top-[7rem] mt-12 lg:mt-0">
      <h1 className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black">
        Hey, I&apos;m
        <br />
        Tom Hessburg<span className="text-brand">.</span>
      </h1>
      <div className="flex items-center justify-start my-8">
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://github.com/TomHessburg", "_blank");
            }}
            src="/github.svg"
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/thomas-hessburg/",
                "_blank"
              );
            }}
            src="/linkedin.svg"
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://twitter.com/tomhessburg", "_blank");
            }}
            src="/twitter.svg"
          />
        </div>
        <div className="transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("mailto:thomas.hessburg@gmail.com");
            }}
            src="/google.svg"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
      <p className="font-light leading-7">
        I&apos;m a software engineer based in Orlando, Florida. I co-founded{" "}
        <a
          href="https://www.skillspace.build/"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-brand hover:underline"
        >
          SkillSpace
        </a>
        , helping thousands of construction companies, crews, and skilled
        tradesmen connect and build working relationships. Most of my day is
        spent thinking about stupid (but sometimes not stupid) product ideas,
        coding, and playing with my dogs. I also write and perform music under
        the name{" "}
        <a
          href="https://soundcloud.com/baronfields"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-brand hover:underline"
        >
          Baron Fields
        </a>
        .
      </p>
      <Links section={section} />
    </div>
  );
}
