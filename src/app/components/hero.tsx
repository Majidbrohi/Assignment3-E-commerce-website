import Link from "next/link";

export default function Hero() {
    return (
      <div className="relative min-h-screen overflow-hidden  px-8 pt-24 ">
        <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 md:flex-row">
          <div className="z-10 flex max-w-2xl flex-col items-center text-center md:items-start md:text-left">
            <h1 className="mb-6 text-4xl font-normal leading-tight text-white md:text-5xl lg:text-6xl">
              Elevate Your Spirit with Victory Scented Fragrances!
            </h1>
            <p className="mb-8 text-lg text-gray-400">
              Shop now and embrace the sweet smell of victory with Local Face.
            </p>
            <Link href="/shop">
            <button className="rounded bg-[#E67E22] px-8 py-4 text-white transition-colors hover:bg-[#D35400]">
              Shop Now
            </button>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <img 
              src="/1perfume.png" 
              alt="Luxury perfume bottle with glowing amber liquid" 
              className="max-h-[600px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    )
  }
  
  