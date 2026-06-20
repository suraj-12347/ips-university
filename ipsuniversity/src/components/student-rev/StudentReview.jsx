import React, { useEffect, useRef, useState } from "react";
import pharma from '../../images1/flower2.jpeg'
import DotedRing from "../DotedRing";
import suraj from '../../images1/suraj.jpeg'
import neeraj from '../../images1/neeraj.jpeg'

const reviews = [
  {
    id: 1,
    name: "Suraj Kushwah",
    course: "B.Tech Computer Science",
    image:suraj,
    review:
      "The campus environment feels peaceful and growth-oriented. Faculty support and practical exposure genuinely helped me improve my confidence.",
  },
  {
    id: 2,
    name: "Neeraj",
    course: "B-tech",
    image:neeraj,
    review:
      "What I liked most was the balance between academics and extracurricular activities. The university atmosphere feels modern yet calm.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    course: "BCA",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The learning experience here feels practical instead of only theoretical. Mentorship and peer culture helped me grow personally as well.",
  },
];

const StudentReviews2 = () => {
  const [showCards, setShowCards] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowCards(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full  py-5 md:py-6 px-4 md:px-8 overflow-hidden relative mt-10 "
         style={{
              backgroundImage: `url(${pharma})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
    >

       {/* <div className="absolute inset-0 bg-[var(--moss)] -z-1"></div> */}

       <div
        className="absolute -bottom-2 left-0 w-full h-[70%] z-0"
        style={{
          background:
            "linear-gradient(to top, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute -top-2 left-0 w-full h-[70%] z-0"
        style={{
          background:
            "linear-gradient(to bottom, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px] z-0"></div>

         {/* <div className="absolute -right-20 lg:right-60 -top-80 opacity-40 lg:opacity-100">
          <DotedRing height={600} width={600} />
        </div>
        <div className="absolute -right-20 lg:-left-100 top-50 opacity-40 lg:opacity-100">
          <DotedRing height={600} width={600} />
        </div> */}
         
      {/* heading */}
      <div className="relative z-20 text-center max-w-xl mx-auto">
  <p className="text-[var(--forest)]/80 tracking-[5px] uppercase text-xs md:text-sm font-medium">
    Student Voice
  </p>

  <h2 className="mt-2 md:mt-4 text-xl md:text-4xl font-semibold text-[var(--forest)] leading-snug md:leading-tight">
    Experiences That Define Our Campus
  </h2>
</div>

      {/* cards */}
      <div className="mt-8 md:mt-15 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">

        {reviews.map((item, index) => (
          <div
            key={item.id}
            className={`
              bg-[var(--white)]
              rounded-[28px]
              hover:-translate-y-2
              p-6 md:p-8
              border border-[rgba(0,0,0,0.05)]
              z-40

              transition-all duration-[300ms]

              ${
                showCards
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-[90vh]"
              }
            `}
            style={{
              transitionDelay: `${index * 250}ms`,
              transitionTimingFunction:
                "cubic-bezier(0.17, 0.89, 0.32, 1.15)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.04)",

              /* 🔥 PROPER LIFT EFFECT (desktop only) */
            //   transform:
            //     index === 1
            //       ? "translateY(-25px)"
            //       : index === 2
            //       ? "translateY(-55px)"
            //       : "translateY(0px)",
            }}
          >
            {/* top */}
            <div className="flex items-center gap-3 md:gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 md:w-20 h-12 md:h-20 rounded-full object-cover object-center"
              />

              <div>
                <h3 className="text-[16px] md:text-[18px] font-semibold text-[var(--forest)]">
                  {item.name}
                </h3>

                <p className="text-xs md:text-sm text-gray-500">
                  {item.course}
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[rgba(0,0,0,0.06)] my-4 md:my-6"></div>

            <p className="text-[13px] md:text-[15px] leading-6 md:leading-8 text-gray-600 text-justify">
              {item.review}
            </p>

            <div className="mt-6 md:mt-8 flex items-center justify-between">
              <div className="flex gap-1 text-[var(--grass)] text-sm md:text-lg">
                ★ ★ ★ ★ ★
              </div>

              <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[var(--grass)]/10 flex items-center justify-center text-[var(--forest)] text-lg md:text-xl">
                ”
              </div>
            </div>
 
          </div>
        ))}

        
      </div>

      {/* button */}
     {/* button */}
                <div className="mt-5 md:mt-3 flex justify-end z-20  ">
  <button className="group flex items-center justify-center w-12 h-12 rounded-full bg-[var(--white)] hover:bg-white/70 transition-all duration-300 mb-5 z-40">
    
    {/* arrow */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5 text-[var(--forest)] group-hover:translate-x-1 transition-transform duration-300"
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  </button>
</div>

    </section>
  );
};

export default StudentReviews2;