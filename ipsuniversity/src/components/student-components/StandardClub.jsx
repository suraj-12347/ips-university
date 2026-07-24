import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80";


  
const highlights = [
  {
    number: "500+",
    title: "Active Members",
    desc: "Students actively participating in club initiatives throughout the academic year.",
  },
  {
    number: "50+",
    title: "Events Organized",
    desc: "Technical, cultural, social, and personality development activities conducted annually.",
  },
  {
    number: "20+",
    title: "Workshops",
    desc: "Interactive sessions focused on leadership, communication, innovation, and career growth.",
  },
  {
    number: "100+",
    title: "Certificates Awarded",
    desc: "Recognizing participation, excellence, teamwork, and outstanding contributions.",
  },
];


const activities = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    title: "Leadership Development",
    description:
      "Interactive leadership programs, communication workshops, personality development sessions, and team-building activities that prepare students for professional success.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    title: "Social & Community Outreach",
    description:
      "Blood donation camps, cleanliness drives, awareness campaigns, environmental initiatives, and community service projects that promote responsible citizenship.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    title: "Cultural & Creative Events",
    description:
      "Talent shows, cultural festivals, art competitions, music performances, photography, and creative activities that celebrate diversity and student talent.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
];

const facultyImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80";


const studentImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80";
  const ctaImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80";



const StandardClub = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[430px] overflow-hidden mt-30">

        <img
          src={heroImage}
          alt="Standard Club"
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
            Student Development Club
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
            Standard
            <br />
            Club
          </h1>

          <p
            className="
              text-white/80
              max-w-2xl
              mt-5
              leading-7
            "
          >
            Standard Club encourages students to develop leadership,
            creativity, communication, teamwork, and organizational
            skills through cultural activities, technical events,
            workshops, competitions, and community engagement.
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
              to="/students-zone/student-clubs"
              className="hover:text-[#cfe8a9] transition"
            >
              Student Clubs
            </Link>

            <ArrowRight size={16} />

            <span className="text-[#cfe8a9] font-semibold">
              Standard Club
            </span>

          </div>

        </div>

      </section>

      {/* Next Sections */}

      {/* ================= ABOUT STANDARD CLUB ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Image */}

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
          alt="Standard Club"
          className="rounded-[30px] w-full h-[620px] object-cover shadow-xl"
        />

        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 shadow-xl">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

              <span className="text-3xl">🌟</span>

            </div>

            <div>

              <h3 className="text-2xl font-bold text-[var(--forest)]">
                Learn • Lead • Inspire
              </h3>

              <p className="text-gray-600 mt-2">
                Shaping confident leaders for tomorrow.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Right Content */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
          About Standard Club
        </span>

        <h2
          className="text-5xl font-bold text-[var(--forest)] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Building Future
          <br />
          Leaders Beyond
          <br />
          The Classroom
        </h2>

        <p className="mt-7 text-lg leading-8 text-gray-600">

          Standard Club is a vibrant student-driven platform dedicated to
          nurturing leadership, teamwork, creativity, communication, and
          social responsibility. The club encourages students to actively
          participate in academic, cultural, technical, and community-based
          initiatives that contribute to their holistic development.

        </p>

        <p className="mt-6 text-gray-600 leading-8">

          Through engaging workshops, competitions, awareness campaigns,
          social outreach programs, cultural celebrations, and collaborative
          activities, members gain valuable practical experience, confidence,
          and lifelong interpersonal skills while creating unforgettable
          memories on campus.

        </p>

        {/* Vision */}

        <div className="mt-10 p-6 rounded-[24px] bg-[#f8fbf7] border-l-4 border-[var(--grass)]">

          <h3 className="text-2xl font-bold text-[var(--forest)]">
            Our Vision
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            To create a dynamic community where students discover their
            potential, develop leadership qualities, embrace innovation,
            and become responsible professionals capable of making a
            meaningful impact on society.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= CLUB HIGHLIGHTS ================= */}


