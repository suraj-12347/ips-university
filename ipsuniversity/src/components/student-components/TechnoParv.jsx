import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";


const festivalJourney = [
  {
    step: "01",
    title: "Theme & Planning",
    description:
      "Faculty coordinators and student leaders brainstorm ideas, finalize the annual theme, and prepare the roadmap for Technoparv.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "02",
    title: "Committee Formation",
    description:
      "Student presidents, coordinators and volunteers are selected, with responsibilities distributed across various organizing teams.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "03",
    title: "Promotion & Registration",
    description:
      "The festival is promoted through social media, campus campaigns and creative publicity to encourage maximum participation.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "04",
    title: "Decoration & Venue Setup",
    description:
      "Teams decorate the campus, prepare stages, install lighting, banners and technical infrastructure for the grand event.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "05",
    title: "Final Rehearsals",
    description:
      "Anchors, performers, volunteers and technical teams conduct rehearsals and complete the final execution checks.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
  },
];
const eventVideos = [
  {
    title: "Technical Events",
    desc:
      "Coding challenges, hackathons, robotics, project exhibitions and innovation-based competitions.",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video",
    poster:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },

  {
    title: "Cultural Events",
    desc:
      "Dance, music, fashion shows and performances celebrating creativity and talent.",
    video:
      "https://www.youtube.com/embed/jjBO1jBqLIY",
    type: "youtube",
    poster:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80",
  },

  {
    title: "Gaming Arena",
    desc:
      "Competitive gaming experiences bringing together strategy, skills and excitement.",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video",
    poster:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
  },

  {
    title: "Management Events",
    desc:
      "Business ideas, startup challenges, marketing activities and leadership competitions.",
    video:
      "https://www.w3schools.com/html/movie.mp4",
    type: "video",
    poster:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },

  {
    title: "Literary Events",
    desc:
      "Debates, quizzes, discussions and activities that showcase communication skills.",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video",
    poster:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80",
  },

  {
    title: "Creative Activities",
    desc:
      "Photography, art, design and creative challenges for passionate participants.",
    video:
      "https://www.w3schools.com/html/movie.mp4",
    type: "video",
    poster:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80",
  },
];

// Hero Image
const technoparvHero =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80";

  const aboutImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80";
  const glanceImage =
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80";

