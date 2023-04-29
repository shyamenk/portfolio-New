import Link from 'next/link'

const PostSummary = ({ meta }) => {
  const { title, excerpt, slug } = meta
  return (
    <li>
      <Link href={`/blogs/${slug}`}>
        <a>
          <div className="mb-6">
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-semibold">{title}</h4>
            </div>
            <p className="text-gray-500">{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostSummary
