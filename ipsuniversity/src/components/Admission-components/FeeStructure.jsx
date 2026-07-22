import React, { useState } from "react";
import {
  ArrowRight,
  IndianRupee,
  Wallet,
  ScrollText,
  ShieldCheck,
  FileText,
  Receipt,
  Layers,
  FlaskConical,
  Cpu,
  Landmark,
  Atom,
  GraduationCap,
  Scale,
  Palette,
  Languages,
  Sprout,
} from "lucide-react";
import ctm1900 from "../../images1/adminbuild.jpeg";
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline figures
const quickStats = [
  { icon: Layers, value: "9", label: "Faculties Offering Programs" },
  { icon: GraduationCap, value: "45+", label: "UG, PG & Doctoral Programs" },
  { icon: Wallet, value: "2", label: "Installments Per Session" },
  { icon: IndianRupee, value: "₹2,000", label: "One-Time Registration Fee" },
];

// How fee collection works, at a glance
const categories = [
  {
    title: "Semester-wise Fee Collection",
    text: "In line with UGC norms, IPS University collects fees on a semester-wise basis. No student is asked to pay the entire programme fee in advance.",
  },
  {
    title: "Modes of Payment",
    text: "Fees can be paid online through the student portal (Net Banking, UPI, Debit/Credit Card) or offline via Demand Draft in favour of the University.",
  },
  {
    title: "Scholarships & Fee Waivers",
    text: "Meritorious and eligible reserved-category students can avail scholarships under State/Central Government schemes, adjusted directly against the fee payable.",
  },
  {
    title: "One-Time & Refundable Charges",
    text: "A one-time registration charge applies at admission, while caution money/security deposit is fully refundable at the time of course completion or withdrawal.",
  },
];

// General components applicable to every program
const generalCharges = [
  {
    icon: Receipt,
    badge: "One-Time",
    title: "Registration Fee",
    desc: "₹2,000, payable once at the time of admission, applicable across all faculties and programs.",
  },
  {
    icon: ShieldCheck,
    badge: "Refundable",
    title: "Caution Money / Security Deposit",
    desc: "₹1,500 collected at admission and refunded in full on completion or valid withdrawal of the course.",
  },
  {
    icon: FileText,
    badge: "One-Time",
    title: "Prospectus & Processing Charge",
    desc: "A nominal ₹500 charge for the admission prospectus and application processing, as permitted under UGC/AICTE norms.",
  },
  {
    icon: ScrollText,
    badge: "Optional",
    title: "Hostel & Transport Fee",
    desc: "Charged separately and only for students opting for on-campus hostel accommodation or University bus service.",
  },
];

