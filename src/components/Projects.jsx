import { PROJECTS } from "../constants"
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      initial={{ transform: "translateY(-100px)", opacity: 0.5 }}
      whileInView={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{ type: "spring", duration:3 }}
      className="my-20 text-center text-4xl">Open Source Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            initial={{ transform: "translateX(-100px)", opacity: 0.5 }}
            whileInView={{ transform: "translateX(0px)", opacity: 1 }}
            transition={{ type: "spring", duration:3 }}
            className="w-full lg:w-1/4">
            <img src={project.image} 
            width={170} 
            height={170} 
            alt={project.title} 
            className="mb-6 rounded"
            />
            </motion.div>

            <motion.div 
            initial={{ transform: "translateX(100px)", opacity: 0.5 }}
            whileInView={{ transform: "translateX(0px)", opacity: 1 }}
            transition={{ type: "spring", duration:3 }}
            className="w-full max-w-xl lg:3/4">
              <a href="https://github.com/Dallas-iKe/" target="_blank">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            </a>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((tech, index) =>(
              <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-sm text-purple-900">
                {tech}
                </span>
            ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
