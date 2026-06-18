import React, { useState } from "react";

const About5 = () => {
  const [activeTab, setActiveTab] = useState("since");

  return (
    <section
      className="w-full flex flex-col items-center justify-center bg-cover bg-center relative px-4 py-10 mt-30"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Overlay FIXED HEIGHT */}
      <div className="absolute inset-0 bg-green-900/70 h-full"></div>
        <p className="text-white/80 font-medium text-sm z-40 ">
            🌱 Why Choose Us
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-1 text-[var(--white)] mb-3 z-40">
            We’re Awards Winning Gardening
          </h2>


      {/* Card */}
      <div className="relative w-[65%] max-w-6xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden h-[350px]">

        {/* LEFT SIDE */}
        <div className="flex-1 p-6 md:p-8 overflow-hidden">
          
        
          {/* Tabs */}
          <div className="flex gap-6 mt-3 border-b text-sm">
            <button
              onClick={() => setActiveTab("since")}
              className={`pb-2 ${
                activeTab === "since"
                  ? "border-b-2 border-green-600 text-green-700"
                  : "text-gray-500"
              }`}
            >
              Since 1987
            </button>

            <button
              onClick={() => setActiveTab("philosophy")}
              className={`pb-2 ${
                activeTab === "philosophy"
                  ? "border-b-2 border-green-600 text-green-700"
                  : "text-gray-500"
              }`}
            >
              Philosophy
            </button>
          </div>

          <p className="text-gray-600 mt-3 text-xs leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>

          {/* FLEX FIX: image + features side by side */}
          <div className="mt-4 flex items-start gap-4">

            {/* SMALL IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=200&q=60"
              alt="gardener"
              className="w-16 h-16 rounded-lg object-cover"
            />

            {/* FEATURES RIGHT SIDE */}
            <div className="space-y-1">
              {[
                "Trusted Gardening Partners",
                "Shipping Cost Low",
                "Professional Team Member",
                "Awards Winning Company",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className="text-green-600">✔</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 h-full p-6 rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80"
            alt="gardening"
            className="w-full h-full object-cover  rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default About5;