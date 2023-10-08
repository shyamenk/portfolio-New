import SocialLinks from './SocialLinks'

const Intro = () => {
  return (
    <section className="flex flex-col-reverse items-start gap-8 p-2 mb-8 md:flex-row">
      <div className="flex-1 ">
        <h1 className="mb-6 text-3xl font-bold">
          Hey, I&apos;m Shyam{' '}
          <span className="font-mono text-xl font-bold text-blue-500 text-opacity-90">
            Web Developer
          </span>
        </h1>
        <p className="antialiased text-gray-700 dark:text-gray-400">
          I&apos;m a web developer with expertise in modern technologies,
          including React, Next.js, TypeScript, and MongoDB. In addition to
          these technologies, I also have a strong background in Python
          FastAPI, PostgreSQL, and Node.js. My passion lies in crafting
          scalable and high-performance applications, and I bring a wealth
          of experience in building REST APIs and handling intricate
          business logic. From front-end design to back-end functionality,
          I'm well-versed in every facet of the development process and am
          dedicated to delivering excellence in every project I take on.
        </p>
        <div className="flex gap-6 pt-8 ">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

export default Intro
