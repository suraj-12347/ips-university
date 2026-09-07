import React from "react";
import { Link } from "react-router-dom";

import ctm from "../images1/ctmlongpng4.png";
import bca from "../images1/pharmacy.jpeg";
import mgmt from "../images1/pharmacy.jpeg";
import pharmacy from "../images1/pharma5.png";
import education from "../images1/edubuild8.png";
import physical from "../images1/pharmacy.jpeg";
import flower from "../images1/flowerrr.jpeg";

const schools = [
    {
        id: 1,
        key: "engineering-tech",
        route: "/ipsctm",
        name: "School of Engineering & Tech",
        image:ctm,
        //     "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
         alt: "Engineering School",
        programs: "B.Tech / M.Tech",
        description:
            "CSE, AI & Data Science, Mechanical, Civil, and Electronics engineering equipped with modern labs.",
        duration: "4 Years Full-Time",
    },
    {
        id: 2,
        key: "management-studies",
       route: "/education",
        name: "School of Management Studies",
        image:education,
           // "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
        alt: "Management Studies",
        programs: "MBA / BBA",
        description:
            "Marketing, Finance, HR, Business Analytics, and Corporate Strategy with mandatory corporate internships.",
        duration: "2 - 3 Years",
    },
      {
        id: 4,
        key: "pharmaceutical-sciences",
       route: "/pharmacy",
        name: "School of Pharmaceutical Sciences",
        image:pharmacy,
            //"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
        alt: "School of Pharmacy",
        programs: "B.Pharm / D.Pharm",
        description:
            "PCI approved state-of-the-art analytical labs, pharmacology research, and hospital training.",
        duration: "PCI Approved",
    },
    {
        id: 3,
        key: "computer-applications",
        route: "/schools/computer-applications",
        name: "School of Computer Applications",
        image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
        alt: "Computer Applications",
        programs: "BCA / MCA",
        description:
            "Software development, cloud architecture, cybersecurity, and applied full-stack frameworks.",
        duration: "3 Years",
    },
  
    {
        id: 5,
        key: "basic-applied-sciences",
        route: "/schools/basic-applied-sciences",
        name: "School of Basic & Applied Sciences",
        image:
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        alt: "Basic Sciences",
        programs: "B.Sc / M.Sc",
        description:
            "Biotechnology, Microbiology, Mathematics, and Physics with high-end analytical equipment.",
        duration: "3 Years",
    },
    {
        id: 6,
        key: "physical-education",
        route: "/schools/physical-education",
        name: "School of Physical Education",
       image:
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
        alt: "Physical Education",
        programs: "B.P.Ed / B.Ed",
        description:
            "NCTE recognized sports science complex, athletic grounds, and certified coaching modules.",
        duration: "NCTE Approved",
    },
];

const Schools = () => {
   return (
    <section id="schools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-14">
                <span
                    className="font-bold text-xs uppercase tracking-widest"
                    style={{ color: "var(--grass)" }}
                >
                    Academic Offerings
                </span>

                <h2
                    className="text-3xl font-extrabold mt-1"
                    style={{ color: "var(--forest)" }}
                >
                    Explore Our Schools
                </h2>

                <p className="text-gray-600 text-sm mt-2">
                    Comprehensive programs tailored to industry demands.
                </p>
            </div>

            {/* Schools */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {schools.map((school) => (
                  <Link
    key={school.id}
    to={school.route}
    className="
        bg-white
        rounded-xl
        overflow-hidden
        border-2
        border-white
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        group
        flex
        flex-col
        justify-between
        hover:border-[var(--forest)]
    "
>
                        <div>

                            {/* Image */}
                            <div className="h-45  overflow-hidden relative">
                                <img
                                    src={school.image}
                                    alt={school.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />

                                {/* Program Badge */}
                                <span
                                    className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "var(--forest)",
                                    }}
                                >
                                    {school.programs}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3
                                    className="text-lg font-bold transition"
                                    style={{
                                        color: "var(--forest)",
                                    }}
                                >
                                    {school.name}
                                </h3>

                                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                    {school.description}
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">

                            <span
                                className="text-xs font-semibold"
                                style={{
                                    color: "var(--grass)",
                                }}
                            >
                                {school.duration}
                            </span>

                            <span
                                className="text-xs font-bold flex items-center gap-1 transition-colors"
                                style={{
                                    color: "var(--forest)",
                                }}
                            >
                                Explore School

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:translate-x-1 transition-transform"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>

                        </div>
                    </Link>
                ))}

            </div>
        </div>
    </section>
);
};

export default Schools;