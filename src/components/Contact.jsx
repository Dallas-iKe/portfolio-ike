import { CONTACT } from "../constants"
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        initial={{ transform: "translateY(-100px)", opacity: 0. }}
        whileInView={{ transform: "translateY(0px)", opacity: 1}}
        transition={{ type: "spring", duration: 3 }}
        className="my-10 text-center text-4xl">Get In Touch
        </motion.h2>

        <motion.div
        initial={{ transform: "translateX(-100px)", opacity: 0 }}
        whileInView={{ transform: "translateX(0px)", opacity: 1}}
        transition={{ type: "spring", duration: 3 }} 
        className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="mailto:clarity471@gmail.com" className="border-b">
                {CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default Contact
