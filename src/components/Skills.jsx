import React from 'react'
import { SKILLS } from '../constants'
import { motion } from "framer-motion"


const Experience = () => {
    return (
        <section id='Skills'>
            <div className="border-b border-neutral-900 pb-4">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="my-20 text-center text-4xl font-semibold text-[#4ade80]">Skills</motion.h1>
                <div className="">
                    {SKILLS.map((skills, index) => (
                        <div className="mb-8 mx-2 flex flex-wrap lg:justify-center" key={index}>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-neutral-300">{skills.type}</p>
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold ">
                                    {skills.skill} -{" "}
                                    <span className="text-xs text-purple-600 ">
                                        {skills.Limitation}
                                    </span>
                                </h6>
                                <p className="mb-1 text-neutral-400 text-justify">
                                    {skills.description}
                                </p>
                                <div className="flex flex-wrap">
                                    {skills.technologies.map((tech, index) => (
                                        <span className="mr-2 mt-2 rounded bg-cyan-950 px-2 py-1 text-sm font-medium text-purple-400 hover:text-[#4ade80] cursor-not-allowed" key={index}>{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience