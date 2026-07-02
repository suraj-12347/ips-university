import React, { useState } from "react";
import DotedRing from "./DotedRing";
import pharma from "../images1/pharmaflowertree3.png";
import noticesecbg from "../images1/noticesecbg3.png";
import { Leaf } from "lucide-react";


import { GiThreeLeaves } from "react-icons/gi";
import {
  Bell,
  CalendarDays,
  Megaphone,
  BookOpen,
  GraduationCap,
  FileText,
  ArrowRight,
} from "lucide-react";

const newsData = [
  {
    tab: "events",
    month: "Mar",
    day: "10",
    text: "As per the govt advisory, the techfest which will be held on 12 March 2025 is postponed till further orders",
  },
  {
    tab: "academic",
    month: "Mar",
    day: "3",
    text: `Workshop by Made Easy Group, New Delhi on "How to crack Civil Services Exam", Engineering Services Exam, GATE & PSUs`,
  },
  {
    tab: "events",
    month: "Feb",
    day: "28",
    text: "TECHNOMANIA 2025 at IPS Campus — ART || CULTURAL || TECHNICAL",
  },
  {
    tab: "academic",
    month: "Oct",
    day: "18",
    text: "Anti Drugs Seminar held at IPS Group of Colleges by Mr. Vishal Verma (DSP).",
  },
  {
    tab: "academic",
    month: "Oct",
    day: "16",
    text: `Guest Lecture on "Application of Psychrometry in Air Conditioning Systems"`,
  },
  {
    tab: "events",
    month: "Dec",
    day: "18",
    text: "International Conference on Environmental Sustainability and Construction Technology (ICESCT 2025)",
  },
  {
    tab: "placement",
    month: "Sep",
    day: "6",
    text: "Guest Lecture on Wear Behavior of single point Carbide tool for ME students.",
  },
  {
    tab: "placement",
    month: "Jan",
    day: "15",
    text: "Campus Placement Drive — TCS, Infosys & Wipro visiting IPS Campus.",
  },
];

const notices = [
  {
    title:
      "As per the govt advisory, the techfest which will be held on 12 March 2025 is postponed.",
    date: "Mar 10, 2025",
    isNew: true,
  },
  {
    title:
      "Guest Lecture on Wear Behavior of single point Carbide tool for ME students.",
    date: "Sep 6, 2024",
  },
  {
    title:
      "Admission Open 2025-26 — B.Tech, BCA, BBA, B.Pharm, MBA & more.",
    date: "Jan 1, 2025",
    isNew: true,
  },
  {
    title:
      "ICESCT 2025 — Abstract submission deadline: Nov 30",
    date: "Nov 1, 2024",
    isNew: true,
  },
  {
    title:
      "Scholarship Form 2025-26 — Last Date: 30 June 2025",
    date: "Apr 1, 2025",
    isNew: true,
  },
  {
    title:
      "Online Fee Payment portal is now active for all students.",
    date: "Mar 1, 2025",
  },
];

const tabs = ["all", "events", "academic", "placement"];

const NewsNoticeSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredNews =
    activeTab === "all"
      ? newsData
      : newsData.filter((item) => item.tab === activeTab);

  return (
    <section
      className="w-full py-14 px-3 md:px-5 relative overflow-hidden bg-transparent  "
      style={{
              backgroundImage: `url(${pharma})`,
              backgroundSize: "contain",
              backgroundPosition: "left",
              backgroundRepeat:"no-repeat"
            }}
    >
       {/* <div className="absolute inset-0 bg-[var(--moss)] lg:rounded-r-2xl"></div> */}

          <div
        className="absolute -bottom-2 left-0 w-full h-[70%] z-[1]"
        style={{
          background:
            "linear-gradient(to top, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute -top-2 left-0 w-full h-[70%] z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
     <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-[0]"></div>  
      {/* Background Rings */}
      {/* <div className="absolute -right-40 -top-40  pointer-events-none">
        <DotedRing height={500} width={500} />
      </div>

      <div className="absolute -left-40 bottom-0  pointer-events-none">
        <DotedRing height={500} width={500} />
      </div> */}

      <h1 className="relative z-50 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--forest)] mt-2 leading-tight mb-10">
  News & Events
</h1>

      {/* Main Container */}
      <div className="max-w-[100vw] mx-auto flex flex-col lg:flex-row gap-20 justify-center items-stretch relative z-40">

        {/* LEFT CARD */}
        <div
          className="
            w-full
            lg:max-w-[520px]
            h-[500px]
            bg-white
            rounded-2xl
            shadow-xl
            border-1
            border-gray-100
           
           px-5
            pt-20
            flex
            flex-col
            hover:-translate-y-3
            transition-all
            duration-300
           
          "
           style={{
              backgroundImage: `url(${noticesecbg})`,
              backgroundSize: "cover",
              backgroundPosition: "left-top",
            }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 flex-wrap z-40"
           >

            {/* <h2 className="text-xl md:text-2xl font-bold text-[var(--forest)]">
              News & Events
            </h2> */}

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 md:gap-2  ml-10">

              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-2
                    md:px-3
                   
                    mb-2
                    py-1.5
                    rounded-full
                    text-[12px]
                    md:text-[13px]
                    font-semibold
                    capitalize
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      activeTab === tab
                        ? "bg-[var(--forest)] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}

            </div>
          </div>

          {/* News List */}
          <div className="flex-1 overflow-y-auto mt-5 pr-2 scrollb z-40">

            <div className="flex flex-col gap-4">

              {filteredNews.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    gap-3
                    items-start
                   
                    pb-4
                  "
                >
                {/* Date Box */}
<div
  className="
    relative
    min-w-[70px]
    h-[84px]
    rounded-[18px]
    bg-gradient-to-b
    from-[#2D6A33]
    via-[#2B5F30]
    to-[#214D27]
    border-[3px]
    border-white
    shadow-[0_8px_20px_rgba(0,0,0,0.18)]
    flex
    flex-col
    items-center
    justify-center
    overflow-visible
    shrink-0
  "
>
  {/* Month */}
  <span className="uppercase text-[11px] tracking-wide font-semibold text-white/90">
    {item.month}
  </span>

  {/* Day */}
  <span className="text-[30px] leading-none font-extrabold text-white mt-1">
    {item.day}
  </span>

  {/* Leaf */}
  <div
    className="
      absolute
      -bottom-2
      -right-2
      h-8
      w-8
      rounded-full
      bg-white
      shadow-md
      flex
      items-center
      justify-center
      rotate-[-18deg]
    "
  >
    {/* <Leaf
      size={18}
      strokeWidth={2.4}
      className="text-lime-600 fill-lime-400"
    /> */}
  

  <GiThreeLeaves
    className="text-[#8BC34A] text-[26px] rotate-[70deg] drop-shadow-md"
  />


  </div>
</div>

                  {/* Content */}
                 <div className="flex-1 flex items-center justify-between gap-4  border-b
                    border-gray-200">

  <p className="text-gray-900 leading-6 text-[12px] md:text-sm pr-3">
    {item.text}
  </p>

  <button
    className="
      group
      h-11
      w-11
      rounded-full
      border
      border-gray-200
      bg-white
      flex
      items-center
      justify-center
      shadow-lg
      transition-all
      duration-300
      hover:bg-[var(--forest)]
      hover:border-[var(--forest)]
      hover:scale-110
      shrink-0
    "
  >
    <ArrowRight
      size={18}
      className="text-[var(--forest)] transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
    />
  </button>

</div>
                </div>
              ))}

            </div>

          </div>

          {/* Footer Button */}
          <div className="mt-4">

            <button
              className="
                px-3
                py-2.5
                rounded-full
                bg-[var(--forest)]
                text-white
                text-sm
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                cursor-pointer ml-5 mb-3
              "
            >
              View All News →
            </button>

          </div>
        </div>

        {/* RIGHT CARD */}
   <div
  className="
    w-full
    lg:max-w-[490px]
    h-[500px]
    bg-white
    rounded-[22px]
    shadow-xl
    overflow-hidden
    flex
    flex-col
    hover:-translate-y-2
    transition-all
    duration-300
  "
>

  {/* Header */}
  <div className="relative bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#388E3C] px-6 py-5">

    {/* Dots */}
    <div className="absolute right-0 top-0 grid grid-cols-10 gap-1 opacity-20">
      {[...Array(1000)].map((_, i) => (
        <span
          key={i}
          className="w-1 h-1 rounded-full bg-white/30"
        ></span>
      ))}
    </div>

    <div className="relative z-10 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-white/15 border border-white/30 backdrop-blur-md flex items-center justify-center">

          <Bell
            size={28}
            className="text-white"
          />

        </div>

        <h2 className="text-2xl font-bold text-white">
          Notice Board
        </h2>

      </div>

      <button className="flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all">

        View All

        <ArrowRight size={18} />

      </button>

    </div>

  </div>

  {/* Notice List */}

  <div className="flex-1 overflow-y-auto px-5 py-3 scrollb">

    <div className="flex flex-col gap-4">

      {notices.map((item, index) => (

        <div
          key={index}
          className="
            relative
            flex
            gap-4
            items-start
            py-3
            pl-5
            pr-2
            border-b
            border-gray-100
            last:border-none
          "
        >

          {/* Left Border */}

          <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#2E7D32]" />

          {/* Number */}

          <div
            className="
              w-11
              h-11
              rounded-full
              bg-[#EEF7EE]
              flex
              items-center
              justify-center
              shrink-0
              text-[#2E7D32]
              font-bold
              text-lg
            "
          >
            {index + 1}
          </div>

          {/* Content */}

          <div className="flex-1">

            <p className="text-[14px] font-medium leading-6 text-gray-800">
              {item.title}
            </p>

            <div className="flex items-center gap-3 mt-2 flex-wrap">

              <span className="flex items-center gap-1 text-xs text-gray-500">

                <CalendarDays size={13} />

                {item.date}

              </span>

              {item.isNew && (

                <span
                  className="
                    px-2.5
                    py-1
                    rounded-full
                    bg-[#2E7D32]
                    text-white
                    text-[10px]
                    font-semibold
                  "
                >
                  NEW
                </span>

              )}

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>
      </div>
    </section>
  );
};

export default NewsNoticeSection;