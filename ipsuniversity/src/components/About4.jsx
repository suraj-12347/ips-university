import React from "react";
import bgImage from "../images1/aboutbg2.png"; // Building + students image
import chairman from "../images1/chairmanimage3.jpeg";

import { useLanguage } from "../context/LanguageContext";
import {
  ArrowRight,
  Leaf,
  Building2,
  GraduationCap,
  BadgeCheck,
  Users,
  Phone,
  Mail,
  MapPin,
  FileText,
  User,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "80+",
    subtitle: "Acre Campus",
  },
  {
    icon: GraduationCap,
    title: "9+",
    subtitle: "Schools",
  },
  {
    icon: BadgeCheck,
    title: "UGC",
    subtitle: "Approved",
  },
  {
    icon: Users,
    title: "100%",
    subtitle: "Placement Support",
  },
];

const About3 = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      about: "ABOUT IPS",
      title: "IPS UNIVERSITY",
      subtitle: "Nurturing Minds. Building Futures.",
      para: "IPS University, established under the aegis of Deendayal Krishi Avam Gramin Proudyogiki Vikas Sansthan, has been committed to academic excellence, innovation and value-based education since 2005. With multidisciplinary programs, experienced faculty and world-class infrastructure, the university prepares future-ready professionals.",
    },
  };

  const t = content[language] || content.en;

  return (
    <section
    id="about"
      className="relative pt-35 pb-44 bg-[#f8faf7] overflow-hidden "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[97vw] mx-auto px-6">
        {/* MAIN HERO */}

        <div
          className="
          relative
         h-[680px] xl:h-[35vw]
          rounded-[36px]
          overflow-hidden
          border
          border-white/30
          shadow-[0_30px_80px_rgba(0,0,0,.18)]
          backdrop-blur-[1.2px]
        "
        >
          {/* Background */}

          {/* <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

         

          <div className="absolute inset-0 bg-black/20"></div> */}

          {/* Left White Gradient */}



          {/* Soft Blur */}

          {/* <div
            className="
            absolute
            inset-0
            backdrop-blur-[1.5px]
          "
          ></div> */}

          {/* Content */}

          <div className="relative z-20 h-full flex ">
            {/* LEFT */}

            <div className="w-[50%] flex items-start justify-start   mr-10 h-full" >
              <div className="   max-w-[720px]">
                {/* About */}

               <div className="relative flex flex-col py-4 pl-5 pb-10 h-full">

  {/* White Gradient */}
  <div
    className="
      absolute
      inset-0
      -z-10
      bg-gradient-to-r
      from-white
      
      
      to-transparent
    "
  />

  {/* Blur */}
  <div
    className="
      absolute
      inset-0
      -z-10
      w-[100%]
      backdrop-blur-[2px]

    "
  />

  {/* Content */}
  <div className="relative z-10 w-[80%]">
    <div className="flex items-center gap-2 text-[#8BAE45] font-semibold tracking-[3px] uppercase ">

                  <Leaf size={17} />



                  <span>{t.about}</span>

                </div>



                {/* Heading */}



                <h1

                  className="

                  mt-5

                  text-2xl

                  lg:text-4xl

                  leading-6

                  font-serif

                  font-bold

                  text-[var(--forest)]

                "

                >

                  {t.title}

                </h1>



                {/* Subtitle */}



                <p

                  className="

                  mt-3


                  text-xl

                  text-[#A47B2A]

                  font-light

                "

                >

                  {t.subtitle}

                </p>



                {/* Paragraph */}



                <p

                  className="

                  mt-2

                  text-[15px]

                  leading-6

                  text-gray-700

                "

                >

                  {t.para}

                </p>



                {/* Button */}



                <button

                  className="

                  mt-4

                 px-2

                  py-2

                  cursor-pointer

                  rounded-full

                  bg-[var(--forest)]

                 

                  text-white

                  flex

                  items-center

                  gap-3

                  shadow-lg
                  group

                "

                >

                  Know More

                  <span
    className="
      w-7
      h-7
      rounded-full
      bg-white
      flex
      items-center
      justify-center
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  >
    <ArrowRight
      size={18}
      className="text-[var(--forest)]"
    />
  </span>
</button>

               
  </div>



<div
                  className="
  mt-10
  
  
  
  rounded-[24px]
  overflow-hidden
  backdrop-blur-2xl
  bg-transparent
  backdrop-blur-md
  border-2
  border-white/70
  
  py-3  
"
                >
                  <div className="grid grid-cols-4 w-full">
                    {features.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={index}
                          className="
          flex
          items-center
          gap-2
         
          border-r
          last:border-r-0
          border-gray-200
          hover:bg-white/25
          duration-300
        "
                        >
                          <div
                            className="
            h-14
            w-14
            
            bg-transparent
            flex
            items-center
            justify-center
            
          "
                          >
                            <Icon className="text-[#234D31]" size={32} />
                          </div>

                          <div>
                            <h3
                              className="
              text-[16px]
              font-bold
              text-[#163A24]
            "
                            >
                              {item.title}
                            </h3>

                            <p
                              className="
              text-[12px]
              text-gray-600
            "
                            >
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
</div>

                {/* Glass Feature Strip */}

                
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex-1 flex justify-end items-center pr-4">
              <div className="relative w-[75%] h-[90%] overflow-hidden rounded-[30px]">
                {/* Chairman Image */}
                <img
                  src={chairman}
                  alt="Chairperson"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Main Gradient */}
                <div
                  className="
      absolute inset-0
      bg-gradient-to-t
      from-[#234D31] via-[#234D31]/45 to-transparent
    "
                />

                {/* Right Dark Shade */}
                <div
                  className="
    absolute inset-0
    bg-[linear-gradient(45deg,rgba(23,54,33,0.75)_0%,rgba(23,54,33,0.35)_35%,rgba(23,54,33,0)_70%)]
  "
                />
                {/* <div
                  className="
      absolute inset-0
      bg-gradient-to-r
      from-[#234D31] via-[#234D31]/45 to-transparent
    "
                /> */}

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Quote */}
                  {/* <div>
                    <div className="mt-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <span className="text-2xl text-[#E3C16F]">❝</span>
                    </div>

                    <p className="mt-6 max-w-[150px] text-white/90 leading-7 text-[15px]">
                      Education is not just about knowledge, it's about
                      empowering lives to create a better tomorrow.
                    </p>
                  </div> */}

                  {/* Bottom */}
                  <div className="relative">
                    {/* Gold Line */}
                    <div className="w-12 h-[2px] bg-[#D8C07A] mb-5"></div>

                    <h3 className="text-white text-[30px] font-serif font-semibold">
                      Mrs. Shobha Mishra
                    </h3>

                    <p className="mt-2 uppercase tracking-[5px] text-[#D8C07A] text-xs">
                      Chairperson
                    </p>

                    {/* Decorative Building */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Bottom Section */}

        <div
          className="
  relative
  z-30
  max-w-[1500px]
  mx-auto
  -mt-20
  px-6
"
        >
          {/* =========================
        STATS BAR
  ========================== */}
{/* 
          <div
    className="
    rounded-[26px]
    overflow-hidden
    bg-white/65
    backdrop-blur-2xl
    border
    border-white/40
    shadow-[0_20px_60px_rgba(0,0,0,.12)]
    grid
    grid-cols-5
    mt-20
  "
  >

    {[
      ["20+", "Years of Experience"],
      ["15000+", "Alumni"],
      ["80+", "Recruiters"],
      ["100%", "Placement Support"],
      ["15 LPA", "Highest Package"],
    ].map((item, index) => (

      <div
        key={index}
        className="
        py-8
        text-center
        border-r
        last:border-r-0
        border-gray-200
      "
      >

        <h2 className="text-4xl font-bold text-[#234D31]">
          {item[0]}
        </h2>

        <p className="mt-2 text-gray-500">
          {item[1]}
        </p>

      </div>

    ))}

  </div> */}

          {/* =========================
        UTILITY BAR
  ========================== */}

          {/* <div
    className="
    mt-6
    rounded-full
    bg-[#234D31]
    text-white
    px-8
    py-5
    flex
    items-center
    justify-between
    shadow-xl
  "
  >

    <div className="flex items-center gap-3">

      <Phone size={18} />

      +91 751 244 0000

    </div>

    <div className="flex items-center gap-3">

      <Mail size={18} />

      admission@ipscollege.edu.in

    </div>

    <div className="flex items-center gap-3">

      <MapPin size={18} />

      Gwalior, Madhya Pradesh

    </div>

    <button
      className="
      bg-[#D8C07A]
      text-[#234D31]
      px-7
      py-3
      rounded-full
      font-semibold
      flex
      items-center
      gap-2
      hover:scale-105
      duration-300
    "
    >

      Apply Now

      <ArrowRight size={18} />

    </button>

    <div className="flex items-center gap-3">

      <FileText size={18} />

      Brochure

    </div>

    <div className="flex items-center gap-3">

      <User size={18} />

      Student Login

    </div>

  </div> */}

          {/* =========================
        LATEST UPDATE BAR
  ========================== */}

          {/* <div
    className="
    mt-5
    rounded-[24px]
    bg-white
    shadow-xl
    border
    border-gray-100
    overflow-hidden
    flex
  "
  >

    <div
      className="
      bg-[#234D31]
      text-white
      px-8
      flex
      items-center
      gap-3
      font-semibold
    "
    >

      <Bell />

      Latest Updates

    </div>



    <div
      className="
      flex-1
      overflow-hidden
      whitespace-nowrap
    "
    >

      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="5"
        className="py-6 text-[#234D31]"
      >

        📢 Admission Open 2025–26 &nbsp;&nbsp;&nbsp;&nbsp;

        🏆 ICECST 2025 Registration Open &nbsp;&nbsp;&nbsp;&nbsp;

        🎓 Technoparv 2025 Registration Started &nbsp;&nbsp;&nbsp;&nbsp;

        💼 Campus Placement Drive Coming Soon

      </marquee>

    </div>

  </div> */}
        </div>
      </div>
    </section>
  );
};

export default About3;
