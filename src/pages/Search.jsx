import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Search(){

  return (

    <div className="min-h-screen bg-gray-100 py-16 px-6">


      <motion.div

        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}

        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 text-center"

      >



        <motion.img

          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1}}

          src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc"

          alt="Search Fashion"

          className="w-full h-80 object-cover rounded-3xl shadow-lg"

        />






        <h1 className="text-4xl md:text-5xl font-bold text-[#081b33] mt-8">

          Search Fashion Collection 🔍

        </h1>






        <p className="text-gray-600 text-lg leading-9 mt-6">

          Find your favorite fashion products quickly with LuxeWear-AI
          smart search experience. Explore luxury clothing collections,
          new arrivals, stylish outfits, and trending designs. Our
          search feature helps customers discover the perfect products
          with easy navigation and a smooth shopping journey.

        </p>







        <div className="grid md:grid-cols-3 gap-6 mt-10">



          <div className="bg-yellow-100 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-[#081b33]">
              Easy Search
            </h3>

            <p className="mt-3 text-gray-600">
              Quickly find fashion items.
            </p>

          </div>





          <div className="bg-blue-100 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-[#081b33]">
              Categories
            </h3>

            <p className="mt-3 text-gray-600">
              Browse different collections.
            </p>

          </div>





          <div className="bg-pink-100 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-[#081b33]">
              Latest Trends
            </h3>

            <p className="mt-3 text-gray-600">
              Discover modern styles.
            </p>

          </div>



        </div>







        <motion.div

          whileHover={{scale:1.1}}

          className="mt-12"

        >

          <Link

            to="/"

            className="bg-[#081b33] text-white px-10 py-3 rounded-full font-bold shadow-lg"

          >

            ← Back To Home

          </Link>


        </motion.div>




      </motion.div>


    </div>

  );

}


export default Search;