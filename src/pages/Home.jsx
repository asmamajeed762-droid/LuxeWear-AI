import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Home(){

  return (

    <div className="min-h-screen bg-gray-100">


      {/* Hero Section */}

      <section className="bg-gradient-to-br from-[#081b33] via-[#132f52] to-black text-white py-28 px-6">


        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">



          {/* Hero Content */}


          <div>


            <motion.h1

              initial={{opacity:0,y:-80}}

              animate={{opacity:1,y:0}}

              transition={{duration:1}}

              className="text-5xl md:text-6xl font-extrabold uppercase leading-tight"

            >

              Welcome To LuxeWear-AI

            </motion.h1>





            <motion.p

              initial={{opacity:0,x:-60}}

              animate={{opacity:1,x:0}}

              transition={{delay:0.4,duration:1}}

              className="mt-8 text-lg leading-9 text-gray-200"

            >

              LuxeWear-AI is a modern luxury fashion platform where
              creativity, elegance, and artificial intelligence come
              together to create a unique digital shopping experience.
              We provide premium fashion collections for women, men,
              and kids with stylish designs, quality fabrics, and the
              latest trends.

              <br/><br/>

              Our goal is to make online shopping simple, enjoyable,
              and personalized. Explore beautiful collections, discover
              your perfect style, and enjoy a modern fashion journey
              powered by smart technology and creative designs.

            </motion.p>



          </div>






          {/* Hero Image */}


          <motion.img


            initial={{opacity:0,scale:0.7}}

            animate={{opacity:1,scale:1}}

            transition={{duration:1.2}}


            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"


            alt="Luxury Fashion"


            className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"


          />


        </div>


      </section>
      {/* Collections Section */}


      <section className="py-24 px-6 bg-gray-100">


        <motion.h2

          initial={{opacity:0,y:40}}

          whileInView={{opacity:1,y:0}}

          transition={{duration:0.8}}

          className="text-4xl md:text-5xl font-bold text-center text-[#081b33]"

        >

          Explore Our Collections

        </motion.h2>




        <motion.p

          initial={{opacity:0}}

          whileInView={{opacity:1}}

          transition={{delay:0.3}}

          className="max-w-4xl mx-auto text-center mt-5 text-lg text-gray-600 leading-8"

        >

          Discover LuxeWear-AI premium fashion collections designed
          for every personality and occasion. From elegant women's
          outfits to classic men's styles and comfortable kids fashion,
          we bring modern trends, luxury designs, and quality fashion
          together in one place.

        </motion.p>






        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-14">






          {/* Women Collection */}


          <motion.div

            initial={{opacity:0,y:50}}

            whileInView={{opacity:1,y:0}}

            whileHover={{scale:1.05,y:-10}}

            transition={{duration:0.6}}

            className="bg-white rounded-3xl shadow-xl overflow-hidden"

          >


            <img

              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc"

              alt="Women Fashion"

              className="w-full h-80 object-cover"

            />


            <div className="p-6">


              <h3 className="text-2xl font-bold text-[#081b33]">

                Women Collection

              </h3>


              <p className="mt-4 text-gray-600 leading-7">

                Explore elegant dresses, luxury outfits, and modern
                fashion styles created specially for confident women.
                Our collection combines beauty, comfort, and the latest
                fashion trends.

              </p>


            </div>


          </motion.div>








          {/* Men Collection */}


          <motion.div

            initial={{opacity:0,y:50}}

            whileInView={{opacity:1,y:0}}

            whileHover={{scale:1.05,y:-10}}

            transition={{duration:0.7}}

            className="bg-white rounded-3xl shadow-xl overflow-hidden"

          >


            <img

              src="https://images.unsplash.com/photo-1488161628813-04466f872be2"

              alt="Men Fashion"

              className="w-full h-80 object-cover"

            />



            <div className="p-6">


              <h3 className="text-2xl font-bold text-[#081b33]">

                Men Collection

              </h3>



              <p className="mt-4 text-gray-600 leading-7">

                Discover stylish men's fashion with premium designs,
                classic looks, and comfortable outfits made for a
                modern lifestyle.

              </p>



            </div>


          </motion.div>








          {/* Kids Collection */}


          <motion.div

            initial={{opacity:0,y:50}}

            whileInView={{opacity:1,y:0}}

            whileHover={{scale:1.05,y:-10}}

            transition={{duration:0.8}}

            className="bg-white rounded-3xl shadow-xl overflow-hidden"

          >


            <img

              src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea"

              alt="Kids Fashion"

              className="w-full h-80 object-cover"

            />



            <div className="p-6">


              <h3 className="text-2xl font-bold text-[#081b33]">

                Kids Collection

              </h3>



              <p className="mt-4 text-gray-600 leading-7">

                Find cute, comfortable, and colorful fashion collections
                for kids with creative designs and modern styles for
                every special moment.

              </p>


            </div>


          </motion.div>




        </div>



      </section>
      {/* Discover More Section */}


      <section className="py-20 px-6 bg-gradient-to-r from-white to-gray-100">


        <motion.h2

          initial={{opacity:0,y:40}}

          whileInView={{opacity:1,y:0}}

          transition={{duration:0.8}}

          className="text-4xl md:text-5xl text-center font-bold text-[#081b33]"

        >

          Discover LuxeWear-AI Features

        </motion.h2>





        <motion.p

          initial={{opacity:0}}

          whileInView={{opacity:1}}

          transition={{delay:0.3}}

          className="max-w-4xl mx-auto text-center mt-5 text-lg text-gray-600 leading-8"

        >

          Explore all important features of LuxeWear-AI. Manage your
          shopping experience, discover fashion collections, check
          orders, share reviews, and enjoy a smart digital fashion
          journey designed with modern technology.

        </motion.p>






        <div className="flex flex-wrap justify-center gap-5 mt-12">



          {[
            ["Dashboard","/dashboard","bg-orange-500"],
            ["Orders","/orders","bg-pink-600"],
            ["Checkout","/checkout","bg-yellow-500 text-[#081b33]"],
            ["Reviews","/reviews","bg-purple-600"],
            ["Search","/search","bg-cyan-600"],
            ["Wishlist","/wishlist","bg-red-500"],
            ["Contact","/contact","bg-blue-600"],
            ["Fashion Collection","/shop","bg-rose-600"],
            ["AI Style","/ai-style","bg-green-600"]

          ].map((btn,index)=>(

            <motion.div

              key={index}

              whileHover={{scale:1.1}}

            >

              <Link

                to={btn[1]}

                className={`${btn[2]} text-white px-8 py-3 rounded-full font-bold shadow-lg inline-block`}

              >

                {btn[0]}

              </Link>


            </motion.div>


          ))}



        </div>


      </section>







      {/* Footer Section */}


      <section className="bg-[#081b33] text-white py-16 px-6 text-center">


        <motion.h2

          initial={{opacity:0}}

          whileInView={{opacity:1}}

          transition={{duration:0.8}}

          className="text-3xl md:text-4xl font-bold text-yellow-400"

        >

          Thank You For Visiting LuxeWear-AI

        </motion.h2>





        <motion.p

          initial={{opacity:0,y:30}}

          whileInView={{opacity:1,y:0}}

          transition={{duration:0.8}}

          className="max-w-4xl mx-auto mt-6 text-gray-200 text-lg leading-9"

        >

          LuxeWear-AI is more than just a fashion website. It combines
          luxury designs, smart technology, and a smooth shopping
          experience. Our mission is to help every customer discover
          their unique style with confidence and comfort.

        </motion.p>





        <Link

          to="/"

          className="inline-block mt-8 bg-yellow-500 text-[#081b33] px-10 py-3 rounded-full font-bold shadow-lg"

        >

          

        </Link>



      </section>


    </div>

  );

}


export default Home;