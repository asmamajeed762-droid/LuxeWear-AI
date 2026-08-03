function Women(){

  const products = [
    {
      name: "Elegant Party Dress",
      price: "Rs 5,999",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8"
    },
    {
      name: "Luxury Traditional Wear",
      price: "Rs 7,999",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
    },
    {
      name: "Modern Fashion Outfit",
      price: "Rs 4,999",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b"
    }
  ];


  return(
    <div className="bg-gray-100 min-h-screen">


      <section className="bg-[#081b33] text-white py-20 text-center px-6">

        <h1 className="text-5xl font-bold">
          Women's Collection
        </h1>

        <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
          Explore elegant women's fashion with premium designs,
          modern trends and AI-powered style inspiration.
        </p>

      </section>



      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-8">


        {products.map((item,index)=>(

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >

            <img
              src={item.image}
              alt={item.name}
              className="h-80 w-full object-cover"
            />


            <div className="p-6">

              <h2 className="text-2xl font-bold text-[#081b33]">
                {item.name}
              </h2>

              <p className="mt-3 text-yellow-600 font-bold">
                {item.price}
              </p>


              <button className="mt-5 bg-[#081b33] text-white px-6 py-3 rounded-full">
                View Collection
              </button>

            </div>


          </div>

        ))}


      </section>


    </div>
  );

}


export default Women;