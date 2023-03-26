import Stripe from 'stripe'
import { Fragment, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import clsx from 'clsx'
import { getCourseMetadata } from '@/content/courses'
import formatCurrency from '@/lib/utils'
import { checkout } from '@/lib/stripe'
import TwitterShareIcon from '@/components/utils/TwitterShareIcon'
import LinkedInShareIcon from '@/components/utils/LinkedInShareIcon'
import { useRouter } from 'next/router'
import ViewCounter from '@/components/utils/ViewCounter'

import { emailSchema } from '@/utils/validate'
import useConfetti from '@/hooks/useConfetti'
import AnimatedButton from '@/components/ui/AnimatedButton'
import { Blinker } from '@/components/ui/Loading'

const Course = ({ product, metadata, reviews = [] }) => {
  const router = useRouter()
  const asPath = router?.asPath?.split('?')[0]
  const { canvasRef, confetti } = useConfetti()

  const [subscribing, setSubscribing] = useState(false)
  const [subscribingError, setSubscribingError] = useState(null)
  const handleSubmit = async event => {
    try {
      event.preventDefault()

      const form = event.currentTarget
      const formData = new FormData(form)
      const email = formData.get('email')
      const subscriptions = formData.get('subscriptions')

      try {
        await emailSchema.validate(email)
      } catch (error) {
        throw new Error(error.errors[0])
      }

      setSubscribing(true)
      setSubscribingError(null)

      const { error } = await fetch('/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, subscriptions })
      }).then(res => res.json())

      if (error) throw new Error(error)
      // TODO: show toast notification
      setSubscribing(false)
      confetti({
        particleCount: 150,
        angle: 90,
        spread: 180,
        startVelocity: 15,
        gravity: 0.5,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#fff', '#0178df', '#20232a', '#ef4444'],
        scalar: 0.3
      })
      form.reset()
    } catch (error) {
      setSubscribing(false)
      setSubscribingError(error.message || 'Something went wrong.')
    }
  }

  const handleCheckout = () => {
    const price = product.default_price
    const items = [price]
    checkout(items)
    // TODO: handle error & loading state
  }
  return (
    <section>
      <div className="mx-auto px-4 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/images/courses/next/next.png"
                alt={product?.images?.[0]}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </div>

          {/* Product details */}
          <div className="mx-auto max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {product.name}
                </h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
                <div className="mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Updated{' '}
                    <time dateTime={metadata?.version?.datetime}>
                      {metadata?.version?.date}
                    </time>
                  </p>
                  {asPath && <ViewCounter asPath={asPath} />}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 text-gray-500 dark:text-gray-400">
              {metadata.description.map((line, index) => (
                <p key={index} className="mb-4">
                  {line}
                </p>
              ))}
            </div>

            {/* Get notified form */}
            <form className="relative mt-6" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2 rounded-lg border border-react-link py-[5px] pl-4 pr-[5px] transition-shadow focus-within:shadow-md dark:focus-within:shadow-react-link/50">
                <input
                  type="hidden"
                  name="subscriptions"
                  defaultValue={product?.metadata?.slug}
                />
                <input
                  type="text"
                  name="email"
                  className="grow border-none bg-transparent outline-none placeholder:italic placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="your@email.com"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-md bg-[#2b303b] px-5 py-1 text-sm text-white transition-all hover:bg-[#2b303b]/75 dark:bg-white dark:text-[#2b303b] dark:hover:bg-[#2b303b] dark:hover:text-white"
                  disabled={subscribing}
                >
                  {subscribing ? <Blinker /> : 'Notify me'}
                </button>
              </div>
              {/* error */}
              {subscribingError && (
                <div className="mt-2 ml-1 text-sm text-red-400">
                  {subscribingError}
                </div>
              )}
              {/* confetti */}
              <canvas
                ref={canvasRef}
                className="pointer-events-none absolute top-0 left-0 w-full -translate-y-1/2"
              ></canvas>
            </form>

            {/* Call to action */}
            <div className="mt-6 text-gray-500 dark:text-gray-400">
              {metadata.callToAction.map((line, index) => (
                <p key={index} className="mb-4">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 text-base font-light 2xl:text-lg">
              <span className="text-xl 2xl:text-2xl">
                {formatCurrency({
                  amount: product?.default_price?.unit_amount / 100,
                  decimalPlaces: 2
                })}
              </span>
              <span className="text-rose-500 line-through dark:text-rose-400">
                {formatCurrency({
                  amount: 149,
                  decimalPlaces: 2
                })}
              </span>
            </div>

            {/* <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleCheckout}
                className="flex w-full items-center justify-center rounded-lg border border-react-link py-[5px] px-4 text-base font-medium transition-all hover:bg-react-link hover:text-white focus:outline-none focus:ring-2 focus:ring-react-link focus:ring-offset-2 focus:ring-offset-react dark:ring-offset-white dark:hover:bg-transparent dark:hover:shadow-md dark:hover:shadow-react-link/50"
              >
                Pre-order
              </button>
            </div> */}

            <div className="mt-6">
              <AnimatedButton type="button" onClick={handleCheckout}>
                Pre-order
              </AnimatedButton>
            </div>

            {/* Highlights */}
            {/* <div className="mt-10 border-t border-gray-200 pt-10 dark:border-gray-700">
              <h3 className="text-sm font-medium">Highlights</h3>
              <div className="prose prose-sm mt-4 text-gray-500 dark:text-gray-400">
                <ul role="list">
                  {metadata?.highlights?.map(highlight => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/* Modules */}
            <div className="mt-10 border-t border-gray-200 pt-10 dark:border-gray-700">
              <h3 className="text-sm font-medium">Modules</h3>
              <div className="prose prose-sm mt-4 text-gray-500 dark:text-gray-400">
                <ul role="list">
                  {metadata?.modules?.map(module => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech stack */}
            <div className="mt-10 border-t border-gray-200 pt-10 dark:border-gray-700">
              <h3 className="text-sm font-medium">Tech Stack</h3>
              <div className="prose prose-sm mt-4 text-gray-500 dark:text-gray-400">
                <ul role="list">
                  {metadata?.techStack?.map(module => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10 dark:border-gray-700">
              <h3 className="text-sm font-medium">Share</h3>
              <ul role="list" className="mt-4 flex items-center space-x-6">
                <li>
                  <TwitterShareIcon
                    text={product.name}
                    via="HaamedBahram"
                    className="flex h-6 w-6 items-center justify-center text-gray-500 hover:text-react-link dark:text-gray-400"
                  />
                </li>
                <li>
                  <LinkedInShareIcon className="flex h-6 w-6 items-center justify-center text-gray-500 hover:text-react-link dark:text-gray-400" />
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <Tab.Group as="div">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <Tab.List className="-mb-px flex space-x-8">
                  <Tab
                    className={({ selected }) =>
                      clsx(
                        selected
                          ? 'border-react-link text-react-link'
                          : 'border-transparent hover:border-gray-300 dark:hover:border-gray-500',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium outline-none'
                      )
                    }
                  >
                    Reviews
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      clsx(
                        selected
                          ? 'border-react-link text-react-link'
                          : 'border-transparent hover:border-gray-300 dark:hover:border-gray-500',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium outline-none'
                      )
                    }
                  >
                    FAQ
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      clsx(
                        selected
                          ? 'border-react-link text-react-link'
                          : 'border-transparent hover:border-gray-300 dark:hover:border-gray-500',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium outline-none'
                      )
                    }
                  >
                    Author
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className="-mb-10 pt-10">
                  <h3 className="sr-only">Customer Reviews</h3>

                  {!reviews.length && (
                    <div className="prose prose-sm max-w-none text-gray-500 dark:text-gray-400">
                      No recent reviews
                    </div>
                  )}

                  {reviews?.map((review, reviewIndex) => (
                    <div
                      key={review.id}
                      className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex-none py-10">
                        <Image
                          src={review.avatarSrc}
                          alt=""
                          width={100}
                          height={100}
                          className="h-10 w-10 rounded-full bg-gray-100"
                        />
                      </div>
                      <div
                        className={clsx(
                          reviewIndex === 0
                            ? ''
                            : 'border-t border-gray-200 dark:border-gray-700',
                          'py-10'
                        )}
                      >
                        <h3 className="font-medium">{review.author}</h3>
                        <p>
                          <time dateTime={review.datetime}>
                            {review.date}
                          </time>
                        </p>

                        <div className="mt-4 flex items-center">
                          {[0, 1, 2, 3, 4].map(rating => (
                            <StarIcon
                              key={rating}
                              className={clsx(
                                review.rating > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {review.rating} out of 5 stars
                        </p>

                        <div
                          className="prose prose-sm mt-4 max-w-none text-gray-500 dark:text-gray-400"
                          dangerouslySetInnerHTML={{
                            __html: review.content
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </Tab.Panel>

                <Tab.Panel className="text-sm text-gray-500 dark:text-gray-400">
                  <h3 className="sr-only">Frequently Asked Questions</h3>

                  <dl>
                    {metadata?.faqs?.map(faq => (
                      <Fragment key={faq.question}>
                        <dt className="mt-10 font-medium">
                          {faq.question}
                        </dt>
                        <dd className="prose prose-sm mt-2 max-w-none text-gray-500 dark:text-gray-400">
                          <p>{faq.answer}</p>
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </Tab.Panel>

                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">About the Author</h3>

                  <div className="prose prose-sm max-w-none text-gray-500 dark:text-gray-400">
                    Hey, my name is Hamed. I&apos;m a self-taught web
                    developer. I love to learn and have a passion to teach.
                    Learning to code has changed my life, and I hope I can
                    help you change yours.
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const { data } = await stripe.products.search({
    query: `metadata['slug']:"${slug}"`,
    expand: ['data.default_price']
  })

  const metadata = getCourseMetadata(slug)

  return {
    props: {
      product: data[0],
      metadata
    }
  }
}

export async function getStaticPaths() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const prices = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product']
  })

  const paths = prices.data.map(price => ({
    params: { slug: price.product.metadata.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

Course.courseLayout = true

export default Course
