import React from "react";
import {
  ArrowRight,
  Award,
  FileCheck2,
  Trophy,
  HeartHandshake,
  Briefcase,
  ShieldCheck,
  Landmark,
  Users,
  GraduationCap,
  RefreshCcw,
  Clock3,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Award, value: "100%", label: "Maximum Tuition Waiver" },
  { icon: Users, value: "8+", label: "Scholarship Categories" },
  { icon: GraduationCap, value: "1200+", label: "Students Benefited Yearly" },
  { icon: ShieldCheck, value: "8.0 CGPA", label: "Renewal Requirement" },
];

// Broad categories of scholarships offered
const categories = [
  {
    title: "Merit Scholarship",
    text: "Awarded to Class 12 board toppers and top rank holders in university and national-level entrance tests, with tuition waivers scaled to academic performance.",
  },
  {
    title: "Sports & Cultural Scholarship",
    text: "For state and national level achievers in sports and cultural activities, recognising talent beyond the classroom with dedicated fee concessions.",
  },
  {
    title: "Sibling & Staff Ward Concession",
    text: "Fee relaxation for siblings studying together at the university, and for wards, spouses or siblings of regular university staff members.",
  },
  {
    title: "Special Category Support",
    text: "Support for wards of defence personnel and martyrs, the single girl child of a family, economically weaker sections, and differently-abled students.",
  },
];

// Full list of scholarship types
const scholarshipTypes = [
  {
    icon: Award,
    badge: "Up to 100%",
    title: "Board Topper Scholarship",
    desc: "Full to partial tuition waiver for top rankers of recognized state and central school boards in Class 12.",
    category: "Merit",
  },
  {
    icon: FileCheck2,
    badge: "Up to 75%",
    title: "Entrance Test Scholarship",
    desc: "Waiver based on percentile scored in national or university entrance tests such as JEE, CUET or the university CET.",
    category: "Merit",
  },
  {
    icon: Trophy,
    badge: "Up to 50%",
    title: "Sports Scholarship",
    desc: "For state and national level sports achievers who represent their district, state or country in recognized competitions.",
    category: "Merit",
  },
  {
    icon: HeartHandshake,
    badge: "20%",
    title: "Single Girl Child Scholarship",
    desc: "A fee concession for the only girl child of her parents, encouraging higher education for the girl child.",
    category: "Special",
  },
  {
    icon: Users,
    badge: "10%",
    title: "Sibling Scholarship",
    desc: "Concession on yearly fee for one sibling when two siblings are enrolled together at the university.",
    category: "Special",
  },
  {
    icon: Briefcase,
    badge: "10–60%",
    title: "Staff Ward Scholarship",
    desc: "Fee concession for the wards, spouse or siblings of regular university staff members based on length of service.",
    category: "Special",
  },
  {
    icon: ShieldCheck,
    badge: "100%",
    title: "Defence & Martyrs' Ward Scholarship",
    desc: "Full fee waiver for children of martyrs of the Indian Defence Services, including the Indian Coast Guard.",
    category: "Special",
  },
  {
    icon: Landmark,
    badge: "Up to 25%",
    title: "Economically Weaker Section Support",
    desc: "Financial assistance for students from economically weaker backgrounds, assessed on annual family income.",
    category: "Need-based",
  },
];

const categoryStyles = {
  Merit: "bg-[#ecf39e] text-[#31572c]",
  Special: "bg-[#31572c]/10 text-[#31572c]",
  "Need-based": "bg-gray-100 text-gray-600",
};

// General terms every applicant should know
const generalTerms = [
  {
    icon: RefreshCcw,
    title: "Annual Renewal",
    text: "Scholarships are reviewed every academic year based on attendance, academic performance and conduct.",
  },
  {
    icon: Award,
    title: "One Scholarship Per Student",
    text: "Only the highest scholarship a student is eligible for is awarded; most categories cannot be combined.",
  },
  {
    icon: FileCheck2,
    title: "Minimum CGPA Required",
    text: "Continuation requires maintaining the minimum CGPA specified for the scheme, with no backlog in any semester.",
  },
  {
    icon: ShieldCheck,
    title: "Final Authority",
    text: "All scholarship decisions rest with the University Scholarship Committee and are final and binding.",
  },
];

const ScholarshipPolicy = () => {
  return (
    <div className="w-full bg-white mt-30">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative h-[420px] flex items-center overflow-hidden" style={{  backgroundImage:  `url(${ctm1900})`, backgroundSize: "cover",  backgroundPosition: "center",  }}  >
        <div className=" absolute inset-0 bg-gradient-to-r from-[#31572c]/90 to-transparent" />

        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">

          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
            Financial Aid & Scholarships
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Scholarship Policy
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            IPS University supports meritorious and deserving students through
            a wide range of scholarships covering academics, sports and
            special categories — because talent and ambition should never be
            limited by fees.
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
    Scholarship Policy
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + FLAGSHIP SCHOLARSHIP HIGHLIGHT */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
  alt="Scholarship Students"
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

            Flagship Scholarship

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            Merit Scholarship

            <span className="block text-[#7ea33d] italic font-medium">
              Rewarding Excellence
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            Our flagship scholarship recognises Class 12 board toppers and
            students with outstanding entrance test scores, offering
            meaningful tuition fee waivers right from the first year.

          </p>


          <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">

            No separate application is required — every applicant is
            automatically considered for merit scholarships at the time of
            admission.

          </p>


          {/* Scholarship Info */}
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
              <Award size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                Up to 100% Tuition Waiver
              </h3>

              <p className="text-sm text-[#578B07]">
                For Board Toppers & Top Entrance Rank Holders
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
      {/* SCHOLARSHIP CATEGORIES AT A GLANCE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Scholarship Categories
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Support For Every Kind Of Achiever
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        From academic excellence to sporting talent, family circumstances to
        financial need, IPS University's scholarship policy is designed to
        support students across every walk of life.
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
{/* FULL LIST OF SCHOLARSHIPS */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Scholarship Directory
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Scholarships You May Be Eligible For
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {scholarshipTypes.map((item, index) => {
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
            Admission 2026-27
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Your Achievements Deserve
            <br />
            To Be Rewarded.
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Check which scholarship you qualify for at the time of
            admission — no separate application needed for most merit-based
            categories.
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
          Check Eligibility →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* GENERAL TERMS */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Before You Apply
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        Scholarship Terms You Should Know
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Every scholarship at IPS University is governed by a common set of
        terms that apply across categories, in addition to the specific
        eligibility criteria for each scheme.
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

          1. Downloadable Scholarship Application Form
          2. Government & External Scholarship Schemes (NSP, State Portals)
          3. FAQs on Scholarship Renewal & Continuation
          4. Scholarship Committee Contact & Grievance Redressal
      */}

    </div>
  );
};

export default ScholarshipPolicy;