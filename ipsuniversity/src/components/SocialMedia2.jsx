import React from "react";
import DotedRing2 from "./DotedRing2";
import pharma from "../images1/edu2.jpeg";

const socialData = [
  {
    name: "Facebook",
    handle: "@IPSUniversityGwalior",
    followers: "12.5K",
    logo: "https://img.icons8.com/color/96/facebook-new.png",
  },
  {
    name: "Instagram",
    handle: "@ips_university",
    followers: "8.2K",
    logo: "https://img.icons8.com/color/96/instagram-new--v1.png",
  },
  {
    name: "YouTube",
    handle: "IPS University Official",
    followers: "4.1K",
    logo: "https://img.icons8.com/color/96/youtube-play.png",
  },
  {
    name: "LinkedIn",
    handle: "IPS University",
    followers: "6.8K",
    logo: "https://img.icons8.com/color/96/linkedin.png",
  },
  {
    name: "Twitter / X",
    handle: "@IPSUniv",
    followers: "3.4K",
    logo: "https://cdn.simpleicons.org/x",
  },
];

const SocialMedia2 = () => {
  return (
    <section
      className="
        w-full
        px-4
        md:px-8
        py-14
        relative
        overflow-hidden
        mt-10
        mb-20
      "
      style={{
        backgroundImage: `url(${pharma})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Background Ring */}
      {/* <div className="absolute -left-32 -top-40 pointer-events-none opacity-40">
        <DotedRing2 height={450} width={450} />
      </div> */}

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center relative z-10">

        <span
          className="
            px-5
            py-2
            rounded-full
            bg-white/10
            border
            border-white/20
            text-white
            text-xs
            sm:text-sm
            font-medium
            inline-block
            mb-3
            backdrop-blur-md
          "
        >
          Connect With Us
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
          Follow IPS University
        </h2>

        <p className="text-white/70 leading-7 mt-5 text-sm md:text-base max-w-2xl mx-auto px-2">
          Stay connected with our vibrant student community,
          latest campus updates, achievements and events.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          max-w-7xl
          mx-auto
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-5
          relative
          z-10
        "
      >

        {socialData.map((item, index) => (
          <div
            key={index}
            className="
              group
              bg-white/95
              backdrop-blur-md
              rounded-[28px]
              border
              border-white/20
              p-5
              sm:p-6
              min-h-[290px]
              flex
              flex-col
              justify-between
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
              overflow-hidden
              relative
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                top-0
                right-0
                w-24
                h-24
                bg-[var(--grass)]/10
                blur-2xl
                rounded-full
              "
            ></div>

            {/* Content */}
            <div className="relative z-10">

              {/* Logo */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#f8f8f8]
                  border
                  border-gray-100
                  flex
                  items-center
                  justify-center
                  mx-auto
                  shadow-sm
                "
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--forest)] mt-5 text-center">
                {item.name}
              </h3>

              {/* Handle */}
              <p className="text-gray-500 text-sm mt-2 text-center break-words px-2">
                {item.handle}
              </p>

              {/* Followers */}
              <div className="mt-5 text-center">

                <h4 className="text-2xl sm:text-3xl font-bold text-[var(--forest)]">
                  {item.followers}
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  Followers
                </p>

              </div>
            </div>

            {/* Button */}
            <button
              className="
                relative
                z-10
                mt-6
                h-11
                w-full
                rounded-full
                bg-[#f4f4f4]
                hover:bg-[var(--forest)]
                text-[var(--forest)]
                hover:text-white
                text-sm
                font-semibold
                transition-all
                duration-300
              "
            >
              Follow →
            </button>

          </div>
        ))}

      </div>
    </section>
  );
};

export default SocialMedia2;