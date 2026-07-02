import React from "react";
import ctmprincipal from "../../images1/ctmprincipal2.png";

const PrincipalCard = ({
  image = ctmprincipal,
  name = "Dr. Anurag Garg",
  designation = "PRINCIPAL",
  department = "School of Engineering & Technology",
}) => {
  return (
    <div className="relative w-full max-w-[450px] h-[450px] mx-auto ">

      {/* Left Background */}
      <div className="absolute left-0 top-0 w-[58%] h-[82%] bg-[#16381d] rounded-md">
        {/* Golden Dots */}
        <div className="absolute left-6 top-5 grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className="w-[3px] h-[3px] rounded-full bg-[#d4a14d]"
            />
          ))}
        </div>
      </div>

      {/* Right Border */}
      <div className="absolute right-5 top-5 w-[42%] h-[62%] border-[2px] border-[#d4a14d] rounded-tr-2xl rounded-bl-2xl"></div>

      {/* Image */}
      <div className="absolute left-[12%] top-[7%] w-[78%] h-[68%] rounded-[18px] overflow-hidden border-[3px] border-white shadow-2xl bg-white">

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />

      </div>

      {/* Bottom Card */}
      <div className="absolute left-[8%] bottom-0 w-[84%] h-[105px] rounded-[18px] border-[2px] border-[#d4a14d] bg-gradient-to-r from-[#214826] to-[#14301a] shadow-xl overflow-hidden">

        {/* Right Cut */}
        <div
          className="absolute right-[-18px] top-0 h-full w-[45px] bg-white"
          style={{
            transform: "skewX(-18deg)",
          }}
        />

        {/* Left Gold Line */}
        <div className="absolute left-6 top-5 w-[2px] h-[60px] bg-[#d4a14d]" />

        {/* Text */}
        <div className="relative z-10 pl-12 pr-6 pt-4 text-white">

          <h2
            className="font-bold text-[#d4a14d] leading-none truncate py-1"
            style={{
              fontSize: "clamp(20px,2vw,30px)",
              fontFamily: "Georgia, serif",
            }}
          >
            {name}
          </h2>

          <p className="mt-2 text-[14px] uppercase tracking-wide">
            {designation}
          </p>

          <p className="text-[13px] leading-4 uppercase">
            {department}
          </p>

        </div>
      </div>
    </div>
  );
};

export default PrincipalCard;