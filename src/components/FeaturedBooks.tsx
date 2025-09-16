import React from 'react';
import { BookCard } from './BookCard';
export const FeaturedBooks = () => {
  const featuredBooks = [{
    id: 1,
    title: 'American Idiot',
    author: 'Green Day Biography',
    price: '$18.99',
    coverImage: 'https://images.unsplash.com/photo-1552245080-ac31e2a54f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    isNew: true
  }, {
    id: 2,
    title: 'Please Kill Me',
    author: 'Legs McNeil & Gillian McCain',
    price: '$24.99',
    coverImage: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1079&q=80'
  }, {
    id: 3,
    title: 'Diary of an Oxygen Thief',
    author: 'Anonymous',
    price: '$16.99',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    isNew: true
  }, {
    id: 4,
    title: 'Our Band Could Be Your Life',
    author: 'Michael Azerrad',
    price: '$21.99',
    coverImage: 'https://images.unsplash.com/photo-1461784180009-27c1303a64b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }];
  return <section className="py-16 px-4 bg-black relative">
      {/* Grungy texture overlay */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map(book => <BookCard key={book.id} title={book.title} author={book.author} price={book.price} coverImage={book.coverImage} isNew={book.isNew} />)}
        </div>
      </div>
    </section>;
};