import Head from 'next/head'

import { Hero } from '../components/Hero'
import { FeaturedPosts } from '../components/FeaturedPosts'
import { getFeturedPosts } from '../lib/post-util'

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Chocolat' Blog</title>
        <meta name="description" content="I post about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}