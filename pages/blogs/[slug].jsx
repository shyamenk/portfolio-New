import BlogLayout from '@/components/layout/blogs/BlogLayout'
import { getAllSlugs, getPostBySlug } from '@/lib/blogs'
import Head from 'next/head'

const Post = ({ meta, source }) => {
  return (
    <>
      <Head>
        <title>
          Shyamenk&apos;s {meta.title} | Fullstack Web developer
        </title>
        <meta name="description" content={meta.excerpt} />
      </Head>
      <BlogLayout meta={meta} source={source} />
    </>
  )
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
