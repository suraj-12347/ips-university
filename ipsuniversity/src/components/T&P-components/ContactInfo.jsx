import React from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  GraduationCap,
  BookOpen,
  Briefcase,
  Wallet,
  Building2,
  Bus,
  Globe2,
  Library,
  Headset,
  Send,
  ShieldCheck,
  Timer,
  UserCheck,
} from "lucide-react";
import ctm1900 from '../../images1/adminbuild.jpeg'
import tp from '../../images1/tp.png'
import { Link } from "react-router-dom";

/* ==========================================
   CUSTOM SOCIAL ICONS

   lucide-react has dropped brand/social icons
   (Facebook, Instagram, LinkedIn, YouTube) in
   recent versions, which crashes the app with a
   blank screen. These small inline SVGs replace
   them so the icons always render, regardless
   of the installed lucide-react version.
========================================== */

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-8.4h2.8l.4-3.3h-3.2V7.1c0-.95.27-1.6 1.63-1.6h1.74V2.55C15.9 2.38 15 2.3 13.94 2.3c-2.4 0-4.04 1.47-4.04 4.16v2.9H7.1v3.3h2.8V21h3.6z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.5v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21H9z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
  </svg>
);

/* ==========================================
   DATA

   NOTE: Phone numbers, emails and addresses
   below are placeholder examples only. Replace
   with your university's verified contact
   details before publishing.
========================================== */

// Quick-glance headline figures shown as stat cards
const quickStats = [
  { icon: Phone, value: "24x7", label: "Admission Helpline" },
  { icon: Clock, value: "< 24 Hrs", label: "Average Email Response" },
  { icon: Building2, value: "3", label: "Campus Locations" },
  { icon: Headset, value: "12+", label: "Dedicated Support Desks" },
];

// Broad ways to get in touch, by purpose
const categories = [
  {
    title: "Admissions Enquiry",
    text: "Reach our admissions team for course details, eligibility, application status and scholarship guidance.",
  },
  {
    title: "Academics & Examinations",
    text: "Connect with department offices and the examination cell for academic records, results and re-evaluation.",
  },
  {
    title: "Training & Placement",
    text: "Talk to the T&P Cell for internship support, placement registration and recruiter partnerships.",
  },
  {
    title: "Student Support & Grievance",
    text: "Raise concerns about hostel, transport, fees or general campus life with our student support desk.",
  },
];

// Full directory of department contacts
const contactDirectory = [
  {
    icon: GraduationCap,
    badge: "Admissions",
    title: "Admissions Office",
    desc: "admissions@ipsuniversity.ac.in",
    phone: "+91 98765 43210",
    category: "Admissions",
  },
  {
    icon: BookOpen,
    badge: "Academics",
    title: "Examination Cell",
    desc: "examcell@ipsuniversity.ac.in",
    phone: "+91 98765 43211",
    category: "Academics",
  },
  {
    icon: Briefcase,
    badge: "Careers",
    title: "Training & Placement Cell",
    desc: "placements@ipsuniversity.ac.in",
    phone: "+91 98765 43212",
    category: "Careers",
  },
  {
    icon: Wallet,
    badge: "Finance",
    title: "Accounts & Fees Office",
    desc: "accounts@ipsuniversity.ac.in",
    phone: "+91 98765 43213",
    category: "Support",
  },
  {
    icon: Building2,
    badge: "Campus Life",
    title: "Hostel Office",
    desc: "hostel@ipsuniversity.ac.in",
    phone: "+91 98765 43214",
    category: "Support",
  },
  {
    icon: Bus,
    badge: "Transport",
    title: "Transport Cell",
    desc: "transport@ipsuniversity.ac.in",
    phone: "+91 98765 43215",
    category: "Support",
  },
  {
    icon: Globe2,
    badge: "International",
    title: "International Students Cell",
    desc: "global@ipsuniversity.ac.in",
    phone: "+91 98765 43216",
    category: "Academics",
  },
  {
    icon: Library,
    badge: "Library",
    title: "Central Library",
    desc: "library@ipsuniversity.ac.in",
    phone: "+91 98765 43217",
    category: "Academics",
  },
];

const categoryStyles = {
  Admissions: "bg-[#ecf39e] text-[#31572c]",
  Academics: "bg-[#31572c]/10 text-[#31572c]",
  Careers: "bg-gray-100 text-gray-600",
  Support: "bg-[#d4a14d]/15 text-[#8a6112]",
};

