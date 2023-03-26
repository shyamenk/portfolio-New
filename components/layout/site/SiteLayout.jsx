import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl px-6 mx-auto mb-16">{children}</main>
      <SiteFooter />
    </>
  )
}

export default SiteLayout
