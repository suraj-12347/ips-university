import React from "react";
import { Eye, Rocket, Target } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { aboutDepartmentData } from "../../assets/CseData";


const AboutDepartment = () => {

  const icons = {
    Eye,
    Rocket,
    Target,
  };


  return (
    <section
      id="department"
      className="relative pb-20 lg:py-2 overflow-hidden"
      style={{
        backgroundImage: `url(${aboutDepartmentData.hero.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[4px]"></div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-2 lg:px-4">


        {/* About Section */}

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-start mb-12 md:mb-20">


          {/* Slider */}

          <div className="w-full overflow-hidden rounded-3xl shadow-xl">

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay:3500,
                disableOnInteraction:false,
              }}
              pagination={{
                clickable:true,
              }}
              loop={true}
              className="w-full h-[250px] sm:h-[350px] md:h-[480px]"
            >

              {
                aboutDepartmentData.slider.map((slide,index)=>(

                  <SwiperSlide key={index}>

                    <div className="relative w-full h-full">


                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />


                      <div className="
                        absolute 
                        inset-0 
                        bg-gradient-to-t 
                        from-black/80 
                        via-black/20 
                        to-transparent 
                        flex 
                        items-end
                      ">


                        <div className="p-6">

                          <h3 className="
                            text-white 
                            text-xl 
                            md:text-4xl 
                            font-bold
                          ">
                            {slide.title}
                          </h3>

                        </div>


                      </div>


                    </div>


                  </SwiperSlide>

                ))
              }


            </Swiper>

          </div>



          {/* Department Content */}


          <div>


            <h2
              className="
                text-3xl 
                sm:text-3xl 
                md:text-5xl 
                font-bold 
                text-[var(--forest)] 
                leading-tight 
                w-full 
                mb-5
              "

              style={{
                fontFamily:"'Fraunces', serif",
                fontWeight:600,
              }}
            >


              <p
                className="
                text-2xl 
                sm:text-2xl 
                md:text-3xl 
                font-bold 
                text-[var(--forest)]
                "
              >

                {aboutDepartmentData.department.subtitle}

              </p>


              {aboutDepartmentData.department.name}


            </h2>




            <h3
              className="
                text-xl 
                md:text-2xl 
                font-bold 
                text-[var(--forest)] 
                mb-4 
                md:mb-6
              "
            >

              {aboutDepartmentData.department.aboutTitle}

            </h3>



            {
              aboutDepartmentData.department.paragraphs.map(
                (para,index)=>(

                  <p
                    key={index}
                    className="
                    text-gray-600 
                    leading-7 
                    md:leading-8 
                    mb-4
                    "
                  >

                    {para}

                  </p>

                )
              )
            }



          </div>


        </div>





        {/* Stats Section */}


        <div
          className="
          grid 
          grid-cols-2 
          md:grid-cols-4 
          gap-4 
          md:gap-6 
          mb-12 
          md:mb-20
          "
        >


          {
            aboutDepartmentData.stats.map((stat,index)=>(


              <div
                key={index}
                className="
                bg-green-50 
                rounded-2xl 
                md:rounded-3xl 
                p-4 
                md:p-8 
                text-center 
                shadow-sm
                "
              >


                <h3
                  className="
                  text-2xl 
                  md:text-4xl 
                  font-bold 
                  text-[var(--forest)]
                  "
                >

                  {stat.value}

                </h3>


                <p
                  className="
                  text-gray-600 
                  mt-2 
                  text-sm 
                  md:text-base
                  "
                >

                  {stat.label}

                </p>


              </div>


            ))
          }



        </div>
        {/* Vision Mission Objectives */}


        <div
          className="
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-4 
          md:gap-8
          "
        >


          {
            aboutDepartmentData.highlights.map((item,index)=>{


              const Icon = icons[item.icon];


              return (

                <div
                  key={index}
                  className="
                  bg-white 
                  shadow-lg 
                  hover:shadow-xl 
                  transition 
                  rounded-2xl 
                  md:rounded-3xl 
                  p-5 
                  md:p-8 
                  border 
                  border-gray-100
                  "
                >


                  <Icon
                    size={40}
                    className="
                    text-[var(--forest)] 
                    mb-4
                    "
                  />



                  <h3
                    className="
                    text-xl 
                    font-bold 
                    text-[var(--forest)] 
                    mb-4
                    "
                  >

                    {item.title}

                  </h3>



                  <p
                    className="
                    text-gray-600 
                    leading-7
                    "
                  >

                    {item.description}

                  </p>


                </div>


              );


            })
          }



        </div>






        {/* Gallery Section */}



        <div className="mt-16 md:mt-24">



          <div className="text-center mb-10">


            <span
              className="
              text-sm 
              uppercase 
              tracking-[4px] 
              text-[var(--forest)] 
              font-semibold
              "
            >

              {aboutDepartmentData.gallery.subtitle}

            </span>



            <h3
              className="
              text-3xl 
              md:text-5xl 
              font-bold 
              text-[var(--forest)] 
              mt-3
              "
            >

              {aboutDepartmentData.gallery.title}

            </h3>



          </div>





          <div
            className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-6
            "
          >



            {
              aboutDepartmentData.gallery.images.map(
                (item,index)=>(


                  <div
                    key={index}
                    className="
                    group 
                    overflow-hidden 
                    rounded-3xl 
                    shadow-lg
                    "
                  >



                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                      w-full 
                      h-64 
                      object-cover 
                      group-hover:scale-110 
                      transition 
                      duration-500
                      "
                    />



                    <div className="bg-white p-4">


                      <h4
                        className="
                        font-semibold 
                        text-[var(--forest)]
                        "
                      >

                        {item.title}

                      </h4>


                    </div>



                  </div>


                )
              )
            }



          </div>



        </div>




      </div>


    </section>
  );

};


export default AboutDepartment;
