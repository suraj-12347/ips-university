import React from "react";
import {
  ArrowRight,
  Award,
  Building2,
  Briefcase,
  TrendingUp,
  Users,
  Cpu,
  Landmark,
  LineChart,
  Factory,
  ShoppingBag,
  BarChart3,
  Percent,
  Target,
  Trophy,
  CalendarCheck2,
  ClipboardList,
  GraduationCap,
  Rocket,
} from "lucide-react";
import tp from '../../images1/tp.png'
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Percent, value: "92%", label: "Overall Placement Rate" },
  { icon: Award, value: "12 LPA", label: "Highest Package Offered" },
  { icon: TrendingUp, value: "5.2 LPA", label: "Average Package" },
  { icon: Users, value: "1000+", label: "Offers Rolled Out (2025-26)" },
];

// Year-wise placement growth trend
const yearlyTrend = [
  {
    year: "2021-22",
    placed: "620+",
    avg: "3.8 LPA",
    highest: "7.5 LPA",
    fill: "35%",
  },
  {
    year: "2022-23",
    placed: "740+",
    avg: "4.1 LPA",
    highest: "8.8 LPA",
    fill: "55%",
  },
  {
    year: "2023-24",
    placed: "860+",
    avg: "4.6 LPA",
    highest: "10 LPA",
    fill: "72%",
  },
  {
    year: "2024-25",
    placed: "940+",
    avg: "4.9 LPA",
    highest: "11 LPA",
    fill: "88%",
  },
  {
    year: "2025-26",
    placed: "1000+",
    avg: "5.2 LPA",
    highest: "12 LPA",
    fill: "100%",
  },
];

// Sector-wise distribution of offers
const sectorDistribution = [
  {
    icon: Cpu,
    badge: "38%",
    title: "IT & Software",
    desc: "The largest share of offers, led by development, QA, support and analyst roles across IT majors and services firms.",
    category: "IT",
  },
  {
    icon: Landmark,
    badge: "18%",
    title: "BFSI & Insurance",
    desc: "Banking, NBFC and insurance recruiters hiring for relationship management, operations and financial analysis roles.",
    category: "Finance",
  },
  {
    icon: LineChart,
    badge: "14%",
    title: "Consulting & Analytics",
    desc: "Analyst and associate roles across consulting, audit and business analytics functions with premium starting packages.",
    category: "Consulting",
  },
  {
    icon: Factory,
    badge: "16%",
    title: "Core Engineering",
    desc: "Design, production and site engineering roles offered by infrastructure, manufacturing and core conglomerates.",
    category: "Core",
  },
  {
    icon: ShoppingBag,
    badge: "9%",
    title: "FMCG & Retail",
    desc: "Sales, supply chain and management trainee positions from leading retail, e-commerce and consumer goods brands.",
    category: "FMCG",
  },
  {
    icon: Briefcase,
    badge: "5%",
    title: "Others",
    desc: "Roles spanning media, education, healthcare and emerging startups that diversify the placement portfolio each year.",
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

// What makes the placement record credible and consistent
const highlightPoints = [
  {
    icon: ClipboardList,
    title: "Programme-Wise Transparency",
    text: "Placement figures are published programme-wise, so every stream's actual outcomes are visible rather than a single blended number.",
  },
  {
    icon: CalendarCheck2,
    title: "Structured Training Timeline",
    text: "Aptitude, communication and technical training begin from Semester 1, moving to company-specific preparation in the final year.",
  },
  {
    icon: GraduationCap,
    title: "Cross-Stream Coverage",
    text: "B.Tech, BBA, B.Com, BCA, MBA and M.Sc. students are all tracked separately, ensuring no programme is left without support.",
  },
  {
    icon: Rocket,
    title: "Returning Recruiters",
    text: "A large share of hiring partners return year after year, a stronger signal of trust than one-off recruitment visits.",
  },
];

const PlacementStatistics = () => {
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
            Placement Statistics
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            Five years of consistent growth in offers, packages and recruiter
            participation — a transparent, programme-wise look at how IPS
            University students launch their careers.
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
    Placement Statistics
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
  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
  alt="Placement Statistics and Career Growth"
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

            Five-Year Track Record

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            A Legacy Of

            <span className="block text-[#7ea33d] italic font-medium">
              Consistent Placement Growth
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            Every placement season at IPS University builds on the one
            before it — more offers rolled out, more recruiters returning,
            and packages that have climbed steadily year on year.

          </p>


          <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">

            Figures are tracked programme-wise and published transparently,
            giving prospective students a real picture of outcomes rather
            than a single headline number.

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
              <BarChart3 size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                92% Placement Rate in 2025-26
              </h3>

              <p className="text-sm text-[#578B07]">
                Up From 78% Five Years Ago
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
      {/* YEAR-WISE PLACEMENT TREND */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Year-On-Year Growth
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Five Years Of Placement Trends
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Students placed, average packages and highest packages have all
        moved upward every single year — a steady curve rather than a
        one-time spike.
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100">

      <div className="space-y-7">

        {yearlyTrend.map((row, index) => (
          <div key={index} className="grid md:grid-cols-12 items-center gap-4">

            <div className="md:col-span-2 font-bold text-[#31572c] text-lg">
              {row.year}
            </div>

            <div className="md:col-span-6">
              <div className="w-full h-3 rounded-full bg-[#ecf39e]/60 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#31572c] to-[#8BAE45]"
                  style={{ width: row.fill }}
                ></div>
              </div>
            </div>

            <div className="md:col-span-2 text-sm text-gray-600">
              <span className="font-semibold text-[#31572c]">{row.placed}</span> placed
            </div>

            <div className="md:col-span-2 text-sm text-gray-600">
              Avg <span className="font-semibold text-[#31572c]">{row.avg}</span>
            </div>

          </div>
        ))}

      </div>

      <div className="w-full h-px bg-gray-100 my-8"></div>

      <p className="text-sm text-gray-500 leading-7">
        Highest package on offer has grown from 7.5 LPA in 2021-22 to
        12 LPA in 2025-26, tracking closely with the rise in recruiter
        participation across IT, core engineering and BFSI.
      </p>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* SECTOR-WISE OFFER DISTRIBUTION */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Sector-Wise Breakdown
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Where Our Students Get Placed
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {sectorDistribution.map((item, index) => {
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
                {item.badge} of Offers
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
            Full Placement Report
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Want The Complete
            <br />
            Placement Brochure?
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Download the detailed, programme-wise placement report covering
            branch-wise packages, recruiter lists and year-on-year trends.
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
          Download Report →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* WHAT MAKES THE RECORD CREDIBLE */}
{/* ========================================================= */}

<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Behind The Numbers
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        What Makes These Statistics Reliable
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Placement numbers only mean something when they're transparent,
        consistent and tracked across every programme — here's how we
        ensure that.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {highlightPoints.map((item, index) => {
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

          1. Branch-Wise Package Comparison (Charts)
          2. Student Success Stories / Testimonials
          3. Internship-to-PPO Conversion Stats
          4. Downloadable NIRF / Placement Brochure Links
      */}

    </div>
  );
};

export default PlacementStatistics;