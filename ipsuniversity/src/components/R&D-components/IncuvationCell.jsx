
import {Link} from 'react-router-dom'
import WHY_HERO from '../../images1/ctm1900.png'
import {
  ArrowRight,
  Eye,
  Target,
  Lightbulb,
  Handshake,
  Rocket,
  Landmark,
  FlaskConical,
  Users,
  Building2,
  Laptop,
  ShieldCheck,
  BriefcaseBusiness,
  TrendingUp,
  Trophy,
  Presentation,
  Mic2,
  Mail,
   ClipboardCheck,
   Cpu,
   BadgeCheck,
} from "lucide-react";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80";

const facilityImg =
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80";

const programBg =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80";

const activityImg =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80";


const ideaImg =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80";

const evaluationImg =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80";

const mentorshipImg =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80";

const prototypeImg =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80";

const validationImg =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80";

const fundingImg =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80";

const launchImg =
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80";

  const features = [
  {
    id: "01",
    icon: Lightbulb,
    title: "Innovation Culture",
    description:
      "Encouraging creative thinking and transforming innovative ideas into impactful solutions.",
  },
  {
    id: "02",
    icon: Handshake,
    title: "Expert Mentorship",
    description:
      "Guidance from experienced academicians, entrepreneurs and industry professionals.",
  },
  {
    id: "03",
    icon: Rocket,
    title: "Startup Support",
    description:
      "Comprehensive assistance from idea validation to startup launch and business growth.",
  },
  {
    id: "04",
    icon: FlaskConical,
    title: "Research Integration",
    description:
      "Connecting academic research with practical innovation and commercialization.",
  },
  {
    id: "05",
    icon: Landmark,
    title: "Funding Guidance",
    description:
      "Support in identifying grants, investment opportunities and startup funding programs.",
  },
  {
    id: "06",
    icon: Users,
    title: "Networking",
    description:
      "Collaborate with innovators, industry leaders, investors and startup communities.",
  },
];

const journeySteps = [
  {
    icon: Lightbulb,
    image: ideaImg,
    title: "Idea Generation",
    desc: "Innovative ideas are identified and transformed into promising startup concepts that address real-world challenges through creativity and research.",
  },
  {
    icon: ClipboardCheck,
    image: evaluationImg,
    title: "Screening & Evaluation",
    desc: "Business experts and faculty mentors evaluate ideas based on feasibility, innovation, market potential and long-term sustainability.",
  },
  {
    icon: Users,
    image: mentorshipImg,
    title: "Expert Mentorship",
    desc: "Selected teams receive continuous guidance from industry experts, entrepreneurs and faculty members to refine their business strategy.",
  },
  {
    icon: Cpu,
    image: prototypeImg,
    title: "Prototype Development",
    desc: "Innovators develop functional prototypes using technical resources, laboratories and collaborative research facilities.",
  },
  {
    icon: BadgeCheck,
    image: validationImg,
    title: "Business Validation",
    desc: "Products are tested, validated and improved through customer feedback, market research and pilot implementation.",
  },
  {
    icon: Landmark,
    image: fundingImg,
    title: "Funding & Networking",
    desc: "The Incubation Cell connects startups with investors, government schemes, industry partners and funding opportunities.",
  },
  {
    icon: Rocket,
    image: launchImg,
    title: "Startup Launch",
    desc: "Successful ventures are launched into the market with continuous support for growth, expansion and commercialization.",
  },
];

const facilities = [
  {
    icon: Building2,
    title: "Co-working Space",
    desc: "Dedicated collaborative spaces where innovators and entrepreneurs can develop ideas and work together.",
  },
  {
    icon: FlaskConical,
    title: "Innovation Labs",
    desc: "Modern research facilities supporting experimentation, testing and technology development.",
  },
  {
    icon: Laptop,
    title: "Technology Support",
    desc: "Access to digital resources, tools and technical guidance for developing innovative solutions.",
  },
  {
    icon: Users,
    title: "Mentor Connect",
    desc: "Regular interaction with experienced mentors, industry experts and startup professionals.",
  },
  {
    icon: Lightbulb,
    title: "Idea Development",
    desc: "Support for transforming creative concepts into practical and scalable solutions.",
  },
  {
    icon: ShieldCheck,
    title: "IPR Assistance",
    desc: "Guidance related to intellectual property, patents and technology protection.",
  },
  {
    icon: Handshake,
    title: "Industry Collaboration",
    desc: "Opportunities to collaborate with industries and professional networks.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Support",
    desc: "Assistance in business planning, market strategy and startup growth.",
  },
];

