import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b  border-neutral-900 pb-4">
        <motion.h2 
        initial={{ transform: "translateY(-50px)", opacity: 0.5 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ type: "spring", duration:5 }}
        className="my-16 text-center text-4xl">About 
            <span className="text-neutral-500"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                <motion.div 
                initial={{ transform: "translateX(-100px)", opacity: 0.5 }}
                whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                transition={{ type: "spring", duration:3 }}

                className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </motion.div>
                </div>
                    <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                    <motion.p 
                    initial={{ transform: "translateX(100px)", opacity: 0.5 }}
                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "spring", duration:4 }}
                    className="my-2 max-w-xl py-6 font-light leading-7">{ABOUT_TEXT}
                    </motion.p>
                    </div>
                    </div>
            </div>
    </div> 
  )
}

export default About
