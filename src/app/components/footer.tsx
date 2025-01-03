'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter submission
        console.log('Submitted email:', email)
        setEmail('')
    }

    return (
        <footer className="bg-black text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-[#E67E22] to-black"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E67E22] rounded-full blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#E67E22] rounded-full blur-2xl opacity-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Newsletter Section */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E67E22] to-yellow-300 animate-gradient-x">
                            Local Face
                        </h2>
                        <p className="text-gray-300 max-w-md text-lg">
                            Join our exclusive community for first access to new arrivals, special promotions, and insider-only discounts.
                        </p>
                        <form onSubmit={handleSubmit} className="relative">
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address" 
                                className="w-full px-4 py-3 bg-gray-900 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E67E22] transition duration-300"
                                required
                            />
                            <button 
                                type="submit"
                                className="absolute right-1 top-1 px-6 py-2 bg-[#E67E22] text-black font-semibold rounded-full hover:bg-[#d35400] focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:ring-offset-2 focus:ring-offset-black transition duration-300 transform hover:scale-105"
                            >
                                Join
                            </button>
                        </form>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#E67E22] mb-4 relative">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#E67E22]"></span>
                        </h3>
                        <ul className="space-y-2">
                            {['Home', 'Shop', 'About Us', 'Contact', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-300 hover:text-[#E67E22] transition duration-300 flex items-center group">
                                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                                        <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#E67E22] mb-4 relative">
                            Categories
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#E67E22]"></span>
                        </h3>
                        <ul className="space-y-2">
                            {['Fashion', 'Accessories', 'Electronics', 'Home & Living', 'Beauty'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-300 hover:text-[#E67E22] transition duration-300 flex items-center group">
                                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                                        <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex space-x-6 mb-4 sm:mb-0">
                        {[
                            { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                            { name: 'Instagram', icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                            { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                className="text-gray-400 hover:text-[#E67E22] transition duration-300 transform hover:scale-110"
                                aria-label={social.name}
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d={social.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Made by love by AM Brohi and Team All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

