// EnquiryPopup2.jsx

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import pharma from "../images1/pharmaflowertree3.png";

import { useLanguage } from "../context/LanguageContext";

const EnquiryPopup2 = () => {
  const [open, setOpen] = useState(false);

  const { t } = useLanguage();

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => {
      clearTimeout(firstTimer);
    };
  }, []);

  return (
    <>
      {open && (
        <div
          className="
            fixed
            inset-0
            bg-black/45
            z-[999]
            flex
            items-center
            justify-center
            backdrop-blur-md
            px-4
            top-30
          "
        >
          {/* POPUP */}
          <div
            className="
              relative
              w-full
              max-w-[1000px]
              h-[400px]
              overflow-y-auto
              md:overflow-y-hidden
              shadow-2xl
              animate-[popup_.4s_ease]
              flex
              flex-col
              lg:flex-row
            "
            style={{
              backgroundImage: `url(${pharma})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-[var(--moss)]"></div> */}
             {/* <div
        className="absolute -bottom-2 left-0 w-full h-[70%] z-[1]"
        style={{
          background:
            "linear-gradient(to top, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute -top-2 left-0 w-full h-[70%] z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      /> */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px] lg:h-full h-150 "></div>

            {/* CLOSE BTN */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute
                top-4
                right-4
                z-50
                w-10
                h-10
                rounded-full
                bg-[var(--forest)]/30
                hover:bg-[var(--forest)]/40
                flex
                items-center
                justify-center
                text-[var(--forest)]
                transition-all
                cursor-pointer
              "
            >
              <X size={20} />
            </button>

            {/* LEFT CONTENT */}
            <div
              className="
                hidden
                lg:flex
                w-[42%]
                flex-col
                justify-center
                px-10
                relative
                z-20
              "
            >
              <p className="text-[var(--forest)]/70 uppercase tracking-[4px] text-xs mb-3">
                IPS University
              </p>

              <h2 className="text-4xl font-extrabold text-[var(--forest)] leading-tight">
                {t.admission}
                <br />
                {t.enquiry}
              </h2>

              <p className="text-gray-700 mt-5 leading-7 text-sm">
                {t.enquiryDesc}
              </p>

              <div className="mt-6 flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[var(--forest)]"></span>
                  <p>{t.placementAssist}</p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[var(--forest)]"></span>
                  <p>{t.aicte}</p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[var(--forest)]"></span>
                  <p>{t.campus}</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div
              className="
                w-full
                lg:w-[58%]
                flex
                items-center
                justify-center
                p-4
                md:p-6
                relative
                z-20
              "
            >
              <div
                className="
                  w-full
                  bg-transparent
                  py-10
                  rounded-[24px]
                  p-5
                "
              >
                <h3 className="text-2xl font-bold text-[var(--forest)]">
                  {t.getStarted}
                </h3>

                <p className="text-gray-700 text-sm mb-2">
                  {t.formDesc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                  <input
                    type="text"
                    placeholder={t.fullName}
                    className="
                      w-full
                      h-[48px]
                      rounded-xl
                      
                      shadow-xl
                      px-4
                      outline-none
                      bg-white
                      text-[var(--forest)]
                    "
                  />

                  <input
                    type="tel"
                    placeholder={t.mobile}
                    className="
                      w-full
                      h-[48px]
                      rounded-xl
                     shadow-xl
                      bg-white
                      text-[var(--forest)]
                      px-4
                      outline-none
                    "
                  />

                  <input
                    type="email"
                    placeholder={t.email}
                    className="
                      w-full
                      h-[48px]
                      rounded-xl
                      shadow-xl
                      px-4
                      outline-none
                      bg-white
                      text-[var(--forest)]
                    "
                  />

                  <select
                    className="
                      w-full
                      h-[48px]
                      rounded-xl
                      shadow-xl
                      px-4
                      outline-none
                      bg-white
                      text-[var(--forest)]
                    "
                  >
                    <option>{t.selectCourse}</option>

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
                      w-full
                      rounded-xl
                     shadow-xl
                      p-4
                      outline-none
                      resize-none
                      bg-white
                      text-[var(--forest)]
                    "
                  ></textarea>

                  <button
                    className="
                      md:col-span-2
                      w-full
                      h-[50px]
                      rounded-xl
                      text-[var(--forest)]
                      font-semibold
                      bg-[var(--white)]
                      hover:scale-[1.02]
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
              transform:scale(.9) translateY(20px);
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