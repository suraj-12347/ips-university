import React, { useState } from "react";
import { Plus } from "lucide-react";
// import ctmStudents from '../images1/.jpeg'
import pharma from '../images1/friends.jpeg'



const faqs = [
  {
    question: "What programs are offered at IPS University?",
    answer:
      "IPS University offers Undergraduate, Postgraduate and Doctoral programmes across Engineering, Management, Pharmacy, Agriculture, Commerce, Computer Applications, Law, Education and several other disciplines.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Students can apply online through the university admission portal or visit the Admission Cell. Eligibility criteria, required documents and the admission process are available for each programme.",
  },
  {
    question: "Does IPS University provide placement opportunities?",
    answer:
      "Yes. The University has a dedicated Training & Placement Cell that conducts regular campus recruitment drives, internships, industrial training, career guidance and skill development programmes.",
  },
  {
    question: "Are hostel facilities available for students?",
    answer:
      "Yes. Separate hostel facilities are available for boys and girls with modern amenities, security, Wi-Fi access, dining facilities and a comfortable living environment.",
  },
  {
    question: "What facilities are available on campus?",
    answer:
      "The campus includes smart classrooms, modern laboratories,  libraries for all streams, sports facilities, transportation, cafeteria, Wi-Fi, innovation centre and a vibrant student activity ecosystem.",
  },
  {
    question: "Does the university support research and innovation?",
    answer:
      "Absolutely. IPS University encourages research through funded projects, publications, patents, innovation centre, startup incubation, industries collaboration and multidisciplinary research initiatives.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-24 overflow-hidden"
    
    
    
    
    style={{
                  backgroundImage:`url(${pharma})`,
                  backgroundSize:"cover",
                  backgroundPosition:"center"
                }}
    
    >

      {/* <div
              className="
              absolute
              inset-0
              bg-white/60
              backdrop-blur-[3px]
              "
            /> */}
 <div className="absolute inset-0 bg-green-900/80 z-0"></div>
            {/* <div
        className="absolute -top-2 left-0 w-full h-[70%] z-0"
        style={{
          background:
            "linear-gradient(to bottom, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      /> */}
  {/* Background Blur */}
  {/* <div className="absolute top-20 -left-24 w-72 h-72 bg-[var(--leaf)]/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--grass)]/10 rounded-full blur-3xl"></div> */}

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
    <div className="grid lg:grid-cols-2 gap-20 items-start">
      {/* LEFT */}
      <div className="lg:sticky lg:top-15">
        <span
          className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[var(--leaf)]
          "
        >
          Frequently Asked Questions
        </span>

        <h2
          className="
            mt-5
            text-4xl
            lg:text-[48px]
            leading-[1.08]
            tracking-[-1px]
            text-[var(--white)]
          "
          style={{
            fontFamily: "Fraunces, serif",
          }}
        >
          Everything You
          <br />
          Need To Know
          <br />
          About IPS
          <br />
          University
        </h2>

        <p className="mt-3 text-gray-200 leading-8 text-md max-w-xl">
          Find quick answers to common questions about admissions,
          academics, scholarships, placements, campus facilities,
          student life at IPS University.
        </p>

        {/* <div className="mt-12 overflow-hidden rounded-[32px] shadow-xl">
          <img
            src={ctmStudents}
            alt="IPS University"
            className="
              w-full
              h-[340px]
              object-cover
              transition
              duration-700
              hover:scale-105
            "
          />
        </div> */}
      </div>

      {/* RIGHT */}
      <div className="divide-y divide-[#dce6d5]">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="group py-5 transition-all duration-300"
          >
            <button
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className="
                w-full
                flex
                justify-between
                items-start
                gap-6
                text-left
              "
            >
              <div className="flex gap-5">
                <span
                  className="
                    text-sm
                    font-semibold
                    text-[var(--leaf)]
                    mt-1
                    min-w-[34px]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-[var(--white)]
                    leading-snug
                    transition
                    duration-300
                    
                  "
                >
                  {item.question}
                </h3>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  mt-1
                "
              >
                <Plus
                  size={22}
                  strokeWidth={2}
                  className={`
                    text-[var(--leaf)]
                    transition-all
                    duration-500
                    ${
                      active === index
                        ? "rotate-45"
                        : ""
                    }
                  `}
                />
              </div>
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-500
                ease-in-out
                ${
                  active === index
                    ? "max-h-60 opacity-100 mt-5"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="pl-[54px] pr-10">
                <p className="text-gray-200 leading-8 text-[16px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default FAQ;