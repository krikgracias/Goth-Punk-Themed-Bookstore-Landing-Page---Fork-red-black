import React from 'react';
export const Categories = () => {
  const categories = [{
    id: 1,
    name: 'Emo Poetry',
    image: 'https://c4.wallpaperflare.com/wallpaper/467/178/350/emo-pictures-wallpaper-preview.jpg',
    count: 76
  }, {
    id: 2,
    name: 'Punk History',
    image: 'https://images.unsplash.com/photo-1571816119607-57e48af1caa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    count: 53
  }, {
    id: 3,
    name: 'DIY Zines',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    count: 91
  }, {
    id: 4,
    name: 'Riot Grrrl',
    image: 'https://images.unsplash.com/photo-1485846147915-69f12fbd03b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    count: 124
  }];
  return <section className="py-16 px-4 bg-gray-950 relative">
      {/* Distressed background texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/scratches.png')] bg-repeat"></div>
      {/* Tartan pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/plaid.png')] bg-repeat"></div>
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-white text-center mb-12 uppercase tracking-widest">
          <span className="border-b-2 border-red-500 pb-1 inline-block transform -rotate-1">
            EXPLORE
          </span>{' '}
          <span className="inline-block transform rotate-1">
            THE UNDERGROUND
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => <div key={category.id} className="group relative overflow-hidden transform hover:rotate-1 transition-transform duration-300">
              <div className="aspect-square overflow-hidden border-2 border-dashed border-red-800">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-150 contrast-125" />
              </div>
              {/* Overlay with texture */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] bg-repeat mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide">
                  {category.name}
                </h3>
                <p className="text-red-300 text-sm">{category.count} Titles</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <button className="bg-black text-white px-6 py-2 uppercase font-bold tracking-wider text-sm border border-red-500 transform -rotate-2 hover:rotate-0 transition-transform">
                  DIVE IN
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};