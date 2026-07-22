// EnquiryPopup2.jsx

import React, { useEffect, useState } from "react";
import { X, CheckCircle2, GraduationCap } from "lucide-react";
import pharma from "../images1/pharmaflowertree3.png";

import { useLanguage } from "../context/LanguageContext";

const EnquiryPopup2 = () => {
  const [open, setOpen] = useState(false);

  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {open && (

        <div
          className="
          fixed
          inset-0
          z-[99999]
          flex
          items-center
          justify-center
          bg-black/50
          backdrop-blur-md
          px-4
          "
        >

          {/* MAIN POPUP */}

          <div
            className="
            relative
            w-full
            max-w-[1050px]
            min-h-[430px]
            rounded-[32px]
            overflow-hidden
            shadow-2xl
            animate-[popup_.4s_ease]
            flex
            flex-col
            lg:flex-row
            "
            style={{
              backgroundImage:`url(${pharma})`,
              backgroundSize:"cover",
              backgroundPosition:"center"
            }}
          >


            {/* WHITE GLASS OVERLAY */}

            <div
              className="
              absolute
              inset-0
              bg-white/75
              backdrop-blur-lg
              "
            />


            {/* Decorative circles */}

            <div
              className="
              absolute
              -top-20
              -left-20
              w-60
              h-60
              rounded-full
              bg-[var(--leaf)]/40
              blur-3xl
              "
            />

            <div
              className="
              absolute
              -bottom-20
              -right-20
              w-72
              h-72
              rounded-full
              bg-[var(--grass)]/30
              blur-3xl
              "
            />



            {/* CLOSE */}

            <button
              onClick={()=>setOpen(false)}
              className="
              absolute
              right-5
              top-5
              z-50
              w-11
              h-11
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              text-[var(--forest)]
              hover:rotate-90
              transition-all
              cursor-pointer
              "
            >
              <X size={22}/>
            </button>





            {/* LEFT SECTION */}


            <div
              className="
              relative
              z-20
              lg:w-[42%]
              w-full
              flex
              flex-col
              justify-center
              px-8
              lg:px-12
              py-10 hidden md:block
              "
            >

              <div
                className="
                flex
                items-center
                gap-3
                mb-5
                "
              >

                <div
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-[var(--forest)]
                  text-white
                  flex
                  items-center
                  justify-center
                  "
                >
                  <GraduationCap size={26}/>
                </div>


                <div>

                  <p
                    className="
                    text-xs
                    tracking-[3px]
                    font-bold
                    text-[var(--forest)]
                    "
                  >
                    IPS UNIVERSITY
                  </p>

                  <p className="text-sm text-gray-600">
                    Gwalior, Madhya Pradesh
                  </p>

                </div>

              </div>



              <h2
                className="
                text-4xl
                font-extrabold
                text-[var(--forest)]
                leading-tight
                "
              >
                Start Your
                <br/>
                Admission Journey
              </h2>



              <p
                className="
                mt-5
                text-gray-700
                leading-7
                text-sm
                max-w-md
                "
              >
                {t.enquiryDesc}
              </p>




              <div className="mt-7 space-y-3">


                {
                  [
                    "100% Placement Assistance",
                    t.aicte,
                    "80 Acre Green Campus"
                  ].map((item,index)=>(

                    <div
                      key={index}
                      className="
                      flex
                      items-center
                      gap-3
                      text-gray-700
                      text-sm
                      "
                    >

                      <CheckCircle2
                        size={18}
                        className="text-[var(--grass)]"
                      />

                      <span>
                        {item}
                      </span>

                    </div>

                  ))
                }


              </div>



            </div>







            {/* FORM SECTION */}



            <div
              className="
              relative
              z-20
              lg:w-[58%]
              w-full
              flex
              items-center
              justify-center
              p-6
              "
            >


              <div
                className="
                w-full
                max-w-xl
                bg-white/50
                backdrop-blur-xl
                rounded-[28px]
                p-6
                md:p-8
                shadow-xl
                border
                border-white/60
                "
              >



                <h3
                  className="
                  text-2xl
                  font-bold
                  text-[var(--forest)]
                  "
                >
                  {t.getStarted}
                </h3>


                <p
                  className="
                  text-gray-600
                  text-sm
                  mt-1
                  mb-6
                  "
                >
                  {t.formDesc}
                </p>



                <div
                  className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-4
                  "
                >


                  {
                    [
                      t.fullName,
                      t.mobile,
                      t.email
                    ].map((item,index)=>(

                      <input
                        key={index}
                        placeholder={item}
                        className="
                        h-[48px]
                        rounded-xl
                        bg-white
                        px-4
                        text-sm
                        outline-none
                        shadow-md
                        focus:ring-2
                        focus:ring-[var(--grass)]
                        transition
                        "
                      />

                    ))
                  }



                  <select
                    className="
                    h-[48px]
                    rounded-xl
                    bg-white
                    px-4
                    outline-none
                    shadow-md
                    text-gray-700
                    "
                  >

                    <option>
                      {t.selectCourse}
                    </option>

                    <option>B.Tech</option>
                    <option>BCA</option>
                    <option>BBA</option>
                    <option>MBA</option>
                    <option>B.Pharm</option>
                    <option>MCA</option>

                  </select>




                  <textarea
                    rows="3"
                    placeholder={t.message}
                    className="
                    md:col-span-2
                    rounded-xl
                    bg-white
                    p-4
                    shadow-md
                    outline-none
                    resize-none
                    focus:ring-2
                    focus:ring-[var(--grass)]
                    "
                  />




                  <button
                    className="
                    md:col-span-2
                    h-[52px]
                    rounded-xl
                    bg-[var(--forest)]
                    text-white
                    font-semibold
                    shadow-lg
                    hover:-translate-y-1
                    transition-all
                    cursor-pointer
                    "
                  >
                    {t.submit}
                  </button>


                </div>


              </div>


            </div>



          </div>


        </div>

      )}




      <style>
      {`

      @keyframes popup{

        from{
          opacity:0;
          transform:scale(.92) translateY(30px);
        }

        to{
          opacity:1;
          transform:scale(1) translateY(0);
        }

      }

      `}
      </style>


    </>
  );
};


export default EnquiryPopup2;