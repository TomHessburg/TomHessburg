import { useViewportScroll, motion, useTransform } from "framer-motion";

const NUM_STARS = 100;

export default function Stars() {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < NUM_STARS; i++) {
      const scrollPos = pickRandom(scrollPosValues);
      const scrollParams = pickRandom(scrollParamsValues);
      const horizontalPos = pickRandom(horizontalPosValues);
      const bottomInitial = pickRandom(bottomInitValues);
      stars.push({
        key: i,
        scrollPos,
        scrollParams,
        horizontalPos,
        bottomInitial,
      });
    }

    return (
      <>
        {stars.map(
          ({ key, scrollPos, scrollParams, horizontalPos, bottomInitial }) => (
            <Star
              key={key}
              scrollPos={scrollPos}
              scrollParams={scrollParams}
              horizontalPos={horizontalPos}
              bottomInitial={bottomInitial}
            />
          )
        )}
      </>
    );
  };

  const pickRandom = (arr: any[]) => {
    const length = arr.length;
    const randomIndex = Math.floor(Math.random() * length);
    const val = arr[randomIndex];
    return val;
  };

  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 right-0  z-0">
      {generateStars()}
    </div>
  );
}

const Star = ({
  scrollPos = [0, 8250],
  scrollParams = [0, -2000],
  horizontalPos = "right-[12px]",
  bottomInitial = "-bottom-8",
}) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, scrollPos, scrollParams);

  const getRandValue = (max: number) => Math.floor(Math.random() * max);

  const widthHeight = getRandValue(8);

  return (
    <motion.div
      className={`rounded-full bg-white animate-pulse absolute ${bottomInitial} ${horizontalPos} z-0`}
      style={{
        y,
        animationDuration: `${getRandValue(10)}s`,
        opacity: getRandValue(100),
        width: widthHeight,
        height: widthHeight,
      }}
    />
  );
};

const scrollPosValues = [
  [0, 8000],
  [0, 9000],
  [0, 10000],
  [0, 11000],
  [0, 12000],
  [0, 13000],
  [0, 14000],
  [0, 15000],
  [0, 16000],
  [0, 17000],
  [0, 18000],
  [0, 19000],
  [0, 20000],
  [0, 21000],
  [0, 22000],
  [0, 23000],
  [0, 24000],
  [0, 25000],
];

const scrollParamsValues = [
  [0, -100],
  [0, -200],
  [0, -300],
  [0, -400],
  [0, -500],
  [0, -600],
  [0, -700],
  [0, -800],
  [0, -900],
  [0, -1000],
  [0, -1250],
  [0, -1500],
  [0, -1750],
  [0, -2000],
];

const horizontalPosValues = [
  "right-[3%]",
  "right-[6%]",
  "right-[9%]",
  "right-[12%]",
  "right-[15%]",
  "right-[18%]",
  "right-[21%]",
  "right-[24%]",
  "right-[27%]",
  "right-[30%]",
  "right-[33%]",
  "right-[36%]",
  "right-[39%]",
  "right-[42%]",
  "right-[45%]",
  "right-[48%]",
  "right-[51%]",
  "right-[54%]",
  "right-[57%]",
  "right-[60%]",
  "right-[63%]",
  "right-[66%]",
  "right-[69%]",
  "right-[72%]",
  "right-[75%]",
  "right-[78%]",
  "right-[81%]",
  "right-[84%]",
  "right-[87%]",
  "right-[90%]",
  "right-[93%]",
  "right-[96%]",
  "right-[99%]",
  // ---
  "left-[3%]",
  "left-[6%]",
  "left-[9%]",
  "left-[12%]",
  "left-[15%]",
  "left-[18%]",
  "left-[21%]",
  "left-[24%]",
  "left-[27%]",
  "left-[30%]",
  "left-[33%]",
  "left-[36%]",
  "left-[39%]",
  "left-[42%]",
  "left-[45%]",
  "left-[48%]",
  "left-[51%]",
  "left-[54%]",
  "left-[57%]",
  "left-[60%]",
  "left-[63%]",
  "left-[66%]",
  "left-[69%]",
  "left-[72%]",
  "left-[75%]",
  "left-[78%]",
  "left-[81%]",
  "left-[84%]",
  "left-[87%]",
  "left-[90%]",
  "left-[93%]",
  "left-[96%]",
  "left-[99%]",
];

const bottomInitValues = [
  "-bottom-[0vh]",
  "-bottom-[5vh]",
  "-bottom-[10vh]",
  "-bottom-[15vh]",
  "-bottom-[20vh]",
  "-bottom-[25vh]",
  "-bottom-[30vh]",
  "-bottom-[35vh]",
  "-bottom-[40vh]",
  "-bottom-[45vh]",
  "-bottom-[50vh]",
  "-bottom-[55vh]",
  "-bottom-[60vh]",
  "-bottom-[65vh]",
  "-bottom-[70vh]",
  "-bottom-[75vh]",
  "-bottom-[80vh]",
  "-bottom-[85vh]",
  "-bottom-[90vh]",
  "-bottom-[95vh]",
  // ---
  "bottom-[0vh]",
  "bottom-[5vh]",
  "bottom-[10vh]",
  "bottom-[15vh]",
  "bottom-[20vh]",
  "bottom-[25vh]",
  "bottom-[30vh]",
  "bottom-[35vh]",
  "bottom-[40vh]",
  "bottom-[45vh]",
  "bottom-[50vh]",
  "bottom-[55vh]",
  "bottom-[60vh]",
  "bottom-[65vh]",
  "bottom-[70vh]",
  "bottom-[75vh]",
  "bottom-[80vh]",
  "bottom-[85vh]",
  "bottom-[90vh]",
  "bottom-[95vh]",
];
