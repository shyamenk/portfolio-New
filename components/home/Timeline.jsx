import React from 'react'

const Timeline = () => {
  return (
    <div className="grid gap-4 p-2 mb-8 sm:grid-cols-12">
      <div className="col-span-12 pt-1 sm:col-span-3">
        <h3 className="text-3xl font-semibold">Work Experience</h3>
      </div>
      <div className="relative col-span-12 space-y-6 sm:col-span-9">
        <div className="col-span-12 space-y-12 relative  sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
            <h3 className="text-xl font-semibold tracking-wide">
              Ethernex IT Solutions{' '}
            </h3>
            <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 ">
              Web Developer
            </h4>
            <time className="text-sm font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-400">
              Dec 2021
            </time>
            <p className="mt-2">
              Designing and developing responsive and dynamic web
              applications using technologies such as HTML, CSS,
              JavaScript, and React, Next JS.
            </p>
          </div>

          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
            <h3 className="text-xl font-semibold tracking-wide">
              Codelynks Software Solutions Pvt. Ltd
            </h3>
            <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 ">
              iPhone Developer
            </h4>
            <time className="text-sm font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-400">
              Jan 2012
            </time>
            <p className="mt-2">
              Design and build advanced iOS applications using Xcode and
              Objective C.Ensure the performance, quality, and
              responsiveness of applications. Collaborate with a team to
              define, design, and ship new features.
            </p>
          </div>

          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
            <h3 className="text-xl font-semibold tracking-wide">
              Quest Innovative solutions
            </h3>
            <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 ">
              Intern
            </h4>
            <time className="text-sm font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-400">
              Jun 2011
            </time>
            <p className="mt-2"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
