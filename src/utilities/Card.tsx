import React from "react";
import { motion } from "framer-motion";

const Card: React.FC<{}> = ({ children }) => {
  return (
    <motion.div
      // whileHover={{
      //   scale: 1.03,
      //   transition: { duration: 0.25 },
      // }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="w-full bg-dusty/70 backdrop-blur p-6 mb-6"
    >
      {children}
    </motion.div>
  );
};

export default Card;
