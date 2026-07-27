import { Briefcase, CheckCircle } from "lucide-react";

export default function CareerOpportunities() {

  const careers = [
    "Pharmaceutical Industry",
    "Clinical Research",
    "Hospital Pharmacy",
    "Drug Regulatory Affairs",
    "Quality Control & Quality Assurance",
    "Medical Writing",
    "Pharmacovigilance",
    "Government Healthcare Sector"
  ];


  return (

    <section
  className="
  py-16
  bg-cover
  bg-center
  relative
  "
  style={{
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1683887034146-c79058dbdcb1?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
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


{/* Heading */}

<div className="mb-10">

<h2 className="
flex
items-center
gap-3
text-4xl
font-black
text-white
">

{/* <Briefcase
size={34}
className="text-white"
/> */}

Career Opportunities

</h2>
<p className="
text-white
text-lg
leading-relaxed
mt-8
">
B.Pharm graduates have diverse career opportunities in
healthcare, pharmaceutical industries,<br /> research organizations
and regulatory sectors.
</p>


</div>



{/* Glass Card */}

<div className="
bg-transparent

rounded-3xl
p-8



">





<div className="
grid
grid-cols-1
md:grid-cols-2
gap-5
">


{
careers.map((career,index)=>(

<div
key={index}
className="
flex
items-center
gap-3
p-4
rounded-xl

border
border-white/30
hover:bg-white/40
transition
"
>

<CheckCircle
size={22}
className="text-white"
/>

<span className="
font-medium
text-white
">
{career}
</span>

</div>

))
}


</div>


</div>


</div>


</section>

  )
}