import { BrowserRouter, Routes, Route } from "react-router-dom";


// Components

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Pages

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NewArrivals from "./pages/NewArrivals";
import About from "./pages/About";

import ProductDetails from "./pages/ProductDetails";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";

import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

import AIStyle from "./pages/AIStyle";
import Search from "./pages/Search";
import Reviews from "./pages/Reviews";



function App(){

  return(

    <BrowserRouter>


      <Navbar />


      <Routes>


        {/* Main Pages */}

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/shop"
          element={<Shop />}
        />


        <Route
          path="/new-arrivals"
          element={<NewArrivals />}
        />


        <Route
          path="/about"
          element={<About />}
        />





        {/* Products */}

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />





        {/* Shopping */}

        <Route
          path="/cart"
          element={<Cart />}
        />


        <Route
          path="/wishlist"
          element={<Wishlist />}
        />


        <Route
          path="/checkout"
          element={<Checkout />}
        />


        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />


        <Route
          path="/orders"
          element={<Orders />}
        />





        {/* User */}

        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/signup"
          element={<Signup />}
        />


        <Route
          path="/profile"
          element={<Profile />}
        />


        <Route
          path="/dashboard"
          element={<Dashboard />}
        />





        {/* Blog */}

        <Route
          path="/blog"
          element={<Blog />}
        />


        <Route
          path="/blog/:id"
          element={<BlogDetails />}
        />





        {/* Other */}

        <Route
          path="/faq"
          element={<FAQ />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />


        <Route
          path="/ai-style"
          element={<AIStyle />}
        />


        <Route
          path="/search"
          element={<Search />}
        />


        <Route
          path="/reviews"
          element={<Reviews />}
        />


      </Routes>



      <Footer />


    </BrowserRouter>

  );

}


export default App;