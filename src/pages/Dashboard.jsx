import React from "react";
import { Link } from "react-router-dom";


function Dashboard(){

  return(

    <div className="min-h-screen bg-gray-100 py-16 px-6">


      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center">


        <h1 className="text-5xl font-bold text-[#081b33]">
          Dashboard
        </h1>


        <p className="mt-6 text-gray-600 text-lg leading-8">
          Welcome to your LuxeWear-AI dashboard. Here you can manage
          your profile, explore shopping activities, view orders, and
          enjoy a personalized fashion experience. We are building a
          simple and modern platform to make your online shopping
          journey easier.
        </p>



        <div className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="bg-blue-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              My Profile
            </h3>
            <p className="mt-2 text-gray-600">
              Manage your account details.
            </p>
          </div>



          <div className="bg-green-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              Orders
            </h3>
            <p className="mt-2 text-gray-600">
              Check your latest orders.
            </p>
          </div>



          <div className="bg-yellow-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              Wishlist
            </h3>
            <p className="mt-2 text-gray-600">
              Save your favorite items.
            </p>
          </div>


        </div>



        <Link
          to="/"
          className="inline-block mt-10 bg-[#081b33] text-white px-8 py-3 rounded-full font-bold"
        >
          ← Back To Home
        </Link>


      </div>


    </div>

  );

}


export default Dashboard;