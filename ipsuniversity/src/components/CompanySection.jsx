import React, {
  useEffect,
  useState,
} from "react";

import tcs from "../images1/adobe.png";
import DotedRing2 from "./DotedRing2";
import { useLanguage } from "../context/LanguageContext";

const companySlides = [
  [
    {
      name: "Google",
      logo: "https://img.icons8.com/color/96/google-logo.png",
    },
    {
      name: "Microsoft",
      logo: "https://img.icons8.com/color/96/microsoft.png",
    },
    {
      name: "Amazon",
      logo: "https://img.icons8.com/color/96/amazon.png",
    },
    {
      name: "Apple",
      logo: "https://cdn.simpleicons.org/apple",
    },
    {
      name: "Meta",
      logo: "https://img.icons8.com/color/96/meta.png",
    },
    {
      name: "Netflix",
      logo: "https://cdn.simpleicons.org/netflix",
    },
    {
      name: "Adobe",
      logo: tcs,
    },
    {
      name: "Spotify",
      logo: "https://img.icons8.com/color/96/spotify--v1.png",
    },
    {
      name: "Tesla",
      logo: "https://cdn.simpleicons.org/tesla",
    },
    {
      name: "Airbnb",
      logo: "https://img.icons8.com/color/96/airbnb.png",
    },
    {
      name: "Notion",
      logo: "https://img.icons8.com/ios-filled/100/notion.png",
    },
    {
      name: "Slack",
      logo: "https://img.icons8.com/color/96/slack-new.png",
    },
    {
      name: "TCS",
      logo: tcs,
    },
    {
      name: "Airtel",
      logo: "https://cdn.simpleicons.org/airtel",
    },
    {
      name: "Infosys",
      logo: "https://cdn.simpleicons.org/infosys",
    },
    {
      name: "Wipro",
      logo: "https://cdn.simpleicons.org/wipro",
    },
  ],

  [
    {
      name: "LinkedIn",
      logo: "https://img.icons8.com/color/96/linkedin.png",
    },

    {
      name: "Uber",
      logo: "https://cdn.simpleicons.org/uber",
    },

    {
      name: "Samsung",
      logo: "https://cdn.simpleicons.org/samsung",
    },

    {
      name: "Intel",
      logo: "https://cdn.simpleicons.org/intel",
    },

    {
      name: "PayPal",
      logo: "https://cdn.simpleicons.org/paypal",
    },

    {
      name: "Pinterest",
      logo: "https://cdn.simpleicons.org/pinterest",
    },

    {
      name: "Oracle",
      logo: "https://img.icons8.com/color/96/oracle-logo.png",
    },

    {
      name: "IBM",
      logo: "https://img.icons8.com/color/96/ibm.png",
    },

    {
      name: "Accenture",
      logo: "https://cdn.simpleicons.org/accenture",
    },

    {
      name: "Dell",
      logo: "https://cdn.simpleicons.org/dell",
    },

    {
      name: "Cisco",
      logo: "https://cdn.simpleicons.org/cisco",
    },

    {
      name: "Reddit",
      logo: "https://cdn.simpleicons.org/reddit",
    },

    {
      name: "Figma",
      logo: "https://cdn.simpleicons.org/figma",
    },

    {
      name: "GitHub",
      logo: "https://cdn.simpleicons.org/github",
    },

    {
      name: "Dropbox",
      logo: "https://cdn.simpleicons.org/dropbox",
    },

    {
      name: "YouTube",
      logo: "https://cdn.simpleicons.org/youtube",
    },
  ],
];

const CompanySection = () => {
  const [activeSlide, setActiveSlide] =
    useState(0);

  const { t } = useLanguage();

  useEffect(() => {
    const interval =
      setInterval(() => {
        setActiveSlide((prev) =>
          prev === 0 ? 1 : 0
        );
      }, 3000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#f8f8f8] py-10 px-4 md:px-16 relative overflow-hidden mt-10">

      {/* Background Ring */}
      <div className="absolute right-0 md:right-20 -top-40 rotate-180 opacity-40 md:opacity-70">
        <DotedRing2
          height={350}
          width={350}
        />
      </div>

      {/* Heading */}
      <div className="max-w-5xl  mb-8 relative z-10 text-center md:text-left">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--forest)] leading-tight">
          {t.collaborators||"Our Collaborators"}
        </h2>

        <p className="mt-4 text-[var(--grass)] max-w-xl leading-relaxed mx-auto md:mx-0 text-sm md:text-base">
          {t.collaboratorsDesc||"Companies across the world build, scale and ship whith us"}
        </p>

      </div>

      {/* Logo Grid */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-3
          sm:grid-cols-4
          md:grid-cols-6
          lg:grid-cols-8
          gap-3
          md:gap-4
          relative
          z-20
          perspective-[1200px]
        "
      >

        {companySlides[activeSlide].map((c, i) => (
          <div
            key={`${activeSlide}-${i}`}
            className="
              h-20
              sm:h-24
              flex
              items-center
              justify-center
              rounded-2xl
              bg-white
              border
              border-[var(--grass)]/10
              shadow-sm
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-500
              group
              relative
              overflow-hidden
              animate-flipCard
              p-3
            "
            style={{
              animationDelay: `${i * 0.06}s`,
            }}
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--grass)]/5 to-[var(--forest)]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Logo */}
            <img
              src={c.logo}
              alt={c.name}
              className="
                h-7
                sm:h-8
                w-auto
                object-contain
                group-hover:opacity-100
                transition
                duration-500
                group-hover:scale-110
              "
            />

            {/* Shine */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          </div>
        ))}
      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes flipCard {
            0% {
              opacity: 0;
              transform: rotateY(90deg) scale(.9);
            }

            100% {
              opacity: 1;
              transform: rotateY(0deg) scale(1);
            }
          }

          .animate-flipCard {
            animation: flipCard .8s cubic-bezier(.22,1,.36,1);
            transform-style: preserve-3d;
            will-change: transform, opacity;
          }
        `}
      </style>
    </section>
  );
};

export default CompanySection;