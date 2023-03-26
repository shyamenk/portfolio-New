import { PlayCircleIcon } from '@heroicons/react/24/solid'

export default function VideoCard({ id, title, viewCount, index }) {
  return (
    <a
      className="w-full"
      href={`https://www.youtube.com/watch?v=${id}`}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">
            {`0${index + 1}`}
          </div>
          <div className="flex w-full flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="font-medium">{title}</h4>
            <div className="flex items-center justify-center gap-2">
              <p className="w-full text-gray-500 dark:text-gray-400">
                <span>{viewCount}</span>
                <span className="ml-1.5 text-[13px] text-gray-400">
                  views
                </span>
              </p>
              <PlayCircleIcon className="mt-0.5 h-4 w-4 fill-red-400" />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
