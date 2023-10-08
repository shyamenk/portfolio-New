import BlogLayout from '@/components/layout/blogs/BlogLayout'
import { getAllSlugs, getPostBySlug } from '@/lib/blogs'
import Head from 'next/head'
import { Redis } from '@upstash/redis'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const redis = Redis.fromEnv()

const Post = ({ meta, source, views }) => {
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    fetch(`/api/viewCounter/${slug}`, {
      method: 'PATCH'
    })
  }, [slug])

  return (
    <>
      <Head>
        <title>
          Shyamenk&apos;s {meta.title} | Fullstack Web developer
        </title>
        <meta name="description" content={meta.excerpt} />
      </Head>
      <BlogLayout meta={meta} source={source} views={views} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { meta, source } = await getPostBySlug(slug)
  const views = await redis.get(`views:${slug}`)

  return {
    props: {
      meta,
      source,
      views
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
