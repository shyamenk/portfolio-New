import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

const prettyCodeOptions = {
  theme: 'material-palenight',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['highlighted', 'word']
  }
}

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export const getPostBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { data, content } = matter(fileContent)
  const readTime = readingTime(content).text
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        [rehypePrettyCode, prettyCodeOptions]
      ]
    }
  })

  const post = {
    meta: {
      ...data,
      slug: realSlug,
      readTime
    },
    source: mdxSource
  }

  return post
}

export const getPostMeta = slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { data, content } = matter(fileContent)
  const readTime = readingTime(content).text

  const meta = {
    ...data,
    slug: realSlug,
    readTime
  }

  return meta
}

export const getAllPostsMeta = () => {
  const files = fs.readdirSync(rootDirectory)
  const posts = files
    .map(file => getPostMeta(file))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  return posts
}

export const getAllSlugs = () => {
  const files = fs.readdirSync(rootDirectory)
  const slugs = files.map(file => file.replace(/\.mdx$/, ''))
  return slugs
}
