import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import formatCurrency from '@/lib/utils'

const CourseSummary = ({ price }) => {
  const { items, addItem } = useCart()
  const [error, setError] = useState('')
  const { product, unit_amount } = price

  const addItemToCart = price => {
    const found = items.find(p => p.id === price.id)
    if (found) {
      setError('Item has been added!')
      return
    }
    addItem(price)
  }

  useEffect(() => {
    const timeout = setTimeout(() => setError(''), 3000)
    return () => clearTimeout(timeout)
  }, [error])

  return (
    <div className="group relative">
      <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.description}
          className="border object-cover object-center"
          layout="fill"
        />
        <div
          className="flex items-end p-4 opacity-0 group-hover:opacity-100"
          aria-hidden="true"
        >
          <div className="w-full rounded-md bg-react bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-white backdrop-blur backdrop-filter">
            View Course
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium">
        <h3>
          <a href={`/courses/${product.metadata.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p>
          {formatCurrency({
            amount: unit_amount / 100,
            decimalPlaces: 2
          })}
        </p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
    </div>
  )
}

export default CourseSummary
