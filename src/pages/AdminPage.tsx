import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { NavBar } from '../components/NavBar'

const ADMIN_PASSWORD = 'gutterpunk2025'

const GENRES = ['Thriller', 'Fiction', 'Horror', 'Mystery', 'Sci-Fi', 'Fantasy',
  'Punk History', 'Music History', 'Poetry', 'Biography', 'History',
  'Self Help', 'Cooking', 'Children', 'Young Adult', 'Other']

const empty = {
  title: '', author: '', isbn: '', price: '',
  condition: 'Good', genre: 'Thriller',
  format: 'Paperback', description: '',
  cover_url: '', featured: false
}

export const AdminPage = () => {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [form, setForm] = useState({ ...empty })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  
const fetchCover = async (isbn: string) => {
  if (!isbn) return
  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
    const data = await res.json()
    const info = data.items?.[0]?.volumeInfo
    if (!info) return
    const cleanIsbn = isbn.replace(/-/g, '')
    const cover = `https://covers.openlibrary.org/b/isbn/${cleanIsbn}-L.jpg`
    setForm(prev => ({
      ...prev,
      title: info.title || prev.title,
      author: info.authors?.[0] || prev.author,
      description: info.description?.slice(0, 500) || prev.description,
      cover_url: cover
    }))
  } catch { }
}

  const handleLogin = () => {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true)
    } else {
      setPwError(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    setForm(prev => ({ ...prev, [target.name]: value }))
  }

  const handleSubmit = async () => {
    if (!form.title || !form.author || !form.price) {
      setMessage('Title, author, and price are required.')
      setStatus('error')
      return
    }
    setStatus('loading')
    const { error } = await supabase.from('books').insert({
      title: form.title,
      author: form.author,
      isbn: form.isbn || null,
      price: parseFloat(form.price),
      condition: form.condition,
      genre: form.genre,
      format: form.format,
      description: form.description || null,
      cover_url: form.cover_url || null,
      featured: form.featured,
      available: true
    })
    if (error) {
      setMessage('Error: ' + error.message)
      setStatus('error')
    } else {
      setMessage(`"${form.title}" added successfully.`)
      setStatus('success')
      setForm({ ...empty })
    }
  }

const fixAllCovers = async () => {
  setMessage('Fixing covers...')
  setStatus('loading')

  const { data: books } = await supabase
    .from('books')
    .select('id, title, author')

  if (!books) return

  for (const book of books) {
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}&limit=1`
      )
      const data = await res.json()
      const doc = data.docs?.[0]
      if (!doc) continue

      const isbn = doc.isbn?.find((i: string) => i.length === 13) || doc.isbn?.[0]
      if (!isbn) continue

      const cover = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`

      await supabase
        .from('books')
        .update({ cover_url: cover, isbn })
        .eq('id', book.id)

    } catch { }
  }

  setMessage('All covers updated.')
  setStatus('success')
}

  const field = 'w-full bg-gray-900 border border-red-900 text-white py-2 px-3 text-sm focus:outline-none focus:border-red-500 rounded-none'
  const label = 'block text-gray-500 text-xs uppercase tracking-wider mb-1'

  if (!authed) {
    return (
      <div className="bg-black min-h-screen w-full">
        <NavBar />
        <div className="max-w-sm mx-auto px-4 py-24">
          <h1 className="text-2xl font-bold text-white uppercase tracking-widest mb-8 text-center"
            style={{ textShadow: '0 0 8px #ff0000' }}>
            Admin Access
          </h1>
          <input
            type="password"
            placeholder="PASSWORD"
            value={pw}
            onChange={e => { setPw(e.target.value); setPwError(false) }}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className={field + ' mb-3'}
          />
          {pwError && (
            <p className="text-red-500 text-xs uppercase tracking-wide mb-3">Incorrect password.</p>
          )}
          <button
            onClick={handleLogin}
            className="w-full bg-red-700 hover:bg-red-600 text-white py-3 uppercase tracking-widest font-bold text-sm border border-red-500"
          >
            Enter
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen w-full">
      <NavBar />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white uppercase tracking-widest mb-2"
          style={{ textShadow: '0 0 8px #ff0000' }}>
          Add a Book
        </h1>
        <p className="text-gray-600 text-xs uppercase tracking-wide mb-10">
          All fields marked * are required
        </p>

        <div className="space-y-5">
          <div>
            <label className={label}>Title *</label>
            <input name="title" value={form.title} onChange={handleChange} className={field} placeholder="Book title" />
          </div>
          <div>
            <label className={label}>Author *</label>
            <input name="author" value={form.author} onChange={handleChange} className={field} placeholder="Author name" />
          </div>
          <div>
            <label className={label}>Price *</label>
            <input name="price" value={form.price} onChange={handleChange} className={field} placeholder="7.50" type="number" step="0.01" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={label}>Condition</label>
              <select name="condition" value={form.condition} onChange={handleChange} className={field}>
                <option>New</option>
                <option>Like New</option>
                <option>Very Good</option>
                <option>Good</option>
                <option>Acceptable</option>
              </select>
            </div>
            <div>
              <label className={label}>Format</label>
              <select name="format" value={form.format} onChange={handleChange} className={field}>
                <option>Paperback</option>
                <option>Hardcover</option>
                <option>Ebook</option>
                <option>Audiobook</option>
              </select>
            </div>
          </div>
          <div>
            <label className={label}>Genre</label>
            <select name="genre" value={form.genre} onChange={handleChange} className={field}>
              {GENRES.map(g => <option key={g}>{g}</option>)}
            </select>
          </div>
          <div>
            <label className={label}>ISBN</label>
            <input 
               name="isbn" 
               value={form.isbn} 
               onChange={handleChange} 
               onBlur={e => fetchCover(e.target.value)}
               className={field} 
               placeholder="978-0-000-00000-0" 
               />
          </div>
          <div>
            <label className={label}>Cover image URL</label>
            <input name="cover_url" value={form.cover_url} onChange={handleChange} className={field} placeholder="https://..." />
          </div>
          <div>
            <label className={label}>Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} className={field + ' h-28 resize-none'} placeholder="Short description of the book..." />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              id="featured"
              checked={form.featured}
              onChange={handleChange}
              className="w-4 h-4 accent-red-600"
            />
            <label htmlFor="featured" className="text-gray-400 text-sm uppercase tracking-wide cursor-pointer">
              Feature on homepage
            </label>
          </div>

          {status === 'success' && (
            <p className="text-green-400 text-sm uppercase tracking-wide">{message}</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm uppercase tracking-wide">{message}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="w-full bg-red-700 hover:bg-red-600 text-white py-4 uppercase tracking-widest font-bold text-sm border border-red-500 disabled:opacity-50 transition-colors"
          >
            {status === 'loading' ? 'Adding...' : 'Add Book'}
          </button>
          <button
  onClick={fixAllCovers}
  className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 uppercase tracking-widest font-bold text-sm border border-gray-600 transition-colors"
>
  Fix All Covers from Google Books
</button>
        </div>
      </main>
    </div>
  )
}