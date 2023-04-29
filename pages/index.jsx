import Intro from '@/components/home/Intro'
import ProjectList from '@/components/projects/ProjectList'
import Skills from '@/components/home/Skills'
import { getAllPostsMeta } from '@/lib/blogs'
import { getAllProjectsMeta } from '@/lib/projects'
import Subscribe from '../components/home/Subscribe'
import Experience from '@/components/home/Experience'

const Home = ({ posts, projects }) => {
  return (
    <>
      <Intro />
      <Experience />
      <Skills />
      <ProjectList projects={projects} />
      <Subscribe />
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPostsMeta()
  const projects = getAllProjectsMeta()

  return {
    props: {
      posts: posts.slice(0, 5),
      projects: projects.slice(0, 4)
    },
    revalidate: 60 * 60 * 24
  }
}

export default Home
