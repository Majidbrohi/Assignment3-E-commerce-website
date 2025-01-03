export default function ReviewsPage() {
    const reviews = [
      {
        id: 1,
        author: "Jack Smith",
        date: "June 03, 2023",
        rating: 5,
        content: "Very lovely fragrance. Would recommend to individuals looking for a combination of sweetness and elegance in perfume. I like floral perfume, and this one is lovely, it's not overpowering. Nice, pleasant scent. I am happy with purchase.",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      {
        id: 2,
        author: "Ashley",
        date: "January 05, 2023",
        rating: 5,
        content: "I like floral perfume, and this one is lovely, it's not overpowering. Nice, pleasant scent. I am happy with purchase.",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      {
        id: 3,
        author: "Lauri Jess",
        date: "October 05, 2022",
        rating: 5,
        content: "I tried a sample and fell in love with this fragrance so I had to buy my first bottle. This fragrance is my treat for me. It helps to create a good mood. During a stressful day really nice to stop a few moments and revisit the scent from my wrists. I really love the fact that it doesn't take the air out of the room. Some scents are so overbearing but not this one. Try it you just might really love it.",
        avatar: "/placeholder.svg?height=40&width=40"
      }
    ]
  
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-light text-amber-500">Reviews</h2>
  
            {/* Rating Summary */}
            <div className="mb-12 grid gap-8 md:grid-cols-2">
              {/* Rating Bars */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="w-12 text-sm">{stars} stars</span>
                    <div className="h-2 flex-1 rounded-full bg-gray-800">
                      <div 
                        className="h-full rounded-full bg-amber-500" 
                        style={{ width: stars === 5 ? '100%' : '0%' }}
                      />
                    </div>
                    <span className="w-12 text-right text-sm">
                      {stars === 5 ? '100%' : '0%'}
                    </span>
                  </div>
                ))}
              </div>
  
              {/* Overall Rating */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-amber-500"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl font-light">5 out of 5</p>
                <p className="mt-4 text-sm text-gray-400">
                  99% of reviewers recommend this product
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-sm text-gray-400">90 reviews</span>
                  <button className="text-sm text-amber-500 hover:text-amber-400">
                    + Add a Review
                  </button>
                </div>
              </div>
            </div>
  
            {/* Reviews List */}
            <div className="space-y-8">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-800 pb-8">
                  <div className="flex items-start gap-4">
                    <img
                      src={review.avatar}
                      alt={`${review.author}'s avatar`}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4 text-amber-500"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mb-4 text-gray-300">{review.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{review.author}</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Load More Button */}
            <div className="mt-8 text-center">
              <button className="rounded-md border border-gray-800 px-8 py-2 text-sm hover:border-amber-500 hover:text-amber-500">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  