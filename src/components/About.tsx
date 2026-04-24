import React, { memo } from 'react';
import { BookOpenIcon, UsersIcon, MusicIcon, ScissorsIcon } from 'lucide-react';
export const About = () => {
  return <section className="py-16 px-4 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/worn-dots.png')] bg-repeat"></div>
      {/* Tartan overlay */}
      <div className="absolute inset-0 opacity-3 bg-[url('https://www.transparenttextures.com/patterns/plaid.png')] bg-repeat"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">
              <span className="border-b-2 border-red-500 pb-1 inline-block transform -rotate-1">
                OUR
              </span>{' '}
              <span className="inline-block transform rotate-1">MANIFESTO</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Born in a basement venue and raised on three chords and the truth,
              Gutterpunk Books & Co isn't just another bookstore. It's a middle
              finger to the mainstream literary scene. We're a sanctuary for the
              kids who wore band shirts to school and got sent home, for the
              ones who filled notebooks with poetry instead of math notes.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our shelves are loaded with dog-eared manifestos, photocopied
              zines, and the kind of stories that don't get taught in school but
              should. From classic punk memoirs to emo poetry that bleeds on the
              page, we're keeping the scene alive one book at a time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900 p-4 border border-red-900 transform -rotate-1">
                <ScissorsIcon className="h-8 w-8 text-red-500 mb-2" />
                <h3 className="text-white font-bold mb-1">DIY ETHIC</h3>
                <p className="text-gray-400 text-sm">Cut & Paste Forever</p>
              </div>
              <div className="bg-gray-900 p-4 border border-red-900 transform rotate-1">
                <UsersIcon className="h-8 w-8 text-red-500 mb-2" />
                <h3 className="text-white font-bold mb-1">COMMUNITY</h3>
                <p className="text-gray-400 text-sm">All Ages, Always</p>
              </div>
              <div className="bg-gray-900 p-4 border border-red-900 transform -rotate-1">
                <MusicIcon className="h-8 w-8 text-red-500 mb-2" />
                <h3 className="text-white font-bold mb-1">LIVE SHOWS</h3>
                <p className="text-gray-400 text-sm">Books + Bands</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-dashed border-red-700 z-0"></div>
            <img src="https://images.unsplash.com/photo-1620558138198-cfb9b4f3c294?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Interior of Gutterpunk Books & Co with punk rock decor and bookshelves" className="w-full h-auto relative z-10 transform rotate-1" />
            {/* Tape corners */}
            <div className="absolute top-0 left-0 w-12 h-12 bg-gray-300 opacity-30 transform rotate-45 translate-x-[-50%] translate-y-[-50%] z-20"></div>
            <div className="absolute top-0 right-0 w-12 h-12 bg-gray-300 opacity-30 transform rotate-45 translate-x-[50%] translate-y-[-50%] z-20"></div>
          </div>
        </div>
      </div>
    </section>;
};