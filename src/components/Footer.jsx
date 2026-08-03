import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Footer(){

  const footerLinks = [
    {name:"About", path:"/about"},
    {name:"Contact", path:"/contact"},
    {name:"Dashboard", path:"/dashboard"},
    {name:"Orders", path:"/orders"},
    {name:"Checkout", path:"/checkout"},
    {name:"Reviews", path:"/reviews"},
    {name:"Fashion Collection", path:"/shop"},
  ];


  return (

    <footer className="bg-[#081b33] text-white py-16 px-6">


      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">


        {/* Brand */}

        <motion.div

          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}

        >

          <h2 className="text-3xl font-bold text-yellow-400">
            LuxeWear-AI
          </h2>


          <p className="mt-5 text-gray-300 leading-8">

            LuxeWear-AI is a modern luxury fashion platform where
            elegant designs, smart technology, and a premium shopping
            experience come together. Discover your perfect style
            with confidence.

          </p>


        </motion.div>





        {/* Quick Links */}

        <div>


          <h3 className="text-xl font-bold text-yellow-400">
            Quick Links
          </h3>


          <div className="mt-5 space-y-3">


            {
              footerLinks.map((item,index)=>(

                <Link

                  key={index}

                  to={item.path}

                  className="block text-gray-300 hover:text-yellow-400 transition"

                >

                  {item.name}

                </Link>

              ))
            }


          </div>


        </div>





        {/* Services */}

        <div>


          <h3 className="text-xl font-bold text-yellow-400">
            Services
          </h3>


          <p className="mt-5 text-gray-300 leading-8">

            ✨ Luxury Fashion  
            <br/>
            ✨ AI Style Suggestions
            <br/>
            ✨ Easy Online Shopping
            <br/>
            ✨ Secure Checkout
            <br/>
            ✨ Customer Support

          </p>


        </div>





        {/* Contact */}

        <div>


          <h3 className="text-xl font-bold text-yellow-400">
            Contact Us
          </h3>


          <p className="mt-5 text-gray-300 leading-8">

            Email:
            <br/>
            luxewearai@gmail.com

            <br/><br/>

            Phone:
            <br/>
            +92 300 0000000

          </p>


          <div className="flex gap-4 mt-6 text-2xl">

            <span>🌐</span>
            <span>📷</span>
            <span>💬</span>

          </div>


        </div>



      </div>





      {/* Bottom Section */}


      <div className="border-t border-gray-600 mt-12 pt-8 text-center">


        <p className="text-gray-300">

          © 2026 LuxeWear-AI. All Rights Reserved.

        </p>




        <Link

          to="/"

          className="inline-block mt-6 bg-yellow-500 text-[#081b33] px-10 py-3 rounded-full font-bold shadow-lg"

        >

          ← Back To Home

        </Link>



      </div>



    </footer>

  );

}


export default Footer;