const TPFest = () => {

    const videoRefs = useRef([]);
const [playingVideo, setPlayingVideo] = useState(null);
const [activeVideo, setActiveVideo] = useState(null);
  return (
    <>
     

      {/* ===========================
          Hero Section
      =========================== */}
      <section className="relative h-[520px] overflow-hidden mt-30">
        <img
          src={technoparvHero}
          alt="Technoparv"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/95 via-[#31572c]/80 to-transparent" />

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
            Annual Technical Festival
          </span>

          <h1
            className="
              mt-4
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-white
            "
          >
            Technoparv
          </h1>

          <p
            className="
              max-w-2xl
              mt-6
              text-white/90
              leading-8
              text-lg
            "
          >
            The flagship technical festival of IPS University celebrating
            innovation, engineering excellence, coding challenges, technical
            competitions, cultural performances, creativity, and student
            leadership through unforgettable experiences.
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
              to="/campus-life"
              className="hover:text-[#cfe8a9] transition"
            >
              Campus Life
            </Link>

            <ArrowRight size={15} />

            <span className="text-[#cfe8a9] font-semibold">
              Technoparv
            </span>
          </div>
        </div>
      </section>

      {/* ===========================
          About Technoparv
      =========================== */}

      {/* ===========================
    About Technoparv
=========================== */}

<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}
      <div className="relative">

        <img
          src={aboutImage}
          alt="About Technoparv"
          className="w-full h-[600px] object-cover rounded-[32px] shadow-xl"
        />

        <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-2xl p-8 max-w-xs">

          <span className="text-5xl font-bold text-[var(--forest)]">
            15+
          </span>

          <p className="mt-2 text-gray-600 leading-7">
            Years of inspiring innovation, creativity and technical excellence
            through India's brightest student minds.
          </p>

        </div>

      </div>

      {/* Right Content */}
      <div>

        <span
          className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[var(--grass)]
          "
        >
          About Technoparv
        </span>

        <h2
          className="
            mt-4
            text-4xl
            lg:text-5xl
            font-bold
            leading-tight
            text-[var(--forest)]
          "
          style={{
            fontFamily: "Fraunces, serif",
          }}
        >
          Where Ideas Transform Into Innovation.
        </h2>

        <p className="mt-8 text-gray-600 leading-8 text-lg">
          Technoparv is the flagship annual technical festival of IPS
          University that provides students with an exciting platform to
          demonstrate innovation, technical expertise, creativity and teamwork.
          The festival brings together aspiring engineers, innovators,
          developers and creators through competitions, workshops, exhibitions
          and engaging technical activities.
        </p>

        <p className="mt-6 text-gray-600 leading-8 text-lg">
          Planned and executed by dedicated faculty coordinators, student
          leaders and volunteers, Technoparv reflects the spirit of
          collaboration, leadership and excellence while creating memorable
          learning experiences beyond the classroom.
        </p>

        {/* Highlights */}

        <div className="grid grid-cols-2 gap-5 mt-10">

          <div className="flex items-start gap-3">

            <div className="w-3 h-3 rounded-full bg-[var(--grass)] mt-2" />

            <span className="text-gray-700">
              Technical Competitions
            </span>

          </div>

          <div className="flex items-start gap-3">

            <div className="w-3 h-3 rounded-full bg-[var(--grass)] mt-2" />

            <span className="text-gray-700">
              Innovation Showcase
            </span>

          </div>

          <div className="flex items-start gap-3">

            <div className="w-3 h-3 rounded-full bg-[var(--grass)] mt-2" />

            <span className="text-gray-700">
              Student Leadership
            </span>

          </div>

          <div className="flex items-start gap-3">

            <div className="w-3 h-3 rounded-full bg-[var(--grass)] mt-2" />

            <span className="text-gray-700">
              Cultural Celebrations
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* ===========================
          Technoparv At a Glance
      =========================== */}

      {/* ===========================
    Technoparv At a Glance
=========================== */}

<section className="py-24 bg-[#f8faf8] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Technoparv at a Glance
      </span>

      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{
          fontFamily: "Fraunces, serif",
        }}
      >
        A Celebration of Technology,
        Innovation & Leadership
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Every edition of Technoparv brings together thousands of students,
        innovative ideas, competitive events and unforgettable experiences
        that inspire learning beyond classrooms.
      </p>

    </div>

    {/* Content */}

    <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

      {/* Image */}

      <div className="relative">

        <img
          src={glanceImage}
          alt="Technoparv Highlights"
          className="w-full h-[620px] object-cover rounded-[32px] shadow-xl"
        />

        {/* Floating Card */}

        <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-xl p-6">

          <p className="text-sm uppercase tracking-[3px] text-gray-500">
            Every Year
          </p>

          <h3 className="text-4xl font-bold text-[var(--forest)] mt-2">
            3000+
          </h3>

          <p className="text-gray-600 mt-2">
            Students Participate
          </p>

        </div>

      </div>

      {/* Stats */}

      <div className="grid sm:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-5xl font-bold text-[var(--forest)]">
            80+
          </h3>

          <h4 className="mt-5 text-xl font-semibold">
            Events
          </h4>

          <p className="mt-3 text-gray-600 leading-7">
            Technical, cultural, management, literary and fun competitions.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-5xl font-bold text-[var(--forest)]">
            40+
          </h3>

          <h4 className="mt-5 text-xl font-semibold">
            Colleges
          </h4>

          <p className="mt-3 text-gray-600 leading-7">
            Participants from various institutes compete and collaborate.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-5xl font-bold text-[var(--forest)]">
            150+
          </h3>

          <h4 className="mt-5 text-xl font-semibold">
            Volunteers
          </h4>

          <p className="mt-3 text-gray-600 leading-7">
            Dedicated student teams ensure smooth planning and execution.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-5xl font-bold text-[var(--forest)]">
            15+
          </h3>

          <h4 className="mt-5 text-xl font-semibold">
            Years of Legacy
          </h4>

          <p className="mt-3 text-gray-600 leading-7">
            A tradition of nurturing innovation, leadership and creativity.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* ===========================
          Festival Journey
          (Planning Process)
      =========================== */}

      {/* ===========================
    Festival Journey
=========================== */}

