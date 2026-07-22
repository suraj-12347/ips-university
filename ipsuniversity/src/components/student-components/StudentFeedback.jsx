import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  GraduationCap,
  Building2,
  Users,
  MessageSquareText,
  FileEdit,
  ClipboardCheck,
  Send,
  BadgeCheck,
} from "lucide-react";
import {
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
 
} from "lucide-react";

const heroImage =
  "https://i.pinimg.com/736x/ae/5c/59/ae5c59af4a9185373474c62686551bfb.jpg";


const feedbackCategories = [
  {
    icon: GraduationCap,
    title: "Academic Experience",
    description:
      "Share your suggestions regarding teaching quality, curriculum, laboratories, and learning resources.",
  },
  {
    icon: Building2,
    title: "Campus Facilities",
    description:
      "Provide feedback on classrooms, library, hostels, transportation, sports, and other campus facilities.",
  },
  {
    icon: Users,
    title: "Student Services",
    description:
      "Help us improve administrative services, student support, and welfare initiatives.",
  },
  {
    icon: MessageSquareText,
    title: "Campus Environment",
    description:
      "Share your views on campus life, extracurricular activities, discipline, and overall student experience.",
  },
];

const feedbackSteps = [
  {
    icon: FileEdit,
    title: "Fill the Feedback Form",
  },
  {
    icon: ClipboardCheck,
    title: "Review Your Information",
  },
  {
    icon: Send,
    title: "Submit Your Feedback",
  },
  {
    icon: BadgeCheck,
    title: "University Reviews It",
  },
];  

const feedbackBenefits = [
  {
    icon: Lightbulb,
    title: "Continuous Improvement",
    description:
      "Your valuable suggestions help improve academic quality and campus facilities.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential Process",
    description:
      "Feedback is reviewed responsibly and handled with appropriate confidentiality.",
  },
  {
    icon: TrendingUp,
    title: "Better Student Experience",
    description:
      "Student opinions help the University create a more engaging and supportive learning environment.",
  },
  {
    icon: HeartHandshake,
    title: "Student Participation",
    description:
      "Every response contributes to building a student-centric campus culture.",
  },
];

const studentReviews = [
  {
    name: "Aarav Sharma",
    course: "B.Tech Computer Science",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    feedback:
      "The faculty members are approachable and always encourage practical learning. Regular workshops have helped me improve my technical skills.",
  },
  {
    name: "Priya Verma",
    course: "MBA",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    feedback:
      "The campus environment is supportive, and the placement training sessions have significantly improved my confidence for interviews.",
  },
  {
    name: "Rahul Patel",
    course: "B.Pharm",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    feedback:
      "Laboratory facilities and industry exposure have enhanced my practical knowledge. The faculty is always willing to guide students.",
  },
];

const StudentFeedback = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[450px] overflow-hidden mt-30">

        <img
          src={heroImage}
          alt="Student Feedback"
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
            justify-center"
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
            "
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Student Feedback
          </h1>

          <p
            className="
              text-white/80
              max-w-2xl
              mt-5
              leading-7
            "
          >
            Your feedback helps IPS University continuously improve academic
            quality, campus facilities, student services, and the overall
            learning experience.
          </p>

          <div className="flex items-center gap-2 text-white text-sm mt-8 flex-wrap">

            <Link to="/" className="hover:text-[#cfe8a9] transition">
              Home
            </Link>

            <ArrowRight size={16} />

            <Link
              to="/students-zone/student-feedback"
              className="hover:text-[#cfe8a9] transition"
            >
              Student Zone
            </Link>

            <ArrowRight size={16} />

            <span className="text-[#cfe8a9] font-semibold">
              Student Feedback
            </span>

          </div>

        </div>

      </section>

      {/* ================= FEEDBACK PROCESS ================= */}
      {/* ================= FEEDBACK PROCESS ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Your Opinion Matters
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Share Your Feedback
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Student feedback plays an important role in enhancing academic
        excellence and improving the overall campus experience.
      </p>

    </div>

    {/* Categories */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

      {feedbackCategories.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="group bg-white rounded-[24px] border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
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

    {/* Process */}

    <div className="mt-24">

      <h3
        className="text-4xl font-bold text-center text-[var(--forest)]"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Feedback Process
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

        {feedbackSteps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={index}
              className="relative text-center"
            >

              <div className="mx-auto w-20 h-20 rounded-full bg-[var(--forest)] text-white flex items-center justify-center">

                <Icon size={34} />

              </div>

              <h4 className="text-xl font-bold text-[var(--forest)] mt-6">
                {step.title}
              </h4>

              {index !== feedbackSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[58%] w-full h-[2px] bg-[var(--leaf)]"></div>
              )}

            </div>

          );

        })}

      </div>

    </div>

  </div>

</section>

      {/* Next Part */}

      {/* ================= WHY FEEDBACK MATTERS ================= */}
      {/* ================= STUDENT VOICES ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
        Student Voices
      </span>

      <h2
        className="text-5xl font-bold text-[var(--forest)] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        What Our Students Say
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Honest feedback from students helps us understand their experiences
        and continuously improve the quality of education and campus life.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8 mt-16">

      {studentReviews.map((student, index) => (

        <div
          key={index}
          className="group bg-[#f8fbf7] rounded-[28px] p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >

          <div className="flex items-center gap-5">

            <img
              src={student.image}
              alt={student.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-[var(--leaf)]"
            />

            <div>

              <h3 className="text-xl font-bold text-[var(--forest)]">
                {student.name}
              </h3>

              <p className="text-[var(--grass)] font-medium mt-1">
                {student.course}
              </p>

            </div>

          </div>

          <p className="text-gray-600 leading-8 italic mt-8">
            "{student.feedback}"
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
      {/* ================= WHY FEEDBACK MATTERS ================= */}

<section className="py-24 bg-[#f8fbf7] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[var(--grass)]">
          Why Feedback Matters
        </span>

        <h2
          className="text-5xl font-bold text-[var(--forest)] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Your Voice
          <br />
          Drives Positive Change
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          IPS University values every student's opinion. Constructive
          feedback helps us strengthen academic excellence, improve campus
          services, and provide a better learning experience for future
          generations of students.
        </p>

        <button className="mt-10 inline-flex items-center gap-3 bg-[var(--forest)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--grass)] transition-all duration-300">

          Submit Feedback

          <ArrowRight size={20} />

        </button>

      </div>

      {/* Right */}

      <div className="grid sm:grid-cols-2 gap-6">

        {feedbackBenefits.map((item, index) => {

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

              <h3 className="text-xl font-bold text-[var(--forest)] mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
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

    </>
  );
};

export default StudentFeedback;