import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { FeaturedBooks } from './components/FeaturedBooks';
import { Categories } from './components/Categories';
import { About } from './components/About';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-black text-gray-200 min-h-screen w-full">
      <NavBar />
      <main>
        <Hero />
        <FeaturedBooks />
        <Categories />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>;
}