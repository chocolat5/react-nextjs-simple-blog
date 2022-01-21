import { PostsList } from './posts/PostsList'

export const FeaturedPosts = ({ posts }) => {
  return (
    <section>
      <h2 className="page_title">Featured Posts</h2>
      <PostsList posts={posts} />
    </section>
  )
}
