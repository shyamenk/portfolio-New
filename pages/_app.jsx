import SiteLayout from '@/components/layout/site/SiteLayout'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import CartProvider from '../context/CartContext'

export { reportWebVitals } from 'next-axiom'
import '@/styles/globals.css'
import CourseLayout from '@/components/layout/site/CourseLayout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <CartProvider>
        {Component.courseLayout ? (
          <CourseLayout>
            <Component {...pageProps} />
            <Analytics />
          </CourseLayout>
        ) : (
          <SiteLayout>
            <Component {...pageProps} />
            <Analytics />
          </SiteLayout>
        )}
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp
