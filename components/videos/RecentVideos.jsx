import VideoCard from './VideoCard'

const RecentVideos = ({ videos = [] }) => {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold">Popular Videos</h2>
      <ul className="mb-6">
        {videos.map((video, index) => (
          <VideoCard
            key={video.id}
            id={video.id}
            index={index}
            title={video.title}
            viewCount={video.viewCount}
          />
        ))}
      </ul>
      <a
        className="underline decoration-react-link underline-offset-4"
        href="https://www.youtube.com/@hamedbahram"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch All Videos
      </a>
    </section>
  )
}

export default RecentVideos
