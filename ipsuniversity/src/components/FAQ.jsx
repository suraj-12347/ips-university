import React, { useState } from "react";
import { Plus } from "lucide-react";
import ctmStudents from '../images1/ctmstudents.jpeg'

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
      "Yes. The University has a dedicated Training & Placement Cell that conducts campus recruitment drives, internships, industrial training, career guidance and skill development programmes.",
  },
  {
    question: "Are hostel facilities available for students?",
    answer:
      "Yes. Separate hostel facilities are available for boys and girls with modern amenities, security, Wi-Fi access, dining facilities and a comfortable living environment.",
  },
  {
    question: "What facilities are available on campus?",
    answer:
      "The campus includes smart classrooms, modern laboratories, a central library, sports facilities, transportation, cafeteria, Wi-Fi, innovation centres and a vibrant student activity ecosystem.",
  },
  {
    question: "Does the university support research and innovation?",
    answer:
      "Absolutely. IPS University encourages research through funded projects, publications, patents, innovation centres, startup incubation, industry collaborations and multidisciplinary research initiatives.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#f8fbf6] mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <span
              className="
                uppercase
                tracking-[4px]
                text-sm
                font-semibold
                text-[#578B07]
              "
            >
              Frequently Asked Questions
            </span>

            <h2
              className="
                text-4xl
                lg:text-5xl
                text-[#31572c]
                mt-5
                leading-tight
              "
              style={{
                fontFamily: "Fraunces, serif",
              }}
            >
              Everything You Need
              <br />
              To Know About
              <br />
              IPS University
            </h2>

            <p
              className="
                mt-6
                text-gray-600
                leading-8
                text-lg
              "
            >
              Explore answers to the most frequently asked questions
              about admissions, academics, placements, campus life,
              scholarships and student support services at IPS
              University.
            </p>

            <div
              className="
                mt-10
                rounded-[32px]
                overflow-hidden
                h-[400px]
                shadow-xl
              "
            >
             <img
  src={ctmStudents}
  alt="IPS University Campus"
  className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-500
    hover:scale-105
  "
/>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="space-y-5">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-[#e7efe3]
                  rounded-[24px]
                  overflow-hidden
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-6
                    text-left
                  "
                >
                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-[#31572c]
                      pr-5
                    "
                  >
                    {item.question}
                  </h3>

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-[var(--forest)]/20
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    "
                  >
                    <Plus
                      size={20}
                      className={`
                        text-[#31572c]
                        transition-all
                        duration-300
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
                    ${
                      active === index
                        ? "max-h-60"
                        : "max-h-0"
                    }
                  `}
                >
                  <div className="px-6 pb-6">
                    <div className="w-16 h-[2px] bg-[var(--forest)]/20 rounded-full mb-5"></div>

                    <p
                      className="
                        text-gray-600
                        leading-8
                      "
                    >
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