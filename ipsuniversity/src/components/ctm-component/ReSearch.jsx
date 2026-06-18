import React from "react";
import {
  BookOpen,
  FileText,
  Microscope,
  Award,
  GraduationCap,
  FlaskConical,
  Lightbulb,
  Presentation,
  ArrowUpRight,
} from "lucide-react";

const AcademicResearchSection = () => {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Artificial Intelligence & Machine Learning",
      desc: "Research on intelligent systems, predictive analytics, deep learning and data-driven decision making.",
    },
    {
      icon: FlaskConical,
      title: "Cyber Security",
      desc: "Advanced work in cryptography, network security, digital forensics and cyber defense mechanisms.",
    },
    {
      icon: BookOpen,
      title: "Data Science & Analytics",
      desc: "Exploration of big data processing, visualization and analytical modelling techniques.",
    },
    {
      icon: Lightbulb,
      title: "Cloud Computing & IoT",
      desc: "Research involving distributed systems, cloud infrastructure and smart connected devices.",
    },
  ];

  const achievements = [
    {
      value: "50+",
      label: "Research Papers",
    },
    {
      value: "20+",
      label: "National Conferences",
    },
    {
      value: "10+",
      label: "International Conferences",
    },
    {
      value: "5+",
      label: "Patents & Innovations",
    },
  ];

  const activities = [
    {
      icon: FileText,
      title: "Research Publications",
      desc: "Faculty members actively publish research papers in reputed national and international journals.",
    },
    {
      icon: Presentation,
      title: "Conference Participation",
      desc: "Regular participation and presentation of innovative research work at conferences and symposiums.",
    },
    {
      icon: GraduationCap,
      title: "Student Projects",
      desc: "Students are encouraged to undertake innovative projects and research-oriented development work.",
    },
    {
      icon: Award,
      title: "Innovation & Patents",
      desc: "Focus on transforming innovative ideas into practical solutions, prototypes and intellectual property.",
    },
  ];

  return (
    <section
      className="relative py-24 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f9f5]/90 to-[#f7f9f5]/95" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-[3px] text-sm font-semibold"
            style={{
              color: "#c97f22",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Innovation & Knowledge
          </p>

          <h2
            className="mt-3 text-4xl md:text-6xl"
            style={{
              color: "#16332a",
              fontFamily: "Fraunces, serif",
            }}
          >
            Academic Research
          </h2>

          <p
            className="max-w-3xl mx-auto mt-5 leading-8"
            style={{
              color: "#3c5448",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            The Department actively promotes research culture, innovation,
            technical publications and interdisciplinary collaboration to
            contribute towards scientific and technological advancement.
          </p>
        </div>

        {/* Featured Research Banner */}
        <div
          className="rounded-[24px] p-8 md:p-12 mb-16"
          style={{
            background:
              "linear-gradient(135deg,#16332a 0%, #1f4d3a 100%)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center"
              style={{
                background: "rgba(233,161,59,.12)",
              }}
            >
              <Microscope size={48} color="#e9a13b" />
            </div>

            <div>
              <span
                className="uppercase tracking-[2px] text-sm"
                style={{
                  color: "#e9a13b",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                Research Excellence
              </span>

              <h3
                className="text-3xl text-white mt-2"
                style={{
                  fontFamily: "Fraunces, serif",
                }}
              >
                Fostering Innovation Through Research
              </h3>

              <p
                className="mt-4 leading-8"
                style={{
                  color: "#e3f0e1",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                The department continuously encourages faculty and students to
                undertake quality research, publish scholarly work and develop
                innovative solutions addressing real-world challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="rounded-[18px] p-6 text-center backdrop-blur-xl"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 8px 28px rgba(31,77,58,.08)",
              }}
            >
              <h3
                className="text-4xl"
                style={{
                  color: "#16332a",
                  fontFamily: "Fraunces, serif",
                }}
              >
                {item.value}
              </h3>

              <p
                className="mt-2 text-sm"
                style={{
                  color: "#3c5448",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3
            className="text-3xl mb-8"
            style={{
              color: "#16332a",
              fontFamily: "Fraunces, serif",
            }}
          >
            Research Domains
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[18px] p-6 transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 8px 28px rgba(31,77,58,.08)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(201,127,34,.10)",
                    }}
                  >
                    <Icon size={26} color="#c97f22" />
                  </div>

                  <h4
                    className="text-xl mb-3"
                    style={{
                      color: "#16332a",
                      fontFamily: "Fraunces, serif",
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    className="text-sm leading-7"
                    style={{
                      color: "#3c5448",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activities */}
        <div>
          <h3
            className="text-3xl mb-8"
            style={{
              color: "#16332a",
              fontFamily: "Fraunces, serif",
            }}
          >
            Research Activities
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[18px] p-6 flex gap-5 items-start transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 8px 28px rgba(31,77,58,.08)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(201,127,34,.10)",
                    }}
                  >
                    <Icon size={24} color="#c97f22" />
                  </div>

                  <div>
                    <h4
                      className="text-xl mb-2"
                      style={{
                        color: "#16332a",
                        fontFamily: "Fraunces, serif",
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="text-sm leading-7"
                      style={{
                        color: "#3c5448",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-[24px] p-8 md:p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg,#16332a 0%, #1f4d3a 100%)",
          }}
        >
          <ArrowUpRight
            size={40}
            className="mx-auto mb-4"
            color="#e9a13b"
          />

          <h3
            className="text-3xl text-white"
            style={{
              fontFamily: "Fraunces, serif",
            }}
          >
            Building Future Researchers & Innovators
          </h3>

          <p
            className="max-w-3xl mx-auto mt-4 leading-8"
            style={{
              color: "#e3f0e1",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Our commitment to research excellence empowers students and faculty
            to create impactful solutions, contribute to scientific knowledge
            and drive technological innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AcademicResearchSection;