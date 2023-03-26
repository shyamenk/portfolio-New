import { useState, useEffect } from 'react'

const LinkedInShareIcon = ({ className }) => {
  const [linkedInURL, setLinkedInURL] = useState()

  useEffect(() => {
    const baseURL = `https://www.linkedin.com/sharing/share-offsite/`
    const currentURL = encodeURIComponent(window.location.href)
    setLinkedInURL(`${baseURL}?url=${currentURL}`)
  }, [])

  return (
    <a
      href={linkedInURL}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <span className="sr-only">Share on LinkedIn</span>
      <svg
        aria-hidden="true"
        className="h-5 w-5 transition-colors hover:text-react-link"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
        ></path>
      </svg>
    </a>
  )
}

export default LinkedInShareIcon
