import SiteLayout from '@/components/layout/site/SiteLayout'
// import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      {Component.courseLayout ? (
        <>
          <Component {...pageProps} />
          {/* <Analytics /> */}
        </>
      ) : (
        <SiteLayout>
          <Component {...pageProps} />
          {/* <Analytics /> */}
        </SiteLayout>
      )}
    </ThemeProvider>
  )
}

export default MyApp
