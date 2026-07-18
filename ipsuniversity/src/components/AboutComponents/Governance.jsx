import React from "react";
import { ShieldCheck, Users, GraduationCap,ArrowRight } from "lucide-react";
import ctm1900 from '../../images1/ctm1900.png'
import { Link } from "react-router-dom";


const Governance = () => {


  const governanceCards = [
    {
      icon: <Users size={30} />,
      title: "Governing Body",
      description:
        "Provides strategic leadership, policy direction and ensures the overall growth and development of IPS University."
    },

    {
      icon: <GraduationCap size={30} />,
      title: "Academic Council",
      description:
        "Maintains academic standards, promotes innovation in teaching and supports research excellence."
    },

    {
      icon: <ShieldCheck size={30} />,
      title: "Administrative Bodies",
      description:
        "Ensures transparent administration, effective operations and implementation of university policies."
    }
  ];



  return (

    <div>


      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[430px] overflow-hidden mt-30">


        <img
          src={ctm1900}
          alt="IPS University Campus"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#31572c]/90
            via-[#31572c]/70
            to-transparent
          "
        />



        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            h-full
            flex
            flex-col
            justify-center
          "
        >


          <span
            className="
              text-[#cfe8a9]
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
            "
          >
            About IPS University
          </span>



          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-white
              mt-4
            "
          >
            University Governance
          </h1>



          <p
            className="
              text-white/80
              max-w-xl
              mt-5
              leading-7
            "
          >
            A transparent governance framework that guides
            IPS University towards academic excellence,
            innovation and sustainable growth.
          </p>

                    <div className="flex items-center text-white gap-2 mt-8 text-sm">

  <Link
    to="/"
    className="hover:text-[var(--grass)] transition"
  >
    Home
  </Link>


  <ArrowRight size={16} />


  <Link
    to="/"
    className="hover:text-[var(--grass)] transition"
  >
    About
  </Link>


  <ArrowRight size={16} />


  <span className="text-[#cde8a3] font-semibold">
    Governance
  </span>

</div>



        </div>


      </section>





      {/* ================= GOVERNANCE OVERVIEW ================= */}


      <section className="py-24 bg-[#f7f9f3]">


        <div className="max-w-7xl mx-auto px-6 lg:px-10">



          {/* Heading */}

          <div className="text-center mb-16">


            <span
              className="
                text-[#578B07]
                uppercase
                tracking-[3px]
                text-sm
                font-semibold
              "
            >
              Governance Framework
            </span>



            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#31572c]
                mt-4
              "
            >
              Leading With Integrity & Excellence
            </h2>



            <p
              className="
                max-w-3xl
                mx-auto
                mt-5
                text-gray-600
                leading-8
              "
            >
              IPS University follows a structured governance
              system where experienced leaders, academic experts
              and administrative teams work together to maintain
              quality education and institutional excellence.
            </p>


          </div>





          {/* Cards */}


          <div
            className="
              grid
              md:grid-cols-3
              gap-8
            "
          >


            {governanceCards.map((item,index)=>(


              <div
                key={index}
                className="
                  bg-white
                  rounded-[30px]
                  p-8
                  shadow-md
                  hover:shadow-xl
                  transition
                  duration-300
                  border
                  border-[#ecf39e]/40
                "
              >


                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#31572c]
                    text-[#ecf39e]
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  {item.icon}
                </div>




                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#31572c]
                  "
                >
                  {item.title}
                </h3>



                <p
                  className="
                    text-gray-600
                    mt-4
                    leading-7
                  "
                >
                  {item.description}
                </p>



              </div>


            ))}



          </div>



        </div>


      </section>

      {/* // ================= GOVERNING BODY SECTION ================= */}


<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center mb-16">


      <span
        className="
          text-[#578B07]
          uppercase
          tracking-[3px]
          text-sm
          font-semibold
        "
      >
        Leadership Council
      </span>


      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#31572c]
          mt-4
        "
      >
        Governing Body
      </h2>


      <p
        className="
          max-w-2xl
          mx-auto
          mt-5
          text-gray-600
          leading-7
        "
      >
        The Governing Body provides strategic direction,
        policy guidance and leadership for the overall
        development of IPS University.
      </p>


    </div>





    {/* Members */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
      "
    >


      {[
        {
          name:"Prof. (Dr.) ABC XYZ",
          role:"Chancellor",
          image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Prof. (Dr.) ABC XYZ",
          role:"Vice Chancellor",
          image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Dr. ABC XYZ",
          role:"Registrar",
          image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Prof. ABC XYZ",
          role:"Member, Governing Body",
          image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
        }

      ].map((member,index)=>(


        <div
          key={index}
          className="
            group
            bg-[#f7f9f3]
            rounded-[32px]
            overflow-hidden
            shadow-md
            hover:shadow-2xl
            transition
            duration-300
          "
        >


          {/* Image */}

          <div
            className="
              h-[300px]
              overflow-hidden
            "
          >

            <img
              src={member.image}
              alt={member.name}
              className="
                w-full
                h-full
                object-cover
                group-hover:scale-105
                transition
                duration-500
              "
            />

          </div>





          {/* Details */}

          <div
            className="
              p-6
              text-center
              relative
            "
          >


            <div
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-14
                h-14
                rounded-full
                bg-[#31572c]
                text-[#ecf39e]
                flex
                items-center
                justify-center
                font-bold
                text-xl
                border-4
                border-white
              "
            >
              {index+1}
            </div>



            <h3
              className="
                mt-5
                text-xl
                font-bold
                text-[#31572c]
              "
            >
              {member.name}
            </h3>


            <p
              className="
                mt-2
                text-[#578B07]
                font-medium
                text-sm
              "
            >
              {member.role}
            </p>


          </div>



        </div>


      ))}



    </div>



  </div>


</section>

{/* // ================= ACADEMIC COUNCIL SECTION ================= */}


<section className="py-24 bg-[#f7f9f3]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center mb-16">


      <span
        className="
          text-[#578B07]
          uppercase
          tracking-[3px]
          text-sm
          font-semibold
        "
      >
        Academic Governance
      </span>


      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#31572c]
          mt-4
        "
      >
        Academic Council
      </h2>


      <p
        className="
          max-w-3xl
          mx-auto
          mt-5
          text-gray-600
          leading-8
        "
      >
        The Academic Council is responsible for maintaining
        academic standards, curriculum development, research
        promotion and continuous improvement of learning
        practices at IPS University.
      </p>


    </div>





    {/* Council Cards */}

    <div
      className="
        grid
        lg:grid-cols-2
        gap-8
      "
    >



      {[
        {
          title:"Curriculum Development",
          text:
          "Designing innovative and industry-relevant curriculum aligned with current academic and professional requirements."
        },


        {
          title:"Academic Quality Assurance",
          text:
          "Ensuring excellence in teaching, evaluation processes and maintaining high academic standards."
        },


        {
          title:"Research & Innovation",
          text:
          "Encouraging research activities, collaborations and innovative approaches among faculty and students."
        },


        {
          title:"Faculty Development",
          text:
          "Promoting continuous learning and professional growth opportunities for faculty members."
        }

      ].map((item,index)=>(


        <div
          key={index}
          className="
            bg-white
            rounded-[28px]
            p-8
            flex
            gap-6
            shadow-md
            hover:shadow-xl
            transition
            duration-300
          "
        >


          {/* Number */}

          <div
            className="
              flex-shrink-0
              w-14
              h-14
              rounded-2xl
              bg-[#31572c]
              text-[#ecf39e]
              flex
              items-center
              justify-center
              text-xl
              font-bold
            "
          >
            0{index+1}
          </div>




          <div>

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
                text-gray-600
                mt-3
                leading-7
              "
            >
              {item.text}
            </p>


          </div>



        </div>


      ))}


    </div>






    {/* Board of Studies */}

    <div
  className="
    mt-16
    relative
    rounded-[35px]
    overflow-hidden
    shadow-2xl
    h-[320px]
  "
>


  {/* Background Image */}

  <img
    src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1600&q=80"
    alt="Academic Council"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
  />



  {/* Overlay */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#31572c]/95
      via-[#31572c]/80
      to-[#31572c]/50
    "
  />



  {/* Content */}

  <div
    className="
      relative
      z-10
      h-full
      flex
      flex-col
      justify-center
      items-center
      text-center
      px-6
      md:px-16
    "
  >


    <span
      className="
        text-[#cfe8a9]
        uppercase
        tracking-[4px]
        text-sm
        font-semibold
      "
    >
      Academic Governance
    </span>



    <h3
      className="
        text-3xl
        md:text-4xl
        font-bold
        text-white
        mt-4
      "
    >
      Board of Studies
    </h3>



    <p
      className="
        max-w-3xl
        mt-5
        text-white/85
        leading-8
      "
    >
      The Board of Studies plays a vital role in academic planning,
      curriculum development and ensuring that programs remain
      aligned with industry requirements and emerging trends.
    </p>



    <button
      className="
        mt-8
        px-8
        py-3
        rounded-full
        bg-[#ecf39e]
        text-[#31572c]
        font-semibold
        hover:bg-white
        transition
        duration-300
      "
    >
      View Academic Structure →
    </button>


  </div>


</div>



  </div>


</section>




<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center mb-16">


      <span
        className="
          text-[#578B07]
          uppercase
          tracking-[3px]
          text-sm
          font-semibold
        "
      >
        Institutional Committees
      </span>


      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#31572c]
          mt-4
        "
      >
        University Committees
      </h2>


      <p
        className="
          max-w-3xl
          mx-auto
          mt-5
          text-gray-600
          leading-8
        "
      >
        Various committees at IPS University ensure
        transparency, student support, academic quality
        and a safe learning environment.
      </p>


    </div>





    {/* Committee Cards */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
      "
    >


      {[
        {
          title:"Internal Quality Assurance Cell",
          short:"IQAC",
          desc:"Ensures continuous improvement in academic and administrative quality."
        },


        {
          title:"Anti Ragging Committee",
          short:"ARC",
          desc:"Works towards maintaining a safe, respectful and friendly campus environment."
        },


        {
          title:"Grievance Redressal Cell",
          short:"GRC",
          desc:"Provides a transparent platform for addressing student and stakeholder concerns."
        },


        {
          title:"Internal Complaints Committee",
          short:"ICC",
          desc:"Promotes a safe campus by preventing harassment and supporting equality."
        },


        {
          title:"Student Welfare Committee",
          short:"SWC",
          desc:"Focuses on student development, activities and overall wellbeing."
        },


        {
          title:"Research & Innovation Committee",
          short:"RIC",
          desc:"Encourages research culture, innovation and academic collaborations."
        },


        {
          title:"Training & Placement Cell",
          short:"TPC",
          desc:"Supports career development and industry engagement opportunities."
        },


        {
          title:"Discipline Committee",
          short:"DC",
          desc:"Maintains discipline and promotes ethical values across campus."
        }

      ].map((item,index)=>(


        <div
          key={index}
          className="
            group
            relative
            bg-[#f7f9f3]
            rounded-[30px]
            p-7
            overflow-hidden
            hover:shadow-xl
            transition
            duration-300
          "
        >


          {/* Number */}

          <div
            className="
              absolute
              right-5
              top-4
              text-6xl
              font-bold
              text-[#31572c]/10
            "
          >
            0{index+1}
          </div>





          {/* Short Name */}

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#31572c]
              text-[#ecf39e]
              flex
              items-center
              justify-center
              font-bold
              text-lg
              mb-6
              group-hover:scale-110
              transition
            "
          >
            {item.short}
          </div>





          <h3
            className="
              text-xl
              font-bold
              text-[#31572c]
              leading-tight
            "
          >
            {item.title}
          </h3>



          <p
            className="
              text-gray-600
              text-sm
              mt-4
              leading-7
            "
          >
            {item.desc}
          </p>



          <div
            className="
              w-12
              h-1
              bg-[#8BAE45]
              rounded-full
              mt-6
            "
          />


        </div>


      ))}



    </div>



  </div>


</section>



    </div>

  );
};


export default Governance;