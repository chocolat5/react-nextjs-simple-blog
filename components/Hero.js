/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section css={hero}>
      <figure css={heroImage}>
        <Image
          src="/images/common/20191110.png"
          alt="chocolat"
          width={200}
          height={200}
          objectFit={"cover"}
          objectPosition={"50%"}
        />
      </figure>
      <div css={heroText}>
        <h1 className="title">Hi, I'm chocolat</h1>
        <p className="text">This </p>
      </div>
    </section>
  )
}

const hero = css`
  padding: 48px var(--padding-mb);
`

const heroImage = css`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
`

const heroText = css`
  margin: 24px auto 0;
  text-align: center;

  .title {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: .05em;
  }

  .text {
    font-size: 1.4rem;
    letter-spacing: .05em;
  }
`