import React from 'react';
import { ScissorsIcon, Skull, HandMetal } from 'lucide-react';
export const Hero = () => {
  return <section className="relative bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      {/* Tartan plaid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/plaid.png')] bg-repeat"></div>
      {/* Distressed texture */}
      <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/scratches.png')] bg-repeat"></div>
      {/* Safety pins decoration */}
      <div className="absolute top-10 left-10 rotate-45 hidden md:block">
        <div className="w-6 h-6 border-2 border-red-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 rotate-12 hidden md:block">
        <div className="w-6 h-6 border-2 border-red-500 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <HandMetal className="h-12 w-12 text-red-500 transform rotate-45" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight uppercase tracking-widest" style={{
          textShadow: '0 0 8px #ff0000'
        }}>
            <span className="block" style={{
            transform: 'rotate(-1deg)'
          }}>
              RAGE AGAINST
            </span>
            <span className="text-red-400 block" style={{
            transform: 'rotate(1deg)'
          }}>
              THE MAINSTREAM
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Books for the misfits, the outcasts, and everyone who's ever felt
            like they don't belong. We don't sell stories—we sell{' '}
            <span className="line-through">salvation</span>{' '}
            <span className="text-red-400">revolution</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 uppercase tracking-widest font-bold text-sm transition-colors border border-red-500 transform -rotate-1">
              BROWSE THE CHAOS
            </button>
            <button className="bg-transparent hover:bg-gray-800 text-white px-8 py-3 uppercase tracking-widest font-bold text-sm transition-colors border border-dashed border-red-600 transform rotate-1">
              JOIN OUR SCENE
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>;
};