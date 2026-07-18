import React from "react";

import { Flower2 } from "lucide-react";

import {activitiesData} from '../../assets/CseData'

const ActivitiesSection = () => {


  return (
    <section
  className="relative py-5 px-4 md:px-8 overflow-hidden"
  style={{
    backgroundImage: `url(${activitiesData.hero.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-[3px]"></div>


  <div className="relative z-10 max-w-7xl mx-auto">


    {/* Header */}

    <div className="mb-14">

      <p
        className="uppercase tracking-[3px] text-sm font-semibold text-[var(--forest)]"
        style={{
          fontFamily:"Outfit, sans-serif",
        }}
      >
        {activitiesData.heading.subtitle}
      </p>


      <h2
        className="mt-3 text-4xl md:text-6xl text-[var(--forest)]"
        style={{
          fontFamily:"Fraunces, serif",
        }}
      >
        {activitiesData.heading.title}
      </h2>


      <p
        className="mt-5 max-w-3xl leading-8 text-gray-700"
        style={{
          fontFamily:"Outfit, sans-serif",
        }}
      >
        {activitiesData.heading.description}
      </p>


    </div>





    {/* Webinars */}


    <div className="flex items-center gap-3 mb-8">

      <Flower2 size={18} className="text-[var(--forest)]"/>

      <span className="uppercase tracking-[2px] text-sm text-[var(--forest)]">
        {activitiesData.sections.webinarsTitle}
      </span>

      <div className="flex-1 h-px bg-white/20"/>

    </div>





    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

      {
        activitiesData.webinars.map((item,index)=>{

          const Icon = item.icon;

          return(

            <div
              key={index}
              className="
              rounded-[18px]
              bg-white
              p-6
              hover:-translate-y-2
              transition-all
              duration-300
              shadow-xl
              "
            >


              <div
                className="
                text-xs
                uppercase
                tracking-[1.5px]
                font-semibold
                mb-3
                text-[var(--forest)]
                "
              >

                <Icon size={14} className="inline mr-2"/>

                {item.tag}

              </div>



              <h3
                className="
                text-xl
                text-gray-700
                mb-3
                "
                style={{
                  fontFamily:"Fraunces, serif"
                }}
              >

                {item.title}

              </h3>



              <p
                className="
                leading-7
                text-sm
                text-gray-500
                "
              >

                {item.desc}

              </p>



            </div>

          )

        })
      }

    </div>






    {/* Seminars */}


    <div className="flex items-center gap-3 mb-8">

      <Flower2 size={18} className="text-[var(--forest)]"/>


      <span className="uppercase tracking-[2px] text-sm text-[var(--forest)]">

        {activitiesData.sections.seminarsTitle}

      </span>


      <div className="flex-1 h-px bg-white/20"/>


    </div>





    <div className="
      backdrop-blur-xl 
      rounded-[18px]
      bg-white 
      shadow-xl 
      p-8 
      mb-16
    ">


      <div className="grid md:grid-cols-2 gap-8">


        {
          Array.from({
            length:Math.ceil(
              activitiesData.seminars.length/2
            )
          }).map((_,col)=>{


            const column =
            activitiesData.seminars.slice(
              col * Math.ceil(activitiesData.seminars.length/2),
              (col+1) * Math.ceil(activitiesData.seminars.length/2)
            );


            return(

              <div key={col}>


                {
                  column.map((item,index)=>(

                    <div
                      key={index}
                      className="
                      flex 
                      gap-4 
                      pb-5 
                      mb-5
                      border-b
                      border-gray-100
                      "
                    >

                      <div className="
                        w-3 
                        h-3 
                        rounded-full 
                        bg-[var(--forest)] 
                        mt-2 
                        flex-shrink-0
                      "/>



                      <div>


                        <div className="
                          text-sm 
                          font-semibold 
                          mb-2 
                          text-[var(--forest)]
                        ">

                          {item.date}

                        </div>



                        <p className="
                          leading-7 
                          text-sm 
                          text-gray-700
                        ">

                          {item.text}

                        </p>


                      </div>


                    </div>

                  ))
                }


              </div>

            )

          })
        }


      </div>


    </div>







    {/* Industrial Visits */}


    <div className="flex items-center gap-3 mb-8">


      <Flower2 size={18} className="text-[var(--forest)]"/>


      <span className="
        uppercase 
        tracking-[2px] 
        text-sm 
        text-[var(--forest)]
      ">

        {activitiesData.sections.visitsTitle}

      </span>


      <div className="flex-1 h-px bg-white/20"/>


    </div>






    <div className="grid md:grid-cols-3 gap-6">


      {
        activitiesData.visits.map((item,index)=>{


          const Icon=item.icon;


          return(

            <div
              key={index}
              className="
              rounded-[18px]
              bg-white
              shadow-xl
              p-6
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >


              <div className="
                text-xs 
                uppercase 
                tracking-[1.5px] 
                font-semibold 
                mb-3 
                text-[var(--forest)]
              ">

                <Icon size={14} className="inline mr-2"/>

                {item.tag}

              </div>



              <h3
                className="
                text-xl
                text-gray-700
                mb-3
                "
                style={{
                  fontFamily:"Fraunces, serif"
                }}
              >

                {item.title}

              </h3>



              <p className="
                leading-7 
                text-sm 
                text-gray-600
              ">

                {item.desc}

              </p>



            </div>

          )


        })
      }


    </div>


  </div>


</section>
  );
};

export default ActivitiesSection;