import Link from 'next/link'

export default function PurchaseConfirmationPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-24 w-24 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-light mb-4">Thank You for Your Purchase!</h1>
        <p className="text-xl text-gray-300 mb-8">
          Your order has been successfully placed and is being processed.
        </p>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-light mb-4">Order Details</h2>
          <div className="space-y-2 text-left">
            <p><span className="text-gray-400">Order Number:</span> #12345678</p>
            <p><span className="text-gray-400">Date:</span> {new Date().toLocaleDateString()}</p>
            <p><span className="text-gray-400">Total Amount:</span> $285.00</p>
            <p><span className="text-gray-400">Shipping Address:</span> 123 Luxury Lane, Elegance City, EC 12345</p>
          </div>
        </div>
        <p className="text-gray-300 mb-8">
          We've sent a confirmation email to your registered email address with all the details of your purchase.
        </p>
        <div className="space-y-4">
          <Link 
            href="/shop" 
            className="inline-block w-full sm:w-auto px-6 py-3 bg-amber-500 text-black rounded-lg font-medium transition-colors hover:bg-amber-400"
          >
            Continue Shopping
          </Link>
          <Link 
            href="/" 
            className="inline-block w-full ml-3 sm:w-auto px-6 py-3 border border-amber-500 text-amber-500 rounded-lg font-medium transition-colors hover:bg-amber-500 hover:text-black"
          >
            Track Your Order
          </Link>
        </div>
      </div>
    </div>
  )
}

