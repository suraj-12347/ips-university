import React from "react";
import {
  ArrowRight,
  Award,
  Building2,
  Briefcase,
  TrendingUp,
  Users,
  Trophy,
  Star,
  Medal,
  Crown,
  Zap,
  Cpu,
  Landmark,
  LineChart,
  Factory,
  ShoppingBag,
  Sparkles,
  ClipboardCheck,
  ShieldCheck,
  History,
  Flag,
} from "lucide-react";
import tp from '../../images1/tp.png'
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Crown, value: "12 LPA", label: "All-Time Highest Package" },
  { icon: Zap, value: "1000+", label: "Most Offers In A Single Season" },
  { icon: Building2, value: "180+", label: "Most Recruiters In A Year" },
  { icon: Trophy, value: "92%", label: "Best-Ever Placement Rate" },
];

// Milestone records achieved over the years
const milestoneRecords = [
  {
    icon: Medal,
    year: "2021-22",
    title: "First Batch To Cross 600 Placements",
    desc: "The graduating batch became the first at IPS University to record over 600 confirmed placements in a single season.",
  },
  {
    icon: Star,
    year: "2022-23",
    title: "Highest Package Crossed 8 LPA",
    desc: "A Computer Science student secured the University's first offer above 8 LPA, setting a new benchmark for technical roles.",
  },
  {
    icon: Building2,
    year: "2023-24",
    title: "150+ Recruiters On Campus",
    desc: "The Training & Placement Cell hosted its largest-ever number of recruiting companies in a single academic year.",
  },
  {
    icon: Crown,
    year: "2024-25",
    title: "Highest Package Reached 11 LPA",
    desc: "An Engineering graduate was offered the highest-ever domestic package recorded at the University at the time.",
  },
  {
    icon: Trophy,
    year: "2025-26",
    title: "1000+ Offers, 12 LPA Highest Package",
    desc: "The current record season — the most offers rolled out and the highest package ever recorded, across 180+ recruiters.",
  },
];

// Department / stream-wise record holders
const recordHolders = [
  {
    icon: Cpu,
    badge: "Engineering",
    title: "12 LPA — Highest In University History",
    desc: "Recorded by a B.Tech Computer Science student, the highest package ever offered across any programme at IPS University.",
    category: "IT",
  },
  {
    icon: Landmark,
    badge: "Management",
    title: "9.5 LPA — Best MBA Package On Record",
    desc: "The highest package secured by an MBA graduate, offered by a leading BFSI recruiter during campus placements.",
    category: "Finance",
  },
  {
    icon: LineChart,
    badge: "Commerce",
    title: "7.2 LPA — Top B.Com Placement",
    desc: "A B.Com (Hons.) graduate achieved the highest-ever package recorded for the commerce stream, in financial analytics.",
    category: "Consulting",
  },
  {
    icon: Factory,
    badge: "Core Engineering",
    title: "8.8 LPA — Best Core Engineering Offer",
    desc: "The record package for a core engineering role, offered by a leading infrastructure and manufacturing recruiter.",
    category: "Core",
  },
  {
    icon: ShoppingBag,
    badge: "BBA",
    title: "6.5 LPA — Highest BBA Package",
    desc: "The top package recorded for a BBA graduate, secured through a management trainee role with a retail major.",
    category: "FMCG",
  },
  {
    icon: Briefcase,
    badge: "Batch Record",
    title: "100% Placement — 3 Consecutive Years",
    desc: "The Computer Science department has recorded 100% placement for three consecutive graduating batches running.",
    category: "IT",
  },
];

const categoryStyles = {
  IT: "bg-[#ecf39e] text-[#31572c]",
  Finance: "bg-[#31572c]/10 text-[#31572c]",
  Consulting: "bg-gray-100 text-gray-600",
  Core: "bg-[#d4a14d]/15 text-[#8a6112]",
  FMCG: "bg-[#31572c]/10 text-[#31572c]",
};

// How records are tracked and verified
const verificationPoints = [
  {
    icon: ClipboardCheck,
    title: "Offer Letter Verification",
    text: "Every record placement is verified against the official offer letter before being added to the University's record book.",
  },
  {
    icon: History,
    title: "Season-Wise Archiving",
    text: "Records are archived season-wise, so historical comparisons stay accurate as new milestones are achieved each year.",
  },
  {
    icon: ShieldCheck,
    title: "Audited By The T&P Cell",
    text: "The Training & Placement Cell cross-checks every figure before publishing, keeping the record list honest and current.",
  },
  {
    icon: Sparkles,
    title: "Updated Every Season",
    text: "New highest packages, offer counts and recruiter numbers are added as soon as a season's placement drive concludes.",
  },
];

const PlacementRecords = () => {
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
            Placement Records
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            From the first batch to cross 600 placements to this season's
            highest-ever package — a look at the milestones that mark
            IPS University's placement journey.
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
    Placement Records
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
  alt="Placement Records And Milestones"
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

            Milestones That Define Us

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            Every Record Marks

            <span className="block text-[#7ea33d] italic font-medium">
              A New Standard Set
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            Each placement season at IPS University has produced a new
            milestone — a higher package, a bigger recruiter list, or a
            department's first 100% placement record.

          </p>


          <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">

            These aren't one-off achievements. They're verified, archived
            and published, forming a running record of how far our students
            and recruiters have come together.

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
              <Trophy size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                12 LPA — Current Record Package
              </h3>

              <p className="text-sm text-[#578B07]">
                Set During The 2025-26 Placement Season
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
      {/* MILESTONE RECORDS TIMELINE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Record Timeline
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Milestones, Season By Season
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        A running log of the records set during each placement season —
        from the first big batch to the highest package on record today.
      </p>
    </div>

    <div className="space-y-6">

      {milestoneRecords.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6"
          >

            <div className="w-14 h-14 rounded-2xl bg-[#31572c] text-[#ecf39e] flex items-center justify-center flex-shrink-0">
              <Icon size={24} />
            </div>

            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-[2px] text-[#578B07]">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-[#31572c] mt-1">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 leading-7 text-sm">
                {item.desc}
              </p>
            </div>

          </div>
        );
      })}

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* DEPARTMENT-WISE RECORD HOLDERS */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Record Holders
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Programme-Wise Placement Records
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {recordHolders.map((item, index) => {
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
        alt="Placement Record Achievers"
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
            Be Part Of The Next Record
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Think You Can Set
            <br />
            The Next Benchmark?
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Every record on this page started with one student. Register
            with the Training & Placement Cell and prepare to chase the
            next one.
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
          Register With T&P Cell →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* HOW RECORDS ARE VERIFIED */}
{/* ========================================================= */}

<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Behind The Records
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        How Every Record Is Verified
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        A record is only worth publishing if it's accurate — here's how
        the Training & Placement Cell keeps this list honest.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {verificationPoints.map((item, index) => {
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

          1. Individual Achiever Spotlights (Photos + Quotes)
          2. Record-Breaking Recruiter Drives (Bulk Hiring Days)
          3. International / Study-Abroad Placement Records
          4. Downloadable Record Book PDF
      */}

    </div>
  );
};

export default PlacementRecords;