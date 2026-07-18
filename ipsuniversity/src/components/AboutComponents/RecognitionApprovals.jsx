import React from "react";
import { Award, ShieldCheck, ArrowRight,GraduationCap,BadgeCheck,Download } from "lucide-react";
import { Link } from "react-router-dom";

import ctm1900 from "../../images1/ctm1900.png";

import aicte from "../../images1/aicte.gif";
import pci from "../../images1/pharmacy-council-India.jpg";
import ncte from "../../images1/nctelogo.gif";
import mpGov from "../../images1/mphighereducation.gif";
import university from "../../images1/RGTU.jpg";
import naac from "../../images1/naac1.jpg";

const RecognitionApprovals = () => {
  const approvals = [
    {
      logo: aicte,
      title: "AICTE",
      full: "All India Council for Technical Education",
      status: "Approved",
      desc: "Approved by AICTE for maintaining excellence in technical and professional education."
    },

    {
      logo: pci,
      title: "PCI",
      full: "Pharmacy Council of India",
      status: "Approved",
      desc: "Recognized by Pharmacy Council of India for pharmacy education and professional standards."
    },

    {
      logo: ncte,
      title: "NCTE",
      full: "National Council for Teacher Education",
      status: "Recognized",
      desc: "Teacher education programmes recognized under NCTE regulations."
    },

    {
      logo: naac,
      title: "NAAC",
      full: "National Assessment and Accreditation Council",
      status: "Accredited",
      desc: "Committed to quality assurance, institutional excellence and continuous improvement."
    },

    {
      logo: university,
      title: "RGPV",
      full: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      status: "Affiliated",
      desc: "Engineering programmes affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya."
    },

    {
      logo: mpGov,
      title: "Higher Education",
      full: "Department of Higher Education, Government of Madhya Pradesh",
      status: "Recognized",
      desc: "Recognized by the Government of Madhya Pradesh for higher education."
    }
  ];

  return (
    <div>

      {/* =======================================================
                           HERO SECTION
      ======================================================= */}

      <section className="relative h-[430px] overflow-hidden mt-30">

        <img
          src={ctm1900}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/95 via-[#31572c]/75 to-transparent" />

        <div
          className="
            relative
            z-10
            h-full
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            flex
            flex-col
            justify-center
          "
        >

          <span
            className="
              uppercase
              tracking-[4px]
              text-[#cfe8a9]
              text-sm
              font-semibold
            "
          >
            Quality & Recognition
          </span>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-white
              mt-4
            "
          >
            Recognition & Approvals
          </h1>

          <p
            className="
              max-w-2xl
              mt-6
              text-white/85
              leading-8
            "
          >
            IPS University is recognized and approved by
            prestigious statutory bodies and regulatory
            authorities ensuring excellence, transparency,
            academic quality and professional standards.
          </p>

          <div className="flex items-center gap-2 mt-8 text-white text-sm">

            <Link
              to="/"
              className="hover:text-[#cfe8a9] transition"
            >
              Home
            </Link>

            <ArrowRight size={15} />

            <Link
              to="/about"
              className="hover:text-[#cfe8a9] transition"
            >
              About
            </Link>

            <ArrowRight size={15} />

            <span className="text-[#cfe8a9] font-semibold">
              Recognition & Approvals
            </span>

          </div>

        </div>

      </section>



      {/* =======================================================
                     INTRODUCTION SECTION
      ======================================================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span
                className="
                  uppercase
                  tracking-[3px]
                  text-sm
                  font-semibold
                  text-[#578B07]
                "
              >
                National Recognition
              </span>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-[#31572c]
                  mt-4
                  leading-tight
                "
              >
                Recognitions That
                <br />
                Build Trust
              </h2>

            </div>

            <div>

              <p
                className="
                  text-gray-600
                  leading-8
                  text-lg
                "
              >
                IPS University has earned recognition from
                renowned statutory bodies and government
                authorities. These approvals reflect our
                commitment towards academic excellence,
                quality education, institutional integrity
                and industry-oriented professional programmes.
              </p>

            </div>

          </div>



          {/* Stats */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-8
              mt-20
            "
          >

            {[
              {
                number: "06+",
                label: "Major Recognitions"
              },

              {
                number: "20+",
                label: "Years of Excellence"
              },

              {
                number: "100%",
                label: "Government Compliance"
              },

              {
                number: "Quality",
                label: "Academic Standards"
              }

            ].map((item, index) => (

              <div
                key={index}
                className="
                  bg-[#f7f9f3]
                  rounded-[28px]
                  p-8
                  text-center
                  border
                  border-[#ecf39e]
                "
              >

                <h3
                  className="
                    text-4xl
                    font-bold
                    text-[#31572c]
                  "
                >
                  {item.number}
                </h3>

                <p
                  className="
                    mt-3
                    text-gray-600
                    font-medium
                  "
                >
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
                     RECOGNITION CARDS
      ======================================================= */}

      <section className="py-24 bg-[#f7f9f3]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <span
              className="
                uppercase
                tracking-[3px]
                text-[#578B07]
                text-sm
                font-semibold
              "
            >
              Statutory Bodies
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#31572c]
                mt-4
              "
            >
              Our Recognitions &
              Approvals
            </h2>

            <p
              className="
                max-w-3xl
                mx-auto
                mt-6
                text-gray-600
                leading-8
              "
            >
              Every recognition reflects our dedication to
              maintaining academic quality, professional
              standards and regulatory compliance.
            </p>

          </div>



          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >

            {approvals.map((item, index) => (

              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-[30px]
                  overflow-hidden
                  border
                  border-[#e6ecd9]
                  shadow-md
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-[#31572c]
                  transition
                  duration-500
                "
              >

                <div className="p-10">

                  <div
                    className="
                      w-28
                      h-28
                      mx-auto
                      rounded-full
                      bg-[#f7f9f3]
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                    "
                  >

                    <img
                      src={item.logo}
                      alt={item.title}
                      className="
                        w-[75%]
                        h-[75%]
                        object-contain
                        group-hover:scale-110
                        transition
                        duration-500
                      "
                    />

                  </div>

                  <div className="text-center mt-8">

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-[#31572c]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-gray-500
                        text-sm
                        leading-6
                      "
                    >
                      {item.full}
                    </p>

                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        mt-6
                        px-4
                        py-2
                        rounded-full
                        bg-[#ecf39e]
                        text-[#31572c]
                        font-semibold
                        text-sm
                      "
                    >
                      <ShieldCheck size={16} />
                      {item.status}
                    </div>

                    <p
                      className="
                        mt-6
                        text-gray-600
                        leading-7
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                </div>

                <div
                  className="
                    px-10
                    py-5
                    border-t
                    bg-[#fafcf7]
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-[#31572c] font-semibold">
                    Learn More
                  </span>

                  <Award
                    size={20}
                    className="text-[#578B07]"
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

            {/* =======================================================
                    WHY RECOGNITIONS MATTER
      ======================================================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Heading */}

          <div className="text-center mb-16">

            <span
              className="
                uppercase
                tracking-[3px]
                text-[#578B07]
                text-sm
                font-semibold
              "
            >
              Why It Matters
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#31572c]
                mt-4
              "
            >
              Why These Recognitions
              Matter
            </h2>

            <p
              className="
                max-w-3xl
                mx-auto
                mt-6
                text-gray-600
                leading-8
              "
            >
              National recognitions ensure that every programme
              offered by IPS University follows statutory norms,
              academic excellence and industry-driven quality
              standards.
            </p>

          </div>





          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8
            "
          >

            {[
              {
                icon: <ShieldCheck size={30} />,
                title: "Academic Quality",
                desc:
                  "All programmes follow national academic standards prescribed by statutory authorities."
              },

              {
                icon: <Award size={30} />,
                title: "National Recognition",
                desc:
                  "Recognized approvals increase institutional credibility and public trust."
              },

              {
                icon: <GraduationCap size={30} />,
                title: "Career Opportunities",
                desc:
                  "Degrees from recognized institutions enhance employment and higher education opportunities."
              },

              {
                icon: <BadgeCheck size={30} />,
                title: "Quality Assurance",
                desc:
                  "Regular monitoring and compliance ensure continuous institutional improvement."
              }

            ].map((item, index) => (

              <div
                key={index}
                className="
                  group
                  rounded-[30px]
                  bg-[#f7f9f3]
                  p-8
                  hover:bg-[#31572c]
                  transition
                  duration-500
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#31572c]
                    text-[#ecf39e]
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[#ecf39e]
                    group-hover:text-[#31572c]
                    transition
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#31572c]
                    mt-7
                    group-hover:text-white
                    transition
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-gray-600
                    group-hover:text-white/80
                    transition
                  "
                >
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>





      {/* =======================================================
                        RECOGNITION TIMELINE
      ======================================================= */}

      <section className="py-24 bg-[#f7f9f3]">

        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-20">

            <span
              className="
                uppercase
                tracking-[3px]
                text-[#578B07]
                text-sm
                font-semibold
              "
            >
              Journey of Excellence
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#31572c]
                mt-4
              "
            >
              Recognition Timeline
            </h2>

            <p
              className="
                max-w-3xl
                mx-auto
                mt-6
                leading-8
                text-gray-600
              "
            >
              Our continuous journey towards academic quality,
              professional excellence and institutional
              recognition over the years.
            </p>

          </div>





          <div className="relative">

            {/* Vertical Line */}

            <div
              className="
                absolute
                left-5
                lg:left-1/2
                top-0
                bottom-0
                w-[3px]
                bg-[#dbe7c6]
                lg:-translate-x-1/2
              "
            />





            {[
              {
                year: "2005",
                title: "Institute Established",
                desc:
                  "Foundation of IPS with a vision of providing quality professional education."
              },

              {
                year: "2006",
                title: "Government Recognition",
                desc:
                  "Recognition from Higher Education Department, Government of Madhya Pradesh."
              },

              {
                year: "2010",
                title: "Technical Approvals",
                desc:
                  "AICTE and other statutory approvals for technical programmes."
              },

              {
                year: "2016",
                title: "Professional Expansion",
                desc:
                  "Expansion into Pharmacy, Teacher Education and multidisciplinary programmes."
              },

              {
                year: "2022",
                title: "Quality Enhancement",
                desc:
                  "Strengthening academic quality through accreditation and institutional reforms."
              },

              {
                year: "Present",
                title: "Continuous Excellence",
                desc:
                  "Committed to innovation, quality assurance and global academic standards."
              }

            ].map((item, index) => (

              <div
                key={index}
                className={`
                  relative
                  flex
                  items-start
                  mb-16
                  ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }
                `}
              >

                {/* Content */}

                <div
                  className="
                    lg:w-1/2
                    pl-16
                    lg:pl-0
                    lg:px-10
                  "
                >

                  <div
                    className="
                      bg-white
                      rounded-[28px]
                      p-8
                      shadow-md
                      hover:shadow-xl
                      transition
                    "
                  >

                    <span
                      className="
                        inline-block
                        px-4
                        py-2
                        rounded-full
                        bg-[#ecf39e]
                        text-[#31572c]
                        font-bold
                        text-sm
                      "
                    >
                      {item.year}
                    </span>

                    <h3
                      className="
                        mt-5
                        text-2xl
                        font-bold
                        text-[#31572c]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-gray-600
                        leading-7
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                </div>





                {/* Circle */}

                <div
                  className="
                    absolute
                    left-0
                    lg:left-1/2
                    top-8
                    w-10
                    h-10
                    rounded-full
                    bg-[#31572c]
                    border-[6px]
                    border-[#ecf39e]
                    lg:-translate-x-1/2
                  "
                />

              </div>

            ))}

          </div>

        </div>

      </section>





      {/* =======================================================
                    ACCREDITATION HIGHLIGHTS
      ======================================================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div
            className="
              rounded-[40px]
              bg-gradient-to-r
              from-[#31572c]
              via-[#3f6d37]
              to-[#578B07]
              overflow-hidden
              p-12
              lg:p-16
            "
          >

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <span
                  className="
                    uppercase
                    tracking-[3px]
                    text-[#ecf39e]
                    text-sm
                    font-semibold
                  "
                >
                  Accreditation Highlights
                </span>

                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    text-white
                    mt-5
                  "
                >
                  Excellence Through
                  National Standards
                </h2>

                <p
                  className="
                    mt-6
                    text-white/80
                    leading-8
                  "
                >
                  Every approval strengthens our commitment
                  towards delivering globally relevant,
                  professionally recognized and quality-driven
                  education for future leaders.
                </p>

              </div>





              <div
                className="
                  grid
                  grid-cols-2
                  gap-6
                "
              >

                {[
                  "AICTE Approved",
                  "PCI Approved",
                  "NCTE Recognized",
                  "NAAC Standards",
                  "RGPV Affiliation",
                  "Govt. Recognition"
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      bg-white/10
                      backdrop-blur-md
                      rounded-2xl
                      p-6
                      border
                      border-white/20
                      text-white
                      font-semibold
                    "
                  >
                    ✓ {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* =======================================================
                    DOWNLOAD APPROVALS
      ======================================================= */}

      <section className="py-24 bg-[#f7f9f3]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Heading */}

          <div className="text-center mb-16">

            <span
              className="
                uppercase
                tracking-[3px]
                text-sm
                font-semibold
                text-[#578B07]
              "
            >
              Official Documents
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#31572c]
                mt-4
              "
            >
              Download Recognition
              Certificates
            </h2>

            <p
              className="
                max-w-3xl
                mx-auto
                mt-6
                leading-8
                text-gray-600
              "
            >
              Access official recognition letters, approval
              certificates and statutory documents issued by
              various regulatory authorities.
            </p>

          </div>





          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >

            {[
              {
                title: "AICTE Approval",
                year: "2025-26"
              },

              {
                title: "PCI Approval",
                year: "2025-26"
              },

              {
                title: "NCTE Recognition",
                year: "2025-26"
              },

              {
                title: "NAAC Accreditation",
                year: "Latest"
              },

              {
                title: "RGPV Affiliation",
                year: "2025-26"
              },

              {
                title: "MP Government Recognition",
                year: "Latest"
              }

            ].map((item, index) => (

              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-[28px]
                  p-8
                  shadow-md
                  hover:shadow-xl
                  transition
                  duration-300
                  border
                  border-[#e8eedc]
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#31572c]
                    text-[#ecf39e]
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:rotate-6
                    transition
                  "
                >
                  <Download size={28} />
                </div>

                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-[#ecf39e]
                    text-[#31572c]
                    text-sm
                    font-semibold
                  "
                >
                  {item.year}
                </span>

                <h3
                  className="
                    mt-5
                    text-2xl
                    font-bold
                    text-[#31572c]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-7
                  "
                >
                  View and download the official approval
                  document issued by the respective
                  statutory authority.
                </p>

                <button
                  className="
                    mt-8
                    w-full
                    py-3
                    rounded-xl
                    bg-[#31572c]
                    text-white
                    font-semibold
                    hover:bg-[#578B07]
                    transition
                  "
                >
                  Download PDF
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>







      {/* =======================================================
                        FINAL CTA SECTION
      ======================================================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              min-h-[420px]
            "
          >

            {/* Background Image */}

            <img
              src={ctm1900}
              alt="Campus"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#31572c]/95
                via-[#31572c]/85
                to-[#31572c]/60
              "
            />





            {/* Content */}

            <div
              className="
                relative
                z-10
                h-full
                flex
                flex-col
                justify-center
                items-center
                text-center
                px-8
                py-24
              "
            >

              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-[#cfe8a9]
                  text-sm
                  font-semibold
                "
              >
                IPS University
              </span>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  text-white
                  mt-5
                  max-w-4xl
                "
              >
                Building Trust Through
                National Recognition
              </h2>

              <p
                className="
                  max-w-3xl
                  mt-7
                  text-white/85
                  leading-8
                "
              >
                Every recognition and approval reflects our
                unwavering commitment towards quality
                education, academic excellence, transparency,
                innovation and holistic student development.
              </p>





              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  gap-5
                  mt-10
                "
              >

                <Link
                  to="/admission"
                  className="
                    px-8
                    py-4
                    rounded-full
                    bg-[#ecf39e]
                    text-[#31572c]
                    font-semibold
                    hover:bg-white
                    transition
                  "
                >
                  Apply for Admission
                </Link>

                <Link
                  to="/contact"
                  className="
                    px-8
                    py-4
                    rounded-full
                    border
                    border-white
                    text-white
                    hover:bg-white
                    hover:text-[#31572c]
                    transition
                  "
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default RecognitionApprovals;


