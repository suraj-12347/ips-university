import { motion } from "framer-motion";
import { aboutData } from "./BpharmData";
import { GraduationCap } from "lucide-react";

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
              
            <div className="flex gap-2">
              <GraduationCap size={42} className="text-[var(--forest)]"/>
               <div>
               <p className="text-sm text-gray-500">
                Pharmacy Education
              </p>


              <h3 className="
              text-3xl
              font-black
              text-[var(--forest)]
              
              ">
                Excellence
              </h3>
             </div>
            </div>


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
                leading-8 text-justify
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
    border
    border-[var(--forest)]/10
    shadow-sm
    hover:shadow-lg
    hover:-translate-y-1
    transition-all
    duration-300
    p-6
    flex
    items-center
    gap-4
  "
>
  {/* Icon */}
  <div
    className="
      w-14
      h-14
      rounded-xl
      bg-[var(--forest)]/10
      flex
      items-center
      justify-center
      shrink-0
    "
  >
    <item.icon
      size={28}
      className="text-[var(--forest)]"
    />
  </div>

  {/* Text */}
  <div>
    <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
      {item.title}
    </p>

    <h4
      className="
        mt-1
        text-2xl
        font-black
        text-[var(--forest)]
        leading-tight
      "
    >
      {item.value}
    </h4>
  </div>
</div>

                ))
              }


            </div>



          </motion.div>


        </div>





        {/* ================= HOD MESSAGE ================= */}



        {/* <motion.div

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



        </motion.div> */}



      </div>


    </section>

  );

}