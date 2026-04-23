import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { BookCard } from '../components/BookCard'
import { SearchIcon } from 'lucide-react'

interface Book {
  id: string
  title: string
  author: string
  price: number
  cover_url: string | null
  condition: string
  format: string
  genre: string | null
}

const GENRES = ['All', 'Thriller', 'Fiction', 'Punk History', 'Music History', 'Poetry', 'Horror', 'Sci-Fi', 'Mystery']
const CONDITIONS = ['All', 'Like New', 'Very Good', 'Good', 'Acceptable']
const FORMATS = ['All', 'Hardcover', 'Paperback', 'Ebook', 'Audiobook']

export const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All')
  const [condition, setCondition] = useState('All')
  const [format, setFormat] = useState('All')

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      let query = supabase
        .from('books')
        .select('id, title, author, price, cover_url, condition, format, genre')
        .eq('available', true)
        .order('title')

      if (genre !== 'All') query = query.eq('genre', genre)
      if (condition !== 'All') query = query.eq('condition', condition)
      if (format !== 'All') query = query.eq('format', format)
      if (search) query = query.or(`title.ilike.%${search}%,author.ilike.%${search}%`)

      const { data, error } = await query
      if (!error && data) setBooks(data)
      setLoading(false)
    }
    fetchBooks()
  }, [genre, condition, format, search])

  return (
    <div className="bg-black text-gray-200 min-h-screen w-full">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white uppercase tracking-widest mb-2"
            style={{ textShadow: '0 0 8px #ff0000' }}>
            The Stacks
          </h1>
          <p className="text-gray-500 uppercase tracking-wide text-sm">
            {books.length} titles available
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="SEARCH BY TITLE OR AUTHOR..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full py-3 pl-12 pr-4 bg-gray-900 border border-red-900 text-white focus:outline-none focus:border-red-500 rounded-none uppercase tracking-wide text-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-xs uppercase tracking-wider">Genre</label>
            <select
              value={genre}
              onChange={e => setGenre(e.target.value)}
              className="bg-gray-900 border border-red-900 text-white py-2 px-3 text-sm uppercase tracking-wide focus:outline-none focus:border-red-500 rounded-none"
            >
              {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-xs uppercase tracking-wider">Condition</label>
            <select
              value={condition}
              onChange={e => setCondition(e.target.value)}
              className="bg-gray-900 border border-red-900 text-white py-2 px-3 text-sm uppercase tracking-wide focus:outline-none focus:border-red-500 rounded-none"
            >
              {CONDITIONS.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-xs uppercase tracking-wider">Format</label>
            <select
              value={format}
              onChange={e => setFormat(e.target.value)}
              className="bg-gray-900 border border-red-900 text-white py-2 px-3 text-sm uppercase tracking-wide focus:outline-none focus:border-red-500 rounded-none"
            >
              {FORMATS.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          {(genre !== 'All' || condition !== 'All' || format !== 'All' || search) && (
            <div className="flex flex-col justify-end">
              <button
                onClick={() => { setGenre('All'); setCondition('All'); setFormat('All'); setSearch('') }}
                className="text-red-500 hover:text-red-400 text-xs uppercase tracking-wider border-b border-dashed border-red-800 pb-1"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-gray-600 uppercase tracking-widest text-sm text-center py-24">
            Loading...
          </div>
        ) : books.length === 0 ? (
          <div className="text-gray-600 uppercase tracking-widest text-sm text-center py-24">
            No books found.
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
      </main>
      <Footer />
    </div>
  )
}