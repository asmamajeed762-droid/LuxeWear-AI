import React from "react";
import { Link } from "react-router-dom";


function Orders(){

  return(

    <div className="min-h-screen bg-gray-100 py-16 px-6">


      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center">


        <h1 className="text-4xl font-bold text-[#081b33]">
          My Orders
        </h1>


        <p className="mt-5 text-gray-600 text-lg leading-8">
          View your latest orders and track your shopping activity
          with LuxeWear-AI. Your order history will appear here after
          completing your purchases.
        </p>



        <div className="mt-10 bg-gray-100 rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-[#081b33]">
            No Orders Yet
          </h2>


          <p className="mt-3 text-gray-600">
            Start shopping and your orders will appear here.
          </p>


        </div>




        <Link
          to="/"
          className="inline-block mt-10 bg-[#081b33] text-white px-8 py-3 rounded-full font-bold"
        >
          ← Back To Home
        </Link>
<Link
  to="/order-success"
  className="bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg"
>
  Complete Order
</Link>

      </div>


    </div>

  );

}


export default Orders;