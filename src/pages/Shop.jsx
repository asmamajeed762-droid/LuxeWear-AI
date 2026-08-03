import React, { useContext } from "react";
import { Link } from "react-router-dom";
import products from "../products";
import { CartContext } from "../CartContext";
const addToWishlist = (product) => {

  const oldWishlist = JSON.parse(
    localStorage.getItem("wishlist")
  ) || [];


  const alreadyExist = oldWishlist.find(
    (item) => item.id === product.id
  );


  if(!alreadyExist){

    localStorage.setItem(
      "wishlist",
      JSON.stringify([
        ...oldWishlist,
        product
      ])
    );

    alert("Added to Wishlist ❤️");

  } else {

    alert("Already in Wishlist");

  }

};

function Shop(){

  const {
    addToCart,
    addToWishlist
  } = useContext(CartContext);


  return(

    <div className="min-h-screen bg-gray-100">


      {/* Shop Header */}

      <section className="py-16 px-6 bg-[#081b33] text-white text-center">

        <h1 className="text-4xl font-bold">
          Explore Our Collection
        </h1>

        <p className="max-w-3xl mx-auto mt-4 text-gray-200">
          Discover premium fashion collections with elegant designs,
          high quality fabrics and modern styles for women, men and kids.
        </p>

      </section>



      {/* Products */}

      <section className="py-16 px-6">


        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">


          {products.map((product)=>(


            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >


              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />


              <div className="p-6">


                <p className="text-yellow-500 font-semibold">
                  {product.category}
                </p>


                <h3 className="text-xl font-bold text-[#081b33] mt-2">
                  {product.name}
                </h3>


                <p className="text-yellow-500 mt-2">
                  {"★".repeat(product.rating)}
                </p>


                <p className="font-bold mt-3">
                  Rs. {product.price}
                </p>



                <div className="flex flex-wrap gap-3 mt-5">


                  <button
                    onClick={()=>addToCart(product)}
                    className="bg-[#081b33] text-white px-4 py-2 rounded-full"
                  >
                    Add To Cart
                  </button>



            <button

onClick={() => addToWishlist(product)}

className="bg-red-500 text-white px-5 py-2 rounded-full font-bold"

>
❤️ Wishlist
</button>



                  <Link
                    to={`/product/${product.id}`}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-full"
                  >
                    View Details
                  </Link>


                </div>


              </div>


            </div>


          ))}


        </div>




        {/* Back Home Button */}


        <div className="text-center mt-12">


          <Link
            to="/"
            className="bg-[#081b33] text-white px-8 py-3 rounded-full font-semibold"
          >
            ← Back To Home
          </Link>


        </div>



      </section>


    </div>

  );

}


export default Shop;