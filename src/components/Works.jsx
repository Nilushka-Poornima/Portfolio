import React from 'react'
import { WORKS } from '../constants'
import { motion } from "framer-motion"

const Works = () => {
    return (
        <section id='Works'>
            <div className="border-b border-neutral-900 pb-4">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="my-20 text-center text-4xl font-semibold">Works</motion.h1>

                <div className="">{WORKS.map((works, index) => (
                    <div className="mb-8 mx-2 flex flex-wrap lg:justify-center" key={index}>
                        <div className="w-full lg:w-1/4">
                            <motion.img
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                src={works.image}
                                alt={works.title}
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
                            <h6 className="mb-2 font-semibold">{works.title}</h6>
                            <p className="mb-2 text-neutral-400 text-justify">{works.description} <span className='text-red-600'> {works.special}</span></p>
                            <p className='mb-2'>
                                <a href={works.link1} className={works.status1} target='blank'>
                                    <span className='text-purple-700 '> [View Link]</span>
                                </a> |
                                <a href={works.link2} className={works.status2} target='blank'>
                                    <span className='text-purple-700'> [GitHub Link]</span>
                                </a>
                            </p>
                            {works.technologies.map((tech, index) => (
                                <span className="mr-2 mt-2 rounded bg-cyan-950 px-2 py-1 text-sm font-medium text-purple-400 " key={index}>{tech}</span>

                            ))}

                        </motion.div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Works