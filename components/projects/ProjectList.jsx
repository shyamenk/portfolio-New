import Image from 'next/image'
import Link from 'next/link'
import freshHome from '@/public/images/projects/freshHome.png'
import { FaChrome, FaGithub } from 'react-icons/fa'
import { BiLinkAlt } from 'react-icons/bi'

const ProjectList = ({ projects }) => {
  return (
    <section className="mb-8">
      <div className="mx-auto ">
        <h3 className="mb-4 text-3xl font-semibold">Projects</h3>
        <ul className="grid gap-12 mb-4 sm:grid-cols-2 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Link key={idx} href={`/projects/${project.slug}`} passHref>
              <li className="pb-4 transition shadow-lg cursor-pointer dark:shadow-xl dark:border-gray-800 rounded-xl dark:hover:border-blue-500/10 dark:hover:shadow-blue-500/10">
                <div className="md:h-58 relative w-full mb-2 h-60 sm:h-52">
                  <Image
                    className="rounded-t-md"
                    src={`/images/projects/${project.icon}`}
                    layout="fill"
                    alt="project-image"
                  />
                </div>
                <div className="px-4">
                  <h4 className="mb-2 px-[2px] text-xl font-semibold text-gray-700 dark:text-white">
                    {project.title}
                  </h4>
                  <div className="flex gap-2 mb-2">
                    {project.tag.split('|').map((tag, index) => (
                      <p
                        key={index}
                        className="text-primary px-2 py-1 text-sm font-medium transition duration-300 border border-gray-200 rounded-full hover:text-gray-900 hover:bg-gray-200 hover:border-transparent dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                  <p className="mb-2 text-gray-600 dark:text-gray-200">
                    {project.summary}
                  </p>
                  <div className="px- 2 flex gap-4 mt-3 dark:text-gray-200">
                    <FaGithub className="w-5 h-5 hover:text-react-link" />
                    <BiLinkAlt className="w-5 h-5 hover:text-react-link" />
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProjectList
