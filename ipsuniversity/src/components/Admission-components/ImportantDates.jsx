import React from "react";
import {
  ArrowRight,
  CalendarDays,
  CalendarCheck2,
  CalendarClock,
  Clock3,
  FileCheck2,
  Award,
  Bell,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import { Link } from "react-router-dom";

/* ==========================================
   DATA
========================================== */

// Quick-glance headline dates shown as stat cards
const quickStats = [
  { icon: CalendarDays, value: "15 Jan 2026", label: "Application Opens" },
  { icon: CalendarClock, value: "30 Jun 2026", label: "Application Deadline" },
  { icon: FileCheck2, value: "10 Jul 2026", label: "Entrance Test" },
  { icon: GraduationCap, value: "18 Aug 2026", label: "Classes Begin" },
];

// Admission process stages
const processStages = [
  {
    title: "Application & Eligibility",
    text: "Register online, fill in personal and academic details, and confirm eligibility before the application window closes.",
  },
  {
    title: "Entrance Exam & Result",
    text: "Appear for the entrance test on the scheduled date and check the merit list once results are declared.",
  },
  {
    title: "Counselling & Fee Payment",
    text: "Attend document verification and counselling, then complete seat confirmation by paying the admission fee.",
  },
  {
    title: "Orientation & Enrollment",
    text: "Join the orientation program, receive your enrollment number, and begin classes with your batch.",
  },
];

// Full list of important dates
const importantDates = [
  {
    icon: CalendarDays,
    date: "15 Jan 2026",
    title: "Application Start",
    desc: "Online admission portal opens for the 2026-27 session.",
    status: "Completed",
  },
  {
    icon: CalendarClock,
    date: "30 Jun 2026",
    title: "Application Deadline",
    desc: "Last date to submit the online application form.",
    status: "Ongoing",
  },
  {
    icon: FileCheck2,
    date: "10 Jul 2026",
    title: "Entrance Test",
    desc: "University entrance examination for all UG & PG programs.",
    status: "Upcoming",
  },
  {
    icon: CalendarCheck2,
    date: "20 Jul 2026",
    title: "Merit List",
    desc: "Declaration of result and program-wise merit list.",
    status: "Upcoming",
  },
  {
    icon: ShieldCheck,
    date: "25 Jul 2026",
    title: "Document Verification",
    desc: "Verification of original documents and eligibility proof.",
    status: "Upcoming",
  },
  {
    icon: Clock3,
    date: "05 Aug 2026",
    title: "Fee Payment",
    desc: "Deadline to pay admission fee and confirm your seat.",
    status: "Upcoming",
  },
  {
    icon: Bell,
    date: "12 Aug 2026",
    title: "Orientation Day",
    desc: "Welcome session, campus tour and induction program.",
    status: "Upcoming",
  },
  {
    icon: GraduationCap,
    date: "18 Aug 2026",
    title: "Classes Begin",
    desc: "Commencement of academic session 2026-27.",
    status: "Upcoming",
  },
];

const statusStyles = {
  Completed: "bg-gray-100 text-gray-500",
  Ongoing: "bg-[#ecf39e] text-[#31572c]",
  Upcoming: "bg-[#31572c]/10 text-[#31572c]",
};

const whyTrack = [
  {
    icon: Bell,
    title: "Never Miss a Deadline",
    text: "Timely reminders help you apply, pay fees and appear for exams without last-minute stress.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Seat",
    text: "Confirming your fee payment within the window secures your seat in the program of choice.",
  },
  {
    icon: Award,
    title: "Scholarship Eligibility",
    text: "Applying and appearing on time keeps you eligible for merit-based scholarships and waivers.",
  },
  {
    icon: Clock3,
    title: "Priority Processing",
    text: "Early applicants get priority in counselling slots, hostel allotment and course selection.",
  },
];

const ImportantDates = () => {
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
            Important Dates
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            Keep track of every admission milestone at IPS University — from
            application and entrance exam dates to fee payment deadlines and
            the start of classes. Stay ahead and never miss a deadline.
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
    Important Dates
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + NEXT DEADLINE HIGHLIGHT */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"
  alt="Admission Calendar"
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

            Next Deadline

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            Application Window

            <span className="block text-[#7ea33d] italic font-medium">
              Closes Soon
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <p className="mt-6 text-gray-700 text-sm leading-7 max-w-md">

            Every date on this page has been set to give you a fair and
            timely chance to secure admission — from application to
            counselling to the start of your first class.

          </p>


          <p className="mt-4 text-gray-700 text-sm leading-7 max-w-md">

            Applying early gives you priority access to counselling
            slots, hostel allotment and scholarship review.

          </p>


          {/* Deadline Info */}
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
              <CalendarClock size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                Application Closes
              </h3>

              <p className="text-sm text-[#578B07]">
                30 June 2026
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
      {/* ADMISSION PROCESS AT A GLANCE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Admission Process
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Every Stage, One Timeline
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        From the day applications open to the day classes begin, each stage
        of admission at IPS University follows a fixed schedule so you always
        know what comes next.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {processStages.map((stage, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#31572c]">
            {stage.title}
          </h3>

          <p className="text-gray-600 mt-4 leading-8">
            {stage.text}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* FULL LIST OF IMPORTANT DATES */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Admission Calendar
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Key Dates You Shouldn't Miss
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {importantDates.map((item, index) => {
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
                className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </div>

            <p className="mt-6 text-sm font-semibold text-[#578B07]">
              {item.date}
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
        alt="Admission Application"
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
            Applications Close Soon,
            <br />
            Secure Your Seat Today.
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Don't wait for the last date. Complete your application, appear
            for the entrance test, and lock in your seat before the window
            closes on 30 June 2026.
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
          Apply Now →
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* WHY THESE DATES MATTER */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Stay On Schedule
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        Why These Dates Matter
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Admission at IPS University runs on a fixed calendar. Tracking each
        date closely keeps your application, fee payment and enrollment
        moving without delay.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {whyTrack.map((item, index) => {
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

          1. Detailed Semester-wise Academic Calendar
          2. Downloadable Admission Brochure
          3. FAQs on Admission Dates
          4. Notification / Reminder Subscription
      */}

    </div>
  );
};

export default ImportantDates;