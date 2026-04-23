import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { BookCard } from './BookCard'

interface Book {
  id: string
  title: string
  author: string
  price: number
  cover_url: string | null
  condition: string
  format: string
}

export const FeaturedBooks = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      const { data, error } = await supabase
        .from('books')
        .select('id, title, author, price, cover_url, condition, format')
        .eq('featured', true)
        .eq('available', true)
        .limit(4)

      if (!error && data) setBooks(data)
      setLoading(false)
    }
    fetchBooks()
  }, [])

  return (
    <section className="py-16 px-4 bg-black relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] bg-repeat"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wide">
            <span className="border-b-2 border-red-500 pb-1">STAFF</span>{' '}
            <span className="inline-block transform -rotate-2">PICKS</span>
          </h2>
          <a href="#" className="text-red-400 hover:text-red-300 uppercase text-sm tracking-wider font-bold border-b border-dashed border-red-800">
            SEE ALL
          </a>
        </div>
        {loading ? (
          <div className="text-gray-500 uppercase tracking-widest text-sm text-center py-12">
            Loading...
          </div>
        ) : books.length === 0 ? (
          <div className="text-gray-600 uppercase tracking-widest text-sm text-center py-12">
            No featured books yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map(book => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                price={`$${book.price.toFixed(2)}`}
                coverImage={book.cover_url || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}