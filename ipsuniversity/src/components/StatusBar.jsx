import React, { useEffect, useState, useRef } from "react";
import edubuilding from "../images1/edubuild.jpg";

/* DATA */
const statsData = [
  { number: 25, suffix: "+", label: "Years of Excellence" },
  { number: 1500, suffix: "+", label: "Alumni" },
  { number: 80, suffix: "+", label: "Recruiters" },
  { number: 95, suffix: "%", label: "Placement Rate" },
  { number: 15, suffix: " LPA", label: "Highest Package" },
];

/* COUNTER */
const Counter = ({ end, suffix, startTrigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let current = 0;
    const duration = 3500; // slower + smoother
    const steps = 70;
    const increment = end / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [end, startTrigger]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

/* MAIN COMPONENT */
const StatsBar = () => {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full py-16 sm:py-20 px-4 overflow-hidden mt-10
        bg-cover bg-center bg-fixed
      "
      style={{
        backgroundImage: `url(${edubuilding})`,
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[var(--moss)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1350px] mx-auto">

        <div className="px-5 sm:px-8 py-8 sm:py-10">

          <div className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            gap-y-10 gap-x-6
          ">

            {statsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative"
              >

                {/* NUMBER */}
                <h2 className="
                  text-white text-3xl sm:text-4xl md:text-5xl
                  font-extrabold leading-none
                ">
                  <Counter
                    end={item.number}
                    suffix={item.suffix}
                    startTrigger={start}
                  />
                </h2>

                {/* LABEL */}
                <p className="
                  text-white/80 mt-3
                  text-xs sm:text-sm md:text-base
                  font-medium leading-6
                ">
                  {item.label}
                </p>

                {/* DIVIDER */}
                {index !== statsData.length - 1 && (
                  <div className="
                    hidden lg:block absolute right-[-12px]
                    top-1/2 -translate-y-1/2
                    w-[1px] h-16 bg-white/20
                  " />
                )}

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;