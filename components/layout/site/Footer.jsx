import CustomLink from '@/components/utils/CustomLink'
import React from 'react'
import {
  SiGithub,
  SiGooglehome,
  SiLinkedin,
  SiTwitter
} from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="py-6 dark:bg-react dark:text-gray-50">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©{new Date().getFullYear()} All rights reserved</span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <CustomLink
              href="https://github.com/shyamenk"
              className="flex items-center justify-center w-10 h-10 rounded-full"
            >
              <SiGithub className="w-6 h-6" />
            </CustomLink>
            <CustomLink
              href="https://linkedin.com/shyamenk"
              className="flex items-center justify-center w-10 h-10 rounded-full"
            >
              <SiLinkedin className="w-6 h-6" />
            </CustomLink>
            <CustomLink
              href="https://twitter.com/shyamenk"
              className="flex items-center justify-center w-10 h-10 rounded-full"
            >
              <SiTwitter className="w-6 h-6" />
            </CustomLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
