import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h1 className="mt-24 mb-28 text-center text-5xl">About
        <span className="text-neutral-500"> me</span>
      </h1>
      <div className="flex flex-wrap sm:flex-wrap-reverse ">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="w-56 h-56 lg:min-w-96 lg:h-96 rounded-3xl object-cover shadow-lg" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="py-2 mt-8 text-sm lg:text-base  text-gray-300 max-w-sm lg:max-w-lg text-center lg:text-justify border-b-2 border-purple-950 m-3">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About