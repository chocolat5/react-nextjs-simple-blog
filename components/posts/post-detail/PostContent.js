/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

import { PostHeader } from './PostHeader'

SyntaxHighlighter.registerLanguage('js', js)

export const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  // override HTML tag inside Markdown
  const customRenderers = {
    // img(image) {
    //   return (
    //     <figure>
    //       <Image
    //         src={`/images/posts/${post.slug}/${image.src}`}
    //         alt={image.alt}
    //         width={600}
    //         height={400}
    //         objectFit={"cover"}
    //         objectPosition={"50%"}
    //       />
    //     </figure>
    //   )
    // },
    p(paragraph) {
      const { node } = paragraph
      if (node.children[0].tagName === 'img') {
        const image = node.children[0]
        return (
          <figure>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={400}
              objectFit={"cover"}
              objectPosition={"50%"}
            />
          </figure>
        )
      }
      return <p>{paragraph.children}</p>
    },
    code(code) {
      const { className, children } = code
      const language = className.split('-')[1]
      
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      )
    },
  }

  return (
    <article css={postContent}>
      <PostHeader
        title={post.title}
        date={post.date}
        image={imagePath}
      />
      <ReactMarkdown
        className="content"
        components={customRenderers}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  )
}

const postContent = css`
  .content {
    padding-top: 100px;
  }

  h2, h3, h4 {
    margin-top: 56px;
    margin-bottom: 16px;
    font-weight: 500;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  ul li {
    list-style-type: disc;
    list-style-position: inside;
  }

  img {
    width: 100%;
    height: auto;
  }

  pre {
    width: 100%;
  }

`