import PostsIndex from '@/components/blog/PostsIndex'
import { getAllPostsMeta } from '@/lib/blogs'
import Head from 'next/head'

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Shyamenk&apos;s Blog | Fullstack Web developer</title>
        <meta name="description" content="Blogs page" />
      </Head>
      <PostsIndex posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPostsMeta()

  return {
    props: {
      posts
    }
  }
}

export default Posts
