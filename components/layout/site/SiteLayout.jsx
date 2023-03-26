import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import Footer from './Footer'

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl px-6 mx-auto mb-16">{children}</main>
      <Footer />
      {/* <SiteFooter /> */}
    </>
  )
}

export default SiteLayout
