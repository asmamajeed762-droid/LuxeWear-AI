export default function Categories(){

const categories=[
"Women Fashion",
"Men Collection",
"Kids Wear",
"Luxury Collection"
];


return(

<div className="py-16 px-10">

<h2 className="text-3xl font-bold text-center mb-8">
Explore Categories
</h2>


<div className="grid md:grid-cols-4 gap-6">

{
categories.map(item=>(

<div className="
h-40 bg-black text-white
rounded-xl flex items-center
justify-center text-xl font-bold
hover:bg-yellow-500 hover:text-black
transition
">

{item}

</div>

))
}

</div>

</div>

)

}