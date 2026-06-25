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
              className="md:w-[75%] w-full h-full object-cover rounded-2xl shadow-xl "
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
   Welcome to the Faculty of Engineering at IPS University, where academic excellence, innovation, and ethical values converge to prepare the engineers of tomorrow.
  </p>

  <p className="text-sm text-gray-700 leading-6 mb-3 text-justify">
  As IPS University embarks on a new chapter in 2027, we are committed to delivering future-focused education that meets the evolving needs of industry and society. Alongside our core engineering disciplines, we proudly offer cutting-edge programmes in Artificial Intelligence (AI), Machine Learning (ML), Artificial Intelligence & Data Science, Cyber Security, and other emerging technologies, equipping students with the skills required for the digital era
  </p>

  <p className="text-sm text-gray-700 leading-6 mb-3 text-justify">
    At IPS University, learning extends beyond the classroom. Through industry partnerships, multidisciplinary research, innovation laboratories, entrepreneurship initiatives, internships, and experiential learning, we empower students to transform ideas into impactful solutions. Our emphasis on critical thinking, creativity, and problem-solving enables graduates to excel in Industry 4.0 and contribute to national and global development.
  </p>

  <p className="text-sm text-gray-700 leading-6 text-justify">
   We firmly believe that engineering education should foster not only technical competence but also integrity, leadership, sustainability, and social responsibility. Our mission is to nurture professionals who are innovative, compassionate, and committed to improving lives through technology.
  </p>
   <p className="text-sm text-gray-700 leading-6 text-justify">
   I invite aspiring students, parents, academicians, alumni, and industry partners to join the IPS University family as we build a future driven by knowledge, innovation, research, and human values.

Together, let us innovate, inspire, and engineer a better tomorrow. </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;