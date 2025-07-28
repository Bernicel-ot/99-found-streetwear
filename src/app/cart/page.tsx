'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { items, total, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5M17 18a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-black mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet. Start exploring our faith-inspired streetwear collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/apparel"
                className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors"
              >
                SHOP APPAREL
              </Link>
              <Link 
                href="/accessories"
                className="border-2 border-black text-black px-8 py-3 font-semibold hover:bg-black hover:text-white transition-colors"
              >
                SHOP ACCESSORIES
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      window.location.href = '/checkout';
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 street-font">YOUR CART</h1>
          <p className="text-gray-300 text-lg">
            Review your items and proceed to checkout
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="border border-gray-200 p-6 hover:border-black transition-colors">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 text-xs font-medium">
                        {item.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm uppercase tracking-wide mb-3">
                        {item.category}
                      </p>
                      <p className="text-xl font-bold text-black">${item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      <div className="flex items-center border border-gray-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 hover:bg-gray-100 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-lg font-semibold text-black">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/apparel"
                className="border-2 border-black text-black px-6 py-3 font-semibold hover:bg-black hover:text-white transition-colors text-center"
              >
                CONTINUE SHOPPING
              </Link>
              <button
                onClick={clearCart}
                className="border border-gray-300 text-gray-600 px-6 py-3 font-semibold hover:border-red-500 hover:text-red-500 transition-colors"
              >
                CLEAR CART
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-black mb-6">ORDER SUMMARY</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-black">Total</span>
                    <span className="text-xl font-bold text-black">
                      ${(total + total * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-black text-white py-4 font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                {isCheckingOut ? 'PROCESSING...' : 'PROCEED TO CHECKOUT'}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Secure checkout with SSL encryption</p>
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-5 bg-gray-300 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">VISA</span>
                  </div>
                  <div className="w-8 h-5 bg-gray-300 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">MC</span>
                  </div>
                  <div className="w-8 h-5 bg-gray-300 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">PP</span>
                  </div>
                </div>
              </div>

              {/* Giving Back Message */}
              <div className="mt-6 p-4 bg-white border border-gray-200">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">🤝</span>
                  <h3 className="font-semibold text-black">Giving Back</h3>
                </div>
                <p className="text-sm text-gray-600">
                  A portion of your purchase will go to youth programs and homeless shelters. 
                  Thank you for making a difference!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
