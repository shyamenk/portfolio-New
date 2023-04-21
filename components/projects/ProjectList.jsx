import Image from 'next/image'
import Link from 'next/link'
import freshHome from '@/public/images/projects/freshHome.png'
const ProjectList = ({ projects }) => {
  return (
    <div className="mt-2">
      <h2 className="mb-8 text-3xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map(project => (
          <div
            key={project.slug}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-react dark:border-gray-700"
          >
            <Link href={`/projects/${project.slug}`} passHref>
              <a>
                <Image
                  className="rounded-t-lg"
                  src={`/images/projects/${project.icon}`}
                  height={200}
                  width={400}
                  alt=""
                />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {project.summary}
                  </p>
                  <h1 className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-react-link hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Explore
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </h1>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
