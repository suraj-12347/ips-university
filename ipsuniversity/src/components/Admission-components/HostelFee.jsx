import React from "react";
import {
  ArrowRight,
  Users,
  Home,
  UtensilsCrossed,
  ShieldCheck,
  BedSingle,
  BedDouble,
  Wifi,
  Zap,
  WashingMachine,
  Clock3,
  FileText,
  Ban,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Users, value: "400+", label: "Hostel Seats Available" },
  { icon: Home, value: "2+", label: "Hostels On Campus" },
  { icon: UtensilsCrossed, value: "4 Meals/Day", label: "Mess Facility" },
  { icon: ShieldCheck, value: "24×7", label: "Security & Warden Support" },
];

// Accommodation overview
const categories = [
  {
    title: "Room Types & Occupancy",
    text: "Single, double, triple and multi-sharing rooms with AC and Non-AC options, available separately across boys' and girls' hostels.",
  },
  {
    title: "Mess & Dining",
    text: "Hygienic vegetarian and non-vegetarian meals served four times a day — breakfast, lunch, evening snacks and dinner — billed separately from room rent.",
  },
  {
    title: "Security Deposit & Charges",
    text: "A one-time refundable caution deposit is collected at the time of room allotment and adjusted against damages or dues at checkout.",
  },
  {
    title: "Facilities Included",
    text: "Wi-Fi, common rooms, indoor games, a gymnasium, laundry and round-the-clock security with on-call medical support.",
  },
];

// Full hostel fee & charges breakdown
const hostelFees = [
  {
    icon: BedSingle,
    badge: "₹95,000 – ₹1,20,000/yr",
    title: "Single Occupancy",
    desc: "A private room with an attached washroom, ideal for students who prefer more personal space.",
    category: "Accommodation",
  },
  {
    icon: BedDouble,
    badge: "₹75,000 – ₹95,000/yr",
    title: "Double Sharing",
    desc: "Two students per room with shared washroom facilities, balancing comfort and affordability.",
    category: "Accommodation",
  },
  {
    icon: Users,
    badge: "₹60,000 – ₹80,000/yr",
    title: "Triple Sharing",
    desc: "The most economical option, with three students sharing a spacious, fully furnished room.",
    category: "Accommodation",
  },
  {
    icon: UtensilsCrossed,
    badge: "₹35,000 – ₹40,000/yr",
    title: "Mess Charges",
    desc: "Covers breakfast, lunch, evening snacks and dinner, billed separately from the room rent.",
    category: "Mess",
  },
  {
    icon: ShieldCheck,
    badge: "₹10,000 (Refundable)",
    title: "Security Deposit",
    desc: "A one-time refundable caution deposit collected at the time of room allotment.",
    category: "Deposit",
  },
  {
    icon: Wifi,
    badge: "Included",
    title: "Wi-Fi & Common Areas",
    desc: "Campus-wide Wi-Fi access along with common rooms, TV lounge and indoor games facilities.",
    category: "Add-on",
  },
  {
    icon: Zap,
    badge: "As Per Usage",
    title: "Electricity & AC Charges",
    desc: "Metered electricity and optional air-conditioning charges billed separately based on actual usage.",
    category: "Add-on",
  },
  {
    icon: WashingMachine,
    badge: "₹2,000 – ₹3,000/yr",
    title: "Laundry Service",
    desc: "Optional paid laundry service available for hostellers on a subscription basis.",
    category: "Add-on",
  },
];

const categoryStyles = {
  Accommodation: "bg-[#ecf39e] text-[#31572c]",
  Mess: "bg-[#31572c]/10 text-[#31572c]",
  Deposit: "bg-gray-100 text-gray-600",
  "Add-on": "bg-[#d4a14d]/20 text-[#8a6516]",
};

// Hostel rules students should know
const hostelRules = [
  {
    icon: Clock3,
    title: "Fixed Curfew Timings",
    text: "Hostel gates close by a fixed time each evening; late entry requires prior permission from the warden.",
  },
  {
    icon: ShieldCheck,
    title: "Ragging-Free Campus",
    text: "Ragging, discrimination and any form of harassment are strictly prohibited and invite immediate disciplinary action.",
  },
  {
    icon: FileText,
    title: "No Outside Guests",
    text: "Visitors and outsiders are not permitted inside hostel rooms without prior approval from the warden's office.",
  },
  {
    icon: Ban,
    title: "Prohibited Items",
    text: "Electrical heating appliances, weapons, alcohol and narcotics are strictly banned inside hostel premises.",
  },
];

const HostelFee = () => {
  return (
    <div className="w-full bg-white mt-30">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative h-[420px] flex items-center overflow-hidden" style={{  backgroundImage:  `url(${ctm1900})`, backgroundSize: "cover",  backgroundPosition: "center",  }}  >
        <div className=" absolute inset-0 bg-gradient-to-r from-[#31572c]/90 to-transparent" />

        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">

          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
            Campus Accommodation
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hostel Fee Structure
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            A safe, comfortable and well-equipped home away from home —
            explore room types, mess charges, security deposit and
            facilities included in your hostel stay at IPS University.
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
    Hostel Fee
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + HOSTEL LIFE HIGHLIGHT */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1600&q=80"
  alt="University Hostel Life"
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

            Hostel Life

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            A Home Away

            <span className="block text-[#7ea33d] italic font-medium">
              From Home
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            Separate hostels for boys and girls, each with fully furnished
            rooms, hygienic mess facilities and round-the-clock security,
            so students can focus on academics without worry.

          </p>


          <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">

            Choose from single, double or triple sharing rooms based on
            your comfort and budget — all fees are billed transparently,
            with no hidden charges.

          </p>


          {/* Hostel Info */}
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
              <Home size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                Starting at ₹60,000/yr
              </h3>

              <p className="text-sm text-[#578B07]">
                Triple Sharing, Room Rent Only
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
      {/* ACCOMMODATION AT A GLANCE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Accommodation Overview
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Everything Your Stay Includes
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        From room type to mess and deposits, here is a quick look at how
        hostel accommodation works at IPS University.
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
{/* HOSTEL FEE STRUCTURE */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Fee Breakdown
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Hostel Fee Structure 2026-27
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {hostelFees.map((item, index) => {
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
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        alt="Hostel Room"
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
            Limited Seats Available
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Reserve Your Hostel
            <br />
            Seat Today.
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Hostel rooms are allotted on a first-come, first-served basis.
            Apply early to secure your preferred room type and hostel
            block.
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
          Apply For Hostel →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* HOSTEL RULES */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Before You Move In
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        Hostel Rules You Should Know
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Every hosteller at IPS University is expected to follow these
        rules to keep the hostel a safe, respectful and disciplined
        living space for everyone.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {hostelRules.map((item, index) => {
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

          1. Hostel-wise Photo Gallery (Boys' / Girls' Blocks)
          2. Weekly Mess Menu
          3. Hostel Application & Room Allotment Form
          4. FAQs on Room Change & Vacating Procedure
      */}

    </div>
  );
};

export default HostelFee;