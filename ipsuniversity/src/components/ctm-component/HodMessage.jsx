import React from "react";
import { Eye, Rocket, Target } from "lucide-react";
import hodimg from "../../images1/soumya.jpg"; // apni image lagao

const HodMessage = () => {
  return (
   <section
  className="
    relative
    min-h-screen
    py-5
   
    
    
    overflow-hidden
  "

      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/fa/12/cc/fa12cc16e8d3811e36cd1ccb7338bb03.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[3px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        {/* <div className="text-center mb-12 md:mb-16">
          <span className="uppercase tracking-[4px] text-[var(--forest)] text-xs md:text-sm font-semibold">
            Department Leadership
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[var(--forest)] mt-3">
            Head Of Department
          </h2>

          // <p className="max-w-2xl mx-auto text-gray-600 mt-4 leading-7">
          //   Leadership, vision and commitment towards academic excellence,
          //   innovation and student success.
          // </p> 
        </div> */}

        {/* Main Content */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-stretch">
          {/* Left Profile Card */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white shadow-xl p-6 md:p-8 text-center h-full">
              <img
                src={hodimg}
                alt="HOD"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-[var(--forest)]"
              />

              <h3 className="mt-5 text-2xl font-bold text-[var(--forest)]">
                Dr. Soumya Bajpai
              </h3>

              <p className="text-gray-600 mt-2">
                Head of Department
              </p>

              <div className="w-full h-[1px] bg-gray-200 my-6"></div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <h4 className="font-bold text-[var(--forest)] text-lg">
                    15+
                  </h4>
                  <p className="text-xs text-gray-500">
                    Years Exp.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--forest)] text-lg">
                    50+
                  </h4>
                  <p className="text-xs text-gray-500">
                    Research
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--forest)] text-lg">
                    100%
                  </h4>
                  <p className="text-xs text-gray-500">
                    Support
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-[var(--moss)]/10 rounded-2xl p-4">
                <p className="text-sm text-[var(--forest)] font-medium">
                  Student Development & Academic Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Right Message Card */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white/95 backdrop-blur-sm p-6 md:p-10 h-full">
              <div className="text-6xl text-[var(--forest)] opacity-20 leading-none">
                "
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--forest)] mb-6">
                Message From The HOD
              </h3>

              <p className="text-gray-700 leading-8 mb-5">
                It is truly a privilege to be part of such a dynamic and
                inspiring academic environment where students are encouraged
                to explore, innovate and achieve excellence in every aspect
                of learning.
              </p>

              <p className="text-gray-700 leading-8 mb-6">
                Our department continuously strives to provide quality
                education, industry exposure, research opportunities and
                practical knowledge that empowers students to become
                competent professionals and responsible citizens.
              </p>

              <div className="bg-[var(--moss)]/10 border-l-4 border-[var(--forest)] rounded-r-2xl p-5 mb-6">
                <p className="italic text-[var(--forest)] font-semibold leading-8">
                  With dedication, discipline and continuous learning,
                  every student has the potential to transform challenges
                  into opportunities and build a successful future.
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  — Dr. Soumya Bajpai
                </p>
              </div>

              <p className="text-gray-700 leading-8">
                We believe in creating an environment where knowledge,
                innovation and character grow together. Through academic
                excellence, research and practical exposure, we prepare
                students to meet future challenges with confidence and
                contribute meaningfully to society.
              </p>

              {/* Bottom Cards */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-green-50 rounded-2xl p-5">
                  <Eye
                    size={32}
                    className="text-[var(--forest)] mb-3"
                  />
                  <h4 className="font-semibold text-[var(--forest)] mb-2">
                    Vision
                  </h4>
                  <p className="text-sm text-gray-600">
                    Excellence in Computer Science education.
                  </p>
                </div>

                <div className="bg-green-50 rounded-2xl p-5">
                  <Rocket
                    size={32}
                    className="text-[var(--forest)] mb-3"
                  />
                  <h4 className="font-semibold text-[var(--forest)] mb-2">
                    Mission
                  </h4>
                  <p className="text-sm text-gray-600">
                    Innovation, research and quality learning.
                  </p>
                </div>

                <div className="bg-green-50 rounded-2xl p-5">
                  <Target
                    size={32}
                    className="text-[var(--forest)] mb-3"
                  />
                  <h4 className="font-semibold text-[var(--forest)] mb-2">
                    Objective
                  </h4>
                  <p className="text-sm text-gray-600">
                    Develop industry-ready engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HodMessage;