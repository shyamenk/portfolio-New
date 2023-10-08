import { useState } from 'react'
import { toast } from 'react-toastify'
const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setIsValidEmail(false)
      return
    } else {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      const { message } = await response.json()
      toast.success(message)
      setEmail('')
      setIsValidEmail(true)
    }
  }
  return (
    <section className="relative py-20 mt-10 ">
      <div className="relative z-10 items-center justify-between gap-12 px-4 mx-auto md:px-8 md:flex">
        <div className="flex-1 max-w-lg rounded-lg ">
          <h3 className="text-3xl font-bold">
            Get the newsletter straight to your inbox.
          </h3>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-x-3 md:justify-end"
          >
            <div className="relative">
              <svg
                className="absolute inset-y-0 w-6 h-6 my-auto text-gray-400 left-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full py-2 pl-12 pr-3 text-gray-500 bg-white border rounded-lg shadow-sm outline-none focus:border-sky-600"
              />
            </div>
            <button className="block w-auto px-4 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg shadow hover:bg-sky-500 active:bg-sky-700 active:shadow-none">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full rounded-lg opacity-50 bg-gray-800/10 dark:bg-blue-600/10"></div>
    </section>
  )
}

export default Subscribe
