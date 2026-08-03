import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Reviews(){

  return (

    <div className="min-h-screen bg-gray-100 py-16 px-6">


      <motion.div

        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}

        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10 text-center"

      >




        <motion.img

          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1}}

          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"

          alt="Customer Reviews"

          className="w-full h-80 object-cover rounded-3xl shadow-lg"

        />







        <h1 className="text-4xl md:text-5xl font-bold text-[#081b33] mt-8">

          Customer Reviews ⭐

        </h1>






        <p className="text-gray-600 text-lg leading-9 mt-6 max-w-4xl mx-auto">

          Discover what customers say about LuxeWear-AI. We focus on
          providing premium fashion collections, quality designs,
          easy shopping, and a smooth online experience. Customer
          satisfaction and trust are our biggest priorities.

        </p>








        <div className="grid md:grid-cols-3 gap-6 mt-12">





          <div className="bg-blue-100 rounded-3xl p-6 shadow">

            <h3 className="text-xl font-bold text-[#081b33]">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="mt-4 text-gray-600">

              "Beautiful designs and amazing fashion collection.
              Shopping experience was very smooth."

            </p>

            <h4 className="mt-4 font-bold text-[#081b33]">
              - Sarah
            </h4>

          </div>







          <div className="bg-pink-100 rounded-3xl p-6 shadow">

            <h3 className="text-xl font-bold text-[#081b33]">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="mt-4 text-gray-600">

              "LuxeWear-AI provides stylish outfits with modern
              and elegant designs."

            </p>

            <h4 className="mt-4 font-bold text-[#081b33]">
              - Ayesha
            </h4>

          </div>







          <div className="bg-yellow-100 rounded-3xl p-6 shadow">

            <h3 className="text-xl font-bold text-[#081b33]">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="mt-4 text-gray-600">

              "Amazing experience. I love the luxury fashion
              collection and easy navigation."

            </p>

            <h4 className="mt-4 font-bold text-[#081b33]">
              - Emma
            </h4>

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


export default Reviews;