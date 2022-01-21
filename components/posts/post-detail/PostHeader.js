/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import Image from 'next/image'

export const PostHeader = ({ title, image, date }) => {
  return (
    <header css={postHeader}>
      <p className="date">{date}</p>
      <h1 className="title">{title}</h1>
      <figure className="img">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          objectFit={"cover"}
          objectPosition={"50%"}
        />
      </figure>
    </header>
  )
}

const postHeader = css`
  .title {
    font-size: 3.2rem;
    font-weight: 500;
    text-align: center;
  }

  .img {
    width: 100%;
    height: auto;
    margin: 16px auto 0;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .date {
    font-size: 1.3rem;
    text-align: center;
  }
`