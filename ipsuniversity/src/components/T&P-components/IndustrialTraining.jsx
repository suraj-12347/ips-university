import React from "react";
import {
  ArrowRight,
  Award,
  Users,
  Globe2,
  Building2,
  Briefcase,
  Wrench,
  Cpu,
  LineChart,
  PenTool,
  ClipboardList,
  FileCheck,
  CalendarClock,
  ShieldCheck,
  ClipboardSignature,
  FileSearch,
  GraduationCap,
  Quote,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import tp from '../../images1/tp.png'
import { Link } from "react-router-dom";

/* ==========================================
   DATA

   NOTE: Company names, numbers and durations
   below are placeholder examples only. Replace
   with verified details of your university's
   actual industrial training programme before
   publishing.
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Users, value: "5,000+", label: "Students Trained" },
  { icon: Building2, value: "100+", label: "Industry Partners" },
  { icon: CalendarClock, value: "6-8", label: "Weeks Duration" },
  { icon: Award, value: "90%+", label: "Successful Completion" },
];

// Broad domains where students undergo industrial training
const categories = [
  {
    title: "Core Engineering & Manufacturing",
    text: "Hands-on training on shop floors, production units and manufacturing plants, exposing students to real industrial processes.",
  },
  {
    title: "IT, Software & Emerging Tech",
    text: "Internships with technology companies covering software development, data, cloud and emerging tools used in the industry today.",
  },
  {
    title: "Management & Finance",
    text: "Corporate internships in operations, marketing, HR and finance, giving students first-hand exposure to business functions.",
  },
  {
    title: "Design, Innovation & R&D",
    text: "Training with design studios, startups and research labs, encouraging students to work on live products and prototypes.",
  },
];

// Full list of ongoing training programs / internship tracks
const trainingList = [
  {
    icon: Wrench,
    badge: "8 Weeks Programme",
    title: "Manufacturing Floor Training",
    desc: "On-site training at partner manufacturing units covering production planning, quality control and plant operations.",
    category: "Engineering",
  },
  {
    icon: Cpu,
    badge: "6-8 Weeks Internship",
    title: "Software Development Internship",
    desc: "Live project-based internship with technology companies, working alongside engineering teams on real products.",
    category: "IT",
  },
  {
    icon: LineChart,
    badge: "6 Weeks Programme",
    title: "Corporate Finance Training",
    desc: "Exposure to budgeting, financial analysis and reporting practices through structured training with corporate finance teams.",
    category: "Management",
  },
  {
    icon: PenTool,
    badge: "6 Weeks Internship",
    title: "Product Design Internship",
    desc: "Students work with design studios on user research, prototyping and product design for real client briefs.",
    category: "Design",
  },
  {
    icon: ClipboardList,
    badge: "6 Weeks Programme",
    title: "Operations & Supply Chain Training",
    desc: "Practical exposure to logistics, inventory management and supply chain planning within partner organisations.",
    category: "Engineering",
  },
  {
    icon: Building2,
    badge: "6-8 Weeks Internship",
    title: "Data & Analytics Internship",
    desc: "Internship focused on data collection, analysis and dashboarding for business decision-making in live environments.",
    category: "IT",
  },
  {
    icon: Briefcase,
    badge: "6 Weeks Programme",
    title: "Human Resources Training",
    desc: "Training in recruitment, employee engagement and HR operations under the guidance of experienced professionals.",
    category: "Management",
  },
  {
    icon: GraduationCap,
    badge: "6-8 Weeks Internship",
    title: "Research & Development Internship",
    desc: "Students contribute to ongoing R&D projects at partner labs and innovation centres, working on applied research.",
    category: "Design",
  },
];

const categoryStyles = {
  Engineering: "bg-[#ecf39e] text-[#31572c]",
  IT: "bg-[#31572c]/10 text-[#31572c]",
  Management: "bg-gray-100 text-gray-600",
  Design: "bg-[#d4a14d]/15 text-[#8a6112]",
};

// How the industrial training / internship process works
const generalTerms = [
  {
    icon: FileSearch,
    title: "Apply Through The Portal",
    text: "Students register on the official training portal and choose from available industry partners and programme tracks.",
  },
  {
    icon: ClipboardSignature,
    title: "Placement With Industry Partner",
    text: "The Training & Placement Cell matches students to partner companies based on interest, eligibility and availability.",
  },
  {
    icon: ShieldCheck,
    title: "On-The-Job Mentorship",
    text: "Students work under the guidance of industry mentors and a faculty coordinator throughout the training period.",
  },
  {
    icon: FileCheck,
    title: "Evaluation & Certification",
    text: "On completion, students submit a report and are evaluated, receiving a certificate recognised by the University.",
  },
];

const IndustrialTraining = () => {
  return (
    <div className="w-full bg-white mt-30">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative h-[420px] flex items-center overflow-hidden" style={{  backgroundImage:  `url(${tp})`, backgroundSize: "cover",  backgroundPosition: "center",  }}  >
        <div className=" absolute inset-0 bg-gradient-to-r from-[#31572c]/90 to-transparent" />

        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">

          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
            Training & Placement Cell
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Industrial Training & Internships
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            From shop floors to boardrooms, labs to live projects — IPS
            University&apos;s industrial training and internship programmes
            prepare students for the industry long before they graduate.
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
    to="/admission"
    className="hover:text-[var(--grass)] transition"
  >
    Admission
  </Link>


  <ArrowRight size={16} />


  <span className="text-[#cde8a3] font-semibold">
    Industrial Training
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + FLAGSHIP PROGRAMME HIGHLIGHT */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
  alt="Industrial Training Session"
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

            Programme Spotlight

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            Technical Development Internship

            <span className="block text-[#7ea33d] italic font-medium">
              6-8 Weeks, Industry Mentored
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            Final-year students spend twelve weeks embedded with a partner
            technology company, working on live products alongside
            engineering teams and shipping real, production-grade code.

          </p>

          <div className="mt-5 flex items-start gap-3 max-w-md">
            <Quote className="text-[#8BAE45] shrink-0 mt-1" size={20} />
            <p className="text-gray-600 text-sm italic leading-6">
              &quot;The internship taught me more about real-world engineering
              in twelve weeks than I imagined possible.&quot;
            </p>
          </div>


          {/* Info Block */}
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
            ">
              <Cpu size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                100+ Industry Partners
              </h3>

              <p className="text-sm text-[#578B07]">
                Across Engineering, IT, Management & Design
              </p>

            </div>

          </div>


        </div>

      </div>


    </div>

  </div>
</section>

      {/* ========================================================= */}
      {/* QUICK STATS */}
      {/* ========================================================= */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {quickStats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-gray-200 p-10 hover:shadow-xl transition duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#ecf39e] flex items-center justify-center">

                    <Icon className="text-[#31572c]" size={30} />

                  </div>

                  <h2 className="text-4xl font-bold mt-8 text-[#31572c]">
                    {item.value}
                  </h2>

                  <p className="mt-3 text-gray-600">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* TRAINING DOMAINS AT A GLANCE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Training Domains
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Real Exposure, Across Every Field
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Our industrial training and internship network spans nearly every
        industry vertical — proof that an IPS University education prepares
        students for the workplace, not just the classroom.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {categories.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#31572c]">
            {item.title}
          </h3>

          <p className="text-gray-600 mt-4 leading-8">
            {item.text}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* FULL LIST OF TRAINING PROGRAMMES */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Programme Directory
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Explore Our Training & Internship Tracks
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {trainingList.map((item, index) => {
        const Icon = item.icon;
        return (
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
              p-7
            "
          >

            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#31572c] text-[#ecf39e] flex items-center justify-center">
                <Icon size={22} />
              </div>

              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryStyles[item.category]}`}
              >
                {item.category}
              </span>
            </div>

            <p className="mt-6 text-sm font-semibold text-[#578B07]">
              {item.badge}
            </p>

            <h3 className="text-lg font-bold text-[#1d3d20] mt-1">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-3 leading-6">
              {item.desc}
            </p>

          </div>
        );
      })}

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
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
        alt="Graduating Students Placement Success"
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
            Ready For Industrial Exposure?
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Apply For Your
            <br />
            Industrial Training Today.
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Register through the Training & Placement Cell to be matched
            with an industry partner and begin your journey from classroom
            to career.
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
          Apply For Training →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* HOW IT WORKS */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Training & Placement Cell
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        How Industrial Training Works
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        From application to certification, here&apos;s how IPS University
        students move through the industrial training and internship
        process.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {generalTerms.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
          >
            <Icon className="text-[#31572c] w-10 h-10 mb-5" />
            <h3 className="text-xl font-bold text-[#31572c]">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-3 leading-7">
              {item.text}
            </p>
          </div>
        );
      })}

    </div>

  </div>
</section>
      {/*
          NEXT SECTION:

          1. Industry Partner Logos / Showcase
          2. Batch-Wise Training Report Submission Portal
          3. Training & Placement Cell Contact Details
          4. Upcoming Training Drive & Internship Calendar
      */}

    </div>
  );
};

export default IndustrialTraining;