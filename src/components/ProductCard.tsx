'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="group bg-white border border-gray-200 hover:border-black transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square bg-gray-100 relative overflow-hidden cursor-pointer">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium">
              {product.category.toUpperCase()}
            </span>
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold bg-black/50 px-4 py-2">
              VIEW PRODUCT
            </span>
          </div>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 uppercase tracking-wide">
          {product.category}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-black">
            ${product.price}
          </span>
          <button 
            onClick={handleAddToCart}
            className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
