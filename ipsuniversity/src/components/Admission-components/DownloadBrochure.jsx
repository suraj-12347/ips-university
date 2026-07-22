import React from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  BookOpen,
  Building2,
  CreditCard,
  Users,
  Home,
  FileCheck2,
  ShieldCheck,
  Zap,
  Bell,
  ListChecks,
  Download,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Award, value: "UGC", label: "Approved" },
  { icon: Briefcase, value: "15 LPA", label: "Highest Placement Package" },
  { icon: BookOpen, value: "50+", label: "Programs Offered" },
  { icon: Building2, value: "20+", label: "Years of Academic Legacy" },
];

// What the brochure covers, at a glance
const categories = [
  {
    title: "Courses & Eligibility",
    text: "A detailed list of UG, PG and PhD programs with duration, specializations, and the eligibility criteria for every course.",
  },
  {
    title: "Fee Structure & Scholarships",
    text: "Semester-wise fee breakup along with merit, sports and special-category scholarship details and applicable waivers.",
  },
  {
    title: "Campus & Hostel Facilities",
    text: "A visual walkthrough of classrooms, laboratories, library, hostel accommodation and sports infrastructure on campus.",
  },
  {
    title: "Placement & Career Support",
    text: "Placement statistics, recruiter list, average and highest packages, and the career guidance services available to students.",
  },
];

// Full list of what's inside the brochure
const brochureHighlights = [
  {
    icon: BookOpen,
    badge: "Academics",
    title: "Programs Offered",
    desc: "Complete list of undergraduate, postgraduate and doctoral programs across all schools.",
    category: "Academics",
  },
  {
    icon: FileCheck2,
    badge: "Academics",
    title: "Eligibility & Admission Process",
    desc: "Step-by-step admission process along with eligibility criteria for every program.",
    category: "Academics",
  },
  {
    icon: CreditCard,
    badge: "Finance",
    title: "Fee Structure",
    desc: "Semester-wise and year-wise fee breakup for all undergraduate and postgraduate courses.",
    category: "Finance",
  },
  {
    icon: Award,
    badge: "Finance",
    title: "Scholarship Details",
    desc: "Merit, sports and special-category scholarships with eligibility and waiver percentages.",
    category: "Finance",
  },
  {
    icon: Users,
    badge: "Academics",
    title: "Faculty Profiles",
    desc: "Qualifications, experience and specializations of the teaching faculty across departments.",
    category: "Academics",
  },
  {
    icon: Building2,
    badge: "Campus Life",
    title: "Campus Infrastructure",
    desc: "Classrooms, laboratories, library, auditoriums and research centres available on campus.",
    category: "Campus Life",
  },
  {
    icon: Home,
    badge: "Campus Life",
    title: "Hostel & Accommodation",
    desc: "Hostel facilities, room types, mess menu and campus safety and security measures.",
    category: "Campus Life",
  },
  {
    icon: Briefcase,
    badge: "Career",
    title: "Placement Records",
    desc: "Recruiter list, average package, highest package and sector-wise placement trends.",
    category: "Career",
  },
];

const categoryStyles = {
  Academics: "bg-[#ecf39e] text-[#31572c]",
  Finance: "bg-[#31572c]/10 text-[#31572c]",
  "Campus Life": "bg-gray-100 text-gray-600",
  Career: "bg-[#d4a14d]/20 text-[#8a6516]",
};

// Reasons to download from the official portal
const whyDownload = [
  {
    icon: ShieldCheck,
    title: "Verified Information",
    text: "Every detail in the brochure is sourced directly from the university's academic and admissions office.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    text: "Get the PDF brochure delivered to your email within minutes of submitting the form below.",
  },
  {
    icon: Bell,
    title: "No Spam, Only Updates",
    text: "We only reach out with admission deadlines, scholarship alerts and other important notices.",
  },
  {
    icon: ListChecks,
    title: "Compare Programs Easily",
    text: "A structured layout makes it simple to compare fees, duration and eligibility across programs.",
  },
];

const DownloadBrochure = () => {
  return (
    <div className="w-full bg-white mt-30">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative h-[420px] flex items-center overflow-hidden" style={{  backgroundImage:  `url(${ctm1900})`, backgroundSize: "cover",  backgroundPosition: "center",  }}  >
        <div className=" absolute inset-0 bg-gradient-to-r from-[#31572c]/90 to-transparent" />

        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">

          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
            Admission 2026-27
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Download Brochure
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            Get complete details on programs, fee structure, scholarships,
            campus facilities and placement records at IPS University — all
            in one downloadable brochure.
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
    Download Brochure
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* GET YOUR COPY — LEAD FORM HIGHLIGHT */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1600&q=80"
  alt="University Brochure"
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

            Get Your Copy

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            University Brochure

            <span className="block text-[#7ea33d] italic font-medium">
              In Your Inbox
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            Fill in your details below and receive the official IPS
            University brochure with course, fee and scholarship
            information delivered straight to your inbox.

          </p>

          {/* Mini Download Form */}
          <form className="mt-7 space-y-3 max-w-sm">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8BAE45]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8BAE45]"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8BAE45]"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2.5 bg-[#31572c] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#31572c]/90 transition duration-300"
            >
              <Download size={16} />
              Download Brochure
            </button>

          </form>

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
      {/* WHAT'S INSIDE THE BROCHURE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Brochure Overview
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        What's Inside The Brochure
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Everything you need to make an informed decision — programs,
        fees, campus life and career outcomes — organised in one easy
        to read document.
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
{/* FULL LIST OF BROCHURE HIGHLIGHTS */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Brochure Contents
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Everything You'll Find Inside
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {brochureHighlights.map((item, index) => {
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
        src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=1600&q=80"
        alt="Students Reading Brochure"
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
            Admission 2026-27
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Explore Every Program,
            <br />
            Fee & Facility In One Place.
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Download the official brochure and get a complete picture of
            what studying at IPS University looks like — before you apply.
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
          Download Now →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* WHY DOWNLOAD FROM US */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Why This Brochure
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        Why Download From Us
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        There are many sources online claiming to offer university
        information — here's why the official brochure is the one worth
        trusting.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {whyDownload.map((item, index) => {
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

          1. Program-wise Individual Brochures (UG / PG / PhD)
          2. WhatsApp Brochure Delivery Option
          3. Previous Year Placement Report Download
          4. FAQs on Brochure Content & Validity
      */}

    </div>
  );
};

export default DownloadBrochure;