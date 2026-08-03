import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function AIStyle(){

return(

<div className="min-h-screen bg-gray-100 px-6 py-16">


{/* Hero */}

<section className="max-w-7xl mx-auto bg-gradient-to-br from-[#081b33] via-[#132f52] to-black rounded-3xl p-10 md:p-16 text-white grid md:grid-cols-2 gap-10 items-center">


<motion.div

initial={{opacity:0,x:-50}}

animate={{opacity:1,x:0}}

transition={{duration:1}}

>


<h1 className="text-5xl font-extrabold">

AI Style Assistant ✨

</h1>


<p className="mt-6 text-lg leading-9 text-gray-200">

Discover your perfect fashion style with LuxeWear-AI.
Our smart fashion experience helps you explore outfit ideas,
modern trends, and personalized looks designed according to
your personality and lifestyle.

</p>


<Link

to="/"

className="inline-block mt-8 bg-yellow-500 text-[#081b33] px-10 py-3 rounded-full font-bold shadow-lg"

>

Back To Home

</Link>


</motion.div>




<motion.img

initial={{opacity:0,scale:0.7}}

animate={{opacity:1,scale:1}}

transition={{duration:1}}

src="https://images.unsplash.com/photo-1483985988355-763728e1935b"

alt="AI Fashion"

className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"

/>


</section>





{/* Features */}


<section className="max-w-7xl mx-auto py-20">


<motion.h2

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

className="text-4xl font-bold text-center text-[#081b33]"

>

Find Your Perfect Style

</motion.h2>





<div className="grid md:grid-cols-3 gap-8 mt-12">


{

[
["Casual Style","Comfortable daily outfits with modern fashion trends."],
["Luxury Style","Elegant premium looks for special occasions."],
["Smart Style","AI recommended outfits matching your personality."]
]

.map((item,index)=>(


<motion.div

key={index}

whileHover={{scale:1.05,y:-10}}

className="bg-white rounded-3xl shadow-xl p-8 text-center"

>


<h3 className="text-2xl font-bold text-[#081b33]">

{item[0]}

</h3>


<p className="mt-4 text-gray-600 leading-7">

{item[1]}

</p>


</motion.div>


))


}


</div>


</section>



</div>

)

}


export default AIStyle;