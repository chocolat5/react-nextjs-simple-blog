/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'

export const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`
  
  return (
    <article css={item}>
      <Link href={linkPath}>
        <a>
          <figure css={postThumb}>
            <Image
              src={imagePath}
              alt={title}
              width={600}
              height={400}
              objectFit={"cover"}
              objectPosition={"50%"}
            />
          </figure>
          <div css={postText}>
            <h3 className="title">{title}</h3>
            <time className="date" dateTime={formattedDate}>{formattedDate}</time>
            <p className="excerpt">{excerpt}</p>
          </div>
        </a>
      </Link>
    </article>
  )
}

const item = css`
  margin-bottom: 56px;

  a {
    display: flex;
    justify-content: space-between;
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const postThumb = css`
  width: 38%;
  overflow: hidden;
`

const postText = css`
  width: 58%;

  .title {
    color: var(--color-headline);
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: .05em;
  }

  .date {
    margin: 8px 0 0;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .excerpt {
    margin: 8px 0 0;
    font-size: 1.4rem;
    letter-spacing: .02em;
    line-height: 1.8;
  }
`