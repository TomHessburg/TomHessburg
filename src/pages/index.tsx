import Right from "../components/right/Right";
import Stars from "../components/stars/Stars";
import Left from "../components/left/Left";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div id="homescreen" className="relative">
      <Head>
        <title>Hey, I'm Tom Hessburg.</title>
        <meta
          name="description"
          content="I'm a software engineer based in Orlando, Florida. I co-founded SkillSpace, helping thousands of construction companies, crews, and skilled tradesmen connect and build working relationships. Most of my day is spent thinking about stupid (but sometimes not stupid) product ideas, coding, and playing with my dogs. I also write and perform music under the name Baron Fields."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stars />
      <div className="w-full h-full relative p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Home;
