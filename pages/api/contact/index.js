import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body
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
        from: email,
        to: 'shyam.k@ethernexit.com',
        subject: subject,
        text: `${name} (${email}) says: ${message}`
      }
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
          res.status(500).json({ message: 'Something went Wrong!' })
        } else {
          console.log('Email sent: ' + info.response)
          return res
            .status(200)
            .json({ message: 'Email Send successfully' })
        }
      })
    } catch (error) {
      return res.status(500).json({ message: 'Something went Wrong!' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
