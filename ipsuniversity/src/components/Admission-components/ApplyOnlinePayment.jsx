import React from "react";
import {
  GraduationCap,
  CreditCard,
  UserPlus,
  FileText,
  Upload,
  CheckCircle2,
  Phone,
  Mail,
  Clock3,
  Download,
  ArrowRight,
  ShieldCheck,
  Building2,
  BadgeCheck,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import { Link } from "react-router-dom";

/* ==========================================
   GLOBAL STYLE — fonts + color tokens
========================================== */

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');

    :root {
      --c-primary: #31572c;
      --c-primary-light: #578B07;
      --c-accent: #ecf39e;
      --c-accent-light: #cfe8a9;
      --c-bg-soft: #f7f9f3;
      --c-white: #ffffff;
    }

    h1, h2 {
      font-family: "Fraunces", serif;
      font-optical-sizing: auto;
      font-weight: 700;
      font-style: normal;
      font-variation-settings: "wdth" 100;
    }
  `}</style>
);

/* ==========================================
   DATA
========================================== */

const timeline = [
  { title: "Registration", desc: "Create your admission account.", icon: UserPlus },
  { title: "Application", desc: "Fill personal & academic details.", icon: FileText },
  { title: "Documents", desc: "Upload required documents.", icon: Upload },
  { title: "Payment", desc: "Pay admission/application fee.", icon: CreditCard },
  { title: "Confirmation", desc: "Download acknowledgement.", icon: CheckCircle2 },
];

const documents = [
  "Passport Size Photograph",
  "Signature",
  "Aadhaar Card",
  "10th Marksheet",
  "12th Marksheet",
  "Graduation Marksheet",
  "Transfer Certificate",
  "Migration Certificate",
  "Category Certificate",
  "Income Certificate",
];

const instructions = [
  "Read the eligibility criteria carefully before applying.",
  "Use a valid Email ID and Mobile Number.",
  "Keep scanned documents ready in JPG/PDF format.",
  "Verify all details before final submission.",
  "Application fee is non-refundable.",
  "Download and keep a copy of the application form.",
];

const campusLife = [
  {
    img: "https://images.unsplash.com/photo-1629306262232-1f854b4b0b13?auto=format&fit=crop&w=800&q=80",
    title: "Classrooms",
    text: "Modern, well-equipped learning spaces.",
  },
  {
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    title: "Campus Life",
    text: "A vibrant, student-first environment.",
  },
  {
    img: "https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?auto=format&fit=crop&w=800&q=80",
    title: "Graduation",
    text: "Celebrating every milestone with you.",
  },
];

/* ==========================================
   HERO
========================================== */

const HeroSection = () => {
  return (
     <section className="relative h-[420px] flex items-center overflow-hidden mt-30" style={{  backgroundImage:  `url(${ctm1900})`, backgroundSize: "cover",  backgroundPosition: "center",  }}  >
        <div className=" absolute inset-0 bg-gradient-to-r from-[#31572c]/90 to-transparent" />
    
        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">
        <span className="text-[var(--c-accent-light)] uppercase tracking-[3px] text-xs font-semibold">
          Admissions Open 2026-27
        </span>

        <h1 className="text-4xl md:text-5xl text-white mt-3 leading-tight">
          Apply Online
          <br />
          <span className="text-[var(--c-accent-light)]">&</span>
          <br />
          E-Payment
        </h1>

        <p className="text-gray-200 max-w-xl mt-4 text-sm leading-6">
          Welcome to the official admission portal. Complete your
          application, upload documents, pay fees securely and track
          your admission process online.
        </p>

        <div className="flex flex-wrap gap-4 mt-7">
          <button className="px-6 py-2.5 rounded-full bg-[var(--c-accent)] text-[var(--c-primary)] text-sm font-semibold hover:bg-white transition duration-300">
            Apply Online
          </button>
          <button className="px-6 py-2.5 rounded-full border border-white text-white text-sm hover:bg-white hover:text-[var(--c-primary)] transition duration-300">
            E-Payment
          </button>
        </div>

        <div className="flex items-center gap-2 mt-8 text-sm">
          <Link to="/" className="hover:text-[var(--c-accent-light)] transition">
            Home
          </Link>

          <ArrowRight size={16} />

          <Link to="/admission" className="hover:text-[var(--c-accent-light)] transition">
            Admission
          </Link>

          <ArrowRight size={16} />

          <span className="text-[var(--c-accent-light)] font-semibold">
            Apply Online & Payment
          </span>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   TIMELINE
========================================== */

const AdmissionTimeline = () => {
  return (
    <section className="py-16 bg-[var(--c-bg-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-[var(--c-primary-light)] uppercase tracking-[3px] text-xs font-semibold">
            Admission Journey
          </span>
          <h2 className="text-4xl text-[var(--c-primary)] mt-3">
            Complete Your Admission
            <br />
            In Five Easy Steps
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative text-center group">
                <div className="mx-auto w-14 h-14 rounded-full bg-[var(--c-primary)] text-[var(--c-accent)] flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-sm mt-4 text-[var(--c-primary)]">
                  {item.title}
                </h3>
                <p className="text-[var(--c-primary)]/70 mt-2 text-xs leading-5">
                  {item.desc}
                </p>

                {index !== timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-[2px] bg-[var(--c-primary)]/20">
                    <div className="w-6 h-1.5 bg-[var(--c-primary)] rounded-full absolute right-0 -top-[2px]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   CAMPUS LIFE
========================================== */

const CampusLife = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-[var(--c-primary-light)] uppercase tracking-[3px] text-xs font-semibold">
            Life On Campus
          </span>
          <h2 className="text-4xl text-[var(--c-primary)] mt-3">
            A Glimpse Of Student Life
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {campusLife.map((item, i) => (
            <div
              key={i}
              className="group bg-[var(--c-bg-soft)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="h-[180px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm text-[var(--c-primary)]">
                  {item.title}
                </h3>
                <p className="text-[var(--c-primary)]/70 mt-1.5 text-xs leading-5">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   ACTION CARDS
========================================== */

const ActionCards = () => {
  return (
    <section className="py-16 bg-[var(--c-bg-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-[var(--c-primary-light)] uppercase tracking-[3px] text-xs font-semibold">
            Admission Portal
          </span>
          <h2 className="text-4xl text-[var(--c-primary)] mt-3">
            Choose Your Service
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-[var(--c-primary)]/70 text-sm leading-6">
            Complete your admission process online or make secure
            university payments through the official portal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* APPLY ONLINE */}
          <div className="group relative overflow-hidden rounded-2xl border border-[var(--c-accent)]/40 bg-white shadow-sm hover:shadow-lg transition duration-300">
            <div className="p-6">
              <div className="w-11 h-11 rounded-xl bg-[var(--c-primary)] text-[var(--c-accent)] flex items-center justify-center">
                <GraduationCap size={20} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[var(--c-primary)]">
                Apply Online
              </h3>

              <p className="mt-2.5 text-sm leading-6 text-[var(--c-primary)]/70">
                Register yourself, complete the online application, upload
                documents and submit your admission form from anywhere.
              </p>

              <div className="space-y-3 mt-6">
                {[
                  "New Student Registration",
                  "Existing Applicant Login",
                  "Edit Application Form",
                  "Upload Documents",
                  "Print Application Form",
                  "Check Admission Status",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--c-primary)]/10 flex items-center justify-center">
                      <CheckCircle2 size={13} className="text-[var(--c-primary)]" />
                    </div>
                    <span className="text-sm font-medium text-[var(--c-primary)]/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-7 inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[var(--c-primary)] text-[var(--c-accent)] text-sm font-semibold hover:bg-[var(--c-primary)]/90 transition duration-300">
                Apply Now
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--c-primary)] via-[var(--c-primary)]/90 to-[var(--c-primary)]/70 shadow-sm hover:shadow-lg transition duration-300">
            <div className="p-6 text-white">
              <div className="w-11 h-11 rounded-xl bg-white text-[var(--c-primary)] flex items-center justify-center">
                <CreditCard size={20} />
              </div>

              <h3 className="mt-4 text-lg font-bold">
                E-Payment
              </h3>

              <p className="mt-2.5 text-sm leading-6 text-white/85">
                Pay admission fees, semester fees, hostel fees and other
                university charges through a completely secure payment
                gateway.
              </p>

              <div className="space-y-3 mt-6">
                {[
                  "Admission Fee Payment",
                  "Semester Fee",
                  "Hostel Fee",
                  "Transport Fee",
                  "Other University Charges",
                  "Payment Receipt Download",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <CheckCircle2 size={13} className="text-white" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-7 inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[var(--c-accent)] text-[var(--c-primary)] text-sm font-semibold hover:bg-white transition duration-300">
                Pay Now
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* SMALL FEATURE BOXES */}
        <div className="grid md:grid-cols-4 gap-5 mt-10">
          {[
            { icon: ShieldCheck, title: "100% Secure", text: "Encrypted Payment Gateway" },
            { icon: Clock3, title: "24×7 Available", text: "Apply Anytime" },
            { icon: Download, title: "Instant Receipt", text: "Download Acknowledgement" },
            { icon: BadgeCheck, title: "Verified Portal", text: "Official University Website" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[var(--c-accent)]/40 p-5 shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--c-primary)] text-[var(--c-accent)] flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <h4 className="font-bold text-sm mt-4 text-[var(--c-primary)]">
                  {item.title}
                </h4>
                <p className="text-[var(--c-primary)]/70 mt-2 text-xs">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   IMPORTANT INSTRUCTIONS
========================================== */

const ImportantInstructions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-[var(--c-primary-light)] uppercase tracking-[3px] text-xs font-semibold">
            Before You Apply
          </span>
          <h2 className="text-4xl text-[var(--c-primary)] mt-3">
            Important Instructions
          </h2>
          <p className="mt-4 text-[var(--c-primary)]/70 max-w-2xl mx-auto text-sm leading-6">
            Please read all the instructions carefully before filling the
            online application form.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT */}
          <div className="rounded-2xl bg-[var(--c-bg-soft)] border border-[var(--c-accent)]/40 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[var(--c-primary)] text-[var(--c-accent)] flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--c-primary)]">
                  Guidelines
                </h3>
                <p className="text-[var(--c-primary)]/70 text-xs">Read before submission</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {instructions.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-0.5">
                    <CheckCircle2 size={16} className="text-[var(--c-primary)]" />
                  </div>
                  <p className="text-sm leading-6 text-[var(--c-primary)]/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl bg-gradient-to-br from-[var(--c-primary)] via-[var(--c-primary)]/90 to-[var(--c-primary)]/70 text-white p-6 shadow-sm">
            <h3 className="text-lg font-bold">Eligibility Checklist</h3>
            <p className="mt-2 text-white/85 text-sm leading-6">
              Verify your eligibility before applying.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Passed qualifying examination.",
                "Valid Mobile Number & Email.",
                "Required documents available.",
                "Recent Passport Size Photograph.",
                "Scanned Signature.",
                "Application Fee Ready.",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={15} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-white/10 border border-white/20 p-5">
              <h4 className="font-bold text-sm">Note</h4>
              <p className="mt-2 text-white/85 text-sm leading-6">
                Once the application is submitted, changes may not be
                allowed. Please verify all information carefully before
                final submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   DOCUMENTS REQUIRED
========================================== */

const DocumentsRequired = () => {
  return (
    <section className="py-16 bg-[var(--c-bg-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-[var(--c-primary-light)] uppercase tracking-[3px] text-xs font-semibold">
            Documents
          </span>
          <h2 className="text-4xl text-[var(--c-primary)] mt-3">
            Required Documents
          </h2>
          <p className="mt-4 text-[var(--c-primary)]/70 max-w-2xl mx-auto text-sm leading-6">
            Keep the following documents scanned and ready before starting
            the online application.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {documents.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[var(--c-accent)]/40 bg-white hover:shadow-lg transition duration-300 p-5 text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--c-primary)] text-[var(--c-accent)] flex items-center justify-center">
                <FileText size={20} />
              </div>
              <h3 className="mt-4 font-bold text-[var(--c-primary)] text-xs leading-5">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   DOWNLOAD PROSPECTUS
========================================== */

const ProspectusCard = () => {
  return (
    <section className="pb-16 bg-[var(--c-bg-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[var(--c-primary)] via-[var(--c-primary)]/90 to-[var(--c-primary)]/70">
          <div className="grid lg:grid-cols-2 items-center gap-8 p-8 lg:p-10">
            <div>
              <span className="text-[var(--c-accent-light)] uppercase tracking-[3px] text-xs font-semibold">
                Information Brochure
              </span>
              <h2 className="text-4xl text-white mt-3">
                Download Admission Prospectus
              </h2>
              <p className="mt-4 text-white/85 text-sm leading-6">
                Download the latest admission brochure containing
                eligibility, fee structure, admission procedure, rules &
                university information.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <button className="inline-flex items-center gap-2.5 bg-[var(--c-accent)] text-[var(--c-primary)] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition duration-300">
                <Download size={17} />
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   HELP DESK
========================================== */

const HelpDesk = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-[var(--c-primary-light)] uppercase tracking-[3px] text-xs font-semibold">
            Need Assistance
          </span>
          <h2 className="text-4xl text-[var(--c-primary)] mt-3">
            Admission Help Desk
          </h2>
          <p className="mt-4 text-[var(--c-primary)]/70 max-w-2xl mx-auto text-sm leading-6">
            If you face any issue during online application or fee
            payment, contact our admission support team.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
          {[
            { icon: Phone, title: "Call Us", value: "+91-9876543210" },
            { icon: Mail, title: "Email", value: "admission@ipsuniversity.ac.in" },
            { icon: Clock3, title: "Office Hours", value: "09:30 AM - 05:30 PM" },
            { icon: Building2, title: "Admission Cell", value: "IPS University Campus" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[var(--c-bg-soft)] rounded-2xl border border-[var(--c-accent)]/40 p-5 shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--c-primary)] text-[var(--c-accent)] flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-sm font-bold text-[var(--c-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[var(--c-primary)]/70 text-xs leading-5 break-words">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   FINAL CTA
========================================== */

const FinalCTA = () => {
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--c-primary)] via-[var(--c-primary)]/90 to-[var(--c-primary)]/70">
          <div className="relative py-14 px-6 text-center">
            <GraduationCap size={44} className="mx-auto text-[var(--c-accent)]" />

            <h2 className="text-4xl text-white mt-5">
              Begin Your Academic Journey
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-sm leading-6 text-white/85">
              Take the first step towards a successful career. Complete
              your online application and secure your admission today
              through the official university portal.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-7">
              <button className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[var(--c-accent)] text-[var(--c-primary)] text-sm font-semibold hover:bg-white transition duration-300">
                Apply Online
                <ArrowRight size={15} />
              </button>
              <button className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white text-white text-sm hover:bg-white hover:text-[var(--c-primary)] transition duration-300">
                E-Payment
                <CreditCard size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   MAIN COMPONENT
========================================== */

const ApplyOnlinePayment = () => {
  return (
    <main className="w-full overflow-hidden bg-white">
      <GlobalStyle />
      <HeroSection />
      <AdmissionTimeline />
      <CampusLife />
      <ActionCards />
      <ImportantInstructions />
      <DocumentsRequired />
      <ProspectusCard />
      <HelpDesk />
      <FinalCTA />
    </main>
  );
};

export default ApplyOnlinePayment;