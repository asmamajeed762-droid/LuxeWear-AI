import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products";


function ProductDetails(){

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );


  if(!product){

    return(
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-[#081b33]">
          Product Not Found
        </h2>
      </div>
    );

  }



  return(

    <div className="min-h-screen bg-gray-100 py-16 px-6">


      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">


        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />


        <div className="p-8">


          <p className="text-yellow-500 font-semibold">
            {product.category}
          </p>


          <h1 className="text-4xl font-bold text-[#081b33] mt-3">
            {product.name}
          </h1>


          <p className="text-yellow-500 mt-4 text-xl">
            {"★".repeat(product.rating)}
          </p>


          <p className="text-gray-600 mt-5">
            Premium quality fashion product designed with
            elegant style, comfort and modern trends.
          </p>


          <h2 className="text-2xl font-bold mt-6">
            Rs. {product.price}
          </h2>


          <button className="mt-6 bg-[#081b33] text-white px-8 py-3 rounded-full">
            Add To Cart
          </button>


          <br />


          <Link
            to="/shop"
            className="inline-block mt-6 text-[#081b33] font-semibold"
          >
            ← Back To Shop
          </Link>


        </div>


      </div>


    </div>

  );

}


export default ProductDetails;