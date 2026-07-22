import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Target,
  Users,
  CalendarDays,
  Trophy,
  BriefcaseBusiness,
  Cpu,
} from "lucide-react";
import {
  Code2,
  Laptop,
  
  Mic2,
  Users2,
  Network,
  CheckCircle2,
  
} from "lucide-react";
import {
  UserRound,
  GraduationCap,

  Mail,
  Phone,
} from "lucide-react";

const aboutImage =
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80";

const csiStats = [
  {
    icon: Users,
    value: "300+",
    label: "Student Members",
  },
  {
    icon: CalendarDays,
    value: "40+",
    label: "Technical Events",
  },
  {
    icon: Trophy,
    value: "25+",
    label: "Competitions",
  },
  {
    icon: BriefcaseBusiness,
    value: "15+",
    label: "Industry Sessions",
  },
];

const activityImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";

const activities = [
  {
    icon: Code2,
    title: "Coding Competitions",
    description:
      "Participate in coding contests and problem-solving challenges to sharpen programming skills.",
  },
  {
    icon: Laptop,
    title: "Technical Workshops",
    description:
      "Hands-on sessions on web development, AI, cybersecurity, cloud computing, and emerging technologies.",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    description:
      "Collaborate in teams to solve real-world problems through innovation and technology.",
  },
  {
    icon: Mic2,
    title: "Expert Talks",
    description:
      "Interactive sessions with industry professionals, entrepreneurs, and technology experts.",
  },
];

const benefits = [
  "Hands-on technical learning",
  "Leadership & teamwork opportunities",
  "Networking with industry experts",
  "Participation certificates",
  "Project development exposure",
  "Career guidance & mentorship",
];



const facultyImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80";

const studentImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80";

const heroImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80";

