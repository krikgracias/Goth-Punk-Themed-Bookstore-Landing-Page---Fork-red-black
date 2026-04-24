import React, { useState } from 'react'
import { BookOpenIcon, MenuIcon, XIcon, ShoppingCartIcon, SearchIcon, Skull } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { count } = useCart()

  return (
    <nav className="bg-black border-b border-red-600 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Skull className="h-8 w-8 text-white-500 mr-2" />
          <span className="text-xl font-bold tracking-widest text-white" style={{ textShadow: '0 0 5px #ff0000' }}>
            GUTTERPUNK<span className="text-red-500">BOOKS&CO</span>
          </span>
          <BookOpenIcon className="h-8 w-8 text-red-500 mr-2" />
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-red-400 transition-colors font-medium uppercase tracking-wide text-sm border-b border-dashed border-red-800 pb-1">Home</a>
          <a href="/books" className="hover:text-red-400 transition-colors font-medium uppercase tracking-wide text-sm border-b border-dashed border-red-800 pb-1">Books</a>
          <a href="#" className="hover:text-red-400 transition-colors font-medium uppercase tracking-wide text-sm border-b border-dashed border-red-800 pb-1">Zines</a>
          <a href="#" className="hover:text-red-400 transition-colors font-medium uppercase tracking-wide text-sm border-b border-dashed border-red-800 pb-1">Shows</a>
          <a href="#" className="hover:text-red-400 transition-colors font-medium uppercase tracking-wide text-sm border-b border-dashed border-red-800 pb-1">Manifesto</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-red-400">
            <SearchIcon className="h-5 w-5" />
          </button>
          <a href="/cart" className="text-gray-300 hover:text-red-400 relative">
            <ShoppingCartIcon className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </a>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-red-900 mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 text-white font-medium uppercase tracking-wide text-sm hover:bg-red-900 rounded">Home</a>
            <a href="/books" className="block px-3 py-2 text-white font-medium uppercase tracking-wide text-sm hover:bg-red-900 rounded">Books</a>
            <a href="#" className="block px-3 py-2 text-white font-medium uppercase tracking-wide text-sm hover:bg-red-900 rounded">Zines</a>
            <a href="#" className="block px-3 py-2 text-white font-medium uppercase tracking-wide text-sm hover:bg-red-900 rounded">Shows</a>
            <a href="#" className="block px-3 py-2 text-white font-medium uppercase tracking-wide text-sm hover:bg-red-900 rounded">Manifesto</a>
            <a href="/cart" className="block px-3 py-2 text-white font-medium uppercase tracking-wide text-sm hover:bg-red-900 rounded">Cart ({count})</a>
          </div>
        </div>
      )}
    </nav>
  )
}