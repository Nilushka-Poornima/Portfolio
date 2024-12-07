import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/kevinRushProfile.jpg";
import { HERO_CONTENT } from "../constants/index";

const Home = () => {
  return (
    <div className="sm:flex sm:flex-col sm:items-center lg:flex lg:flex-row  md:gap-3 ">
      {/* Left Section: Name and Title */}
      <div className="flex flex-col lg:items-start  lg:text-left lg:flex-grow  ">
        <div className="flex flex-col items-center text-justify lg:flex lg:flex-col lg:items-center w-full">
          <div className="relative flex flex-col items-center py-4 border-b-2 border-purple-950 lg:items-start">
            {/* Add your inner content here */}          
          <h1 className="text-4xl lg:text-6xl font-thin pb-6 ">
            {/* First Name with Zoop Animation */}
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
            {/* Last Name with Zoop Animation */}
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
          </h1>
          <span className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent">
            Front-end Developer
          </span>
        </div>
        {/* Paragraph Section */}
        <p className="py-2 mt-8 text-sm lg:text-base  text-gray-300 max-w-sm lg:max-w-lg text-justify ">
          {HERO_CONTENT}
        </p>

      </div>
    </div>

      {/* Right Section: Profile Image */ }
  <div className="flex flex-col items-center w-full lg:w-auto lg:mr-16">
    <img
      src={profilePic}
      alt="Profile"
      className="w-56 h-56 mt-4 lg:min-w-96 lg:h-96 rounded-3xl object-cover shadow-lg"
    />
  </div>
    </div >
  );
};

export default Home;
