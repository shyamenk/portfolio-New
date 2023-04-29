const Experience = () => {
  const jobs = [
    {
      title: 'Ethernex IT Solutions',
      position: 'Web Developer',
      desc: 'Designing and developing responsive and dynamic web applications using technologies such as HTML, CSS, JavaScript, and React, Next JS',
      date: 'Dec 17, 2021 - Till now',
      type: 'Full-time',
      location: 'United Arab Emirates'
    },
    {
      title: 'Codelynks Software Solutions Pvt. Ltd',
      position: 'iPhone Developer',
      desc: ' Design and build advanced iOS applications using Xcode and Objective C.Ensure the performance, quality, and responsiveness of applications. Collaborate with a team to define, design, and ship new features.',
      date: 'Jan 11, 2011 - Jan 5, 2014',
      type: 'Fulltime',
      location: 'Cochin, India'
    },
    {
      title: ' Quest Innovative solutions',
      position: 'Intern',
      desc: 'The project involved the development of an Internal Management System using web-based technology. The system was built using Visual Studio 2010 with the .NET Framework 4.0 and implemented in ASP.NET using C#. To ensure a robust and organized architecture, the system followed the Model-View-Controller (MVC) pattern.',
      date: 'Jun 2, 2011 Dec 4, 2011',
      type: 'Part Time',
      location: 'Cochin. India'
    }
  ]
  return (
    <section className="max-w-screen-lg mx-auto mb-8 bg-white dark:bg-react">
      <div>
        <h1 className="mb-4 text-3xl font-semibold text-gray-800 dark:text-white">
          Work Experience
        </h1>
      </div>
      <ul className="mt-2 space-y-6 ">
        {jobs.map((item, idx) => (
          <li key={idx} className="space-x-2">
            <div>
              <div className="justify-between sm:flex">
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-medium text-react-link">
                    {item.title}
                  </h3>
                  <h4 className="text-md dark:text-200 font-semibold text-gray-600 dark:text-gray-300">
                    {item.position}
                  </h4>
                  <p className="pr-2 mt-2 text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                  <span className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="items-center mt-4 space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                <span className="flex items-center text-gray-500 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  {item.type}
                </span>
                <span className="flex items-center text-gray-500 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.location}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
