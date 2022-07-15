import React from "react";
import { motion } from "framer-motion";
import "../../styles/loader.scss";

const variants = {
  main: {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "spring",
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        },
        opacity: { duration: 0.5 },
      },
    },
  },
  outer: {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "spring",
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        },
        opacity: { duration: 0.5 },
      },
    },
  },
};

export default function Loader() {
  return (
    <div className="loader-screen">
      <motion.svg
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="256px"
        height="256px"
        initial="hidden"
        animate="visible"
      >
        {/* Bottom left */}
        <motion.path
          variants={variants.main}
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M15.384 40c.475.721 1.011 1.395 1.616 2M12 27c0 2.365.35 5.778 1.462 9"
        />
        {/* Main spiral */}
        <motion.path
          variants={variants.main}
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M25,26c3-3,6-5,10-5s5,6,5,13c0,9-9,15-16,15S8,45,8,28c0-16,2-17,2-17l14-8c0,0,16-1,22,7s10,15,10,27s-4,18-4,18s-7.479,3-11,6c-9,0-12-1-17-4c0,0,21-6,21-27c0,0-1-16-13-16S20,27,20,29c0,3,3,9,7,9s5-8,5-10S25,26,25,26z"
        />
        {/* Circle decoration */}
        <motion.path
          variants={variants.outer}
          stroke="#ffffff"
          d="M47.463 47.469c-.466.297-.603.915-.307 1.381l1.074 1.687c.297.466.915.603 1.381.307s.603-.915.307-1.381l-1.074-1.687C48.547 47.31 47.929 47.172 47.463 47.469zM43.463 50.156c-.466.297-.603.915-.307 1.381l1.074 1.687c.297.466.915.603 1.381.307.466-.297.603-.915.307-1.381l-1.074-1.687C44.547 49.997 43.929 49.86 43.463 50.156zM39.463 53.156c-.466.297-.603.915-.307 1.381l1.074 1.687c.297.466.915.603 1.381.307.466-.297.603-.915.307-1.381l-1.074-1.687C40.547 52.997 39.929 52.86 39.463 53.156zM12.463 13.156c-.466.297-.603.915-.307 1.381l1.074 1.687c.297.466.915.603 1.381.307.466-.297.603-.915.307-1.381l-1.074-1.687C13.547 12.997 12.929 12.86 12.463 13.156zM16.389 10.469c-.466.297-.603.915-.307 1.381l1.074 1.687c.297.466.915.603 1.381.307.466-.297.603-.915.307-1.381l-1.074-1.687C17.473 10.31 16.855 10.172 16.389 10.469zM20.389 8.156c-.466.297-.603.915-.307 1.381l1.074 1.687c.297.466.915.603 1.381.307.466-.297.603-.915.307-1.381L21.77 8.463C21.473 7.997 20.855 7.86 20.389 8.156zM24.463 5.469c-.466.297-.603.915-.307 1.381l1.074 1.687c.297.466.915.603 1.381.307.466-.297.603-.915.307-1.381l-1.074-1.687C25.547 5.31 24.929 5.172 24.463 5.469z"
        />
        {/* Bottom right corner */}
        <motion.path
          variants={variants.main}
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M52 33c-.415-2.906-2-8-3-10M51.729 42c.19-1.289.343-2.646.42-4"
        />
      </motion.svg>
    </div>
  );
}
