
import {
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";
  import React, { useState } from "react";

const faculty = [
  {
    name: "Dr. Rajeev Sharma",
    designation: "Professor & Principal",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Neha Verma",
    designation: "Professor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Anil Kumar",
    designation: "Associate Professor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Priyanka Singh",
    designation: "Associate Professor",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mr. Sandeep Shukla",
    designation: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ms. Pooja Mishra",
    designation: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mr. Vivek Tiwari",
    designation: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ms. Kavita Yadav",
    designation: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },

   {
    name: "Dr. Rajeev Sharma",
    designation: "Professor & Principal",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Neha Verma",
    designation: "Professor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Anil Kumar",
    designation: "Associate Professor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Priyanka Singh",
    designation: "Associate Professor",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
 
];

const FacultySection = () => {


  

const [showAll, setShowAll] = useState(false);

const visibleFaculty = showAll ? faculty : faculty.slice(0, 8);
  return (
  <section className="py-24  overflow-hidden relative " id="faculty">
    <div className="max-w-7xl mx-auto px-6">
      {/* Heading */}

      <div className="text-center mb-16">
        {/* <span className="uppercase tracking-[4px] text-[#578B07] font-semibold text-sm">
          School of Pharmacy
        </span> */}

        <h2 className="font-serif   text-4xl mt-4 text-[var(--forest)] [#163300]">
          Meet Our Faculty
        </h2>

        {/* <div className="w-24 h-1 bg-[#578B07] mx-auto mt-6 rounded-full"></div> */}

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 leading-8">
          Learn from experienced academicians, researchers and industry
          professionals committed to excellence in pharmaceutical education.
        </p>
      </div>

      {/* Faculty Grid */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleFaculty.map((item, index) => (
          <div
            key={index}
            className="group rounded-3xl overflow-hidden relative shadow-lg bg-white"
          >
            <div className="relative h-[250px] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover  transition duration-700 group-hover:scale-110"
              />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d05] via-[#0b2d05]/45 to-transparent"></div>

              {/* Content */}

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-green-200 mt-2">
                  {item.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}

      {faculty.length > 8 && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 bg-[var(--forest)] transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            <FaUserGraduate />

            {showAll ? "Show Less" : "View All Faculty"}

            <FaArrowRight
              className={`transition-transform duration-300 ${
                showAll ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>

    {/* Decorative Blur */}

    <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#578B07]/10 blur-[120px]"></div>

    <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-green-300/20 blur-[120px]"></div>
  </section>
);
};

export default FacultySection;