import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io";
import { SiPhp } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiVitess } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
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
              <IoLogoJavascript className="text-4xl text-yellow-500" />
            </motion.div>

            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 5, repeat: Infinity, repeatType: "reverse" }}
             className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiHtml5 className="text-4xl text-orange-600 " />
            </motion.div>

            <motion.div 
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 6, repeat: Infinity, repeatType: "reverse" }}
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiTailwindcss className="text-4xl text-sky-600 " />
            </motion.div>

            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 7, repeat: Infinity, repeatType: "reverse" }}
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiPhp className="text-4xl text-neutral-100 " />
              </motion.div>

            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiCss3 className="text-4xl text-sky-700 " />
            </motion.div>

            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiVitess className="text-4xl text-purple-700 " />
            </motion.div>
            <motion.div
            initial={{ transform: "translateY(-10px)" }}
            whileInView={{ transform: "translateY(10px)" }}
            transition={{ type: "spring", duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaGitAlt className="text-4xl text-orange-600 " />
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Technologies
