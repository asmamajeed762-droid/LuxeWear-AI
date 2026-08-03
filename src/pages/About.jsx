function About(){

  return(

    <div className="min-h-screen bg-gray-100">


      {/* Hero */}

      <section className="bg-[#081b33] text-white py-24 px-6 text-center">

        <p className="text-yellow-400 uppercase tracking-widest font-semibold">
          Luxury Fashion & AI Innovation
        </p>


        <h1 className="text-5xl md:text-6xl font-bold mt-5">
          About
          <span className="text-yellow-400">
            {" "}LuxeWear-AI
          </span>
        </h1>


        <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg leading-8">
          LuxeWear-AI is a modern fashion platform where luxury
          fashion meets artificial intelligence. We create stylish,
          personalized and smart shopping experiences for women,
          men and kids.
        </p>

      </section>




      {/* Story */}

      <section className="py-16 px-6 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10">


          <div>

            <h2 className="text-4xl font-bold text-[#081b33]">
              Our Story
            </h2>


            <p className="mt-5 text-gray-600 leading-8">
              LuxeWear-AI was created to combine fashion creativity
              with modern technology. Our mission is to provide
              premium clothing collections with a smooth online
              shopping experience.
            </p>


            <p className="mt-4 text-gray-600 leading-8">
              We focus on elegant designs, quality products and
              innovative ideas that help customers discover their
              perfect style.
            </p>


          </div>



          <div className="bg-white rounded-3xl shadow-lg p-10">


            <h2 className="text-3xl font-bold text-[#081b33]">
              Our Vision
            </h2>


            <p className="mt-5 text-gray-600 leading-8">
              Our vision is to create a future fashion platform
              where AI helps people find styles according to their
              personality and preferences.
            </p>


          </div>


        </div>

      </section>




      {/* Features */}

      <section className="bg-white py-16 px-6">


        <h2 className="text-4xl font-bold text-center text-[#081b33]">
          Why Choose LuxeWear-AI?
        </h2>



        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-10">


          <div className="bg-gray-100 rounded-3xl p-8 text-center">

            <h3 className="text-2xl font-bold text-[#081b33]">
              Premium Quality
            </h3>

            <p className="mt-4 text-gray-600">
              Modern fashion designs with premium quality materials.
            </p>

          </div>




          <div className="bg-gray-100 rounded-3xl p-8 text-center">

            <h3 className="text-2xl font-bold text-[#081b33]">
              AI Powered Style
            </h3>

            <p className="mt-4 text-gray-600">
              Smart fashion suggestions for better choices.
            </p>

          </div>




          <div className="bg-gray-100 rounded-3xl p-8 text-center">

            <h3 className="text-2xl font-bold text-[#081b33]">
              Easy Shopping
            </h3>

            <p className="mt-4 text-gray-600">
              Simple and enjoyable online shopping experience.
            </p>

          </div>


        </div>


      </section>




      {/* Technology */}

      <section className="bg-[#081b33] text-white py-16 px-6 text-center">


        <h2 className="text-4xl font-bold">
          Fashion Meets Technology
        </h2>


        <p className="mt-5 max-w-3xl mx-auto text-gray-300 leading-8">
          LuxeWear-AI combines fashion and artificial intelligence
          to create the future of smart shopping.
        </p>


      </section>




      {/* Back Home */}

      <section className="bg-white py-12 text-center">


        <a href="/">

          <button className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg">

            Back To Home

          </button>

        </a>


      </section>



    </div>

  );

}


export default About;