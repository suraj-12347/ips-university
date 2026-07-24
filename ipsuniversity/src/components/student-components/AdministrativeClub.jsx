import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Flag } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80";

const aboutImage =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80";

const objectives = [
  "Develop leadership and organizational abilities.",
  "Promote discipline, responsibility, and teamwork.",
  "Support institutional events and administrative activities.",
  "Encourage student participation in decision-making.",
  "Strengthen communication between students and administration.",
  "Create a positive and inclusive campus environment.",
];


const responsibilities = [
  {
    title: "Campus Event Coordination",
    description:
      "Assist in planning, organizing, and managing academic, cultural, technical, and institutional events while ensuring smooth execution.",
  },
  {
    title: "Student Leadership",
    description:
      "Encourage students to take initiative, develop leadership qualities, and actively participate in university administration.",
  },
  {
    title: "Administrative Support",
    description:
      "Work alongside faculty and university authorities to coordinate student-related administrative activities efficiently.",
  },
  {
    title: "Communication & Collaboration",
    description:
      "Strengthen communication between students, faculty members, and various university departments.",
  },
  {
    title: "Volunteer Management",
    description:
      "Build dedicated volunteer teams, assign responsibilities, and ensure effective teamwork during university programmes.",
  },
  {
    title: "Discipline & Responsibility",
    description:
      "Promote discipline, professionalism, accountability, and ethical conduct across all club activities.",
  },
];

const activities = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    title: "Orientation & Student Induction",
    description:
      "The club assists in organizing orientation programmes to help new students become familiar with the university environment, academic culture, and campus facilities.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    title: "Event Management",
    description:
      "Members actively coordinate seminars, conferences, cultural festivals, technical events, and university celebrations while gaining practical organizational experience.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    title: "Community Engagement",
    description:
      "Students participate in awareness campaigns, social outreach programmes, cleanliness drives, and volunteer activities that promote responsible citizenship.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
];

const facultyImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80";

const studentImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80";

const ctaImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80";

