import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const Patents = () => {

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
`url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80)`,
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
via-[#31572c]/85
to-transparent
"
/>



{/* Decorative Shape */}

<div
className="
absolute
right-20
top-20
w-72
h-72
rounded-full
bg-[#ECF39E]/20
blur-3xl
"
/>




{/* Content */}

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
Research & Innovation
</span>


</div>





{/* Heading */}

<h1
className="
text-4xl
md:text-5xl
lg:text-6xl
font-bold
leading-[1.15]
"
>

Patents &
<br/>
Intellectual Property

</h1>





{/* Description */}

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

Promoting innovation through research,
intellectual property protection and
technology development by empowering
faculty and students to transform ideas
into impactful solutions.

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
Patents
</span>


</div>




</div>


</div>


</section>

{/* ================= PATENT OVERVIEW SECTION ================= */}

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


      {/* LEFT CONTENT */}

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
          Intellectual Property Rights
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

          Transforming Ideas
          <br/>
          Into Innovations

        </h2>




        <p
          className="
            mt-6
            text-gray-600
            leading-8
          "
        >
          IPS University encourages innovation and research
          by supporting faculty members and students in
          protecting their intellectual creations through
          patents and intellectual property rights.
        </p>




        <p
          className="
            mt-5
            text-gray-600
            leading-8
          "
        >
          The university promotes a culture of innovation
          where research outcomes are converted into
          valuable intellectual assets contributing to
          industry, society and technological advancement.
        </p>





        {/* Small Highlight */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-4
            bg-[#f8fbf6]
            rounded-2xl
            p-5
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-xl
              bg-[#31572c]
              flex
              items-center
              justify-center
              text-2xl
              text-white
            "
          >
            💡
          </div>


          <div>

            <h3
              className="
                font-bold
                text-[#31572c]
                text-lg
              "
            >
              Innovation Driven Research
            </h3>


            <p className="text-gray-600 text-sm mt-1">
              Supporting creativity, discovery and technology solutions.
            </p>

          </div>


        </div>



      </div>








      {/* RIGHT STATISTICS PANEL */}

      <div
        className="
          relative
          bg-[#31572c]
          rounded-[40px]
          p-10
          overflow-hidden
        "
      >


        {/* Background Circle */}

        <div
          className="
            absolute
            -right-20
            -top-20
            w-64
            h-64
            rounded-full
            bg-[#578B07]
            opacity-40
            blur-2xl
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
          Innovation Impact
        </h3>



        <p
          className="
            relative
            mt-3
            text-gray-200
          "
        >
          Research achievements through
          intellectual property creation.
        </p>





        {/* Stats Grid */}

        <div
          className="
            relative
            grid
            grid-cols-2
            gap-5
            mt-10
          "
        >



          {
            [
              {
                number:"150+",
                title:"Patent Applications"
              },

              {
                number:"85+",
                title:"Granted Patents"
              },

              {
                number:"40+",
                title:"Research Projects"
              },

              {
                number:"25+",
                title:"Innovators"
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


            ))
          }



        </div>




      </div>



    </div>


  </div>


</section>

{/* ================= PATENT JOURNEY SECTION ================= */}

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
        Patent Lifecycle
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

        From Idea To
        <br/>
        Patent Grant

      </h2>



      <p
        className="
          mt-6
          text-gray-600
          leading-8
          max-w-2xl
          mx-auto
        "
      >
        A structured innovation process helps researchers
        transform creative ideas into protected intellectual
        property and real-world solutions.
      </p>


    </div>







    {/* Timeline */}

    <div
      className="
        relative
        mt-20
      "
    >



      {/* Center Line Desktop */}

      <div
        className="
          hidden
          lg:block
          absolute
          top-14
          left-0
          w-full
          h-[3px]
          bg-[#ECF39E]
        "
      />





      <div
        className="
          grid
          sm:grid-cols-2
          lg:grid-cols-6
          gap-8
        "
      >



        {[
          {
            step:"01",
            title:"Idea Generation",
            desc:"Innovative concepts are identified through research and creativity."
          },

          {
            step:"02",
            title:"Research",
            desc:"Detailed analysis and experimentation validate the innovation."
          },

          {
            step:"03",
            title:"Prototype",
            desc:"Development and testing of practical solutions."
          },

          {
            step:"04",
            title:"Patent Filing",
            desc:"Application submission for intellectual property protection."
          },

          {
            step:"05",
            title:"Examination",
            desc:"Patent authorities review and evaluate the application."
          },

          {
            step:"06",
            title:"Patent Grant",
            desc:"Successful innovations receive legal protection."
          },

        ].map((item,index)=>(


          <div
            key={index}
            className="
              relative
              text-center
            "
          >



            {/* Step Circle */}

            <div
              className="
                relative
                z-10
                mx-auto
                w-28
                h-28
                rounded-full
                bg-[#31572c]
                border-8
                border-[#ECF39E]
                flex
                items-center
                justify-center
                text-white
                text-2xl
                font-bold
                shadow-lg
              "
            >

              {item.step}

            </div>





            {/* Content Card */}

            <div
              className="
                mt-7
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >



              <h3
                className="
                  text-xl
                  font-bold
                  text-[#31572c]
                "
              >
                {item.title}
              </h3>




              <p
                className="
                  mt-3
                  text-sm
                  text-gray-600
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



  </div>


</section>

{/* ================= PATENT CATEGORIES SECTION ================= */}

<section className="py-24 bg-white">

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
        Innovation Domains
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

        Areas Of
        <br/>
        Patent Innovation

      </h2>




      <p
        className="
          mt-6
          text-gray-600
          leading-8
          max-w-2xl
          mx-auto
        "
      >
        Research innovations across multiple domains
        contribute towards technological advancement,
        sustainable development and societal impact.
      </p>


    </div>







    {/* Innovation Cards */}

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
    desc:"Patents in machine learning, automation, intelligent systems and data-driven technologies.",
    image:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80"
  },


  {
    icon:"⚙️",
    title:"Engineering Solutions",
    desc:"Innovations focused on advanced systems, mechanical designs and industrial technologies.",
    image:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=80"
  },


  {
    icon:"🏥",
    title:"Healthcare Technology",
    desc:"Research-based solutions improving healthcare, diagnostics and medical applications.",
    image:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80"
  },


  {
    icon:"🌱",
    title:"Green Technology",
    desc:"Sustainable innovations supporting renewable energy and environmental protection.",
    image:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=700&q=80"
  },


  {
    icon:"💻",
    title:"Software & Digital",
    desc:"Patented solutions in software systems, cybersecurity and digital platforms.",
    image:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80"
  },


  {
    icon:"🔬",
    title:"Scientific Research",
    desc:"Innovations emerging from interdisciplinary research and experimental studies.",
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



          {/* Image */}

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




          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#31572c]
              via-[#31572c]/60
              to-transparent
            "
          />





          {/* Content */}

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

{/* ================= INVENTOR SHOWCASE SECTION ================= */}

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
        Innovation Leaders
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

        Our Patent
        <br/>
        Innovators

      </h2>




      <p
        className="
          mt-6
          text-gray-600
          leading-8
          max-w-2xl
          mx-auto
        "
      >
        Meet the researchers and innovators whose ideas
        are contributing towards technological progress
        through intellectual property creation.
      </p>


    </div>







    {/* Inventor Cards */}

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
          name:"Dr. Rajesh Sharma",
          role:"Professor - Computer Science & Engineering",
          patent:"AI Based Smart Monitoring System",
          status:"Granted Patent",
          image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Dr. Priya Verma",
          role:"Associate Professor - Electronics",
          patent:"IoT Enabled Healthcare Device",
          status:"Patent Filed",
          image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Dr. Amit Singh",
          role:"Research Scholar - Engineering",
          patent:"Energy Efficient Smart System",
          status:"Granted Patent",
          image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
        },


      ].map((item,index)=>(



        <div
          key={index}
          className="
            group
            bg-white
            rounded-[35px]
            overflow-hidden
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-500
          "
        >



          {/* Image */}

          <div
            className="
              h-72
              overflow-hidden
              relative
            "
          >

            <img
              src={item.image}
              alt={item.name}
              className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition
                duration-700
              "
            />



            {/* Status Badge */}

            <div
              className="
                absolute
                top-5
                right-5
                bg-[#31572c]
                text-white
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
              "
            >
              {item.status}
            </div>


          </div>







          {/* Content */}

          <div className="p-7">


            <h3
              className="
                text-2xl
                font-bold
                text-[#31572c]
              "
            >
              {item.name}
            </h3>



            <p
              className="
                mt-2
                text-sm
                text-gray-600
              "
            >
              {item.role}
            </p>





            {/* Patent Box */}

            <div
              className="
                mt-6
                bg-[#f8fbf6]
                rounded-2xl
                p-5
              "
            >


              <span
                className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-[#578B07]
                  font-semibold
                "
              >
                Patent Title
              </span>


              <p
                className="
                  mt-2
                  text-gray-700
                  font-medium
                  leading-6
                "
              >
                {item.patent}
              </p>


            </div>




            <button
              className="
                mt-6
                flex
                items-center
                gap-2
                text-[#31572c]
                font-semibold
                hover:text-[#578B07]
                transition
              "
            >
              View Patent
              
              <span>
                →
              </span>

            </button>



          </div>



        </div>


      ))}



    </div>



  </div>


</section>

{/* ================= PATENT IMPACT SECTION ================= */}

<section className="py-24 bg-[#31572c] relative overflow-hidden">


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
      -bottom-20
      -left-20
      w-80
      h-80
      rounded-full
      bg-[#ECF39E]/20
      blur-3xl
    "
  />





  <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">



    {/* Heading */}

    <div
      className="
        text-center
        max-w-3xl
        mx-auto
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
        Research Excellence
      </span>




      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          mt-5
        "
      >

        Patent Growth &
        <br/>
        Innovation Impact

      </h2>



      <p
        className="
          mt-6
          text-gray-200
          leading-8
        "
      >
        Our research ecosystem promotes innovation,
        intellectual property creation and technology
        advancement through continuous efforts of
        faculty and students.
      </p>



    </div>








    {/* Statistics Cards */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        mt-16
      "
    >



      {[
        {
          number:"150+",
          title:"Patent Applications",
          icon:"📄"
        },

        {
          number:"85+",
          title:"Granted Patents",
          icon:"🏆"
        },

        {
          number:"40+",
          title:"Research Projects",
          icon:"🔬"
        },

        {
          number:"25+",
          title:"Faculty Innovators",
          icon:"👨‍🔬"
        },


      ].map((item,index)=>(


        <div
          key={index}
          className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-[30px]
            p-8
            text-center
            hover:bg-white/20
            transition
            duration-500
          "
        >



          <div
            className="
              w-16
              h-16
              mx-auto
              rounded-2xl
              bg-[#ECF39E]
              flex
              items-center
              justify-center
              text-3xl
            "
          >
            {item.icon}
          </div>





          <h3
            className="
              mt-6
              text-5xl
              font-bold
              text-white
            "
          >
            {item.number}
          </h3>




          <p
            className="
              mt-3
              text-gray-200
              font-medium
            "
          >
            {item.title}
          </p>



        </div>


      ))}



    </div>






    {/* Bottom Research Message */}

    <div
      className="
        mt-16
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
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
        Creating Intellectual Assets For Future Innovation
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
        Through research collaboration, innovation support
        and intellectual property awareness, IPS University
        continues to build a strong foundation for future
        technologies.
      </p>



    </div>




  </div>


</section>

{/* ================= TECHNOLOGY TRANSFER SECTION ================= */}

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




      {/* Image Side */}

      <div
        className="
          relative
        "
      >



        {/* Decorative Box */}

        <div
          className="
            absolute
            -top-6
            -left-6
            w-36
            h-36
            rounded-3xl
            bg-[#ECF39E]
          "
        />



        <img
          src="
          https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80
          "
          alt="Technology Transfer"
          className="
            relative
            w-full
            h-[520px]
            object-cover
            rounded-[40px]
            shadow-xl
          "
        />





        {/* Floating Card */}

        <div
          className="
            absolute
            bottom-8
            right-8
            bg-white
            rounded-3xl
            shadow-xl
            p-7
          "
        >


          <h3
            className="
              text-4xl
              font-bold
              text-[#31572c]
            "
          >
            50+
          </h3>



          <p
            className="
              text-gray-600
              mt-1
            "
          >
            Industry Connections
          </p>



        </div>



      </div>








      {/* Content Side */}

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
          Beyond Patents
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

          Taking Research
          <br/>
          From Lab To Society

        </h2>





        <p
          className="
            mt-6
            text-gray-600
            leading-8
          "
        >
          IPS University focuses on converting innovative
          research outcomes into practical solutions through
          technology transfer, industry partnerships and
          commercialization opportunities.
        </p>





        <p
          className="
            mt-5
            text-gray-600
            leading-8
          "
        >
          The university encourages researchers to collaborate
          with industries for product development, licensing
          opportunities and implementation of patented
          technologies.
        </p>







        {/* Features */}

        <div
          className="
            mt-10
            space-y-5
          "
        >



          {[
            "Technology Licensing Support",
            "Industry Research Collaboration",
            "Innovation Commercialization",
            "Startup & Entrepreneurial Opportunities"

          ].map((item,index)=>(


            <div
              key={index}
              className="
                flex
                items-center
                gap-4
              "
            >



              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-[#31572c]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-bold
                "
              >
                ✓
              </div>



              <p
                className="
                  text-gray-700
                  font-medium
                "
              >
                {item}
              </p>



            </div>


          ))}




        </div>




      </div>




    </div>



  </div>



</section>
{/* ================= PATENT REPOSITORY SECTION ================= */}

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
        Patent Repository
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

        Explore Our
        <br/>
        Intellectual Assets

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
          max-w-2xl
          mx-auto
        "
      >
        A collection of innovative research outcomes,
        patents and intellectual properties developed
        by IPS University researchers.
      </p>



    </div>








    {/* Desktop Table */}

    <div
      className="
        mt-16
        hidden
        lg:block
        bg-white
        rounded-[35px]
        shadow-sm
        overflow-hidden
      "
    >



      {/* Header */}

      <div
        className="
          grid
          grid-cols-6
          bg-[#31572c]
          text-white
          px-8
          py-5
          font-semibold
        "
      >

        <div>
          Patent Title
        </div>


        <div>
          Inventor
        </div>


        <div>
          Department
        </div>


        <div>
          Year
        </div>


        <div>
          Status
        </div>


        <div>
          Action
        </div>


      </div>







      {/* Rows */}

      {[
        {
          title:"AI Based Smart Monitoring System",
          inventor:"Dr. Rajesh Sharma",
          dept:"CSE",
          year:"2025",
          status:"Granted"
        },


        {
          title:"IoT Enabled Healthcare Device",
          inventor:"Dr. Priya Verma",
          dept:"ECE",
          year:"2024",
          status:"Filed"
        },


        {
          title:"Energy Efficient Smart Technology",
          inventor:"Dr. Amit Singh",
          dept:"Engineering",
          year:"2024",
          status:"Granted"
        },


        {
          title:"Smart Automation Framework",
          inventor:"Research Team",
          dept:"CSE",
          year:"2023",
          status:"Published"
        },


      ].map((item,index)=>(


        <div
          key={index}
          className="
            grid
            grid-cols-6
            items-center
            px-8
            py-6
            border-b
            border-gray-100
            hover:bg-[#f8fbf6]
            transition
          "
        >


          <div
            className="
              font-semibold
              text-[#31572c]
            "
          >
            {item.title}
          </div>



          <div className="text-gray-600 text-sm">
            {item.inventor}
          </div>



          <div className="text-gray-600 text-sm">
            {item.dept}
          </div>



          <div className="text-gray-600">
            {item.year}
          </div>




          <div>

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-[#ECF39E]
                text-[#31572c]
                text-xs
                font-semibold
              "
            >
              {item.status}
            </span>

          </div>





          <div>

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
              View
            </button>


          </div>



        </div>



      ))}




    </div>








    {/* Mobile Cards */}

    <div
      className="
        lg:hidden
        mt-12
        space-y-6
      "
    >


      {[
        {
          title:"AI Based Smart Monitoring System",
          inventor:"Dr. Rajesh Sharma",
          dept:"CSE",
          year:"2025",
          status:"Granted"
        },


        {
          title:"IoT Enabled Healthcare Device",
          inventor:"Dr. Priya Verma",
          dept:"ECE",
          year:"2024",
          status:"Filed"
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
              text-xl
              font-bold
              text-[#31572c]
            "
          >
            {item.title}
          </h3>



          <p className="mt-3 text-gray-600">
            Inventor: {item.inventor}
          </p>


          <p className="text-gray-600">
            Department: {item.dept}
          </p>


          <p className="text-gray-600">
            Year: {item.year}
          </p>



          <span
            className="
              inline-block
              mt-4
              px-4
              py-2
              rounded-full
              bg-[#ECF39E]
              text-[#31572c]
              text-sm
              font-semibold
            "
          >
            {item.status}
          </span>


        </div>


      ))}



    </div>




  </div>


</section>

{/* ================= IPR CTA SECTION ================= */}

<section className="py-24 bg-[#31572c] relative overflow-hidden">


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
          Innovation Support
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

          Have An
          <br/>
          Innovative Idea?

        </h2>





        <p
          className="
            mt-6
            text-gray-200
            leading-8
            max-w-xl
          "
        >
          IPS University encourages students and faculty
          members to protect their innovative ideas through
          intellectual property rights and transform them
          into meaningful solutions.
        </p>






        {/* Buttons */}

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
            Submit Innovation Idea
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
            Contact IPR Cell
          </button>




        </div>



      </div>










      {/* Right Glass Card */}

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
          IPR Support Includes
        </h3>





        <div
          className="
            mt-8
            space-y-5
          "
        >



          {[
            "Patent Search & Analysis",
            "Patent Filing Assistance",
            "Intellectual Property Awareness",
            "Research Commercialization",
            "Innovation Guidance"

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
                  w-8
                  h-8
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




              <p
                className="
                  text-gray-100
                "
              >
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

);

};


export default Patents;