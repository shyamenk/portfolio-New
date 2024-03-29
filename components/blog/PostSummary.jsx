import Image from 'next/image'
import Link from 'next/link'
import DateFormatter from '../utils/DateFormatter'

const PostSummary = ({ meta }) => {
  const { title, excerpt, slug, coverImage, tags, readTime, date } = meta

  return (
    <li className="gap grid grid-cols-1 my-10 cursor-pointer">
      <Link href={`/blogs/${slug}`} passHref>
        <div className="text-gray-600 ">
          <div className="border-spacing-0 transition duration-300 bg-white border border-transparent dark:bg-transparent hover:border-gray-300 hover:rounded-lg dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex">
            <div className="flex p-0 transition-all duration-500 ">
              <Image
                src={coverImage}
                alt="blog cover"
                loading="lazy"
                width="400"
                height="100"
                className="absolute inset-0 w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="sm:p-2 sm:pl-0 sm:w-4/6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {title}
              </h3>
              <p className="line-clamp-3 my-4 text-gray-600 dark:text-gray-300">
                {excerpt}
              </p>
              <div className="flex gap-2 pl-0 mb-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between gap-4">
                <span className="mt-4 text-sm text-gray-400 dark:text-gray-500 sm:mt-0">
                  <DateFormatter dateString={date} />
                </span>
                <div className="flex items-center gap-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="16px"
                    fill="#0178df"
                    className="hidden sm:inline"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  <span className="mt-4 text-sm text-gray-400 dark:text-gray-500 sm:mt-0">
                    {readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PostSummary