const programs = [
  {
    icon: Lightbulb,
    title: "Pre-Incubation",
    subtitle: "Idea To Concept",

    desc:
      "A platform for aspiring innovators to identify problems, develop ideas and understand entrepreneurship fundamentals.",

    points: [
      "Idea Validation",
      "Entrepreneurship Training",
      "Business Model Development",
      "Innovation Workshops",
    ],
  },


  {
    icon: Rocket,
    title: "Incubation Program",
    subtitle: "Concept To Prototype",

    desc:
      "Comprehensive support for startups through mentoring, technical assistance and access to incubation resources.",

    points: [
      "Expert Mentorship",
      "Prototype Development",
      "Industry Connect",
      "Startup Guidance",
    ],
  },


  {
    icon: TrendingUp,
    title: "Acceleration Program",
    subtitle: "Growth & Expansion",

    desc:
      "Helping startups scale their solutions through funding opportunities, networking and market access.",

    points: [
      "Investor Connect",
      "Funding Support",
      "Market Expansion",
      "Business Scaling",
    ],
  },
];


const activities = [
  {
    icon:Trophy,
    title:"Hackathons",
    desc:"Problem-solving events where students develop innovative solutions."
  },
  {
    icon:Presentation,
    title:"Workshops",
    desc:"Hands-on sessions on entrepreneurship, technology and innovation."
  },
  {
    icon:Users,
    title:"Expert Talks",
    desc:"Interaction with entrepreneurs, researchers and industry leaders."
  },
  {
    icon:Rocket,
    title:"Startup Pitch Events",
    desc:"Platforms to present ideas before mentors and investors."
  },
  {
    icon:FlaskConical,
    title:"Research Activities",
    desc:"Encouraging research-based innovation and prototype development."
  },
  {
    icon:Mic2,
    title:"Entrepreneurship Programs",
    desc:"Programs designed to build entrepreneurial skills."
  },
];

const galleryImages = [
  {
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    title: "Innovation Lab",
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    title: "Startup Workshop",
  },
  {
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Research Activity",
  },
  {
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
    title: "Prototype Development",
  },
  {
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    title: "Expert Session",
  },
  {
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    title: "Innovation Event",
  },
];


import { useState } from "react";
import { Plus } from "lucide-react";


const faqs = [
  {
    question:"Who can apply for the Incubation Cell?",
    answer:
      "Students, faculty members, researchers, alumni and aspiring entrepreneurs with innovative ideas can participate in the incubation programs.",
  },

  {
    question:"What kind of support is provided?",
    answer:
      "The Incubation Cell provides mentorship, technical guidance, prototype development support, networking opportunities and startup guidance.",
  },

  {
    question:"Is funding support available for startups?",
    answer:
      "Yes, startups are guided towards suitable funding opportunities, grants, investors and entrepreneurship programs.",
  },

  {
    question:"Can students participate while studying?",
    answer:
      "Yes, students can develop their ideas and participate in innovation programs along with their academic journey.",
  },

  {
    question:"Does the Incubation Cell provide industry connections?",
    answer:
      "Yes, the cell facilitates interaction with industry experts, mentors, investors and entrepreneurial communities.",
  },

];




