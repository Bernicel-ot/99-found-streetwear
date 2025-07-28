import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Classic Oversized Tee",
    price: 45,
    image: "/products/tee.jpg",
    category: "apparel"
  },
  {
    id: "2",
    name: "Urban Snapback",
    price: 35,
    image: "/products/cap.jpg",
    category: "accessories"
  },
  {
    id: "3",
    name: "Street Hoodie",
    price: 85,
    image: "/products/hoodie.jpg",
    category: "apparel"
  },
  {
    id: "4",
    name: "Chain Necklace",
    price: 25,
    image: "/products/chain.jpg",
    category: "accessories"
  }
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">FEATURED DROPS</h2>
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

      {/* Brand Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6">BORN FROM THE STREETS</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We&apos;re not just another clothing brand. We&apos;re a movement that represents 
              the authentic spirit of street culture. Every piece we create tells a story, 
              reflects an attitude, and embodies the raw energy of urban life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To create premium streetwear that bridges the gap between style and substance, 
                  giving everyone the confidence to express their authentic self.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Our Promise</h3>
                <p className="text-gray-600">
                  Quality materials, ethical production, and designs that stand the test of time. 
                  When you wear our pieces, you&apos;re wearing a piece of the culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
