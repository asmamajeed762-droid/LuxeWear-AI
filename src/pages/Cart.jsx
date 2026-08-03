import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";


function Cart(){

  const {
    cart,
    removeFromCart
  } = useContext(CartContext);



  const total = cart.reduce(
    (sum,item)=> sum + item.price,
    0
  );



  return(

    <div className="min-h-screen bg-gray-100 py-16 px-6">


      <h1 className="text-4xl font-bold text-center text-[#081b33]">
        Shopping Cart
      </h1>



      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-10">


      {
        cart.length === 0 ? (

          <div className="md:col-span-3 bg-white rounded-3xl shadow-lg p-10 text-center">

            <h2 className="text-2xl font-bold text-[#081b33]">
              Your Cart is Empty
            </h2>


            <p className="text-gray-600 mt-3">
              Add products from shop.
            </p>


            <Link
              to="/shop"
              className="inline-block mt-6 bg-[#081b33] text-white px-8 py-3 rounded-full"
            >
              Go To Shop
            </Link>

          </div>


        ) : (


          cart.map((product)=>(


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


                <h3 className="text-xl font-bold text-[#081b33]">
                  {product.name}
                </h3>


                <p className="text-gray-600 mt-2">
                  {product.category}
                </p>


                <p className="font-bold mt-3">
                  Rs. {product.price}
                </p>



                <button
                  onClick={()=>removeFromCart(product.id)}
                  className="mt-5 bg-red-500 text-white px-5 py-2 rounded-full"
                >
                  Remove
                </button>


              </div>


            </div>


          ))


        )

      }


      </div>



      {
        cart.length > 0 && (

          <div className="text-center mt-10">

            <h2 className="text-2xl font-bold text-[#081b33]">
              Total: Rs. {total}
            </h2>

          </div>

        )
      }



      <div className="text-center mt-12">

        <Link
          to="/"
          className="bg-[#081b33] text-white px-8 py-3 rounded-full"
        >
          ← Back To Home
        </Link>

      </div>



    </div>

  );

}


export default Cart;