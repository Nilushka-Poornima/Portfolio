import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react"


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:100}}
      transition={{duration:1}}
        className="mt-24 lg:mb-28 p-10  text-center text-5xl">About
        <span className="text-neutral-500"> me</span>
      </motion.h1>
      <div className="flex flex-wrap sm:flex-wrap-reverse ">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1}}
              src={aboutImg} alt="about" className="w-56 h-56 lg:min-w-96 lg:h-96 rounded-3xl object-cover shadow-lg" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="py-2 mt-8 text-sm lg:text-base  text-gray-300 max-w-sm lg:max-w-lg text-justify border-b-2 border-purple-950 m-3">
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About