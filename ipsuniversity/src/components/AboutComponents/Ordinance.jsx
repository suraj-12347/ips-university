import React from "react";
import { ArrowRight, FileText, ShieldCheck, BookOpen,GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";


import ordinanceHero from "../../images1/ctm1900.png";


const Ordinance = () => {

  return (

    <div className="w-full bg-white mt-30">


      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}


      <section
        className="
          relative
          h-[430px]
          flex
          items-center
          overflow-hidden
        "
        style={{
          backgroundImage:`url(${ordinanceHero})`,
          backgroundSize:"cover",
          backgroundPosition:"center"
        }}
      >


        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#31572c]/95
            via-[#31572c]/75
            to-transparent
          "
        />



        <div
          className="
            relative
            max-w-7xl
            mx-auto
            w-full
            px-6
            lg:px-10
            text-white
          "
        >


          <span
            className="
              uppercase
              tracking-[4px]
              text-sm
              text-[#ecf39e]
              font-semibold
            "
          >
            University Regulations
          </span>



          <h1
            className="
              mt-5
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
            "
            style={{
              fontFamily:"Fraunces, serif"
            }}
          >
            Ordinances &
            <br/>
            Regulations
          </h1>



          <p
            className="
              mt-6
              max-w-3xl
              text-gray-200
              text-lg
              leading-8
            "
          >
            A structured framework of academic rules,
            policies and regulations that ensures
            transparency, consistency and excellence
            across IPS University.
          </p>




          {/* Breadcrumb */}

          <div
            className="
              flex
              items-center
              gap-3
              mt-8
              text-sm
            "
          >

            <Link
              to="/"
              className="
                hover:text-[#ecf39e]
                transition
              "
            >
              Home
            </Link>


            <ArrowRight size={16}/>


            <Link
              to="/about"
              className="
                hover:text-[#ecf39e]
                transition
              "
            >
              About
            </Link>


            <ArrowRight size={16}/>


            <span
              className="
                text-[#ecf39e]
                font-semibold
              "
            >
              Ordinances
            </span>


          </div>



        </div>


      </section>






      {/* ========================================================= */}
      {/* INTRODUCTION SECTION */}
      {/* ========================================================= */}



      <section
        className="
          py-24
          bg-white
        "
      >


        <div
          className="
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
              gap-16
              items-center
            "
          >




            {/* LEFT CONTENT */}



            <div>


              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-6
                "
              >

                <span
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
                    text-xs
                    font-semibold
                    text-[#578B07]
                  "
                >
                  About Ordinances
                </span>


              </div>





              <h2
                className="
                  text-4xl
                  lg:text-5xl
                  font-bold
                  text-[#31572c]
                  leading-tight
                "
                style={{
                  fontFamily:"Fraunces, serif"
                }}
              >
                Academic Governance
                Through Clear Regulations
              </h2>



              <div
                className="
                  w-24
                  h-1
                  bg-[#578B07]
                  rounded-full
                  my-7
                "
              />



              <p
                className="
                  text-gray-600
                  text-lg
                  leading-8
                "
              >
                IPS University follows a well-defined
                academic and administrative framework
                to maintain quality, fairness and
                transparency in all institutional processes.
              </p>



              <p
                className="
                  mt-5
                  text-gray-600
                  text-lg
                  leading-8
                "
              >
                The ordinances provide guidelines related
                to academic programs, examinations,
                student responsibilities and various
                university procedures.
              </p>



            </div>






            {/* RIGHT DOCUMENT CARD */}



            <div
              className="
                relative
              "
            >


              <div
                className="
                  absolute
                  -top-8
                  -right-8
                  w-40
                  h-40
                  bg-[#ecf39e]
                  rounded-full
                  blur-3xl
                "
              />



              <div
                className="
                  relative
                  bg-[#f8faf7]
                  rounded-[35px]
                  p-10
                  border
                  border-[#e3ebd5]
                  shadow-lg
                "
              >



                <div
                  className="
                    w-20
                    h-20
                    rounded-2xl
                    bg-[#31572c]
                    flex
                    items-center
                    justify-center
                  "
                >

                  <FileText
                    size={38}
                    className="text-white"
                  />

                </div>




                <h3
                  className="
                    mt-8
                    text-2xl
                    font-bold
                    text-[#31572c]
                  "
                >
                  Institutional Framework
                </h3>



                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-7
                  "
                >
                  A centralized repository of official
                  ordinances and regulations designed
                  to support students, faculty and
                  academic stakeholders.
                </p>




                <div
                  className="
                    mt-8
                    space-y-4
                  "
                >


                  <div className="
                    flex
                    items-center
                    gap-3
                    text-[#31572c]
                  ">
                    <ShieldCheck size={20}/>
                    Academic Transparency
                  </div>


                  <div className="
                    flex
                    items-center
                    gap-3
                    text-[#31572c]
                  ">
                    <BookOpen size={20}/>
                    Structured Policies
                  </div>


                </div>



              </div>


            </div>




          </div>



        </div>


      </section>
      {/* ========================================================= */}
{/* ORDINANCE CATEGORIES */}
{/* ========================================================= */}


<section className="py-24 bg-[#f8faf7]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-16">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Ordinance Repository
      </span>



      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
        "
        style={{
          fontFamily:"Fraunces, serif"
        }}
      >
        Academic Rules & Regulations
      </h2>



      <p
        className="
          mt-5
          text-gray-600
          leading-8
        "
      >
        Access official university ordinances and
        regulatory documents that define academic
        processes and institutional practices.
      </p>



    </div>





    {/* Categories */}



    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-8
      "
    >



      {[
        {
          icon:<BookOpen size={32}/>,
          title:"Academic Ordinances",
          desc:"Guidelines related to curriculum, programs, credits and academic procedures."
        },

        {
          icon:<FileText size={32}/>,
          title:"Examination Rules",
          desc:"Regulations covering evaluation, assessment and examination processes."
        },

        {
          icon:<ShieldCheck size={32}/>,
          title:"Student Regulations",
          desc:"Policies related to student conduct, responsibilities and academic discipline."
        },

        {
          icon:<GraduationCap size={32}/>,
          title:"Research Ordinances",
          desc:"Framework governing research programs, scholars and academic activities."
        }

      ].map((item,index)=>(


        <div
          key={index}
          className="
            group
            bg-white
            rounded-[28px]
            p-8
            border
            border-gray-100
            hover:border-[#90a955]
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >



          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#ecf39e]
              flex
              items-center
              justify-center
              text-[#31572c]
              group-hover:bg-[#31572c]
              group-hover:text-white
              transition
            "
          >

            {item.icon}

          </div>




          <h3
            className="
              mt-7
              text-xl
              font-bold
              text-[#31572c]
            "
          >
            {item.title}
          </h3>



          <p
            className="
              mt-4
              text-gray-600
              leading-7
              text-sm
            "
          >
            {item.desc}
          </p>



          <button
            className="
              mt-6
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[#578B07]
            "
          >

            View Documents

            <ArrowRight size={16}/>

          </button>



        </div>


      ))}



    </div>



  </div>


</section>






{/* ========================================================= */}
{/* DOCUMENT LIST */}
{/* ========================================================= */}



<section className="py-24 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    <div
      className="
        flex
        flex-col
        md:flex-row
        justify-between
        items-start
        md:items-center
        gap-5
        mb-12
      "
    >


      <div>


        <span
          className="
            uppercase
            tracking-[4px]
            text-xs
            font-semibold
            text-[#578B07]
          "
        >
          Official Documents
        </span>



        <h2
          className="
            mt-3
            text-4xl
            font-bold
            text-[#31572c]
          "
        >
          Ordinance Documents
        </h2>


      </div>



      <p
        className="
          text-gray-600
          max-w-md
          leading-7
        "
      >
        Download official documents and regulations
        issued by IPS University.
      </p>


    </div>






    <div
      className="
        rounded-[30px]
        border
        border-gray-200
        overflow-hidden
      "
    >



      {[
        "Academic Ordinance",
        "Examination Ordinance",
        "Student Code of Conduct",
        "Research & PhD Ordinance",
        "Admission Guidelines"
      ].map((doc,index)=>(



        <div
          key={index}
          className="
            flex
            items-center
            justify-between
            px-8
            py-6
            border-b
            last:border-none
            hover:bg-[#f8faf7]
            transition
          "
        >



          <div className="flex items-center gap-5">


            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-[#ecf39e]
                flex
                items-center
                justify-center
                text-[#31572c]
              "
            >

              <FileText size={22}/>

            </div>




            <div>

              <h3
                className="
                  font-semibold
                  text-[#31572c]
                "
              >
                {doc}
              </h3>


              <p className="text-sm text-gray-500 mt-1">
                Official University Document
              </p>


            </div>



          </div>





          <button
            className="
              px-5
              py-2
              rounded-full
              bg-[#31572c]
              text-white
              text-sm
              hover:bg-[#578B07]
              transition
            "
          >
            PDF
          </button>



        </div>


      ))}



    </div>



  </div>


</section>







{/* ========================================================= */}
{/* CTA */}
{/* ========================================================= */}



<section className="pb-24">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    <div
      className="
        relative
        overflow-hidden
        rounded-[35px]
        bg-[#31572c]
        px-8
        md:px-16
        py-14
      "
    >


      <div
        className="
          absolute
          right-0
          top-0
          w-72
          h-72
          bg-[#90a955]
          opacity-20
          rounded-full
          blur-3xl
        "
      />



      <div className="relative z-10">


        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-white
          "
        >
          Ensuring Transparency Through
          Clear Academic Regulations
        </h2>



        <p
          className="
            mt-4
            text-[#dbe8d2]
            max-w-2xl
            leading-8
          "
        >
          IPS University maintains a transparent
          academic framework through clearly defined
          ordinances and institutional policies.
        </p>




        <button
          className="
            mt-8
            bg-white
            text-[#31572c]
            px-8
            py-3
            rounded-full
            font-semibold
            hover:bg-[#ecf39e]
            transition
          "
        >
          Download Complete Ordinance Book
        </button>



      </div>



    </div>


  </div>


</section>





    </div>

  );

};


export default Ordinance;