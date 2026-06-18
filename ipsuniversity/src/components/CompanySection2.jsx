import React, {
  useEffect,
  useState,
} from "react";

import tcs from "../images1/adobe.png";
import DotedRing2 from "./DotedRing2";
import pharma from "../images1/flower.jpeg";

import { useLanguage } from "../context/LanguageContext";

const slide1 = [
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
];

const slide2 = [
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
];

const slides = [slide1, slide2];

const CompanySection2 = () => {
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
    <section
      className="w-full py-10 px-6 md:px-16 relative overflow-hidden mt-10 z-0"
      style={{
        backgroundImage: `url(${pharma})`,
        backgroundSize: "cover",
        backgroundPosition:
          "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[var(--moss)]/90 z-0"></div>

      {/* Heading */}
      <div className="max-w-5xl  mb-8 relative z-20">

        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          {t.collaborators||"Our Collaborators"}
        </h2>

        <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
          {t.collaboratorsDesc||"Companies across the world build, scale and ship whith us "}
        </p>

      </div>

      {/* Grid */}
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
        {slides[activeSlide].map((c, i) => (
          <div
            key={`${activeSlide}-${i}`}
            className="
              h-20
              sm:h-24
              flex
              items-center
              justify-center
              rounded-2xl
              bg-white/95
              backdrop-blur-md
              border
              border-white/10
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all
              duration-500
              group
              relative
              overflow-hidden
              animate-flipCard
              p-3
            "
            style={{
              animationDelay: `${i * 0.05}s`,
            }}
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[var(--grass)]/10 to-[var(--forest)]/10" />

            {/* Logo */}
            <img
              src={c.logo}
              alt={c.name}
              className="
                h-7
                sm:h-8
                w-auto
                object-contain
                opacity-75
                group-hover:opacity-100
                group-hover:scale-110
                transition
                duration-500
              "
            />

            {/* Shine */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          </div>
        ))}
      </div>

      {/* Animation */}
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

export default CompanySection2;