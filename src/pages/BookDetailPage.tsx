import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { ArrowLeftIcon } from 'lucide-react'

interface Book {
  id: string
  title: string
  author: string
  price: number
  cover_url: string | null
  condition: string
  format: string
  genre: string | null
  description: string | null
  isbn: string | null
}

export const BookDetailPage = () => {
  const { id } = useParams()
  const [book, setBook] = useState<Book | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBook = async () => {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('id', id)
        .single()
      if (!error && data) setBook(data)
      setLoading(false)
    }
    fetchBook()
  }, [id])

  if (loading) {
    return (
      <div className="bg-black min-h-screen w-full">
        <NavBar />
        <div className="text-gray-600 uppercase tracking-widest text-sm text-center py-24">
          Loading...
        </div>
      </div>
    )
  }

  if (!book) {
    return (
      <div className="bg-black min-h-screen w-full">
        <NavBar />
        <div className="text-gray-600 uppercase tracking-widest text-sm text-center py-24">
          Book not found.
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black text-gray-200 min-h-screen w-full">
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <a
          href="/books"
          className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 uppercase tracking-wider text-sm mb-10 border-b border-dashed border-red-800 pb-1"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to catalog
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-dashed border-red-700 z-0"></div>
            <img
              src={book.cover_url || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600'}
              alt={book.title}
              className="w-full h-auto relative z-10 transform rotate-1"
            />
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {book.genre && (
                <span className="text-xs uppercase tracking-wider text-red-400 border border-red-800 px-2 py-1">
                  {book.genre}
                </span>
              )}
              <span className="text-xs uppercase tracking-wider text-gray-500 border border-gray-700 px-2 py-1">
                {book.format}
              </span>
              <span className="text-xs uppercase tracking-wider text-gray-500 border border-gray-700 px-2 py-1">
                {book.condition}
              </span>
            </div>
            <h1
              className="text-3xl font-bold text-white uppercase tracking-wide mb-2"
              style={{ textShadow: '0 0 6px #ff000044' }}
            >
              {book.title}
            </h1>
            <p className="text-gray-400 text-lg mb-6">{book.author}</p>
            {book.description && (
              <p className="text-gray-300 leading-relaxed mb-8">
                {book.description}
              </p>
            )}
            <div className="border-t border-red-900 pt-6 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-red-400">
                  ${book.price.toFixed(2)}
                </span>
                <span className="text-gray-500 text-sm uppercase tracking-wide">
                  1 copy available
                </span>
              </div>
            </div>
            {book.isbn && (
              <p className="text-gray-600 text-xs uppercase tracking-wider mb-6">
                ISBN: {book.isbn}
              </p>
            )}
            <a
              href={`mailto:kirk.r.garcia@gmail.com?subject=Inquiry: ${encodeURIComponent(book.title)}&body=Hi, I'm interested in purchasing ${encodeURIComponent(book.title)} by ${encodeURIComponent(book.author)} listed at $${book.price.toFixed(2)}.`}
              className="block w-full bg-red-700 hover:bg-red-600 text-white py-4 uppercase tracking-widest font-bold text-sm transition-colors border border-red-500 text-center"
            >
              Inquire to Purchase
            </a>
            <p className="text-gray-600 text-xs text-center mt-3 uppercase tracking-wide">
              Online checkout coming soon — email us to reserve this copy
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}