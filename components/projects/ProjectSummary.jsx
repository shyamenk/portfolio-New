import Link from 'next/link'
import ProjectIcon from './ProjectIcon'

const ProjectSummary = ({ project }) => {
  const { title, summary, slug, icon } = project

  return (
    <li>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="flex min-h-[225px] flex-col items-start gap-4 rounded-lg p-6 shadow-md transition-shadow duration-150 ease-in hover:shadow-gray-400 dark:border dark:border-gray-700 dark:hover:shadow-gray-700">
            <ProjectIcon icon={icon} className="" />
            <div className="mt-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-0.5 leading-snug text-gray-500">
                {summary}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default ProjectSummary
