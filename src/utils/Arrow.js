import React from "react";
import { motion } from "framer-motion";

const Arrow = ({ isLoading }) => {
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const pathVariants = {
    hidden: { pathLength: 0, pathOffset: 1 },
    visible: {
      pathLength: 1,
      pathOffset: 0,
      transition: { duration: 1, ease: "easeInOut", delay: 1 },
    },
  };
  return (
    <>
      {!isLoading && (
        <motion.svg
          className="Scribble"
          viewBox="0 0 78 48"
          fill="none"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M0.459961 7.86998C5.87996 20.49 15.1 28.85 30.85 23.42C58.28 13.95 37.57 -6.48002 25.65 2.91998C13.73 12.32 22.38 39 39.29 45.35C52.82 50.44 70.41 41.78 77.38 37.13"
            stroke="#2e2e2e"
            style={{ strokeWidth: 2, fill: "none" }}
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          ></motion.path>
        </motion.svg>
      )}
    </>
  );
};

export default Arrow;
