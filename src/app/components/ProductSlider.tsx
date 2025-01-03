'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Luxurious Elixir Rough',
    price: 220.00,
    volume: '100ml',
    image: '/perfume1.png'
  },
  {
    id: 2,
    name: 'The Golden Legacy',
    price: 160.00,
    volume: '100ml',
    image: '/perfume2.png'
  },
  {
    id: 3,
    name: 'Luxurious Elixir',
    price: 250.00,
    volume: '100ml',
    image: '/perfume3.png'
  },
  {
    id: 4,
    name: 'Luxurious Essence',
    price: 260.00,
    volume: '100ml',
    image: '/perfume4.png'
  },
  {
    id: 5,
    name: 'Luxurious Elixir Rough',
    price: 220.00,
    volume: '100ml',
    image: '/perfume1.png'
  },
  {
    id: 6,
    name: 'The Golden Legacy',
    price: 160.00,
    volume: '100ml',
    image: '/perfume2.png'
  },
  {
    id: 7,
    name: 'Luxurious Elixir',
    price: 250.00,
    volume: '100ml',
    image: '/perfume3.png'
  },
  {
    id: 8,
    name: 'Luxurious Essence',
    price: 260.00,
    volume: '100ml',
    image: '/perfume4.png'
  }
]

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProducts, setVisibleProducts] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleProducts(1)
      } else if (window.innerWidth < 768) {
        setVisibleProducts(2)
      } else if (window.innerWidth < 1024) {
        setVisibleProducts(3)
      } else {
        setVisibleProducts(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - visibleProducts ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - visibleProducts : prevIndex - 1
    )
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-12 text-center text-3xl sm:text-4xl font-normal text-[#E67E22]">
        Best selling products
      </h2>
      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2`}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
          aria-label="Previous slide"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
          aria-label="Next slide"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}

