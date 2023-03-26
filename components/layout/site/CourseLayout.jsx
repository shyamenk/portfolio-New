import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const CourseLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}

export default CourseLayout
