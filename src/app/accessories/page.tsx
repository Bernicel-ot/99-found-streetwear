import ProductCard from "@/components/ProductCard";

// 99 FOUND Accessories Collection
const accessoriesProducts = [
  {
    id: "acc1",
    name: "Crowned Trucker Hat - Crown",
    price: 35,
    image: "/products/crown-hat.jpg",
    category: "accessories",
    description: "Trucker hat with crown symbol. Tagline inside: 'Wear the Word.'"
  },
  {
    id: "acc2",
    name: "Crowned Beanie - Dove",
    price: 30,
    image: "/products/dove-beanie.jpg",
    category: "accessories",
    description: "Soft beanie with embroidered dove symbol and 'Wear the Word' tag."
  },
  {
    id: "acc3",
    name: "Crowned Bucket Hat - Cross",
    price: 32,
    image: "/products/cross-bucket.jpg",
    category: "accessories",
    description: "Street-style bucket hat featuring cross design with hidden message."
  },
  {
    id: "acc4",
    name: "Crowned Hat - Halo Ring",
    price: 35,
    image: "/products/halo-hat.jpg",
    category: "accessories",
    description: "Clean design with halo ring symbol and 'Wear the Word' tagline inside."
  },
  {
    id: "acc5",
    name: "Mirror Messages Stickers Pack",
    price: 15,
    image: "/products/sticker-pack.jpg",
    category: "accessories",
    description: "Affirmation stickers: 'You are seen,' 'You are not alone,' 'You are found.'"
  },
  {
    id: "acc6",
    name: "Mirror Messages Phone Case",
    price: 25,
    image: "/products/phone-case.jpg",
    category: "accessories",
    description: "Daily encouragement phone case with 'You are found' message."
  },
  {
    id: "acc7",
    name: "Mirror Messages Tote Bag",
    price: 35,
    image: "/products/tote-bag.jpg",
    category: "accessories",
    description: "Canvas tote with 'You are not alone' affirmation for everyday encouragement."
  },
  {
    id: "acc8",
    name: "Found & Free Monthly Capsule",
    price: 150,
    image: "/products/monthly-capsule.jpg",
    category: "accessories",
    description: "Monthly drop: 1 hoodie + 1 tee + 1 accessory. Portion goes to youth programs."
  }
];

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6">
            ACCESSORIES
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Wear the Word. Faith-inspired accessories for everyday encouragement.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors">
              ALL
            </button>
            <button className="border border-gray-300 text-black px-6 py-3 font-semibold hover:border-black transition-colors">
              CROWNED
            </button>
            <button className="border border-gray-300 text-black px-6 py-3 font-semibold hover:border-black transition-colors">
              MIRROR MESSAGES
            </button>
            <button className="border border-gray-300 text-black px-6 py-3 font-semibold hover:border-black transition-colors">
              CAPSULES
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {accessoriesProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Category */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              STATEMENT PIECES
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our accessories are more than just add-ons – they&apos;re statement pieces 
              that elevate your entire look and showcase your unique style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  01
                </div>
                <h3 className="text-xl font-semibold mb-2">Curated Collection</h3>
                <p className="text-gray-400">
                  Every accessory is carefully selected to complement our streetwear aesthetic.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  02
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
                <p className="text-gray-400">
                  Quality construction and materials that stand up to daily wear.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  03
                </div>
                <h3 className="text-xl font-semibold mb-2">Versatile Style</h3>
                <p className="text-gray-400">
                  Pieces that work with any outfit, from casual to streetwear chic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            COMPLETE YOUR LOOK
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Check out our apparel collection to create the perfect streetwear ensemble.
          </p>
          <a 
            href="/apparel"
            className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors inline-block"
          >
            SHOP APPAREL
          </a>
        </div>
      </section>
    </div>
  );
}
