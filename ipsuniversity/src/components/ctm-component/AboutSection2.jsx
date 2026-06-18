import React from "react";
import ctmprincipal from "../../images1/ctmprincipal2.png";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-5 items-center">

          {/* Image */}
          <div>
            <img
              src={ctmprincipal}
              alt="IPSCTM Campus"
              className="w-[75%] h-full object-cover rounded-2xl shadow-xl ml-10"
            />
          </div>

          {/* Content */}
         <div>
  <span
    className="uppercase tracking-[2px] font-semibold text-xs"
    style={{ color: "var(--forest)" }}
  >
    About SOE
  </span>

  <h2
    className="text-3xl lg:text-4xl font-bold mt-2 mb-4"
    style={{ color: "var(--forest)" }}
  >
    School of Engineering
  </h2>

  <p className="text-sm text-gray-700 leading-6 mb-3 text-justify">
    IPS College of Technology and Management was established in
    the year 2007, aiming to become the most preferred
    engineering college in Central India for students to obtain
    a world-class engineering education and develop into the
    leaders of tomorrow.
  </p>

  <p className="text-sm text-gray-700 leading-6 mb-3 text-justify">
    IPSCTM endeavors to make students technologically superior
    and ethically strong, who in turn contribute to the
    advancement of society and humankind. The committed faculty
    continuously advances the boundaries of knowledge through
    interdisciplinary research and innovation.
  </p>

  <p className="text-sm text-gray-700 leading-6 mb-3 text-justify">
    The institute pursues continuous development of
    infrastructure and enhancement of state-of-the-art
    equipment to provide students with a technologically
    updated and intellectually inspiring environment.
  </p>

  <p className="text-sm text-gray-700 leading-6 text-justify">
    Engineering is a great profession. The degree programs at
    IPSCTM are carefully designed considering industry needs,
    with special emphasis on modern laboratories and practical
    learning.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;