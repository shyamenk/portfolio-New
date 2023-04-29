import PostMain from '@/components/blog/PostMain'
import PostHeader from '@/components/blog/PostHeader'
import Head from 'next/head'

const BlogLayout = ({ meta, source }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <PostHeader meta={meta} />
        <PostMain source={source} />
      </article>
    </>
  )
}

export default BlogLayout
