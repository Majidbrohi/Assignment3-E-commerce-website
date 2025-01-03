'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  description: string;
  sizes: string[];
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('100ml')
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true)
        // Assuming we're fetching the first product for this example
        const response = await fetch('/api/products/1')
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const data = await response.json()
        setProduct(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product')
        console.error('Error fetching product:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [])

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>
  }

  if (error) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Error: {error}</div>
  }

  if (!product) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">No product found</div>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/products" className="hover:text-gray-300">Products</Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400">{product.name}</span>
        </div>
      </nav>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg"
            />
            <div className="mt-4 flex justify-center space-x-2">
              <button className="h-2 w-2 rounded-full bg-amber-500" />
              <button className="h-2 w-2 rounded-full bg-gray-600" />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-light">{product.name}</h1>
            
            <p className="text-gray-300">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`h-5 w-5 ${i < product.rating ? 'text-amber-500' : 'text-gray-600'}`}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-400">({product.reviews}) Reviews and Ratings</span>
            </div>

            {/* Size Selection */}
            <div className="flex space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex flex-col items-center space-y-2 rounded-lg border p-4 transition-colors
                    ${selectedSize === size ? 'border-amber-500' : 'border-gray-700'}`}
                >
                  <img
                    src="/placeholder.svg?height=40&width=20"
                    alt={`${size} bottle`}
                    className="h-10 w-5"
                  />
                  <span className="text-sm">{size}</span>
                </button>
              ))}
            </div>

            {/* Price */}
            <div className="text-3xl font-light text-amber-500">${product.price}</div>

            {/* Quantity and Wishlist */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm">Qty</span>
                <div className="flex items-center rounded-md border border-gray-700">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:text-amber-500"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:text-amber-500"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              <button className="flex items-center space-x-2 hover:text-amber-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-sm">Wish list</span>
              </button>
            </div>

            {/* Add to Bag Button */}
            <button 
              className="w-full rounded-md bg-white px-6 py-3 text-black transition-colors hover:bg-gray-200"
            >
              Add to Bag
            </button>

            {/* Afterpay */}
            <div className="flex items-center justify-center space-x-2 rounded-md bg-gray-900 p-4">
              <img
                src="/placeholder.svg?height=20&width=80"
                alt="Afterpay"
                className="h-5"
              />
              <span className="text-sm text-gray-400">
                Shop now and pay later with 4 payments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

