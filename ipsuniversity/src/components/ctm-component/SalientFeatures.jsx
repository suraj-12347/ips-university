import React from "react";
import {
  BookOpen,
  Users,
  Cpu,
  FlaskConical,
  BriefcaseBusiness,
  GraduationCap,
  Trophy,
} from "lucide-react";


import {salientFeaturesData} from '../../assets/CseData'

const SalientFeaturesSection = () => {


  return (
  <section
  className="relative py-5 px-4 md:px-8 overflow-hidden"
  style={{
    backgroundImage: `url(${salientFeaturesData.hero.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />


  <div className="relative z-10 max-w-7xl mx-auto">


    {/* Heading */}

    <div className="text-center mb-14">

      <p
        className="uppercase tracking-[3px] text-sm font-semibold"
        style={{
          color:"var(--forest)",
          fontFamily:"Outfit, sans-serif",
        }}
      >
        {salientFeaturesData.heading.subtitle}
      </p>



      <h2
        className="mt-3 text-4xl md:text-6xl"
        style={{
          color:"var(--forest)",
          fontFamily:"Fraunces, serif",
        }}
      >
        {salientFeaturesData.heading.title}
      </h2>



      <p
        className="max-w-3xl mx-auto mt-5 leading-8"
        style={{
          color:"#3c5448",
          fontFamily:"Outfit, sans-serif",
        }}
      >
        {salientFeaturesData.heading.description}
      </p>


    </div>





    {/* Stats */}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">

      {
        salientFeaturesData.stats.map((item,index)=>(

          <div
            key={index}
            className="
            rounded-[18px]
            p-6
            text-center
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            "
            style={{
              background:"rgba(255,255,255,0.65)",
              border:"1px solid rgba(255,255,255,0.9)",
              boxShadow:"0 8px 28px rgba(31,77,58,.08)",
            }}
          >


            <h3
              className="text-3xl md:text-4xl"
              style={{
                color:"var(--forest)",
                fontFamily:"Fraunces, serif",
              }}
            >
              {item.value}
            </h3>



            <p
              className="mt-2 text-sm"
              style={{
                color:"#3c5448",
                fontFamily:"Outfit, sans-serif",
              }}
            >
              {item.label}
            </p>


          </div>

        ))
      }


    </div>







    {/* Feature Cards */}


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


      {
        salientFeaturesData.features.map((item,index)=>{

          const Icon = item.icon;


          return(

            <div
              key={index}
              className="
              rounded-[18px]
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              "
              style={{
                background:"rgba(255,255,255,0.65)",
                border:"1px solid rgba(255,255,255,0.9)",
                boxShadow:"0 8px 28px rgba(31,77,58,.08)",
              }}
            >



              <div
                className="
                w-14
                h-14
                rounded-xl
                flex
                items-center
                justify-center
                mb-5
                "
                style={{
                  background:"rgba(22,51,42,0.10)",
                }}
              >


                <Icon
                  size={26}
                  style={{
                    color:"var(--forest)",
                  }}
                />


              </div>





              <h3
                className="text-xl mb-3"
                style={{
                  color:"var(--forest)",
                  fontFamily:"Fraunces, serif",
                }}
              >

                {item.title}

              </h3>





              <p
                className="leading-7 text-sm"
                style={{
                  color:"#3c5448",
                  fontFamily:"Outfit, sans-serif",
                }}
              >

                {item.desc}

              </p>




            </div>

          )


        })
      }


    </div>








    {/* Bottom Highlight */}


    <div
      className="
      mt-16
      rounded-[22px]
      p-8
      md:p-10
      text-center
      bg-white
      border
      border-gray-200
      shadow-lg
      "
    >


      <Trophy
        size={40}
        className="mx-auto mb-4"
        color="var(--forest)"
      />



      <h3
        className="text-2xl md:text-3xl"
        style={{
          color:"var(--forest)",
          fontFamily:"Fraunces, serif",
        }}
      >

        {salientFeaturesData.highlight.title}

      </h3>




      <p
        className="
        max-w-3xl
        mx-auto
        mt-4
        leading-8
        text-gray-700
        "
        style={{
          fontFamily:"Outfit, sans-serif",
        }}
      >

        {salientFeaturesData.highlight.description}

      </p>



    </div>



  </div>


</section>
  );
};

export default SalientFeaturesSection;