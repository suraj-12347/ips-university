import React, { useState } from "react";
import DotedRing from "./DotedRing";
import pharma from "../images1/pharmaflowertree.png";

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
      className="w-full py-14 px-3 md:px-5 relative overflow-hidden mt-20 lg:mt-30"
      style={{
              backgroundImage: `url(${pharma})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      {/* Background Rings */}
      {/* <div className="absolute -right-40 -top-40  pointer-events-none">
        <DotedRing height={500} width={500} />
      </div>

      <div className="absolute -left-40 bottom-0  pointer-events-none">
        <DotedRing height={500} width={500} />
      </div> */}

      {/* Main Container */}
      <div className="max-w-[1150px] mx-auto flex flex-col lg:flex-row gap-6 justify-center items-stretch relative z-40">

        {/* LEFT CARD */}
        <div
          className="
            w-full
            lg:max-w-[520px]
            h-[500px]
            bg-white
            rounded-2xl
            shadow-xl
            p-4
            md:p-5
            flex
            flex-col
            hover:-translate-y-3
            transition-all
            duration-300
          "
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 flex-wrap z-40">

            <h2 className="text-xl md:text-2xl font-bold text-[var(--forest)]">
              News & Events
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2">

              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-3
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
                    border-b
                    border-gray-200
                    pb-4
                  "
                >
                  {/* Date Box */}
                  <div
                    className="
                      min-w-[58px]
                      h-[62px]
                      rounded-xl
                      bg-[var(--forest)]
                      text-white
                      flex
                      flex-col
                      items-center
                      justify-center
                      shadow-md
                    "
                  >
                    <span className="text-[11px] font-medium">
                      {item.month}
                    </span>

                    <span className="text-lg font-bold leading-none">
                      {item.day}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <p className="text-gray-700 leading-6 text-[13px] md:text-sm">
                      {item.text}
                    </p>

                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Footer Button */}
          <div className="pt-4">

            <button
              className="
                px-5
                py-2.5
                rounded-xl
                bg-[var(--forest)]
                text-white
                text-sm
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                cursor-pointer
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
            lg:max-w-[420px]
            h-[500px]
            bg-white
            rounded-2xl
            shadow-xl
            p-4
            md:p-5
            flex
            flex-col
            hover:-translate-y-3
            transition-all
            duration-300
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-5">

            <h2 className="text-xl md:text-2xl font-bold text-[var(--forest)]">
              Notice Board
            </h2>

            <button className="text-[var(--forest)] text-sm font-semibold hover:underline">
              View All →
            </button>

          </div>

          {/* Notice List */}
          <div className="flex-1 overflow-y-auto pr-2 scrollb">

            <div className="flex flex-col gap-4">

              {notices.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    gap-3
                    items-start
                    border-b
                    border-gray-200
                    pb-4
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-9
                      h-9
                      rounded-full
                      bg-[var(--grass)]/20
                      flex
                      items-center
                      justify-center
                      text-[var(--forest)]
                      text-sm
                      shrink-0
                    "
                  >
                    ✅
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <p className="text-gray-700 leading-6 text-[13px] md:text-sm">
                      {item.title}
                    </p>

                    <div className="flex items-center gap-2 mt-2 flex-wrap">

                      <span className="text-[11px] text-gray-500">
                        {item.date}
                      </span>

                      {item.isNew && (
                        <span
                          className="
                            px-2
                            py-[3px]
                            rounded-full
                            text-[10px]
                            font-bold
                            bg-red-500
                            text-white
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