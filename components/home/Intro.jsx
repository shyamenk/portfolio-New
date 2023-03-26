import Image from 'next/image'
import profilePic from '@/public/images/authors/shyam.png'
import SocialLinks from './SocialLinks'
import { motion, AnimatePresence, Frame } from 'framer-motion'
import { useEffect, useState } from 'react'

const Intro = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    const sentence = 'Web Developer.'
    let counter = 0

    const interval = setInterval(() => {
      if (counter < sentence.length) {
        setText(prevText => prevText + sentence.charAt(counter))
        counter++
      } else {
        clearInterval(interval)
      }
    }, 65)

    return () => clearInterval(interval)
  }, [])
  return (
    <AnimatePresence>
      <section className="flex flex-col-reverse items-start gap-8 mb-16 md:flex-row">
        <Image
          className="flex-1 rounded-full"
          src={profilePic}
          alt="Picture of the author"
          width={115}
          height={115}
        />
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-3xl font-bold"
          >
            Hey, I&#39;m Shyam{' '}
            <span className="font-mono text-xl font-bold text-blue-500 text-opacity-90">
              {text}
            </span>
          </motion.h1>
          <p className="antialiased text-gray-700 dark:text-gray-300 -tracking-normal">
            I&#39;m a Fullstack Developer specializing in modern
            technologies such as React, Next.js, TypeScript, and MongoDB.
            With a passion for building scalable and performant
            applications, I have experience creating REST APIs and
            implementing complex business logic. From front-end design to
            back-end functionality, I&#39;m skilled in every aspect of the
            development process and always strive for excellence in every
            project I undertake.
          </p>
          <div className="flex gap-6 pt-8 ">
            <SocialLinks />
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Intro