// Faculty-wise fee structure, derived from Ordinance No. 2 (Proposed Faculties & Schools)
const faculties = [
  {
    key: "pharma",
    icon: FlaskConical,
    title: "Pharmaceutical Sciences",
    code: "SOSPS",
    programs: [
      { name: "D. Pharm.", duration: "2 Years", fee: "45,000" },
      { name: "B. Pharm.", duration: "4 Years", fee: "95,000" },
      { name: "Pharm. D.", duration: "6 Years", fee: "1,10,000" },
      { name: "M. Pharm. (Pharmaceutics)", duration: "2 Years", fee: "1,40,000" },
      { name: "M. Pharm. (Pharmacology)", duration: "2 Years", fee: "1,40,000" },
      { name: "M. Pharm. (Pharmaceutical Chemistry)", duration: "2 Years", fee: "1,40,000" },
      { name: "M. Pharm. (Pharmacognosy)", duration: "2 Years", fee: "1,40,000" },
      { name: "Ph.D. (Pharmaceutical Sciences)", duration: "3–5 Years", fee: "45,000" },
    ],
  },
  {
    key: "engineering",
    icon: Cpu,
    title: "Engineering & Technology",
    code: "SOSET",
    programs: [
      { name: "Diploma (Engineering)", duration: "3 Years", fee: "45,000" },
      { name: "B.Tech. Computer Science & Engineering", duration: "4 Years", fee: "68,000" },
      { name: "B.Tech. AI & Data Science", duration: "4 Years", fee: "68,000" },
      { name: "B.Tech. AI & Machine Learning", duration: "4 Years", fee: "68,000" },
      { name: "B.Tech. Electronics & Communication Engg.", duration: "4 Years", fee: "58,000" },
      { name: "B.Tech. Electrical Engineering", duration: "4 Years", fee: "58,000" },
      { name: "B.Tech. Mechanical Engineering", duration: "4 Years", fee: "58,000" },
      { name: "B.Tech. Civil Engineering", duration: "4 Years", fee: "55,000" },
      { name: "B.Tech. Automobile Engineering", duration: "4 Years", fee: "58,000" },
      { name: "M.Tech. (All Specializations)", duration: "2 Years", fee: "75,000" },
      { name: "Ph.D. (Engineering & Technology)", duration: "3–5 Years", fee: "45,000" },
    ],
  },
  {
    key: "business",
    icon: Landmark,
    title: "Business Studies & Commerce",
    code: "SOSBS / SOSC",
    programs: [
      { name: "BBA", duration: "3 Years", fee: "60,000" },
      { name: "B.Com. (Plain)", duration: "3 Years", fee: "38,000" },
      { name: "B.Com. (Computer Application)", duration: "3 Years", fee: "42,000" },
      { name: "MBA (Dual Specialization)", duration: "2 Years", fee: "85,000" },
      { name: "MBA – Digital Marketing", duration: "2 Years", fee: "85,000" },
      { name: "MBA – Health Care Management", duration: "2 Years", fee: "85,000" },
      { name: "MBA – Finance Technology", duration: "2 Years", fee: "90,000" },
      { name: "MBA – Data Science", duration: "2 Years", fee: "95,000" },
      { name: "MBA – Pharmaceutical Management", duration: "2 Years", fee: "85,000" },
      { name: "MBA – Sports Management", duration: "2 Years", fee: "85,000" },
      { name: "M.Com.", duration: "2 Years", fee: "45,000" },
      { name: "Diploma (Business/Retail/Floor/Hospital Mgmt.)", duration: "1 Year", fee: "35,000" },
      { name: "Ph.D. (Business Studies / Commerce)", duration: "3–5 Years", fee: "45,000" },
    ],
  },
  {
    key: "science",
    icon: Atom,
    title: "Science & Computer Applications",
    code: "SOSSC / SOSCA",
    programs: [
      { name: "B.Sc. (PCM / PCB / Computer Science)", duration: "3 Years", fee: "42,000" },
      { name: "BCA", duration: "3 Years", fee: "55,000" },
      { name: "M.Sc. (Mathematics / Chemistry / Physics / CS)", duration: "2 Years", fee: "48,000" },
      { name: "MCA", duration: "2 Years", fee: "65,000" },
      { name: "Ph.D. (Science / Computer Applications)", duration: "3–5 Years", fee: "45,000" },
    ],
  },
  {
    key: "education",
    icon: GraduationCap,
    title: "Education & Physical Education",
    code: "SOSE / SOSPE",
    programs: [
      { name: "B.Ed.", duration: "2 Years", fee: "39,000" },
      { name: "M.Ed.", duration: "2 Years", fee: "45,000" },
      { name: "B.P.Ed.", duration: "1 Year", fee: "42,000" },
      { name: "M.P.Ed.", duration: "2 Years", fee: "48,000" },
      { name: "Diploma (Yoga / Fitness / Strength & Conditioning / Sports Journalism)", duration: "1 Year", fee: "30,000" },
      { name: "Ph.D. (Education / Physical Education)", duration: "3–5 Years", fee: "45,000" },
    ],
  },
  {
    key: "law",
    icon: Scale,
    title: "Law",
    code: "SOSL",
    programs: [
      { name: "LL.B. (3 Years Programme)", duration: "3 Years", fee: "45,000" },
      { name: "B.A. LL.B. (Hons.)", duration: "5 Years", fee: "55,000" },
      { name: "B.Com. LL.B. (Hons.)", duration: "5 Years", fee: "55,000" },
      { name: "B.Sc. LL.B. (Hons.)", duration: "5 Years", fee: "55,000" },
      { name: "LL.M. (All Specializations)", duration: "2 Years", fee: "60,000" },
      { name: "Ph.D. (Law)", duration: "3–5 Years", fee: "45,000" },
    ],
  },
  {
    key: "finearts",
    icon: Palette,
    title: "Fine Arts",
    code: "SOSFA",
    programs: [
      { name: "B.A. (Fine Arts)", duration: "3 Years", fee: "35,000" },
      { name: "Diploma in Sculpturing", duration: "1 Year", fee: "30,000" },
      { name: "Diploma in Painting", duration: "1 Year", fee: "30,000" },
    ],
  },
  {
    key: "languages",
    icon: Languages,
    title: "Languages",
    code: "SOSL",
    programs: [
      { name: "M.A. English", duration: "2 Years", fee: "30,000" },
      { name: "M.A. Hindi", duration: "2 Years", fee: "28,000" },
      { name: "M.A. Sanskrit", duration: "2 Years", fee: "28,000" },
      { name: "Foreign Language Certificate (French / German / Spanish)", duration: "6 Months", fee: "15,000" },
      { name: "Ph.D. (Languages)", duration: "3–5 Years", fee: "40,000" },
    ],
  },
  {
    key: "agriculture",
    icon: Sprout,
    title: "Agriculture",
    code: "SOSA / SOSH&F",
    programs: [
      { name: "B.Sc. Agriculture", duration: "4 Years", fee: "50,000" },
      { name: "B.Sc. Horticulture", duration: "4 Years", fee: "50,000" },
      { name: "B.Sc. Forestry", duration: "4 Years", fee: "50,000" },
      { name: "M.Sc. Agronomy", duration: "2 Years", fee: "55,000" },
      { name: "M.Sc. Horticulture", duration: "2 Years", fee: "55,000" },
      { name: "M.Sc. Soil Science", duration: "2 Years", fee: "55,000" },
      { name: "Ph.D. (Agriculture)", duration: "3–5 Years", fee: "45,000" },
    ],
  },
];