<section className="py-24 bg-white overflow-hidden md:px-14 px-2">

 <div className="space-y-24">
  {festivalJourney.map((item, index) => (
    <div
      key={item.step}
      className="grid lg:grid-cols-2 gap-14 items-center"
    >
      {index % 2 === 0 ? (
        <>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[420px] object-cover rounded-[28px]"
          />

          <div>
            <span className="text-6xl font-bold text-[var(--grass)]">
              {item.step}
            </span>

            <h3 className="mt-5 text-3xl font-bold text-[var(--forest)]">
              {item.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              {item.description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">
            <span className="text-6xl font-bold text-[var(--grass)]">
              {item.step}
            </span>

            <h3 className="mt-5 text-3xl font-bold text-[var(--forest)]">
              {item.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              {item.description}
            </p>
          </div>

          <img
            src={item.image}
            alt={item.title}
            className="order-1 lg:order-2 w-full h-[420px] object-cover rounded-[28px]"
          />
        </>
      )}
    </div>
  ))}
</div>

</section>

      {/* ===========================
          Organizing Team
          - Faculty Coordinators
          - Student Leadership
          - Student Teams
      =========================== */}
{/* ===========================
    Organizing Team
=========================== */}

<section className="py-24 bg-[#f8faf8] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Organizing Team
      </span>

      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{ fontFamily: "Fraunces, serif" }}
      >
        The People Behind
        Technoparv
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Technoparv is made possible through the dedication of faculty mentors,
        student leaders and passionate volunteers who work together for months
        to create an unforgettable festival experience.
      </p>

    </div>

    {/* Faculty Coordinators */}

    <div className="mt-20">

  <h3
    className="
      text-3xl
      font-bold
      text-[var(--forest)]
      mb-10
    "
  >
    Faculty Coordinators
  </h3>


  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">


    {[
      {
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        name: "Dr. Rajesh Sharma",
        role: "Chief Faculty Coordinator",
        department: "Computer Science Engineering",
      },

      {
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
        name: "Dr. Neha Verma",
        role: "Faculty Coordinator",
        department: "Electronics & Communication",
      },

      {
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        name: "Prof. Amit Singh",
        role: "Faculty Coordinator",
        department: "Mechanical Engineering",
      },

      {
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
        name: "Dr. Priya Gupta",
        role: "Faculty Coordinator",
        department: "Management Studies",
      },

    ].map((faculty, index) => (

      <div
        key={index}
        className="
          group
          bg-white
          rounded-[28px]
          overflow-hidden
          shadow-sm
          hover:shadow-xl
          transition
          duration-500
        "
      >

        {/* Image */}

        <div className="h-[320px] overflow-hidden">

          <img
            src={faculty.image}
            alt={faculty.name}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition
              duration-500
            "
          />

        </div>


        {/* Content */}

        <div className="p-6 text-center">

          <h4
            className="
              text-xl
              font-bold
              text-[var(--forest)]
            "
          >
            {faculty.name}
          </h4>


          <p
            className="
              mt-2
              text-[var(--grass)]
              font-semibold
              text-sm
            "
          >
            {faculty.role}
          </p>


          <p
            className="
              mt-3
              text-gray-600
              text-sm
              leading-6
            "
          >
            {faculty.department}
          </p>

        </div>

      </div>

    ))}


  </div>

</div>

    {/* Student Leadership */}

   <div className="mt-24">

  <h3
    className="
      text-3xl
      font-bold
      text-[var(--forest)]
      mb-10
    "
  >
    Student Leadership
  </h3>


  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">


    {[
      {
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        name: "Aarav Sharma",
        role: "Student President",
        department: "Computer Science Engineering",
      },

      {
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        name: "Ananya Singh",
        role: "Vice President",
        department: "Management Studies",
      },

      {
        image:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
        name: "Rohit Verma",
        role: "General Secretary",
        department: "Electronics Engineering",
      },

      {
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        name: "Priya Sharma",
        role: "Technical Head",
        department: "Computer Science Engineering",
      },

    ].map((student, index) => (

      <div
        key={index}
        className="
          group
          bg-white
          rounded-[28px]
          overflow-hidden
          shadow-sm
          hover:shadow-xl
          transition
          duration-500
        "
      >

        {/* Image */}

        <div className="h-[320px] overflow-hidden">

          <img
            src={student.image}
            alt={student.name}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition
              duration-500
            "
          />

        </div>


        {/* Content */}

        <div className="p-6 text-center">

          <h4
            className="
              text-xl
              font-bold
              text-[var(--forest)]
            "
          >
            {student.name}
          </h4>


          <p
            className="
              mt-2
              text-[var(--grass)]
              font-semibold
              text-sm
            "
          >
            {student.role}
          </p>


          <p
            className="
              mt-3
              text-gray-600
              text-sm
              leading-6
            "
          >
            {student.department}
          </p>

        </div>

      </div>

    ))}


  </div>

</div>

    {/* Student Teams */}

   <div className="mt-24">

  <h3
    className="
      text-3xl
      font-bold
      text-[var(--forest)]
      mb-10
    "
  >
    Student Teams
  </h3>


  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">


    {[
      {
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        title: "Technical Team",
        desc: "Manages technical events, equipment setup and innovation activities.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
        title: "Promotion Team",
        desc: "Handles branding, social media, posters and festival promotions.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
        title: "Decoration Team",
        desc: "Creates themes, stage designs and campus decoration setups.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
        title: "Event Management Team",
        desc: "Coordinates schedules, events and smooth execution.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        title: "Media Team",
        desc: "Captures festival moments through photography and videos.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
        title: "Hospitality Team",
        desc: "Manages guests, participants and visitor experience.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
        title: "Volunteer Team",
        desc: "Supports different departments during festival operations.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
        title: "Discipline Team",
        desc: "Maintains coordination, crowd management and event flow.",
      },

    ].map((team, index) => (

      <div
        key={index}
        className="
          group
          relative
          h-[360px]
          rounded-[28px]
          overflow-hidden
        "
      >

        {/* Image */}

        <img
          src={team.image}
          alt={team.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />


        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/30
            to-transparent
          "
        />


        {/* Content */}

        <div
          className="
            absolute
            bottom-0
            p-6
            text-white
          "
        >

          <h4
            className="
              text-xl
              font-bold
            "
          >
            {team.title}
          </h4>


          <p
            className="
              mt-3
              text-sm
              text-white/80
              leading-6
            "
          >
            {team.desc}
          </p>

        </div>


      </div>

    ))}


  </div>

</div>

  </div>

</section>
      {/* ===========================
          Core Teams &
          Responsibilities
      =========================== */}

      {/* ===========================
    Core Teams & Responsibilities
=========================== */}



      {/* ===========================
          Event Categories
          - Technical
          - Cultural
          - Management
          - Literary
          - Gaming
      =========================== */}

      {/* ===========================
    Event Categories
=========================== */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Events & Activities
      </span>

      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Explore the World of
        Technoparv Events
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        From innovation-driven technical challenges to creative cultural
        performances, Technoparv brings together diverse competitions and
        activities that encourage participation, creativity and teamwork.
      </p>

    </div>


    {/* Event Cards */}

   


      {/* Card */}

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">

{eventVideos.map((event,index)=>(

<div
  key={index}
  className="
    group
    relative
    h-[420px]
    rounded-[32px]
    overflow-hidden
  "
>

 {
event.type === "youtube" ? (

  activeVideo === index ? (

    <iframe
      src={`${event.video}?autoplay=1`}
      title={event.title}
      className="
        w-full
        h-full
        object-cover
      "
      allow="
        autoplay;
        accelerometer;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture
      "
      allowFullScreen
    ></iframe>

  ) : (

    <>
      <img
        src={event.poster}
        alt={event.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />


      <div
        className="
          absolute
          inset-0
          bg-black/40
        "
      />


      <button
        onClick={() => setActiveVideo(index)}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-16
          h-16
          rounded-full
          bg-white/90
          flex
          items-center
          justify-center
          z-10
          hover:scale-110
          transition
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-[var(--forest)] ml-1"
        >
          <path d="M8 5v14l11-7z"/>
        </svg>

      </button>

    </>

  )


) : (


  <video
    src={event.video}
    poster={event.poster}
    controls
    className="
      w-full
      h-full
      object-cover
    "
  />


)

}  



  {/* Bottom Gradient */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/80
      via-black/20
      to-transparent
      pointer-events-none
    "
  />



  {/* Content */}

  <div
    className="
      absolute
      bottom-0
      left-0
      p-8
      text-white
      z-10
    "
  >

    <h3 className="text-2xl font-bold">
      {event.title}
    </h3>


    <p className="mt-3 text-white/80 leading-7">
      {event.desc}
    </p>


  </div>


</div>

))}

</div>

    </div>

 

</section>

      {/* ===========================
          Venue Transformation
          & Decoration
      =========================== */}
      {/* ===========================
    Venue Transformation
    & Decoration
=========================== */}

<section className="py-24 bg-[#f8faf8] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Venue Transformation
      </span>

      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{ fontFamily: "Fraunces, serif" }}
      >
        From Campus Spaces
        To Festival Experience
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Months of creativity and teamwork transform the university campus
        into an energetic festival destination with vibrant decorations,
        technical setups, exhibition zones and memorable experiences.
      </p>

    </div>


    {/* Transformation Cards */}

    <div className="grid lg:grid-cols-2 gap-10 mt-16">


      {/* Card 1 */}

      <div className="group relative rounded-[32px] overflow-hidden h-[520px]">

        <img
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
          alt="Stage Setup"
          className="
            w-full
            h-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            to-transparent
          "
        />

        <div className="absolute bottom-8 left-8 text-white">

          <span className="text-sm uppercase tracking-[3px]">
            Main Stage
          </span>

          <h3 className="mt-3 text-3xl font-bold">
            Grand Stage Setup
          </h3>

          <p className="mt-3 text-white/80">
            Professional lighting, sound systems and stage arrangements
            create the perfect festival atmosphere.
          </p>

        </div>

      </div>



      {/* Card 2 */}

      <div className="group relative rounded-[32px] overflow-hidden h-[520px]">

        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
          alt="Festival Decoration"
          className="
            w-full
            h-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            to-transparent
          "
        />

        <div className="absolute bottom-8 left-8 text-white">

          <span className="text-sm uppercase tracking-[3px]">
            Creative Setup
          </span>

          <h3 className="mt-3 text-3xl font-bold">
            Campus Decoration
          </h3>

          <p className="mt-3 text-white/80">
            Student teams design creative spaces, entrances, stalls and
            interactive zones for visitors.
          </p>

        </div>

      </div>

    </div>



    {/* Small Setup Grid */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">


      {[
        {
          title: "Entry Gate",
          image:
            "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=700&q=80",
        },

        {
          title: "Exhibition Area",
          image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
        },

        {
          title: "Technical Arena",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
        },

        {
          title: "Volunteer Desk",
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80",
        },

      ].map((item,index)=>(

        <div
          key={index}
          className="
            relative
            h-64
            rounded-3xl
            overflow-hidden
            group
          "
        >

          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition
              duration-500
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/40
            "
          />

          <h4
            className="
              absolute
              bottom-5
              left-5
              text-white
              text-xl
              font-semibold
            "
          >
            {item.title}
          </h4>

        </div>

      ))}


    </div>


  </div>

</section>

      {/* ===========================
          Inauguration Ceremony
      =========================== */}

     

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Grand Opening
      </span>

      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Inauguration Ceremony
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        The beginning of Technoparv is marked with inspiring addresses,
        ceremonial moments and the celebration of innovation, creativity
        and student excellence.
      </p>

    </div>


    {/* Main Image */}

    <div className="relative mt-16 h-[550px] rounded-[35px] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=80"
        alt="Inauguration Ceremony"
        className="
          w-full
          h-full
          object-cover
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/30
          to-transparent
        "
      />


      <div
        className="
          absolute
          bottom-10
          left-8
          lg:left-12
          text-white
          max-w-xl
        "
      >

        <span className="uppercase tracking-[3px] text-sm">
          Technoparv Opening
        </span>

        <h3 className="mt-4 text-3xl lg:text-4xl font-bold">
          Celebrating Innovation & Excellence
        </h3>

        <p className="mt-4 text-white/80 leading-7">
          Distinguished guests, faculty members and students come together
          to officially inaugurate the festival and begin a journey of
          creativity, competition and collaboration.
        </p>

      </div>

    </div>



    {/* Ceremony Timeline */}

    <div className="grid md:grid-cols-4 gap-6 mt-12">


      {[
        {
          number: "01",
          title: "Guest Arrival",
          desc: "Welcoming chief guests and dignitaries.",
          image:
            "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=700&q=80",
        },

        {
          number: "02",
          title: "Lamp Lighting",
          desc: "Traditional inauguration ceremony.",
          image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80",
        },

        {
          number: "03",
          title: "Welcome Address",
          desc: "Inspirational messages from leaders.",
          image:
            "https://images.unsplash.com/photo-1561489396-888724a1543d?auto=format&fit=crop&w=700&q=80",
        },

        {
          number: "04",
          title: "Festival Begins",
          desc: "Opening of events and activities.",
          image:
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=80",
        },

      ].map((item,index)=>(

        <div
          key={index}
          className="
            bg-[#f8faf8]
            rounded-3xl
            overflow-hidden
            group
          "
        >

          <div className="h-52 overflow-hidden">

            <img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition
                duration-500
              "
            />

          </div>


          <div className="p-6">

            <span
              className="
                text-4xl
                font-bold
                text-[var(--grass)]
              "
            >
              {item.number}
            </span>

            <h4 className="mt-3 text-xl font-bold text-[var(--forest)]">
              {item.title}
            </h4>

            <p className="mt-2 text-gray-600 leading-6">
              {item.desc}
            </p>

          </div>

        </div>

      ))}


    </div>


  </div>

</section>

      {/* ===========================
          Technoparv
          Through the Years
      =========================== */}

   

<section className="py-24 bg-[#f8faf8] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Our Journey
      </span>

      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Technoparv Through
        The Years
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Every edition of Technoparv carries new ideas, bigger challenges
        and unforgettable memories created by students, mentors and
        participants.
      </p>

    </div>



    {/* Year Timeline */}

    <div className="mt-20 space-y-24">


      {/* Year Card */}

      {[
        {
          year: "2025",
          title: "Innovation Beyond Boundaries",
          desc:
            "A year filled with technical challenges, creative competitions, workshops and enthusiastic participation from students.",
          image:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",

          gallery:[
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
          ]
        },

        {
          year: "2024",
          title: "Celebrating Creativity & Technology",
          desc:
            "Students showcased innovation through competitions, exhibitions and collaborative learning experiences.",
          image:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",

          gallery:[
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
          ]
        },

      ].map((item,index)=>(


        <div
          key={index}
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >


          {/* Image */}

          <div
            className={`
              ${index % 2 !== 0 ? "lg:order-2" : ""}
            `}
          >

            <div className="relative">

              <img
                src={item.image}
                alt={item.year}
                className="
                  w-full
                  h-[450px]
                  object-cover
                  rounded-[32px]
                "
              />


              <div
                className="
                  absolute
                  top-6
                  left-6
                  bg-white
                  rounded-2xl
                  px-6
                  py-4
                  shadow-lg
                "
              >

                <span
                  className="
                    text-4xl
                    font-bold
                    text-[var(--forest)]
                  "
                >
                  {item.year}
                </span>

              </div>


            </div>


          </div>



          {/* Content */}

          <div
            className={`
              ${index % 2 !== 0 ? "lg:order-1" : ""}
            `}
          >

            <h3
              className="
                text-3xl
                font-bold
                text-[var(--forest)]
              "
            >
              {item.title}
            </h3>


            <p className="mt-5 text-gray-600 leading-8">
              {item.desc}
            </p>



            {/* Mini Gallery */}

            <div className="grid grid-cols-2 gap-4 mt-8">

              {item.gallery.map((img,i)=>(

                <img
                  key={i}
                  src={img}
                  alt=""
                  className="
                    h-32
                    w-full
                    object-cover
                    rounded-2xl
                    hover:scale-105
                    transition
                  "
                />

              ))}

            </div>


          </div>


        </div>


      ))}


    </div>


  </div>

</section>

      {/* ===========================
          Achievements
          & Statistics
      =========================== */}
 



      {/* ===========================
          Join the
          Technoparv Legacy
      =========================== */}

  


<section className="relative py-28 overflow-hidden mt-20">

  {/* Background */}

  <img
    src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80"
    alt="Technoparv Celebration"
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
      via-[#31572c]/80
      to-black/50
    "
  />


  <div
    className="
      relative
      z-10
      max-w-5xl
      mx-auto
      px-6
      text-center
      text-white
    "
  >


    <span
      className="
        uppercase
        tracking-[5px]
        text-sm
        font-semibold
        text-[#cfe8a9]
      "
    >
      Be A Part Of The Journey
    </span>



    <h2
      className="
        mt-5
        text-4xl
        md:text-6xl
        font-bold
        leading-tight
      "
      style={{fontFamily:"Fraunces, serif"}}
    >
      Join The
      <br />
      Technoparv Legacy
    </h2>



    <p
      className="
        max-w-3xl
        mx-auto
        mt-6
        text-lg
        text-white/85
        leading-8
      "
    >
      Experience innovation, creativity and collaboration at IPS University's
      annual technical festival. Be a part of competitions, ideas,
      friendships and memories that last forever.
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

      <button
        className="
          px-8
          py-4
          rounded-full
          bg-[#578B07]
          text-white
          font-semibold
          hover:bg-[#6fa70b]
          transition
        "
      >
        Explore Events
      </button>


      <button
        className="
          px-8
          py-4
          rounded-full
          border
          border-white/40
          text-white
          font-semibold
          hover:bg-white
          hover:text-[#31572c]
          transition
        "
      >
        View Gallery
      </button>


    </div>


  </div>


</section>

     
    </>
  );
};

export default TPFest;