import React ,{useState} from "react";
import bgImage from "../images1/aboutbg5.png"; // Building + students image
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
    subtitle: "Placement assitence",
  },
];

const About3 = () => {
  const { language } = useLanguage();

  const [expanded, setExpanded] = useState(false);
  

const limit = 300; // jitne characters dikhane hain

  const content = {
    en: {
      about: "ABOUT IPS",
      title: "IPS UNIVERSITY",
      subtitle: "Nurturing Minds. Building Futures.",
      para: "IPS University, established under the aegis of Deendayal Krishi Avam Gramin Proudyogiki Vikas Sansthan, has been committed to academic excellence, innovation and value-based education since 2005. With multidisciplinary programs, experienced faculty and world-class infrastructure, the university prepares future-ready professionals.",
    },
  };



  const t = content[language] || content.en;

  const text = t.para

  return (
    <section
    id="about"
      className="relative  h-full  pb-35 pt-80 mt-20 bg-[#f8faf7] overflow-hidden "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat:"no-repeat"
      }}
    >

      <div
    className="
      absolute
      inset-0
      
      bg-gradient-to-r
      from-white
      
      
      to-transparent
      h-full
      
    "
  />
      <div className="max-w-full mx-auto h-full ">
        {/* MAIN HERO */}

        <div
          className="
          relative
         h-full
        
          overflow-hidden
         
          
          
          
         
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

          <div className="relative z-20 h-full flex  flex-col md:flex-row">
            {/* LEFT */}

            <div className="w-full flex items-start justify-start   mr-10 " >
              <div className="   max-w-[720px] h-full">
                {/* About */}

               <div className="relative flex flex-col py-4 pl-5 pb-10 h-full ">

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
  

  {/* Content */}
 {/* ================= LEFT CONTENT ================= */}

<div className="relative z-10 w-full lg:w-[80%] pt-40 pl-5">
  <div className="flex items-center gap-2 text-[#8BAE45] text-xs sm:text-sm font-semibold uppercase tracking-[2px]">
    <Leaf size={14} />
    <span>{t.about}</span>
  </div>

  <h1
    className="
      mt-3
      text-2xl
      sm:text-3xl
      lg:text-4xl
      font-serif
      font-bold
      leading-tight
      text-[var(--forest)]
    "
  >
    {t.title}
  </h1>

  <p
    className="
      mt-2
      text-sm
      sm:text-base
      lg:text-lg
      text-[#A47B2A]
    "
  >
    {t.subtitle}
  </p>

 <p className="text-gray-600 mt-5 text-[14px] leading-7">
  {expanded ? text : `${text.slice(0, limit)}...`}

  {text.length > limit && (
    <span
      onClick={() => setExpanded(!expanded)}
      className="ml-2 text-[var(--forest)] font-semibold cursor-pointer hover:underline"
    >
      {expanded ? "Read Less ←" : "Read More →"}
    </span>
  )}
</p>

  <button
    className="
      mt-5
      px-4
      py-2.5
      rounded-2xl
      bg-[var(--forest)]
      text-white
      flex
      items-center
      gap-2
      text-sm
      group
    "
  >
    Know More

    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition">
      <ArrowRight size={16} className="text-[var(--forest)]" />
    </span>
  </button>
</div>

{/* ================= FEATURES ================= */}
<div
  className="
    mt-8
    rounded-2xl
    border
    border-white/70
    bg-white/10
    backdrop-blur-md
    overflow-hidden
  "
>
  <div className="grid grid-cols-2 lg:grid-cols-4  py-3   border
            border-gray-100 backdrop:blur-md">

    {features.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="
            flex
            flex-col
            items-center
            text-center
           

            lg:flex-row
            lg:text-left
            lg:items-center

            border-r
            border-white
            pl-1
            last:border-r-0

           
          "
        >
          <Icon
            size={28}
            className="text-[var(--forest)] mb-2 lg:mb-0 lg:mr-3 shrink-0"
          />

          <div>
            <h3 className="text-sm font-semibold text-[var(--forest)]">
              {item.title}
            </h3>

            <p className="text-[11px] text-gray-700 mt-1 leading-4">
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

            {/* <div className="flex-1 flex justify-end items-center pr-4">
              <div className="relative w-[75%] h-[90%] overflow-hidden rounded-[30px]">
              
                <img
                  src={chairman}
                  alt="Chairperson"
                  className="absolute inset-0 w-full h-full object-cover"
                />

               
                <div
                  className="
      absolute inset-0
      bg-gradient-to-t
      from-[#234D31] via-[#234D31]/45 to-transparent
    "
                />

              
                <div
                  className="
    absolute inset-0
    bg-[linear-gradient(45deg,rgba(23,54,33,0.75)_0%,rgba(23,54,33,0.35)_35%,rgba(23,54,33,0)_70%)]
  "
                />
                <div
                  className="
      absolute inset-0
      bg-gradient-to-r
      from-[#234D31] via-[#234D31]/45 to-transparent
    "
                />

             
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  
                  <div>
                    <div className="mt-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <span className="text-2xl text-[#E3C16F]">❝</span>
                    </div>

                    <p className="mt-6 max-w-[150px] text-white/90 leading-7 text-[15px]">
                      Education is not just about knowledge, it's about
                      empowering lives to create a better tomorrow.
                    </p>
                  </div>

                 
                  <div className="relative">
                  
                    <div className="w-12 h-[2px] bg-[#D8C07A] mb-5"></div>

                    <h3 className="text-white text-[30px] font-serif font-semibold">
                      Mrs. Shobha Mishra
                    </h3>

                    <p className="mt-2 uppercase tracking-[5px] text-[#D8C07A] text-xs">
                      Chairperson
                    </p>

                   
                  </div>
                </div>
              </div>
            </div> */}
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
