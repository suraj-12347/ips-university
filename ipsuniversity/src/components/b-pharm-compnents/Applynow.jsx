import { ArrowRight, GraduationCap, Phone, Mail } from "lucide-react";


export default function ApplyNow() {


  return (

<section
className="
py-14
relative
bg-cover
bg-center
overflow-hidden
mb-10
"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
}}
>


{/* Overlay */}

<div className="
absolute
inset-0
bg-green-900/80
">
</div>



<div className="
relative
max-w-7xl
mx-auto
px-6
lg:px-12
">


<div className="


p-10

flex
flex-col
lg:flex-row
items-center
justify-between
gap-10
">



{/* Content */}

<div className="
max-w-2xl
text-white
">


<div className="
flex
items-center
gap-3
mb-5
">

<div className="
w-14
h-14
rounded-full
bg-white/20
flex
items-center
justify-center
backdrop-blur
">

<GraduationCap size={30}/>

</div>


<h2 className="
text-4xl
font-black
">
Apply Now
</h2>

</div>




<p className="
text-gray-200
text-lg
leading-relaxed
">
Take the first step towards a successful career in pharmaceutical
sciences. Join our B.Pharm program and experience quality education,
advanced laboratories and industry-focused learning.
</p>



<div className="
flex
flex-wrap
gap-6
mt-6
text-sm
text-gray-200
">


<div className="
flex
items-center
gap-2
">

<Phone size={18}/>
+91 XXXXX XXXXX

</div>



<div className="
flex
items-center
gap-2
">

<Mail size={18}/>
admissions@university.edu

</div>


</div>


</div>





{/* Button */}

<div>

<button
className="
group
flex
items-center
gap-3
px-8
py-4
rounded-full
bg-white
text-[var(--forest)]
font-bold
text-lg
hover:bg-[var(--grass)]
hover:text-white
transition-all
duration-300
shadow-xl
"
>

Start Application

<ArrowRight
size={22}
className="
group-hover:translate-x-2
transition
"
/>

</button>


</div>



</div>


</div>


</section>

  )
}