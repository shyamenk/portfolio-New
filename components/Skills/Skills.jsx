import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiGit
} from 'react-icons/si'
import { motion } from 'framer-motion'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="dark:bg-react dark:text-gray-100">
      <div className="container pb-10 mx-auto space-y-8 ">
        <h3 className="text-3xl font-semibold">What I do</h3>

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="flex flex-wrap justify-center lg:justify-between"
        >
          <motion.div variants={iconVariants}>
            <SiHtml5 className=" fill-[#e34c26] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiCss3 className="fill-[#2965f1] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiJavascript className="fill-[#f0db4f] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiReact className="fill-[#61DBFB] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiNodedotjs className="fill-[#6cc24a] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiNextdotjs className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400" />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiTypescript className="fill-[#007acc] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiGit className="fill-[#F1502F] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
