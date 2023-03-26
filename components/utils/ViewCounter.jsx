import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ViewCounter = ({ asPath, className = '' }) => {
  const router = useRouter()
  const cleanAsPath = asPath?.split('?')[0]
  const currentAsPath = router?.asPath?.split('?')[0]

  const [views, setViews] = useState(0)
  const { data } = useSWR(`/api/views?asPath=${cleanAsPath}`, fetcher)

  useEffect(() => {
    if (!data) return
    setViews(data.viewCount)
  }, [data])

  useEffect(() => {
    // don't register a view if we're on a different page
    if (!cleanAsPath || cleanAsPath !== currentAsPath) return

    const registerView = async () => {
      if (process.env.NODE_ENV !== 'production') {
        return
      }

      try {
        const { viewCount } = await fetch(
          `/api/views?asPath=${cleanAsPath}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(res => res.json())

        if (viewCount) {
          setViews(viewCount)
        }
      } catch (error) {
        return
      }
    }

    registerView()
  }, [cleanAsPath, currentAsPath])

  return (
    <span className={className}>
      {views > 0 ? views.toLocaleString() : '---'} views
    </span>
  )
}

export default ViewCounter
