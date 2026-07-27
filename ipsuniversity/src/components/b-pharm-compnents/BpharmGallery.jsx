import React, { useState } from "react";
import GalleryPopup from "../Education-components/GalleryPopup";
import { CalendarDays, MapPin } from "lucide-react";


const events = [
  {
    title: "Pharma Innovation Summit",
    date: "15 March 2026",
    place: "University Auditorium",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Industrial Visit Program",
    date: "10 April 2026",
    place: "Pharmaceutical Industry",
    image:
      "https://i.pinimg.com/control1/1200x/3f/b9/72/3fb97264e0c85024108afeb78301f75b.jpg"
  },
  {
    title: "Research & Poster Presentation",
    date: "22 May 2026",
    place: "Research Center",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
  }
];


const gallery = [
  {
    src:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    title:"Advanced Laboratory",
    subImages:[
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    src:"https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80",
    title:"Student Activities",
    subImages:[
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
       "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"
    ]
  },


  {
    src:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80",
    title:"Campus Events",
    subImages:[
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80"
    ]
  },


  {
    src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
    title:"Research Work",
    subImages:[
      "https://images.unsplash.com/photo-1581093458791-9d42e3c0c2c1?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];



export default function EventsGallery(){


const [popup,setPopup]=useState(false);
const [images,setImages]=useState([]);
const [currentIndex, setCurrentIndex] = useState(0);



const openGallery=(imgs)=>{
  setImages(imgs);
  setCurrentIndex(0);
  setPopup(true);
}



return (

<section className="
py-20
bg-[#F8FCF8]
">


<div className="
max-w-7xl
mx-auto
px-6
lg:px-12
">


{/* Heading */}

<div className="mb-14">

<p className="
uppercase
tracking-[4px]
text-sm
text-[var(--grass)]
font-semibold
">
Campus Life
</p>


<h2 className="
text-4xl
font-black
text-[var(--forest)]
mt-3
">
Events & Gallery
</h2>


<p className="
text-gray-600
mt-4
max-w-2xl
">
Explore memorable moments, academic events, research activities
and vibrant student life at the School of Pharmacy.
</p>

</div>





{/* Events */}

<div className="
grid
md:grid-cols-3
gap-8
mb-20
">


{
events.map((event,index)=>(

<div
key={index}
className="
relative
h-[350px]
rounded-[35px]
overflow-hidden
group
"
>


<img
src={event.image}
className="
absolute
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"
/>


<div className="
absolute
inset-0
bg-gradient-to-t
from-black/80
to-transparent
"/>


<div className="
absolute
bottom-0
p-7
text-white
">

<h3 className="
text-2xl
font-bold
">
{event.title}
</h3>


<div className="mt-3 text-sm space-y-2">

<p className="flex gap-2 items-center">
<CalendarDays size={16}/>
{event.date}
</p>


<p className="flex gap-2 items-center">
<MapPin size={16}/>
{event.place}
</p>

</div>


</div>


</div>

))

}


</div>





{/* Gallery */}

<div className="
grid
grid-cols-2
md:grid-cols-4
gap-4
">


{
gallery.map((item,index)=>(


<div
key={index}
onClick={()=>openGallery(item.subImages)}
className="
relative
h-[250px]
overflow-hidden
rounded-3xl
cursor-pointer
group
"
>


<img
src={item.src}
className="
w-full
h-full
object-cover
group-hover:scale-125
transition
duration-700
"
/>


<div className="
absolute
inset-0
bg-black/40
opacity-0
group-hover:opacity-100
transition
flex
items-end
p-5
">

<h3 className="
text-white
font-semibold
text-lg
">
{item.title}
</h3>


</div>


</div>


))

}


</div>


</div>


<GalleryPopup
  open={popup}
  onClose={()=>setPopup(false)}
  images={images}
  currentIndex={currentIndex}
  setCurrentIndex={setCurrentIndex}
/>


</section>

)

}