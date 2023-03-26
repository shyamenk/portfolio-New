import { addSubscriber } from '@/utils/mongodb'
import { emailSchema } from '@/utils/validate'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      return res.status(200).json({ message: 'success' })
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.message || 'Failed to fetch subscribers' })
    }
  }

  if (req.method === 'POST') {
    const { email, subscriptions } = req.body

    try {
      await emailSchema.validate(email)
    } catch (error) {
      return res.status(400).json({ error: error.errors[0] })
    }

    try {
      const { subscriber, error } = await addSubscriber(
        email,
        subscriptions
      )
      if (error) throw new Error('Something went wrong! please try again.')
      return res.status(201).json({ subscriber })
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Something went wrong! please try again.' })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
