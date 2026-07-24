import React from 'react'
import {Link} from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Pahal = () => {
  return (
    <>

    <section className="relative h-[430px] overflow-hidden mt-30">

  <img
    src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1800"
    alt="PAHAL Initiative"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/65 to-transparent" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">

    <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
      Student Social Initiative
    </span>

    <h1
      className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
      style={{ fontFamily: "Fraunces, serif" }}
    >
      PAHAL
      <br />
      Empowering Communities
    </h1>

    <p className="text-white/85 max-w-2xl mt-5 leading-7">
      PAHAL provides students with a platform to engage in meaningful social
      initiatives, community outreach, and awareness programmes while creating
      a positive impact on society.
    </p>

    <div className="flex items-center gap-2 text-white text-sm mt-8 flex-wrap">

      <Link to="/" className="hover:text-[#cfe8a9] transition">
        Home
      </Link>

      <ArrowRight size={16} />

      <Link
        to="/students-zone"
        className="hover:text-[#cfe8a9] transition"
      >
        Student Zone
      </Link>

      <ArrowRight size={16} />

      <span className="text-[#cfe8a9] font-semibold">
        PAHAL
      </span>

    </div>

  </div>

</section>


<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">


      {/* Image */}

      <div className="relative">

        <img
          src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="PAHAL Volunteers"
          className="w-full h-[540px] object-cover rounded-[32px]"
        />


        <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-xl p-7 border border-gray-100 hidden md:block">

          <p className="uppercase tracking-[3px] text-xs font-semibold text-[#578B07]">
            Our Vision
          </p>

          <h3
            className="text-2xl mt-2 font-bold text-[#31572c]"
            style={{ fontFamily:"Fraunces, serif" }}
          >
            Inspire
            <br />
            Change
          </h3>

        </div>

      </div>



      {/* Content */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
          About PAHAL
        </span>


        <h2
          className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4 leading-tight"
          style={{ fontFamily:"Fraunces, serif" }}
        >
          Creating Impact
          <br />
          Through Action
        </h2>


        <p className="text-gray-600 leading-8 mt-8">
          PAHAL is a student-driven initiative focused on encouraging social
          responsibility, community participation, and meaningful engagement
          beyond academics.
        </p>


        <p className="text-gray-600 leading-8 mt-5">
          Through awareness campaigns, outreach programmes, and collaborative
          activities, PAHAL empowers students to develop leadership skills and
          contribute towards a better society.
        </p>


        <div className="grid grid-cols-2 gap-5 mt-10">

          {[
            "Social Awareness",
            "Community Service",
            "Student Leadership",
            "Positive Change",
          ].map((item,index)=>(

            <div
              key={index}
              className="flex items-center gap-3"
            >

              <div className="w-3 h-3 rounded-full bg-[#578B07]" />

              <span className="text-gray-700 font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>


      </div>


    </div>

  </div>

</section>

{/* PAHAL Initiatives */}

<section className="py-24 bg-[#f8faf6] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
        Our Initiatives
      </span>

      <h2
        className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4"
        style={{ fontFamily:"Fraunces, serif" }}
      >
        Actions That Create
        <br />
        Meaningful Change
      </h2>

      <p className="text-gray-600 mt-6 leading-8">
        PAHAL encourages students to participate in activities that address
        social challenges and create a positive impact through teamwork and
        dedication.
      </p>

    </div>



    {/* Row 1 */}

    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">


      <img
        src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1400"
        alt="Community Awareness"
        className="w-full h-[500px] object-cover rounded-[32px]"
      />


      <div>

        <span className="uppercase tracking-[3px] text-sm font-semibold text-[#578B07]">
          Awareness Programs
        </span>


        <h3
          className="text-3xl font-bold text-[#31572c] mt-4"
          style={{ fontFamily:"Fraunces, serif" }}
        >
          Spreading Knowledge,
          <br />
          Inspiring Communities
        </h3>


        <p className="text-gray-600 mt-6 leading-8">
          Students organize awareness campaigns on important social issues,
          encouraging people to adopt responsible practices and create a more
          informed society.
        </p>


      </div>


    </div>



    {/* Row 2 */}

    <div className="grid lg:grid-cols-2 gap-16 items-center">


      <div className="order-2 lg:order-1">


        <span className="uppercase tracking-[3px] text-sm font-semibold text-[#578B07]">
          Community Service
        </span>


        <h3
          className="text-3xl font-bold text-[#31572c] mt-4"
          style={{ fontFamily:"Fraunces, serif" }}
        >
          Students Leading
          <br />
          Positive Change
        </h3>


        <p className="text-gray-600 mt-6 leading-8">
          Through volunteering, outreach activities and collaborative efforts,
          PAHAL provides students with opportunities to serve society while
          developing leadership and teamwork skills.
        </p>


      </div>



      <img
        src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1400"
        alt="Student Volunteers"
        className="order-1 lg:order-2 w-full h-[500px] object-cover rounded-[32px]"
      />


    </div>


  </div>

</section>

{/* PAHAL Impact */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">


      {/* Left Content */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
          Our Impact
        </span>


        <h2
          className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4 leading-tight"
          style={{ fontFamily:"Fraunces, serif" }}
        >
          Small Steps,
          <br />
          Meaningful Change
        </h2>


        <p className="text-gray-600 mt-7 leading-8">
          PAHAL empowers students to transform ideas into action through
          community engagement, social initiatives, and collaborative efforts.
          Every activity creates learning opportunities while contributing to
          positive change.
        </p>



        <div className="grid grid-cols-2 gap-6 mt-10">


          {[
            {
              number:"500+",
              title:"Student Participants"
            },
            {
              number:"50+",
              title:"Social Activities"
            },
            {
              number:"25+",
              title:"Awareness Drives"
            },
            {
              number:"15+",
              title:"Community Programs"
            },
          ].map((item,index)=>(

            <div
              key={index}
              className="bg-[#f8faf6] rounded-[28px] p-7 border border-[#edf2e8] hover:-translate-y-2 transition duration-300"
            >

              <h3
                className="text-4xl font-bold text-[#31572c]"
                style={{ fontFamily:"Fraunces, serif" }}
              >
                {item.number}
              </h3>


              <p className="text-gray-600 mt-3">
                {item.title}
              </p>


            </div>

          ))}


        </div>


      </div>



      {/* Right Image */}

      <div className="relative">


        <img
          src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Student Engagement"
          className="w-full h-[620px] object-cover rounded-[34px]"
        />


        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-3xl p-6">


          <p className="uppercase tracking-[3px] text-xs font-semibold text-[#578B07]">
            Student Power
          </p>


          <h3
            className="text-3xl font-bold text-[#31572c] mt-2"
            style={{ fontFamily:"Fraunces, serif" }}
          >
            Together We Create Impact
          </h3>


        </div>


      </div>


    </div>

  </div>

</section>

{/* PAHAL Vision Mission */}

<section className="relative py-32 overflow-hidden">

  <img
    src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1800"
    alt="PAHAL Community"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/75 to-[#31572c]/85" />


  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-4xl mx-auto">


      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
        Our Purpose
      </span>


      <h2
        className="text-5xl md:text-6xl font-bold text-white mt-5"
        style={{ fontFamily:"Fraunces, serif" }}
      >
        Vision & Mission
      </h2>


      <p className="text-white/85 mt-7 leading-8 text-lg">
        PAHAL aims to create socially responsible students by encouraging
        empathy, leadership and active participation in initiatives that bring
        positive change to society.
      </p>


    </div>



    {/* Cards */}

    <div className="grid md:grid-cols-2 gap-8 mt-16">


      {/* Vision */}

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-10">


        <h3
          className="text-3xl font-bold text-white"
          style={{ fontFamily:"Fraunces, serif" }}
        >
          Our Vision
        </h3>


        <p className="text-white/80 leading-8 mt-5">
          To inspire students to become compassionate leaders who actively
          contribute towards building an inclusive, aware and progressive
          society.
        </p>


      </div>



      {/* Mission */}

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-10">


        <h3
          className="text-3xl font-bold text-white"
          style={{ fontFamily:"Fraunces, serif" }}
        >
          Our Mission
        </h3>


        <p className="text-white/80 leading-8 mt-5">
          To provide students with opportunities for community engagement,
          social learning and collaborative action through meaningful
          initiatives.
        </p>


      </div>


    </div>



    {/* Values */}

    <div className="grid md:grid-cols-3 gap-8 mt-10">


      {[
        "Empathy",
        "Leadership",
        "Responsibility"
      ].map((item,index)=>(

        <div
          key={index}
          className="bg-white rounded-[28px] p-7 text-center"
        >

          <h4
            className="text-2xl font-bold text-[#31572c]"
            style={{fontFamily:"Fraunces, serif"}}
          >
            {item}
          </h4>

        </div>

      ))}


    </div>


  </div>

</section>


{/* PAHAL Moments */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
        Our Moments
      </span>


      <h2
        className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4"
        style={{ fontFamily:"Fraunces, serif" }}
      >
        Stories Of
        <br />
        Service & Impact
      </h2>


      <p className="text-gray-600 mt-6 leading-8">
        A glimpse of PAHAL activities where students collaborate, volunteer and
        create meaningful experiences through social initiatives.
      </p>


    </div>



    {/* Gallery */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


      {/* Image 1 */}

      <div className="relative group overflow-hidden rounded-[30px] h-[470px]">

        <img
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Community Service"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#31572c]/70 to-transparent" />


        <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
          Community Outreach
        </h3>

      </div>



      {/* Image 2 */}

      <div className="relative group overflow-hidden rounded-[30px] h-[360px] lg:mt-14">


        <img
          src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Student Volunteers"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />


        <div className="absolute inset-0 bg-gradient-to-t from-[#31572c]/70 to-transparent" />


        <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
          Student Participation
        </h3>


      </div>



      {/* Image 3 */}

      <div className="relative group overflow-hidden rounded-[30px] h-[470px]">


        <img
          src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Social Initiative"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />


        <div className="absolute inset-0 bg-gradient-to-t from-[#31572c]/70 to-transparent" />


        <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
          Social Initiatives
        </h3>


      </div>


    </div>


  </div>

</section>


{/* Faculty & Student Coordinators */}

<section className="py-24 bg-[#f8faf6] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
        Leadership Team
      </span>


      <h2
        className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4"
        style={{ fontFamily:"Fraunces, serif" }}
      >
        Faculty & Student
        <br />
        Coordinators
      </h2>


      <p className="text-gray-600 mt-6 leading-8">
        Our coordinators guide students, manage activities and ensure the
        successful execution of PAHAL initiatives throughout the year.
      </p>


    </div>



    <div className="grid lg:grid-cols-3 gap-8">


      {/* Faculty Coordinator */}

      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm">


        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
          alt="Faculty Coordinator"
          className="w-full h-[390px] object-cover"
        />


        <div className="p-8">


          <span className="uppercase tracking-[3px] text-xs font-semibold text-[#578B07]">
            Faculty Coordinator
          </span>


          <h3
            className="text-2xl font-bold text-[#31572c] mt-3"
            style={{ fontFamily:"Fraunces, serif" }}
          >
            Dr. Rajesh Sharma
          </h3>


          <p className="text-gray-600 mt-2">
            Associate Professor
          </p>


        </div>


      </div>




      {/* Student Coordinators */}

      <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">


        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm">


          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
            alt="Student Coordinator"
            className="w-full h-[320px] object-cover"
          />


          <div className="p-7">


            <span className="uppercase tracking-[3px] text-xs font-semibold text-[#578B07]">
              Student Coordinator
            </span>


            <h3
              className="text-2xl font-bold text-[#31572c] mt-3"
              style={{ fontFamily:"Fraunces, serif" }}
            >
              Aman Singh
            </h3>


            <p className="text-gray-600 mt-2">
              Student Volunteer
            </p>


          </div>


        </div>




        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm">


          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
            alt="Student Coordinator"
            className="w-full h-[320px] object-cover"
          />


          <div className="p-7">


            <span className="uppercase tracking-[3px] text-xs font-semibold text-[#578B07]">
              Student Coordinator
            </span>


            <h3
              className="text-2xl font-bold text-[#31572c] mt-3"
              style={{ fontFamily:"Fraunces, serif" }}
            >
              Priya Verma
            </h3>


            <p className="text-gray-600 mt-2">
              Student Volunteer
            </p>


          </div>


        </div>



      </div>


    </div>


  </div>


</section>
{/* Join PAHAL CTA */}

<section className="relative py-32 overflow-hidden">

  <img
    src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1800"
    alt="PAHAL Students"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/75 to-[#31572c]/85" />


  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">


    <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
      Be The Change
    </span>


    <h2
      className="text-4xl md:text-6xl font-bold text-white mt-5 leading-tight"
      style={{ fontFamily:"Fraunces, serif" }}
    >
      Together We Can
      <br />
      Create Impact
    </h2>


    <p className="text-white/85 text-lg leading-8 max-w-3xl mx-auto mt-8">
      Join PAHAL and become a part of meaningful initiatives that encourage
      social responsibility, leadership and positive transformation in the
      community.
    </p>


    <div className="flex flex-wrap justify-center gap-5 mt-12">


      <Link
        to="/contact"
        className="bg-white text-[#31572c] px-8 py-4 rounded-full font-semibold hover:bg-[#ecf39e] transition duration-300"
      >
        Join PAHAL
      </Link>


      <Link
        to="/gallery"
        className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#31572c] transition duration-300"
      >
        Explore Activities
      </Link>


    </div>


  </div>


</section>
      
    </>
  )
}

export default Pahal
