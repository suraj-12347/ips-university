import React from "react";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import chairperson from '../../images1/chairmanimage3.jpeg'
import ctm1900 from '../../images1/ctm1900.png'
import {  Briefcase, Lightbulb, Globe } from "lucide-react";
import { Link } from "react-router-dom";
const leaders = [
  {
    name: "Prof. (Dr.) ABC XYZ",
    designation: "Chairperson",
    message:
      "Our vision is to create an environment of excellence, innovation, and leadership where students are inspired to achieve their highest potential.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Prof. (Dr.) XYZ Sharma",
    designation: "Vice Chancellor",
    message:
      "We are committed to providing quality education, research opportunities, and a platform that prepares students for future challenges.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Rajesh Gupta",
    designation: "Registrar",
    message:
      "Through effective administration and continuous improvement, we aim to support academic growth and institutional excellence.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Neha Singh",
    designation: "Dean Academics",
    message:
      "Our focus remains on innovation-driven learning, student development, and creating globally competent professionals.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
];

const Leadership = () => {
  return (
    <div className="w-full bg-white mt-30">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section
        className="relative h-[420px] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            `url(${ctm1900})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#31572c]/90
      
      to-transparent
    "
  />

        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">

          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
            About IPS
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            University Leadership
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            IPS University is guided by visionary leadership committed to
            academic excellence, innovation, integrity and holistic student
            development. Together they shape the future of education while
            creating an inspiring learning environment.
          </p>

          <div className="flex items-center gap-2 mt-8 text-sm">

  <Link
    to="/"
    className="hover:text-[var(--grass)] transition"
  >
    Home
  </Link>


  <ArrowRight size={16} />


  <Link
    to="/about"
    className="hover:text-[var(--grass)] transition"
  >
    About
  </Link>


  <ArrowRight size={16} />


  <span className="text-[#cde8a3] font-semibold">
    Leadership
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + MESSAGE */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
  alt="Leadership Team"
  className="absolute inset-0 w-full h-full object-cover"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>


      {/* White Gradient Inset */}
      <div
        className="
          absolute 
          left-0 
          top-0 
          h-full 
          w-[58%]
          bg-gradient-to-r 
          from-white 
          via-white/95 
          to-white/0
        "
      ></div>


      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-lg pl-12 pr-10">

          <span className="flex items-center gap-2 text-[#578B07] font-semibold tracking-[3px] uppercase text-xs">

            <div className="w-2 h-2 rounded-full bg-[#8BAE45]" />

            Leadership Message

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            Leading IPS University

            <span className="block text-[#7ea33d] italic font-medium">
              Towards Excellence
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            At IPS University, leadership is driven by vision,
            innovation and commitment towards creating an
            academic environment where every learner can
            excel and contribute meaningfully to society.

          </p>


          <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">

            Our focus remains on quality education,
            research, ethical values and holistic
            student development.

          </p>


          {/* Person Info */}
          <div className="flex items-center gap-4 mt-8">

            <div className="
              w-12 
              h-12 
              rounded-full 
              bg-[#31572c] 
              text-white 
              flex 
              items-center 
              justify-center 
              font-bold 
              text-lg
            ">
              A
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                Prof. (Dr.) ABC XYZ
              </h3>

              <p className="text-sm text-[#578B07]">
                Chairperson, IPS University
              </p>

            </div>

          </div>


        </div>

      </div>


    </div>

  </div>
</section>

      {/* ========================================================= */}
      {/* UNIVERSITY STATS */}
      {/* ========================================================= */}

     

      {/* ========================================================= */}
      {/* PART 2 YAHAN SE START HOGA */}
      {/* ========================================================= */}


{/* ========================================================= */}
{/* LEADERSHIP QUOTE */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Our Leadership
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Guiding IPS University Towards Excellence
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {leaders.map((leader, index) => (
        <div
          key={index}
          className="
            group
            bg-white
            rounded-[26px]
            overflow-hidden
            shadow-lg
            border
            border-gray-100
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >

          {/* Large Image */}
          <div className="relative h-[320px] overflow-hidden">

            <img
              src={leader.image}
              alt={leader.name}
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
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>

          </div>

          {/* Content */}
          {/* Content */}
<div className="px-6 py-6 text-center">

  <h3 className="text-xl font-bold text-[#1d3d20]">
    {leader.name}
  </h3>

  <div className="w-10 h-[2px] bg-[#d4a14d] mx-auto my-3"></div>

  <p className="text-[#31572c] font-medium">
    {leader.designation}
  </p>

  <p className="
    mt-4
    text-sm
    leading-6
    text-gray-600
    line-clamp-3
  ">
    "{leader.message}"
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

{/* ========================================================= */}
{/* CALL TO ACTION */}
{/* ========================================================= */}

<section className="pb-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="relative rounded-[36px] overflow-hidden shadow-2xl min-h-[320px]">

      {/* Right Background Image */}
      <img
        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80"
        alt="University Campus"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />


      {/* Left Green Blend */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#31572c]
          via-[#31572c]/90
          via-60%
          to-[#31572c]/20
        "
      ></div>


      {/* Soft Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#8BAE45]/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>


      {/* Content */}
      <div
        className="
          relative
          z-10
          px-8
          md:px-16
          py-14
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-10
        "
      >

        <div className="max-w-3xl">

          <span className="uppercase tracking-[3px] text-[#cfe8a9] font-semibold text-sm">
            Join IPS University
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Learn From Visionary Leaders,
            <br />
            Build Your Future With Us.
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Experience quality education, industry-focused learning,
            experienced faculty, and a vibrant campus that prepares you
            for academic and professional success.
          </p>

        </div>


        <button
          className="
            bg-white
            text-[#31572c]
            px-8
            py-4
            rounded-full
            font-semibold
            hover:bg-[#ecf39e]
            transition
            duration-300
            shadow-lg
            whitespace-nowrap
          "
        >
          Explore Programs →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* LEADERSHIP HIGHLIGHTS */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Leadership Highlights
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        Driving Excellence Through Purposeful Leadership
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Our leadership is committed to building a future-ready institution
        through academic excellence, innovation, collaboration, and ethical
        governance.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
        <Award className="text-[#31572c] w-10 h-10 mb-5" />
        <h3 className="text-xl font-bold text-[#31572c]">
          Academic Excellence
        </h3>
        <p className="text-gray-600 mt-3 leading-7">
          Promoting quality education through experienced faculty and
          student-focused learning.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
        <Lightbulb className="text-[#31572c] w-10 h-10 mb-5" />
        <h3 className="text-xl font-bold text-[#31572c]">
          Innovation
        </h3>
        <p className="text-gray-600 mt-3 leading-7">
          Encouraging creativity, research, entrepreneurship, and modern
          teaching practices.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
        <Briefcase className="text-[#31572c] w-10 h-10 mb-5" />
        <h3 className="text-xl font-bold text-[#31572c]">
          Industry Connect
        </h3>
        <p className="text-gray-600 mt-3 leading-7">
          Strengthening partnerships with industries to improve career
          opportunities and practical exposure.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
        <Globe className="text-[#31572c] w-10 h-10 mb-5" />
        <h3 className="text-xl font-bold text-[#31572c]">
          Global Outlook
        </h3>
        <p className="text-gray-600 mt-3 leading-7">
          Preparing students to thrive in a globally connected academic and
          professional environment.
        </p>
      </div>

    </div>

  </div>
</section>
      {/*
          NEXT SECTION:

          1. Leadership Team
          2. Core Values
          3. Governance Structure
          4. Organization Hierarchy
      */}

    </div>
  );
};

export default Leadership;