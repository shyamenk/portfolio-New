import PostsIndex from '@/components/blog/PostsIndex'
import { getAllPostsMeta } from '@/lib/blogs'

const Posts = ({ posts }) => {
  return <PostsIndex posts={posts} />
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
