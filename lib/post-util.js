import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'contents')

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory)
}

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, '') //removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

export const getAllPosts = () => {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile)
  })

  // sort by date
  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

  return sortedPosts
}

export const getFeturedPosts = () => {
  const allPosts = getAllPosts()

  // filter by boolean of isFeatured
  const featuredPosts = allPosts.filter(post => post.isFeatured)

  return featuredPosts
}