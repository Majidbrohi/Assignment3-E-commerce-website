import CollectionCard from './CollectionCard'

const collections = [
  {
    id: 1,
    title: 'Designer Delights Collection',
    image: '/designer-delights.png'
  },
  {
    id: 2,
    title: 'Travel Essentials Collection',
    image: '/travel-essentials.png'
  },
  {
    id: 3,
    title: 'Special Occasions Collection',
    image: '/special-occasions.png'
  },
  {
    id: 4,
    title: 'Seasonal Sensations Collection',
    image: '/seasonal-sensations.png'
  },
  {
    id: 5,
    title: 'Vintage Treasures Collection',
    image: '/vintage-treasures.png'
  },
  {
    id: 6,
    title: 'Limited Edition Treasures',
    image: '/limited-edition.png'
  },
  {
    id: 7,
    title: 'Modern Classic Collection',
    image: '/modern-classic.png'
  }
]

export default function Collections() {
  return (
    <section className=" px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-normal text-[#E67E22]">
          Our Collections
        </h2>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* First row - 2 cards */}
          <CollectionCard
            title={collections[0].title}
            image={collections[0].image}
            className="h-[300px] md:col-span-1"
          />
          <CollectionCard
            title={collections[1].title}
            image={collections[1].image}
            className="h-[300px] md:col-span-1"
          />
          
          {/* Middle row - 2 cards */}
          <CollectionCard
            title={collections[2].title}
            image={collections[2].image}
            className="h-[400px] md:col-span-1"
          />
          <CollectionCard
            title={collections[3].title}
            image={collections[3].image}
            className="h-[400px] md:col-span-1"
          />
          
          {/* Bottom row - 3 cards */}
          <CollectionCard
            title={collections[4].title}
            image={collections[4].image}
            className="h-[250px]"
          />
          <CollectionCard
            title={collections[5].title}
            image={collections[5].image}
            className="h-[250px]"
          />
          <CollectionCard
            title={collections[6].title}
            image={collections[6].image}
            className="h-[250px]"
          />
        </div>
      </div>
    </section>
  )
}

