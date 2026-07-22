import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Lightbulb,
  Users,
  CalendarDays,
  Award,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import {
  Presentation,
  FlaskConical,
  Rocket,
  Briefcase,
  CheckCircle2,
  Mail,
  Phone,Sparkles
  
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1800&q=80";


  const aboutImage =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80";

const isteStats = [
  {
    icon: Users,
    value: "350+",
    label: "Student Members",
  },
  {
    icon: CalendarDays,
    value: "50+",
    label: "Technical Programs",
  },
  {
    icon: Award,
    value: "20+",
    label: "Innovation Projects",
  },
  {
    icon: BookOpen,
    value: "30+",
    label: "Expert Sessions",
  },
];



const activityImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";

const isteActivities = [
  {
    icon: Presentation,
    title: "Technical Seminars",
    description:
      "Expert talks and seminars on emerging technologies, engineering trends, and innovation.",
  },
  {
    icon: FlaskConical,
    title: "Project Exhibitions",
    description:
      "Students showcase innovative projects, research ideas, and technical prototypes.",
  },
  {
    icon: Rocket,
    title: "Innovation Challenges",
    description:
      "Competitions designed to encourage creativity, design thinking, and practical problem-solving.",
  },
  {
    icon: Briefcase,
    title: "Career Development",
    description:
      "Training programs on aptitude, communication, leadership, and employability skills.",
  },
];

const isteBenefits = [
  "Technical skill enhancement",
  "Innovation & research exposure",
  "Leadership development",
  "Industry interaction",
  "Professional networking",
  "National ISTE participation",
];

const facultyImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80";

const studentImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80";

const ISTE = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[460px] overflow-hidden mt-30">

        <img
          src={heroImage}
          alt="Indian Society for Technical Education"
          className="absolute inset-0 w-full h-full object-cover"
        />

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
            Indian Society
            <br />
            for Technical
            <br />
            Education (ISTE)
          </h1>

          <p
            className="
              text-white/80
              max-w-2xl
              mt-5
              leading-7
            "
          >
            The ISTE Student Chapter at IPS University promotes technical
            excellence, innovation, leadership, research, and professional
            development by connecting students with emerging technologies,
            industry experts, and academic opportunities.
          </p>

          <div className="flex items-center gap-2 text-white text-sm mt-8 flex-wrap">

            <Link
              to="/"
              className="hover:text-[#cfe8a9] transition"
            >
              Home
            </Link>

            <ArrowRight size={16} />

            <Link
              to="/students-zone/professional-clubs/iste"
              className="hover:text-[#cfe8a9] transition"
            >
              Professional Clubs
            </Link>

            <ArrowRight size={16} />

            <span className="text-[#cfe8a9] font-semibold">
              ISTE
            </span>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ISTE ================= */}

      {/* ================= ABOUT ISTE ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Image */}

      <div className="relative">

        <img
          src={aboutImage}
          alt="ISTE Chapter"
          className="w-full h-[620px] object-cover rounded-[30px] shadow-xl"
        />

        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-[24px] p-6 shadow-xl">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

              <GraduationCap
                size={30}
                className="text-[var(--forest)]"
              />

            </div>

            <div>

              <h3 className="text-2xl font-bold text-[var(--forest)]">
                Learning Beyond Classrooms
              </h3>

              <p className="text-gray-600 mt-2">
                Building future-ready engineers.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Right Content */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
          About ISTE
        </span>

        <h2
          className="text-5xl font-bold text-[var(--forest)] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Empowering Students
          <br />
          Through Technical
          <br />
          Excellence
        </h2>

        <p className="mt-7 text-lg leading-8 text-gray-600">

          The Indian Society for Technical Education (ISTE) Student Chapter
          encourages students to strengthen their technical knowledge,
          leadership abilities, and innovative thinking through academic,
          industrial, and professional activities.

        </p>

        <p className="mt-6 leading-8 text-gray-600">

          The chapter regularly promotes seminars, project exhibitions,
          technical paper presentations, innovation challenges, and skill
          development initiatives that prepare students for successful
          engineering careers.

        </p>

        {/* Vision */}

        <div className="mt-10 bg-[#f8fbf7] border-l-4 border-[var(--grass)] rounded-[24px] p-6">

          <div className="flex gap-4">

            <Lightbulb
              size={30}
              className="text-[var(--forest)] mt-1"
            />

            <div>

              <h3 className="text-2xl font-bold text-[var(--forest)]">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                To inspire innovation, promote quality technical education,
                and develop competent professionals capable of addressing
                future technological challenges.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* Statistics */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

      {isteStats.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="bg-[#f8fbf7] rounded-[24px] p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
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
      {/* ================= PROGRAMS & BENEFITS ================= */}

<section className="py-24 bg-[#f8fbf7] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Student Development
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Programs &
        <br />
        Member Benefits
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        ISTE organizes academic and professional activities that help
        students strengthen technical knowledge, innovation, leadership,
        and career readiness.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

      {/* Activities */}

      <div className="grid sm:grid-cols-2 gap-6">

        {isteActivities.map((item, index) => {

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

              <p className="text-gray-600 leading-7 mt-4">
                {item.description}
              </p>

            </div>

          );

        })}

      </div>

      {/* Right Side */}

      <div>

        <img
          src={activityImage}
          alt="ISTE Activities"
          className="w-full h-[350px] object-cover rounded-[30px] shadow-xl"
        />

        <div className="bg-white rounded-[30px] shadow-xl p-8 mt-8">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

              <Lightbulb
                size={30}
                className="text-[var(--forest)]"
              />

            </div>

            <div>

              <h3 className="text-3xl font-bold text-[var(--forest)]">
                Why Join ISTE?
              </h3>

              <p className="text-gray-600 mt-2">
                Learn. Innovate. Lead.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">

            {isteBenefits.map((item, index) => (

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

            Join ISTE

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Next Part */}

      {/* ================= COORDINATORS & MEMBERSHIP ================= */}
      {/* ================= LEADERSHIP & JOIN ISTE ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Chapter Leadership
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Meet Our Leadership Team
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        The ISTE Student Chapter is guided by dedicated faculty members and
        student leaders who work together to organize academic, technical,
        and professional development initiatives throughout the year.
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

          <span className="uppercase tracking-[3px] text-xs font-semibold text-[var(--grass)]">
            Faculty Coordinator
          </span>

          <h3 className="text-2xl font-bold text-[var(--forest)] mt-3">
            Dr. ABC XYZ
          </h3>

          <p className="text-gray-600 mt-2">
            Department of Computer Science & Engineering
          </p>

          <div className="space-y-4 mt-8">

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

          <span className="uppercase tracking-[3px] text-xs font-semibold text-[var(--grass)]">
            Student Coordinator
          </span>

          <h3 className="text-2xl font-bold text-[var(--forest)] mt-3">
            Student Name
          </h3>

          <p className="text-gray-600 mt-2">
            B.Tech Computer Science Engineering
          </p>

          <div className="space-y-4 mt-8">

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

      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[var(--forest)] via-[#3d6d38] to-[var(--grass)] p-10 flex flex-col justify-center">

        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5"></div>

        <div className="relative z-10">

          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center">

            <Sparkles
              size={30}
              className="text-[#dff2b3]"
            />

          </div>

          <span className="uppercase tracking-[4px] text-[#dff2b3] text-sm font-semibold mt-8 block">
            Membership
          </span>

          <h3
            className="text-4xl font-bold text-white mt-4 leading-tight"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Become an
            <br />
            ISTE Member
          </h3>

          <p className="text-white/85 leading-8 mt-6">
            Join the ISTE Student Chapter to participate in innovation
            programs, research activities, technical seminars, leadership
            initiatives, and national-level professional events that prepare
            you for a successful engineering career.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 bg-white text-[var(--forest)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--leaf)] transition-all duration-300">

            Apply for Membership

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Next Part */}

    </>
  );
};

export default ISTE;