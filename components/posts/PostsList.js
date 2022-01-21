/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

import { PostItem } from './PostItem'

export const PostsList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => <PostItem key={post.slug} post={post} /> )}
    </div>
  ) 
}
