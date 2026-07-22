import React from "react";
import {
  ArrowRight,
  Award,
  TrendingUp,
  Users,
  Target,
  ClipboardList,
  BookOpenCheck,
  Presentation,
  BadgeCheck,
  Cpu,
  Landmark,
  LineChart,
  Factory,
  ShoppingBag,
  Globe2,
  Building2,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Repeat,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import tp from '../../images1/tp.png'
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Award, value: "15 LPA", label: "Highest Package Offered" },
  { icon: TrendingUp, value: "3.5 LPA", label: "Average Package" },
  { icon: Target, value: "100%", label: " Placement Assistance" },
  { icon: Users, value: "300+", label: "Offers Rolled Out (2025-26)" },
];

// The placement process, step by step
const categories = [
  {
    title: "Registration & Eligibility",
    text: "Final-year students register with the T&P Cell and are screened on academic performance, attendance and conduct.",
  },
  {
    title: "Pre-Placement Training",
    text: "Aptitude, technical and soft-skills sessions along with mock interviews and group discussions to build readiness.",
  },
  {
    title: "Campus Recruitment Drives",
    text: "On-campus and virtual drives with online tests, technical rounds, HR interviews and final shortlisting.",
  },
  {
    title: "Offer & Onboarding Support",
    text: "Offer letter verification, documentation guidance and pre-joining support until the student is onboarded.",
  },
];

// Sector-wise placement distribution
const sectorPlacements = [
  {
    icon: Cpu,
    badge: "32%",
    title: "IT & Software",
    desc: "The largest share of offers, led by development, testing and analyst roles at major technology firms.",
    category: "Leading",
  },
  {
    icon: Factory,
    badge: "18%",
    title: "Core Engineering",
    desc: "Design, production and site engineering roles with manufacturing and infrastructure companies.",
    category: "Core",
  },
  {
    icon: Landmark,
    badge: "15%",
    title: "BFSI & Finance",
    desc: "Roles in banking, insurance and financial analysis with leading banks and NBFCs.",
    category: "Growing",
  },
  {
    icon: LineChart,
    badge: "12%",
    title: "Consulting & Analytics",
    desc: "Business analyst and consulting roles with global consulting and analytics firms.",
    category: "Growing",
  },
  {
    icon: ShoppingBag,
    badge: "10%",
    title: "FMCG & Retail",
    desc: "Sales and management trainee roles with consumer goods and retail companies.",
    category: "Core",
  },
  {
    icon: Globe2,
    badge: "8%",
    title: "E-Commerce & Startups",
    desc: "Operations, growth and product roles with e-commerce platforms and emerging startups.",
    category: "Growing",
  },
  {
    icon: Building2,
    badge: "3%",
    title: "Government & PSU",
    desc: "Select opportunities with public sector undertakings and government-affiliated organisations.",
    category: "Niche",
  },
  {
    icon: GraduationCap,
    badge: "2%",
    title: "Higher Studies",
    desc: "Students opting for postgraduate studies or entrepreneurship instead of immediate placement.",
    category: "Niche",
  },
];

const categoryStyles = {
  Leading: "bg-[#ecf39e] text-[#31572c]",
  Core: "bg-[#31572c]/10 text-[#31572c]",
  Growing: "bg-[#d4a14d]/15 text-[#8a6112]",
  Niche: "bg-gray-100 text-gray-600",
};

// Placement highlights every student should know
const generalTerms = [
  {
    icon: Sparkles,
    title: "Dream & Super Dream Offers",
    text: "Every year, select students receive Dream (5+ LPA) and Super Dream (10+ LPA) offers from top-tier recruiters.",
  },
  {
    icon: Repeat,
    title: "Multiple Offer Opportunities",
    text: "Students who don't clear their first few drives continue to remain eligible for later recruitment cycles.",
  },
  {
    icon: ShieldCheck,
    title: "100% Placement Assistance",
    text: "Every eligible, registered student is guaranteed placement assistance, even if a guaranteed job isn't possible.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Selection Process",
    text: "All recruitment drives follow a fair, transparent and merit-based selection process monitored by the T&P Cell.",
  },
];

const Placements = () => {
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
            Placements
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            A track record built year after year — IPS University students are
            placed across leading companies in technology, core engineering,
            finance and consulting, with packages that keep climbing every
            season.
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
    Placements
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
  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
  alt="Graduating Students Placement"
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

            Placement Season 2025-26

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            A Record Year

            <span className="block text-[#7ea33d] italic font-medium">
              For Our Graduating Batch
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            This year's placement season saw the highest ever package cross
            15 LPA, with over 100 companies visiting campus and more than
            300+ offers extended across streams.

          </p>


          <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">

            Behind these numbers is a structured, year-round process of
            training, mentoring and industry engagement that starts from a
            student's very first semester.

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
              <TrendingUp size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                Packages Growing Every Year
              </h3>

              <p className="text-sm text-[#578B07]">
                Up From 3 LPA Highest In 2024-25
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
      {/* PLACEMENT PROCESS AT A GLANCE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        How It Works
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Our Placement Process
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        A structured, transparent process takes every student from
        registration to offer letter, with dedicated support at each step
        along the way.
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
{/* SECTOR-WISE PLACEMENT DISTRIBUTION */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Placement Breakdown
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Where Our Students Are Placed
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {sectorPlacements.map((item, index) => {
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
              {item.badge} of offers
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
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
        alt="Students Studying"
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
            Placement Report 2025-26
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            See The Complete
            <br />
            Placement Brochure.
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Get the detailed, batch-wise and branch-wise placement report
            with recruiter names, package trends and student testimonials.
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
          Download Brochure →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* PLACEMENT HIGHLIGHTS */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Good To Know
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        Placement Highlights You Should Know
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Beyond the numbers, here's what makes the placement experience at
        IPS University fair, supportive and rewarding for every student.
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

          1. Year-Wise Placement Trend Chart (2022-23 to 2025-26)
          2. Branch-Wise / Course-Wise Placement Statistics
          3. Student Placement Testimonials & Success Stories
          4. Placement Cell Team & Grievance Redressal Contact
      */}

    </div>
  );
};

export default Placements;