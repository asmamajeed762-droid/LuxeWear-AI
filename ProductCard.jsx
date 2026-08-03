function ProductCard({ product }){

  return(

    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">


      {/* Product Image */}

      <img
        src={product.image}
        alt={product.name}
        className="h-72 w-full object-cover"
      />



      {/* Product Info */}

      <div className="p-6">


        <p className="text-sm text-yellow-500 font-semibold">
          {product.category}
        </p>


        <h2 className="text-2xl font-bold text-[#081b33] mt-2">
          {product.name}
        </h2>


        <p className="text-gray-600 mt-3 leading-6">
          {product.description}
        </p>


        <div className="flex items-center justify-between mt-5">


          <h3 className="text-xl font-bold text-[#081b33]">
            Rs. {product.price}
          </h3>


          <button className="bg-[#081b33] text-white px-5 py-2 rounded-full">
            View Product
          </button>


        </div>


      </div>


    </div>

  );

}


export default ProductCard;