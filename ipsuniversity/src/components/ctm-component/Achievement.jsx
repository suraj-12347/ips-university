import React from "react";
import {
  Trophy,
  Medal,
  Award,
  Star,
  BookOpen,
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const MilestonesAchievementsSection = () => {
  const milestones = [
    {
      year: "2007",
      title: "Department Established",
      desc: "Computer Science & Engineering Department was established with a vision of excellence in technical education.",
    },
    {
      year: "2012",
      title: "Research Expansion",
      desc: "Faculty members started contributing actively in national and international journals and conferences.",
    },
    {
      year: "2016",
      title: "Industry Collaboration",
      desc: "Strengthened academic-industry partnerships through workshops, internships and expert sessions.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      desc: "Successfully adopted online learning, webinars and virtual industry interaction initiatives.",
    },
    {
      year: "2024",
      title: "Innovation & Growth",
      desc: "Enhanced focus on AI, Cyber Security, Data Science and research-driven learning.",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      value: "1000+",
      title: "Successful Alumni",
    },
    {
      icon: GraduationCap,
      value: "95%+",
      title: "Academic Excellence",
    },
    {
      icon: BriefcaseBusiness,
      value: "500+",
      title: "Placements",
    },
    {
      icon: BookOpen,
      value: "50+",
      title: "Research Publications",
    },
  ];

  const highlights = [
    "Highly qualified and experienced faculty members",
    "Regular seminars, workshops and guest lectures",
    "Excellent placement assistance and career guidance",
    "Strong research and innovation culture",
    "Modern computing infrastructure and laboratories",
    "Industry-oriented curriculum and skill development",
  ];

  return (
    <section
      className="relative py-5 px-4 md:px-8 overflow-hidden bg-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/5b/f3/38/5bf338b5a9755400d669323410428b10.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[4px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-[3px] text-sm font-semibold"
            style={{
              color: "var(--forest)",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Legacy & Success
          </p>

          <h2
            className="mt-3 text-4xl md:text-6xl"
            style={{
              color: "var(--forest)",
              fontFamily: "Fraunces, serif",
            }}
          >
            Milestones & Achievements
          </h2>

          <p
            className="max-w-3xl mx-auto mt-5 leading-8 text-gray-700"
            style={{
              fontFamily: "Outfit, sans-serif",
            }}
          >
            A journey marked by academic excellence, innovation,
            industry engagement and the success of thousands of students.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-center rounded-[18px] bg-white border border-gray-200 p-6 shadow-lg"
              >
                <Icon
                  size={34}
                  color="var(--forest)"
                  className="mx-auto mb-4"
                />

                <h3
                  className="text-4xl"
                  style={{
                    color: "var(--forest)",
                    fontFamily: "Fraunces, serif",
                  }}
                >
                  {item.value}
                </h3>

                <p
                  className="mt-2 text-sm text-gray-700"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3
            className="text-3xl mb-10 text-center"
            style={{
              color: "var(--forest)",
              fontFamily: "Fraunces, serif",
            }}
          >
            Journey Through The Years
          </h3>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[var(--forest)] opacity-20 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((item, index) => (
                <div key={index} className="relative md:pl-20">
                  <div className="hidden md:flex absolute left-0 top-4 w-12 h-12 rounded-full bg-[var(--forest)] items-center justify-center">
                    <Star size={18} color="#ffffff" />
                  </div>

                  <div className="rounded-[18px] border border-gray-200 bg-white shadow-lg p-6">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm mb-3"
                      style={{
                        background: "rgba(22,51,42,.08)",
                        color: "var(--forest)",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      {item.year}
                    </span>

                    <h4
                      className="text-2xl mb-3"
                      style={{
                        color: "var(--forest)",
                        fontFamily: "Fraunces, serif",
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="leading-7 text-gray-700"
                      style={{
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="rounded-[22px] p-8 border border-gray-200 bg-white shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Award size={30} color="var(--forest)" />

              <h3
                className="text-3xl"
                style={{
                  color: "var(--forest)",
                  fontFamily: "Fraunces, serif",
                }}
              >
                Key Highlights
              </h3>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    color="var(--forest)"
                    className="mt-1"
                  />

                  <p
                    className="text-gray-700"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] p-8 border border-gray-200 bg-white shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Building2 size={30} color="var(--forest)" />

              <h3
                className="text-3xl"
                style={{
                  color: "var(--forest)",
                  fontFamily: "Fraunces, serif",
                }}
              >
                Department Excellence
              </h3>
            </div>

            <p
              className="leading-8 text-gray-700"
              style={{
                fontFamily: "Outfit, sans-serif",
              }}
            >
              The Department has consistently maintained high academic
              standards while fostering innovation, leadership and
              professional growth among students. Through industry
              partnerships, research initiatives and modern infrastructure,
              the department continues to produce skilled engineers ready
              to contribute globally.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Medal size={24} color="var(--forest)" />

              <span
                style={{
                  color: "var(--forest)",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                Excellence • Innovation • Leadership
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
  className="rounded-[24px] p-10 text-center bg-white border border-gray-200 shadow-lg"
>
  <ArrowUpRight
    size={42}
    color="var(--forest)"
    className="mx-auto mb-4"
  />

  <h3
    className="text-3xl"
    style={{
      color: "var(--forest)",
      fontFamily: "Fraunces, serif",
    }}
  >
    Inspiring The Next Generation
  </h3>

  <p
    className="max-w-3xl mx-auto mt-4 leading-8 text-gray-700"
    style={{
      fontFamily: "Outfit, sans-serif",
    }}
  >
    Building a future where innovation, knowledge and
    professional excellence empower students to become leaders
    in technology and society.
  </p>
</div>
      </div>
    </section>
  );
};

export default MilestonesAchievementsSection;