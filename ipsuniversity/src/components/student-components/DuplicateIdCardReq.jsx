import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  FileText,
  CreditCard,
  Camera,
  ShieldCheck,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const requiredDocuments = [
  {
    icon: FileText,
    title: "Application Form",
    description: "Properly filled duplicate identity card request form.",
  },
  {
    icon: Camera,
    title: "Passport Photograph",
    description: "One recent passport-size color photograph.",
  },
  {
    icon: ShieldCheck,
    title: "Identity Proof",
    description: "College enrollment proof or any valid identity document.",
  },
  {
    icon: CreditCard,
    title: "Fee Receipt",
    description: "Receipt of the prescribed duplicate ID card fee.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Complete the Application",
    description:
      "Fill out the prescribed application form with accurate personal and academic details.",
  },
  {
    number: "02",
    title: "Attach Required Documents",
    description:
      "Submit a recent passport-size photograph, identity proof, and other supporting documents if applicable.",
  },
  {
    number: "03",
    title: "Pay the Prescribed Fee",
    description:
      "Deposit the duplicate identity card fee through the designated payment process.",
  },
  {
    number: "04",
    title: "Verification & Card Issue",
    description:
      "After successful verification, the duplicate identity card will be issued by the concerned office.",
  },
];

const processImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";

const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80";

const DuplicateIdentityCardRequest = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[430px] overflow-hidden mt-30">

        <img
          src={heroImage}
          alt="Duplicate Identity Card Request"
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
              text-[#cfe8a9]
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
            "
          >
            Student Services
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
            Duplicate Identity
            <br />
            Card Request
          </h1>

          <p
            className="
              text-white/80
              max-w-2xl
              mt-5
              leading-7
            "
          >
            Students who have lost or damaged their University Identity Card
            may apply for a duplicate card by following the prescribed
            application procedure and submitting the required documents.
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
              to="/students-zone/duplicate-id-card-request"
              className="hover:text-[#cfe8a9] transition"
            >
              Student Zone
            </Link>

            <ArrowRight size={16} />

            <span className="text-[#cfe8a9] font-semibold">
              Duplicate Identity Card Request
            </span>

          </div>

        </div>

      </section>

      {/* ================= APPLICATION PROCESS ================= */}
      {/* ================= APPLICATION PROCESS ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Application Process
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        How to Request a
        <br />
        Duplicate ID Card
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Follow these simple steps to apply for a duplicate identity card.
        Ensure that all required information and supporting documents are
        submitted to avoid delays.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

      {/* Left */}

      <div className="space-y-6">

        {processSteps.map((step) => (

          <div
            key={step.number}
            className="group flex gap-6 p-6 rounded-[24px] border border-gray-200 hover:border-[var(--grass)] hover:shadow-xl transition-all duration-300"
          >

            <div className="min-w-[72px] h-[72px] rounded-2xl bg-[var(--forest)] text-white flex items-center justify-center text-2xl font-bold">

              {step.number}

            </div>

            <div>

              <h3 className="text-2xl font-bold text-[var(--forest)]">

                {step.title}

              </h3>

              <p className="text-gray-600 leading-7 mt-3">

                {step.description}

              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Right */}

      <div className="relative">

        <img
          src={processImage}
          alt="Application Process"
          className="rounded-[30px] w-full h-[600px] object-cover shadow-2xl"
        />

        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 shadow-xl">

          <h4 className="text-2xl font-bold text-[var(--forest)]">
            Processing Time
          </h4>

          <p className="text-gray-600 mt-3 leading-7">
            Applications are generally processed within
            <span className="font-semibold text-[var(--forest)]">
              {" "}5–7 working days
            </span>
            {" "}after successful verification and fee confirmation.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Next Part */}

      {/* ================= REQUIRED DOCUMENTS ================= */}
      {/* ================= REQUIRED DOCUMENTS ================= */}

<section className="py-24 bg-[#f8fbf7]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Required Documents
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Documents & Assistance
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Please ensure all necessary documents are submitted along with your
        application. For any assistance, contact the Student Affairs Office.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-10 mt-20">

      {/* Documents */}

      <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

        {requiredDocuments.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="bg-white rounded-[24px] p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

                <Icon
                  size={30}
                  className="text-[var(--forest)]"
                />

              </div>

              <h3 className="text-2xl font-bold text-[var(--forest)] mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>

            </div>

          );

        })}

      </div>

      {/* Contact Card */}

      <div className="bg-[var(--forest)] rounded-[30px] p-8 text-white h-fit sticky top-30">

        <h3
          className="text-3xl font-bold"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Need Assistance?
        </h3>

        <p className="text-white/80 leading-7 mt-5">
          Contact the Student Affairs Office for support regarding duplicate
          identity card applications.
        </p>

        <div className="space-y-6 mt-8">

          <div className="flex gap-4">

            <Phone className="text-[var(--leaf)] mt-1" />

            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-white/80">
                +91 XXXXX XXXXX
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <Mail className="text-[var(--leaf)] mt-1" />

            <div>
              <p className="font-semibold">Email</p>
              <p className="text-white/80">
                studentaffairs@ipsuniversity.ac.in
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <Clock className="text-[var(--leaf)] mt-1" />

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

          Download Application Form

        </button>

      </div>

    </div>

  </div>

</section>

      {/* Next Part */}

    </>
  );
};

export default DuplicateIdentityCardRequest;