// EnquiryPopup2.jsx

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import pharma from "../images1/flower.jpeg";

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
            z-[999]
            flex
            items-center
            justify-center
            backdrop-blur-sm
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
            <div className="absolute inset-0 bg-[var(--moss)]"></div>

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
                bg-white/10
                hover:bg-white/20
                flex
                items-center
                justify-center
                text-white
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
              <p className="text-white/70 uppercase tracking-[4px] text-xs mb-3">
                IPS University
              </p>

              <h2 className="text-4xl font-extrabold text-white leading-tight">
                {t.admission}
                <br />
                {t.enquiry}
              </h2>

              <p className="text-white/80 mt-5 leading-7 text-sm">
                {t.enquiryDesc}
              </p>

              <div className="mt-6 flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <p>{t.placementAssist}</p>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <p>{t.aicte}</p>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
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
                <h3 className="text-2xl font-bold text-[var(--white)]">
                  {t.getStarted}
                </h3>

                <p className="text-white/90 text-sm mb-2">
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
                      border
                      border-gray-200
                      px-4
                      outline-none
                      bg-white/80
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
                      border
                      border-gray-200
                      bg-white/80
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
                      border
                      border-gray-200
                      px-4
                      outline-none
                      bg-white/80
                      text-[var(--forest)]
                    "
                  />

                  <select
                    className="
                      w-full
                      h-[48px]
                      rounded-xl
                      border
                      border-gray-200
                      px-4
                      outline-none
                      bg-white/80
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
                      border
                      border-gray-200
                      p-4
                      outline-none
                      resize-none
                      bg-white/80
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