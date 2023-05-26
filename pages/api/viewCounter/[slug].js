import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export default async function handler(req, res) {
  try {
    const slug = req.query.slug
    switch (req.method) {
      case 'PATCH':
        redis.incr(`views:${slug}`)
        res.revalidate(`/blogs/${slug}`)
        return res.status(200).end()
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    return res.status(500).json({ error })
  }
}
