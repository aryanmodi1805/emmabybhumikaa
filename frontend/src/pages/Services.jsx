import React from 'react';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Our Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our exclusive range of fashion pieces designed to make you feel confident and beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Evening Wear</h3>
              <p className="text-gray-600 mb-4">Elegant dresses perfect for special occasions and formal events.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Cocktail Dresses</li>
                <li>• Formal Gowns</li>
                <li>• Party Wear</li>
                <li>• Designer Pieces</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl mb-4">👚</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Casual Wear</h3>
              <p className="text-gray-600 mb-4">Comfortable and stylish everyday clothing for modern women.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Tops & Blouses</li>
                <li>• Casual Dresses</li>
                <li>• Comfort Wear</li>
                <li>• Trendy Styles</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Office Wear</h3>
              <p className="text-gray-600 mb-4">Professional attire that combines style with sophistication.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Business Suits</li>
                <li>• Professional Blouses</li>
                <li>• Office Dresses</li>
                <li>• Corporate Wear</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl mb-4">🌺</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Traditional Wear</h3>
              <p className="text-gray-600 mb-4">Beautiful ethnic and traditional clothing for cultural celebrations.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Ethnic Dresses</li>
                <li>• Traditional Outfits</li>
                <li>• Cultural Wear</li>
                <li>• Festival Clothing</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl mb-4">👘</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Bridal Collection</h3>
              <p className="text-gray-600 mb-4">Exquisite bridal wear for your special day and wedding celebrations.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Wedding Dresses</li>
                <li>• Bridal Lehengas</li>
                <li>• Reception Wear</li>
                <li>• Bridal Accessories</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Design</h3>
              <p className="text-gray-600 mb-4">Personalized clothing designed specifically for your unique style and preferences.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Made to Measure</li>
                <li>• Custom Fitting</li>
                <li>• Personal Consultation</li>
                <li>• Exclusive Designs</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:via-amber-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Collection
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
