import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Classic Oversized Tee",
    price: 45,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "apparel"
  },
  {
    id: "2",
    name: "Urban Snapback",
    price: 35,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  },
  {
    id: "3",
    name: "Street Hoodie",
    price: 85,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "apparel"
  },
  {
    id: "4",
    name: "Chain Necklace",
    price: 25,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  }
];

// Collections data
const collections = [
  {
    id: "1",
    name: "THE ONE LEFT BEHIND",
    description: "Our signature hoodie collection inspired by Luke 15:4",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "bg-gray-800",
    textColor: "text-white"
  },
  {
    id: "2", 
    name: "PARABLE PATCHES",
    description: "Customizable denim jackets with story-driven patches",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "bg-blue-400",
    textColor: "text-white"
  },
  {
    id: "3",
    name: "VERSE VAULT", 
    description: "Bold graphic tees featuring graffiti-style Bible verses",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "bg-green-400",
    textColor: "text-white"
  }
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4 street-font">FEATURED DROPS</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Check out our latest and most popular pieces that define street culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Collections Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4 street-font">OUR COLLECTIONS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {collections.map((collection) => (
              <div 
                key={collection.id}
                className={`${collection.color} ${collection.textColor} p-8 rounded-lg relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${collection.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '300px'
                }}
              >
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <h3 className="text-xl font-bold mb-3 street-font">{collection.name}</h3>
                  <p className="text-sm mb-4 opacity-90">{collection.description}</p>
                  <button className="bg-white text-black px-6 py-2 rounded-none font-semibold hover:bg-gray-200 transition-all duration-300 self-start">
                    Explore Collection →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 street-font">MAKING A DIFFERENCE</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Every purchase creates a ripple effect of positive change in communities worldwide. 
              50% of our proceeds go directly to supporting the homeless.
            </p>
          </div>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Hoodies Donated */}
            <div className="bg-gray-800 rounded-lg p-8 text-center text-white">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v1m0 0V5a2 2 0 012-2h4a2 2 0 012 2v1M7 7h10v4a7 7 0 11-10 0V7z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1,247</div>
              <div className="text-sm font-semibold text-gray-300 mb-2">HOODIES DONATED</div>
              <div className="text-xs text-gray-400">To homeless shelters</div>
            </div>

            {/* Lives Impacted */}
            <div className="bg-gray-800 rounded-lg p-8 text-center text-white">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">856</div>
              <div className="text-sm font-semibold text-gray-300 mb-2">LIVES IMPACTED</div>
              <div className="text-xs text-gray-400">Through our programs</div>
            </div>

            {/* Total Donated */}
            <div className="bg-gray-800 rounded-lg p-8 text-center text-white">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 0v1m-2 0V6a2 2 0 00-2 0v1m2 0V9.5m0 0v3m0-3h3m-3 0h-3" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$47K</div>
              <div className="text-sm font-semibold text-gray-300 mb-2">TOTAL DONATED</div>
              <div className="text-xs text-gray-400">To various causes</div>
            </div>

            {/* Partner Organizations */}
            <div className="bg-gray-800 rounded-lg p-8 text-center text-white">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">23</div>
              <div className="text-sm font-semibold text-gray-300 mb-2">PARTNER ORGANIZATIONS</div>
              <div className="text-xs text-gray-400">Across the country</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Newsletter Signup */}
            <div className="text-center text-white mb-16">
              {/* Email Icon */}
              <div className="mb-8">
                <svg className="w-16 h-16 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 street-font">STAY IN THE LOOP</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get early access to new drops, exclusive stories, and impact updates delivered to your inbox.
              </p>
              
              {/* Email Subscription Form */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 px-4 py-3 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-white focus:outline-none rounded-none"
                />
                <button className="w-full sm:w-auto bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors rounded-none flex items-center justify-center gap-2">
                  Subscribe
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-gray-700 pt-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                  <div className="space-y-4">
                    <a href="/" className="block text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="/apparel" className="block text-gray-300 hover:text-white transition-colors">Apparel</a>
                    <a href="/accessories" className="block text-gray-300 hover:text-white transition-colors">Accessories</a>
                    <a href="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
                  </div>
                </div>

                {/* Customer Service */}
                <div>
                  <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
                  <div className="space-y-4">
                    <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact Us</a>
                    <a href="/shipping" className="block text-gray-300 hover:text-white transition-colors">Shipping Info</a>
                    <a href="/returns" className="block text-gray-300 hover:text-white transition-colors">Returns</a>
                    <a href="/size-guide" className="block text-gray-300 hover:text-white transition-colors">Size Guide</a>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Stay Updated Newsletter */}
                <div>
                  <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
                  <p className="text-gray-300 text-sm mb-6">Get the latest drops and exclusive offers</p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:border-white focus:outline-none text-sm"
                    />
                    <button className="bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="border-t border-gray-700 mt-16 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                  <p>&copy; 2024 99 FOUND. All rights reserved.</p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
