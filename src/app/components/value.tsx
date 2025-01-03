export default function ValuesSection() {
    return (
      <section className="min-h-screen ">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-24">
            {/* Image Section */}
            <div className="relative aspect-square lg:aspect-[4/3]">
              <img
                src="/value.png"
                alt="Luxury perfume bottle with citrus and herbs"
                className="object-cover w-full h-full rounded-lg shadow-2xl"
              />
            </div>
  
            {/* Content Section */}
            <div className="space-y-8 text-white">
              <h2 className="text-4xl lg:text-5xl font-light tracking-wide">
                Our Values
              </h2>
              
              <div className="space-y-6 text-gray-200 leading-relaxed">
                <p className="text-lg">
                  At Local Face, our perfume retail store is built on a foundation 
                  of passion and authenticity. We believe in celebrating the 
                  individuality of every customer, providing a diverse collection of 
                  scents that resonate with their unique personality and style. Our 
                  dedicated team of fragrance enthusiasts is committed to creating a 
                  welcoming and inclusive environment, where connections are 
                  forged, and inspiration thrives.
                </p>
  
                <p className="text-lg">
                  Embracing sustainability and continuous learning, Local Face 
                  strives to be more than just a shopping destination: we are a 
                  community that inspires and empowers individuals on their 
                  fragrance journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }