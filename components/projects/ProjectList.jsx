import Image from 'next/image'
import Link from 'next/link'
import freshHome from '@/public/images/projects/freshHome.png'
import { FaChrome, FaGithub } from 'react-icons/fa'
import { DiChrome } from 'react-icons/di'

const ProjectList = ({ projects }) => {
  return (
    <section className="p-2 py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-xl">
          <h3 className="mb-2 text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl">
            Projects
          </h3>
        </div>
        <div className="mt-6">
          <ul className="grid gap-12 sm:grid-cols-2 md:grid-cols-2">
            {projects.map((project, idx) => (
              <Link key={idx} href={`/projects/${project.slug}`} passHref>
                <li className="p-4 transition cursor-pointer dark:shadow-xl dark:border-gray-800 rounded-xl dark:hover:border-blue-500/10 dark:hover:shadow-blue-500/10 hover:shadow-lg">
                  <div className="md:h-58 relative w-full h-60 sm:h-52">
                    <Image
                      className="rounded-t-md"
                      src={`/images/projects/${project.icon}`}
                      layout="fill"
                      alt="project-image"
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-gray-700 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="mt-2 font-semibold text-react-link">
                      {project.tag}
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-200">
                      {project.summary}
                    </p>
                    <div className="flex gap-4 mt-3 dark:text-gray-200">
                      <FaGithub className="w-5 h-5 hover:text-react-link" />
                      <FaChrome className="w-5 h-5 hover:text-react-link" />
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProjectList
