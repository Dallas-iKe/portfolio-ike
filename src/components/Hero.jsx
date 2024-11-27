import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/ikeProfile.png"
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                    initial={{ transform: "translateX(-100px)", opacity: 0.5 }}
                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "spring", duration:1 }}
                 
                    className="pb-8 text-6xl font-thin tracking-tight lg:text-6xl "
                     >Isaac Mensah
                     </motion.h1>
                        <motion.span
                        initial={{ transform: "translateX(-100px)", opacity: 0.5 }}
                        whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                        transition={{ type: "spring", duration:2 }}
                        
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Web Developer
                        </motion.span>

                        <motion.p 
                        initial={{ transform: "translateX(-100px)", opacity: 0.5 }}
                        whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                        transition={{ type: "spring", duration:3 }}
                        className="my-2 max-w-xl py-2 font-light leading-8tracking-tighter">{HERO_CONTENT}
                        </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/3 lg:px-8 lg:mx-12">
            <div className="flex justify-end">
                <motion.img 
                initial={{ transform: "translateX(100px)", opacity: 0.5 }}
                whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                transition={{ type: "spring", duration:4 }}
                src={profilePic} alt="iKe" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
