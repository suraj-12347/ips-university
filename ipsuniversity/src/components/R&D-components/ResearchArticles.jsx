import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const ResearchArticles = () => {

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
`url(https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1600&q=80)`,
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

Research
<br/>
Articles

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

Discover innovative research articles,
scholarly contributions and academic work
published by IPS University researchers
across diverse disciplines.

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
Research Articles
</span>



</div>





</div>



</div>



</section>

{/* ================= RESEARCH ARTICLES OVERVIEW SECTION ================= */}

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
          Academic Research
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

          Advancing Knowledge
          <br/>
          Through Research Articles

        </h2>





        <p
          className="
            mt-6
            text-gray-600
            leading-8
          "
        >
          IPS University researchers contribute to academic
          excellence through innovative research articles,
          journal publications and scholarly studies.
        </p>





        <p
          className="
            mt-5
            text-gray-600
            leading-8
          "
        >
          These research contributions address emerging
          challenges in science, technology, management
          and interdisciplinary domains.
        </p>







        <div
          className="
            mt-8
            flex
            gap-5
            flex-wrap
          "
        >


          <button
            className="
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
            View Articles
          </button>


          <button
            className="
              px-8
              py-4
              rounded-full
              border
              border-[#31572c]
              text-[#31572c]
              font-semibold
              hover:bg-[#31572c]
              hover:text-white
              transition
            "
          >
            Submit Research
          </button>



        </div>




      </div>









      {/* Right Dashboard */}

      <div
        className="
          bg-[#31572c]
          rounded-[40px]
          p-10
          relative
          overflow-hidden
        "
      >



        <div
          className="
            absolute
            -right-20
            -top-20
            w-72
            h-72
            rounded-full
            bg-[#578B07]
            opacity-40
            blur-3xl
          "
        />





        <h3
          className="
            relative
            text-3xl
            font-bold
            text-white
          "
        >
          Research Article Impact
        </h3>




        <p
          className="
            relative
            mt-3
            text-gray-200
          "
        >
          Contribution towards global academic research
          and knowledge sharing.
        </p>







        <div
          className="
            relative
            grid
            grid-cols-2
            gap-5
            mt-10
          "
        >




          {[
            {
              number:"500+",
              title:"Research Articles"
            },

            {
              number:"100+",
              title:"Indexed Journals"
            },

            {
              number:"75+",
              title:"Research Authors"
            },

            {
              number:"20+",
              title:"Research Domains"
            }

          ].map((item,index)=>(



            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-3xl
                p-6
              "
            >



              <h4
                className="
                  text-4xl
                  font-bold
                  text-[#ECF39E]
                "
              >
                {item.number}
              </h4>




              <p
                className="
                  mt-2
                  text-sm
                  text-gray-200
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

{/* ================= RESEARCH DOMAINS SECTION ================= */}

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
        Research Areas
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

        Exploring Diverse
        <br/>
        Research Domains

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Research articles from various disciplines reflect
        innovation, interdisciplinary collaboration and
        academic excellence.
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
          desc:"Research articles on AI, machine learning, automation and intelligent systems.",
          image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"⚙️",
          title:"Engineering & Technology",
          desc:"Studies focused on engineering innovations, design and emerging technologies.",
          image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"💻",
          title:"Computer Science",
          desc:"Research work in software systems, cybersecurity and digital technologies.",
          image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"🏥",
          title:"Healthcare Research",
          desc:"Academic studies improving healthcare technologies and medical solutions.",
          image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"📊",
          title:"Management Studies",
          desc:"Research articles covering business, finance and organizational development.",
          image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"🔬",
          title:"Scientific Research",
          desc:"Interdisciplinary research articles contributing to scientific advancement.",
          image:
          "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=700&q=80"
        },


      ].map((item,index)=>(



        <div
          key={index}
          className="
            group
            relative
            h-[390px]
            overflow-hidden
            rounded-[35px]
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

{/* ================= FEATURED RESEARCH ARTICLES SECTION ================= */}

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
          Latest Research
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
          Featured Research Articles
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
        View All Articles
      </button>



    </div>









    {/* Articles */}

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
          title:"Machine Learning Approaches for Intelligent Decision Systems",
          author:"Dr. Faculty Research Team",
          journal:"International Journal of Advanced Research",
          year:"2025"
        },


        {
          category:"Computer Science",
          title:"Secure Cloud Computing Framework Using Modern Technologies",
          author:"Research Scholars Group",
          journal:"Journal of Emerging Technologies",
          year:"2024"
        },


        {
          category:"Engineering",
          title:"Sustainable Engineering Solutions Through Smart Innovation",
          author:"Department Research Team",
          journal:"Engineering Research Journal",
          year:"2024"
        },


      ].map((article,index)=>(



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
            {article.category}
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
            {article.title}
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
              {article.author}
            </p>




            <p>
              <span className="font-semibold text-[#31572c]">
                Journal:
              </span>
              {" "}
              {article.journal}
            </p>




            <p>
              <span className="font-semibold text-[#31572c]">
                Year:
              </span>
              {" "}
              {article.year}
            </p>




          </div>







          <button
            className="
              mt-8
              flex
              items-center
              gap-2
              text-[#578B07]
              font-semibold
              group-hover:gap-4
              transition-all
            "
          >
            Read Article

            <ArrowRight size={18}/>

          </button>





        </div>



      ))}




    </div>





  </div>


</section>

{/* ================= RESEARCH IMPACT DASHBOARD SECTION ================= */}

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
        Research Impact
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

        Measuring The Impact
        <br/>
        Of Research Contributions

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Research articles contribute towards knowledge
        advancement through citations, collaborations
        and global academic engagement.
      </p>



    </div>









    {/* Dashboard Cards */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-7
        mt-16
      "
    >




      {[
        {
          icon:"📚",
          number:"5000+",
          title:"Citations",
          desc:"Research references by academic communities."
        },


        {
          icon:"🌎",
          number:"30+",
          title:"Global Collaborations",
          desc:"International research connections."
        },


        {
          icon:"👨‍🔬",
          number:"100+",
          title:"Researchers",
          desc:"Faculty members contributing research."
        },


        {
          icon:"📈",
          number:"95%",
          title:"Growth Rate",
          desc:"Increasing research publication trends."
        },


      ].map((item,index)=>(



        <div
          key={index}
          className="
            bg-white
            rounded-[35px]
            p-8
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-500
            group
          "
        >



          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#31572c]
              text-white
              flex
              items-center
              justify-center
              text-3xl
              group-hover:scale-110
              transition
            "
          >
            {item.icon}
          </div>






          <h3
            className="
              mt-6
              text-4xl
              font-bold
              text-[#31572c]
            "
          >
            {item.number}
          </h3>







          <h4
            className="
              mt-3
              text-xl
              font-bold
              text-[#31572c]
            "
          >
            {item.title}
          </h4>







          <p
            className="
              mt-3
              text-gray-600
              text-sm
              leading-6
            "
          >
            {item.desc}
          </p>




        </div>



      ))}




    </div>








    {/* Bottom Highlight */}

    <div
      className="
        mt-16
        bg-[#31572c]
        rounded-[35px]
        p-10
        text-center
        text-white
      "
    >



      <h3
        className="
          text-3xl
          font-bold
        "
      >
        Creating Knowledge That Makes A Difference
      </h3>





      <p
        className="
          mt-4
          max-w-3xl
          mx-auto
          text-gray-200
          leading-7
        "
      >
        Through innovative research articles, IPS University
        promotes academic excellence and contributes to
        solving real-world challenges.
      </p>



    </div>




  </div>


</section>

{/* ================= RESEARCH ARTICLE CTA SECTION ================= */}

<section className="py-20 bg-[#31572c] relative overflow-hidden">


  {/* Background Elements */}

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

      <div
        className="
          text-white
        "
      >



        <span
          className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[#ECF39E]
          "
        >
          Research Collaboration
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
          With The World

        </h2>






        <p
          className="
            mt-6
            text-gray-200
            leading-8
            max-w-xl
          "
        >
          IPS University encourages researchers, faculty
          members and scholars to contribute innovative
          research articles and academic discoveries.
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
            Submit Research Article
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









      {/* Right Card */}

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
          Research Support
        </h3>






        <div
          className="
            mt-8
            space-y-5
          "
        >



          {[
            "Article Publication Guidance",
            "Journal Selection Support",
            "Research Documentation",
            "Academic Collaboration",
            "Innovation Promotion"

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
    
export default ResearchArticles    