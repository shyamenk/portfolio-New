import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required()
})

const ContactForm = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: schema,
    onSubmit: async values => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
        const { message } = await response.json()
        toast.success(message)
        router.push('/')
      } catch (error) {
        toast.error(error.message)
      }
    }
  })

  return (
    <section className="relative dark:bg-react py-28">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-900 sm:px-4 md:px-8">
        <div className="max-w-lg px-4 space-y-3 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="font-semibold text-react-link">Contact</h3>
          <p className="text-3xl font-semibold dark:text-white sm:text-4xl">
            Get in touch
          </p>
          <p className="dark:text-gray-300">
            We’d love to hear from you! Please fill out the form bellow.
          </p>
        </div>
        <div className="p-8 px-4 mx-auto mt-12 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Full Name"
                className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-gray-800"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email"
                className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-gray-800"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label className="font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                placeholder="Subject"
                className="w-full px-3 py-2 bg-transparent border rounded-lg shadow-sm outline-none appearance-none focus:border-gray-800"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-red-500">{formik.errors.subject}</div>
              ) : null}
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                placeholder="Message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm outline-none appearance-none resize-none h-36 focus:border-gray-800"
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500">{formik.errors.message}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white duration-150 bg-gray-800 rounded-lg hover:bg-gray-700 active:bg-gray-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)'
        }}
      ></div>
    </section>
  )
}

export default ContactForm
