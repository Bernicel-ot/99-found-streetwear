import ProductCard from "@/components/ProductCard";

// 99 FOUND Product Collection
const apparelProducts = [
  {
    id: "1",
    name: '"The One Left Behind" Hoodie',
    price: 85,
    image: "/products/signature-hoodie.jpg",
    category: "apparel",
    description: "Oversized hoodie with '99 FOUND' across the chest and embroidered '1' on the sleeve. Luke 15:4 inspired."
  },
  {
    id: "2",
    name: "Parable Patches Denim Jacket",
    price: 120,
    image: "/products/denim-jacket.jpg",
    category: "apparel",
    description: "Street-style denim with customizable patches representing different parables."
  },
  {
    id: "3",
    name: "Verse Vault Graphic Tee - Psalm 139:14",
    price: 45,
    image: "/products/psalm-tee.jpg",
    category: "apparel",
    description: "'I am fearfully and wonderfully made' - Bold back print, minimal front with '99' logo."
  },
  {
    id: "4",
    name: "Verse Vault Graphic Tee - Psalm 46:5",
    price: 45,
    image: "/products/psalm-46-tee.jpg",
    category: "apparel",
    description: "'God is within her, she will not fall' - Bold back print, minimal front design."
  },
  {
    id: "5",
    name: "The Revival Set - REDEEMED",
    price: 95,
    image: "/products/redeemed-set.jpg",
    category: "apparel",
    description: "Unisex co-ord set with clean 'REDEEMED' typography in earthy tones."
  },
  {
    id: "6",
    name: "The Revival Set - CHOSEN",
    price: 95,
    image: "/products/chosen-set.jpg",
    category: "apparel",
    description: "Track pants + cropped hoodie set with 'CHOSEN' design in sage and bone colors."
  },
  {
    id: "7",
    name: "The Revival Set - REVIVED",
    price: 95,
    image: "/products/revived-set.jpg",
    category: "apparel",
    description: "Complete co-ord set featuring 'REVIVED' typography with urban accents."
  },
  {
    id: "8",
    name: "Step in Faith Slides",
    price: 55,
    image: "/products/faith-slides.jpg",
    category: "apparel",
    description: "Minimalist slides with scripture printed inside soles. 'You walk by faith, not by sight.'"
  }
];

export default function ApparelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            APPAREL
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Faith-inspired streetwear that speaks to the culture. Leave the 99 for the 1.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors">
              ALL
            </button>
            <button className="border border-gray-300 text-black px-6 py-3 font-semibold hover:border-black transition-colors">
              HOODIES
            </button>
            <button className="border border-gray-300 text-black px-6 py-3 font-semibold hover:border-black transition-colors">
              VERSE VAULT
            </button>
            <button className="border border-gray-300 text-black px-6 py-3 font-semibold hover:border-black transition-colors">
              REVIVAL SETS
            </button>
            <button className="border border-gray-300 text-black px-6 py-3 font-semibold hover:border-black transition-colors">
              FOOTWEAR
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {apparelProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            STAY IN THE LOOP
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Be the first to know about new drops, exclusive releases, and special offers.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:border-black outline-none"
            />
            <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
