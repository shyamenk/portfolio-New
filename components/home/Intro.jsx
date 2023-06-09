import Image from 'next/image'
import profilePic from '@/public/images/authors/shyam.png'
import SocialLinks from './SocialLinks'
import { useEffect, useState } from 'react'

const Intro = () => {
  return (
    <section className="flex flex-col-reverse items-start gap-8 p-2 mb-8 md:flex-row">
      <div className="flex-1 ">
        <h1 className="mb-6 text-3xl font-bold">
          Hey, I&#39;m Shyam{' '}
          <span className="font-mono text-xl font-bold text-blue-500 text-opacity-90">
            Web Developer
          </span>
        </h1>
        <p className="antialiased text-gray-700 dark:text-gray-400 -tracking-normal">
          I&#39;m a Fullstack Developer specializing in modern technologies
          such as React, Next.js, TypeScript, and MongoDB. With a passion
          for building scalable and performant applications, I have
          experience creating REST APIs and implementing complex business
          logic. From front-end design to back-end functionality, I&#39;m
          skilled in every aspect of the development process and always
          strive for excellence in every project I undertake.
        </p>
        <div className="flex gap-6 pt-8 ">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

export default Intro
