import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const PublishedConferencePaper = () => {

return (
<>

{/* ================= HERO SECTION ================= */}

<section
className="
relative
overflow-hidden
flex
items-center
mt-30
py-12
min-h-[480px]
"
style={{
backgroundImage:
`url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80)`,
backgroundSize:"cover",
backgroundPosition:"center",
}}
>


<div
className="
absolute
inset-0
bg-gradient-to-r
from-[#31572c]/95
via-[#31572c]/80
to-transparent
"
/>





<div
className="
relative
w-full
max-w-7xl
mx-auto
px-6
lg:px-10
"
>


<div className="max-w-3xl text-white">





<div
className="
flex
items-center
gap-3
mb-6
"
>

<div
className="
w-12
h-[2px]
bg-[#578B07]
"
/>


<span
className="
uppercase
tracking-[4px]
text-sm
font-semibold
"
>
Research & Development
</span>


</div>







<h1
className="
text-4xl
md:text-5xl
lg:text-6xl
font-bold
leading-[1.15]
"
>

Published
<br/>
Conference Papers

</h1>







<p
className="
mt-7
text-base
md:text-lg
text-gray-200
leading-8
max-w-2xl
"
>

Showcasing research contributions presented at
national and international conferences by IPS
University researchers.

</p>









<div
className="
flex
items-center
gap-2
mt-12
text-sm
text-white/80
"
>

<Link
to="/"
className="hover:text-[#578B07] transition"
>
Home
</Link>


<ArrowRight size={15}/>


<Link
to="/innovation"
className="hover:text-[#578B07] transition"
>
Research & Development
</Link>


<ArrowRight size={15}/>



<span
className="
text-[#ECF39E]
font-semibold
"
>
Conference Papers
</span>



</div>





</div>



</div>


</section>
{/* ================= CONFERENCE PAPER OVERVIEW SECTION ================= */}

<section className="py-20 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    <div
      className="
        grid
        lg:grid-cols-2
        gap-12
        items-center
      "
    >



      {/* Content */}

      <div>


        <span
          className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[#578B07]
          "
        >
          Research Publications
        </span>





        <h2
          className="
            text-4xl
            lg:text-5xl
            font-bold
            text-[#31572c]
            mt-5
            leading-tight
          "
        >

          Presenting Research
          <br/>
          At Global Platforms

        </h2>





        <p
          className="
            mt-6
            text-gray-600
            leading-8
          "
        >
          IPS University researchers actively participate
          in national and international conferences by
          presenting innovative research papers and
          sharing knowledge with academic communities.
        </p>





        <p
          className="
            mt-5
            text-gray-600
            leading-8
          "
        >
          Conference publications encourage collaboration,
          innovation and exchange of ideas across various
          research domains.
        </p>



      </div>








      {/* Stats */}

      <div
        className="
          bg-[#f8fbf6]
          rounded-[35px]
          p-8
        "
      >



        <div
          className="
            grid
            grid-cols-2
            gap-6
          "
        >



          {[
            {
              number:"200+",
              title:"Published Papers"
            },

            {
              number:"50+",
              title:"Conferences"
            },

            {
              number:"100+",
              title:"Researchers"
            },

            {
              number:"20+",
              title:"International Events"
            },

          ].map((item,index)=>(



            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
              "
            >


              <h3
                className="
                  text-4xl
                  font-bold
                  text-[#31572c]
                "
              >
                {item.number}
              </h3>



              <p
                className="
                  mt-2
                  text-gray-600
                  text-sm
                "
              >
                {item.title}
              </p>



            </div>



          ))}



        </div>




      </div>



    </div>



  </div>


</section>

{/* ================= PUBLISHED PAPERS LISTING SECTION ================= */}

<section className="py-20 bg-[#f8fbf6]">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Recent Publications
      </span>





      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
          mt-5
        "
      >
        Published Conference Papers
      </h2>




    </div>








    {/* Papers */}

    <div
      className="
        grid
        lg:grid-cols-3
        gap-8
        mt-14
      "
    >





      {[
        {
          category:"Computer Science",
          title:"Artificial Intelligence Based Smart Decision Systems",
          author:"Dr. Faculty Research Team",
          conference:"International Conference on Emerging Technologies",
          year:"2025"
        },


        {
          category:"Engineering",
          title:"Advanced Sustainable Engineering Solutions",
          author:"Research Scholar Group",
          conference:"National Engineering Research Conference",
          year:"2024"
        },


        {
          category:"Management",
          title:"Digital Transformation and Business Innovation",
          author:"Department Research Team",
          conference:"International Management Summit",
          year:"2024"
        },


      ].map((paper,index)=>(



        <div
          key={index}
          className="
            bg-white
            rounded-[35px]
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all
            duration-500
          "
        >



          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-[#ECF39E]
              text-[#31572c]
              text-xs
              font-semibold
            "
          >
            {paper.category}
          </span>







          <h3
            className="
              mt-6
              text-2xl
              font-bold
              text-[#31572c]
              leading-snug
            "
          >
            {paper.title}
          </h3>








          <div
            className="
              mt-6
              space-y-3
              text-sm
              text-gray-600
            "
          >



            <p>
              <span className="font-semibold text-[#31572c]">
                Author:
              </span>
              {" "}
              {paper.author}
            </p>





            <p>
              <span className="font-semibold text-[#31572c]">
                Conference:
              </span>
              {" "}
              {paper.conference}
            </p>





            <p>
              <span className="font-semibold text-[#31572c]">
                Year:
              </span>
              {" "}
              {paper.year}
            </p>




          </div>








          <button
            className="
              mt-8
              px-6
              py-3
              rounded-full
              bg-[#31572c]
              text-white
              text-sm
              font-semibold
              hover:bg-[#578B07]
              transition
            "
          >
            View Paper
          </button>





        </div>



      ))}




    </div>





  </div>


</section>
{/* ================= CONFERENCE PAPER CTA SECTION ================= */}

<section className="py-20 bg-[#31572c] relative overflow-hidden">


  {/* Background */}

  <div
    className="
      absolute
      -top-24
      -right-24
      w-80
      h-80
      rounded-full
      bg-[#578B07]/40
      blur-3xl
    "
  />


  <div
    className="
      absolute
      -bottom-20
      -left-20
      w-72
      h-72
      rounded-full
      bg-[#ECF39E]/20
      blur-3xl
    "
  />





  <div
    className="
      relative
      max-w-7xl
      mx-auto
      px-6
      lg:px-10
    "
  >



    <div
      className="
        grid
        lg:grid-cols-2
        gap-10
        items-center
      "
    >






      {/* Left */}

      <div className="text-white">


        <span
          className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[#ECF39E]
          "
        >
          Research Publication
        </span>






        <h2
          className="
            text-4xl
            lg:text-5xl
            font-bold
            mt-5
            leading-tight
          "
        >

          Share Your Research
          <br/>
          At Leading Conferences

        </h2>






        <p
          className="
            mt-6
            text-gray-200
            leading-8
            max-w-xl
          "
        >
          IPS University encourages faculty members and
          researchers to present innovative work at
          reputed national and international conferences.
        </p>






        <button
          className="
            mt-8
            px-8
            py-4
            rounded-full
            bg-white
            text-[#31572c]
            font-semibold
            hover:bg-[#ECF39E]
            transition
          "
        >
          Submit Conference Paper
        </button>



      </div>









      {/* Right */}

      <div
        className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-[35px]
          p-8
          text-white
        "
      >



        <h3
          className="
            text-3xl
            font-bold
          "
        >
          Research Support
        </h3>





        <div
          className="
            mt-6
            space-y-4
          "
        >


          {[
            "Conference Selection Guidance",
            "Paper Review Support",
            "Publication Assistance",
            "Research Collaboration"
          ].map((item,index)=>(



            <div
              key={index}
              className="
                flex
                items-center
                gap-4
                bg-white/10
                rounded-xl
                px-5
                py-4
              "
            >


              <span
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-[#ECF39E]
                "
              />


              <p>
                {item}
              </p>



            </div>



          ))}



        </div>




      </div>





    </div>



  </div>


</section>

</>)

};

export default PublishedConferencePaper