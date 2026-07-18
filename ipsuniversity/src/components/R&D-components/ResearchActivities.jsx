import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Activities = () => {

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
`url(https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80)`,
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

Research
<br/>
Activities

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

Explore workshops, FDPs, seminars,
innovation events, hackathons and research
initiatives that inspire creativity and academic excellence.

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
Activities
</span>

</div>



</div>


</div>


</section>

{/* ================= ACTIVITIES OVERVIEW SECTION ================= */}

<section className="py-24 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    <div
      className="
        grid
        lg:grid-cols-2
        gap-20
        items-center
      "
    >





      {/* Left Images */}

      <div className="relative h-[620px] hidden lg:block">


        {/* Main Image */}

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
          alt="Research Workshop"
          className="
            absolute
            top-0
            left-0
            w-[78%]
            h-[420px]
            object-cover
            rounded-[35px]
            shadow-xl
          "
        />





        {/* Second Image */}

        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"
          alt="Conference"
          className="
            absolute
            bottom-0
            right-0
            w-[55%]
            h-[280px]
            object-cover
            rounded-[30px]
            border-8
            border-white
            shadow-2xl
          "
        />








        {/* Floating Card */}

        <div
          className="
            absolute
            top-72
            left-12
            bg-white
            rounded-3xl
            px-8
            py-6
            shadow-xl
          "
        >


          <h3
            className="
              text-4xl
              font-bold
              text-[#31572c]
            "
          >
            120+
          </h3>


          <p className="text-gray-600 mt-1">
            Research Activities Every Year
          </p>


        </div>



      </div>









      {/* Right Content */}

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
          Research Culture
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
          Inspiring Innovation
          <br />
          Through Academic Activities
        </h2>







        <p
          className="
            mt-7
            text-gray-600
            leading-8
          "
        >
          IPS University regularly organizes workshops,
          seminars, faculty development programs,
          hackathons, industrial interactions and research
          events to encourage innovation and collaborative
          learning among students and faculty members.
        </p>








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
              number:"75+",
              title:"Workshops"
            },

            {
              number:"40+",
              title:"Seminars"
            },

            {
              number:"20+",
              title:"Hackathons"
            },

            {
              number:"30+",
              title:"Expert Lectures"
            }

          ].map((item,index)=>(



            <div
              key={index}
              className="
                rounded-3xl
                bg-[#f8fbf6]
                p-6
                hover:bg-[#ECF39E]/40
                transition
              "
            >


              <h3
                className="
                  text-3xl
                  font-bold
                  text-[#31572c]
                "
              >
                {item.number}
              </h3>


              <p className="mt-2 text-gray-600">
                {item.title}
              </p>


            </div>



          ))}



        </div>





      </div>




    </div>



  </div>


</section>

{/* ================= RESEARCH ACTIVITIES TIMELINE ================= */}

<section className="py-24 bg-[#f8fbf6]">


  <div className="max-w-6xl mx-auto px-6 lg:px-10">


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
        Annual Activities
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
        Research Activities
        <br/>
        Throughout The Year
      </h2>



      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Every academic year, IPS University conducts a variety
        of research-oriented activities to foster innovation,
        collaboration and academic excellence.
      </p>


    </div>







    <div className="relative mt-20">


      {/* Center Line */}

      <div
        className="
          hidden
          md:block
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-1
          h-full
          bg-[#d7e9b9]
          rounded-full
        "
      />







      {[
        {
          title:"Research Workshop",
          month:"January",
          image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
          desc:"Hands-on workshops introducing emerging research tools and methodologies."
        },

        {
          title:"Expert Seminar",
          month:"March",
          image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
          desc:"Sessions by distinguished academicians and industry experts."
        },

        {
          title:"Hackathon",
          month:"July",
          image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
          desc:"Innovation challenges encouraging teamwork and creative problem solving."
        },

        {
          title:"Industry Visit",
          month:"October",
          image:"https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=900&q=80",
          desc:"Industrial exposure connecting classroom learning with practical applications."
        }

      ].map((item,index)=>(


        <div
          key={index}
          className={`
            relative
            mb-20
            flex
            items-center

            ${
              index%2===0
              ? "md:justify-start"
              : "md:justify-end"
            }
          `}
        >



          {/* Dot */}

          <div
            className="
              hidden
              md:flex
              absolute
              left-1/2
              -translate-x-1/2
              w-6
              h-6
              rounded-full
              bg-[#578B07]
              border-4
              border-white
              shadow-lg
              z-20
            "
          />






          <div
            className="
              w-full
              md:w-[46%]
              bg-white
              rounded-[30px]
              overflow-hidden
              shadow-lg
              hover:shadow-xl
              transition
            "
          >



            <img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-56
                object-cover
              "
            />





            <div className="p-7">


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
                {item.month}
              </span>





              <h3
                className="
                  mt-5
                  text-2xl
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
                "
              >
                {item.desc}
              </p>


            </div>


          </div>


        </div>


      ))}



    </div>



  </div>


</section>

{/* ================= RESEARCH ACTIVITIES GALLERY ================= */}

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
        Activity Gallery
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
        Moments From
        <br />
        Research Activities
      </h2>



      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        A glimpse into workshops, conferences, hackathons,
        faculty development programs and innovation events
        conducted at IPS University.
      </p>


    </div>







    {/* Gallery */}

    <div
      className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-6
        mt-16
        auto-rows-[220px]
      "
    >





      <div
        className="
          col-span-2
          row-span-2
          rounded-[35px]
          overflow-hidden
          group
          relative
        "
      >

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
          alt="Hackathon"
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
            from-black/70
            to-transparent
          "
        />

        <h3
          className="
            absolute
            bottom-8
            left-8
            text-white
            text-3xl
            font-bold
          "
        >
          National Hackathon
        </h3>

      </div>







      <div
        className="
          rounded-[30px]
          overflow-hidden
          group
        "
      >

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />

      </div>







      <div
        className="
          rounded-[30px]
          overflow-hidden
          group
        "
      >

        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />

      </div>







      <div
        className="
          col-span-2
          rounded-[35px]
          overflow-hidden
          group
          relative
        "
      >

        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=80"
          alt=""
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
            bg-gradient-to-r
            from-[#31572c]/80
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-7
            left-7
            text-white
          "
        >

          <h3 className="text-2xl font-bold">
            Industry Visit
          </h3>

          <p className="mt-2 text-gray-200">
            Practical exposure through industrial interaction.
          </p>

        </div>

      </div>








      <div
        className="
          rounded-[30px]
          overflow-hidden
          group
        "
      >

        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />

      </div>







      <div
        className="
          rounded-[30px]
          overflow-hidden
          group
        "
      >

        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />

      </div>




    </div>



  </div>


</section>

{/* ================= RESEARCH ACTIVITIES CTA SECTION ================= */}

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





  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">


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
          Join Our Research Journey
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
          Participate In
          <br />
          Future Research Activities
        </h2>






        <p
          className="
            mt-6
            text-gray-200
            leading-8
            max-w-xl
          "
        >
          IPS University continuously organizes research
          workshops, seminars, innovation challenges,
          faculty development programmes and industry
          interactions to promote a vibrant research culture.
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
            Upcoming Activities
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










      {/* Right Card */}

      <div
        className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-[35px]
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
          Research Opportunities
        </h3>






        <div
          className="
            mt-8
            space-y-5
          "
        >


          {[
            "Research Workshops",
            "Faculty Development Programmes",
            "National & International Conferences",
            "Innovation & Startup Events",
            "Industry Visits",
            "Research Collaboration Programmes"
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
                hover:bg-white/20
                transition
              "
            >


              <div
                className="
                  w-10
                  h-10
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


              <p className="font-medium">
                {item}
              </p>


            </div>


          ))}


        </div>





        <div
          className="
            mt-8
            rounded-2xl
            bg-[#ECF39E]
            text-[#31572c]
            p-6
          "
        >


          <h4 className="text-xl font-bold">
            150+ Activities Conducted
          </h4>

          <p className="mt-2 leading-7">
            Every year, IPS University hosts numerous research
            and innovation activities, encouraging students,
            faculty and industry experts to collaborate and
            create impactful solutions.
          </p>


        </div>



      </div>




    </div>


  </div>


</section>

    </>

  );

};

export default Activities;