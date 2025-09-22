import Link from 'next/link';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat bg-gray-800"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-wider street-font">
          WEAR THE
          <span className="block">WORD</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          More than apparel. It's a statement of faith. Streetwear designed for the chosen generation.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Link 
            href="/apparel"
            className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
          >
            EXPLORE THE COLLECTION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