// Good-to-know info before reaching out
const generalTerms = [
  {
    icon: Timer,
    title: "Office Hours",
    text: "All administrative offices are open Monday to Saturday, 9:00 AM to 5:30 PM, except public holidays.",
  },
  {
    icon: UserCheck,
    title: "Right Desk, Right Time",
    text: "Direct your query to the relevant department for a faster response instead of the general enquiry line.",
  },
  {
    icon: ShieldCheck,
    title: "Grievance Redressal",
    text: "Unresolved concerns can be escalated to the Student Grievance Redressal Committee for formal review.",
  },
  {
    icon: MessageCircle,
    title: "Stay Updated",
    text: "Follow our official social media handles for real-time updates on events, deadlines and announcements.",
  },
];

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: YoutubeIcon, label: "YouTube" },
];

const ContactInfo = () => {
  return (
    <div className="w-full bg-white mt-30">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative h-[420px] flex items-center overflow-hidden" style={{  backgroundImage:  `url(${tp})`, backgroundSize: "cover",  backgroundPosition: "center",  }}  >
        <div className=" absolute inset-0 bg-gradient-to-r from-[#31572c]/90 to-transparent" />

        <div className="relative max-w-7xl  px-6 lg:px-10 text-white">

          <div className="text-sm uppercase tracking-[3px] text-[#cde8a3] mb-5">
            We&apos;d Love To Hear From You
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-8">
            Whether you have a question about admissions, academics or campus
            life, our team at IPS University is here to help — reach out
            through whichever channel works best for you.
          </p>

          <div className="flex items-center gap-2 mt-8 text-sm">

  <Link
    to="/"
    className="hover:text-[var(--grass)] transition"
  >
    Home
  </Link>


  <ArrowRight size={16} />


  <Link
    to="/admission"
    className="hover:text-[var(--grass)] transition"
  >
    Admission
  </Link>


  <ArrowRight size={16} />


  <span className="text-[#cde8a3] font-semibold">
    Contact Us
  </span>

</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MAIN CAMPUS HIGHLIGHT */}
      {/* ========================================================= */}

   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

      {/* Background Image */}
      <img
  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80"
  alt="University Main Campus"
  className="absolute inset-0 w-full h-full object-cover"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>


      {/* White Gradient Inset */}
      <div
        className="
          absolute 
          left-0 
          top-0 
          h-full 
          w-[58%]
          bg-gradient-to-r 
          from-white 
          via-white/95 
          to-white/0
        "
      ></div>


      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-lg pl-12 pr-10">

          <span className="flex items-center gap-2 text-[#578B07] font-semibold tracking-[3px] uppercase text-xs">

            <div className="w-2 h-2 rounded-full bg-[#8BAE45]" />

            Main Campus

          </span>


          <h2 className="
            text-4xl
            leading-[44px]
            font-bold
            text-[#31572c]
            mt-5
          ">

            Visit Us

            <span className="block text-[#7ea33d] italic font-medium">
              We&apos;re Easy To Find
            </span>

          </h2>


          <div className="w-20 h-1 bg-[#8BAE45] rounded-full mt-6"></div>


          <div className="mt-6 space-y-4 max-w-md">

            <div className="flex items-start gap-3">
              <MapPin className="text-[#31572c] shrink-0 mt-1" size={20} />
              <p className="text-gray-700 text-sm leading-6">
                IPS University Campus, NH-12, Raisen Road,
                <br />
                Bhopal, Madhya Pradesh, 462024
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#31572c] shrink-0" size={20} />
              <p className="text-gray-700 text-sm">+91 98765 43200</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#31572c] shrink-0" size={20} />
              <p className="text-gray-700 text-sm">info@ipsuniversity.ac.in</p>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#31572c] shrink-0" size={20} />
              <p className="text-gray-700 text-sm">Mon – Sat, 9:00 AM – 5:30 PM</p>
            </div>

          </div>


          {/* Info Block */}
          <div className="flex items-center gap-4 mt-8">

            <div className="
              w-12 
              h-12 
              rounded-full 
              bg-[#31572c] 
              text-white 
              flex 
              items-center 
              justify-center
            ">
              <MapPin size={22} />
            </div>


            <div>

              <h3 className="font-bold text-lg text-[#31572c]">
                20 Minutes From Bhopal Airport
              </h3>

              <p className="text-sm text-[#578B07]">
                Well Connected By Road & Rail
              </p>

            </div>

          </div>


        </div>

      </div>


    </div>

  </div>
</section>

      {/* ========================================================= */}
      {/* QUICK STATS */}
      {/* ========================================================= */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {quickStats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-gray-200 p-10 hover:shadow-xl transition duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#ecf39e] flex items-center justify-center">

                    <Icon className="text-[#31572c]" size={30} />

                  </div>

                  <h2 className="text-4xl font-bold mt-8 text-[#31572c]">
                    {item.value}
                  </h2>

                  <p className="mt-3 text-gray-600">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* WAYS TO REACH US AT A GLANCE */}
      {/* ========================================================= */}
<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        How Can We Help
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-3">
        Reach The Right Team, Faster
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        From admissions to grievances, we&apos;ve organised our contact channels
        by purpose so your query reaches the right people the first time.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {categories.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#31572c]">
            {item.title}
          </h3>

          <p className="text-gray-600 mt-4 leading-8">
            {item.text}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* FULL CONTACT DIRECTORY */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#31572c]">
        Contact Directory
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#1d3d20] mt-4">
        Department-Wise Contacts
      </h2>

      <div className="w-24 h-1 bg-[#d4a14d] mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {contactDirectory.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="
              group
              bg-white
              rounded-[26px]
              overflow-hidden
              shadow-lg
              border
              border-gray-100
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-500
              p-7
            "
          >

            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#31572c] text-[#ecf39e] flex items-center justify-center">
                <Icon size={22} />
              </div>

              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryStyles[item.category]}`}
              >
                {item.badge}
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#1d3d20] mt-6">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-3 leading-6 break-words">
              {item.desc}
            </p>

            <p className="text-sm font-semibold text-[#578B07] mt-2">
              {item.phone}
            </p>

          </div>
        );
      })}

    </div>
  </div>
</section>

{/* ========================================================= */}
{/* MAP + CALL TO ACTION */}
{/* ========================================================= */}

<section className="pb-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="relative rounded-[36px] overflow-hidden shadow-2xl min-h-[320px]">

      {/* Map Background */}
      <iframe
        title="IPS University Location"
        src="https://www.google.com/maps?q=Bhopal,Madhya%20Pradesh&output=embed"
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>


      {/* Left Green Blend */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#31572c]
          via-[#31572c]/85
          via-50%
          to-transparent
          pointer-events-none
        "
      ></div>


      {/* Content */}
      <div
        className="
          relative
          z-10
          px-8
          md:px-16
          py-14
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-10
          pointer-events-none
        "
      >

        <div className="max-w-3xl">

          <span className="uppercase tracking-[3px] text-[#cfe8a9] font-semibold text-sm">
            Get In Touch
          </span>


          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Have A Question?
            <br />
            Send Us A Message.
          </h2>


          <p className="text-[#d8e8d2] mt-5 max-w-2xl leading-7 text-sm md:text-base">
            Fill out our online enquiry form and our team will get back to
            you within 24 hours on working days.
          </p>

        </div>


        <button
          className="
            bg-white
            text-[#31572c]
            px-8
            py-4
            rounded-full
            font-semibold
            hover:bg-[#ecf39e]
            transition
            duration-300
            shadow-lg
            whitespace-nowrap
            pointer-events-auto
            flex
            items-center
            gap-2
          "
        >
          <Send size={18} />
          Send Enquiry
        </button>


      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* GOOD TO KNOW */}
{/* ========================================================= */}



<section className="py-24 bg-[#f8faf7]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#8BAE45] font-semibold">
        Before You Reach Out
      </span>

      <h2 className="text-4xl font-bold text-[#31572c] mt-4">
        Good To Know
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        A few things that will help you get a faster, more helpful response
        from our team.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {generalTerms.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
          >
            <Icon className="text-[#31572c] w-10 h-10 mb-5" />
            <h3 className="text-xl font-bold text-[#31572c]">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-3 leading-7">
              {item.text}
            </p>
          </div>
        );
      })}

    </div>


    {/* Social Links */}
    <div className="mt-16 flex flex-col items-center gap-6">

      <p className="text-gray-600 font-medium">Follow Us</p>

      <div className="flex items-center gap-4">

        {socialLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href="#"
              aria-label={item.label}
              className="
                w-12
                h-12
                rounded-full
                bg-white
                border
                border-gray-200
                flex
                items-center
                justify-center
                text-[#31572c]
                hover:bg-[#31572c]
                hover:text-white
                transition
                duration-300
                shadow-sm
              "
            >
              <Icon size={20} />
            </a>
          );
        })}

      </div>

    </div>

  </div>
</section>
      {/*
          NEXT SECTION:

          1. Online Enquiry / Contact Form
          2. Department-Wise Faculty Directory
          3. Campus Map With Building-Wise Markers
          4. Live Chat / WhatsApp Support Widget
      */}

    </div>
  );
};

export default ContactInfo;