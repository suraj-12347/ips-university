import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tree from "../../images1/whiteflowerpng.png";
import suraj from "../../images1/suraj.jpeg";
import neeraj from "../../images1/neeraj.jpeg";
import prasansha from "../../images1/prasansha.jpeg";

const testimonials = [
  {
    image:
      prasansha,
    text:
      "Academic at IPS is impeccable. Utmost care is taken so that students have clear understanding of the subject.",
    name: "Ms. Himanshi Gangwani",
    batch: "Batch 2017",
  },
  {
    image:
      neeraj,
    text:
      "Faculty members are highly supportive and the campus environment encourages learning and innovation.",
    name: "Rahul Sharma",
    batch: "Batch 2019",
  },
 
  {
    image:
      suraj,
    text:
      "IPS gave me confidence and practical exposure that helped me excel in my career.",
    name: "Aman Gupta",
    batch: "Batch 2021",
  },
 
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-15 overflow-hidden mt-30"
      style={{
        backgroundImage: `url(${tree})`,
        backgroundSize: "cover",
      
       
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[3px] z-0"></div>
       {/* Bottom White Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to top, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute top-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[var(--forest)] mb-12">
          Testimonials
        </h2>

        {/* Message Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-xl px-8 py-8 text-center border-t border-gray-200">
              <h3 className="text-3xl font-bold mb-4 text-[var(--forest)]">
                I was very impressed!
              </h3>

              <p className="text-gray-600 leading-7">
                {testimonials[current].text}
              </p>

              <h4 className="mt-6 text-lg font-semibold text-[var(--forest)]">
                {testimonials[current].name}
              </h4>

              <p className="text-gray-500">
                {testimonials[current].batch}
              </p>
            </div>

            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-8 h-8 bg-white rotate-45"></div>
          </motion.div>
        </AnimatePresence>

        {/* Avatar Carousel */}
        <div className="relative h-52 mt-2 overflow-hidden">
          <div className="relative w-full max-w-[340px] sm:max-w-[550px] md:max-w-[750px] mx-auto h-full flex justify-center items-center pb-8">
            {testimonials.map((item, index) => {
              const total = testimonials.length;

              let diff = index - current;

              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              if (Math.abs(diff) > 1) return null;

              const positions = {
                "-1": {
                  x: window.innerWidth < 640 ? -110 : -180,
                  scale: 1,
                  y: 0,
                  zIndex: 10,
                  opacity: 1,
                },
                "0": {
                  x: 0,
                  scale: 1.35,
                  y: 30,
                  zIndex: 30,
                  opacity: 1,
                },
                "1": {
                  x: window.innerWidth < 640 ? 110 : 180,
                  scale: 1,
                  y: 0,
                  zIndex: 10,
                  opacity: 1,
                },
              };

              const pos = positions[diff];

              return (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="absolute"
                  animate={{
                    x: pos.x,
                    y: pos.y,
                    scale: pos.scale,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className={`
                      rounded-full
                      bg-white
                      p-1
                      border-4
                      border-white
                      overflow-hidden
                      ${
                        diff === 0
                          ? "w-28 h-28 sm:w-32 sm:h-32"
                          : "w-20 h-20 sm:w-24 sm:h-24"
                      }
                    `}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 h-3 bg-[var(--forest)]"
                  : "w-3 h-3 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;