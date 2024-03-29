import connectToDatabase from 'Database/db'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' })
    }
    // Save email to database
    try {
      const db = await connectToDatabase()
      const subscribers = db.collection('subscribers')
      const isScubscriberFound = await subscribers.findOne({ email })
      if (isScubscriberFound) {
        return res
          .status(201)
          .json({ message: 'You are already subscribed' })
      } else {
        await subscribers.insertOne({ email })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal server error' })
    }

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      },
      secure: true
    })

    const mailOptions = {
      from: 'shyam.k@ethernexit.com',
      to: email,
      subject: 'Subscription Confirmation',
      text: 'Thank you for subscribing!'
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error)
      } else {
        // console.log('Email sent: ' + info.response)
      }
    })

    return res.status(200).json({ message: 'Subscription successful' })
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).json({ message: `Method ${req.method} not allowed` })
}
