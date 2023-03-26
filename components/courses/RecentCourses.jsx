import Link from 'next/link'
import CourseSummary from './CourseSummary'

const RecentCourses = ({ courses }) => {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold">Popular Courses</h2>
      <ul className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {courses.map(price => (
          <CourseSummary key={price.id} price={price} />
        ))}
      </ul>
      <Link href="/courses">
        <a className="underline decoration-react-link underline-offset-4">
          All Courses
        </a>
      </Link>
    </section>
  )
}

export default RecentCourses
