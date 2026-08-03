import { useState } from "react";

function FAQ(){

  const faqs = [
    {
      q:"What is LuxeWear-AI?",
      a:"LuxeWear-AI is a modern fashion platform that combines luxury clothing with artificial intelligence for a smarter shopping experience."
    },
    {
      q:"How does AI Stylist work?",
      a:"AI Stylist suggests outfits according to your style, occasion and fashion preferences."
    },
    {
      q:"Do you provide delivery across Pakistan?",
      a:"Yes, LuxeWear-AI provides secure and reliable delivery services across Pakistan."
    },
    {
      q:"Can I return my order?",
      a:"Yes, customers can request returns and exchanges according to our return policy."
    },
    {
      q:"Are products premium quality?",
      a:"Yes, every collection is carefully selected to provide elegant designs and premium quality."
    }
  ];


  const [open,setOpen] = useState(null);


  return(
    <>

      <section className="pt-28 pb-20 bg-gradient-to-r from-[#081b33] to-[#112b4d] text-white text-center">

        <h1 className="text-5xl font-bold">
          Frequently Asked
          <span className="text-yellow-400">
            {" "}Questions
          </span>
        </h1>

        <p className="mt-5 text-gray-300">
          Find answers about shopping, AI styling and LuxeWear services.
        </p>

      </section>



      <section className="py-20 bg-gray-50">

        <div className="max-w-4xl mx-auto px-6 space-y-5">


          {faqs.map((item,index)=>(

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md"
            >

              <button
                onClick={()=>setOpen(open===index ? null : index)}
                className="w-full flex justify-between p-6 text-left font-bold text-[#081b33]"
              >

                {item.q}

                <span className="text-yellow-500 text-xl">
                  {open===index ? "-" : "+"}
                </span>

              </button>


              {open===index && (

                <p className="px-6 pb-6 text-gray-600 leading-7">
                  {item.a}
                </p>

              )}

            </div>

          ))}


        </div>

      </section>


    </>
  );

}


export default FAQ;