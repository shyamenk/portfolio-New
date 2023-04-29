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
                    <h4 className="font-semibold">{meta.title}</h4>
                    <p className="text-gray-500">{meta.summary}</p>
                  </div>
                  <DateFormatter
                    dateString={meta.date}
                    className="w-1/4 mt-1 text-sm font-light text-right text-gray-700"
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
