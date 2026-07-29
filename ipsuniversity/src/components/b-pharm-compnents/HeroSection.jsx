import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { heroSlides } from "./BpharmData";
import { heroContent } from "./BpharmData";
import { Swiper, SwiperSlide ,} from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination, Autoplay,EffectFade  } from "swiper/modules";
import "swiper/css/effect-fade"; 

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function HeroSection() {
  console.log(heroSlides);
  return (
    <section className="relative h-[90vh] overflow-hidden mt-25 ">


  {/* ================= BACKGROUND CAROUSEL ================= */}

  <div className="absolute inset-0 z-0">

    <Swiper
  modules={[Autoplay, EffectFade]}
  effect="fade"
  fadeEffect={{ crossFade: true }}
  loop={true}
  speed={1500}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  className="h-full w-full"
>

      {
        heroSlides.map((slide)=>(
          
          <SwiperSlide key={slide.id}>

            <img
              src={slide.image}
              alt="B Pharmacy"
              className="
              w-full
              h-[90vh]
              object-cover
              "
            />

          </SwiperSlide>

        ))
      }


    </Swiper>

  </div>



  {/* ================= IMAGE OVERLAY ================= */}

  <div
  className="
  absolute
  inset-0
  z-10
  bg-gradient-to-r
  from-[rgba(12,45,30,.90)]
  via-[rgba(12,45,30,.70)]
  to-[rgba(12,45,30,.20)]
  "
  />



  {/* ================= CONTENT OVER IMAGE ================= */}

  <div
  className="
  relative
  z-20
  h-full
  max-w-7xl
  mx-auto
  px-6
  lg:px-12
  flex
  items-center
  "
  >


    <motion.div

    initial={{
      opacity:0,
      x:-40
    }}

    animate={{
      opacity:1,
      x:0
    }}

    transition={{
      duration:.8
    }}

    className="max-w-3xl"

    >


      <span
      className="
      inline-flex
      px-5
      py-2
      rounded-full
      bg-white/10
      backdrop-blur-md
      border
      border-white/20
      text-white
      text-sm
      "
      >

        School of Pharmacy

      </span>



      <h1
      className="
      mt-6
      text-5xl
      md:text-6xl
      lg:text-7xl
      font-black
      text-white
      leading-tight
      "
      >

        Bachelor of Pharmacy

      </h1>



      <p
      className="
      mt-6
      text-lg
      text-white/80
      max-w-2xl
      leading-8
      "
      >

        Build your career in pharmaceutical sciences with
        advanced laboratories, innovative research and
        industry-focused education at IPS University.

      </p>



      <div
      className="
      flex
      gap-5
      mt-10
      flex-wrap
      "
      >


        <button
        className="
        px-8
        py-4
        rounded-full
        bg-[var(--grass)]
        text-white
        font-semibold
        hover:bg-white
        hover:text-[var(--forest)]
        transition
        "
        >

          Apply Now

        </button>



        <button
        className="
        px-8
        py-4
        rounded-full
        bg-white/10
        border
        border-white/30
        text-white
        backdrop-blur-md
        hover:bg-white
        hover:text-[var(--forest)]
        transition
        "
        >

          Download Brochure

        </button>
        


      </div>
      {/* <div className="flex items-center gap-2 text-sm text-white/70 mb-6 mt-5">

  <Link
    to="/"
    className="hover:text-white transition"
  >
    Home
  </Link>

    <ArrowRight size={(18)}/>


  <Link
    to="/school-of-pharmacy"
    className="hover:text-white transition"
  >
    Pharmacy
  </Link>

  <ArrowRight size={(18)}/>


  <span className="text-white font-medium">
    B.Pharm
  </span>

</div> */}


    </motion.div>

    {/* Breadcrumb */}




  </div>
  



</section>

  );
}