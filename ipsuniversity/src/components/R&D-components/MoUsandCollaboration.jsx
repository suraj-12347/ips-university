import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const MoUsandCollaboration = () => {

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
            `url(https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80)`,
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


          <div className="
            max-w-3xl
            text-white
          ">


            {/* Label */}

            <div className="
              flex
              items-center
              gap-3
              mb-6
            ">

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

              MoUs &
              <br />
              Collaborations

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

              Building strategic partnerships with industries,
              research organizations and academic institutions
              to promote innovation, knowledge exchange and
              collaborative growth.

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


              <ArrowRight size={15} />


              <Link
                to="/innovation"
                className="
                  hover:text-[#578B07]
                  transition
                "
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
                MoUs & Collaborations
              </span>


            </div>


          </div>


        </div>


      </section>

      {/* ================= ABOUT MoUs SECTION ================= */}

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


      {/* Image */}

      <div className="relative">


        <div
          className="
            absolute
            -top-6
            -left-6
            w-32
            h-32
            rounded-3xl
            bg-[#ECF39E]
          "
        />


        <img
          src="
          https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80
          "
          alt="MoUs Collaboration"
          className="
            relative
            w-full
            h-[520px]
            object-cover
            rounded-[35px]
            shadow-xl
          "
        />


        {/* Floating Stats */}

        <div
          className="
            absolute
            bottom-8
            right-8
            bg-white
            rounded-3xl
            shadow-xl
            px-8
            py-6
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


          <p className="text-gray-600">
            Strategic Partnerships
          </p>


        </div>


      </div>





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
          About Collaboration
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
          Connecting Academia
          <br />
          With Industry & Research
        </h2>



        <p
          className="
            mt-6
            text-gray-600
            leading-8
          "
        >
          IPS University promotes meaningful collaborations
          with industries, research organizations and academic
          institutions through Memorandums of Understanding
          (MoUs).
        </p>



        <p
          className="
            mt-5
            text-gray-600
            leading-8
          "
        >
          These partnerships create opportunities for joint
          research, technology development, internships,
          knowledge exchange and innovation-driven projects.
          The collaborations help bridge the gap between
          academic learning and real-world applications.
        </p>



        {/* Stats */}

        <div
          className="
            grid
            grid-cols-3
            gap-5
            mt-10
          "
        >


          <div>
            <h3
              className="
                text-3xl
                font-bold
                text-[#31572c]
              "
            >
              25+
            </h3>

            <p className="text-sm text-gray-600">
              Industry Partners
            </p>
          </div>



          <div>
            <h3
              className="
                text-3xl
                font-bold
                text-[#31572c]
              "
            >
              40+
            </h3>

            <p className="text-sm text-gray-600">
              Joint Projects
            </p>
          </div>



          <div>
            <h3
              className="
                text-3xl
                font-bold
                text-[#31572c]
              "
            >
              100+
            </h3>

            <p className="text-sm text-gray-600">
              Student Opportunities
            </p>
          </div>


        </div>



      </div>


    </div>


  </div>


</section>

{/* ================= WHY COLLABORATION SECTION ================= */}

<section className="py-24 bg-[#f8fbf6]">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="
      text-center
      max-w-3xl
      mx-auto
    ">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Collaboration Benefits
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
        Why Industry & Academic
        <br/>
        Collaborations Matter
      </h2>


      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Strategic partnerships empower students, faculty and
        researchers by creating opportunities for innovation,
        practical learning and impactful research.
      </p>


    </div>





    {/* Cards */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-7
        mt-16
      "
    >


      {[
        {
          icon:"🎓",
          title:"Student Exposure",
          desc:"Provides internships, industrial training and real-world learning experiences."
        },

        {
          icon:"🔬",
          title:"Research Opportunities",
          desc:"Encourages joint research projects, publications and technological development."
        },

        {
          icon:"💡",
          title:"Innovation Growth",
          desc:"Supports innovative ideas through industry guidance and collaborative initiatives."
        },

        {
          icon:"🤝",
          title:"Industry Connect",
          desc:"Creates strong relationships between academia and corporate organizations."
        },

        {
          icon:"🚀",
          title:"Career Development",
          desc:"Helps students gain skills aligned with industry requirements."
        },

        {
          icon:"🌐",
          title:"Knowledge Exchange",
          desc:"Promotes sharing of expertise, technology and best practices."
        },

      ].map((item,index)=>(


        <div
          key={index}
          className="
            group
            bg-white
            rounded-[30px]
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-3
            transition-all
            duration-500
          "
        >


          {/* Icon */}

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[var(--forest)]/20
              flex
              items-center
              justify-center
              text-3xl
              group-hover:bg-[#31572c]
              transition
            "
          >
            {item.icon}
          </div>




          <h3
            className="
              text-2xl
              font-bold
              text-[#31572c]
              mt-6
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


      ))}


    </div>



  </div>


</section>

{/* ================= TYPES OF COLLABORATION SECTION ================= */}

<section className="py-24 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="
      text-center
      max-w-3xl
      mx-auto
    ">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Partnership Models
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
        Types of
        <br/>
        Collaborations
      </h2>



      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        IPS University collaborates with diverse organizations
        through various partnership models focused on research,
        innovation, skill development and knowledge sharing.
      </p>


    </div>




    {/* Cards */}

    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-7
        mt-16
      "
    >



      {[
        {
          title:"Academic Collaboration",
          desc:"Partnerships with universities and educational institutions for research, faculty exchange and academic development.",
          image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80"
        },


        {
          title:"Industry Collaboration",
          desc:"Strong industry partnerships for internships, training, placements and practical exposure.",
          image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80"
        },


        {
          title:"Research Partnership",
          desc:"Collaborative research projects, innovation initiatives and technology development programs.",
          image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80"
        },


        {
          title:"International Collaboration",
          desc:"Global partnerships promoting international learning, knowledge exchange and opportunities.",
          image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80"
        },

      ].map((item,index)=>(



        <div
          key={index}
          className="
            group
            relative
            h-[420px]
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
              via-[#31572c]/40
              to-transparent
            "
          />




          {/* Content */}

          <div
            className="
              absolute
              bottom-0
              p-7
              text-white
            "
          >


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

{/* ================= PARTNERS SHOWCASE SECTION ================= */}

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
        Our Partners
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
        Building Strong
        <br/>
        Strategic Partnerships
      </h2>


      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Through meaningful collaborations with industries,
        research organizations and institutions, IPS University
        continues to create opportunities for innovation and growth.
      </p>


    </div>





    {/* Partner Cards */}

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
          name:"Industry Partners",
          count:"25+",
          image:
          "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=600&q=80"
        },

        {
          name:"Research Organizations",
          count:"15+",
          image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80"
        },

        {
          name:"Academic Institutions",
          count:"20+",
          image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
        },

        {
          name:"Government Initiatives",
          count:"10+",
          image:
          "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80"
        },

      ].map((partner,index)=>(


        <div
          key={index}
          className="
            bg-white
            rounded-[30px]
            overflow-hidden
            shadow-sm
            hover:shadow-xl
            transition
            group
          "
        >


          <div className="
            h-48
            overflow-hidden
          ">


            <img
              src={partner.image}
              alt={partner.name}
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




          <div className="p-7 text-center">


            <h3
              className="
                text-4xl
                font-bold
                text-[#31572c]
              "
            >
              {partner.count}
            </h3>


            <p
              className="
                mt-3
                text-gray-600
                font-medium
              "
            >
              {partner.name}
            </p>


          </div>


        </div>


      ))}



    </div>





    {/* Bottom Message */}

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
        Collaborating For A Better Future
      </h3>


      <p
        className="
          mt-4
          text-gray-200
          max-w-3xl
          mx-auto
          leading-7
        "
      >
        Our partnerships focus on creating impactful solutions
        through research, innovation and shared knowledge.
      </p>


    </div>



  </div>

</section>

{/* ================= MoU PROCESS SECTION ================= */}

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
        Collaboration Process
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
        MoU Signing &
        <br/>
        Implementation Process
      </h2>


      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        A structured approach ensures successful partnerships
        through proper planning, agreement and execution.
      </p>


    </div>





    {/* Timeline */}

    <div className="
      relative
      mt-20
    ">


      {/* Line */}

      <div
        className="
          hidden
          lg:block
          absolute
          top-12
          left-0
          w-full
          h-[3px]
          bg-[#ECF39E]
        "
      />



      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-6
          gap-8
        "
      >



        {[
          {
            step:"01",
            title:"Discussion",
            desc:"Initial interaction to identify collaboration opportunities."
          },

          {
            step:"02",
            title:"Proposal",
            desc:"Developing partnership objectives and project plans."
          },

          {
            step:"03",
            title:"Review",
            desc:"Evaluation of scope, requirements and outcomes."
          },

          {
            step:"04",
            title:"Agreement",
            desc:"Official MoU signing between partner organizations."
          },

          {
            step:"05",
            title:"Implementation",
            desc:"Execution of projects, training and initiatives."
          },

          {
            step:"06",
            title:"Evaluation",
            desc:"Reviewing outcomes and future opportunities."
          },

        ].map((item,index)=>(



          <div
            key={index}
            className="
              relative
              text-center
            "
          >



            {/* Circle */}

            <div
              className="
                relative
                z-10
                mx-auto
                w-24
                h-24
                rounded-full
                bg-[#31572c]
                text-white
                flex
                items-center
                justify-center
                text-2xl
                font-bold
                border-8
                border-[#ECF39E]
              "
            >
              {item.step}
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
                mt-3
                text-sm
                text-gray-600
                leading-6
              "
            >
              {item.desc}
            </p>



          </div>



        ))}



      </div>


    </div>


  </div>


</section>

{/* ================= CTA SECTION ================= */}

<section className="py-20 bg-[#31572c] relative overflow-hidden">


  {/* Background Shapes */}

  <div
    className="
      absolute
      -top-20
      -right-20
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



  <div className="
    relative
    max-w-7xl
    mx-auto
    px-6
    lg:px-10
  ">


    <div className="
      grid
      lg:grid-cols-2
      gap-10
      items-center
    ">




      {/* Content */}

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
          Partner With IPS University
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
          Let's Build
          <br/>
          Meaningful Collaborations
        </h2>



        <p
          className="
            mt-6
            text-gray-200
            leading-8
            max-w-xl
          "
        >
          Join hands with IPS University to create impactful
          initiatives in research, innovation, technology and
          knowledge exchange.
        </p>



        <div className="
          flex
          flex-wrap
          gap-5
          mt-10
        ">


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
            Contact R&D Cell
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
            Explore Partnerships
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
          Collaboration Opportunities
        </h3>



        <div className="
          mt-8
          space-y-5
        ">


          {[
            "Industry Projects",
            "Research Partnerships",
            "Student Training Programs",
            "Technology Development",
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


    </>

  );

};


export default MoUsandCollaboration;