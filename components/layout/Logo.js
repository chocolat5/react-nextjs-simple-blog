import React from 'react'
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

export const Logo = () => {
  return (
    <div css={logo}>
      CHOCOLAT NEXT BLOG
    </div>
  )
}

const logo = css`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: .05em;
`