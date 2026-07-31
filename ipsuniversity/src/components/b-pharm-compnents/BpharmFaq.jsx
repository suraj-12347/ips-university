import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";


export default function FAQPage() {


  const [open, setOpen] = useState(null);


  const faqs = [
    {
      question: "What is the duration of B.Pharm course?",
      answer:
        "Bachelor of Pharmacy (B.Pharm) is a 4-year undergraduate program focused on pharmaceutical sciences, drug development and healthcare."
    },
    {
      question: "What facilities are available for students?",
      answer:
        "Students get access to advanced laboratories, research facilities, library resources and practical learning environments."
    },
    {
      question: "What are the career opportunities after B.Pharm?",
      answer:
        "Graduates can build careers in pharmaceutical industries, hospitals, clinical research, regulatory affairs and government sectors."
    },
    {
      question: "Is practical training included in the course?",
      answer:
        "Yes, the program includes laboratory sessions, industrial exposure, projects and experiential learning activities."
    },
    {
      question: "What is the admission eligibility?",
      answer:
        "Students who have completed 10+2 with Physics, Chemistry and Biology/Mathematics are eligible for admission."
    }
  ];


  return (

<section id="faq"
className="
py-16
bg-cover
bg-center
relative

"
style={{
backgroundImage:
"url('https://plus.unsplash.com/premium_photo-1691962725028-e825955a7c1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
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

<div className="text-center mb-12">


<h2 className="
text-4xl
font-black
text-white
flex
justify-center
items-center
gap-3
">



Frequently Asked Questions

</h2>


<p className="
text-gray-200
mt-4
">
Find answers to common queries related to academics,
admissions and facilities.
</p>


</div>




{/* FAQ */}

{/* FAQ */}

<div className="
grid
grid-cols-1
md:grid-cols-2
gap-5
">

{
faqs.map((faq,index)=>(

<div
key={index}
className="
rounded-3xl

border
border-white/30
overflow-hidden
shadow-lg
"
>


<button

onClick={()=>setOpen(
open === index ? null : index
)}

className="
w-full
flex
justify-between
items-center
p-6
text-left
text-white
"

>


<span className="
font-semibold
text-lg
">
{faq.question}
</span>



{
open === index
?
<Minus size={22}/>
:
<Plus size={22}/>
}


</button>



{
open === index && (

<div className="
px-6
pb-6
text-gray-200
leading-relaxed
border-t
border-white/20
pt-4
">

{faq.answer}

</div>

)

}


</div>


))

}


</div>


</div>


</section>

  )
}