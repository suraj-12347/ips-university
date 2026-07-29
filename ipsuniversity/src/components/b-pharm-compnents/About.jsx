import { motion } from "framer-motion";
import { aboutData } from "./BpharmData";

export default function AboutSection() {

  return (

    <section className="py-24 mt-5 overflow-hidden" id="overview">
      {/* bg-[#F8FCF8]  */}


      <div className="max-w-7xl mx-auto px-6 lg:px-12">


        <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* LEFT IMAGE */}


          <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

          className="relative"

          >


            <img

            src={aboutData.image}

            alt="Pharmacy"

            className="
            w-full
            h-[520px]
            object-cover
            rounded-[40px]
            shadow-2xl
            "

            />


            {/* Floating Card */}

            <div
            className="
            absolute
            -bottom-8
            -right-8
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            w-64
            "
            >

              <p className="text-sm text-gray-500">
                Pharmacy Education
              </p>


              <h3 className="
              text-3xl
              font-black
              text-[var(--forest)]
              mt-2
              ">
                Excellence
              </h3>


              <p className="text-gray-600 text-sm mt-2">
                Learning with innovation and practical exposure.
              </p>


            </div>


          </motion.div>




          {/* RIGHT CONTENT */}


          <motion.div

          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

          >


            <span
            className="
            text-[var(--grass)]
            font-semibold
            uppercase
            tracking-wider
            "
            >
              School of Pharmacy
            </span>



            <h2
            className="
            mt-4
            text-4xl
            lg:text-5xl
            font-black
            text-[var(--forest)]
            "
            >

              {aboutData.title}

            </h2>



            {
              aboutData.description.map((text,index)=>(

                <p
                key={index}
                className="
                mt-5
                text-gray-600
                leading-8
                "
                >

                  {text}

                </p>

              ))
            }



            {/* Highlights */}


            <div
            className="
            grid
            grid-cols-2
            gap-4
            mt-8
            "
            >

              {
                aboutData.highlights.map((item)=>(

                  <div
                  key={item.title}
                  className="
                  bg-white
                  rounded-2xl
                  p-5
                  shadow-md
                  border
                  border-gray-100
                  "
                  >

                    <p className="text-sm text-gray-500">
                      {item.title}
                    </p>


                    <h4
                    className="
                    mt-2
                    font-bold
                    text-xl
                    text-[var(--forest)]
                    "
                    >

                      {item.value}

                    </h4>


                  </div>

                ))
              }


            </div>



          </motion.div>


        </div>





        {/* ================= HOD MESSAGE ================= */}



        <motion.div

        initial={{
          opacity:0,
          y:50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.8
        }}

        viewport={{
          once:true
        }}

        className="
        mt-28
        bg-white
        rounded-[40px]
        shadow-xl
        p-8
        lg:p-12
        grid
        lg:grid-cols-[220px_1fr]
        gap-8
        items-center
        "

        >



          <img

          src={aboutData.hod.image}

          alt={aboutData.hod.name}

          className="
          w-52
          h-52
          rounded-3xl
          object-cover
          mx-auto
          "

          />



          <div>


            <span
            className="
            text-[var(--grass)]
            font-semibold
            "
            >

              HOD MESSAGE

            </span>



            <h3
            className="
            text-3xl
            font-bold
            text-[var(--forest)]
            mt-3
            "
            >

              {aboutData.hod.name}

            </h3>


            <p className="text-gray-500 mt-1">
              {aboutData.hod.designation}
            </p>



            <p
            className="
            mt-5
            text-gray-600
            leading-8
            italic
            "
            >

              "{aboutData.hod.message}"

            </p>


          </div>



        </motion.div>



      </div>


    </section>

  );

}