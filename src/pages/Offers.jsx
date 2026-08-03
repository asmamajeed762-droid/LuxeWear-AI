import { useState } from "react";
import products from "../products.js";
import ProductCard from "../components/ProductCard";

function Offers() {
  // Sirf discounted products dikhao
  const discountedProducts = products.filter(p => p.originalPrice && p.originalPrice > p.price);

  return (
    <section className="pt-28 bg-[var(--light)] min-h-[80vh]">

      {/* Premium Gold Banner */}
      <div className="bg-gradient-to-r from-[var(--gold)] to-yellow-400 py-16 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--primary)] mb-4">
            EXCLUSIVE DEALS 🔥
          </h1>
          <p className="text-xl text-[var(--primary)] font-semibold mb-6">
            Up To 40% OFF - Limited Time Only!
          </p>
          <div className="bg-[var(--primary)] text-[var(--gold)] inline-block px-6 py-3 rounded-full font-bold">
            Sale Ends Soon: 48 Hours Left
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* Header with Premium Paragraph */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Luxury For Less
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't miss your chance to own premium designer wear at unbeatable prices.
            Our exclusive offers bring you the finest fabrics, perfect fits, and timeless
            styles - all with massive savings. Shop now before your favorite pieces are gone!
          </p>
        </div>

        {discountedProducts.length === 0? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No active offers right now. Check back soon! 😊</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {discountedProducts.map(product => (
              <ProductCard key={product.id} product={product} showDiscount={true} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Offers;