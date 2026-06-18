import React from "react";

const news = [
  {
    date: "Mar 10",
    title:
      "As per the govt advisory, the techfest which will be held on 12 March 2020 is postponed till further orders.",
  },
  {
    date: "Mar 3",
    title:
      'Workshop by Made Easy Group on "How to crack Civil Services Exam, ESE, GATE & PSUs".',
  },
  {
    date: "Feb 28",
    title:
      'TECHNOMANIA 2020 invitation for all students. ART | CULTURAL | TECHNICAL.',
  },
  {
    date: "Oct 18",
    title:
      "Anti Drugs Seminar held at IPS Group of Colleges.",
  },
];

const notices = [
  "Techfest postponed till further orders.",
  "Guest Lecture on Wear Behavior of Single Point Carbide Tool.",
  "Campus recruitment drive next month.",
  "Library timings extended during examinations.",
];

const NewsEventsSection = () => {
  return (
    <section className="py-5 bg-gray-50 mt-10 md:mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14 text-[var(--forest)]">
          News & Events
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white p-8 shadow">
            <h3 className="text-3xl font-bold mb-8 text-[var(--forest)]">
              Latest Events
            </h3>

            {news.map((item, index) => (
              <div
                key={index}
                className="border-b border-[var(--forest)] py-5 last:border-none"
              >
                <p className="font-bold text-[var(--forest)] mb-2">
                  {item.date}
                </p>

                <p className="text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 shadow">
            <h3 className="text-3xl font-bold mb-8 text-[var(--forest)]">
              Notice Board
            </h3>

            {notices.map((notice, index) => (
              <div
                key={index}
                className="py-4 border-b border-[var(--forest)] last:border-none"
              >
                • {notice}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;