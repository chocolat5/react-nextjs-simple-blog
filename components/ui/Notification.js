import ReactDOM from 'react-dom';

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

const Notification = ({ title, message, status }) => {
  return ReactDOM.createPortal((
    <div css={notification({ status })}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notifications'));
}

export default Notification;

const notification = ({ status }) => css`
  position: fixed;
  bottom: 10px;
  left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 5rem;
  padding: 0 16px;
  color: var(--color-text);
  border: 1px solid #fff;
  border-radius: 4px;

  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0 3em 0 0;
  }

  ${status === 'pending' && `
    background-color: #fffcee;
    border-color: var(--color-highlight);
  `}

  ${status === 'success' && `
    background-color: #f5fcfc;
    border-color: var(--color-primary);
  `}

  ${status === 'error' && `
    background-color: #fcf7f7;
    border-color: #d58181;
  `}

`