'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
};

export default function Page() {
  const [product, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('/api/products'); // Correct API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const products = [
    {
      id: 1,
      name: "Luxurious Noir Rouge",
      rating: 5,
      reviews: 156,
      price: "1,500.00",
      image: "/p1.png?height=300&width=300",
    },
    {
      id: 2,
      name: "The Golden Legacy",
      rating: 5,
      reviews: 142,
      price: "1,650.00",
      image: "/p2.png?height=400&width=300",
    },
    {
      id: 3,
      name: "Luxurious Noir",
      rating: 5,
      reviews: 168,
      price: "1,750.00",
      image: "/p3.png?height=400&width=300",
    },
    {
      id: 4,
      name: "Luxurious Essence",
      rating: 5,
      reviews: 189,
      price: "1,450.00",
      image: "/p4.png?height=400&width=300",
    },
    {
      id: 5,
      name: "Ayrum Aura",
      rating: 4,
      reviews: 156,
      price: "1,200.00",
      image: "/p5.png?height=400&width=300",
    },
    {
      id: 6,
      name: "Gleaming Gift",
      rating: 4,
      reviews: 145,
      price: "1,550.00",
      image: "/p6.png?height=400&width=300",
    },
    {
      id: 7,
      name: "Global Elite Rouge",
      rating: 4,
      reviews: 202,
      price: "1,700.00",
      image: "/p7.png?height=400&width=300",
    },
    {
      id: 8,
      name: "Golden Luminary",
      rating: 5,
      reviews: 191,
      price: "1,600.00",
      image: "/p8.png?height=400&width=300",
    },
    {
      id: 9,
      name: "Decadent Opel",
      rating: 5,
      reviews: 144,
      price: "1,800.00",
      image: "/p9.png?height=400&width=300",
    },
    {
      id: 10,
      name: "Global Elite",
      rating: 5,
      reviews: 167,
      price: "1,900.00",
      image: "/p10.png?height=400&width=300",
    },
    {
      id: 11,
      name: "Glamourous Gift",
      rating: 5,
      reviews: 145,
      price: "1,650.00",
      image: "/p11.png?height=400&width=300",
    },
    {
      id: 12,
      name: "Luxury Empire",
      rating: 5,
      reviews: 178,
      price: "1,750.00",
      image: "/p12.png?height=400&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="text-sm">Filter by</span>
              <button className="text-sm hover:text-gray-300">Collections</button>
              <button className="text-sm hover:text-gray-300">Flagship Series</button>
              <button className="text-sm hover:text-gray-300">Genre</button>
              <button className="text-sm hover:text-gray-300">Occasions</button>
            </div>
            <div className="flex items-center">
              <button className="text-sm hover:text-gray-300">Sort by</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-2xl font-semibold text-amber-500 text-center">
          Best Selling Products
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group">
              <div className="relative mb-4 overflow-hidden bg-gray-800 rounded-lg p-4 transition-all transform group-hover:scale-105 group-hover:shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[200px] w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="mt-4 text-lg font-medium text-white">{product.name}</h3>
                <div className="mb-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating ? "text-amber-500" : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">${product.price}</span>
                  <span className="text-sm text-gray-400">USD</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