const CSI = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[430px] overflow-hidden mt-30">

        <img
          src={heroImage}
          alt="Computer Society of India"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#31572c]/90
            via-[#31572c]/65
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
            Professional Club
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
            Computer Society
            <br />
            of India (CSI)
          </h1>

          <p
            className="
              text-white/80
              max-w-2xl
              mt-5
              leading-7
            "
          >
            The Computer Society of India (CSI) Student Chapter at IPS
            University provides a platform for aspiring technologists to
            develop technical expertise, innovation, leadership, and
            professional networking through workshops, coding events,
            seminars, and industry interaction.
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
              to="/students-zone/professional-clubs/csi"
              className="hover:text-[#cfe8a9] transition"
            >
              Professional Clubs
            </Link>

            <ArrowRight size={16} />

            <span className="text-[#cfe8a9] font-semibold">
              CSI
            </span>

          </div>

        </div>

      </section>

      {/* ================= ABOUT CSI ================= */}
      {/* ================= ABOUT CSI ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div className="relative">

        <img
          src={aboutImage}
          alt="CSI Student Chapter"
          className="rounded-[30px] w-full h-[620px] object-cover shadow-xl"
        />

        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 shadow-xl">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

              <Cpu
                className="text-[var(--forest)]"
                size={30}
              />

            </div>

            <div>

              <h3 className="text-2xl font-bold text-[var(--forest)]">
                Innovation Through Technology
              </h3>

              <p className="text-gray-600 mt-2">
                Empowering future technology leaders.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Right */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
          About CSI
        </span>

        <h2
          className="text-5xl font-bold text-[var(--forest)] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Building Future
          <br />
          Technology Leaders
        </h2>

        <p className="mt-7 text-lg leading-8 text-gray-600">

          The Computer Society of India (CSI) Student Chapter provides
          students with opportunities to enhance their technical skills,
          collaborate on innovative projects, and participate in national
          and institutional technical activities.

        </p>

        <p className="mt-6 text-gray-600 leading-8">

          Through coding competitions, workshops, seminars, hackathons,
          expert lectures, and industry interaction, CSI nurtures technical
          excellence, creativity, leadership, and professional development
          among aspiring engineers.

        </p>

        {/* Mission */}

        <div className="mt-10 p-6 rounded-[24px] bg-[#f8fbf7] border-l-4 border-[var(--grass)]">

          <div className="flex gap-4">

            <Target
              className="text-[var(--forest)] mt-1"
              size={28}
            />

            <div>

              <h3 className="text-2xl font-bold text-[var(--forest)]">
                Our Mission
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                To cultivate innovation, technical competence, teamwork,
                and leadership by connecting students with emerging
                technologies and industry best practices.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* Statistics */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

      {csiStats.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="text-center bg-[#f8fbf7] rounded-[24px] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >

            <div className="mx-auto w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

              <Icon
                size={30}
                className="text-[var(--forest)]"
              />

            </div>

            <h3 className="text-4xl font-bold text-[var(--forest)] mt-6">
              {item.value}
            </h3>

            <p className="text-gray-600 mt-3">
              {item.label}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>

      {/* Next Part */}

      {/* ================= ACTIVITIES & BENEFITS ================= */}
      {/* ================= ACTIVITIES & BENEFITS ================= */}

<section className="py-24 bg-[#f8fbf7] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Student Engagement
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Activities &
        <br />
        Member Benefits
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        CSI organizes diverse technical activities that encourage innovation,
        collaboration, and continuous learning while helping students prepare
        for successful careers in technology.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

      {/* Activities */}

      <div className="grid sm:grid-cols-2 gap-6">

        {activities.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="bg-white rounded-[24px] p-7 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
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

              <p className="text-gray-600 leading-7 mt-4">
                {item.description}
              </p>

            </div>

          );

        })}

      </div>

      {/* Right */}

      <div>

        <img
          src={activityImage}
          alt="CSI Activities"
          className="rounded-[30px] w-full h-[350px] object-cover shadow-xl"
        />

        <div className="bg-white rounded-[30px] p-8 shadow-xl mt-8">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

              <Network
                size={30}
                className="text-[var(--forest)]"
              />

            </div>

            <div>

              <h3 className="text-3xl font-bold text-[var(--forest)]">
                Why Join CSI?
              </h3>

              <p className="text-gray-600 mt-2">
                Grow beyond the classroom.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">

            {benefits.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-3"
              >

                <CheckCircle2
                  size={20}
                  className="text-[var(--grass)] mt-1"
                />

                <span className="text-gray-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

          <button className="mt-10 inline-flex items-center gap-3 bg-[var(--forest)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--grass)] transition-all duration-300">

            Become a CSI Member

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Next Part */}

      {/* ================= FACULTY COORDINATOR ================= */}
      {/* ================= LEADERSHIP & MEMBERSHIP ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Leadership
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Meet Our Coordinators
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Guided by experienced faculty and enthusiastic student leaders, the
        CSI Student Chapter promotes technical excellence, innovation, and
        collaborative learning across the campus.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8 mt-20">

      {/* Faculty */}

      <div className="bg-[#f8fbf7] rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

        <img
          src={facultyImage}
          alt="Faculty Coordinator"
          className="w-full h-80 object-cover"
        />

        <div className="p-8">

          <div className="flex items-center gap-3">

            <UserRound
              className="text-[var(--forest)]"
              size={24}
            />

            <span className="text-sm uppercase tracking-[3px] text-[var(--grass)] font-semibold">
              Faculty Coordinator
            </span>

          </div>

          <h3 className="text-2xl font-bold text-[var(--forest)] mt-5">
            Dr. ABC XYZ
          </h3>

          <p className="text-gray-600 mt-2">
            Department of Computer Science & Engineering
          </p>

          <div className="space-y-3 mt-6">

            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={18} />
              faculty@ipsuniversity.ac.in
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={18} />
              +91 XXXXX XXXXX
            </div>

          </div>

        </div>

      </div>

      {/* Student Coordinator */}

      <div className="bg-[#f8fbf7] rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

        <img
          src={studentImage}
          alt="Student Coordinator"
          className="w-full h-80 object-cover"
        />

        <div className="p-8">

          <div className="flex items-center gap-3">

            <GraduationCap
              className="text-[var(--forest)]"
              size={24}
            />

            <span className="text-sm uppercase tracking-[3px] text-[var(--grass)] font-semibold">
              Student Coordinator
            </span>

          </div>

          <h3 className="text-2xl font-bold text-[var(--forest)] mt-5">
            Student Name
          </h3>

          <p className="text-gray-600 mt-2">
            B.Tech Computer Science Engineering
          </p>

          <div className="space-y-3 mt-6">

            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={18} />
              student@ipsuniversity.ac.in
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={18} />
              +91 XXXXX XXXXX
            </div>

          </div>

        </div>

      </div>

      {/* CTA */}

      <div className="rounded-[30px] bg-[var(--forest)] p-10 text-white flex flex-col justify-center">

        <span className="uppercase tracking-[4px] text-[#cfe8a9] text-sm font-semibold">
          Join Our Community
        </span>

        <h3
          className="text-4xl font-bold mt-5 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Become a CSI
          <br />
          Student Member
        </h3>

        <p className="mt-6 leading-8 text-white/85">
          Join the Computer Society of India Student Chapter to participate
          in technical workshops, coding competitions, hackathons, expert
          talks, industry interactions, and leadership activities that help
          you grow professionally.
        </p>

        <button className="mt-10 inline-flex w-fit items-center gap-3 bg-white text-[var(--forest)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--leaf)] transition-all duration-300">

          Join CSI

          <ArrowRight size={20} />

        </button>

      </div>

    </div>

  </div>

</section>

      {/* Next Part */}

    </>
  );
};

export default CSI;