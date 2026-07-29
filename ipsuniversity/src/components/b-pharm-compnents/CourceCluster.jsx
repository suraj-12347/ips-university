import { useState } from "react";
import { curriculumTabs } from "./BpharmData";
import { FileText, Plus, Minus } from "lucide-react";

export default function Curriculum() {

  const [active, setActive] = useState(curriculumTabs[0]);
  const [open, setOpen] = useState(false);


  return (

<section className=" " id="curriculum">

<div className="max-w-7xl mx-auto px-6 lg:px-12">


{/* Heading */}

{/* Heading */}

<div className=" flex items-center justify-start gap-3 border-b border-[var(--forest)]/30">
<button
onClick={()=>setOpen(!open)}
className="

text-[var(--forest)]
flex
items-center
justify-center
hover:scale-110
transition
mb-4

"
>
{
open 
?
<Minus size={32}/>
:
<Plus size={32}/>
}

<h2 className="
text-3xl
text-[var(--forest)]
font-black
ml-3
">
Course Cluster
</h2>
</button>



{/* Toggle Button */}



</div>




{/* Content */}

{
open && (

<div className="
bg-white
rounded-3xl
p-5
shadow-sm
border
border-gray-100
">


{/* Tabs */}

<div className="
grid
grid-cols-2
md:grid-cols-4
lg:grid-cols-8
gap-3
">


{
curriculumTabs.map((tab)=>(

<button

key={tab.id}

onClick={()=>setActive(tab)}

className={`

px-2
py-1
rounded-xl
text-sm
font-semibold
border
transition-all

${
active.id===tab.id

?

"bg-[var(--forest)] text-white border-[var(--forest)]"

:

"bg-white text-gray-700 border-gray-200 hover:border-[var(--grass)]"

}

`}

>

{tab.title}

</button>

))

}

</div>



{/* PDF */}

<div className="
mt-8
rounded-3xl
overflow-hidden
border
border-gray-200
bg-white
">


<div className="
flex
items-center
gap-3
px-5
py-4
bg-[var(--forest)]
text-white
">


<FileText size={20}/>

<h3 className="font-semibold">
{active.title}
</h3>

</div>



<iframe

src={`${active.pdf}#toolbar=1`}

className="
w-full
h-[700px]
"

title="Curriculum PDF"

/>


</div>


</div>

)

}


</div>



</section>

)

}