import { FlaskConical, Microscope, TestTube2 } from "lucide-react";

export default function Labs() {


  const labs = [
    {
      title: "Pharmaceutics Lab",
      desc: "Equipped with modern instruments for formulation development, dosage form studies and practical training.",
      icon: FlaskConical,
      image:
        "https://i.pinimg.com/control1/1200x/7a/13/ba/7a13badaf540d295933cac63d51e825a.jpg"
    },
    {
      title: "Pharmacology Lab",
      desc: "Provides hands-on experience in drug action studies, experiments and research activities.",
      icon: Microscope,
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Chemistry Lab",
      desc: "Advanced laboratory facilities for chemical analysis and pharmaceutical research.",
      icon: TestTube2,
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
    }
  ];


  return (

<section className="py-16 " id="labs">

<div className="max-w-7xl mx-auto px-6 lg:px-12">


{/* Heading */}

<div className="mb-16 text-center">

  <h2
    className="
    text-4xl
    font-black
    text-[var(--forest)]
    flex
    justify-center
    items-center
    gap-3
    "
  >
    {/* <FlaskConical size={36} /> */}

    Laboratories
  </h2>

  <p
    className="
    mt-5
    text-gray-600
    max-w-3xl
    mx-auto
    leading-relaxed
    "
  >
    Our advanced laboratories provide students with practical exposure,
    research opportunities and industry-oriented learning.
  </p>

</div>




{/* Labs */}

<div className="
grid
grid-cols-1
md:grid-cols-3
gap-8
">


{
labs.map((lab,index)=>{

const Icon = lab.icon;

return (

<div
key={index}
className="
relative
h-[420px]
rounded-[35px]
overflow-hidden
group
shadow-xl
"
>


<img
src={lab.image}
alt={lab.title}
className="
absolute
inset-0
w-full
h-full
object-cover
transition
duration-700
group-hover:scale-110
"
/>



{/* Overlay */}

<div className="
absolute
inset-0
bg-gradient-to-t
from-black/80
via-black/30
to-transparent
">
</div>




{/* Content */}

<div className="
absolute
bottom-0
p-7
text-white
"
>


<div className="
w-12
h-12
rounded-full
bg-white/20
backdrop-blur-md
flex
items-center
justify-center
mb-4
">

<Icon size={24}/>

</div>


<h3 className="
text-2xl
font-bold
mb-3
">
{lab.title}
</h3>


<p className="
text-sm
text-gray-200
leading-relaxed
">
{lab.desc}
</p>


</div>



</div>

)

})

}


</div>


</div>

</section>

  )
}