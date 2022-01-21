import { database } from "../lib/firebase"

export function addContactData(newMessage) {
  const { name, email, message } = newMessage
  database.ref('users/').push({
    username: name,
    email: email,
    message: message,
  })
}