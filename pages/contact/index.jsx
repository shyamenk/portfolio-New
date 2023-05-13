import ContactForm from '@/components/contact/ContactForm'
import Head from 'next/head'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Shyamenk&apos;s Contact | Fullstack Web developer</title>
        <meta name="description" content="Contact Page" />
      </Head>
      <ContactForm />
    </>
  )
}

export default Contact
