import React from "react";
import { Link } from "react-router-dom";


function Profile(){

  return(

    <div className="min-h-screen bg-gray-100 py-16 px-6">


      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">


        {/* Profile Header */}

        <div className="text-center">


          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Profile"
            className="w-36 h-36 rounded-full mx-auto object-cover shadow-lg"
          />



          <h1 className="text-4xl font-bold text-[#081b33] mt-6">
            My Profile
          </h1>



          <p className="mt-4 text-gray-600 text-lg leading-8 max-w-3xl mx-auto">
            Welcome to your LuxeWear-AI profile. Manage your personal
            information, explore your shopping preferences, and enjoy a
            personalized fashion experience. Your profile helps us
            provide better services and a smoother online shopping
            journey.
          </p>


        </div>





        {/* Information Cards */}


        <div className="grid md:grid-cols-3 gap-6 mt-12">



          <div className="bg-blue-100 rounded-2xl p-6 text-center">

            <h3 className="text-xl font-bold text-[#081b33]">
              Account
            </h3>

            <p className="mt-2 text-gray-600">
              Manage your account details.
            </p>

          </div>





          <Link
            to="/orders"
            className="bg-pink-100 rounded-2xl p-6 text-center block"
          >

            <h3 className="text-xl font-bold text-[#081b33]">
              Orders
            </h3>

            <p className="mt-2 text-gray-600">
              View your shopping history.
            </p>

          </Link>





          <div className="bg-yellow-100 rounded-2xl p-6 text-center">

            <h3 className="text-xl font-bold text-[#081b33]">
              Wishlist
            </h3>

            <p className="mt-2 text-gray-600">
              Save your favorite fashion items.
            </p>

          </div>



        </div>





        {/* Back Button */}


        <div className="text-center mt-12">


          <Link
            to="/"
            className="bg-[#081b33] text-white px-10 py-3 rounded-full font-bold"
          >
            ← Back To Home
          </Link>


        </div>



      </div>


    </div>

  );

}


export default Profile;