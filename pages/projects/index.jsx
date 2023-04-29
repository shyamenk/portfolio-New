import ProjectsIndex from '@/components/projects/ProjectsIndex'
import { getAllProjectsMeta } from '@/lib/projects'

const Projects = ({ projects, icons }) => {
  return <ProjectsIndex projects={projects} icons={icons} />
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
