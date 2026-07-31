import { useState } from "react";
import { curriculumTabs } from "./BpharmData";
import { FileText, Plus, Minus ,FlaskConical} from "lucide-react";

export default function Curriculum() {

  const [active, setActive] = useState(curriculumTabs[0]);
  const [open, setOpen] = useState(false);


  return (

<section className="mb-20 " id="curriculum">

<div className="max-w-7xl mx-auto px-6 lg:px-12 mt-4">


{/* Heading */}

{/* Heading */}

<div className="bg-white rounded-2xl border border-[var(--forest)]/15 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
  <button
    onClick={() => setOpen(!open)}
    className="w-full flex items-center justify-between px-8 py-6"
  >
    {/* Left Side */}
    <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-full bg-[var(--forest)]/10 flex items-center justify-center">
        <FlaskConical size={28} className="text-[var(--forest)]" />
      </div>

      <div className="text-left">
        <h2 className="text-3xl font-black text-[var(--forest)]">
          Experiential Learning
        </h2>

        <p className="text-gray-500 mt-1 text-base">
          Hands-on laboratory training, industrial visits, internships, and
          real-world clinical exposure for practical learning.
        </p>
      </div>
    </div>

    {/* Right Side */}
    <div className="w-12 h-12 rounded-full border border-[var(--forest)]/20 flex items-center justify-center transition-all">
      {open ? (
        <Minus size={28} className="text-[var(--forest)]" />
      ) : (
        <Plus size={28} className="text-[var(--forest)]" />
      )}
    </div>
  </button>

  {open && (
    <div className="px-8 pb-8 border-t border-[var(--forest)]/10">
      {/* Accordion Content */}
    </div>
  )}
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