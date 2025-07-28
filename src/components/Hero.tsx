import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full">
        <div className="perfect-center max-w-6xl mx-auto px-4">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black text-black mb-6 leading-tight tracking-wider street-font">
            99
            <span className="block text-gray-600">FOUND</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 font-light max-w-4xl mx-auto text-center">
            Leave the 99 for the 1. Faith-inspired streetwear that speaks to the culture 
            and makes a difference.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              href="/apparel"
              className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 min-w-[200px] rounded-none uppercase tracking-wide"
            >
              SHOP APPAREL
            </Link>
            <Link 
              href="/accessories"
              className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 min-w-[200px] rounded-none uppercase tracking-wide"
            >
              SHOP ACCESSORIES
            </Link>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                ✝
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Faith-Inspired</h3>
              <p className="text-gray-600 leading-relaxed">
                Every piece carries a message of hope and encouragement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                🤝
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Giving Back</h3>
              <p className="text-gray-600 leading-relaxed">
                Portion of every sale goes to youth programs and homeless shelters.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">The One</h3>
              <p className="text-gray-600 leading-relaxed">
                Streetwear for those who know they are found.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
