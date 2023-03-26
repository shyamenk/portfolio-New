import Link from 'next/link'
import ViewCounter from '../utils/ViewCounter'

const NoteSummary = ({ meta }) => {
  const { title, excerpt, slug } = meta

  return (
    <li>
      <Link href={`/notes/${slug}`}>
        <a>
          <div className="mb-6">
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm font-light text-gray-500">
                <ViewCounter asPath={`/notes/${slug}`} />
              </p>
            </div>
            <p className="text-gray-500">{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default NoteSummary
