import { getPopularVideos } from '@/lib/youtube'

const handler = async (req, res) => {
  try {
    const videos = await getPopularVideos()
    return res.json({ videos })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export default handler
