import Image from "next/image"

export default function WelcomeSection() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Dark overlay background */}
      <div className="absolute inset-0 z-10" />
      
      {/* Background image */}
      <Image
        src="/welcome.png"
        alt="Background"
        width={1920}
        height={1080}
        className="object-cover w-full h-full absolute inset-0"
        priority
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-orange-400/90">
          Welcome to Local Face
        </h1>
        
        <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
          Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named &quot;Victory Scented,&quot; is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.
        </p>
      </div>
    </section>
  )
}