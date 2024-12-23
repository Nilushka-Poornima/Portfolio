import React from 'react'
import { motion } from "motion/react"
import { BiLogoHtml5 } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { GrMysql } from "react-icons/gr";
import { BiLogoJava } from "react-icons/bi";
import { AiOutlinePython } from "react-icons/ai";

const iconVariants = (duration) => ({
    initial: { y: -8 },
    animate: {
        y: [8, -8],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <section id='Technologies'>
            <div className="border-b border-neutral-800 pb-24">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="my-20 text-center text-4xl font-semibold text-[#4ade80]">Technologies</motion.h1>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <BiLogoHtml5 className='text-7xl text-amber-600' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <DiCss3 className='text-7xl text-sky-600' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <IoLogoJavascript className='text-7xl text-yellow-300' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(7)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <RiReactjsLine className='text-7xl text-cyan-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <FaNodeJs className='text-7xl text-green-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <TbBrandNextjs className='text-7xl' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <SiMongodb className='text-7xl text-green-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <GrMysql className='text-7xl text-cyan-800' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <BiLogoJava className='text-7xl text-red-600' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 p-4">
                        <AiOutlinePython className='text-7xl text-amber-300 ' />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Technologies