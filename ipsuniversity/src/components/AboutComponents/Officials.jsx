import React from "react";
import {Link} from 'react-router-dom'
import { ArrowRight } from "lucide-react";
import ctm1900 from '../../images1/ctm1900.png'

const leadershipData = [
  {
    name: "Prof. (Dr.) ABC XYZ",
    role: "Chairperson, IPS University",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
    message:
      "At IPS University, we believe in creating an environment where education, innovation and values come together to shape future leaders."
  },

  {
    name: "Prof. (Dr.) ABC XYZ",
    role: "Vice Chancellor, IPS University",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    message:
      "Our commitment is to provide quality education, encourage research and empower students with knowledge and skills."
  }
];


const Leadership = () => {
  return (
    <>

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
            University Officials
          </h1>


          <p
            className="
              text-white/80
              max-w-xl
              mt-5
              leading-7
            "
          >
           Meet the dedicated officials who ensure effective governance,
academic excellence, and smooth functioning of IPS University.
          </p>

                    <div className="flex items-center text-white gap-2 mt-8 text-sm">

  <Link
    to="/"
    className="text-[var(--white)] transition"
  >
    Home
  </Link>


  <ArrowRight size={16} />


  <Link
    to="/about"
    className="text-[var(--white)] transition"
  >
    About
  </Link>


  <ArrowRight size={16} />


  <span className="text-[#cde8a3] font-semibold">
    Officials
  </span>

</div>


        </div>

      </section>




      {/* ================= TOP LEADERSHIP ================= */}


      <section className="py-24 bg-[#f7f9f3]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">


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
              Our Leadership
            </span>


            <h2
              className="
                text-4xl
                font-bold
                text-[#31572c]
                mt-3
              "
            >
              Guiding IPS University
            </h2>

          </div>




          <div className="space-y-10">


            {leadershipData.map((person, index) => (

              <div
                key={index}
                className="
                  bg-white
                  rounded-[32px]
                  overflow-hidden
                  shadow-lg
                  flex
                  flex-col
                  md:flex-row
                  hover:shadow-2xl
                  transition
                  duration-300
                "
              >


                {/* Profile Image */}

                <div
                  className="
                    md:w-[35%]
                    h-[350px]
                  "
                >

                  <img
                    src={person.image}
                    alt={person.name}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </div>



                {/* Message */}

                <div
                  className="
                    flex-1
                    p-8
                    md:p-12
                    flex
                    flex-col
                    justify-center
                  "
                >

                  <span
                    className="
                      text-[#8BAE45]
                      uppercase
                      tracking-[3px]
                      text-sm
                      font-semibold
                    "
                  >
                    Leadership Message
                  </span>



                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-[#31572c]
                      mt-4
                    "
                  >
                    {person.name}
                  </h3>



                  <p
                    className="
                      text-[#578B07]
                      font-medium
                      mt-2
                    "
                  >
                    {person.role}
                  </p>



                  <div
                    className="
                      w-20
                      h-1
                      bg-[#8BAE45]
                      rounded-full
                      my-6
                    "
                  />



                  <p
                    className="
                      text-gray-600
                      leading-8
                    "
                  >
                    {person.message}
                  </p>


                </div>


              </div>

            ))}


          </div>


        </div>


      </section>

      {/* // ================= UNIVERSITY OFFICIALS SECTION ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Section Heading */}
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
        Administration
      </span>


      <h2
        className="
          text-4xl
          font-bold
          text-[#31572c]
          mt-3
        "
      >
        University Officials
      </h2>


      <p
        className="
          text-gray-600
          mt-4
          max-w-2xl
          mx-auto
          leading-7
        "
      >
        Meet the dedicated officials responsible for academic,
        administrative and student affairs at IPS University.
      </p>

    </div>




    {/* Officials Data */}

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
      name: "Prof. (Dr.) ABC XYZ",
      role: "Registrar",
      message:
        "Ensuring smooth administration and creating an efficient academic environment for institutional growth.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Dr. ABC XYZ",
      role: "Dean Academics",
      message:
        "Committed to academic excellence, innovative learning methods, and continuous improvement in education.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Dr. ABC XYZ",
      role: "Dean Student Welfare",
      message:
        "Focused on student development, welfare initiatives, and building a supportive campus community.",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Prof. ABC XYZ",
      role: "Director Admissions",
      message:
        "Guiding students through transparent admission processes and helping them begin their academic journey.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Dr. ABC XYZ",
      role: "Controller of Examination",
      message:
        "Maintaining fairness, accuracy, and transparency in examination and evaluation systems.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Dr. ABC XYZ",
      role: "Dean Research",
      message:
        "Promoting innovation, research excellence, and collaboration for impactful discoveries.",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Prof. ABC XYZ",
      role: "Director Training & Placement",
      message:
        "Preparing students for professional success through industry exposure and career opportunities.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Dr. ABC XYZ",
      role: "Finance Officer",
      message:
        "Managing financial operations with transparency, efficiency, and responsible planning.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
  ].map((official, index) => (
    <div
      key={index}
      className="
        group
        bg-[#f7f9f3]
        rounded-[28px]
        overflow-hidden
        shadow-md
        hover:shadow-xl
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >

      {/* Image */}

      <div
        className="
          h-[280px]
          overflow-hidden
          relative
        "
      >
        <img
          src={official.image}
          alt={official.name}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

        {/* Bottom Gradient */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-24
            bg-gradient-to-t
            from-black/40
            to-transparent
          "
        ></div>

      </div>


      {/* Details */}

      <div
        className="
          p-6
          text-center
        "
      >

        <h3
          className="
            text-xl
            font-bold
            text-[#31572c]
          "
        >
          {official.name}
        </h3>


        <p
          className="
            mt-2
            text-[#578B07]
            font-medium
            text-sm
          "
        >
          {official.role}
        </p>


        <div
          className="
            w-10
            h-[2px]
            bg-[#d4a14d]
            mx-auto
            my-4
          "
        ></div>


        <p
          className="
            text-sm
            text-gray-600
            leading-6
            line-clamp-3
          "
        >
          "{official.message}"
        </p>


        <button
          className="
            mt-5
            text-sm
            font-semibold
            text-[#578B07]
            hover:text-[#31572c]
            transition
          "
        >
          Read More
        </button>

      </div>

    </div>
  ))}

</div>


  </div>


</section>

{/* // ================= UNIVERSITY OFFICIALS SECTION ================= */}



{/* // ================= ACADEMIC LEADERSHIP SECTION ================= */}

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
        Academic Leadership
      </span>


      <h2
        className="
          text-4xl
          font-bold
          text-[#31572c]
          mt-3
        "
      >
        Deans & Department Heads
      </h2>


      <p
        className="
          text-gray-600
          max-w-2xl
          mx-auto
          mt-4
          leading-7
        "
      >
        Our academic leaders ensure excellence in teaching,
        research and innovation across various disciplines.
      </p>

    </div>




    {/* Dean Cards */}

    <div
      className="
        grid
        md:grid-cols-3
        gap-8
      "
    >


      {[
        {
          name:"Dr. ABC XYZ",
          role:"Dean, School of Engineering",
          department:"Computer Science & Engineering",
          image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Dr. ABC XYZ",
          role:"Dean, School of Management",
          department:"Management Studies",
          image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Dr. ABC XYZ",
          role:"Dean, School of Pharmacy",
          department:"Pharmaceutical Sciences",
          image:
          "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Dr. ABC XYZ",
          role:"Head of Department",
          department:"Civil Engineering",
          image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Dr. ABC XYZ",
          role:"Head of Department",
          department:"Mechanical Engineering",
          image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
        },


        {
          name:"Dr. ABC XYZ",
          role:"Head of Department",
          department:"Electrical Engineering",
          image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
        }

      ].map((leader,index)=>(


        <div
          key={index}
          className="
            bg-white
            rounded-[30px]
            p-6
            shadow-md
            hover:shadow-xl
            transition
            duration-300
            flex
            items-center
            gap-5
          "
        >


          {/* Small Image */}

          <img
            src={leader.image}
            alt={leader.name}
            className="
              w-24
              h-24
              rounded-full
              object-cover
              border-4
              border-[#ecf39e]
            "
          />



          {/* Info */}

          <div>

            <h3
              className="
                font-bold
                text-lg
                text-[#31572c]
              "
            >
              {leader.name}
            </h3>


            <p
              className="
                text-[#578B07]
                text-sm
                font-medium
              "
            >
              {leader.role}
            </p>


            <p
              className="
                text-gray-500
                text-sm
                mt-1
              "
            >
              {leader.department}
            </p>


          </div>


        </div>


      ))}


    </div>


  </div>


</section>

{/* // ================= GOVERNANCE STRUCTURE SECTION ================= */}




    </>
  );
};


export default Leadership;