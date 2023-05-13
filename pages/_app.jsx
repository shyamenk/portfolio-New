import { ThemeProvider } from 'next-themes'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'
import SiteLayout from '../components/layout/site/SiteLayout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Shyamenk&apos;s Portfolio Website | Fullstack Web developer
        </title>
        <meta
          name="description"
          content="I’m  Fullstack Developer specializing in modern technologies such as React, Next.js, TypeScript, and MongoDB. With a passion for building scalable and performant applications"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ThemeProvider attribute="class">
        <SiteLayout>
          <Component {...pageProps} />
          <ToastContainer />
        </SiteLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
