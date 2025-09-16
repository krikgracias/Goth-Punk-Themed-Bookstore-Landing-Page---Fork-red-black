import React from 'react';
import { ShoppingCartIcon, HeartIcon } from 'lucide-react';
interface BookCardProps {
  title: string;
  author: string;
  price: string;
  coverImage: string;
  isNew?: boolean;
}
export const BookCard = ({
  title,
  author,
  price,
  coverImage,
  isNew
}: BookCardProps) => {
  return <div className="group relative bg-gray-900 border border-red-900 hover:border-red-500 transition-all duration-300 p-4 flex flex-col transform hover:-rotate-1">
      {isNew && <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10 transform rotate-12 shadow-md">
          Fresh Cut
        </div>}
      <div className="relative mb-4 overflow-hidden">
        <img src={coverImage} alt={`Cover of ${title} by ${author}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity"></div>
        {/* Tape effect at corners */}
        <div className="absolute top-0 left-0 w-8 h-8 bg-gray-300 opacity-30 transform rotate-45 translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-gray-300 opacity-30 transform rotate-45 translate-x-[50%] translate-y-[-50%]"></div>
      </div>
      <h3 className="text-white font-bold text-lg mb-1 line-clamp-1 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-2">{author}</p>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-red-400 font-bold">{price}</span>
        <div className="flex space-x-2">
          <button className="bg-transparent hover:bg-gray-800 p-2 rounded-sm transition-colors border border-red-700">
            <HeartIcon className="h-4 w-4 text-red-500" />
          </button>
          <button className="bg-red-700 hover:bg-red-600 p-2 rounded-sm transition-colors">
            <ShoppingCartIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>;
};