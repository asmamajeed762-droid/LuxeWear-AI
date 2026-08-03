import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";


function Sale(){

const saleProducts = [

{
image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
name:"Luxury Black Dress",
price:"90"
},

{
image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c",
name:"Designer Party Wear",
price:"120"
},

{
image:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
name:"Premium Suit Sale",
price:"150"
},

{
image:"https://images.unsplash.com/photo-1483985988355-763728e1935b",
name:"Modern Fashion",
price:"100"
},

{
image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
name:"Classic Outfit",
price:"130"
},

{
image:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
name:"Exclusive Dress",
price:"110"
}

]


return(

<div>

<Navbar />


{/* Sale Hero */}

<section className="pt-32 bg-black text-white py-24 text-center">


<h1 className="text-6xl font-serif">
Mega Sale
</h1>


<p className="text-yellow-500 text-2xl mt-5">
Up To 50% OFF
</p>


<p className="text-gray-300 mt-4">
Grab your favorite luxury fashion pieces
</p>


</section>




{/* Products */}


<section className="py-20 bg-gray-50">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-4xl font-serif text-center mb-12">
Sale Collection
</h2>



<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


{
saleProducts.map((item,index)=>(

<ProductCard

key={index}

image={item.image}

name={item.name}

price={item.price}

/>

))

}


</div>


</div>


</section>



</div>

)

}


export default Sale;