/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

import { PostsList } from './PostsList'

export const AllPosts = ({ posts }) => {
  return (
    <div>
      <h2 className="page_title">All Posts</h2>
      <PostsList posts={posts} />
    </div>
  ) 
}
