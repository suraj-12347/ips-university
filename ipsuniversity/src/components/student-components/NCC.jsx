import React from 'react'
import {Link} from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const NCC = () => {
  return (
    <>

    <section className="relative h-[460px] overflow-hidden mt-30">

  <img
    src="https://i.pinimg.com/1200x/54/b4/d7/54b4d784546927d91dca459ddff1bb32.jpg"
    alt="NCC Cadets"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/65 to-transparent" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">

    <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
      Unity & Discipline
    </span>

    <h1
      className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
      style={{ fontFamily: "Fraunces, serif" }}
    >
      National Cadet
      <br />
      Corps (NCC)
    </h1>

    <p className="text-white/85 max-w-2xl mt-5 leading-7">
      The National Cadet Corps develops disciplined, confident, and socially
      responsible young leaders through military training, adventure
      activities, community service, and national integration programmes.
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
        National Cadet Corps
      </span>

    </div>

  </div>

</section>

{/* Leadership Through Training */}

<section className="py-24 bg-[#f8faf6] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
          Leadership Training
        </span>

        <h2
          className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Transforming Students
          <br />
          Into Future Leaders
        </h2>

        <p className="text-gray-600 leading-8 mt-8">
          NCC equips cadets with confidence, discipline, leadership, and
          teamwork through structured training programmes. Every activity is
          designed to prepare students for real-life challenges while fostering
          patriotism and a strong sense of national responsibility.
        </p>

        <div className="space-y-7 mt-10">

          {[
            {
              title: "Drill & Parade",
              desc: "Developing precision, discipline and teamwork through regular parade practice."
            },
            {
              title: "Adventure Activities",
              desc: "Trekking, camps and outdoor experiences that build courage and resilience."
            },
            {
              title: "Community Service",
              desc: "Participating in awareness campaigns, social initiatives and national service."
            },
          ].map((item, index) => (

            <div
              key={index}
              className="flex gap-5"
            >

              <div className="w-12 h-12 rounded-full bg-[#31572c] text-white flex items-center justify-center font-semibold">
                0{index + 1}
              </div>

              <div>

                <h4 className="text-xl font-semibold text-[#31572c]">
                  {item.title}
                </h4>

                <p className="text-gray-600 mt-2 leading-7">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Right */}

      <div className="relative">

        <img
          src="https://i.pinimg.com/1200x/cf/dc/d2/cfdcd2bcd33bfc2f3cd25bd08f7a3f37.jpg"
          alt="NCC Cadets"
          className="w-full h-[600px] object-cover rounded-[32px]"
        />

        <img
          src="https://i.pinimg.com/736x/a5/06/49/a506491334700cd4d324634661dd2ffc.jpg"
          alt="NCC Training"
          className="absolute -bottom-10 -right-10 w-60 h-72 rounded-[26px] object-cover border-[8px] border-white shadow-2xl hidden lg:block"
        />

      </div>

    </div>

  </div>

</section>

{/* Training & Camp Highlights */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
        Training & Camps
      </span>

      <h2
        className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Experiences That
        <br />
        Build Confidence
      </h2>

      <p className="text-gray-600 mt-6 leading-8">
        NCC provides cadets with diverse opportunities through camps,
        adventure activities, drills and national-level training programmes
        that develop discipline, courage and leadership skills.
      </p>

    </div>


    {/* Row 1 */}

    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

      <img
        src="https://i.pinimg.com/1200x/16/8c/13/168c13c3c595a3f5c3d8ee28c271581a.jpg"
        alt="NCC Camp"
        className="w-full h-[500px] object-cover rounded-[32px]"
      />

      <div>

        <span className="uppercase tracking-[3px] text-sm font-semibold text-[#578B07]">
          Annual Training Camp
        </span>

        <h3
          className="text-3xl font-bold text-[#31572c] mt-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Learning Through Discipline
        </h3>

        <p className="text-gray-600 mt-6 leading-8">
          NCC camps provide cadets with practical training, teamwork
          experiences and opportunities to interact with students from
          different regions, promoting unity and national integration.
        </p>

      </div>

    </div>


    {/* Row 2 */}

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div className="order-2 lg:order-1">

        <span className="uppercase tracking-[3px] text-sm font-semibold text-[#578B07]">
          Adventure Activities
        </span>

        <h3
          className="text-3xl font-bold text-[#31572c] mt-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Courage Beyond Limits
        </h3>

        <p className="text-gray-600 mt-6 leading-8">
          Trekking, obstacle training, outdoor activities and adventure camps
          help cadets develop confidence, endurance, decision-making skills and
          the ability to overcome challenges.
        </p>

      </div>


      <img
        src="https://i.pinimg.com/736x/8d/97/b2/8d97b2cf956c4fa688ed2008ea199fc0.jpg"
        alt="NCC Adventure"
        className="order-1 lg:order-2 w-full h-[500px] object-cover  rounded-[32px]"
      />

    </div>


  </div>

</section>

{/* NCC Impact & Achievements */}

<section className="py-24 bg-[#f8faf6] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">


      {/* Left Image */}

      <div className="relative">

        <img
          src="https://i.pinimg.com/736x/b0/67/c1/b067c13e47a919a844775fbbb0ea9308.jpg"
          alt="NCC Cadets"
          className="w-full h-[600px] object-cover rounded-[32px]"
        />

        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-3xl p-6">

          <p className="uppercase tracking-[3px] text-xs font-semibold text-[#578B07]">
            Our Strength
          </p>

          <h3
            className="text-3xl font-bold text-[#31572c] mt-2"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Trained To Lead
          </h3>

        </div>

      </div>


      {/* Right Content */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
          Achievements
        </span>

        <h2
          className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Building Confidence
          <br />
          Through NCC
        </h2>

        <p className="text-gray-600 mt-7 leading-8">
          NCC activities provide students with opportunities to participate in
          training camps, national events, social initiatives and leadership
          programmes while developing discipline, confidence and teamwork.
        </p>


        <div className="grid grid-cols-2 gap-6 mt-10">

          {[
            {
              number: "500+",
              title: "Active Cadets"
            },
            {
              number: "50+",
              title: "Training Camps"
            },
            {
              number: "100+",
              title: "Certificates"
            },
            {
              number: "25+",
              title: "Social Activities"
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[28px] p-7 border border-[#edf2e8] hover:-translate-y-2 transition duration-300"
            >

              <h3
                className="text-4xl font-bold text-[#31572c]"
                style={{ fontFamily: "Fraunces, serif" }}
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

    </div>

  </div>

</section>

{/* NCC Motto */}

<section className="relative py-32 overflow-hidden">

  <img
    src="https://i.pinimg.com/736x/96/ba/f7/96baf76e4b2d7eb17c39263e05696876.jpg"
    alt="NCC Cadets"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/70 to-[#31572c]/80" />


  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">


    <div className="max-w-4xl mx-auto text-center">


      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#d8efb5]">
        NCC Philosophy
      </span>


      <h2
        className="text-5xl md:text-7xl font-bold text-white mt-6 leading-tight"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Unity
        <br />
        & Discipline
      </h2>


      <p className="text-white/85 text-lg leading-8 mt-8 max-w-3xl mx-auto">
        The motto of the National Cadet Corps represents the spirit of
        togetherness, discipline and commitment. NCC inspires young minds to
        serve the nation with dedication, courage and responsibility.
      </p>


    </div>



    {/* Values Card */}

    <div className="mt-20 max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 md:p-12">


      <div className="grid md:grid-cols-3 gap-10 text-center">


        <div>

          <h3
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Unity
          </h3>

          <p className="text-white/80 mt-3 leading-7">
            Building teamwork and harmony among cadets from diverse backgrounds.
          </p>

        </div>



        <div>

          <h3
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Discipline
          </h3>

          <p className="text-white/80 mt-3 leading-7">
            Developing self-control, confidence and responsible behaviour.
          </p>

        </div>



        <div>

          <h3
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Service
          </h3>

          <p className="text-white/80 mt-3 leading-7">
            Encouraging cadets to contribute towards society and nation.
          </p>

        </div>


      </div>


    </div>


  </div>


</section>
{/* Cadet Memories */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
        Cadet Memories
      </span>

      <h2
        className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Moments Of
        <br />
        Pride & Honour
      </h2>

      <p className="text-gray-600 mt-6 leading-8">
        A glimpse of NCC cadets participating in training, camps, parades and
        activities that build confidence, discipline and leadership.
      </p>

    </div>


    {/* Images */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


      <div className="relative group overflow-hidden rounded-[30px] h-[450px]">

        <img
          src="https://i.pinimg.com/736x/99/18/64/9918643810d6ab2014c15c470162ac44.jpg"
          alt="NCC Camp"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#31572c]/70 to-transparent" />

        <p className="absolute bottom-6 left-6 text-white text-xl font-semibold">
          Training Camps
        </p>

      </div>



      <div className="relative group overflow-hidden rounded-[30px] h-[350px] mt-0 lg:mt-12">

        <img
          src="https://i.pinimg.com/736x/b8/66/a4/b866a438386379b64d915ddb638f0cfb.jpg"
          alt="NCC Parade"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#31572c]/70 to-transparent" />

        <p className="absolute bottom-6 left-6 text-white text-xl font-semibold">
          Discipline & Drill
        </p>

      </div>



      <div className="relative group overflow-hidden rounded-[30px] h-[450px]">

        <img
          src="https://i.pinimg.com/1200x/37/6d/2d/376d2d374b5c6a31c82db7199c6711e5.jpg"
          alt="Adventure Activity"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#31572c]/70 to-transparent" />

        <p className="absolute bottom-6 left-6 text-white text-xl font-semibold">
          Adventure Activities
        </p>

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
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Faculty & Student
        <br />
        Coordinators
      </h2>

    </div>



    <div className="grid lg:grid-cols-3 gap-8">


      {/* Faculty Coordinator */}

      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm">

        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
          alt="Faculty Coordinator"
          className="w-full h-[380px] object-cover"
        />

        <div className="p-7">

          <span className="uppercase tracking-[3px] text-xs font-semibold text-[#578B07]">
            Faculty Coordinator
          </span>

          <h3
            className="text-2xl font-bold text-[#31572c] mt-3"
            style={{ fontFamily: "Fraunces, serif" }}
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
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Aman Singh
            </h3>

            <p className="text-gray-600 mt-2">
              Senior Under Officer
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
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Priya Verma
            </h3>

            <p className="text-gray-600 mt-2">
              Junior Under Officer
            </p>

          </div>

        </div>


      </div>


    </div>


  </div>

</section>
{/* Join NCC CTA */}

<section className="relative py-32 overflow-hidden">

  <img
    src="https://i.pinimg.com/1200x/54/b4/d7/54b4d784546927d91dca459ddff1bb32.jpg"
    alt="NCC Cadets"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/75 to-[#31572c]/85" />


  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">


    <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
      Become A Cadet
    </span>


    <h2
      className="text-4xl md:text-6xl font-bold text-white mt-5 leading-tight"
      style={{ fontFamily: "Fraunces, serif" }}
    >
      Build Character,
      <br />
      Lead With Courage
    </h2>


    <p className="text-white/85 text-lg leading-8 max-w-3xl mx-auto mt-8">
      Join the National Cadet Corps and experience a journey of discipline,
      leadership, adventure and service while developing the confidence to
      contribute towards society and the nation.
    </p>


    <div className="flex flex-wrap justify-center gap-5 mt-12">


      <Link
        to="/contact"
        className="bg-white text-[#31572c] px-8 py-4 rounded-full font-semibold hover:bg-[#ecf39e] transition duration-300"
      >
        Join NCC
      </Link>


      <Link
        to="/gallery"
        className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#31572c] transition duration-300"
      >
        View Activities
      </Link>


    </div>


  </div>

</section>
      
    </>
  )
}

export default NCC
