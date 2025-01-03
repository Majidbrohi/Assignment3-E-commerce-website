'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black px-4 py-4 md:px-8">
            <div className="flex items-center">
                <button
                    className="mr-4 text-white md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
                <Link href="/" className="text-2xl font-bold text-[#E67E22]">
                    Local Face
                </Link>
            </div>

            <nav className={`${
                isMenuOpen
                    ? "absolute left-0 right-0 top-full flex flex-col bg-black p-4 md:relative md:flex md:flex-row md:bg-transparent md:p-0"
                    : "hidden md:flex"
                } gap-8`}>
                <Link href="/" className="text-white transition-colors hover:text-[#E67E22]">
                    Home
                </Link>
                <Link href="/shop" className="text-white transition-colors hover:text-[#E67E22]">
                    Shop
                </Link>
                <Link href="/about" className="text-white transition-colors hover:text-[#E67E22]">
                    About us
                </Link>
           
            </nav>

            <div className="flex items-center gap-4">
                <div className={`hidden md:flex max-w-xs w-full bg-black px-4 py-2 rounded outline outline-transparent focus-within:border-blue-600 focus-within:bg-transparent transition-all`}>
                    <input
                        type="text"
                        placeholder="Search something..."
                        className="w-full text-sm bg-transparent rounded outline-none pr-2 text-white"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192.904 192.904"
                        width="16px"
                        className="cursor-pointer fill-gray-400"
                    >
                        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                    </svg>
                </div>
                <button 
                    className="text-white md:hidden" 
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    aria-label="Toggle search"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192.904 192.904"
                        width="24px"
                        className="fill-white"
                    >
                        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                    </svg>
                </button>
            </div>

            {isSearchOpen && (
                <div className="absolute left-0 right-0 top-full bg-black p-4 md:hidden">
                    <div className="flex max-w-xs w-full bg-white px-4 py-2 rounded">
                        <input
                            type="text"
                            placeholder="Search something..."
                            className="w-full text-sm bg-transparent rounded outline-none pr-2 text-black"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192.904 192.904"
                            width="16px"
                            className="cursor-pointer fill-gray-400"
                        >
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                        </svg>
                    </div>
                </div>
            )}
        </header>
    )
}

