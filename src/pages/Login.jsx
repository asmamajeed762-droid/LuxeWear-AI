import React from "react";
import { Link } from "react-router-dom";


function Login(){

  return(

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">


      <div className="bg-white max-w-md w-full rounded-3xl shadow-xl p-8">


        <h1 className="text-4xl font-bold text-center text-[#081b33]">
          Welcome Back
        </h1>


        <p className="text-center text-gray-600 mt-4">
          Login to your LuxeWear-AI account and continue exploring
          luxury fashion collections.
        </p>



        <input
          type="email"
          placeholder="Email Address"
          className="w-full mt-6 p-3 border rounded-xl"
        />



        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 p-3 border rounded-xl"
        />



        <button
          className="w-full mt-6 bg-red-500 text-white py-3 rounded-full font-bold"
        >
          LOGIN
        </button>



        <Link
          to="/"
          className="block text-center mt-6 bg-[#081b33] text-white py-3 rounded-full font-bold"
        >
          ← Back To Home
        </Link>


      </div>


    </div>

  );

}


export default Login;