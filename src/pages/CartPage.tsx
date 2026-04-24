import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { TrashIcon } from 'lucide-react'

export const CartPage = () => {
  const [checked, setChecked] = useState(false)
  const { items, removeItem, clearCart, updateQuantity, total } = useCart()

  const handleCheckout = () => {
    clearCart()
    setChecked(true)
  }

  if (checked) {
    return (
      <div className="bg-black text-gray-200 min-h-screen w-full">
        <NavBar />
        <main className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="text-3xl font-bold text-white uppercase tracking-widest mb-4"
            style={{ textShadow: '0 0 8px #ff0000' }}>
            Order Received
          </h1>
          <p className="text-gray-400 mb-2">
            Payment was not processed — this is a demo checkout.
          </p>
          <p className="text-gray-500 text-sm mb-10 uppercase tracking-wide">
            Payment processing coming soon. We'll contact you to complete your order.
          </p>
          
          <a
            href="/books"
            className="inline-block bg-red-700 hover:bg-red-600 text-white px-8 py-3 uppercase tracking-widest font-bold text-sm border border-red-500"
          >
            Keep Browsing
          </a>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-black text-gray-200 min-h-screen w-full">
      <NavBar />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white uppercase tracking-widest mb-2"
          style={{ textShadow: '0 0 8px #ff0000' }}>
          Your Cart
        </h1>
        <p className="text-gray-600 text-xs uppercase tracking-wide mb-10">
          {items.length === 0 ? 'Nothing here yet.' : `${items.length} item${items.length > 1 ? 's' : ''}`}
        </p>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-600 uppercase tracking-widest text-sm mb-8">Your cart is empty.</p>
            
            <a
              href="/books"
              className="inline-block bg-red-700 hover:bg-red-600 text-white px-8 py-3 uppercase tracking-widest font-bold text-sm border border-red-500"
            >
              Browse Books
            </a>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
             {items.map(item => (
  <div key={item.id} className="flex gap-4 bg-gray-900 border border-red-900 p-4 items-center">
    <img
      src={item.coverImage}
      alt={item.title}
      className="w-16 h-20 object-cover flex-shrink-0"
    />
    <div className="flex-1 min-w-0">
      <h3 className="text-white font-bold uppercase tracking-wide text-sm line-clamp-1">
        {item.title}
      </h3>
      <p className="text-gray-400 text-xs mb-2">{item.author}</p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-6 h-6 bg-gray-800 border border-red-900 text-white text-sm flex items-center justify-center hover:bg-red-900"
        >
          −
        </button>
        <span className="text-white text-sm w-4 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-6 h-6 bg-gray-800 border border-red-900 text-white text-sm flex items-center justify-center hover:bg-red-900"
        >
          +
        </button>
        <span className="text-red-400 font-bold text-sm ml-2">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
    <button
      onClick={() => removeItem(item.id)}
      className="text-gray-600 hover:text-red-500 transition-colors flex-shrink-0"
    >
      <TrashIcon className="h-5 w-5" />
    </button>
  </div>
))}
            </div>

            <div className="border-t border-red-900 pt-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 uppercase tracking-wide text-sm">Subtotal</span>
                <span className="text-white font-bold text-xl">${total.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 text-xs uppercase tracking-wide">
                Shipping calculated at checkout
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-red-700 hover:bg-red-600 text-white py-4 uppercase tracking-widest font-bold text-sm border border-red-500 transition-colors"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full bg-transparent hover:bg-gray-900 text-gray-500 hover:text-red-400 py-3 uppercase tracking-widest text-xs border border-gray-800 transition-colors"
              >
                Empty Cart
              </button>
            </div>

            <p className="text-gray-600 text-xs text-center mt-4 uppercase tracking-wide">
              Payment not yet connected — checkout will confirm but not charge
            </p>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}