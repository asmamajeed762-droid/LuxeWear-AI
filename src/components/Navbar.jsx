import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Navbar(){

  const [open,setOpen] = useState(false);


  const links = [
    {name:"Home", path:"/"},
    {name:"Shop", path:"/shop"},
    {name:"New Arrivals", path:"/new-arrivals"},
    {name:"AI Style", path:"/ai-style"},
    {name:"Search", path:"/search"},
    {name:"Wishlist", path:"/wishlist"},
    {name:"Cart", path:"/cart"},
    {name:"Profile", path:"/profile"},
  ];


  return (

    <nav className="bg-[#081b33] text-white sticky top-0 z-50 shadow-xl">


      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        <Link
          to="/"
          className="text-3xl font-bold text-yellow-400"
        >
          LuxeWear-AI
        </Link>





        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-5 text-sm font-semibold">


          {
            links.map((item,index)=>(

              <Link

                key={index}

                to={item.path}

                className="hover:text-yellow-400 transition"

              >

                {item.name}

              </Link>

            ))
          }



          <Link

            to="/login"

            className="bg-yellow-500 text-[#081b33] px-6 py-2 rounded-full font-bold"

          >

            Login

          </Link>


        </div>





        {/* Mobile Button */}

        <button

          onClick={()=>setOpen(!open)}

          className="lg:hidden text-3xl"

        >

          ☰

        </button>


      </div>





      {/* Mobile Menu */}


      {
        open && (

          <motion.div

            initial={{opacity:0,y:-20}}

            animate={{opacity:1,y:0}}

            className="lg:hidden bg-[#102947] px-6 py-6 space-y-4"

          >


            {
              links.map((item,index)=>(

                <Link

                  key={index}

                  to={item.path}

                  onClick={()=>setOpen(false)}

                  className="block hover:text-yellow-400"

                >

                  {item.name}

                </Link>

              ))
            }



            <Link

              to="/login"

              className="block text-yellow-400 font-bold"

            >

              Login

            </Link>


          </motion.div>

        )
      }



    </nav>

  );

}


export default Navbar;