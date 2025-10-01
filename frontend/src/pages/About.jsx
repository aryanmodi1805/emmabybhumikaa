import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                About Emma by Bhumika
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the story behind our exclusive fashion collection and the passion that drives our designs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Emma by Bhumika represents the perfect fusion of contemporary fashion and timeless elegance. 
                Our mission is to create clothing that empowers women to express their unique style while 
                feeling confident and beautiful in every piece.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From carefully selected fabrics to intricate designs, we ensure every garment tells a story 
                of craftsmanship and attention to detail.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-6xl mb-4">👗</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Fashion Excellence</h3>
              <p className="text-gray-600">We believe that great fashion is in the details, and we're committed to delivering excellence in every stitch and design.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quality Materials</h3>
              <p className="text-gray-600">We use only the finest fabrics and materials to ensure comfort, durability, and style in every piece.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Unique Designs</h3>
              <p className="text-gray-600">Our designs are carefully crafted to be both trendy and timeless, perfect for any occasion.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Customer Care</h3>
              <p className="text-gray-600">We provide exceptional customer service to ensure your shopping experience is as beautiful as our clothes.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
