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
      className="relative py-24 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16332acc] to-[#16332af5]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-[3px] text-sm font-semibold"
            style={{
              color: "#e9a13b",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Legacy & Success
          </p>

          <h2
            className="mt-3 text-4xl md:text-6xl text-white"
            style={{
              fontFamily: "Fraunces, serif",
            }}
          >
            Milestones & Achievements
          </h2>

          <p
            className="max-w-3xl mx-auto mt-5 leading-8"
            style={{
              color: "#e3f0e1",
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
                className="text-center rounded-[18px] border border-white/20 bg-white/10 backdrop-blur-xl p-6"
              >
                <Icon
                  size={34}
                  color="#e9a13b"
                  className="mx-auto mb-4"
                />

                <h3
                  className="text-4xl text-white"
                  style={{
                    fontFamily: "Fraunces, serif",
                  }}
                >
                  {item.value}
                </h3>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "#e3f0e1",
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
            className="text-3xl text-white mb-10 text-center"
            style={{
              fontFamily: "Fraunces, serif",
            }}
          >
            Journey Through The Years
          </h3>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#e9a13b]/40 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  className="relative md:pl-20"
                >
                  <div className="hidden md:flex absolute left-0 top-4 w-12 h-12 rounded-full bg-[#e9a13b] items-center justify-center">
                    <Star size={18} color="#16332a" />
                  </div>

                  <div className="rounded-[18px] border border-white/20 bg-white/10 backdrop-blur-xl p-6">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm mb-3"
                      style={{
                        background: "rgba(233,161,59,.12)",
                        color: "#e9a13b",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      {item.year}
                    </span>

                    <h4
                      className="text-2xl text-white mb-3"
                      style={{
                        fontFamily: "Fraunces, serif",
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="leading-7"
                      style={{
                        color: "#e3f0e1",
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
          <div
            className="rounded-[22px] p-8 border border-white/20 bg-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={30} color="#e9a13b" />

              <h3
                className="text-3xl text-white"
                style={{
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
                    color="#e9a13b"
                    className="mt-1"
                  />

                  <p
                    style={{
                      color: "#e3f0e1",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[22px] p-8 border border-white/20 bg-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 size={30} color="#e9a13b" />

              <h3
                className="text-3xl text-white"
                style={{
                  fontFamily: "Fraunces, serif",
                }}
              >
                Department Excellence
              </h3>
            </div>

            <p
              className="leading-8"
              style={{
                color: "#e3f0e1",
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
              <Medal size={24} color="#e9a13b" />

              <span
                style={{
                  color: "#e9a13b",
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
          className="rounded-[24px] p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg,#16332a 0%,#1f4d3a 100%)",
          }}
        >
          <ArrowUpRight
            size={42}
            color="#e9a13b"
            className="mx-auto mb-4"
          />

          <h3
            className="text-3xl text-white"
            style={{
              fontFamily: "Fraunces, serif",
            }}
          >
            Inspiring The Next Generation
          </h3>

          <p
            className="max-w-3xl mx-auto mt-4 leading-8"
            style={{
              color: "#e3f0e1",
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