import PostHeader from '@/components/blog/PostHeader'
import PostMain from '@/components/blog/PostMain'
import Head from 'next/head'

const BlogLayout = ({ meta, source, views }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <PostHeader meta={meta} views={views} />
        <PostMain source={source} />
      </article>
    </>
  )
}

export default BlogLayout
