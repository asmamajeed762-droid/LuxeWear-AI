import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer className="bg-[var(--primary)] text-white mt-20">

      {/* Main Footer */}

      <div className="container py-16 grid md:grid-cols-4 gap-10">


        {/* Brand */}

        <div>

          <h2 className="text-3xl font-extrabold mb-5">
            LUXE
            <span className="text-[var(--gold)]">
              WEAR-AI
            </span>
          </h2>


          <p className="text-gray-300 leading-7">

            LuxeWear-AI is a modern luxury fashion platform that combines
            premium clothing with artificial intelligence to deliver a smart,
            personalized and elegant shopping experience.

          </p>


          <p className="text-gray-300 leading-7 mt-4">

            Discover stylish collections for women, men and kids with premium
            quality, modern designs and AI-powered fashion recommendations.

          </p>



          {/* Social */}

          <div className="flex gap-3 mt-6">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[var(--gold)] text-[var(--primary)] flex items-center justify-center font-bold hover:scale-110 transition"
            >
              f
            </a>


            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[var(--gold)] text-[var(--primary)] flex items-center justify-center font-bold hover:scale-110 transition"
            >
              in
            </a>


            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[var(--gold)] text-[var(--primary)] flex items-center justify-center font-bold hover:scale-110 transition"
            >
              ◎
            </a>

          </div>

        </div>





        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold text-[var(--gold)] mb-5">
            Quick Links
          </h3>


          <div className="flex flex-col gap-3 text-gray-300">


            <Link to="/" className="hover:text-[var(--gold)] transition">
              Home
            </Link>


            <Link to="/shop" className="hover:text-[var(--gold)] transition">
              Shop
            </Link>


            <Link to="/women" className="hover:text-[var(--gold)] transition">
              Women Collection
            </Link>


            <Link to="/men" className="hover:text-[var(--gold)] transition">
              Men Collection
            </Link>


            <Link to="/kids" className="hover:text-[var(--gold)] transition">
              Kids Collection
            </Link>


            <Link to="/about" className="hover:text-[var(--gold)] transition">
              About Us
            </Link>


          </div>

        </div>





        {/* Customer Care */}

        <div>

          <h3 className="text-xl font-bold text-[var(--gold)] mb-5">
            Customer Care
          </h3>


          <div className="flex flex-col gap-3 text-gray-300">


            <Link to="/faq" className="hover:text-[var(--gold)] transition">
              FAQ
            </Link>


            <Link to="/contact" className="hover:text-[var(--gold)] transition">
              Contact Us
            </Link>


            <Link to="/shipping" className="hover:text-[var(--gold)] transition">
              Shipping & Delivery
            </Link>


            <Link to="/returns" className="hover:text-[var(--gold)] transition">
              Returns & Exchange
            </Link>


            <Link to="/privacy" className="hover:text-[var(--gold)] transition">
              Privacy Policy
            </Link>


          </div>


          <p className="text-gray-400 text-sm mt-5 leading-6">

            Our support team is always ready to help you with your fashion
            journey.

          </p>


        </div>





        {/* Contact + Newsletter */}

        <div>


          <h3 className="text-xl font-bold text-[var(--gold)] mb-5">
            Stay Connected
          </h3>



          <p className="text-gray-300 leading-7">

            Get latest fashion updates, new arrivals and exclusive offers
            directly from LuxeWear-AI.

          </p>



          <div className="mt-5 space-y-3 text-gray-300 text-sm">

            <p>
              📍 Lahore, Punjab, Pakistan
            </p>

            <p>
              📞 +92 300 1234567
            </p>

            <p>
              ✉ support@luxewear-ai.com
            </p>

          </div>




          <div className="mt-6">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-black outline-none"
            />


            <button className="w-full mt-3 bg-[var(--gold)] text-[var(--primary)] py-3 rounded-lg font-bold hover:bg-white transition">

              Subscribe

            </button>


          </div>


        </div>


      </div>





      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div className="container py-6 text-center">


          <p className="text-gray-400 text-sm">

            © {new Date().getFullYear()} LuxeWear-AI. All Rights Reserved.

          </p>


          <p className="text-gray-500 text-xs mt-2">

            Powered by Artificial Intelligence | Crafted for Luxury Fashion

          </p>


        </div>


      </div>


    </footer>

  )

}


export default Footer;