const FeeStructure = () => {
  const [activeFaculty, setActiveFaculty] = useState(faculties[0].key);
  const selected = faculties.find((f) => f.key === activeFaculty);

  return (
    <div className="w-full bg-white mt-30">
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section
        className="relative h-[420px] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${ctm1900})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" absolute inset-0 bg-gradient-to-r from-[#31572c]/90 to-transparent" />

        <div className="relative max-w-7xl px-6 lg:px-10 text-white">
          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
            Admission 2026-27
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Fee Structure
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            A transparent, semester-wise fee structure across all faculties
            of IPS University — with no hidden charges, in full compliance
            with UGC, AICTE, PCI and BCI norms.
          </p>

          <div className="flex items-center gap-2 mt-8 text-sm">
            <Link to="/" className="hover:text-[var(--grass)] transition">
              Home
            </Link>

            <ArrowRight size={16} />

            <Link to="/admission" className="hover:text-[var(--grass)] transition">
              Admission
            </Link>

            <ArrowRight size={16} />

            <span className="text-[#cde8a3] font-semibold">Fee Structure</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + UGC COMPLIANCE HIGHLIGHT */}
      {/* ========================================================= */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
              alt="Fee Structure"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20"></div>

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

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-lg pl-12 pr-10">
                <span className="flex items-center gap-2 text-[#578B07] font-semibold tracking-[3px] uppercase text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#8BAE45]" />
                  UGC / AICTE Compliant Fees
                </span>

                <h2
                  className="
                    text-4xl
                    leading-[44px]
                    font-bold
                    text-[#31572c]
                    mt-5
                  "
                >
                  One University,
                  <span className="block text-[#7ea33d] italic font-medium">
                    One Transparent Fee Policy
                  </span>
                </h2>

                <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>

                <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">
                  Every faculty at IPS University follows the same
                  semester-wise fee model, with tuition fee, one-time
                  charges, and refundable deposits clearly separated —
                  nothing bundled, nothing hidden.
                </p>

                <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">
                  Select a faculty below to view the exact tuition fee for
                  every programme it offers, for the 2026-27 academic
                  session.
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-[#31572c]
                      text-white
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <IndianRupee size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-[#31572c]">
                      Semester-wise
                    </h3>
                    <p className="text-sm text-[#578B07]">
                      Fees Collected in 2 Installments Per Year
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

                  <p className="mt-3 text-gray-600">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW FEE COLLECTION WORKS */}
      {/* ========================================================= */}

      <section className="py-24 bg-[#f8faf7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
              Fee Policy
            </span>

            <h2 className="text-4xl font-bold text-[#31572c] mt-3">
              How The Fee Structure Works
            </h2>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
              From payment mode to scholarships, here is everything you need
              to know before you pay your first semester fee at IPS
              University.
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

                <p className="text-gray-600 mt-4 leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FACULTY-WISE FEE STRUCTURE (INTERACTIVE) */}
      {/* ========================================================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
              Faculty-wise Fees
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
              Choose A Faculty To See Its Fee Structure
            </h2>

            <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
          </div>

          {/* Faculty Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faculties.map((f) => {
              const Icon = f.icon;
              const isActive = f.key === activeFaculty;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFaculty(f.key)}
                  className={`
                    flex items-center gap-2
                    px-5 py-3
                    rounded-2xl
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    border
                    ${
                      isActive
                        ? "bg-[#31572c] text-white border-[#31572c] shadow-lg"
                        : "bg-white text-gray-700 border-gray-200 hover:border-[#8BAE45] hover:bg-green-50"
                    }
                  `}
                >
                  <Icon size={16} />
                  {f.title}
                </button>
              );
            })}
          </div>

          {/* Selected Faculty Header */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6 px-2">
            <div>
              <p className="text-xs uppercase tracking-[3px] text-[#8BAE45] font-semibold">
                {selected.code}
              </p>
              <h3 className="text-2xl font-bold text-[#31572c] mt-1">
                Faculty of {selected.title}
              </h3>
            </div>

            <span className="text-sm text-gray-500">
              {selected.programs.length} Program
              {selected.programs.length > 1 ? "s" : ""} Listed
            </span>
          </div>

          {/* Fee Table */}
          <div className="rounded-[26px] border border-gray-100 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#31572c] text-white text-sm">
                    <th className="px-6 py-4 font-semibold">Program</th>
                    <th className="px-6 py-4 font-semibold">Duration</th>
                    <th className="px-6 py-4 font-semibold whitespace-nowrap">
                      Tuition Fee / Year
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {selected.programs.map((p, index) => (
                    <tr
                      key={index}
                      className={`
                        text-sm
                        ${index % 2 === 0 ? "bg-white" : "bg-[#f8faf7]"}
                        hover:bg-green-50
                        transition
                      `}
                    >
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {p.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{p.duration}</td>
                      <td className="px-6 py-4 font-bold text-[#31572c] whitespace-nowrap">
                        ₹ {p.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4 leading-6">
            Note: Fees shown are indicative for the 2026-27 academic session
            and are subject to revision as per AICTE / UGC / PCI / BCI
            guidelines. Kindly confirm the exact applicable fee from the
            Admission &amp; Fee Section before making any payment.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* GENERAL CHARGES (COMMON TO ALL FACULTIES) */}
      {/* ========================================================= */}

      <section className="py-24 bg-[#f8faf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
              Common Charges
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
              Charges Applicable To Every Program
            </h2>

            <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {generalCharges.map((item, index) => {
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

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#31572c]/10 text-[#31572c]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1d3d20] mt-6">
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

            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#8BAE45]/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

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
                  Your Fee Structure?
                </h2>

                <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
                  Reach out to the Admission &amp; Fee Section with your
                  program and category details, and our team will help you
                  with the exact fee breakup and scholarship eligibility.
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
    </div>
  );
};

export default FeeStructure;