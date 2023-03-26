import sgMail from '@sendgrid/mail'
import { getChannelStatistics } from '@/lib/youtube'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = async (req, res) => {
  try {
    if (req.query.key !== 'sharedKey') {
      res.status(404).end()
      return
    }

    const { statistics } = await getChannelStatistics()
    const { subscriberCount } = statistics

    const msg = {
      to: 'hamed.bahram@gmail.com',
      from: {
        email: 'hamed.bahram@gmail.com',
        name: 'Hamed Bahram'
      },
      subject: `Subscriber count: ${subscriberCount}`,
      html: `
        <div>
          <h1>Subscriber Daily Report</h1>
          <p>${new Date().toLocaleString('en-IN')}</p>
          <p>Subscriber count: ${subscriberCount}</p>
        </div>
      `
    }
    await sgMail.send(msg)

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export default handler
