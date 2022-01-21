import React from 'react'
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import Link from 'next/link'

import { Logo } from './Logo'

export const Header = () => {
  return (
    <header css={header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav css={gnav}>
        <ul>
          <li><Link href="/posts">Posts</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px var(--padding-mb);
  background-color: var(--color-secondary);

  a {
    color: var(--color-headline);
    text-decoration: none;
  }
`

const gnav = css`
  ul {
    display: flex;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: var(--color-text);
    font-weight: 500;
    letter-spacing: .05em;
    text-decoration: none;

    &:hover {
      opacity: .8;
    }
  }
`