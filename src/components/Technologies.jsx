import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "motion/react"

const Technologies = () => {
  return (
    <motion.div 
    initial={{ transform: "translateY(-100px)" }}
    whileInView={{ transform: "translateY(0px)" }}
    transition={{ type: "spring", duration:3 }}
    className="border-b border-neutral-800 pb-24">
        <h2 className="my-16 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 3, repeat: Infinity, repeatType: "reverse" }}
             className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className="text-4xl text-cyan-400 " />
            </motion.div>
            
            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 4, repeat: Infinity, repeatType: "reverse" }}
             className="rounded-2xl border-4 border-neutral-800 p-4">
              <TbBrandNextjs className="text-4xl" />
            </motion.div>

            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 5, repeat: Infinity, repeatType: "reverse" }}
             className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMongodb className="text-4xl text-green-500 " />
            </motion.div>

            <motion.div 
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 6, repeat: Infinity, repeatType: "reverse" }}
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <DiRedis className="text-4xl text-red-700 " />
            </motion.div>

            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 7, repeat: Infinity, repeatType: "reverse" }}
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className="text-4xl text-green-500 " />
            </motion.div>

            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <BiLogoPostgresql className="text-4xl text-sky-700 " />
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Technologies
