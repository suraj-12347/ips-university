import React from "react";
import {
  ArrowRight,
  Award,
  Users,
  Globe2,
  Building2,
  Briefcase,
  Landmark,
  FlaskConical,
  Palette,
  Trophy,
  Mic2,
  Handshake,
  GraduationCap,
  CalendarHeart,
  Gift,
  UserPlus,
  Quote,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import tp from '../../images1/tp.png'
import { Link } from "react-router-dom";

/* ==========================================
   DATA

   NOTE: Names, batches and designations below
   are placeholder examples only. Replace with
   verified details of your university's actual
   alumni before publishing.
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Users, value: "15,000+", label: "Alumni Worldwide" },
  { icon: Globe2, value: "15+", label: "Countries Represented" },
  { icon: Building2, value: "50+", label: "Companies Led Or Founded" },
  { icon: Award, value: "20+", label: "National & Global Honours" },
];

// Broad fields where alumni have made their mark
const categories = [
  {
    title: "Business & Entrepreneurship",
    text: "Founders and business leaders who have built companies and brands across India and abroad after graduating from the University.",
  },
  {
    title: "Government & Civil Services",
    text: "Alumni serving in the IAS, IPS, judiciary and public policy roles, contributing to governance and nation-building.",
  },
  {
    title: "Academia, Research & Innovation",
    text: "Professors, scientists and researchers working at leading universities and R&D labs across the world.",
  },
  {
    title: "Arts, Sports & Media",
    text: "Writers, artists, athletes and media professionals carrying the University's name into culture and public life.",
  },
];

// Full list of prominent alumni profiles
const alumniList = [
  {
    icon: Briefcase,
    badge: "Batch of 2010",
    title: "Aditya Sharma",
    desc: "Founder & CEO of a fintech startup recognised in Forbes' 30 under 30, now serving over 2 million customers.",
    category: "Business",
  },
  {
    icon: Landmark,
    badge: "Batch of 2008",
    title: "Priya Menon",
    desc: "IAS Officer currently serving as District Collector, known for leading impactful rural development initiatives.",
    category: "Government",
  },
  {
    icon: FlaskConical,
    badge: "Batch of 2005",
    title: "Dr. Rohan Kulkarni",
    desc: "Research Scientist at a leading international university, published in top journals for work on renewable energy.",
    category: "Academia",
  },
  {
    icon: Palette,
    badge: "Batch of 2012",
    title: "Ananya Verma",
    desc: "Award-winning film and documentary director whose work has been showcased at international film festivals.",
    category: "Arts",
  },
  {
    icon: Trophy,
    badge: "Batch of 2014",
    title: "Karan Thakur",
    desc: "National-level badminton champion who represented India at multiple international tournaments.",
    category: "Sports",
  },
  {
    icon: Building2,
    badge: "Batch of 2009",
    title: "Meera Iyer",
    desc: "Vice President of Engineering at a global technology company, leading teams across three continents.",
    category: "Business",
  },
  {
    icon: Mic2,
    badge: "Batch of 2011",
    title: "Siddharth Rao",
    desc: "Journalist and news anchor recognised for in-depth reporting on public policy and governance.",
    category: "Arts",
  },
  {
    icon: GraduationCap,
    badge: "Batch of 2007",
    title: "Dr. Neha Kapoor",
    desc: "Dean of Faculty at a reputed institution, honoured for contributions to higher education reform.",
    category: "Academia",
  },
];

const categoryStyles = {
  Business: "bg-[#ecf39e] text-[#31572c]",
  Government: "bg-[#31572c]/10 text-[#31572c]",
  Academia: "bg-gray-100 text-gray-600",
  Arts: "bg-[#d4a14d]/15 text-[#8a6112]",
  Sports: "bg-[#31572c]/10 text-[#31572c]",
};

// Ways alumni can stay connected with the University
const generalTerms = [
  {
    icon: UserPlus,
    title: "Join The Alumni Network",
    text: "Register on the official alumni portal to connect with batchmates and stay updated on University news.",
  },
  {
    icon: CalendarHeart,
    title: "Alumni Meets & Reunions",
    text: "Annual reunions and city-wise chapter meets bring graduates together to reconnect and celebrate milestones.",
  },
  {
    icon: Handshake,
    title: "Mentorship & Guest Lectures",
    text: "Alumni regularly return as mentors, guest speakers and recruiters, giving back to current students.",
  },
  {
    icon: Gift,
    title: "Give Back To The University",
    text: "Alumni can contribute to scholarships, research grants and campus development through the Alumni Association.",
  },
];

const ProminentAlumni = () => {
  return (
    <div className="w-full bg-white mt-30">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative h-[420px] flex items-center overflow-hidden" style={{  backgroundImage:  `url(${tp})`, backgroundSize: "cover",  backgroundPosition: "center",  }}  >
        <div className=" absolute inset-0 bg-gradient-to-r from-[#31572c]/90 to-transparent" />

        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">

          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
            Alumni Relations
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Prominent Alumni
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            From boardrooms to bureaucracy, laboratories to the arts — IPS
            University&apos;s alumni carry forward the values of their alma mater
            into every field they choose to lead.
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
    Prominent Alumni
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + FLAGSHIP ALUMNUS HIGHLIGHT */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
  alt="Alumni Speaker Session"
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

            Alumni Spotlight

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            Aditya Sharma

            <span className="block text-[#7ea33d] italic font-medium">
              Batch of 2010, Founder & CEO
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            From a first-generation graduate to founding a fintech company
            recognised on Forbes&apos; 30 Under 30, Aditya&apos;s journey began right
            here on campus, in the same classrooms our students learn in
            today.

          </p>

          <div className="mt-5 flex items-start gap-3 max-w-md">
            <Quote className="text-[#8BAE45] shrink-0 mt-1" size={20} />
            <p className="text-gray-600 text-sm italic leading-6">
              &quot;Everything I learned about resilience and problem-solving, I
              learned first in the university&apos;s project labs.&quot;
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
              <Briefcase size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                Forbes 30 Under 30 Honouree
              </h3>

              <p className="text-sm text-[#578B07]">
                Now Serving 2 Million+ Customers
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
      {/* FIELDS OF IMPACT AT A GLANCE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Fields Of Impact
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Making Their Mark, Everywhere
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Our alumni network spans nearly every profession imaginable — proof
        that an IPS University education opens doors across industries,
        not just one career path.
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
{/* FULL LIST OF PROMINENT ALUMNI */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Alumni Directory
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Meet Some Of Our Notable Graduates
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {alumniList.map((item, index) => {
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
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
        alt="Alumni Reunion"
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
            Are You An IPS Alumnus?
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            We&apos;d Love To Hear
            <br />
            Your Story.
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Nominate yourself or a fellow graduate to be featured here, and
            stay connected with the University community you grew up in.
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
          Nominate An Alumnus →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* STAY CONNECTED */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Alumni Association
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        Stay Connected With Your Alma Mater
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Graduation is just the beginning of your relationship with IPS
        University. Here&apos;s how our alumni continue to stay involved.
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

          1. Alumni Video Testimonials
          2. Year-Wise / Batch-Wise Alumni Directory Search
          3. Alumni Association Office Bearers & Contact
          4. Upcoming Alumni Meet & Event Calendar
      */}

    </div>
  );
};

export default ProminentAlumni;