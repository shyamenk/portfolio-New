import { useState, useEffect } from 'react'
import NavLink from '@/components/utils/NavLink'
import ThemeButton from '@/components/utils/ThemeButton'

const SiteHeader = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-10 py-6 mb-16 bg-white bg-opacity-95 dark:bg-react dark:bg-opacity-95">
      <nav className="flex flex-row-reverse items-center justify-center w-full max-w-4xl px-6 mx-auto">
        <div className="m-4">{mounted && <ThemeButton />}</div>

        <ul className="flex gap-6 font-medium">
          <li>
            <NavLink href="/" className="transition hover:text-react-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/projects"
              className="transition hover:text-react-link"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/notes"
              className="transition hover:text-react-link"
            >
              Notes
            </NavLink>
          </li>

          <li>
            <NavLink
              href="/contact"
              className="transition hover:text-react-link"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