const AdministrativeClub = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[430px] overflow-hidden mt-30">
        <img
          src={heroImage}
          alt="Administrative Club"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/65 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">

          <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
            Student Leadership
          </span>

          <h1
            className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Administrative
            <br />
            Club
          </h1>

          <p className="text-white/80 max-w-2xl mt-5 leading-7">
            The Administrative Club nurtures leadership, responsibility,
            teamwork, and organizational excellence by engaging students in
            campus administration, event management, and institutional
            activities while preparing them to become confident future leaders.
          </p>

          <div className="flex items-center gap-2 text-white text-sm mt-8 flex-wrap">
            <Link to="/" className="hover:text-[#cfe8a9] transition">
              Home
            </Link>

            <ArrowRight size={16} />

            <Link
              to="/students-zone/clubs"
              className="hover:text-[#cfe8a9] transition"
            >
              Student Clubs
            </Link>

            <ArrowRight size={16} />

            <span className="text-[#cfe8a9] font-semibold">
              Administrative Club
            </span>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="py-24 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}

            <div className="relative">

              <img
                src={aboutImage}
                alt="Administrative Club"
                className="rounded-[30px] w-full h-[620px] object-cover shadow-xl"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 shadow-xl">

                <h3 className="text-2xl font-bold text-[var(--forest)]">
                  Lead • Organize • Inspire
                </h3>

                <p className="text-gray-600 mt-2">
                  Empowering students through responsibility and leadership.
                </p>

              </div>

            </div>

            {/* Right */}

            <div>

              <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
                About Administrative Club
              </span>

              <h2
                className="text-5xl font-bold text-[var(--forest)] mt-4 leading-tight"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Developing Responsible
                <br />
                Student Leaders
              </h2>

              <p className="mt-7 text-lg leading-8 text-gray-600">
                The Administrative Club serves as a platform for students to
                actively contribute to campus administration, event
                coordination, leadership initiatives, and institutional
                development. Members work closely with faculty and university
                authorities to ensure smooth execution of academic, cultural,
                and social activities.
              </p>

              {/* Vision */}

              <div className="flex gap-4 mt-10 p-6 rounded-3xl bg-[#f8fbf7]">

                <Eye
                  className="text-[var(--forest)] mt-1"
                  size={28}
                />

                <div>

                  <h3 className="text-2xl font-bold text-[var(--forest)]">
                    Vision
                  </h3>

                  <p className="text-gray-600 mt-2 leading-7">
                    To develop responsible, confident, and ethical student
                    leaders who actively contribute to institutional excellence
                    and community development.
                  </p>

                </div>

              </div>

              {/* Mission */}

              <div className="flex gap-4 mt-6 p-6 rounded-3xl bg-[#f8fbf7]">

                <Flag
                  className="text-[var(--forest)] mt-1"
                  size={28}
                />

                <div>

                  <h3 className="text-2xl font-bold text-[var(--forest)]">
                    Mission
                  </h3>

                  <p className="text-gray-600 mt-2 leading-7">
                    To promote leadership, teamwork, discipline, communication,
                    and organizational skills by involving students in
                    administrative responsibilities and campus activities.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Objectives */}

          <div className="mt-24">

            <div className="text-center max-w-3xl mx-auto">

              <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
                Objectives
              </span>

              <h2
                className="text-5xl font-bold text-[var(--forest)] mt-4"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Our Core Objectives
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

              {objectives.map((item, index) => (

                <div
                  key={index}
                  className="bg-[#f8fbf7] rounded-3xl p-7 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

                    <Target
                      className="text-[var(--forest)]"
                      size={24}
                    />

                  </div>

                  <p className="mt-6 text-gray-700 leading-7">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= ROLES & RESPONSIBILITIES ================= */}

<section className="py-24 bg-[#f8fbf7]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Roles & Responsibilities
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        What We
        <br />
        Do
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        The Administrative Club plays an important role in supporting
        university activities while developing responsible student leaders
        through practical administrative experience.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">

      {responsibilities.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-[28px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >

          <div className="w-16 h-16 rounded-2xl bg-[var(--leaf)] flex items-center justify-center">

            <Target
              size={28}
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

      ))}

    </div>

  </div>

</section>

{/* ================= ACTIVITIES ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Activities
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Creating Meaningful
        <br />
        Campus Experiences
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Through collaborative initiatives and institutional programmes,
        members develop leadership, organizational, and communication
        skills while contributing to campus life.
      </p>

    </div>

    <div className="space-y-14 mt-20">

      {activities.map((item, index) => (

        <div
          key={index}
          className={`grid lg:grid-cols-2 gap-14 items-center ${
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

            <p className="mt-6 text-lg text-gray-600 leading-8">
              {item.description}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


{/* ================= GALLERY ================= */}

<section className="py-24 bg-[#f8fbf7]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Gallery
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Moments of Leadership
        <br />
        & Collaboration
      </h2>

    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

      {galleryImages.map((img, index) => (

        <div
          key={index}
          className="relative overflow-hidden rounded-[28px] group cursor-pointer"
        >

          <img
            src={img}
            alt=""
            className="w-full h-[280px] object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">

            <h3 className="text-white text-2xl font-bold">
              Administrative Club
            </h3>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= FACULTY & STUDENT COORDINATORS ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Coordinators
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Meet Our
        <br />
        Leadership Team
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-10 mt-20">

      {/* Faculty */}

      <div className="bg-[#f8fbf7] rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

        <img
          src={facultyImage}
          alt="Faculty Coordinator"
          className="w-full h-[420px] object-cover"
        />

        <div className="p-8">

          <span className="uppercase tracking-[3px] text-sm font-semibold text-[var(--grass)]">
            Faculty Coordinator
          </span>

          <h3 className="text-3xl font-bold text-[var(--forest)] mt-3">
            Dr. ABC XYZ
          </h3>

          <p className="text-gray-600 mt-2">
            Department of Computer Science & Engineering
          </p>

          <p className="mt-6 text-gray-600 leading-7">
            Providing mentorship and strategic guidance to ensure the smooth
            execution of administrative initiatives and student leadership
            activities.
          </p>

        </div>

      </div>

      {/* Student */}

      <div className="bg-[#f8fbf7] rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

        <img
          src={studentImage}
          alt="Student Coordinator"
          className="w-full h-[420px] object-cover"
        />

        <div className="p-8">

          <span className="uppercase tracking-[3px] text-sm font-semibold text-[var(--grass)]">
            Student Coordinator
          </span>

          <h3 className="text-3xl font-bold text-[var(--forest)] mt-3">
            Student Name
          </h3>

          <p className="text-gray-600 mt-2">
            B.Tech Computer Science Engineering
          </p>

          <p className="mt-6 text-gray-600 leading-7">
            Leading student volunteers, coordinating club activities, and
            strengthening collaboration between students and university
            administration.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="relative py-28 overflow-hidden mb-10">

  <img
    src={ctaImage}
    alt="Join Administrative Club"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-[var(--forest)]/85" />

  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

    <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
      Join Our Team
    </span>

    <h2
      className="text-5xl md:text-6xl font-bold text-white mt-5"
      style={{ fontFamily: "Fraunces, serif" }}
    >
      Lead • Organize • Serve
    </h2>

    <p className="mt-8 text-lg text-white/85 leading-8">
      Become a part of the Administrative Club and contribute to campus
      leadership, event management, student engagement, and institutional
      excellence while developing valuable professional skills.
    </p>

    <button className="mt-10 px-10 py-4 rounded-full bg-white text-[var(--forest)] font-semibold hover:bg-[var(--leaf)] transition-all duration-300">
      Join Administrative Club
    </button>

  </div>

</section>



    </>
  );
};

export default AdministrativeClub;