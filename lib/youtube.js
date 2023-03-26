// import { google } from 'googleapis'

// export const getPopularVideos = async () => {
//   const youtube = google.youtube({
//     auth: process.env.GOOGLE_API_KEY,
//     version: 'v3'
//   })

//   let videoIds = []
//   let nextPageToken
//   do {
//     const { data } = await youtube.playlistItems.list({
//       maxResults: 50,
//       playlistId: process.env.YOUTUBE_PLAYLIST_ID,
//       part: ['contentDetails'],
//       ...(nextPageToken ? { pageToken: nextPageToken } : {})
//     })

//     nextPageToken = data?.nextPageToken
//     const moreVideoIds =
//       data?.items?.map(item => item.contentDetails.videoId) ?? []
//     videoIds = videoIds.concat(moreVideoIds)
//   } while (nextPageToken)

//   const { data: uploads } = await youtube.videos.list({
//     part: ['snippet', 'statistics'],
//     id: videoIds
//   })

//   const ranked =
//     uploads?.items?.sort(
//       (a, b) => b.statistics.viewCount - a.statistics.viewCount
//     ) ?? []

//   const videos = ranked?.slice(0, 5).map(video => ({
//     id: video.id,
//     title: video.snippet.title,
//     viewCount: video.statistics.viewCount
//   }))

//   return videos
// }

// export const getChannelStatistics = async () => {
//   const youtube = google.youtube({
//     auth: process.env.GOOGLE_API_KEY,
//     version: 'v3'
//   })

//   const {
//     data: { items }
//   } = await youtube.channels.list({
//     part: ['statistics'],
//     id: process.env.YOUTUBE_CHANNEL_ID
//   })

//   return items?.[0]
// }
