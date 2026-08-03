import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Checkout() {

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Hero */}

      <section className="bg-[#081b33] text-white py-20 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <motion.h1
              initial={{ opacity:0, x:-60 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.8 }}
              className="text-5xl md:text-6xl font-bold"
            >

              Secure Checkout

            </motion.h1>

            <motion.p
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.4 }}
              className="mt-8 text-lg leading-9 text-gray-200"
            >

              Complete your order safely with LuxeWear-AI.
              Fill in your billing information, choose your
              payment method, review your products, and place
              your order with confidence.

            </motion.p>

          </div>

          <motion.img

            initial={{ opacity:0, scale:0.8 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1 }}

            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"

            alt="Checkout"

            className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"

          />

        </div>

      </section>





      {/* Billing Form */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-[#081b33]">

            Billing Details

          </h2>

          <p className="text-gray-600 mt-3">

            Please enter your information below.

          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <input
              type="text"
              placeholder="Full Name"
              className="border p-4 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="City"
              className="border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Country"
              className="border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Postal Code"
              className="border p-4 rounded-xl"
            />

          </div>
          {/* Address */}

          <div className="mt-8">

            <textarea
              rows="5"
              placeholder="Complete Address"
              className="w-full border p-4 rounded-2xl"
            ></textarea>

          </div>





          {/* Payment Method */}

          <div className="mt-10">

            <h2 className="text-3xl font-bold text-[#081b33]">
              Payment Method
            </h2>

            <div className="grid md:grid-cols-3 gap-5 mt-6">

              <div className="bg-blue-100 rounded-2xl p-6 text-center shadow">
                💳
                <h3 className="font-bold mt-3">
                  Credit Card
                </h3>
              </div>

              <div className="bg-green-100 rounded-2xl p-6 text-center shadow">
                💵
                <h3 className="font-bold mt-3">
                  Cash On Delivery
                </h3>
              </div>

              <div className="bg-yellow-100 rounded-2xl p-6 text-center shadow">
                🏦
                <h3 className="font-bold mt-3">
                  Bank Transfer
                </h3>
              </div>

            </div>

          </div>





          {/* Order Summary */}

          <div className="mt-12 bg-gray-100 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-[#081b33]">
              Order Summary
            </h2>

            <div className="flex justify-between mt-6">

              <span>Luxury Dress</span>
              <span>$120</span>

            </div>

            <div className="flex justify-between mt-4">

              <span>Fashion Shoes</span>
              <span>$95</span>

            </div>

            <div className="flex justify-between mt-4">

              <span>Luxury Handbag</span>
              <span>$85</span>

            </div>

            <hr className="my-6"/>

            <div className="flex justify-between text-2xl font-bold text-[#081b33]">

              <span>Total</span>

              <span>$300</span>

            </div>

          </div>





          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/order-success"
              className="bg-green-600 text-white px-10 py-3 rounded-full font-bold shadow-lg"
            >
              Place Order
            </Link>

            <Link
              to="/cart"
              className="bg-pink-600 text-white px-10 py-3 rounded-full font-bold shadow-lg"
            >
              Back To Cart
            </Link>

            <Link
              to="/"
              className="bg-[#081b33] text-white px-10 py-3 rounded-full font-bold shadow-lg"
            >
              ← Back To Home
            </Link>

          </div>
          {/* Thank You Section */}

          <div className="mt-16 bg-[#081b33] text-white rounded-3xl p-10 text-center">

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-yellow-400"
            >
              Thank You For Shopping With LuxeWear-AI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg leading-9 text-gray-200"
            >
              Your satisfaction is our priority. Every order is handled
              with care to ensure premium quality, secure delivery, and
              an excellent shopping experience. We appreciate your trust
              in LuxeWear-AI and look forward to serving you again with
              the latest fashion collections.
            </motion.p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Checkout;