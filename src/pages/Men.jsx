function Men(){

  return(

    <div className="min-h-screen bg-gray-100">


      {/* Hero Section */}

      <section className="bg-[#081b33] text-white py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">


          <span className="text-yellow-400 font-semibold tracking-widest uppercase">
            Men's Luxury Fashion
          </span>


          <h1 className="text-5xl md:text-6xl font-extrabold mt-5">
            Premium Men's Collection
          </h1>


          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg leading-8">
            Discover LuxeWear-AI men's collection featuring elegant,
            comfortable and modern fashion designs. From classic formal
            outfits to stylish casual looks, our collection is created
            for men who want confidence, quality and a premium style
            experience.
          </p>


          <button className="mt-8 bg-yellow-400 text-black px-10 py-3 rounded-full font-bold">
            Explore Collection
          </button>


        </div>

      </section>



      {/* Collection Section */}

      <section className="max-w-6xl mx-auto py-16 px-6">


        <div className="bg-white rounded-3xl shadow-xl p-10">


          <h2 className="text-4xl font-bold text-center text-[#081b33]">
            Modern Style For Every Occasion
          </h2>


          <p className="mt-5 text-center text-gray-600 leading-8 max-w-4xl mx-auto">
            Whether you are preparing for a business meeting, a special
            event or a casual day out, LuxeWear-AI provides fashion
            choices that match your personality. Experience a perfect
            combination of traditional elegance and modern trends.
          </p>


        </div>


      </section>



      {/* Categories */}

      <section className="max-w-6xl mx-auto pb-16 px-6 grid md:grid-cols-3 gap-8">


        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h3 className="text-2xl font-bold text-[#081b33]">
            Formal Wear
          </h3>

          <p className="mt-3 text-gray-600">
            Elegant outfits designed for professional and special occasions.
          </p>

        </div>



        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h3 className="text-2xl font-bold text-[#081b33]">
            Casual Wear
          </h3>

          <p className="mt-3 text-gray-600">
            Comfortable everyday styles with modern fashion trends.
          </p>

        </div>



        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h3 className="text-2xl font-bold text-[#081b33]">
            AI Style Guide
          </h3>

          <p className="mt-3 text-gray-600">
            Get smart fashion inspiration according to your preferences.
          </p>

        </div>


      </section>


    </div>

  );

}


export default Men;