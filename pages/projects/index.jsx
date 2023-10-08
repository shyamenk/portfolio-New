import ProjectsIndex from '@/components/projects/ProjectsIndex'
import { getAllProjectsMeta } from '@/lib/projects'
import Head from 'next/head'

const Projects = ({ projects, icons }) => {
  return (
    <>
      <Head>
        <title>Shyamenk&apos;s Projects| Fullstack Web developer</title>
        <meta name="description" content="Project Page" />
      </Head>
      <ProjectsIndex projects={projects} icons={icons} />
    </>
  )
}

export async function getStaticProps() {
  const projects = getAllProjectsMeta()

  return {
    props: {
      projects
    }
  }
}

export default Projects
