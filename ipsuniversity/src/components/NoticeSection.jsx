import React, { useState } from "react";
import noticesecbg from "../images1/noticesecbg3.png";

import {
  Bell,
  CalendarDays,
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
      className="relative w-full overflow-hidden px-4 py-20 md:px-10 lg:px-16"
      style={{
        backgroundImage:"url('https://plus.unsplash.com/premium_photo-1661767783605-e9b12336fafc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-[#063b25]/75" />

      {/* Soft Glass Glow */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-lime-200/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-lime-300">
            Campus Updates
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            News & Events
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
            Stay updated with the latest announcements, academic activities,
            events and opportunities at IPS University.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* ================= NEWS & EVENTS ================= */}
          <div
            className="
              overflow-hidden rounded-[28px]
              border border-white/20
              bg-white/[0.10]
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              backdrop-blur-xl
            "
          >
            {/* Card Header */}
            <div className="border-b border-white/15 px-6 py-6 md:px-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-lime-300">
                    Latest
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    News & Events
                  </h3>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        rounded-full px-3.5 py-1.5
                        text-xs font-medium capitalize
                        transition-all duration-300
                        ${
                          activeTab === tab
                            ? "bg-white text-[#14532d] shadow-sm"
                            : "border border-white/15 bg-white/5 text-white/65 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* News List */}
            <div className="max-h-[430px] overflow-y-auto px-5 py-4 md:px-7 scrollb">

              <div className="space-y-1">
                {filteredNews.map((item, index) => (
                  <div
                    key={index}
                    className="
                      group flex gap-4
                      border-b border-white/10
                      py-5
                      last:border-none
                    "
                  >
                    {/* Date */}
                    <div
                      className="
                        flex h-[62px] w-[58px]
                        shrink-0 flex-col items-center justify-center
                        rounded-2xl
                        border border-white/20
                        bg-white/10
                        backdrop-blur-md
                        transition-all duration-300
                        group-hover:bg-white/15
                      "
                    >
                      <span className="text-[10px] font-medium uppercase tracking-wider text-lime-300">
                        {item.month}
                      </span>

                      <span className="mt-0.5 text-xl font-bold leading-none text-white">
                        {item.day}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                      <p className="text-sm leading-6 text-white/80 transition-colors duration-300 group-hover:text-white">
                        {item.text}
                      </p>

                      <button
                        className="
                          hidden h-9 w-9 shrink-0
                          items-center justify-center
                          rounded-full
                          border border-white/15
                          bg-white/5
                          text-white/60
                          transition-all duration-300
                          hover:bg-white
                          hover:text-[#14532d]
                          sm:flex
                        "
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="border-t border-white/10 px-6 py-5 md:px-7">
              <button
                className="
                  group flex items-center gap-2
                  text-sm font-semibold text-white
                  transition-all duration-300
                "
              >
                View All News

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* ================= NOTICE BOARD ================= */}
          <div
            className="
              overflow-hidden rounded-[28px]
              border border-white/20
              bg-white/[0.10]
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              backdrop-blur-xl
            "
          >

            {/* Notice Header */}
            <div className="border-b border-white/15 px-6 py-6 md:px-8">
              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-2xl
                      border border-white/20
                      bg-white/10
                      backdrop-blur-md
                    "
                  >
                    <Bell
                      size={21}
                      strokeWidth={1.8}
                      className="text-lime-300"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-lime-300">
                      Announcements
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      Notice Board
                    </h3>
                  </div>

                </div>

                <button
                  className="
                    hidden items-center gap-2
                    text-xs font-semibold
                    text-white/70
                    transition-all duration-300
                    hover:text-white
                    sm:flex
                  "
                >
                  View All
                  <ArrowRight size={15} />
                </button>

              </div>
            </div>

            {/* Notices */}
            <div className="max-h-[430px] overflow-y-auto px-5 py-3 md:px-7 scrollb">

              <div>
                {notices.map((item, index) => (
                  <div
                    key={index}
                    className="
                      group relative
                      flex gap-4
                      border-b border-white/10
                      py-5
                      last:border-none
                    "
                  >

                    {/* Number */}
                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-white/15
                        bg-white/5
                        text-xs font-semibold
                        text-lime-300
                        transition-all duration-300
                        group-hover:bg-white
                        group-hover:text-[#14532d]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <p className="text-sm font-medium leading-6 text-white/85 transition-colors duration-300 group-hover:text-white">
                        {item.title}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3">

                        <span className="flex items-center gap-1.5 text-[11px] text-white/45">
                          <CalendarDays size={12} />
                          {item.date}
                        </span>

                        {item.isNew && (
                          <span
                            className="
                              rounded-full
                              border border-lime-300/20
                              bg-lime-300/10
                              px-2 py-0.5
                              text-[9px] font-semibold
                              tracking-wider
                              text-lime-300
                            "
                          >
                            NEW
                          </span>
                        )}

                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      size={16}
                      className="
                        mt-1 shrink-0
                        text-white/20
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:text-lime-300
                      "
                    />

                  </div>
                ))}
              </div>

            </div>

            {/* Mobile Footer */}
            <div className="border-t border-white/10 px-6 py-5 sm:hidden">
              <button className="flex items-center gap-2 text-sm font-semibold text-white">
                View All
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsNoticeSection;