import React from "react";
import {
  Users,
  ArrowRight,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

import ctm1900 from "../../images1/ctm1900.png";

const Advisors = () => {
 const advisors = [
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    name: "Prof. (Dr.) ABC XYZ",
    designation: "Chief Advisor",
    organization: "Former Vice Chancellor",
    expertise: "Higher Education Policy",
    message:
      "Providing strategic guidance and leadership support to strengthen academic excellence and institutional growth.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    name: "Dr. ABC XYZ",
    designation: "Academic Advisor",
    organization: "IIT Delhi",
    expertise: "Artificial Intelligence",
    message:
      "Supporting innovation-driven education and encouraging advanced research in emerging technologies.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    name: "Prof. ABC XYZ",
    designation: "Industry Advisor",
    organization: "TCS Research",
    expertise: "Digital Transformation",
    message:
      "Bridging the gap between industry and academia through technology, collaboration, and innovation.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    name: "Dr. ABC XYZ",
    designation: "Research Advisor",
    organization: "DRDO",
    expertise: "Innovation & Research",
    message:
      "Promoting research excellence and guiding initiatives focused on innovation and impactful solutions.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
    name: "Prof. ABC XYZ",
    designation: "International Advisor",
    organization: "University of London",
    expertise: "Global Education",
    message:
      "Helping develop global academic collaborations and international learning opportunities.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    name: "Dr. ABC XYZ",
    designation: "Corporate Advisor",
    organization: "Infosys",
    expertise: "Technology Strategy",
    message:
      "Guiding technology strategies and preparing students for future industry requirements.",
  },
];

  return (
    <div>

      {/* =====================================================
                          HERO SECTION
      ===================================================== */}

      <section className="relative h-[430px] overflow-hidden mt-30">

        <img
          src={ctm1900}
          alt="IPS University"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/95 via-[#31572c]/80 to-transparent" />

        <div
          className="
            relative
            z-10
            h-full
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            flex
            flex-col
            justify-center
          "
        >

          <span
            className="
              uppercase
              tracking-[4px]
              text-[#cfe8a9]
              text-sm
              font-semibold
            "
          >
            Leadership
          </span>

          <h1
            className="
              mt-4
              text-5xl
              md:text-6xl
              font-bold
              text-white
            "
          >
            Board of Advisors
          </h1>

          <p
            className="
              max-w-2xl
              mt-6
              text-white/85
              leading-8
            "
          >
            Distinguished academicians, researchers and
            industry leaders providing strategic guidance
            for academic excellence, innovation and
            sustainable growth at IPS University.
          </p>

          <div className="flex items-center gap-2 mt-8 text-white text-sm">

            <Link
              to="/"
              className="hover:text-[#cfe8a9] transition"
            >
              Home
            </Link>

            <ArrowRight size={15} />

            <Link
              to="/about"
              className="hover:text-[#cfe8a9] transition"
            >
              About
            </Link>

            <ArrowRight size={15} />

            <span className="text-[#cfe8a9] font-semibold">
              Board of Advisors
            </span>

          </div>

        </div>

      </section>



      {/* =====================================================
                    ABOUT ADVISORY BOARD
      ===================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span
                className="
                  uppercase
                  tracking-[3px]
                  text-sm
                  font-semibold
                  text-[#578B07]
                "
              >
                Strategic Leadership
              </span>

              <h2
                className="
                  mt-4
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-[#31572c]
                  leading-tight
                "
              >
                Guiding IPS University
                Towards Excellence
              </h2>

            </div>

            <div>

              <p
                className="
                  text-lg
                  leading-8
                  text-gray-600
                "
              >
                The Board of Advisors comprises eminent
                academicians, industry experts and policy
                leaders who provide strategic direction for
                academic innovation, research, institutional
                development and global collaboration.
              </p>

              <p
                className="
                  mt-6
                  text-gray-600
                  leading-8
                "
              >
                Their collective experience strengthens the
                University's vision by connecting education
                with industry needs, emerging technologies
                and international best practices.
              </p>

            </div>

          </div>



          {/* Stats */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-8
              mt-20
            "
          >

            {[
              {
                number: "15+",
                label: "Advisors",
                icon: <Users size={24} />,
              },

              {
                number: "20+",
                label: "Industry Experts",
                icon: <Briefcase size={24} />,
              },

              {
                number: "25+",
                label: "Academic Leaders",
                icon: <GraduationCap size={24} />,
              },

              {
                number: "Global",
                label: "Experience",
                icon: <Award size={24} />,
              },
            ].map((item, index) => (

              <div
                key={index}
                className="
                  rounded-[30px]
                  bg-[#f7f9f3]
                  p-8
                  border
                  border-[#ecf39e]
                  text-center
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition
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
                    mx-auto
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

                <p
                  className="
                    mt-3
                    text-gray-600
                    font-medium
                  "
                >
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
                      BOARD OF ADVISORS
      ===================================================== */}

      <section className="py-24 bg-[#f7f9f3]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <span
              className="
                uppercase
                tracking-[3px]
                text-[#578B07]
                text-sm
                font-semibold
              "
            >
              Distinguished Members
            </span>

            <h2
              className="
                mt-4
                text-4xl
                md:text-5xl
                font-bold
                text-[#31572c]
              "
            >
              Meet Our Advisors
            </h2>

            <p
              className="
                max-w-3xl
                mx-auto
                mt-6
                text-gray-600
                leading-8
              "
            >
              Visionary leaders from academia, research and
              industry helping IPS University create a
              future-ready ecosystem of education,
              innovation and leadership.
            </p>

          </div>



          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-10
            "
          >

            {advisors.map((advisor, index) => (

  <div
    key={index}
    className="
      group
      bg-white
      rounded-[34px]
      overflow-hidden
      shadow-md
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-500
    "
  >

    {/* Image */}

    <div className="relative h-[360px] overflow-hidden">

      <img
        src={advisor.image}
        alt={advisor.name}
        className="
          w-full
          h-full
          object-cover
          group-hover:scale-110
          transition-transform
          duration-700
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-transparent
          to-transparent
        "
      />


      <span
        className="
          absolute
          top-5
          left-5
          bg-[#ecf39e]
          text-[#31572c]
          text-xs
          font-bold
          px-4
          py-2
          rounded-full
        "
      >
        Advisor
      </span>

    </div>


    {/* Details */}

    <div className="p-8">

      <h3
        className="
          text-2xl
          font-bold
          text-[#31572c]
        "
      >
        {advisor.name}
      </h3>


      <p
        className="
          mt-2
          text-[#578B07]
          font-semibold
        "
      >
        {advisor.designation}
      </p>


      <p
        className="
          mt-3
          text-gray-600
        "
      >
        {advisor.organization}
      </p>


      {/* Message */}

      <p
        className="
          mt-5
          text-sm
          leading-6
          text-gray-600
          line-clamp-3
        "
      >
        "{advisor.message}"
      </p>


      <div
        className="
          inline-flex
          mt-6
          px-4
          py-2
          rounded-full
          bg-[#f7f9f3]
          text-[#31572c]
          font-semibold
          text-sm
        "
      >
        {advisor.expertise}
      </div>

    </div>

  </div>

))}

          </div>

        </div>

      </section>

            {/* =====================================================
                    INDUSTRY & ACADEMIC EXPERTISE
      ===================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Heading */}

          <div className="text-center mb-16">

            <span
              className="
                uppercase
                tracking-[3px]
                text-sm
                font-semibold
                text-[#578B07]
              "
            >
              Areas of Expertise
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
              Expertise That Shapes
              The Future
            </h2>

            <p
              className="
                max-w-3xl
                mx-auto
                mt-6
                leading-8
                text-gray-600
              "
            >
              Our advisors bring decades of experience from
              leading universities, research organizations and
              multinational industries, enabling IPS University
              to remain future-ready and globally competitive.
            </p>

          </div>





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
                title: "Artificial Intelligence",
                number: "01",
              },

              {
                title: "Engineering & Technology",
                number: "02",
              },

              {
                title: "Research & Innovation",
                number: "03",
              },

              {
                title: "Healthcare & Pharmacy",
                number: "04",
              },

              {
                title: "Digital Transformation",
                number: "05",
              },

              {
                title: "Management & Leadership",
                number: "06",
              },

              {
                title: "International Collaboration",
                number: "07",
              },

              {
                title: "Policy & Governance",
                number: "08",
              }

            ].map((item,index)=>(

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  bg-[#f7f9f3]
                  p-8
                  hover:bg-[#31572c]
                  transition
                  duration-500
                "
              >

                <span
                  className="
                    absolute
                    right-6
                    top-3
                    text-7xl
                    font-bold
                    text-[#31572c]/10
                    group-hover:text-white/10
                    transition
                  "
                >
                  {item.number}
                </span>

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
                    text-2xl
                    font-bold
                    group-hover:bg-[#ecf39e]
                    group-hover:text-[#31572c]
                    transition
                  "
                >
                  ✓
                </div>

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-bold
                    text-[#31572c]
                    leading-tight
                    group-hover:text-white
                    transition
                  "
                >
                  {item.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>





      {/* =====================================================
                    ADVISORY RESPONSIBILITIES
      ===================================================== */}

      <section className="py-24 bg-[#f7f9f3]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <span
              className="
                uppercase
                tracking-[3px]
                text-[#578B07]
                text-sm
                font-semibold
              "
            >
              Key Responsibilities
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
              Advisory Responsibilities
            </h2>

          </div>





          <div className="grid lg:grid-cols-2 gap-8">

            {[
              {
                title:"Academic Strategy",
                text:"Providing guidance for academic planning and curriculum enhancement."
              },

              {
                title:"Research Excellence",
                text:"Encouraging interdisciplinary research, innovation and publications."
              },

              {
                title:"Industry Collaboration",
                text:"Building partnerships with industries for internships, projects and placements."
              },

              {
                title:"International Linkages",
                text:"Supporting global collaborations and academic exchange initiatives."
              },

              {
                title:"Innovation Ecosystem",
                text:"Promoting entrepreneurship, incubation and startup culture."
              },

              {
                title:"Quality Assurance",
                text:"Ensuring continuous institutional improvement through best practices."
              }

            ].map((item,index)=>(

              <div
                key={index}
                className="
                  bg-white
                  rounded-[30px]
                  p-8
                  flex
                  gap-6
                  shadow-md
                  hover:shadow-xl
                  transition
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    flex-shrink-0
                    rounded-2xl
                    bg-[#31572c]
                    text-[#ecf39e]
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-xl
                  "
                >
                  0{index+1}
                </div>

                <div>

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
                      mt-4
                      text-gray-600
                      leading-7
                    "
                  >
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>






      {/* =====================================================
                  STRATEGIC GUIDANCE SECTION
      ===================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div
            className="
              rounded-[40px]
              overflow-hidden
              bg-gradient-to-r
              from-[#31572c]
              via-[#3b6635]
              to-[#578B07]
              p-12
              lg:p-16
            "
          >

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <span
                  className="
                    uppercase
                    tracking-[3px]
                    text-[#ecf39e]
                    font-semibold
                    text-sm
                  "
                >
                  Strategic Guidance
                </span>

                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    text-white
                    mt-5
                  "
                >
                  Empowering Institutional
                  Growth Through
                  Expert Guidance
                </h2>

                <p
                  className="
                    mt-6
                    leading-8
                    text-white/80
                  "
                >
                  The Board of Advisors works closely with
                  university leadership to strengthen academic
                  excellence, promote innovation, encourage
                  industry engagement and prepare students for
                  global opportunities.
                </p>

              </div>





              <div className="grid grid-cols-2 gap-6">

                {[
                  "Curriculum Development",
                  "Research Strategy",
                  "Global Partnerships",
                  "Industry Connect",
                  "Innovation Culture",
                  "Student Success"
                ].map((item,index)=>(

                  <div
                    key={index}
                    className="
                      bg-white/10
                      backdrop-blur-lg
                      border
                      border-white/20
                      rounded-2xl
                      p-6
                    "
                  >

                    <p
                      className="
                        text-white
                        font-semibold
                      "
                    >
                      ✓ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* =====================================================
                    CHAIRMAN'S MESSAGE
      ===================================================== */}

      <section className="py-24 bg-[#f7f9f3]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div
            className="
              grid
              lg:grid-cols-5
              gap-0
              overflow-hidden
              rounded-[40px]
              shadow-2xl
              bg-white
            "
          >

            {/* Left */}

            <div
              className="
                lg:col-span-3
                bg-[#31572c]
                p-12
                lg:p-16
                flex
                flex-col
                justify-center
              "
            >

              <span
                className="
                  uppercase
                  tracking-[3px]
                  text-[#ecf39e]
                  text-sm
                  font-semibold
                "
              >
                Chief Advisor's Vision
              </span>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-white
                  mt-6
                  leading-tight
                "
              >
                "Education should inspire
                innovation, cultivate values
                and prepare students for
                global leadership."
              </h2>

              <p
                className="
                  mt-8
                  text-white/80
                  leading-8
                  max-w-2xl
                "
              >
                Our Board of Advisors continuously
                guides IPS University in strengthening
                academic quality, research excellence,
                industry collaboration and innovation
                to prepare future-ready professionals.
              </p>

              <div className="mt-10">

                <h4 className="text-2xl font-bold text-[#ecf39e]">
                  Prof. (Dr.) ABC XYZ
                </h4>

                <p className="text-white/80 mt-2">
                  Chief Advisor
                </p>

              </div>

            </div>





            {/* Right */}

            <div className="lg:col-span-2">

              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                  min-h-[600px]
                "
              />

            </div>

          </div>

        </div>

      </section>





      {/* =====================================================
                    WHY OUR ADVISORS MATTER
      ===================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <span
              className="
                uppercase
                tracking-[3px]
                text-[#578B07]
                font-semibold
                text-sm
              "
            >
              Excellence Through Leadership
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
              Why Our Advisors Matter
            </h2>

          </div>





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
                number: "20+",
                title: "Years of Experience"
              },

              {
                number: "100+",
                title: "Research Contributions"
              },

              {
                number: "50+",
                title: "Industry Collaborations"
              },

              {
                number: "Global",
                title: "Academic Exposure"
              }

            ].map((item,index)=>(

              <div
                key={index}
                className="
                  text-center
                  rounded-[30px]
                  bg-[#f7f9f3]
                  p-10
                  hover:bg-[#31572c]
                  group
                  transition
                "
              >

                <h3
                  className="
                    text-5xl
                    font-bold
                    text-[#31572c]
                    group-hover:text-[#ecf39e]
                    transition
                  "
                >
                  {item.number}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-600
                    group-hover:text-white
                    transition
                  "
                >
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>






      {/* =====================================================
                      FINAL CTA
      ===================================================== */}

      <section className="pb-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              min-h-[420px]
            "
          >

            {/* Background */}

            <img
              src={ctm1900}
              alt=""
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
                to-[#31572c]/60
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
                px-8
                py-24
              "
            >

              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-[#ecf39e]
                  text-sm
                  font-semibold
                "
              >
                IPS University
              </span>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  text-white
                  mt-5
                  max-w-4xl
                "
              >
                Together We Shape
                Future Leaders
              </h2>

              <p
                className="
                  max-w-3xl
                  mt-7
                  text-white/80
                  leading-8
                "
              >
                Guided by experienced academicians,
                researchers and industry leaders,
                IPS University continues to foster
                innovation, academic excellence and
                holistic student development.
              </p>





              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  gap-5
                  mt-10
                "
              >

                <Link
                  to="/about"
                  className="
                    px-8
                    py-4
                    rounded-full
                    bg-[#ecf39e]
                    text-[#31572c]
                    font-semibold
                    hover:bg-white
                    transition
                  "
                >
                  Explore University
                </Link>

                <Link
                  to="/contact"
                  className="
                    px-8
                    py-4
                    rounded-full
                    border
                    border-white
                    text-white
                    hover:bg-white
                    hover:text-[#31572c]
                    transition
                  "
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Advisors;