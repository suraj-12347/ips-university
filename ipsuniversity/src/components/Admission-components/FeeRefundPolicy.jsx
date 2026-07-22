import React from "react";
import {
  ArrowRight,
  CalendarCheck2,
  CalendarClock,
  CalendarX2,
  Receipt,
  FileX2,
  Clock3,
  FileText,
  ShieldCheck,
  ScrollText,
  MessageSquareWarning,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: CalendarCheck2, value: "100%", label: "Refund Before Deadline" },
  { icon: Receipt, value: "₹1,000", label: "Max Processing Fee" },
  { icon: Clock3, value: "15 Days", label: "Refund Processing Time" },
  { icon: FileX2, value: "0", label: "Original Certificates Retained" },
];

// How refund works, at a glance
const categories = [
  {
    title: "How To Apply For Refund",
    text: "Submit a written withdrawal request along with your fee receipt to the Admission & Fee Section, either in person or through the official student portal.",
  },
  {
    title: "Refund Timeline & Processing",
    text: "Once the withdrawal request is verified, eligible refunds are processed and credited to the original payment account within 15 working days.",
  },
  {
    title: "Non-Refundable Charges",
    text: "A one-time registration charge and caution money/security deposit (adjusted or refunded separately) are excluded from the tuition fee refund calculation.",
  },
  {
    title: "Grievance Redressal",
    text: "Any delay or denial of a valid refund can be escalated to the University Grievance Cell or the UGC SAMADHAAN portal for resolution.",
  },
];

// Full refund slab table + supporting policy points
const refundSlabs = [
  {
    icon: CalendarCheck2,
    badge: "100% Refund",
    title: "15+ Days Before Last Date",
    desc: "Full refund of fees paid, if withdrawal is intimated 15 days or more before the formally notified last date of admission.",
    category: "Full Refund",
  },
  {
    icon: CalendarClock,
    badge: "90% Refund",
    title: "Less Than 15 Days Before",
    desc: "90% refund is applicable when withdrawal is requested less than 15 days before the last notified date of admission.",
    category: "Partial Refund",
  },
  {
    icon: CalendarClock,
    badge: "80% Refund",
    title: "Within 15 Days After",
    desc: "80% refund applies if the withdrawal request is received 15 days or less after the last notified date of admission.",
    category: "Partial Refund",
  },
  {
    icon: CalendarX2,
    badge: "50% Refund",
    title: "15–30 Days After",
    desc: "50% refund applies for withdrawal requests received more than 15 days but within 30 days after the last notified date.",
    category: "Partial Refund",
  },
  {
    icon: CalendarX2,
    badge: "0% Refund",
    title: "Beyond 30 Days",
    desc: "No refund is admissible if the withdrawal request is received more than 30 days after the last notified date of admission.",
    category: "No Refund",
  },
  {
    icon: Receipt,
    badge: "General",
    title: "Processing Fee",
    desc: "A processing charge of not more than ₹1,000 may be deducted from the refund amount, as per UGC guidelines.",
    category: "General",
  },
  {
    icon: FileText,
    badge: "General",
    title: "Original Documents",
    desc: "The University does not retain original certificates or mark sheets submitted at the time of admission under any circumstance.",
    category: "General",
  },
  {
    icon: ScrollText,
    badge: "General",
    title: "Semester-wise Fee Collection",
    desc: "Fees are collected on a semester-wise basis and not for the entire program in advance, in line with UGC norms.",
    category: "General",
  },
];

const categoryStyles = {
  "Full Refund": "bg-[#ecf39e] text-[#31572c]",
  "Partial Refund": "bg-[#d4a14d]/20 text-[#8a6516]",
  "No Refund": "bg-gray-100 text-gray-600",
  General: "bg-[#31572c]/10 text-[#31572c]",
};

// General terms every applicant should know
const generalTerms = [
  {
    icon: ScrollText,
    title: "Semester-wise Fee Only",
    text: "The University collects fees on a semester-wise basis and never demands the full program fee in advance.",
  },
  {
    icon: FileText,
    title: "Written Withdrawal Required",
    text: "Refund requests must be submitted in writing along with the original fee receipt for verification and processing.",
  },
  {
    icon: ShieldCheck,
    title: "No Coercive Practices",
    text: "The University does not withhold documents, force students to buy the prospectus, or apply undisclosed deductions.",
  },
  {
    icon: MessageSquareWarning,
    title: "Grievance Redressal",
    text: "Unresolved refund disputes can be raised with the University Grievance Cell or the UGC SAMADHAAN portal.",
  },
];

const FeeRefundPolicy = () => {
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
            Fee Refund Policy
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            IPS University follows the University Grants Commission (UGC)
            fee refund guidelines in full — ensuring a transparent, fair and
            timely refund process for every student who withdraws admission.
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
    Fee Refund Policy
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + UGC COMPLIANCE HIGHLIGHT */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
  alt="Fee Refund Policy"
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

            UGC Compliant Policy

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            Fair Refunds,

            <span className="block text-[#7ea33d] italic font-medium">
              No Hidden Deductions
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            In line with UGC norms, IPS University refunds admission and
            tuition fees on a fixed, time-based slab — with no coercive
            retention of documents and no undisclosed charges.

          </p>


          <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">

            Withdraw at least 15 days before the last notified date of
            admission and receive a full refund, minus only a nominal
            processing fee.

          </p>


          {/* Policy Info */}
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
              <CalendarCheck2 size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                100% Refund
              </h3>

              <p className="text-sm text-[#578B07]">
                Withdrawal 15+ Days Before Last Date
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
      {/* HOW REFUND WORKS AT A GLANCE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Refund Process
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        How The Refund Process Works
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        From submitting your withdrawal request to receiving the amount in
        your account, here is how IPS University handles fee refunds at
        every stage.
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
{/* REFUND SLAB TABLE */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Refund Slabs
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        How Much You Get Back, And When
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {refundSlabs.map((item, index) => {
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
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
        alt="Fee Section Assistance"
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
            Need Assistance?
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Have A Question About
            <br />
            Your Fee Refund?
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Reach out to the Admission & Fee Section with your fee receipt
            and application details, and our team will guide you through
            the refund process.
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
          Contact Fee Section →
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
        Fine Print
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        Policy Terms You Should Know
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        These terms apply to every refund request at IPS University, in
        addition to the time-based slabs listed above.
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

          1. Downloadable Refund Request Form
          2. Caution Money / Security Deposit Refund Process
          3. FAQs on Refund Timelines & Bank Details Update
          4. UGC SAMADHAAN Grievance Portal Link
      */}

    </div>
  );
};

export default FeeRefundPolicy;