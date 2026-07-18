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

import { milestonesAchievementsData } from "../../assets/CseData";

const iconMap = {
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
};

const MilestonesAchievementsSection = () => {
  const {
    hero,
    heading,
    achievements,
    milestones,
    highlights,
    excellence,
    cta,
  } = milestonesAchievementsData;

  const titleStyle = {
    color: "var(--forest)",
    fontFamily: "Fraunces, serif",
  };

  const bodyStyle = {
    fontFamily: "Outfit, sans-serif",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 8px 28px rgba(31,77,58,.08)",
  };

  return (
    <section
      className="
relative
py-10
px-4
md:px-8
overflow-hidden
"
      style={{
        backgroundImage: `url(${hero.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="
absolute
inset-0
bg-white/65
backdrop-blur-[4px]
"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="text-center mb-16">
          <p
            className="
uppercase
tracking-[3px]
text-sm
font-semibold
text-[var(--forest)]
"
            style={bodyStyle}
          >
            {heading.subtitle}
          </p>

          <h2
            className="
mt-3
text-4xl
md:text-6xl
"
            style={titleStyle}
          >
            {heading.title}
          </h2>

          <p
            className="
max-w-3xl
mx-auto
mt-5
leading-8
text-gray-700
"
            style={bodyStyle}
          >
            {heading.description}
          </p>
        </div>

        {/* ACHIEVEMENTS */}

        <div
          className="
grid
grid-cols-2
md:grid-cols-4
gap-6
mb-20
"
        >
          {achievements.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.title}
                className="
rounded-[18px]
p-6
text-center
"
                style={cardStyle}
              >
                <Icon
                  size={34}
                  className="
mx-auto
mb-4
text-[var(--forest)]
"
                />

                <h3
                  className="
text-4xl
"
                  style={titleStyle}
                >
                  {item.value}
                </h3>

                <p
                  className="
mt-2
text-sm
text-gray-700
"
                  style={bodyStyle}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* TIMELINE */}

        <div className="mb-20">
          <h3
            className="
text-3xl
mb-10
text-center
"
            style={titleStyle}
          >
            Journey Through The Years
          </h3>

          <div className="relative">
            <div
              className="
absolute
left-6
top-0
bottom-0
w-[2px]
bg-[var(--forest)]
opacity-20
hidden
md:block
"
            />

            <div className="space-y-8">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="
relative
md:pl-20
"
                >
                  <div
                    className="
hidden
md:flex
absolute
left-0
top-4
w-12
h-12
rounded-full
bg-[var(--forest)]
items-center
justify-center
"
                  >
                    <Star size={18} className="text-white" />
                  </div>

                  <div
                    className="
rounded-[18px]
p-6
"
                    style={cardStyle}
                  >
                    <span
                      className="
inline-block
px-3
py-1
rounded-full
text-sm
mb-3
"
                      style={{
                        background: "rgba(22,51,42,.08)",
                        color: "var(--forest)",
                      }}
                    >
                      {item.year}
                    </span>

                    <h4
                      className="
text-2xl
mb-3
"
                      style={titleStyle}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
leading-7
text-gray-700
"
                      style={bodyStyle}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS + EXCELLENCE */}

        <div
          className="
grid
lg:grid-cols-2
gap-8
mb-20
"
        >
          <div
            className="
rounded-[22px]
p-8
"
            style={cardStyle}
          >
            <div
              className="
flex
items-center
gap-3
mb-6
"
            >
              <Award size={30} className="text-[var(--forest)]" />

              <h3
                className="
text-3xl
"
                style={titleStyle}
              >
                Key Highlights
              </h3>
            </div>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="
flex
items-start
gap-3
"
                >
                  <CheckCircle2
                    size={18}
                    className="
mt-1
text-[var(--forest)]
"
                  />

                  <p className="text-gray-700" style={bodyStyle}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
rounded-[22px]
p-8
"
            style={cardStyle}
          >
            <div
              className="
flex
items-center
gap-3
mb-6
"
            >
              <Building2 size={30} className="text-[var(--forest)]" />

              <h3
                className="
text-3xl
"
                style={titleStyle}
              >
                {excellence.title}
              </h3>
            </div>

            <p
              className="
leading-8
text-gray-700
"
              style={bodyStyle}
            >
              {excellence.description}
            </p>

            <div
              className="
mt-8
flex
items-center
gap-3
"
            >
              <Medal size={24} className="text-[var(--forest)]" />

              <span
                className="
text-[var(--forest)]
"
                style={bodyStyle}
              >
                {excellence.tag}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}

        <div
          className="
rounded-[24px]
p-10
text-center
"
          style={cardStyle}
        >
          <ArrowUpRight
            size={42}
            className="
mx-auto
mb-4
text-[var(--forest)]
"
          />

          <h3
            className="
text-3xl
"
            style={titleStyle}
          >
            {cta.title}
          </h3>

          <p
            className="
max-w-3xl
mx-auto
mt-4
leading-8
text-gray-700
"
            style={bodyStyle}
          >
            {cta.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MilestonesAchievementsSection;
