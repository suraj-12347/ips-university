import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const BookChapter = () => {

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
min-h-[520px]
"
style={{
backgroundImage:
`url(https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1600&q=80)`,
backgroundSize:"cover",
backgroundPosition:"center",
}}
>


{/* Overlay */}

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


<div
className="
max-w-3xl
text-white
"
>





{/* Label */}

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

Book
<br/>
Chapters

</h1>







<p
className="
mt-7
text-base
md:text-lg
leading-8
text-gray-200
max-w-2xl
"
>

Showcasing scholarly contributions by faculty
members and researchers through published
book chapters in reputed academic publications.

</p>









{/* Breadcrumb */}

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
className="
hover:text-[#578B07]
transition
"
>
Home
</Link>




<ArrowRight size={15}/>





<Link
to="/innovation"
className="
hover:text-[#578B07]
transition
"
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
Book Chapters
</span>



</div>




</div>



</div>


</section>

{/* ================= BOOK CHAPTER OVERVIEW SECTION ================= */}

<section className="py-24 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    <div
      className="
        grid
        lg:grid-cols-2
        gap-14
        items-center
      "
    >




      {/* Left Content */}

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
          Scholarly Contributions
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

          Sharing Knowledge
          <br/>
          Through Book Chapters

        </h2>





        <p
          className="
            mt-6
            text-gray-600
            leading-8
          "
        >
          IPS University faculty members contribute chapters
          to academic books, edited volumes and professional
          publications across diverse research domains.
        </p>





        <p
          className="
            mt-5
            text-gray-600
            leading-8
          "
        >
          These contributions support knowledge exchange,
          interdisciplinary learning and advancement of
          research-based education.
        </p>






        <button
          className="
            mt-8
            px-8
            py-4
            rounded-full
            bg-[#31572c]
            text-white
            font-semibold
            hover:bg-[#578B07]
            transition
          "
        >
          Explore Book Chapters
        </button>




      </div>









      {/* Right Dashboard */}

      <div
        className="
          bg-[#f8fbf6]
          rounded-[40px]
          p-10
        "
      >



        <h3
          className="
            text-3xl
            font-bold
            text-[#31572c]
          "
        >
          Chapter Highlights
        </h3>





        <div
          className="
            grid
            grid-cols-2
            gap-6
            mt-10
          "
        >




          {[
            {
              number:"100+",
              title:"Book Chapters"
            },

            {
              number:"50+",
              title:"Faculty Authors"
            },

            {
              number:"25+",
              title:"Publishers"
            },

            {
              number:"15+",
              title:"Research Domains"
            },


          ].map((item,index)=>(



            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-md
                transition
              "
            >



              <h4
                className="
                  text-4xl
                  font-bold
                  text-[#31572c]
                "
              >
                {item.number}
              </h4>




              <p
                className="
                  mt-2
                  text-sm
                  text-gray-600
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

{/* ================= BOOK CHAPTER DOMAINS SECTION ================= */}

<section className="py-24 bg-[#f8fbf6]">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div
      className="
        text-center
        max-w-3xl
        mx-auto
      "
    >


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Research Domains
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

        Knowledge Contributions
        <br/>
        Across Multiple Fields

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Faculty members contribute chapters in emerging
        technologies, scientific research and
        interdisciplinary academic areas.
      </p>



    </div>









    {/* Cards */}

    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-16
      "
    >





      {[
        {
          icon:"🤖",
          title:"Artificial Intelligence",
          desc:"Book chapters covering AI, machine learning, automation and intelligent systems.",
          image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"💻",
          title:"Computer Science",
          desc:"Research contributions in software engineering, cloud computing and cybersecurity.",
          image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"⚙️",
          title:"Engineering & Technology",
          desc:"Chapters focusing on innovative engineering solutions and technologies.",
          image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"🏥",
          title:"Healthcare & Life Sciences",
          desc:"Academic chapters contributing towards healthcare advancement.",
          image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"📊",
          title:"Management Studies",
          desc:"Research chapters related to business, management and innovation.",
          image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"🔬",
          title:"Scientific Research",
          desc:"Interdisciplinary chapters contributing to scientific knowledge.",
          image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=80"
        },


      ].map((item,index)=>(



        <div
          key={index}
          className="
            group
            relative
            h-[390px]
            rounded-[35px]
            overflow-hidden
            shadow-lg
          "
        >



          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition
              duration-700
            "
          />





          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#31572c]
              via-[#31572c]/50
              to-transparent
            "
          />







          <div
            className="
              absolute
              bottom-0
              p-8
              text-white
            "
          >



            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-white/20
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-3xl
                mb-5
              "
            >
              {item.icon}
            </div>





            <h3
              className="
                text-2xl
                font-bold
              "
            >
              {item.title}
            </h3>





            <p
              className="
                mt-3
                text-sm
                text-gray-200
                leading-6
              "
            >
              {item.desc}
            </p>




          </div>




        </div>



      ))}



    </div>




  </div>


</section>

{/* ================= FEATURED BOOK CHAPTERS SECTION ================= */}

<section className="py-24 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div
      className="
        flex
        flex-col
        lg:flex-row
        justify-between
        lg:items-end
        gap-6
      "
    >


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
          Latest Contributions
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
          Featured Book Chapters
        </h2>


      </div>





      <button
        className="
          px-7
          py-3
          rounded-full
          bg-[#31572c]
          text-white
          font-semibold
          hover:bg-[#578B07]
          transition
        "
      >
        View All Chapters
      </button>




    </div>









    {/* Chapter Cards */}

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
          category:"Artificial Intelligence",
          title:"Applications of Machine Learning in Modern Systems",
          author:"Dr. Faculty Research Team",
          book:"Advances in Intelligent Computing",
          publisher:"Springer Publication",
          year:"2025"
        },


        {
          category:"Computer Science",
          title:"Emerging Trends in Cloud Computing Technologies",
          author:"Research Scholars Group",
          book:"Next Generation Computing",
          publisher:"Elsevier",
          year:"2024"
        },


        {
          category:"Engineering",
          title:"Sustainable Engineering and Smart Technologies",
          author:"Department Research Team",
          book:"Innovations in Engineering",
          publisher:"CRC Press",
          year:"2024"
        },


      ].map((item,index)=>(



        <div
          key={index}
          className="
            group
            border
            border-gray-100
            rounded-[35px]
            p-8
            hover:shadow-xl
            hover:-translate-y-2
            transition-all
            duration-500
          "
        >




          {/* Category */}

          <span
            className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-[#ECF39E]
              text-[#31572c]
              text-xs
              font-semibold
            "
          >
            {item.category}
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
            {item.title}
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
              {item.author}
            </p>




            <p>
              <span className="font-semibold text-[#31572c]">
                Book:
              </span>
              {" "}
              {item.book}
            </p>





            <p>
              <span className="font-semibold text-[#31572c]">
                Publisher:
              </span>
              {" "}
              {item.publisher}
            </p>





            <p>
              <span className="font-semibold text-[#31572c]">
                Year:
              </span>
              {" "}
              {item.year}
            </p>



          </div>








          <button
            className="
              mt-8
              text-[#578B07]
              font-semibold
              flex
              items-center
              gap-2
              group-hover:gap-4
              transition-all
            "
          >

            View Details

            <ArrowRight size={18}/>

          </button>





        </div>



      ))}





    </div>




  </div>


</section>
{/* ================= BOOK CHAPTER CTA SECTION ================= */}

<section className="py-20 bg-[#31572c] relative overflow-hidden">


  {/* Background Shapes */}

  <div
    className="
      absolute
      -top-24
      -right-24
      w-96
      h-96
      rounded-full
      bg-[#578B07]/40
      blur-3xl
    "
  />



  <div
    className="
      absolute
      -bottom-24
      -left-24
      w-80
      h-80
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
        gap-12
        items-center
      "
    >






      {/* Left Content */}

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
          Academic Contribution
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

          Share Your Knowledge
          <br/>
          Through Book Chapters

        </h2>







        <p
          className="
            mt-6
            text-gray-200
            leading-8
            max-w-xl
          "
        >
          IPS University encourages faculty members,
          researchers and scholars to contribute chapters
          in reputed books and edited academic volumes.
        </p>







        <div
          className="
            flex
            flex-wrap
            gap-5
            mt-10
          "
        >




          <button
            className="
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
            Submit Book Chapter
          </button>






          <button
            className="
              px-8
              py-4
              rounded-full
              border
              border-white/40
              text-white
              font-semibold
              hover:bg-white
              hover:text-[#31572c]
              transition
            "
          >
            Contact Research Cell
          </button>





        </div>





      </div>









      {/* Right Support Card */}

      <div
        className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-[40px]
          p-10
          text-white
        "
      >




        <h3
          className="
            text-3xl
            font-bold
          "
        >
          Author Support
        </h3>






        <div
          className="
            mt-8
            space-y-5
          "
        >



          {[
            "Book Chapter Publication Guidance",
            "Publisher Selection Support",
            "Research Content Review",
            "Academic Collaboration",
            "Knowledge Dissemination"

          ].map((item,index)=>(



            <div
              key={index}
              className="
                flex
                items-center
                gap-4
                bg-white/10
                rounded-2xl
                px-5
                py-4
              "
            >




              <div
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-[#ECF39E]
                  text-[#31572c]
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >
                ✓
              </div>





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

</>

)
};

export default BookChapter