import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main className="max-w-5xl px-6 mx-auto mb-16">{children}</main>
      <SiteFooter />
    </>
  )
}

export default SiteLayout
