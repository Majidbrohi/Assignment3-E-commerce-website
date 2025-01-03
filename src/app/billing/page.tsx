'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BillingPage() {
    const [paymentMethod, setPaymentMethod] = useState('credit')

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                <h1 className="mb-12 text-center text-3xl font-light">Billing Details</h1>

                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
                    {/* Payment and Billing Form */}
                    <div className="lg:col-span-2">
                        <div className="space-y-8 rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                            {/* Payment Method */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-light">Payment Method</h2>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <button
                                        onClick={() => setPaymentMethod('credit')}
                                        className={`flex flex-col items-center rounded-lg border p-4 transition-colors
                                                ${paymentMethod === 'credit' ? 'border-amber-500' : 'border-gray-700'}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mb-2 h-6 w-6">
                                            <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" />
                                            <path d="M2 10h20" strokeWidth="2" />
                                        </svg>
                                        <span>Credit Card</span>
                                    </button>

                                    <button
                                        onClick={() => setPaymentMethod('paypal')}
                                        className={`flex flex-col items-center rounded-lg border p-4 transition-colors
                      ${paymentMethod === 'paypal' ? 'border-amber-500' : 'border-gray-700'}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mb-2 h-6 w-6">
                                            <path d="M6 9h12M6 12h12M6 15h6" strokeWidth="2" />
                                        </svg>
                                        <span>PayPal</span>
                                    </button>

                                    <button
                                        onClick={() => setPaymentMethod('apple')}
                                        className={`flex flex-col items-center rounded-lg border p-4 transition-colors
                      ${paymentMethod === 'apple' ? 'border-amber-500' : 'border-gray-700'}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mb-2 h-6 w-6">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                            <path d="M12 7v10M7 12h10" strokeWidth="2" />
                                        </svg>
                                        <span>Apple Pay</span>
                                    </button>
                                </div>
                            </div>

                            {/* Card Details */}
                            {paymentMethod === 'credit' && (
                                <div className="space-y-4">
                                    <h2 className="text-xl font-light">Card Details</h2>
                                    <div className="grid gap-4">
                                        <div>
                                            <label htmlFor="cardName" className="mb-2 block text-sm text-gray-300">
                                                Name on Card
                                            </label>
                                            <input
                                                type="text"
                                                id="cardName"
                                                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cardNumber" className="mb-2 block text-sm text-gray-300">
                                                Card Number
                                            </label>
                                            <input
                                                type="text"
                                                id="cardNumber"
                                                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                                placeholder="1234 5678 9012 3456"
                                            />
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="expiry" className="mb-2 block text-sm text-gray-300">
                                                    Expiry Date
                                                </label>
                                                <input
                                                    type="text"
                                                    id="expiry"
                                                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                                    placeholder="MM/YY"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="cvv" className="mb-2 block text-sm text-gray-300">
                                                    CVV
                                                </label>
                                                <input
                                                    type="text"
                                                    id="cvv"
                                                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                                    placeholder="123"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Billing Address */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-light">Billing Address</h2>
                                <div className="grid gap-4">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="firstName" className="mb-2 block text-sm text-gray-300">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="mb-2 block text-sm text-gray-300">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="address" className="mb-2 block text-sm text-gray-300">
                                            Street Address
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                        />
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-3">
                                        <div>
                                            <label htmlFor="city" className="mb-2 block text-sm text-gray-300">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                id="city"
                                                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="state" className="mb-2 block text-sm text-gray-300">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                id="state"
                                                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="zip" className="mb-2 block text-sm text-gray-300">
                                                ZIP Code
                                            </label>
                                            <input
                                                type="text"
                                                id="zip"
                                                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                            <h2 className="mb-4 text-xl font-light">Order Summary</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-gray-800 pb-4">
                                    <span className="text-gray-300">Subtotal</span>
                                    <span>$250.00</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-800 pb-4">
                                    <span className="text-gray-300">Shipping</span>
                                    <span>$10.00</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-800 pb-4">
                                    <span className="text-gray-300">Tax</span>
                                    <span>$25.00</span>
                                </div>
                                <div className="flex justify-between text-lg font-medium">
                                    <span>Total</span>
                                    <span>$285.00</span>
                                </div>
                                <Link href={'/completed'}>
                                    <button className="mt-6 w-full rounded-lg bg-amber-500 px-6 py-3 font-medium text-black transition-colors hover:bg-amber-400">
                                        Complete Purchase
                                    </button>
                                </Link>
                                <p className="mt-4 text-center text-sm text-gray-400">
                                    By completing your purchase you agree to our{' '}
                                    <a href="#" className="text-amber-500 hover:text-amber-400">
                                        Terms of Service
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

