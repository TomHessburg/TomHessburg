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
      <div className="w-full h-full relative flex items-start justify-center flex-col-reverse lg:flex-row p-6 lg:p-12">
        <Left />
        <Right />
        {/* <img
          src="/astronaut.png"
          className="w-[100px] h-auto fixed -bottom-[150px] -right-[150px] z-0 filter sepia"
        /> */}
      </div>
      <Stars />
    </div>
  );
};

export default Home;
