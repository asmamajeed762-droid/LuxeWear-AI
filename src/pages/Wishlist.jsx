import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Wishlist() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-pink-100 via-white to-pink-50 py-20 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-[#081b33]"
            >
              My Wishlist ❤️
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-lg leading-9 text-gray-600"
            >
              Welcome to your LuxeWear-AI Wishlist. Save your favourite
              fashion products in one place and access them whenever you
              want. Explore premium dresses, luxury handbags, stylish
              footwear, and modern fashion collections carefully selected
              for you. Shopping becomes faster, easier, and more enjoyable
              with your personalized wishlist.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/shop"
                className="bg-yellow-500 text-[#081b33] px-8 py-3 rounded-full font-bold shadow-lg"
              >
                Continue Shopping
              </Link>

              <Link
                to="/cart"
                className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg"
              >
                View Cart
              </Link>

            </div>

          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
            alt="Wishlist"
            className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
          />

        </div>

      </section>
      {/* Wishlist Products */}

      <section className="py-20 px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-[#081b33]"
        >
          Your Favorite Fashion Items
        </motion.h2>

        <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto">
          These are your saved products. Add them to your cart anytime
          and enjoy a premium shopping experience with LuxeWear-AI.
        </p>



        <div className="grid md:grid-cols-3 gap-8 mt-14">


          {/* Product 1 */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
              alt="Luxury Dress"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-[#081b33]">
                Luxury Evening Dress
              </h3>

              <p className="text-pink-600 font-bold mt-2">
                $120
              </p>

              <p className="text-yellow-500 mt-2">
                ⭐⭐⭐⭐⭐
              </p>

              <div className="flex gap-3 mt-6">

                <Link
                  to="/cart"
                  className="bg-[#081b33] text-white px-5 py-2 rounded-full font-bold"
                >
                  Add To Cart
                </Link>

                <button className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">
                  Remove
                </button>

              </div>

            </div>

          </motion.div>





          {/* Product 2 */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Luxury Shoes"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-[#081b33]">
                Premium Fashion Shoes
              </h3>

              <p className="text-pink-600 font-bold mt-2">
                $95
              </p>

              <p className="text-yellow-500 mt-2">
                ⭐⭐⭐⭐⭐
              </p>

              <div className="flex gap-3 mt-6">

                <Link
                  to="/cart"
                  className="bg-[#081b33] text-white px-5 py-2 rounded-full font-bold"
                >
                  Add To Cart
                </Link>

                <button className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">
                  Remove
                </button>

              </div>

            </div>

          </motion.div>





          {/* Product 3 */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >

            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
              alt="Luxury Bag"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-[#081b33]">
                Luxury Handbag
              </h3>

              <p className="text-pink-600 font-bold mt-2">
                $85
              </p>

              <p className="text-yellow-500 mt-2">
                ⭐⭐⭐⭐⭐
              </p>

              <div className="flex gap-3 mt-6">

                <Link
                  to="/cart"
                  className="bg-[#081b33] text-white px-5 py-2 rounded-full font-bold"
                >
                  Add To Cart
                </Link>

                <button className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">
                  Remove
                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
      {/* Footer Section */}

      <section className="bg-[#081b33] text-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-yellow-400"
          >
            Thank You For Choosing LuxeWear-AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg leading-9 text-gray-200"
          >
            Your Wishlist makes shopping faster and more enjoyable.
            Save your favourite fashion products, explore premium
            collections, and discover elegant styles whenever you
            visit LuxeWear-AI. We are committed to providing a luxury
            shopping experience with modern fashion, premium quality,
            and customer satisfaction.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/shop"
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-700"
            >
              Continue Shopping
            </Link>

            <Link
              to="/cart"
              className="bg-yellow-500 text-[#081b33] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-400"
            >
              Go To Cart
            </Link>

            <Link
              to="/"
              className="bg-white text-[#081b33] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-200"
            >
              ← Back To Home
            </Link>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Wishlist;