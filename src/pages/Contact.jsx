function Contact(){

  return(

    <div className="min-h-screen bg-gray-100 py-16 px-6">


      <section className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">


        {/* Image */}

        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
          alt="Fashion Contact"
          className="w-full h-80 object-cover"
        />



        <div className="p-10">


          <h1 className="text-4xl font-bold text-center text-[#081b33]">
            Contact LuxeWear-AI
          </h1>



          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">

            Have questions about our latest fashion collections?
            Contact us for product details, orders and customer support.
            We are always happy to help you.

          </p>




          <div className="grid md:grid-cols-2 gap-10 mt-10">



            {/* Contact Info */}

            <div>


              <h2 className="text-2xl font-bold text-[#081b33]">
                Get In Touch
              </h2>


              <p className="mt-5 text-gray-700">
                📧 Email: support@luxewearai.com
              </p>


              <p className="mt-3 text-gray-700">
                📞 Phone: +92 300 1234567
              </p>


              <p className="mt-3 text-gray-700">
                📍 Address: Lahore, Pakistan
              </p>



              <p className="mt-5 text-gray-600">

                Visit our online store and explore premium
                women's, men's and kids fashion collections.

              </p>


            </div>





            {/* Form */}

            <div>


              <h2 className="text-2xl font-bold text-[#081b33]">
                Send Message
              </h2>



              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-5 p-3 border rounded-xl"
              />


              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-4 p-3 border rounded-xl"
              />


              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full mt-4 p-3 border rounded-xl"
              ></textarea>



              <button className="mt-5 bg-[#081b33] text-white px-6 py-3 rounded-full">

                Send Message

              </button>



            </div>


          </div>




          {/* Back Button */}

          <div className="text-center mt-10">


            <button
              onClick={() => window.history.back()}
              className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold"
            >

              ← Back

            </button>


          </div>


        </div>


      </section>


    </div>

  );

}


export default Contact;