import { ThemeProvider } from 'next-themes'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'
import SiteLayout from '../components/layout/site/SiteLayout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SiteLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </SiteLayout>
    </ThemeProvider>
  )
}

export default MyApp
