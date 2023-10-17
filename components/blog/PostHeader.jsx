import { useRouter } from 'next/router'
import { BsViewStacked } from 'react-icons/bs'
import Avatar from '../utils/Avatar'
import DateFormatter from '../utils/DateFormatter'
const PostHeader = ({ meta, views }) => {
  const { title, author, date, readTime } = meta

  const router = useRouter()

  return (
    <header className="mb-12">
      <h1 className="mb-3 sm:mb-4 md:mb-6 text-2xl sm:text-3xl md:text-5xl font-serif">
        {title}
      </h1>
      <div className="text-gray-500 flex items-center gap-2 text-sm font-light dark:text-gray-300">
        <Avatar name={author.name} src={author.picture} />
        <div className="flex flex-col grow sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span>{author.name}</span> /{' '}
            <DateFormatter dateString={date} />
          </div>

          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#0178df"
              className="hidden sm:inline"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
            </svg>
            <span>{readTime}</span>
            <span className="px-1"> • </span>
            <BsViewStacked className="w-4 h-4" />
            <span className="">{views} views</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PostHeader
