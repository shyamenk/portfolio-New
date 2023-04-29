import BlogLayout from '@/components/layout/blogs/BlogLayout'
import { getAllSlugs, getPostBySlug } from '@/lib/blogs'

const Post = ({ meta, source }) => {
  return <BlogLayout meta={meta} source={source} />
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { meta, source } = await getPostBySlug(slug)

  return {
    props: {
      meta,
      source
    }
  }
}

export async function getStaticPaths() {
  const slugs = getAllSlugs()
  const paths = slugs.map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default Post
