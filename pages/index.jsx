// import RecentCourses from '@/components/courses/RecentCourses'
import Intro from '@/components/home/Intro'
import RecentNotes from '@/components/notes/RecentNotes'
import RecentProjects from '@/components/projects/RecentProjects'
import Skills from '@/components/Skills/Skills'
import Timeline from '@/components/timeline/Timeline'
import Subscribe from '@/components/utils/Subscribe'
// import RecentVideos from '@/components/videos/RecentVideos'
import { getAllNotesMeta } from '@/lib/notes'
import { getAllProjectsMeta } from '@/lib/projects'
// import { getPopularVideos } from '@/lib/youtube'
// import Stripe from 'stripe'

const Home = ({ notes, projects }) => {
  return (
    <>
      <Intro />
      <Timeline />
      <Skills />
      <RecentProjects projects={projects} />
      <RecentNotes notes={notes} />
      <Subscribe />
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
