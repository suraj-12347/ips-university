import React from "react";
import {
  Sprout,
  HeartHandshake,
  Brain,
  GraduationCap,
  FlaskConical,
  HandHeart,
  Leaf,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import HERO_IMAGE from "../../images1/edubuild7.png";
import ctm1900 from '../../images1/ctm1900.png'
/**
 * Overview.jsx
 * -------------------------------------------------------------------------
 * Drop this component between your existing <Navbar /> and <Footer />.
 *
 * THEME NOTE
 * -----------
 * Any section that used to sit on a --leaf background now sits on
 * --forest instead, with text switched to white for contrast. Sections
 * that were already on a white background are left untouched (white bg,
 * dark forest/charcoal text).
 *
 * HERO IMAGE FIT
 * ---------------
 * edubuild3.png is rendered as a real <img> (not a CSS background-image)
 * so it can use object-fit: contain and sit flush against the bottom of
 * the hero + rings block without being cropped or squashed. The wrapping
 * div has a solid --forest background behind it, so there's no white
 * gap around the letterboxed image on any screen size. The dark wash is
 * now a short gradient that only darkens the very top (where the hero
 * headline sits) and fades to fully transparent by ~60% down, so the
 * illustration itself stays bright and fully visible instead of being
 * washed out.
 *
 * Fonts used (Fraunces for headings, Outfit for body) — add once in
 * index.html <head> if not already present:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
 * -------------------------------------------------------------------------
 */



// Growth "rings" — sized in proportion to what they represent, like rings
// on a tree trunk. The Sansthan is a Krishi (agricultural) institute, so
// growth-as-rings is literal, not decorative.
const rings = [
  { size: 92, value: "1973", label: "Society Registered" },
  { size: 118, value: "2005", label: "IPS Founded" },
  { size: 140, value: "4", label: "Colleges" },
  { size: 164, value: "2000+", label: "Students Today" },
];

const features = [
  {
    icon: Sprout,
    title: "Holistic Growth",
    desc: "Guided by the belief that emotional, intellectual and physical lives are interconnected — spirit, mind and body together.",
  },
  {
    icon: HeartHandshake,
    title: "Equal Opportunity",
    desc: "Every student carries tremendous potential, regardless of caste, religion, background or upbringing.",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    desc: "Students are prepared to think critically and recognize how their work contributes to society and the nation.",
  },
  {
    icon: GraduationCap,
    title: "Value-Based Education",
    desc: "Not just an institution imparting academics — an experience where everyone shares one mission.",
  },
  {
    icon: FlaskConical,
    title: "Research & Industry Exposure",
    desc: "Research and teaching go hand-in-hand, giving students the chance to work alongside professionals in their field.",
  },
  {
    icon: HandHeart,
    title: "Commitment & Sincerity",
    desc: "Each student is taught, by example, the spirit of commitment, loyalty, sincerity and values.",
  },
];

const Overview = () => {
  return (
    <main className="w-full mt-10 lg:mt-30" style={{ backgroundColor: "var(--white)" }}>

        <section
        className="relative h-[420px] flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage:
            `url(${ctm1900})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#31572c]/90
      
      to-transparent
    "
  />

        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">

          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
             About The Sansthan
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
             Overview
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
             Registered in 1973, and home to the IPS Group of Colleges since 2005 —
      grown, season by season, into one of Madhya Pradesh's premier
      non-governmental educational institutions.
          </p>

          <div className="flex items-center gap-2 mt-8 text-sm">

  <Link
    to="/"
    className="hover:text-[var(--grass)] transition"
  >
    Home
  </Link>


  <ArrowRight size={16} />


  <Link
    to="/#about"
    className="hover:text-[var(--grass)] transition"
  >
    About
  </Link>


  <ArrowRight size={16} />


  <span className="text-[#cde8a3] font-semibold">
    Overview
  </span>

</div>
        </div>
      </section> 
      {/* ================================================================ */}
      {/* HERO — building illustration flush to the bottom, on a solid     */}
      {/* forest backdrop so there's no letterbox gap around it.           */}
      {/* ================================================================ */}
     
<section
  className="px-6 sm:px-10 lg:px-20 py-24"
  style={{ backgroundColor: "var(--white)" }}
>
  <div className="
    max-w-7xl
    mx-auto
    grid
    grid-cols-1
    lg:grid-cols-[1.5fr_0.9fr]
    gap-12
    items-center
  ">


    {/* Left Content */}

    <div>

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
        "
        style={{ color:"#578B07" }}
      >
        About IPS University
      </span>


      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          leading-tight
        "
        style={{ color:"#31572c" }}
      >
        Building Knowledge,
        <br />
        Inspiring Generations
      </h2>


      <div className="w-24 h-1 bg-[#8BAE45] rounded-full my-7"></div>



      <div
        className="
          space-y-5
          text-[15px]
          sm:text-base
          leading-8
        "
        style={{
          color:"#444",
          fontFamily:"Outfit, sans-serif"
        }}
      >

        <p>
          The Institute of Professional Studies (IPS), established in 2005,
          was founded with a vision to transform young minds into skilled,
          responsible and confident professionals.
        </p>


        <p>
          Driven by quality education, innovation and values, IPS has grown
          into a multidisciplinary educational institution creating
          opportunities for learning, research and growth.
        </p>


        <p>
          With experienced faculty, modern infrastructure and industry
          focused programs, IPS prepares students to achieve excellence
          in their professional journey.
        </p>


      </div>


    </div>





    {/* Right Visual Card */}

    <div className="relative">

  {/* Background Shape */}
  <div
    className="
      absolute
      -top-8
      -right-8
      w-40
      h-40
      rounded-full
      bg-[#ecf39e]
      blur-2xl
    "
  />


  <div
    className="
      relative
      rounded-[35px]
      overflow-hidden
      shadow-2xl
      bg-[#31572c]
    "
  >


    {/* Campus Image */}

    <div className="h-60 bg-white">

      <img
        src={HERO_IMAGE}
        alt="IPS Campus"
        className="
          w-full
          h-full
          object-cover
          object-center
        "
      />

    </div>
    {/* Green Gradient Overlay */}




    {/* Content */}

    <div
      className="
        relative
        p-8
        bg-gradient-to-t
        from-[#31572c]
        to-[#31572c]
      "
    >

      <p
        className="
          text-2xl
          leading-snug
          font-medium
        "
        style={{
          color:"white",
          fontFamily:"Fraunces, serif"
        }}
      >
        "Empowering minds,
        inspiring innovation,
        shaping futures."
      </p>


      <div
        className="
          w-16
          h-1
          bg-[#cfe8a9]
          rounded-full
          my-6
        "
      ></div>


      <div
        className="
          grid
          grid-cols-3
          gap-4
        "
      >

        <div>
          <h3 className="text-3xl font-bold text-white">
            2005
          </h3>
          <p className="text-xs text-white/70">
            Established
          </p>
        </div>


        <div>
          <h3 className="text-3xl font-bold text-white">
            80+
          </h3>
          <p className="text-xs text-white/70">
            Acres Campus
          </p>
        </div>


        <div>
          <h3 className="text-3xl font-bold text-white">
            20+
          </h3>
          <p className="text-xs text-white/70">
            Programs
          </p>
        </div>


      </div>


    </div>


  </div>


</div>

  </div>

</section>
      {/* ================================================================ */}
      {/* STORY + PULL QUOTE — clean editorial reading column (white bg)   */}
      {/* ================================================================ */}
      

      {/* ================================================================ */}
      {/* FEATURES — alternating tone for rhythm, not a flat uniform grid  */}
      {/* Untinted cards: white bg, forest text. Tinted cards: forest bg,  */}
      {/* white text — everything inside a card switches together.        */}
      {/* ================================================================ */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20" style={{ backgroundColor: "var(--white)" }}>
        <h2
          className="text-2xl sm:text-3xl text-center mb-12"
          style={{ color: "var(--forest)", fontFamily: "Fraunces, serif" }}
        >
          What We Try To Inculcate
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, index) => {
            const Icon = item.icon;
            const tinted = index % 3 === 1;
            return (
              <div
                key={index}
                className="rounded-[18px] p-6 transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: tinted ? "var(--forest)" : "var(--white)",
                  border: tinted ? "none" : "1px solid rgba(20,83,45,0.12)",
                  boxShadow: "0 8px 28px rgba(31,77,58,.08)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: tinted ? "rgba(255,255,255,0.15)" : "rgba(58,109,51,0.1)" }}
                >
                  <Icon size={26} style={{ color: tinted ? "var(--white)" : "var(--forest)" }} />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ color: tinted ? "var(--white)" : "var(--forest)", fontFamily: "Fraunces, serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-7 text-sm"
                  style={{ color: tinted ? "rgba(255,255,255,0.85)" : "#3c5448", fontFamily: "Outfit, sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================================================================ */}
      {/* CLOSING BANNER                                                    */}
      {/* ================================================================ */}

      
      {/* <section className="px-6 sm:px-10 lg:px-20 pb-16 sm:pb-24">
        <div
          className="relative rounded-3xl px-6 sm:px-12 py-14 sm:py-20 text-center overflow-hidden max-w-6xl mx-auto"
          style={{ backgroundColor: "var(--forest)" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "var(--moss)", opacity: 0.35 }} />
          <div className="relative">
            <Leaf className="w-10 h-10 mx-auto mb-5" style={{ color: "var(--white)" }} />
            <p
              className="text-xl sm:text-3xl lg:text-4xl leading-snug max-w-3xl mx-auto"
              style={{ color: "var(--white)", fontFamily: "Fraunces, serif" }}
            >
              Regardless of caste, religion, background, or upbringing —
              every student carries tremendous potential. Ours is to explore
              it, nurture it, and turn it into a lifetime of purposeful work.
            </p>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Overview;