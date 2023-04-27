import Intro from '@/components/home/Intro'
// import RecentNotes from '@/components/notes/RecentNotes'
import ProjectList from '@/components/projects/ProjectList'
import Skills from '@/components/home/Skills'
import Timeline from '@/components/home/Timeline'
import { getAllNotesMeta } from '@/lib/notes'
import { getAllProjectsMeta } from '@/lib/projects'
import Subscribe from '../components/home/Subscribe'

const Home = ({ notes, projects }) => {
  return (
    <>
      <Intro />
      <Timeline />
      <Skills />
      <ProjectList projects={projects} />
      <Subscribe />
      {/* <RecentNotes notes={notes} /> */}
    </>
  )
}

export async function getStaticProps() {
  const notes = getAllNotesMeta()
  const projects = getAllProjectsMeta()

  return {
    props: {
      notes: notes.slice(0, 5),
      projects: projects.slice(0, 4)
    },
    revalidate: 60 * 60 * 24
  }
}

export default Home
