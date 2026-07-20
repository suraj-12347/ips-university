import React, { useState } from "react";

const About5 = () => {
  const [activeTab, setActiveTab] = useState("since");

  return (
    <section
      className="w-full flex flex-col items-center justify-center bg-cover bg-center relative px-4 py-30  h-[100vh] bg-[#f8fbf6] "
      // style={{
      //   backgroundImage:
      //     "url('https://i.pinimg.com/1200x/6b/4c/6c/6b4c6c54c206b50db450e93d3d2b0cd1.jpg')",
      // }}
    >
      {/* Overlay FIXED HEIGHT */}
      {/* <div className="absolute inset-0 bg-green-900/70 h-full"></div> */}
        


      {/* Card */}
      <div className="relative w-[75%] max-w-6xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden h-[450px]">

        {/* LEFT SIDE */}
       <div className="flex-1 p-6 md:p-8 overflow-hidden flex flex-col justify-center">

  <span className="uppercase tracking-[3px] text-[13px] font-semibold text-[var(--grass)]">
   School Of Pharmacy
  </span>

  <h2
    className="text-4xl font-bold text-[var(--forest)] mt-2"
    style={{ fontFamily: "Fraunces, serif" }}
  >
     Principal's Desk
  </h2>

  <p className="text-gray-600 mt-5 text-[14px] leading-7">
    At the School of Pharmacy, we believe that excellence in education,
    research, and professional ethics creates future-ready healthcare
    professionals. Together, let us learn, innovate, and serve society with
    dedication and compassion. <span className="text-[var(--forest)] text-md font-bold cursor-pointer">Read More →</span>
  </p>

  {/* Principal Info */}
  <div className="mt-8 flex items-center gap-4">

    {/* Principal Image */}
     <div className="mt-4 flex items-start gap-4 mb-4 group">
  
  {/* IMAGE WRAPPER */}
  <div className="w-25 h-25 rounded-lg overflow-hidden">
    <img
      src="https://i.pinimg.com/736x/07/30/63/07306357a3cc2af19c63f1979e9334b8.jpg"
      alt="gardener"
      className="
        w-full h-full 
        object-cover
        transition-transform
        duration-700
        ease-out
        group-hover:scale-120
      "
    />
  </div>

  {/* FEATURES RIGHT SIDE */}
  <div className="space-y-1">
    {[
      "Industry-Oriented Curriculum",
      "Advanced Pharmaceutical Labs",
      "Experienced Faculty Members",
      "Research & Innovation Focus",
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-2 text-sm">
        <span className="text-[var(--forest)]">✓</span>
        <span className="text-gray-700">{item}</span>
      </div>
    ))}
  </div>

</div>
    

    {/* <button className="px-5 py-2.5 rounded-full bg-[var(--forest)] text-white text-sm hover:bg-[var(--grass)] transition">
      Read More →
    </button> */}

  </div>

</div>

        {/* RIGHT SIDE IMAGE */}
       <div className="flex-1 p-6 rounded-2xl group ">
          <img
            src="https://i.pinimg.com/1200x/de/2f/50/de2f5019f280f57e3de8dde27a56f848.jpg"
            alt="gardening"
            className="w-full h-full object-cover  rounded-2xl  transition-transform
            "
          />
        </div>

      </div>
    </section>
  );
};

export default About5;