import Image from 'next/image'
import profilePic from '@/public/images/authors/shyam.png'
import SocialLinks from './SocialLinks'
import { useEffect, useState } from 'react'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon
} from '@/components/ui/SocialIcons'
function SocialLink({ icon: Icon, ...props }) {
  return (
    <a className="group cur -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}
const Intro = () => {
  return (
    <>
      <section className="flex flex-col-reverse items-start gap-8  mb-8 md:flex-row">
        <div className="flex-1 ">
          <h1 className="mb-6 text-2xl  tracking-tight sm:text-3xl font-bold">
            Hey, I&#39;m Shyam{' '}
            <span className="font-mono text-xl font-bold text-blue-500 text-opacity-90">
              Web Developer
            </span>
          </h1>
          <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
            I&#39;m a Fullstack Developer specializing in modern
            technologies such as React, Next.js, TypeScript, and MongoDB.
            With a passion for building scalable and performant
            applications, I have experience creating REST APIs and
            implementing complex business logic. From front-end design to
            back-end functionality, I&#39;m skilled in every aspect of the
            development process and always strive for excellence in every
            project I undertake.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/shyamenk"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
              target="_blank"
              rel="noopener"
            />
            <SocialLink
              href="https://github.com/shyamenk/"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
              rel="noopener"
            />
            <SocialLink
              href="https://www.linkedin.com/in/shyamenk/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
              rel="noopener"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro
