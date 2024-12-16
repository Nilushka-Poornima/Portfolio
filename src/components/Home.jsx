import React from "react";
import { motion } from "motion/react"
import profilePic from "../assets/kevinRushProfile.jpg";
import { HERO_CONTENT } from "../constants/index";
import { Typewriter } from "react-simple-typewriter";

const animation = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay },
  },
});


const Home = () => {
  return (
    <section id="Home" className="">
      <div className="mx-2 sm:flex sm:flex-col sm:items-center lg:flex lg:flex-row lg:items-center lg:  md:gap-3 pt-24 lg:pt-48 -z-50 ">
        <div className="flex flex-col lg:text-left lg:flex-grow   ">
          <div className="flex flex-col items-center text-justify lg:flex lg:flex-col lg:items-center w-full">
            <motion.div
              variants={animation(0)}
              initial="hidden"
              animate="visible"
              className="relative flex flex-col items-center py-4 border-b-2 border-purple-950 lg:items-start">
              <motion.h1
                variants={animation(0)}
                initial="hidden"
                animate="visible"
                className="text-4xl lg:text-5xl xl:text-6xl font-thin pb-6 ">
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4, ease: "easeInOut" },
                    translateY: -8,
                  }}
                  className="mr-2 text-white inline-block cursor-pointer"
                >
                  Nilushka
                </motion.span>
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    translateY: -8,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  className="text-white inline-block cursor-pointer"
                >
                  Poornima
                </motion.span>
              </motion.h1>
              <motion.span
                variants={animation(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent">
                <span>
                  <Typewriter
                    words={['Front-end Developer', 'Mobile App Developer', 'Sketch Designer']}
                    loop={Infinity}
                    cursor
                    cursorStyle='"'
                    cursorColor="purple"
                    typeSpeed={40}
                    deleteSpeed={30}
                    delaySpeed={1000}
                  />
                </span>
              </motion.span>
            </motion.div>
            {/* Paragraph Section */}
            <motion.p
              variants={animation(1)}
              initial="hidden"
              animate="visible"
              className="py-2 mt-8 text-sm lg:text-base  text-gray-300 max-w-sm lg:max-w-lg text-justify ">
              {HERO_CONTENT}
            </motion.p>

          </div>
        </div>

        {/* Right Section: Profile Image */}
        <div className="flex flex-col items-center w-full lg:w-auto lg:mr-16">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            src={profilePic}
            alt="Profile"
            className="w-56 h-56 mt-4 lg:min-w-96 lg:h-96 rounded-3xl object-cover shadow-lg"
          />
        </div>
      </div >
    </section>
  );
};

export default Home;
