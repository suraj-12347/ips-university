import React from "react";
import { facultyData } from "../../assets/CseData";

const FacultySection = () => {

  return (
    <section className="relative overflow-hidden py-5">


      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${facultyData.hero.background})`,
        }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-5">


        {/* Header */}

        <div className="mb-12 md:mb-20">


          <span
            className="
            uppercase 
            tracking-[3px] 
            text-[var(--forest)] 
            text-xs 
            font-bold
            "
          >
            {facultyData.heading.subtitle}
          </span>



          <h2
            className="
            text-[var(--forest)] 
            text-4xl 
            md:text-5xl 
            font-serif 
            mt-3 
            mb-4
            "
          >
            {facultyData.heading.title}
          </h2>



          <p
            className="
            text-gray-700 
            max-w-3xl 
            leading-8
            "
          >
            {facultyData.heading.description}
          </p>


        </div>





        {/* HOD Card */}


        <div className="mb-10 md:mb-30">


          <div
            className="
            bg-white 
            border 
            border-white/20 
            rounded-[18px] 
            p-6 
            shadow-xl
            "
          >


            <div
              className="
              flex 
              flex-col 
              lg:flex-row 
              items-center 
              gap-6
              "
            >



              <img
                src={facultyData.hod.image}
                alt={facultyData.hod.name}
                className="
                w-24 
                h-24 
                rounded-full 
                object-cover 
                border-4 
                border-[var(--forest)]
                "
              />




              <div
                className="
                flex-1 
                text-center 
                lg:text-left
                "
              >


                <h3
                  className="
                  text-[var(--forest)] 
                  text-2xl 
                  font-semibold
                  "
                >
                  {facultyData.hod.name}
                </h3>



                <p
                  className="
                  text-[var(--forest)] 
                  uppercase 
                  tracking-wider 
                  text-sm 
                  mt-1
                  "
                >
                  {facultyData.hod.designation}
                </p>



                <p className="text-gray-700 mt-2">

                  {facultyData.hod.qualification}

                  {" | "}

                  {facultyData.hod.specialization}

                </p>


              </div>





              {/* HOD Badges */}

              <div
                className="
                flex 
                gap-2 
                flex-wrap 
                justify-center
                "
              >

                {
                  facultyData.hod.badges.map((badge,index)=>(

                    <span
                      key={index}
                      className="
                      px-3 
                      py-1 
                      rounded-full 
                      bg-[var(--forest)]/10 
                      text-[var(--forest)] 
                      text-xs
                      "
                    >

                      {badge}

                    </span>

                  ))
                }


              </div>



            </div>


          </div>


        </div>







        {/* Faculty Grid */}



        <div
          className="
          grid 
          grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-5
          "
        >


          {
            facultyData.facultyMembers.map((faculty,index)=>(


              <div
                key={index}
                className="
                bg-white 
                shadow-xl 
                rounded-[18px] 
                p-5 
                text-center 
                transition-all 
                duration-300 
                hover:-translate-y-2 
                hover:border-[var(--forest)]
                "
              >



                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="
                  w-[88px] 
                  h-[88px] 
                  mx-auto 
                  rounded-full 
                  object-cover 
                  border-[3px] 
                  border-[var(--forest)]
                  "
                />



                <h4
                  className="
                  text-[var(--forest)] 
                  text-[15px] 
                  font-semibold 
                  mt-4
                  "
                >
                  {faculty.name}
                </h4>




                <div
                  className="
                  text-[var(--forest)] 
                  uppercase 
                  tracking-wider 
                  text-[11px] 
                  mt-1
                  "
                >
                  {faculty.designation}
                </div>





                <div
                  className="
                  text-gray-700 
                  text-xs 
                  mt-2 
                  leading-5
                  "
                >
                  {faculty.details}
                </div>






                <div
                  className="
                  flex 
                  flex-wrap 
                  justify-center 
                  gap-1.5 
                  mt-4
                  "
                >

                  {
                    faculty.badges.map((badge,index)=>(

                      <span
                        key={index}
                        className="
                        px-2 
                        py-1 
                        rounded-full 
                        text-[10px] 
                        bg-[var(--forest)]/10 
                        border 
                        border-[var(--forest)]/30 
                        text-[var(--forest)]
                        "
                      >

                        {badge}

                      </span>

                    ))
                  }


                </div>



              </div>


            ))
          }



        </div>



      </div>


    </section>
  );
};


export default FacultySection;