import React from "react";

import {
  Microscope,
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Lightbulb,
  FileText,
  Presentation,
  GraduationCap,
  Award,
} from "lucide-react";

import { academicResearchData } from "../../assets/CseData";


const iconMap = {
  Microscope,
  BookOpen,
  FlaskConical,
  Lightbulb,
  FileText,
  Presentation,
  GraduationCap,
  Award,
};


const AcademicResearchSection = () => {


  const cardStyle = {
    background: "rgba(255,255,255,0.95)",
    boxShadow: "0 8px 28px rgba(31,77,58,.08)",
  };


  const fontTitle = {
    fontFamily: "Fraunces, serif",
  };


  const fontBody = {
    fontFamily: "Outfit, sans-serif",
  };



  return (

<section
className="
relative
py-10
px-4
md:px-8
overflow-hidden
"
style={{
backgroundImage:`url(${academicResearchData.hero.background})`,
backgroundSize:"cover",
backgroundPosition:"bottom",
}}
>


{/* Background Overlay */}

<div
className="
absolute
inset-0
bg-white/70
backdrop-blur-[3px]
"
/>



<div className="relative z-10 max-w-7xl mx-auto">





{/* HEADER */}

<div className="text-center mb-12">


<p
className="
uppercase
tracking-[3px]
text-sm
font-semibold
text-[var(--forest)]
"
style={fontBody}
>
{academicResearchData.heading.subtitle}
</p>




<h2
className="
mt-3
text-4xl
md:text-6xl
text-[var(--forest)]
"
style={fontTitle}
>
{academicResearchData.heading.title}
</h2>




<p
className="
max-w-3xl
mx-auto
mt-5
leading-8
text-gray-700
"
style={fontBody}
>
{academicResearchData.heading.description}
</p>


</div>






{/* BANNER */}

<div
className="
rounded-[24px]
p-7
md:p-12
mb-16
"
style={cardStyle}
>


<div
className="
flex
flex-col
md:flex-row
items-center
gap-8
"
>


<div
className="
w-24
h-24
rounded-3xl
flex
items-center
justify-center
bg-[var(--forest)]/10
shrink-0
"
>


<Microscope
size={48}
className="text-[var(--forest)]"
/>


</div>




<div>


<span
className="
uppercase
tracking-[2px]
text-sm
text-[var(--forest)]
"
style={fontBody}
>

{academicResearchData.banner.tag}

</span>




<h3
className="
text-3xl
mt-2
text-[var(--forest)]
"
style={fontTitle}
>

{academicResearchData.banner.title}

</h3>




<p
className="
mt-4
leading-8
text-gray-700
"
style={fontBody}
>

{academicResearchData.banner.description}

</p>


</div>


</div>


</div>






{/* ACHIEVEMENTS */}


<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mb-16
"
>


{
academicResearchData.achievements.map((item)=>(


<div
key={item.label}
className="
rounded-[18px]
p-6
text-center
"
style={cardStyle}
>


<h3
className="
text-4xl
text-[var(--forest)]
"
style={fontTitle}
>

{item.value}

</h3>



<p
className="
mt-2
text-sm
text-[#3c5448]
"
style={fontBody}
>

{item.label}

</p>


</div>


))
}


</div>








{/* RESEARCH DOMAINS */}


<div className="mb-16">


<h3
className="
text-3xl
mb-8
text-[var(--forest)]
"
style={fontTitle}
>

{academicResearchData.researchTitle}

</h3>





<div
className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"
>


{
academicResearchData.researchAreas.map((item)=>(


<ResearchCard
key={item.title}
item={item}
style={cardStyle}
fontTitle={fontTitle}
fontBody={fontBody}
/>


))
}


</div>


</div>







{/* ACTIVITIES */}



<div>


<h3
className="
text-3xl
mb-8
text-[var(--forest)]
"
style={fontTitle}
>

{academicResearchData.activityTitle}

</h3>





<div
className="
grid
md:grid-cols-2
gap-6
"
>


{
academicResearchData.activities.map((item)=>(


<ResearchCard
key={item.title}
item={item}
style={cardStyle}
fontTitle={fontTitle}
fontBody={fontBody}
horizontal
/>


))
}



</div>


</div>








{/* CTA */}



<div
className="
mt-16
rounded-[24px]
p-8
md:p-10
text-center
"
style={cardStyle}
>


<ArrowUpRight
size={40}
className="
mx-auto
mb-4
text-[var(--forest)]
"
/>



<h3
className="
text-3xl
text-[var(--forest)]
"
style={fontTitle}
>

{academicResearchData.cta.title}

</h3>




<p
className="
max-w-3xl
mx-auto
mt-4
leading-8
text-gray-700
"
style={fontBody}
>

{academicResearchData.cta.description}

</p>


</div>




</div>


</section>

  );
};






const ResearchCard = ({
item,
style,
fontTitle,
fontBody,
horizontal=false
}) => {


const Icon = iconMap[item.icon] || Award;



return (

<div
className={`
rounded-[18px]
p-6
transition-all
duration-300
hover:-translate-y-2
${horizontal ? "flex gap-5 items-start" : ""}
`}
style={style}
>


<div
className="
w-14
h-14
rounded-xl
flex
items-center
justify-center
mb-5
bg-[var(--forest)]/10
shrink-0
"
>


<Icon
size={26}
className="text-[var(--forest)]"
/>


</div>




<div>


<h4
className="
text-xl
mb-3
text-[var(--forest)]
"
style={fontTitle}
>

{item.title}

</h4>




<p
className="
text-sm
leading-7
text-gray-700
"
style={fontBody}
>

{item.desc}

</p>


</div>


</div>

);

};



export default AcademicResearchSection;