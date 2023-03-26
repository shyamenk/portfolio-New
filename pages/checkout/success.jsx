import useSWR from 'swr'
import Image from 'next/image'
import fetcher from '@/lib/fetcher'
import { useRouter } from 'next/router'

function CheckoutSuccessPage() {
  const {
    query: { sessionId }
  } = useRouter()

  const URL = sessionId ? `/api/stripe/sessions/${sessionId}` : null
  const { data: checkoutSession, error } = useSWR(URL, fetcher)

  if (error) return <div>failed to load the session</div>

  const customer = checkoutSession?.customer_details
  const products = checkoutSession?.line_items?.data?.map(item => ({
    ...item.price.product,
    price: item.price.unit_amount,
    quantity: item.quantity
  }))

  const payment =
    checkoutSession?.payment_intent?.charges?.data[0]
      ?.payment_method_details
  const subtotal = checkoutSession?.amount_subtotal
  const total = checkoutSession?.amount_total
  const discount = checkoutSession?.total_details?.amount_discount
  const tax = checkoutSession?.total_details?.amount_tax

  return (
    <div className="">
      <div className="">
        <div className="max-w-xl">
          <h1 className="text-sm font-medium text-react-link">
            Payment successful
          </h1>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Thanks for joining
          </p>
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
            We&apos;re excited to have you here, hang tight and we&apos;ll
            be in touch soon!
          </p>

          <dl className="mt-12 text-sm font-medium">
            <dt className="">Order number</dt>
            <dd className="mt-2 text-react-link">
              {checkoutSession?.payment_intent?.id}
            </dd>
          </dl>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-700">
          <h2 className="sr-only">Your order</h2>

          <h3 className="sr-only">Items</h3>
          {products?.map(product => (
            <div
              key={product.id}
              className="flex space-x-6 border-b border-gray-200 py-10 dark:border-gray-700"
            >
              <Image
                src={product.images[0]}
                alt={product.description}
                width={160}
                height={160}
                className="flex-none rounded-lg bg-gray-100 object-cover object-center"
              />
              <div className="flex flex-auto flex-col">
                <div>
                  <h4 className="font-medium">
                    <a href={product.url}>{product.name}</a>
                  </h4>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {product.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-1 items-end">
                  <dl className="flex space-x-4 divide-x divide-gray-200 text-sm dark:divide-gray-700 sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium">Quantity</dt>
                      <dd className="ml-2 text-gray-500 dark:text-gray-400">
                        {product.quantity}
                      </dd>
                    </div>
                    <div className="flex pl-4 sm:pl-6">
                      <dt className="font-medium">Price</dt>
                      <dd className="ml-2 text-gray-500 dark:text-gray-400">
                        {(product.price / 100).toLocaleString('en-CA', {
                          style: 'currency',
                          currency: 'CAD'
                        })}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

            <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
              {payment?.card && (
                <div>
                  <dt className="font-medium">Payment Information</dt>
                  <dd className="mt-2 text-gray-500 dark:text-gray-400">
                    <p>{payment.card.wallet}</p>
                    <p className="font-medium">
                      {payment.card.brand.toUpperCase()}
                    </p>
                    <div className="flex-auto">
                      <p className="">Ending with {payment.card.last4}</p>
                      <p>
                        Expires on {payment.card.exp_month} /{' '}
                        {payment.card.exp_year}
                      </p>
                    </div>
                  </dd>
                </div>
              )}
              <div>
                <dt className="font-medium">Billing address</dt>
                <dd className="mt-2 text-gray-500 dark:text-gray-400">
                  <address className="not-italic">
                    <span className="block">Name: {customer?.name}</span>
                    <span className="block">Email: {customer?.email}</span>
                    <span className="block">
                      Country: {customer?.address.country}
                    </span>
                    <span className="block">
                      Postal Code:{customer?.address.postal_code}
                    </span>
                  </address>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm dark:border-gray-700">
              {/* <div className="flex justify-between">
                <dt className="font-medium">Subtotal</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  {(subtotal / 100).toLocaleString('en-CA', {
                    style: 'currency',
                    currency: 'CAD'
                  })}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex font-medium">Discount</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  -
                  {(discount / 100).toLocaleString('en-CA', {
                    style: 'currency',
                    currency: 'CAD'
                  })}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Tax</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  {(tax / 100).toLocaleString('en-CA', {
                    style: 'currency',
                    currency: 'CAD'
                  })}
                </dd>
              </div> */}
              <div className="flex justify-between">
                <dt className="font-medium">Total</dt>
                <dd className="">
                  {(total / 100).toLocaleString('en-CA', {
                    style: 'currency',
                    currency: 'CAD'
                  })}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccessPage
