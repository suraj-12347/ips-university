import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Journals = () => {

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
    min-h-[500px]
  "
  style={{
    backgroundImage:
      `url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
        Research
        <br />
        Journals
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
        Discover scholarly journals featuring high-quality
        research publications, academic excellence and
        innovative contributions by IPS University.
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
          className="hover:text-[#578B07] transition"
        >
          Home
        </Link>

        <ArrowRight size={15} />

        <Link
          to="/innovation"
          className="hover:text-[#578B07] transition"
        >
          Research & Development
        </Link>

        <ArrowRight size={15} />

        <span
          className="
            text-[#ECF39E]
            font-semibold
          "
        >
          Journals
        </span>

      </div>


    </div>


  </div>


</section>

{/* ================= ABOUT JOURNALS SECTION ================= */}

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
          Academic Publishing
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
          Publishing Research In
          <br />
          Reputed Journals
        </h2>






        <p
          className="
            mt-6
            text-gray-600
            leading-8
          "
        >
          IPS University promotes high-quality research
          publications in reputed national and international
          journals. Faculty members and scholars regularly
          contribute original research that advances knowledge
          across diverse disciplines.
        </p>






        <p
          className="
            mt-5
            text-gray-600
            leading-8
          "
        >
          Journal publications strengthen academic excellence,
          increase research visibility and encourage global
          collaboration within the scientific community.
        </p>





      </div>









      {/* Statistics */}

      <div
        className="
          bg-[#f8fbf6]
          rounded-[35px]
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
          Journal Highlights
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
              number:"250+",
              title:"Journal Papers"
            },

            {
              number:"80+",
              title:"Faculty Authors"
            },

            {
              number:"40+",
              title:"Indexed Journals"
            },

            {
              number:"20+",
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

{/* ================= FEATURED JOURNALS SECTION ================= */}

<section className="py-24 bg-[#f8fbf6]">


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
        Featured Publications
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
        Recent Journal Publications
      </h2>




      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Explore selected journal publications authored by
        IPS University faculty members and researchers in
        reputed national and international journals.
      </p>


    </div>







    {/* Journal Cards */}

    <div
      className="
        grid
        lg:grid-cols-3
        gap-8
        mt-16
      "
    >



      {[
        {
          category:"Computer Science",
          title:"Artificial Intelligence for Smart Healthcare Systems",
          journal:"IEEE Access",
          publisher:"IEEE",
          indexing:"Scopus & Web of Science",
          year:"2025"
        },


        {
          category:"Engineering",
          title:"Sustainable Materials for Modern Infrastructure",
          journal:"Materials Today Proceedings",
          publisher:"Elsevier",
          indexing:"Scopus Indexed",
          year:"2024"
        },


        {
          category:"Management",
          title:"Digital Innovation and Business Transformation",
          journal:"Journal of Business Research",
          publisher:"Elsevier",
          indexing:"SCI Indexed",
          year:"2024"
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
                Journal:
              </span>
              {" "}
              {item.journal}
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
                Indexing:
              </span>
              {" "}
              {item.indexing}
            </p>





            <p>
              <span className="font-semibold text-[#31572c]">
                Published:
              </span>
              {" "}
              {item.year}
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
              font-semibold
              hover:bg-[#578B07]
              transition
            "
          >
            View Journal
          </button>




        </div>



      ))}



    </div>



  </div>


</section>

{/* ================= JOURNALS CTA SECTION ================= */}

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
          Publish With Us
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
          Contribute To
          <br />
          High-Impact Journals
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
          researchers and scholars to publish quality
          research in reputed peer-reviewed national and
          international journals.
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
           " >
            Submit Research
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
            Contact R&D Cell
          </button>


        </div>


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
          Publication Support
        </h3>





        <div
          className="
            mt-8
            space-y-5
          "
        >


          {[
            "Journal Selection Guidance",
            "Manuscript Review Support",
            "Scopus & SCI Publication Assistance",
            "Research Collaboration",
            "Academic Writing Support"
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

export default Journals