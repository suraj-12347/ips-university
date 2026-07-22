import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accessibility,
  Building2,
  BookOpen,
  ParkingCircle,
  Toilet,
  Library,
} from "lucide-react";
import {
  HeartHandshake,
  FileCheck,
  BookMarked,
  GraduationCap,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

const accessibilityFeatures = [
  {
    icon: Accessibility,
    title: "Barrier-Free Access",
    description:
      "Ramps and step-free pathways are provided at major academic and administrative buildings for convenient mobility.",
  },
  {
    icon: Building2,
    title: "Lift Facilities",
    description:
      "Elevators are available in multi-storey academic blocks to ensure easy access to classrooms and offices.",
  },
  {
    icon: Toilet,
    title: "Accessible Washrooms",
    description:
      "Selected campus buildings are equipped with accessible washrooms designed for student convenience.",
  },
  {
    icon: ParkingCircle,
    title: "Reserved Parking",
    description:
      "Dedicated parking spaces are available near academic buildings for students and visitors with disabilities.",
  },
  {
    icon: BookOpen,
    title: "Accessible Learning",
    description:
      "Academic support is provided through faculty guidance, examination assistance, and inclusive learning practices.",
  },
  {
    icon: Library,
    title: "Library Support",
    description:
      "Library staff assist students in accessing books, study materials, and digital learning resources whenever required.",
  },
];

const supportServices = [
  {
    icon: HeartHandshake,
    title: "Equal Opportunity Support",
    description:
      "Ensuring equal participation and a supportive academic environment for all students.",
  },
  {
    icon: FileCheck,
    title: "Examination Assistance",
    description:
      "Necessary examination support is provided as per University guidelines and applicable regulations.",
  },
  {
    icon: BookMarked,
    title: "Learning Assistance",
    description:
      "Faculty members and departments provide academic guidance and learning support whenever required.",
  },
  {
    icon: GraduationCap,
    title: "Student Guidance",
    description:
      "Students can seek assistance regarding academic concerns, accessibility, and campus support services.",
  },
];



const campusImage =
  "https://i.pinimg.com/1200x/bc/2d/af/bc2daf777c60c2d4a70264d26d399d64.jpg";

const heroImage =
  "https://i.pinimg.com/1200x/01/e6/1d/01e61dd105e7aa251b4a7d5a2801d62b.jpg";

const FacilitiesDifferentlyAbled = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[430px] overflow-hidden mt-30">

        <img
          src={heroImage}
          alt="Facilities for Differently-Abled"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#31572c]/90
            via-[#31572c]/60
            to-transparent
          "
        />

        {/* Content */}

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            h-full
            flex
            flex-col
            justify-center
          "
        >

          <span
            className="
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
              text-[#cfe8a9]
            "
          >
            Student Support
          </span>

          <h1
            className="
              text-4xl
              md:text-6xl
              font-bold
              text-white
              mt-4
              leading-tight
            "
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Facilities for
            <br />
            Differently-Abled
            Students
          </h1>

          <p
            className="
              text-white/80
              max-w-2xl
              mt-5
              leading-7
            "
          >
            IPS University is committed to creating an inclusive and
            barrier-free learning environment by providing accessible
            infrastructure, academic support, and student-friendly
            facilities that ensure equal opportunities for all learners.
          </p>

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-white text-sm mt-8 flex-wrap">

            <Link
              to="/"
              className="hover:text-[#cfe8a9] transition"
            >
              Home
            </Link>

            <ArrowRight size={16} />

            <Link
              to="/students-zone/facilities-for-differently-abled"
              className="hover:text-[#cfe8a9] transition"
            >
              Student Zone
            </Link>

            <ArrowRight size={16} />

            <span className="text-[#cfe8a9] font-semibold">
              Facilities for Differently-Abled
            </span>

          </div>

        </div>

      </section>

      {/* ================= ACCESSIBILITY FACILITIES ================= */}
      {/* ================= ACCESSIBILITY FACILITIES ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Inclusive Campus
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Accessibility
        <br />
        Facilities
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        IPS University strives to provide an inclusive learning environment
        through accessible infrastructure and student-focused facilities,
        ensuring equal opportunities for every learner.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

      {/* Image */}

      <div className="relative">

        <img
          src={campusImage}
          alt="Accessible Campus"
          className="rounded-[30px] w-full h-[620px] object-cover shadow-xl"
        />

        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 shadow-xl">

          <h3 className="text-2xl font-bold text-[var(--forest)]">
            Equal Access for Everyone
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            The University continuously works towards improving campus
            accessibility and providing a welcoming environment for students
            with diverse needs.
          </p>

        </div>

      </div>

      {/* Features */}

      <div className="grid sm:grid-cols-2 gap-6">

        {accessibilityFeatures.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="group p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

                <Icon
                  className="text-[var(--forest)]"
                  size={30}
                />

              </div>

              <h3 className="text-xl font-bold text-[var(--forest)] mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {item.description}
              </p>

            </div>

          );

        })}

      </div>

    </div>

  </div>

</section>

      {/* Next Part */}

      {/* ================= SUPPORT SERVICES ================= */}

      {/* ================= SUPPORT SERVICES ================= */}

<section className="py-24 bg-[#f8fbf7] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Student Assistance
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Support Services
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        The University is committed to providing continuous academic,
        administrative, and accessibility-related support so that every
        student can participate confidently in campus life.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-10 mt-20">

      {/* Support Cards */}

      <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

        {supportServices.map((service, index) => {

          const Icon = service.icon;

          return (

            <div
              key={index}
              className="bg-white rounded-[24px] p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

                <Icon
                  size={30}
                  className="text-[var(--forest)]"
                />

              </div>

              <h3 className="text-2xl font-bold text-[var(--forest)] mt-6">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                {service.description}
              </p>

            </div>

          );

        })}

      </div>

      {/* Help Desk */}

      <div className="bg-[var(--forest)] rounded-[30px] p-8 text-white h-fit">

        <span className="uppercase tracking-[3px] text-[#cfe8a9] text-sm font-semibold">
          Student Welfare Cell
        </span>

        <h3
          className="text-4xl font-bold mt-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Need Assistance?
        </h3>

        <p className="text-white/80 leading-7 mt-5">
          For accessibility-related support, students may contact the Student
          Welfare Cell or the concerned department during working hours.
        </p>

        <div className="space-y-6 mt-10">

          <div className="flex gap-4">

            <Phone className="text-[#cfe8a9] mt-1" />

            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-white/80">
                +91 XXXXX XXXXX
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <Mail className="text-[#cfe8a9] mt-1" />

            <div>
              <p className="font-semibold">Email</p>
              <p className="text-white/80">
                studentwelfare@ipsuniversity.ac.in
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <Clock3 className="text-[#cfe8a9] mt-1" />

            <div>
              <p className="font-semibold">Office Hours</p>
              <p className="text-white/80">
                Monday – Saturday
                <br />
                10:00 AM – 5:00 PM
              </p>
            </div>

          </div>

        </div>

        <button className="mt-10 w-full py-4 rounded-full bg-white text-[var(--forest)] font-semibold hover:bg-[var(--leaf)] transition-all duration-300">

          Contact Student Welfare

        </button>

      </div>

    </div>

  </div>

</section>

      {/* Next Part */}

    </>
  );
};

export default FacilitiesDifferentlyAbled;