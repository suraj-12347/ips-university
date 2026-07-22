import React from "react";
import { ArrowRight } from "lucide-react";
import {Link} from 'react-router-dom'
import {
  Users,
  CalendarDays,
  Megaphone,
  Trophy,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";
import {
  Mail,
 CircleFadingPlus,
  GraduationCap,
} from "lucide-react";



// Hero
const studentsMeeting =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80";

// About
const about1 =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80";

const about2 =
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80";

// Council Members
const member1 =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80";

const member2 =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80";

const member3 =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80";

const member4 =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80";

const member5 =
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80";

const member6 =
  "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80";

// Events
const event1 =
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80";

const event2 =
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80";

const event3 =
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80";

const event4 =
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80";

const councilMembers = [
  {
    image: member1,
    name: "Student Name",
    role: "President",
    dept: "Computer Science Engineering",
  },
  {
    image: member2,
    name: "Student Name",
    role: "Vice President",
    dept: "Mechanical Engineering",
  },
  {
    image: member3,
    name: "Student Name",
    role: "General Secretary",
    dept: "MBA",
  },
  {
    image: member4,
    name: "Student Name",
    role: "Treasurer",
    dept: "Civil Engineering",
  },
  {
    image: member5,
    name: "Student Name",
    role: "Cultural Coordinator",
    dept: "Pharmacy",
  },
  {
    image: member6,
    name: "Student Name",
    role: "Technical Coordinator",
    dept: "Computer Science Engineering",
  },
];

const councilEvents = [
  {
    title: "Freshers' Orientation",
    image: event1,
    description:
      "Welcoming new students through interactive sessions, campus tours, and engaging activities to help them begin their academic journey with confidence.",
  },
  {
    title: "Cultural & Annual Fest",
    image: event2,
    description:
      "Organizing music, dance, drama, literary, and cultural competitions that celebrate creativity, talent, and campus diversity.",
  },
  {
    title: "Social Awareness Drives",
    image: event3,
    description:
      "Conducting tree plantation, blood donation camps, cleanliness campaigns, and community outreach initiatives for social impact.",
  },
  {
    title: "Technical & Sports Events",
    image: event4,
    description:
      "Hosting hackathons, coding competitions, seminars, sports tournaments, and leadership workshops throughout the academic year.",
  },
];

const StudentsCouncil = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[430px] overflow-hidden mt-30">

  <img
    src={studentsMeeting}
    alt="Student's Council"
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
      Student Leadership
    </span>

    <h1
      className="
        text-5xl
        md:text-6xl
        font-bold
        text-white
        mt-4
      "
      style={{ fontFamily: "Fraunces, serif" }}
    >
      Student's Council
    </h1>

    <p
      className="
        text-white/80
        max-w-2xl
        mt-5
        leading-7
      "
    >
      The Student's Council represents the voice of students, fostering
      leadership, collaboration, and active participation in academic,
      cultural, technical, sports, and social initiatives that enrich campus
      life.
    </p>

    {/* Breadcrumb */}

    <div className="flex items-center text-white gap-2 mt-8 text-sm">

      <Link
        to="/"
        className="hover:text-[#cfe8a9] transition"
      >
        Home
      </Link>

      <ArrowRight size={16} />

      <Link
        to="/students-zone/students-council"
        className="hover:text-[#cfe8a9] transition"
      >
        Student Zone
      </Link>

      <ArrowRight size={16} />

      <span className="text-[#cfe8a9] font-semibold">
        Student's Council
      </span>

    </div>

  </div>

</section>

      {/* ================= ABOUT SECTION ================= */}
      {/* ================= ABOUT SECTION ================= */}

<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Images */}
      <div className="relative">

        <img
          src={about1}
          alt=""
          className="rounded-[32px] w-full h-[520px] object-cover shadow-2xl"
        />

        <img
          src={about2}
          alt=""
          className="absolute -bottom-10 -right-8 w-[260px] h-[180px] rounded-3xl object-cover border-[8px] border-white shadow-xl hidden md:block"
        />

        <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[var(--leaf)] opacity-40 blur-3xl"></div>

      </div>

      {/* Content */}
      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
          About Student Council
        </span>

        <h2
          className="text-5xl font-bold text-[var(--forest)] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Empowering Students <br />
          Through Leadership
        </h2>

        <p className="mt-7 text-gray-600 leading-8 text-lg">
          The Student's Council acts as the bridge between students and
          the institution, encouraging active participation in campus life.
          It nurtures leadership, teamwork, communication, and responsibility
          while ensuring that students have opportunities to contribute
          meaningfully to academic, cultural, technical, sports, and
          community-driven initiatives.
        </p>

        <p className="mt-5 text-gray-600 leading-8">
          Working closely with faculty coordinators and university
          administration, the council organizes events, addresses student
          concerns, promotes innovation, and creates an inclusive campus
          environment where every student can grow personally and
          professionally.
        </p>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-5 mt-10">

          <div className="bg-[#f8fbf7] rounded-3xl p-6 border border-green-100">
            <h3 className="text-4xl font-bold text-[var(--forest)]">
              50+
            </h3>

            <p className="text-gray-600 mt-2">
              Student Leaders
            </p>
          </div>

          <div className="bg-[#f8fbf7] rounded-3xl p-6 border border-green-100">
            <h3 className="text-4xl font-bold text-[var(--forest)]">
              40+
            </h3>

            <p className="text-gray-600 mt-2">
              Campus Events
            </p>
          </div>

          <div className="bg-[#f8fbf7] rounded-3xl p-6 border border-green-100">
            <h3 className="text-4xl font-bold text-[var(--forest)]">
              5000+
            </h3>

            <p className="text-gray-600 mt-2">
              Student Participation
            </p>
          </div>

          <div className="bg-[#f8fbf7] rounded-3xl p-6 border border-green-100">
            <h3 className="text-4xl font-bold text-[var(--forest)]">
              20+
            </h3>

            <p className="text-gray-600 mt-2">
              Annual Initiatives
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Next Part */}

      {/* ================= RESPONSIBILITIES ================= */}
      {/* ================= RESPONSIBILITIES ================= */}

