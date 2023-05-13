import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaMail } from 'react-icons/fa'
import clsx from 'clsx'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon
} from '@/components/ui/SocialIcons'

const index = () => {
  return (
    <>
      <Head>
        <title>Shyamenk&apos;s About me | Fullstack Web developer</title>
        <meta name="description" content="About Page" />
      </Head>
      <section className="dark:bg-react dark:text-gray-100 pt-20">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20 md:block">
            {/* <div className=" max-w-md px-2.5 lg:max-w-none">
              <Image
                src="/images/coder.avif"
                alt="avatar"
                width={500}
                height={500}
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="rotate-8 rounded-2xl bg-gray-100 object-cover dark:bg-gray-800"
              />
            </div> */}
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
              I’m Shyam kumar, a passionate web developer based in India.
            </h1>
            <div className="mt-6 space-y-7 text-base text-gray-600 dark:text-gray-400">
              <p>
                My journey in the tech industry started in 2011 when I
                began working as a junior iPhone developer. Although I
                pursued a different career path for some time, the pandemic
                brought some unexpected changes. I lost my job, which gave
                me the opportunity to reflect on my aspirations and
                passions. I realized that the tech industry offered many
                remote work opportunities, which sparked my interest in
                learning how to code.
              </p>
              <p>
                At first, I was confused about which language to choose,
                but after doing some research, I decided to learn
                JavaScript. The reason I chose JavaScript was that I could
                do both frontend and backend with this language in a short
                period of time.
              </p>
              <p>
                Initially, I struggled with structuring my learning plan
                and picked random topics to study. But after a month, I
                realized I needed to start from the fundamentals and build
                my knowledge. I enrolled in Frontend Masters JavaScript The
                Hard Parts course, which gave me a deep understanding of
                the languages inner workings.
              </p>
              <p>
                Today, i’m armed with my knowledge and experience, I can
                confidently say that I am a <em>full-stack</em> developer
                who can create incredible applications with
                <em> type-safe</em> code.
              </p>
            </div>
          </div>
          <div className="lg:pl-20 ">
            <ul role="list">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/shyamenk"
                className='group dark:hover:text-sky-500" mt-4 flex text-sm font-medium text-gray-800 transition hover:text-sky-500 dark:text-gray-200'
              >
                <TwitterIcon
                  className=" h-6
                  w-6
                  flex-none
                  fill-gray-500
                  transition
                  group-hover:fill-sky-500"
                />
                <span className="ml-4">Follow on Twitter</span>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/shyamenk/"
                className='group dark:hover:text-sky-500" mt-4 flex text-sm font-medium text-gray-800 transition hover:text-sky-500 dark:text-gray-200'
              >
                <GitHubIcon
                  className=" h-6
                  w-6
                  flex-none
                  fill-gray-500
                  transition
                  group-hover:fill-sky-500"
                />
                <span className="ml-4">Follow on GitHub</span>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shyamenk/"
                className='group dark:hover:text-sky-500" mt-4 flex text-sm font-medium text-gray-800 transition hover:text-teal-500 dark:text-gray-200'
              >
                <LinkedInIcon
                  className=" h-6
                  w-6
                  flex-none
                  fill-gray-500
                  transition
                  group-hover:fill-sky-500"
                />
                <span className="ml-4">Follow on LinkedIn</span>
              </a>

              <a
                href="mailto:shyamenk@gmail"
                target="_blank"
                rel="noreferrer"
                className="group mt-2 border-t dark:hover:text-sky-500 flex text-sm font-medium text-gray-800 transition hover:text-sky-500 dark:text-gray-200 border-gray-100 pt-4 dark:border-gray-700/40"
              >
                <MailIcon
                  className=" h-6
                  w-6
                  flex-none
                  fill-gray-500
                  transition
                  group-hover:fill-sky-500"
                />
                <span className="ml-4">shyamenk@gmail.com</span>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
