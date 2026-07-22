import React from "react";
import {
  ArrowRight,
  Award,
  Building2,
  Briefcase,
  Landmark,
  Cpu,
  ShoppingBag,
  Factory,
  LineChart,
  Handshake,
  Users,
  TrendingUp,
  Globe2,
  BadgeCheck,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import tp from '../../images1/tp.png'
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Briefcase, value: "180+", label: "Recruiting Partners" },
  { icon: Award, value: "12 LPA", label: "Highest Package Offered" },
  { icon: TrendingUp, value: "5.2 LPA", label: "Average Package" },
  { icon: Users, value: "1000+", label: "Offers Rolled Out Yearly" },
];

// Broad sector categories our recruiters come from
const categories = [
  {
    title: "IT & Software Recruiters",
    text: "Global technology majors and IT services companies hiring developers, analysts, testers and support engineers across every batch.",
  },
  {
    title: "Core Engineering & Manufacturing",
    text: "Leading engineering, infrastructure and manufacturing firms recruiting for design, production, quality and site roles.",
  },
  {
    title: "BFSI & Consulting",
    text: "Banks, NBFCs, insurance and consulting firms hiring for finance, analytics, operations and client-facing roles.",
  },
  {
    title: "FMCG, Retail & E-commerce",
    text: "Fast-moving consumer goods, retail and e-commerce brands recruiting for sales, supply chain and management trainee roles.",
  },
];

// Full list of leading recruiters
const recruiters = [
  {
    icon: Cpu,
    badge: "IT & Software",
    title: "TCS, Infosys & Wipro",
    desc: "Among our largest recruiters, hiring in bulk every year for software development and IT service roles.",
    category: "IT",
  },
  {
    icon: Globe2,
    badge: "Global Tech",
    title: "Amazon & Microsoft",
    desc: "Global technology leaders that visit campus for technical and analyst roles with top-tier packages.",
    category: "IT",
  },
  {
    icon: Landmark,
    badge: "BFSI",
    title: "HDFC Bank & ICICI Bank",
    desc: "Leading banks hiring for relationship management, operations and financial analyst positions.",
    category: "Finance",
  },
  {
    icon: LineChart,
    badge: "Consulting",
    title: "Deloitte & Capgemini",
    desc: "Consulting and professional services firms recruiting for analyst, audit and advisory roles.",
    category: "Consulting",
  },
  {
    icon: Factory,
    badge: "Core Engineering",
    title: "L&T & Mahindra Group",
    desc: "Core engineering and infrastructure conglomerates hiring for design, site and production engineer roles.",
    category: "Core",
  },
  {
    icon: Building2,
    badge: "IT Services",
    title: "Tech Mahindra & Cognizant",
    desc: "Long-standing hiring partners offering roles across development, testing and IT support functions.",
    category: "IT",
  },
  {
    icon: ShoppingBag,
    badge: "FMCG & Retail",
    title: "Retail & E-commerce Majors",
    desc: "Sales, supply chain and management trainee roles offered by leading retail and e-commerce companies.",
    category: "FMCG",
  },
  {
    icon: Handshake,
    badge: "New Partnerships",
    title: "Emerging Startups",
    desc: "Fast-growing startups partnering with the University for internships and early-career opportunities.",
    category: "Core",
  },
];

const categoryStyles = {
  IT: "bg-[#ecf39e] text-[#31572c]",
  Finance: "bg-[#31572c]/10 text-[#31572c]",
  Consulting: "bg-gray-100 text-gray-600",
  Core: "bg-[#d4a14d]/15 text-[#8a6112]",
  FMCG: "bg-[#31572c]/10 text-[#31572c]",
};

// What recruiting partners can expect from us
const generalTerms = [
  {
    icon: BadgeCheck,
    title: "Pre-Screened Talent",
    text: "Every student registered for placements is pre-screened on academics, attendance and communication skills.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Drive Support",
    text: "The T&P Cell manages scheduling, venues, shortlisting and logistics for a smooth end-to-end hiring drive.",
  },
  {
    icon: FileCheck2,
    title: "Flexible Hiring Formats",
    text: "On-campus, virtual and hybrid recruitment drives are supported to suit every recruiter's convenience.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text: "We work with recruiters year-round through internships, live projects and pre-placement talks, not just hiring season.",
  },
];

const LeadingRecruiters = () => {
  return (
    <div className="w-full bg-white mt-30">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative h-[420px] flex items-center overflow-hidden" style={{  backgroundImage:  `url(${tp})`, backgroundSize: "cover",  backgroundPosition: "center",  }}  >
        <div className=" absolute inset-0 bg-gradient-to-r from-[#31572c]/90 to-transparent" />

        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">

          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
            Careers & Industry Relations
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Leading Recruiters
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            From global technology majors to core engineering conglomerates,
            IPS University's hiring partners span every sector — giving our
            students access to opportunities that match their ambition.
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
    Leading Recruiters
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + FLAGSHIP HIGHLIGHT */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
  alt="Corporate Hiring Partners"
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

            Our Hiring Network

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            Trusted By Industry

            <span className="block text-[#7ea33d] italic font-medium">
              Across Every Sector
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            Over the years, IPS University has built lasting relationships
            with recruiters across IT, core engineering, BFSI, consulting
            and FMCG — companies that return to campus year after year.

          </p>


          <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">

            This growing network means more roles, more variety and more
            opportunities to launch a career students are genuinely excited
            about.

          </p>


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
              <Building2 size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                180+ Companies On Campus
              </h3>

              <p className="text-sm text-[#578B07]">
                Spanning IT, Core, BFSI & Consulting
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
      {/* SECTOR CATEGORIES AT A GLANCE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Sectors We Serve
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Recruiters Across Every Industry
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Whatever a student's career interest — technology, finance,
        engineering or consumer business — our recruiter network has an
        opportunity waiting for them.
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
{/* FULL LIST OF RECRUITERS */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Our Recruiters
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Companies That Hire From IPS University
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {recruiters.map((item, index) => {
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
                {item.badge}
              </span>
            </div>

            <p className="mt-6 text-sm font-semibold text-[#578B07]">
              {item.category}
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
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
        alt="Recruiters Meeting"
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
            For Corporate Partners
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Want To Hire From
            <br />
            IPS University?
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Partner with our Training & Placement Cell to access pre-screened,
            industry-ready talent through campus drives, internships and
            live projects.
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
          Register As Recruiter →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* WHAT RECRUITERS CAN EXPECT */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        For Recruiters
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        What Our Hiring Partners Get
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        We aim to make campus hiring simple and efficient, with dedicated
        support at every stage of your recruitment drive.
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

          1. Recruiter Logo Marquee / Wall of Logos
          2. Sector-Wise Hiring Trends (Charts)
          3. Recruiter Testimonials / Feedback
          4. Corporate Registration Form & Contact
      */}

    </div>
  );
};

export default LeadingRecruiters;