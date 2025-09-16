import React from 'react';
import { BookOpenIcon, InstagramIcon, TwitterIcon, FacebookIcon, ScissorsIcon, MusicIcon, HeartIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-black border-t border-red-900 pt-12 pb-6 px-4 relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] bg-repeat"></div>
      {/* Tartan overlay */}
      <div className="absolute inset-0 opacity-3 bg-[url('https://www.transparenttextures.com/patterns/plaid.png')] bg-repeat"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <ScissorsIcon className="h-8 w-8 text-red-500 mr-2 rotate-45" />
              <span className="text-xl font-bold tracking-widest text-white" style={{
              textShadow: '0 0 5px #ff0000'
            }}>
                GUTTERPUNK<span className="text-red-500">BOOKS&CO</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Reading is rebellion. Literature is liberation. Find your voice
              among our shelves.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors bg-gray-900 p-2 rounded-none">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors bg-gray-900 p-2 rounded-none">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors bg-gray-900 p-2 rounded-none">
                <MusicIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="transform -rotate-1">
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider border-b border-red-800 pb-1 inline-block">
              DISCOVER
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  New Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Staff Picks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Indie Authors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Zine Distro
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Merch
                </a>
              </li>
            </ul>
          </div>
          <div className="transform rotate-1">
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider border-b border-red-800 pb-1 inline-block">
              GENRES
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Emo Poetry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Punk History
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  DIY Zines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Riot Grrrl
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Underground Comics
                </a>
              </li>
            </ul>
          </div>
          <div className="transform -rotate-1">
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider border-b border-red-800 pb-1 inline-block">
              COMMUNITY
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Upcoming Shows
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Get In Touch
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Submissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <HeartIcon className="h-3 w-3 mr-2 text-red-800" />
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GUTTERPUNK BOOKS & CO. NO RIGHTS
            RESERVED. COPY AND DISTRIBUTE FREELY.
          </p>
        </div>
      </div>
    </footer>;
};