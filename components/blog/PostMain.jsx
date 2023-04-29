import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/mdx/MDXComponents'

const PostMain = ({ source }) => {
  return (
    <main className="mb-16 prose max-w-none dark:prose-invert">
      <MDXRemote {...source} components={MDXComponents} />
    </main>
  )
}

export default PostMain
