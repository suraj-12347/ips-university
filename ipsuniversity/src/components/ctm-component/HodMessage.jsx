import React from "react";
import { Eye, Rocket, Target } from "lucide-react";


const iconMap = {
  Eye,
  Rocket,
  Target,
};

const HodMessage = ({HodMessageData}) => {
  const { profile, message, highlights } = HodMessageData;

  return (
    <section
      className="relative min-h-screen py-5 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/fa/12/cc/fa12cc16e8d3811e36cd1ccb7338bb03.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[3px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 ">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-stretch">
          {/* ================= Left Profile Card ================= */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white shadow-xl p-6 md:p-8 text-center h-full flex flex-col">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-[var(--forest)]"
              />

              <h3 className="mt-5 text-2xl font-bold text-[var(--forest)]">
                {profile.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {profile.designation}
              </p>

              <div className="w-full h-[1px] bg-gray-200 my-6"></div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {profile.stats.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-[var(--forest)] text-lg">
                      {item.value}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tagline */}
              {profile.tagline && (
                <div className="mt-6 bg-[var(--moss)]/10 rounded-2xl p-4">
                  <p className="text-sm text-[var(--forest)] font-medium">
                    {profile.tagline}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ================= Right Message Card ================= */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white/95 backdrop-blur-sm p-4 md:p-10 h-full">
             
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--forest)] mb-6">
                {message.title}
              </h3>

              {/* Paragraphs */}
              {message.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-700 leading-8 ${
                    index !== message.paragraphs.length - 1
                      ? "mb-5"
                      : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              {/* Quote */}
              {message.quote && (
                <div className="bg-[var(--moss)]/10 border-l-4 border-[var(--forest)] rounded-r-2xl p-5 my-6">
                  <p className="italic text-[var(--forest)] font-semibold leading-8">
                    {message.quote}
                  </p>

                  <p className="text-sm text-gray-500 mt-3">
                    — {message.author}
                  </p>
                </div>
              )}

              {/* Bottom Cards */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                {highlights.map((item, index) => {
                  const Icon = iconMap[item.icon];

                  return (
                    <div
                      key={index}
                      className="bg-green-50 rounded-2xl p-5 hover:shadow-md transition-all duration-300"
                    >
                      {Icon && (
                        <Icon
                          size={32}
                          className="text-[var(--forest)] mb-3"
                        />
                      )}

                      <h4 className="font-semibold text-[var(--forest)] mb-2">
                        {item.title}
                      </h4>

                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HodMessage;