import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function OrderSuccess(){

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-16">


      <motion.div

        initial={{opacity:0,scale:0.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.8}}

        className="max-w-4xl bg-white rounded-3xl shadow-2xl p-10 text-center"

      >




        <motion.img

          initial={{opacity:0,y:-40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}

          src="https://images.unsplash.com/photo-1445205170230-053b83016050"

          alt="Luxury Fashion Order"

          className="w-full h-80 object-cover rounded-3xl shadow-xl"

        />






        <h1 className="text-4xl md:text-5xl font-extrabold text-[#081b33] mt-8">

          LuxeWear-AI Order Successful 🎉

        </h1>






        <div className="mt-5 bg-green-100 text-green-700 px-6 py-3 rounded-full inline-block font-bold">

          Order Confirmed Successfully

        </div>






        <p className="text-gray-600 text-lg leading-9 mt-6">

          Thank you for choosing <b>LuxeWear-AI</b>. Your fashion order
          has been successfully placed. Our team is preparing your
          premium clothing items with care. Enjoy a smooth shopping
          experience with luxury designs, modern styles, and quality
          fashion collections delivered to your doorstep.

        </p>






        <div className="grid md:grid-cols-3 gap-5 mt-10">



          <div className="bg-gray-100 rounded-2xl p-5">

            <h3 className="font-bold text-[#081b33]">
              Brand
            </h3>

            <p className="text-gray-600 mt-2">
              LuxeWear-AI
            </p>

          </div>





          <div className="bg-gray-100 rounded-2xl p-5">

            <h3 className="font-bold text-[#081b33]">
              Order Status
            </h3>

            <p className="text-gray-600 mt-2">
              Confirmed
            </p>

          </div>





          <div className="bg-gray-100 rounded-2xl p-5">

            <h3 className="font-bold text-[#081b33]">
              Delivery
            </h3>

            <p className="text-gray-600 mt-2">
              Processing
            </p>

          </div>



        </div>







        <div className="flex flex-wrap justify-center gap-5 mt-10">



          <motion.div whileHover={{scale:1.1}}>

            <Link

              to="/"

              className="bg-[#081b33] text-white px-8 py-3 rounded-full font-bold shadow-lg"

            >

              Back To Home

            </Link>

          </motion.div>






          <motion.div whileHover={{scale:1.1}}>

            <Link

              to="/orders"

              className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg"

            >

              Back To Orders

            </Link>

          </motion.div>






          <motion.div whileHover={{scale:1.1}}>

            <Link

              to="/shop"

              className="bg-yellow-500 text-[#081b33] px-8 py-3 rounded-full font-bold shadow-lg"

            >

              Continue Shopping

            </Link>

          </motion.div>



        </div>



      </motion.div>


    </div>

  );

}


export default OrderSuccess;