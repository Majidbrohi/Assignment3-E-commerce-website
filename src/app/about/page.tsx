export default function AboutPage() {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6 mt-20">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="hover:text-gray-300">Home</a>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">About Us</span>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div className="relative min-h-[600px] w-full">
          {/* Background Image */}
          <img 
            src="/masjid.png" 
            alt="About Us Background" 
            className="absolute inset-0 object-cover w-full h-full"
          />

          {/* Content */}
          <div className="relative flex min-h-[600px] items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="mb-8 text-4xl font-light md:text-5xl lg:text-6xl">
                About Us
              </h1>
              <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-300">
                At Local Face, we believe that perfumes are more than just scents; they are
                expressions of one&apos;s individuality and style. Our passion for exquisite fragrances led us
                to curate a collection that captures the essence of diverse personalities, bringing you
                an unparalleled olfactory experience.
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Story Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-8 text-3xl font-light text-amber-500 md:text-4xl">
              Our Story
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              Local Face Perfumes was founded by Abdul Majid Brohi a perfume enthusiasts with a shared vision to
              create a haven for perfume lovers seeking authentic, locally-inspired fragrances. Inspired by
              the diversity and richness of cultures around the world, we set out on a journey to curate a
              collection of scents that capture the essence of each region. Our aim is to bring you closer
              to the heart and soul of different cultures through the art of perfumery.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg md:h-[600px]">
            <img
              src="/perfumes.png"
              alt="Illuminated display of luxury perfume bottles"
              className="max-h-full max-w-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <h1 className="mb-16 text-center text-3xl font-light text-amber-500 md:text-4xl">
            What Makes Us Unique
          </h1>

          {/* Features Grid */}
          <div className="mb-16 grid gap-12 md:grid-cols-3">
            {/* Locally Inspired */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Locally Inspired</h2>
              <p className="text-gray-300">
                Our perfumes are meticulously crafted to reflect the cultural heritage,
                traditions, and landscapes of various regions. From the vibrant streets of
                Marrakech to the serene cherry blossom gardens of Kyoto, each
                fragrance tells a unique story that resonates with its origin.
              </p>
            </div>

            {/* High-Quality Ingredients */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">High-Quality Ingredients</h2>
              <p className="text-gray-300">
                We believe that the key to an extraordinary scent lies in the quality of
                ingredients. That&apos;s why we collaborate with expert perfumers who source the
                finest and ethically-sourced materials from around the world. We never
                compromise on the quality of our products, ensuring a long-lasting and
                luxurious experience.
              </p>
            </div>

            {/* Personalized Service */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Personalized Service</h2>
              <p className="text-gray-300">
                We understand that choosing the perfect scent is a deeply personal
                experience. Our team of fragrance experts is always ready to assist you in
                finding a fragrance that complements your personality and style. Whether
                you&apos;re exploring new scents or seeking to rediscover an old favorite, we&apos;re
                here to guide you every step of the way.
              </p>
            </div>
          </div>

          {/* Closing Message */}
          <div className="mx-auto max-w-3xl space-y-8 text-center text-gray-300">
            <p>
              Join us on this olfactory adventure as we celebrate the diverse tapestry of scents from around the world. Discover the captivating aromas that
              embrace the essence of local cultures and connect with the beauty of our shared humanity.
            </p>
            
            <p>Thank you for being a part of our journey.</p>
            
            <div className="space-y-2">
              <p>With love and gratitude,</p>
              <p>The Local Face Perfumes Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
}
