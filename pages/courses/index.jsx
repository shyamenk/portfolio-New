import { useState } from 'react'
import Stripe from 'stripe'
import CourseSummary from '@/components/courses/CourseSummary'

const Courses = ({ prices: { data = [], has_more } }) => {
  const [products, setProducts] = useState(data)
  const [hasMore, setHasMore] = useState(has_more)

  const lastProductId = products[products.length - 1]?.id

  // Implement infinite scroll when needed
  const loadMore = async () => {
    if (!hasMore || !lastProductId) return

    try {
      const { prices } = await fetch(
        `/api/stripe/prices?starting_after=${lastProductId}`
      ).then(res => res.json())
      if (prices.data) {
        setProducts(products => [...products, ...prices.data])
        setHasMore(prices.has_more)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <div className="flex items-center justify-between space-x-4">
        <h1 className="mb-12 text-3xl font-bold">All Courses</h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10">
        {products.map(price => (
          <CourseSummary key={price.id} price={price} />
        ))}
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const prices = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product']
  })

  return {
    props: {
      prices
    }
  }
}

export default Courses
