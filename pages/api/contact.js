import { addContactData } from '../../lib/contact-util'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    // validation
    // should not trust client-side validation
    if (
      !email ||
      !email.includes(`@`) ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Incalid input.' })
      return
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message
    }

    try {
      addContactData(newMessage)
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' })
      return
    }

    res.status(201).json({
      message: 'Successfully stored message!',
      message: newMessage
    })
  }
}