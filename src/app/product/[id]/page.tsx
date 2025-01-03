'use client'

import { useState,useEffect  } from 'react'
import Link from 'next/link'

interface ApiProduct {
  id: string;
  name: string;
  rating: number;
  reviews: Array<{
    id: number;
    author: string;
    rating: number;
    comment: string;
  }>;
  price: string;
  image: string;
  description: string;
}
interface Review {
  id: number
  author: string
  rating: number
  comment: string
}

interface Product {
  id: string
  name: string
  rating: number
  reviews: Review[]
  price: string
  image: string
  description: string
}


const products = [
  {
    id: 1,
    name: "Luxurious Noir Rouge",
    rating: 5,
    reviews: [
      { id: 1, author: "Jane Doe", rating: 5, comment: "Absolutely divine! The scent is intoxicating and long-lasting." },
      { id: 2, author: "John Smith", rating: 4, comment: "A beautiful fragrance, though a bit strong for everyday wear." }
    ],
    price: "1,500.00",
    image: "/p1.png?height=400&width=300",
    description: "A captivating blend of rich, dark notes with a hint of rouge, creating an air of mystery and sophistication."
  },
  {
    id: 2,
    name: "The Golden Legacy",
    rating: 5,
    reviews: [
      { id: 3, author: "Alice Johnson", rating: 5, comment: "A truly luxurious scent, perfect for special occasions." },
      { id: 4, author: "Bob Williams", rating: 5, comment: "The best perfume I've ever owned!" }
    ],
    price: "1,650.00",
    image: "/p2.png?height=400&width=300",
    description: "An opulent fragrance that embodies timeless elegance, leaving a trail of golden luxury in its wake."
  },
  {
    id: 3,
    name: "Luxurious Noir",
    rating: 5,
    reviews: [
      { id: 5, author: "Charlie Brown", rating: 4, comment: "A bit too strong for my taste, but the quality is undeniable." },
      { id: 6, author: "Diana Davis", rating: 5, comment: "Love this scent! It's mysterious and sophisticated." }
    ],
    price: "1,750.00",
    image: "/p3.png?height=400&width=300",
    description: "A deep, intense fragrance that captures the essence of night, perfect for those who embrace the darkness."
  },
  {
    id: 4,
    name: "Luxurious Essence",
    rating: 5,
    reviews: [
      { id: 7, author: "Eve Green", rating: 5, comment: "An unforgettable olfactory experience, as described!" },
      { id: 8, author: "Frank Miller", rating: 4, comment: "A bit pricey, but worth it for the quality." }
    ],
    price: "1,450.00",
    image: "/p4.png?height=400&width=300",
    description: "The epitome of luxury distilled into a single scent, offering an unforgettable olfactory experience."
  },
  {
    id: 5,
    name: "Ayrum Aura",
    rating: 4,
    reviews: [
      { id: 9, author: "Grace Jones", rating: 4, comment: "Intriguing and alluring, just as promised." },
      { id: 10, author: "Henry Ford", rating: 3, comment: "Not my favorite, but it's unique." }
    ],
    price: "1,200.00",
    image: "/p5.png?height=400&width=300",
    description: "A mystical blend that creates an aura of intrigue and allure around the wearer."
  },
  {
    id: 6,
    name: "Gleaming Gift",
    rating: 4,
    reviews: [
      { id: 11, author: "Ivy League", rating: 4, comment: "A great gift for someone special." },
      { id: 12, author: "Jack Sparrow", rating: 5, comment: "Smells amazing!" }
    ],
    price: "1,550.00",
    image: "/p6.png?height=400&width=300",
    description: "A radiant fragrance that's perfect for gifting, spreading joy and elegance with every spritz."
  },
  {
    id: 7,
    name: "Global Elite Rouge",
    rating: 4,
    reviews: [
      { id: 13, author: "Kate Winslet", rating: 5, comment: "Exotic and sophisticated, perfect for travel." },
      { id: 14, author: "Liam Neeson", rating: 4, comment: "A good scent, but not my personal favorite." }
    ],
    price: "1,700.00",
    image: "/p7.png?height=400&width=300",
    description: "A sophisticated scent for the world traveler, blending exotic notes from across the globe."
  },
  {
    id: 8,
    name: "Golden Luminary",
    rating: 5,
    reviews: [
      { id: 15, author: "Mia Wallace", rating: 5, comment: "Lights up any room, just as the name suggests!" },
      { id: 16, author: "Nathan Drake", rating: 4, comment: "A very pleasant and uplifting scent." }
    ],
    price: "1,600.00",
    image: "/p8?height=400&width=300",
    description: "Illuminate your presence with this radiant, golden fragrance that lights up any room."
  },
  {
    id: 9,
    name: "Decadent Opel",
    rating: 5,
    reviews: [
      { id: 17, author: "Olivia Pope", rating: 5, comment: "A true jewel among fragrances!" },
      { id: 18, author: "Peter Parker", rating: 5, comment: "Absolutely stunning!" }
    ],
    price: "1,800.00",
    image: "/p9.png?height=400&width=300",
    description: "A jewel among fragrances, this scent sparkles with the same brilliance as its namesake gem."
  },
  {
    id: 10,
    name: "Global Elite",
    rating: 5,
    reviews: [
      { id: 19, author: "Queen Elizabeth", rating: 5, comment: "Fit for royalty!" },
      { id: 20, author: "Robert Downey Jr.", rating: 5, comment: "The best of the best!" }
    ],
    price: "1,900.00",
    image: "/p10.png?height=400&width=300",
    description: "The pinnacle of luxury fragrances, designed for those who demand nothing but the best."
  },
  {
    id: 11,
    name: "Glamourous Gift",
    rating: 5,
    reviews: [
      { id: 21, author: "Scarlett Johansson", rating: 5, comment: "A glamorous gift indeed!" },
      { id: 22, author: "Tom Cruise", rating: 4, comment: "A very nice fragrance." }
    ],
    price: "1,650.00",
    image: "/p11.png?height=400&width=300",
    description: "A glamorous scent that makes for an unforgettable gift, leaving a lasting impression."
  },
  {
    id: 12,
    name: "Luxury Empire",
    rating: 5,
    reviews: [
      { id: 23, author: "Uma Thurman", rating: 5, comment: "Exudes power and prestige!" },
      { id: 24, author: "Vin Diesel", rating: 5, comment: "A truly imperial fragrance." }
    ],
    price: "1,750.00",
    image: "/p12.png?height=400&width=300",
    description: "Rule your domain with this imperial fragrance, exuding power and prestige."
  },
]
export default function ProductPage({ params }: { params: { id: string } }) {
  const localProduct = products.find(p => p.id === parseInt(params.id))
  
  const [apiProduct, setApiProduct] = useState<ApiProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' })

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true)
        const response = await fetch(`/api/products/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const data = await response.json()
        setApiProduct(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product')
        console.error('Error fetching product:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  const product = apiProduct || localProduct

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-semibold text-amber-500 mb-4">Loading...</div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-amber-500 mb-4">Product Not Found</h1>
          <p className="text-gray-300 mb-8">We couldn't find the product you're looking for.</p>
          <Link href="/" className="bg-amber-500 text-black px-6 py-2 rounded-md hover:bg-amber-400 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/products/${params.id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit review')
      }

      const updatedProduct = await fetch(`/api/products/${params.id}`).then(res => res.json())
      setApiProduct(updatedProduct)
      
      setShowReviewForm(false)
      setNewReview({ rating: 5, comment: '' })
    } catch (err) {
      console.error('Error submitting review:', err)
      console.log('New review:', newReview)
      setShowReviewForm(false)
      setNewReview({ rating: 5, comment: '' })
    }
  }


// export default function ProductPage({ params }: { params: { id: string } }) {
//   const product = products.find(p => p.id === parseInt(params.id))
//   const [showReviewForm, setShowReviewForm] = useState(false)
//   const [newReview, setNewReview] = useState({ rating: 5, comment: '' })

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-semibold text-amber-500 mb-4">Product Not Found</h1>
//           <p className="text-gray-300 mb-8">We couldn't find the product you're looking for.</p>
//           <Link href="/" className="bg-amber-500 text-black px-6 py-2 rounded-md hover:bg-amber-400 transition-colors">
//             Return to Home
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const handleSubmitReview = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log('New review:', newReview)
//     setShowReviewForm(false)
//     setNewReview({ rating: 5, comment: '' })
//   }

  return (
    <div className="min-h-screen bg-black text-white">
    {/* Header/Navigation */}
    <header className="border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">Local Face</Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/shop" className="hover:text-gray-300">Shop</Link>
            <Link href="/about-us" className="hover:text-gray-300">About us</Link>
            <Link href="/billing" className="hover:text-gray-300">Billing</Link>
          </div>
        </div>
      </nav>
    </header>

    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Product Details */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-[400px] mx-auto"
            />
          </div>
          
          <h1 className="text-3xl font-semibold text-amber-500 mb-4">{product.name}</h1>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${
                  i < product.rating ? "text-amber-500" : "text-gray-600"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-400">({product.reviews.length} reviews)</span>
          </div>
          
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{product.description}</p>
          
          <div className="text-3xl font-semibold text-amber-500 mb-6">${product.price}</div>
          <Link href={`/billing`}>
            <button className="bg-amber-500 text-black px-8 py-3 rounded-md hover:bg-amber-400 transition-colors">
              Add to Cart
            </button>
          </Link>
        </div>

        {/* Reviews Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-amber-500">Customer Reviews</h2>
          
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-800 pb-4">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "text-amber-500" : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-400">{review.author}</span>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}

          {!showReviewForm ? (
            <button
              onClick={() => setShowReviewForm(true)}
              className="text-amber-500 hover:text-amber-400"
            >
              Write a Review
            </button>
          ) : (
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-400">
                  Rating
                </label>
                <select
                  id="rating"
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md bg-gray-700 text-white"
                >
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} Star{rating !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-400">
                  Review
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-700 text-white p-2"
                  placeholder="Write your review here..."
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium bg-amber-500 text-black rounded-md hover:bg-amber-400"
                >
                  Submit Review
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  </div>
  )
}