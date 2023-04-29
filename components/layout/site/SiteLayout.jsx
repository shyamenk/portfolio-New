import SiteHeader from './SiteHeader'
import Footer from './Footer'

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main className="max-w-4xl px-6 mx-auto mb-16">{children}</main>
      <Footer />
    </>
  )
}

export default SiteLayout
