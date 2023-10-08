import {
  SiCss3,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript
} from 'react-icons/si'

const Skills = () => {
  return (
    <section className=" dark:bg-react dark:text-gray-100">
      <div className="container pb-10 mx-auto space-y-8 ">
        <h3 className="mb-6 text-3xl font-semibold">Skills</h3>
        <div className="flex flex-wrap justify-start px-2 md:justify-between">
          <div>
            <SiHtml5 className=" hover:scale-150 fill-[#e34c26] w-12  h-12 cursor-pointer   transition-all ease-in-out  mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiCss3 className="hover:scale-150 fill-[#2965f1] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiJavascript className="hover:scale-150 fill-[#f0db4f] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiReact className="hover:scale-150 fill-[#61DBFB] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiNodedotjs className="hover:scale-150 fill-[#6cc24a] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiPython className="hover:scale-150 fill-[#4584b6] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiFastapi className="hover:scale-150 fill-[#0d9c8f] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiNextdotjs className="w-12 h-12 mx-10 my-6 transition-all ease-in-out cursor-pointer fill-current hover:scale-150 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiTypescript className="hover:scale-150 fill-[#007acc] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiMongodb className="hover:scale-150 fill-[#589636] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiPostgresql className="hover:scale-150 fill-[#0064a5] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiGit className="hover:scale-150 fill-[#F1502F] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
          <div>
            <SiDocker className="hover:scale-150 fill-[#0db7ed] w-12  h-12 cursor-pointer  transition-all ease-in-out mx-10 my-6 md:mx-12 lg:m-0 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
