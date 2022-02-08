import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hey, I'm Tom Hessburg.</title>
        <meta
          name="description"
          content="I'm a software engineer based in Orlando, Florida. I co-founded SkillSpace, helping thousands of construction companies, crews, and skilled tradesmen connect and build working relationships. Most of my day is spent thinking about stupid (but sometimes not stupid) product ideas, coding, and playing with my dogs. I also write and perform music under the name Baron Fields."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full">
        <p className="text-2xl font-bold">Hi there</p>
      </div>
    </div>
  );
};

export default Home;
