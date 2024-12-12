import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <section id='Works'>
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="my-20 text-center text-4xl">Works</motion.h1>

            <div className="">{PROJECTS.map((project, index) => (
                <div className="mb-8 mx-2 flex flex-wrap lg:justify-center" key={index}>
                    <div className="w-full lg:w-1/4">
                        <motion.img
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            src={project.image}
                            alt={project.title}
                            className="mb-6 rounded"
                            width={150}
                            height={150}
                        />
                    </div>
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" key={index}>{tech}</span>

                        ))}

                    </motion.div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}

export default Projects