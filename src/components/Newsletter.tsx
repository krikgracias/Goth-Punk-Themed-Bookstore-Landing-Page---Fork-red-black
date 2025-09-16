import React from 'react';
import { MailIcon, ScissorsIcon } from 'lucide-react';
export const Newsletter = () => {
  return <section className="py-16 px-4 bg-gradient-to-b from-gray-950 to-black relative">
      <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/black-thread-light.png')] bg-repeat mix-blend-multiply"></div>
      {/* Tartan overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/plaid.png')] bg-repeat"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-6 flex justify-center">
          <ScissorsIcon className="h-10 w-10 text-red-500 transform rotate-45" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-widest">
          <span className="inline-block transform -rotate-1">JOIN THE</span>{' '}
          <span className="text-red-400 inline-block transform rotate-1">
            MAILING LIST
          </span>
        </h2>
        <p className="text-gray-300 mb-8">
          Get the underground scoop on new books, local shows, author readings,
          and secret sales. No spam, no sellouts, just pure DIY literary madness
          straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <div className="relative flex-grow">
            <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input type="email" placeholder="YOUR EMAIL ADDRESS" className="w-full py-3 pl-10 pr-3 bg-gray-900 border border-red-900 text-white focus:outline-none focus:border-red-500 rounded-none uppercase tracking-wide text-sm" />
          </div>
          <button className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 uppercase tracking-widest font-bold text-sm transition-colors border border-red-500 rounded-none transform -rotate-1 hover:rotate-0">
            SUBSCRIBE
          </button>
        </div>
        <p className="text-gray-500 text-xs mt-4">
          By subscribing, you're part of our scene now. No corporate BS, just a
          community of like-minded misfits. We'll never sell your data.
        </p>
      </div>
    </section>;
};