<section className="py-24 bg-[#f8fbf7] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        What We Do
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Council Responsibilities
      </h2>

      <p className="mt-6 text-gray-600 leading-8 text-lg">
        The Student's Council works collaboratively with students and faculty
        to organize meaningful activities, encourage leadership, and create
        a vibrant, inclusive campus experience.
      </p>

    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {[
        {
          icon: Users,
          title: "Student Representation",
          desc: "Represent student interests and maintain effective communication between students and the administration.",
        },
        {
          icon: CalendarDays,
          title: "Campus Events",
          desc: "Plan and coordinate academic, cultural, technical, sports, and recreational events throughout the year.",
        },
        {
          icon: Megaphone,
          title: "Student Voice",
          desc: "Collect suggestions and feedback while promoting open communication across the campus community.",
        },
        {
          icon: Trophy,
          title: "Leadership Development",
          desc: "Encourage confidence, teamwork, responsibility, and decision-making among student leaders.",
        },
        {
          icon: HeartHandshake,
          title: "Community Service",
          desc: "Lead awareness campaigns, social outreach programs, environmental drives, and volunteer initiatives.",
        },
        {
          icon: Lightbulb,
          title: "Innovation & Engagement",
          desc: "Support creative ideas, student clubs, workshops, competitions, and collaborative learning activities.",
        },
      ].map((item, index) => {
        const Icon = item.icon;

        return (

          <div
            key={index}
            className="group bg-white rounded-[28px] p-8 shadow-sm border border-gray-100 hover:border-[var(--grass)] hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
          >

            <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center group-hover:bg-[var(--forest)] transition-all duration-500">

              <Icon className="w-8 h-8 text-[var(--forest)] group-hover:text-white" />

            </div>

            <h3 className="text-2xl font-bold text-[var(--forest)] mt-6">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-7 mt-4">
              {item.desc}
            </p>

          </div>

        );
      })}

    </div>

  </div>

