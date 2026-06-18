import React, { useState } from "react";
import Potgr from "../images1/potgr.jpg";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("journey");

  return (
    <section className="relative py-20 bg-[url('./images1/potgr.jpg')] bg-cover mt-30">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-r-2xl" ></div>

      <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
        
        {/* Heading */}
        <p className="text-sm mb-2 flex justify-center items-center gap-2">
          🌿 About Us
        </p>

        <h2 className="text-4xl font-bold mb-10">
          IPS UNIVERSITY
        </h2>

        {/* Card */}
        <div className="bg-white text-gray-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center shadow-xl">
          
          {/* Left Content */}
          <div className="flex-1 text-left">
            
            {/* Tabs */}
            <div className="flex gap-6 mb-4 font-semibold">
              <button
                onClick={() => setActiveTab("journey")}
                className={`pb-2 ${
                  activeTab === "journey"
                    ? "border-b-2 border-green-700 text-black"
                    : "text-gray-400"
                }`}
              >
                We’re Since 1987!
              </button>

              <button
                onClick={() => setActiveTab("philosophy")}
                className={`pb-2 ${
                  activeTab === "philosophy"
                    ? "border-b-2 border-green-700 text-black"
                    : "text-gray-400"
                }`}
              >
                Philosophy
              </button>
            </div>

            {/* Content */}
            {activeTab === "journey" && (
              <>
                <p className="text-sm mb-4 text-gray-600">
                  The Deendayal Krishi Avam Gramin Proudyogiki Vikas Sansthan
                  was registered under the MP Society Registration Act (SN. 44
                  of 1973) by a group of philanthropically inclined individuals
                  who decided to work together for the betterment of society.
                </p>

                <p className="text-sm mb-4 text-gray-600">
                  The Institute of Professional Studies (IPS), founded in 2005,
                  has always promoted the belief that emotional, intellectual,
                  and physical lives are interconnected.
                </p>
              </>
            )}

            {activeTab === "philosophy" && (
              <p className="text-sm mb-4 text-gray-600">
                "Education of the whole person — in spirit, mind and body."
                IPS believes in shaping not just careers but complete
                individuals with balanced growth.
              </p>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <p className="text-sm">80 Acres Campus</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <p className="text-sm">3 Colleges</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <p className="text-sm">AICTE Approved</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <p className="text-sm">100% Placement</p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-5 text-green-700 font-semibold hover:underline">
              Read full overview →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={Potgr}
              alt="about"
              className="rounded-xl w-full h-[300px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;