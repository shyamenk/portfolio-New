import Link from 'next/link'
import React from 'react'
import DateFormatter from '../utils/DateFormatter'

const ProjectsIndex = ({ projects }) => {
  return (
    <section className="h-screen">
      <h1 className="mb-12 text-3xl font-bold">All Projects</h1>
      <ul>
        {projects.map(meta => (
          <li key={meta.slug}>
            <Link href={`/projects/${meta.slug}`}>
              <a>
                <div className="flex justify-between gap-4 mb-6">
                  <div className="w-3/4">
                    <h4 className="font-semibold mb-1 text-xl">
                      {meta.title}
                    </h4>
                    <p className="dark:text-gray-400 text-gray-600">
                      {meta.summary}
                    </p>
                  </div>
                  <DateFormatter
                    dateString={meta.date}
                    className="w-1/4 mt-1  font-semibold text-right text-base text-gray-800 dark:text-gray-300"
                  />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsIndex
