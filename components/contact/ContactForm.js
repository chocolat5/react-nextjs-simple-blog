import { useEffect, useState } from 'react'

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

import Notification from '../ui/Notification'

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-TYpe': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!')
  }
}

export const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState('')
  const [reqquestError, setReqquestError] = useState('')

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setReqquestError(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  const sendMessageHandler = async (event) => {
    event.preventDefault()

    // optional: add client-side validation

    setRequestStatus('pending')

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage
      })
      setRequestStatus('success')
      setEnteredMessage('')
      setEnteredEmail('')
      setEnteredName('')
    } catch (error) {
      setReqquestError(error.message)
      setRequestStatus('error')
    }
  }

  let notification

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    }
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: reqquestError,
    }
  }

  return (
    <section>
      <h2 className="page_title">How can I help you?</h2>
      <form css={form} onSubmit={sendMessageHandler}>
        <div className="field">
          <label htmlFor="email" className="field_type">Your Email</label>
          <input
            value={enteredEmail}
            onChange={event => setEnteredEmail(event.target.value)}
            name="email"
            type="email"
            id="email"
            placeholder="example@example.com"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="name" className="field_type">Your Name</label>
          <input
            value={enteredName}
            onChange={event => setEnteredName(event.target.value)}
            name="name"
            type="text"
            id="name"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="message" className="field_type">Message</label>
          <textarea
            value={enteredMessage}
            onChange={event => setEnteredMessage(event.target.value)}
            id="message"
            name="message"
            placeholder="What do you want to ask us."
            required
          ></textarea>
        </div>
        <button className="btn" type="submit">Send Message</button>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  )
}

const form = css`
  input,
  button,
  textarea {
    appearance: none;
    border: none;
    background: transparent;
    outline: none;
    margin: 0;
    padding: 0;
    border-radius: 0;
    color: inherit;
    font-size: inherit;
  }

  [type="email"],
  [type="text"],
  textarea {
    display: block;
    width: 100%;
    color: inherit;
    font-family: inherit;
  }

  textarea {
    height: 150px;
  }

  button,
  [type="submit"] {
    cursor: pointer
  }

  button,
  [type="submit"] {
    display: block;
    width: 100%;
    margin: 24px auto 16px;
    padding: 16px 0;
    color: var(--color-button-text);
    background:var(--color-button);
    font-weight: 600;
    letter-spacing: .05em;

    &:hover {
      opacity: .8;
    }
  }

  .field {
    position: relative;

    & + .field {
      margin-top: 32px;
    }

    [type="email"],
    [type="text"],
    textarea {
      background: var(--color-secondary);
      border-radius: var(--radius);
      padding: 16px;
      letter-spacing: .05em;

      &:focus {
        border-color:var(--color-primary);
      }
    }

    [type="email"],
    [type="text"] {
      height: 48px;
      line-height: 48px;
    }

    .field_type {
      display: block;
      margin: 0 0 8px;
      color: rgba(var(--color-text), .5);
      font-size: 1.4rem;
    }
  }
`