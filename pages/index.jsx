import Intro from '@/components/home/Intro'
import RecentNotes from '@/components/notes/RecentNotes'
import ProjectList from '@/components/projects/ProjectList'
import Skills from '@/components/Skills/Skills'
import Timeline from '@/components/timeline/Timeline'
import { getAllNotesMeta } from '@/lib/notes'
import { getAllProjectsMeta } from '@/lib/projects'

const Home = ({ notes, projects }) => {
  return (
    <>
      <Intro />
      <Timeline />
      <Skills />
      <ProjectList projects={projects} />
      {/* <RecentProjects projects={projects} /> */}
      {/* <RecentNotes notes={notes} /> */}
    </>
  )
}

export async function getStaticProps() {
  const notes = getAllNotesMeta()
  const projects = getAllProjectsMeta()
  // const videos = await getPopularVideos()

  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  // const prices = await stripe.prices.list({
  //   active: true,
  //   limit: 4,
  //   expand: ['data.product']
  // })

  return {
    props: {
      notes: notes.slice(0, 5),
      // courses: prices?.data,
      projects: projects.slice(0, 4)
      // videos
    },
    revalidate: 60 * 60 * 24
  }
}

export default Home
