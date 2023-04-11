import NoteMain from '@/components/notes/NoteMain'
import NoteHeader from '@/components/notes/NoteHeader'
import Head from 'next/head'

const NoteLayout = ({ meta, source }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <NoteHeader meta={meta} />
        <NoteMain source={source} />
      </article>
    </>
  )
}

export default NoteLayout
