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

const Skills = () => {
  return (
    <section className="dark:bg-react dark:text-gray-100">
      <div className="container pb-10 mx-auto space-y-6 ">
        <h2 className="text-2xl font-bold">What I do</h2>
        <div className="flex flex-wrap justify-center lg:justify-between">
          <SiHtml5 className="fill-[#e34c26] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          <SiCss3 className="fill-[#2965f1] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          <SiJavascript className="fill-[#f0db4f] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          <SiReact className="fill-[#61DBFB] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          <SiNodedotjs className="fill-[#6cc24a] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          <SiNextdotjs className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400" />
          <SiTypescript className="fill-[#007acc] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          <SiGit className="fill-[#F1502F] w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
        </div>
      </div>
    </section>
  )
}

export default Skills