const IncuvationCell = () => {
   const [active,setActive]=useState(null);

  return (

    <div className='w-full'>
    <section
      className="relative overflow-hidden flex items-center mt-30 py-10"
      style={{
        backgroundImage: `url(${WHY_HERO})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ================= Overlay ================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#31572c]/95
          via-[#31572c]/75
          to-transparent
        "
      />

      {/* ================= Content ================= */}

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-7xl text-left text-white">

          {/* Small Label */}

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#578B07]" />

            <span
              className="
                uppercase
                tracking-[4px]
                text-sm
                font-semibold
                text-white
              "
            >
              Research & Development
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              leading-[1.15]
              max-w-2xl
            "
          >
            Innovation Cell

            <span className="block mt-2 text-[#cde8a3]">
              Empowering Ideas Into Successful Ventures
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              text-base
              md:text-md
              leading-7
              text-gray-200
              max-w-2xl
            "
          >
            The Incubation Cell at IPS University nurtures innovation,
            entrepreneurship and research by providing students, faculty
            and aspiring entrepreneurs with the resources, mentorship and
            collaborative environment needed to transform innovative ideas
            into successful startups and sustainable ventures.
          </p>

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 mt-12 text-sm text-white/80">
            <Link
              to="/"
              className="hover:text-[#578B07] transition"
            >
              Home
            </Link>

            <ArrowRight size={15} />

            <Link
              to="/"
              className="hover:text-[#578B07] transition"
            >
              Research & Development
            </Link>

            <ArrowRight size={15} />

            <span className="text-[#578B07] font-semibold">
              Incubation Cell
            </span>
          </div>

        </div>
      </div>
    </section>
    
    {/* about */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= Image ================= */}

          <div className="relative group">

            <div className="absolute -top-5 -left-5 w-32 h-32 bg-[#ECF39E] rounded-3xl -z-10" />

            <img
              src={ABOUT_IMG}
              alt="Incubation Cell"
              className="
                w-full
                h-[580px]
                object-cover
                rounded-3xl
                shadow-2xl
                group-hover:scale-[1.02]
                transition
                duration-500
              "
            />

            {/* Floating Card */}

            <div
              className="
                absolute
                bottom-8
                left-8
                bg-white/95
                backdrop-blur-md
                rounded-2xl
                px-6
                py-5
                shadow-xl
              "
            >
              <h3 className="text-3xl font-bold text-[#31572c]">
                Innovation
              </h3>

              <p className="text-gray-600 mt-1">
                From Ideas to Impact
              </p>
            </div>

          </div>

          {/* ================= Content ================= */}

          <div>

            <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
              About Incubation Cell
            </span>

            <h2
              className="
                text-4xl
                lg:text-5xl
                font-bold
                text-[#31572c]
                mt-5
                leading-tight
              "
            >
              Nurturing Innovation,
              <br />
              Inspiring Entrepreneurs
            </h2>

            <div className="w-24 h-1 bg-[#578B07] rounded-full mt-7" />

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              The Incubation Cell at IPS University serves as a dynamic
              platform that encourages innovation, entrepreneurship and
              technology-driven research. It empowers students, faculty
              members and aspiring entrepreneurs to transform creative ideas
              into impactful products, services and sustainable business
              ventures.
            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              Through expert mentorship, modern infrastructure, industry
              collaboration, startup guidance and innovation-focused
              programs, the Incubation Cell supports every stage of the
              entrepreneurial journey—from idea validation and prototype
              development to business planning and market readiness.
            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              By fostering a culture of creativity, research excellence and
              collaboration, IPS University aims to create future innovators
              and entrepreneurs capable of addressing real-world challenges
              while contributing to economic and societal growth.
            </p>

            {/* Highlights */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#578B07]" />
                <span className="text-gray-700">
                  Startup Mentorship
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#578B07]" />
                <span className="text-gray-700">
                  Industry Collaboration
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#578B07]" />
                <span className="text-gray-700">
                  Prototype Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#578B07]" />
                <span className="text-gray-700">
                  Innovation Ecosystem
                </span>
              </div>

            </div>

            <button
              className="
                mt-12
                px-8
                py-4
                rounded-full
                bg-[#31572c]
                text-white
                font-medium
                hover:bg-[#578B07]
                transition
              "
            >
              Explore Innovation Programs
            </button>

          </div>

        </div>

      </div>
    </section>


     
    <section className="py-24 bg-[#f8fbf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
            Our Foundation
          </span>

          <h2
            className="
              text-4xl
              lg:text-5xl
              font-bold
              text-[#31572c]
              mt-5
            "
          >
            Vision & Mission
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Driven by innovation and entrepreneurship, the Incubation Cell
            aims to cultivate visionary leaders capable of transforming
            research and creative ideas into impactful enterprises.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10 mt-18">

          {/* Vision */}

          <div
            className="
              bg-white
              rounded-[30px]
              p-10
              shadow-lg
              border
              border-gray-100
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >

            <div
              className="
                w-18
                h-18
                rounded-2xl
                bg-[#ECF39E]
                flex
                items-center
                justify-center
              "
            >
              <Eye
                size={36}
                className="text-[#31572c]"
              />
            </div>

            <h3 className="text-3xl font-bold text-[#31572c] mt-8">
              Our Vision
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To establish a vibrant innovation ecosystem that empowers
              students, researchers and entrepreneurs to develop
              technology-driven solutions, build successful startups and
              contribute meaningfully to sustainable economic and societal
              development.
            </p>

          </div>

          {/* Mission */}

          <div
            className="
              bg-[#31572c]
              rounded-[30px]
              p-10
              shadow-lg
              text-white
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >

            <div
              className="
                w-18
                h-18
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
              "
            >
              <Target
                size={36}
                className="text-[#ECF39E]"
              />
            </div>

            <h3 className="text-3xl font-bold mt-8">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-200">
              To promote innovation, entrepreneurship and research through
              mentorship, industry collaboration, business incubation,
              prototype development and access to funding opportunities,
              enabling innovators to transform ideas into scalable ventures.
            </p>

          </div>

        </div>

      </div>
    </section>


  




    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
            Why Choose IPS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#31572c] mt-5">
            Empowering Innovation Through
            <br />
            the Right Ecosystem
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            IPS University provides aspiring innovators with the
            infrastructure, mentorship and entrepreneurial ecosystem
            required to transform ideas into successful ventures.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  relative
                  group
                  bg-[#f8fbf6]
                  rounded-3xl
                  p-8
                  border
                  border-gray-100
                  hover:border-[#578B07]/30
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                {/* Number */}

                <span className="absolute top-6 right-6 text-5xl font-bold text-[#31572c]/8 group-hover:text-[#578B07]/15 transition">
                  {item.id}
                </span>

                {/* Icon */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#ECF39E]
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[#31572c]
                    transition
                  "
                >
                  <Icon
                    size={30}
                    className="text-[#31572c] group-hover:text-white transition"
                  />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-[#31572c] mt-8">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-600 leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>


     <section className="py-24 bg-[#f8fbf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
            Startup Journey
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#31572c] mt-5">
            From Innovative Ideas
            <br />
            To Successful Startups
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Every innovative idea follows a structured pathway. The
            Incubation Cell provides mentorship, technical support and
            entrepreneurial guidance at every stage, helping innovators
            transform research into successful business ventures.
          </p>

        </div>

        {/* Journey Grid */}

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {journeySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-[28px]
                  overflow-hidden
                  shadow-lg
                  border
                  border-gray-100
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                {/* ==== IMAGE ==== */}

                <div className="relative overflow-hidden h-64">

                  <img
                    src={step.image}
                    alt={step.title}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Step Number */}

                  <div className="absolute top-5 left-5">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-bold text-[#31572c] shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}

                  <div className="absolute bottom-5 right-5 w-16 h-16 rounded-2xl bg-[#31572c] flex items-center justify-center shadow-xl">

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                </div>

                {/* ===== CONTENT STARTS HERE ===== */}

                                {/* ===== CONTENT ===== */}

                <div className="p-8">

                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#ECF39E] text-[#31572c] text-sm font-semibold">
                    Step {index + 1}
                  </span>

                  <h3 className="text-2xl font-bold text-[#31572c] mt-5">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-8 mt-4">
                    {step.desc}
                  </p>

                  {/* Bottom */}

                  <div className="flex items-center justify-between mt-8">

                    <div className="flex items-center gap-2">

                      <div className="w-2.5 h-2.5 rounded-full bg-[#578B07]" />

                      <span className="text-sm font-medium text-[#31572c]">
                        Incubation Process
                      </span>

                    </div>

                    <button
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-[#31572c]
                        text-white
                        flex
                        items-center
                        justify-center
                        group-hover:bg-[#578B07]
                        transition
                      "
                    >
                      →
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>








    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[#578B07]
          ">
            Our Infrastructure
          </span>


          <h2 className="
            text-4xl
            lg:text-5xl
            font-bold
            text-[#31572c]
            mt-5
          ">
            Facilities That Support
            <br />
            Innovation & Growth
          </h2>


          <p className="
            mt-6
            text-gray-600
            leading-8
          ">
            IPS University provides a supportive ecosystem with
            modern infrastructure, technical resources and expert
            guidance to help innovators transform ideas into
            successful ventures.
          </p>

        </div>



        {/* Main Content */}

        <div className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          mt-20
        ">


          {/* Image */}

          <div className="relative">


            <div className="
              absolute
              -top-6
              -left-6
              w-32
              h-32
              bg-[#ECF39E]
              rounded-3xl
            "/>


            <img
              src={facilityImg}
              alt="Incubation Facility"
              className="
                relative
                w-full
                h-[600px]
                object-cover
                rounded-[35px]
                shadow-xl
              "
            />


            {/* Floating Card */}

            <div className="
              absolute
              bottom-8
              left-8
              bg-white
              rounded-2xl
              shadow-xl
              px-7
              py-5
            ">

              <h3 className="
                text-3xl
                font-bold
                text-[#31572c]
              ">
                360°
              </h3>


              <p className="text-gray-600">
                Startup Support Ecosystem
              </p>

            </div>


          </div>

                    {/* Facilities Cards */}

          <div className="grid sm:grid-cols-2 gap-6">

            {facilities.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="
                    group
                    p-6
                    rounded-3xl
                    bg-[#f8fbf6]
                    border
                    border-gray-100
                    hover:bg-[#31572c]
                    hover:-translate-y-2
                    hover:shadow-xl
                    transition-all
                    duration-500
                  "
                >

                  {/* Icon */}

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-[#ECF39E]
                      flex
                      items-center
                      justify-center
                      group-hover:bg-white/20
                      transition
                    "
                  >

                    <Icon
                      size={28}
                      className="
                        text-[#31572c]
                        group-hover:text-white
                        transition
                      "
                    />

                  </div>


                  {/* Title */}

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-[#31572c]
                      mt-6
                      group-hover:text-white
                      transition
                    "
                  >
                    {item.title}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      text-gray-600
                      leading-7
                      mt-3
                      text-sm
                      group-hover:text-gray-200
                      transition
                    "
                  >
                    {item.desc}
                  </p>


                </div>

              );

            })}

          </div>


        </div>


      </div>


    </section>





     <section
      className="
        relative
        py-24
        overflow-hidden
      "
      style={{
        backgroundImage:`url(${programBg})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
      }}
    >

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-[#31572c]/90
        "
      />


      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
        "
      >


        {/* Heading */}

        <div className="
          text-center
          max-w-3xl
          mx-auto
          text-white
        ">


          <span
            className="
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
              text-[#ECF39E]
            "
          >
            Startup Programs
          </span>



          <h2
            className="
              text-4xl
              lg:text-5xl
              font-bold
              mt-5
            "
          >
            Programs Designed For
            <br/>
            Every Innovation Stage
          </h2>



          <p
            className="
              mt-6
              text-gray-200
              leading-8
            "
          >
            From developing the first idea to scaling a successful
            venture, IPS University provides structured programs
            that support innovators at every stage of their journey.
          </p>


        </div>



        {/* Cards */}

        <div
          className="
            grid
            lg:grid-cols-3
            gap-8
            mt-16
          "
        >


    {programs.map((program,index)=>{

            const Icon = program.icon;

            return (

              <div
                key={index}
                className="
                  group
                  bg-white/10
                  backdrop-blur-lg
                  border
                  border-white/20
                  rounded-[30px]
                  p-8
                  text-white
                  hover:bg-white
                  hover:text-[#31572c]
                  hover:-translate-y-3
                  transition-all
                  duration-500
                "
              >

                {/* Icon */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#ECF39E]
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Icon
                    size={32}
                    className="text-[#31572c]"
                  />

                </div>


                <p className="
                  mt-7
                  text-sm
                  uppercase
                  tracking-wider
                  text-[#ECF39E]
                  group-hover:text-[#578B07]
                ">
                  {program.subtitle}
                </p>


                <h3 className="
                  text-3xl
                  font-bold
                  mt-3
                ">
                  {program.title}
                </h3>


                <p className="
                  mt-5
                  leading-7
                  text-gray-200
                  group-hover:text-gray-600
                ">
                  {program.desc}
                </p>


                <ul className="
                  mt-7
                  space-y-3
                ">

                  {program.points.map((point,i)=>(

                    <li
                      key={i}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                      "
                    >

                      <span className="
                        w-2
                        h-2
                        rounded-full
                        bg-[#578B07]
                      "/>

                      {point}

                    </li>

                  ))}

                </ul>


              </div>

            );

          })}


        </div>


      </div>

    </section>





<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6 lg:px-10">


<div className="
grid
lg:grid-cols-2
gap-14
items-center
">


{/* Image */}


<div className="relative">


<img
src={activityImg}
alt="Innovation Activities"
className="
w-full
h-[560px]
object-cover
rounded-[35px]
shadow-xl
"
/>


<div className="
absolute
bottom-8
right-8
bg-[#31572c]
text-white
rounded-2xl
px-8
py-5
">

<h3 className="
text-3xl
font-bold
">
50+
</h3>

<p>
Innovation Events
</p>

</div>


</div>



{/* Content */}


<div>


<span className="
uppercase
tracking-[4px]
text-sm
font-semibold
text-[#578B07]
">
Innovation Activities
</span>


<h2 className="
text-4xl
lg:text-5xl
font-bold
text-[#31572c]
mt-5
leading-tight
">
Creating Opportunities
For Innovation
</h2>


<p className="
mt-6
text-gray-600
leading-8
">
The Incubation Cell regularly organizes innovation-driven
activities that encourage creativity, research thinking and
entrepreneurial skills among students and researchers.
</p>



<div className="
grid
sm:grid-cols-2
gap-5
mt-10
">


{activities.map((item,index)=>{


const Icon=item.icon;


return(

<div
key={index}
className="
flex
gap-4
p-5
rounded-2xl
bg-[#f8fbf6]
hover:bg-[#31572c]
group
transition
"
>


<div className="
min-w-12
h-12
rounded-xl
bg-[#ECF39E]
flex
items-center
justify-center
">


<Icon
size={24}
className="
text-[#31572c]
"
/>


</div>



<div>

<h3 className="
font-bold
text-[#31572c]
group-hover:text-white
">
{item.title}
</h3>


<p className="
text-sm
text-gray-600
mt-2
group-hover:text-gray-200
">
{item.desc}
</p>


</div>


</div>

)


})}


</div>


</div>


</div>


</div>

</section>




<section className="py-24 bg-[#f8fbf6]">


<div className="max-w-7xl mx-auto px-6 lg:px-10">


{/* Heading */}

<div className="
text-center
max-w-3xl
mx-auto
">


<span className="
uppercase
tracking-[4px]
text-sm
font-semibold
text-[#578B07]
">
Innovation Gallery
</span>


<h2 className="
text-4xl
lg:text-5xl
font-bold
text-[#31572c]
mt-5
">
Moments of Creativity
&
Innovation
</h2>


<p className="
mt-6
text-gray-600
leading-8
">
A glimpse into the research activities, innovation events,
workshops and entrepreneurial initiatives at IPS University.
</p>


</div>



{/* Gallery */}

<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-7
mt-16
">


{galleryImages.map((item,index)=>(


<div
key={index}
className="
relative
overflow-hidden
rounded-3xl
group
h-[320px]
shadow-lg
"
>


<img
  src={`${item.img}?auto=format&fit=crop&w=900&q=80`}
  alt={item.title}
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
from-[#31572c]/90
via-transparent
to-transparent
opacity-0
group-hover:opacity-100
transition
"
/>



<div
className="
absolute
bottom-6
left-6
text-white
translate-y-5
group-hover:translate-y-0
opacity-0
group-hover:opacity-100
transition
"
>

<h3 className="
text-2xl
font-bold
">
{item.title}
</h3>


<p className="
text-sm
text-gray-200
mt-2
">
IPS Innovation Ecosystem
</p>


</div>


</div>


))}


</div>



</div>


</section>



<section className="py-24 bg-white">


<div className="max-w-7xl mx-auto px-6 lg:px-10">


<div className="
grid
lg:grid-cols-2
gap-14
items-center
">


{/* Left */}

<div>


<span className="
uppercase
tracking-[4px]
text-sm
font-semibold
text-[#578B07]
">
Frequently Asked Questions
</span>


<h2 className="
text-4xl
lg:text-5xl
font-bold
text-[#31572c]
mt-5
leading-tight
">
Everything You Need
To Know About
Incubation
</h2>


<p className="
mt-6
text-gray-600
leading-8
">
Find answers to common questions related to incubation,
startup support, mentorship and innovation programs at IPS University.
</p>



<div className="
mt-10
rounded-3xl
overflow-hidden
h-[350px]
"
>


<img
src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
alt="Students"
className="
w-full
h-full
object-cover
"
/>


</div>


</div>



{/* Right Accordion */}


<div className="space-y-5">


{faqs.map((item,index)=>(


<div
key={index}
className="
border
border-gray-200
rounded-2xl
overflow-hidden
"
>


<button

onClick={()=>setActive(
active===index ? null : index
)}

className="
w-full
flex
items-center
justify-between
p-6
text-left
"
>


<h3 className="
font-semibold
text-[#31572c]
text-lg
">
{item.question}
</h3>


<Plus
size={22}
className={`
text-[#578B07]
transition
${active===index ? "rotate-45":""}
`}
/>


</button>



<div
className={`
px-6
overflow-hidden
transition-all
duration-500
${
active===index
? "max-h-40 pb-6"
: "max-h-0"
}
`}
>


<p className="
text-gray-600
leading-7
">
{item.answer}
</p>


</div>


</div>


))}


</div>


</div>


</div>


</section>








    <section className="py-20 bg-[#31572c] relative overflow-hidden">


      {/* Background Shape */}

      <div
        className="
          absolute
          -top-20
          -right-20
          w-80
          h-80
          rounded-full
          bg-[#578B07]/40
          blur-3xl
        "
      />


      <div
        className="
          absolute
          -bottom-20
          -left-20
          w-72
          h-72
          rounded-full
          bg-[#ECF39E]/20
          blur-3xl
        "
      />



      <div className="
        relative
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
      ">


        <div className="
          grid
          lg:grid-cols-2
          gap-10
          items-center
        ">



          {/* Content */}


          <div className="text-white">


            <span className="
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
              text-[#ECF39E]
            ">
              Join Innovation Ecosystem
            </span>



            <h2 className="
              text-4xl
              lg:text-5xl
              font-bold
              mt-5
              leading-tight
            ">
              Have An
              <br/>
              Innovative Idea?
            </h2>



            <p className="
              mt-6
              text-gray-200
              leading-8
              max-w-xl
            ">
              Transform your ideas into impactful solutions with
              IPS University Incubation Cell. Get mentorship,
              resources and support to build the next successful venture.
            </p>



            {/* Buttons */}


            <div className="
              flex
              flex-wrap
              gap-5
              mt-10
            ">


              <button
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-white
                  text-[#31572c]
                  font-semibold
                  flex
                  items-center
                  gap-3
                  hover:bg-[#ECF39E]
                  transition
                "
              >

                Apply Now

                <ArrowRight size={18}/>

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
                  flex
                  items-center
                  gap-3
                  hover:bg-white
                  hover:text-[#31572c]
                  transition
                "
              >

                <Mail size={18}/>

                Contact Us

              </button>


            </div>


          </div>




          {/* Right Card */}


          <div
            className="
              bg-white/10
              backdrop-blur-xl
              rounded-[35px]
              border
              border-white/20
              p-10
              text-white
            "
          >


            <Rocket
              size={45}
              className="text-[#ECF39E]"
            />



            <h3 className="
              text-3xl
              font-bold
              mt-6
            ">
              Start Your Innovation Journey
            </h3>



            <div className="
              grid
              grid-cols-2
              gap-6
              mt-8
            ">


              <div>
                <h4 className="
                  text-3xl
                  font-bold
                  text-[#ECF39E]
                ">
                  24/7
                </h4>

                <p className="text-gray-200">
                  Support
                </p>
              </div>



              <div>
                <h4 className="
                  text-3xl
                  font-bold
                  text-[#ECF39E]
                ">
                  360°
                </h4>

                <p className="text-gray-200">
                  Guidance
                </p>
              </div>


            </div>


          </div>


        </div>


      </div>


    </section>











 








 


  
   
   
   
   
   
    </div>


     
  );
};


export default IncuvationCell