</section>

      {/* Next Part */}

      {/* ================= COUNCIL MEMBERS ================= */}
      {/* ================= COUNCIL MEMBERS ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Leadership Team
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Meet Our Student Leaders
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Our Student Council is led by enthusiastic individuals who work
        together to create an engaging, inclusive, and vibrant campus
        experience for every student.
      </p>

    </div>

    {/* Cards */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {councilMembers.map((member, index) => (

        <div
          key={index}
          className="group rounded-[28px] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >

          {/* Image */}

          <div className="relative overflow-hidden">

            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[360px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,40,20,.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          </div>

          {/* Content */}

          <div className="p-7">

            <h3 className="text-2xl font-bold text-[var(--forest)]">
              {member.name}
            </h3>

            <p className="text-[var(--grass)] font-semibold mt-2">
              {member.role}
            </p>

            <div className="flex items-center gap-2 mt-4 text-gray-500">

              <GraduationCap size={18} />

              <span>{member.dept}</span>

            </div>

            {/* Icons */}

            <div className="flex gap-3 mt-6">

              <button className="w-11 h-11 rounded-full bg-[#f5f8f4] hover:bg-[var(--forest)] hover:text-white transition flex items-center justify-center">

                <Mail size={18} />

              </button>

              <button className="w-11 h-11 rounded-full bg-[#f5f8f4] hover:bg-[var(--forest)] hover:text-white transition flex items-center justify-center">

               <CircleFadingPlus size={18} />

              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* Next Part */}

      {/* ================= EVENTS & INITIATIVES ================= */}
      {/* ================= EVENTS & INITIATIVES ================= */}

<section className="py-24 bg-[#f8fbf7] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Campus Activities
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Events & Initiatives
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Throughout the academic year, the Student's Council organizes
        diverse events that encourage participation, creativity,
        innovation, leadership, and community engagement.
      </p>

    </div>

    <div className="mt-20 space-y-12">

      {councilEvents.map((event, index) => (

        <div
          key={index}
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* Image */}

          <div className="overflow-hidden rounded-[30px]">

            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
            />

          </div>

          {/* Content */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-[var(--leaf)] text-[var(--forest)] font-semibold text-sm">
              Student Activity
            </span>

            <h3
              className="text-4xl font-bold text-[var(--forest)] mt-6"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              {event.title}
            </h3>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              {event.description}
            </p>

            <button className="mt-8 px-6 py-3 rounded-full bg-[var(--forest)] text-white hover:bg-[var(--grass)] transition-all duration-300">
              Learn More
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* Next Part */}

      {/* ================= CTA ================= */}

      {/* Next Part */}

      {/* ================= FINAL CTA ================= */}

<section className="relative py-24 overflow-hidden bg-[var(--forest)]">

  {/* Background Blur */}
  <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[var(--grass)]/20 blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--leaf)]">
          Join Our Community
        </span>

        <h2
          className="text-5xl md:text-6xl font-bold text-white mt-5 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Lead Today.
          <br />
          Inspire Tomorrow.
        </h2>

        <p className="mt-8 text-white/85 text-lg leading-8 max-w-xl">
          The Student's Council provides students with opportunities to
          develop leadership, teamwork, communication, and organizational
          skills while contributing to a vibrant and inclusive campus
          community.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">

          <button className="px-8 py-4 rounded-full bg-white text-[var(--forest)] font-semibold hover:scale-105 transition-all duration-300">
            Contact Student Affairs
          </button>

          <button className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-[var(--forest)] transition-all duration-300">
            View Student Activities
          </button>

        </div>

      </div>

      {/* Right */}

      <div className="grid gap-6">

        <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-7 border border-white/10">

          <h3 className="text-3xl font-bold text-white">
            Leadership
          </h3>

          <p className="text-white/75 mt-3 leading-7">
            Build confidence by leading student initiatives,
            projects, and campus events.
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-7 border border-white/10">

          <h3 className="text-3xl font-bold text-white">
            Collaboration
          </h3>

          <p className="text-white/75 mt-3 leading-7">
            Work closely with faculty, administration,
            and fellow students to create meaningful experiences.
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-7 border border-white/10">

          <h3 className="text-3xl font-bold text-white">
            Service
          </h3>

          <p className="text-white/75 mt-3 leading-7">
            Contribute towards community outreach,
            social responsibility, and student welfare initiatives.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
    </>
  );
};

export default StudentsCouncil;