<section className="py-24 bg-[#f8fbf7]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Club Highlights
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Inspiring Growth
        <br />
        Through Every Activity
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Standard Club provides numerous opportunities for students to learn,
        collaborate, lead, and contribute through engaging activities that
        enrich campus life and foster personal development.
      </p>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

      {highlights.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >

          <h3 className="text-5xl font-bold text-[var(--forest)]">
            {item.number}
          </h3>

          <h4 className="text-2xl font-bold text-[var(--forest)] mt-5">
            {item.title}
          </h4>

          <p className="text-gray-600 leading-7 mt-4">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>



{/* ================= SIGNATURE ACTIVITIES ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Signature Activities
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Experiences That
        <br />
        Shape Every Student
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Every activity is designed to inspire confidence, teamwork,
        creativity, and leadership while creating memorable campus
        experiences.
      </p>

    </div>

    <div className="space-y-12 mt-20">

      {activities.map((item, index) => (

        <div
          key={index}
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[420px] object-cover rounded-[30px] shadow-xl"
          />

          <div>

            <span className="uppercase tracking-[3px] text-sm font-semibold text-[var(--grass)]">
              Activity 0{index + 1}
            </span>

            <h3
              className="text-4xl font-bold text-[var(--forest)] mt-4"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              {item.title}
            </h3>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              {item.description}
            </p>

            <button className="mt-8 px-7 py-4 rounded-full bg-[var(--forest)] text-white font-semibold hover:bg-[var(--grass)] transition">
              Explore More
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= EVENT GALLERY ================= */}

<section className="py-24 bg-[#f8fbf7] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Event Gallery
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Capturing Moments
        <br />
        That Inspire
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Explore memorable moments from workshops, leadership programs,
        cultural celebrations, community service initiatives, competitions,
        and student engagement activities.
      </p>

    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-6 mt-20">

      {galleryImages.map((img, index) => {

        const layout = [
          "lg:row-span-2",
          "",
          "lg:col-span-2",
          "",
          "",
          "lg:row-span-2",
          "",
          "",
        ];

        return (

          <div
            key={index}
            className={`relative overflow-hidden rounded-[30px] cursor-pointer group ${layout[index]}`}
          >

            <img
              src={img}
              alt=""
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/90 via-[var(--forest)]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">

              <div>

                <span className="text-[#cfe8a9] text-sm uppercase tracking-[3px]">
                  Standard Club
                </span>

                <h3 className="text-white text-2xl font-bold mt-2">
                  Campus Memories
                </h3>

              </div>

            </div>

          </div>

        );

      })}

    </div>

  </div>

</section>



{/* ================= FACULTY COORDINATOR ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Faculty Coordinator
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Guiding Every Step
        <br />
        Towards Excellence
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        The Faculty Coordinator mentors club members, encourages innovation,
        and provides continuous guidance to ensure successful planning,
        execution, and overall development of student-led activities.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

      {/* Image */}

      <div className="relative">

        <img
          src={facultyImage}
          alt="Faculty Coordinator"
          className="w-full h-[600px] object-cover rounded-[30px] shadow-xl"
        />

        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 shadow-lg">

          <span className="uppercase tracking-[3px] text-sm font-semibold text-[var(--grass)]">
            Faculty Coordinator
          </span>

          <h3 className="text-2xl font-bold text-[var(--forest)] mt-2">
            Dr. ABC XYZ
          </h3>

          <p className="text-gray-600 mt-2">
            Department of Computer Science & Engineering
          </p>

        </div>

      </div>

      {/* Content */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
          Leadership & Mentorship
        </span>

        <h3
          className="text-4xl font-bold text-[var(--forest)] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Empowering Students
          <br />
          Through Guidance
        </h3>

        <p className="mt-7 text-gray-600 leading-8">
          Our Faculty Coordinator plays a vital role in mentoring students,
          promoting leadership, encouraging teamwork, and supporting innovative
          ideas. Their guidance helps members organize impactful events,
          strengthen professional skills, and create meaningful learning
          experiences beyond academics.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">

          <div className="bg-[#f8fbf7] rounded-2xl p-6">
            <h4 className="font-bold text-[var(--forest)] text-xl">
              Experience
            </h4>
            <p className="text-gray-600 mt-2">
              15+ Years in Teaching & Student Mentorship
            </p>
          </div>

          <div className="bg-[#f8fbf7] rounded-2xl p-6">
            <h4 className="font-bold text-[var(--forest)] text-xl">
              Focus Areas
            </h4>
            <p className="text-gray-600 mt-2">
              Leadership, Innovation, Student Development & Event Management
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ================= STUDENT COORDINATOR ================= */}

<section className="py-24 bg-[#f8fbf7] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Student Coordinator
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Leading with Passion
        <br />
        Inspiring Every Member
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        The Student Coordinator serves as the bridge between members and the
        faculty, ensuring the smooth planning and execution of club activities
        while encouraging teamwork, creativity, and active participation.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

      {/* Content */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
          Student Leadership
        </span>

        <h3
          className="text-4xl font-bold text-[var(--forest)] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Students Leading
          <br />
          Students
        </h3>

        <p className="mt-7 text-gray-600 leading-8">
          The Student Coordinator motivates members, manages club activities,
          coordinates with faculty, and promotes collaboration among students.
          Their leadership ensures every event is organized efficiently while
          creating opportunities for members to learn, contribute, and grow.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h4 className="text-xl font-bold text-[var(--forest)]">
              Responsibilities
            </h4>

            <p className="text-gray-600 mt-2">
              Event Planning, Team Coordination & Member Engagement.
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h4 className="text-xl font-bold text-[var(--forest)]">
              Leadership
            </h4>

            <p className="text-gray-600 mt-2">
              Communication, Collaboration & Organizational Skills.
            </p>

          </div>

        </div>

      </div>

      {/* Image */}

      <div className="relative">

        <img
          src={studentImage}
          alt="Student Coordinator"
          className="w-full h-[600px] object-cover rounded-[30px] shadow-xl"
        />

        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 shadow-lg">

          <span className="uppercase tracking-[3px] text-sm font-semibold text-[var(--grass)]">
            Student Coordinator
          </span>

          <h3 className="text-2xl font-bold text-[var(--forest)] mt-2">
            Student Name
          </h3>

          <p className="text-gray-600 mt-2">
            B.Tech Computer Science & Engineering
          </p>

        </div>

      </div>

    </div>

  </div>

</section>



{/* ================= JOIN STANDARD CLUB ================= */}

<section className="relative py-28 overflow-hidden">

  {/* Background */}

  <img
    src={ctaImage}
    alt="Join Standard Club"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-[var(--forest)]/85" />

  {/* Content */}

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
      Become a Member
    </span>

    <h2
      className="text-5xl md:text-6xl font-bold text-white mt-5 leading-tight"
      style={{ fontFamily: "Fraunces, serif" }}
    >
      Be a Part of
      <br />
      Standard Club
    </h2>

    <p className="mt-8 text-lg leading-8 text-white/85 max-w-3xl mx-auto">
      Join a vibrant community of passionate students, participate in
      exciting events, develop leadership qualities, enhance your
      creativity, and make unforgettable memories throughout your
      university journey.
    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-12">

      <button className="px-8 py-4 rounded-full bg-white text-[var(--forest)] font-semibold hover:bg-[var(--leaf)] transition-all duration-300">
        Join Now
      </button>

      <button className="px-8 py-4 rounded-full border border-white/30 text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300">
        Explore Activities
      </button>

    </div>

  </div>

</section>

    </>
  );
};

export default StandardClub;