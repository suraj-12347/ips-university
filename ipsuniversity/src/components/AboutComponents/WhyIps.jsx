/* ===================================================== */
/* WHY IPS UNIVERSITY - PART 1A                          */
/* Hero Section                                          */
/* Paste this below <main className="w-full mt-10 lg:mt-30"> */
/* ===================================================== */

import { ArrowRight, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {useRef} from "react";

import WHY_HERO from "../../images1/ctm1900.png";
import ctmStudent from '../../images1/ctmstudents.jpeg'
 // Change image if required

const differenceData = [
  {
    title: "Learning Beyond Classrooms",
    desc: "Knowledge comes alive through projects, workshops, industry visits and real-world experiences that prepare students for future challenges.",
    number: "01",
  },
  {
    title: "Faculty Who Mentor",
    desc: "Our educators guide students beyond academics, helping them discover strengths, build confidence and grow as individuals.",
    number: "02",
  },
  {
    title: "Industry Focused Education",
    desc: "Curriculum is continuously aligned with changing technologies and industry expectations to ensure career readiness.",
    number: "03",
  },
  {
    title: "Innovation & Research",
    desc: "Students are encouraged to question, create and transform ideas into impactful solutions through innovation and research.",
    number: "04",
  },
  {
    title: "Safe & Inclusive Campus",
    desc: "A respectful and welcoming environment where every student can learn, collaborate and thrive with confidence.",
    number: "05",
  },
  {
    title: "Values That Last",
    desc: "Integrity, responsibility and ethical leadership remain at the heart of every educational journey at IPS University.",
    number: "06",
  },
];

const pillars = [
  {
    title: "Knowledge",
    desc: "Building strong academic foundations through quality education.",
  },
  {
    title: "Innovation",
    desc: "Encouraging curiosity, creativity and problem-solving.",
  },
  {
    title: "Integrity",
    desc: "Developing responsible professionals with strong ethics.",
  },
  {
    title: "Leadership",
    desc: "Preparing students to lead with confidence and purpose.",
  },
];
const stats = [
  {
    number: "20+",
    title: "Academic Programs",
    desc: "Undergraduate, postgraduate and doctoral programmes across multiple disciplines.",
  },
  {
    number: "2000+",
    title: "Students",
    desc: "A vibrant community of learners building successful careers every year.",
  },
  {
    number: "100+",
    title: "Faculty Members",
    desc: "Experienced educators committed to academic excellence and mentorship.",
  },
  {
    number: "80+",
    title: "Acres Campus",
    desc: "A green, modern campus designed for learning, research and student life.",
  },
];


const timeline = [
  {
    time: "8:30 AM",
    title: "Morning Campus Arrival",
    image:
     'https://i.pinimg.com/736x/f5/84/f8/f584f8d5e5943c0d9f6c517ed3018d0c.jpg',
    desc:
      "Students arrive on a vibrant green campus, greeting friends and preparing for a productive day of learning.",
  },

  {
    time: "10:00 AM",
    title: "Interactive Classroom Learning",
    image:
      "https://i.pinimg.com/736x/34/a2/4b/34a24bbc8cb1d5169aee71cad45ac2c2.jpg",
    desc:
      "Interactive lectures, collaborative discussions and engaging classroom experiences encourage active participation.",
  },

  {
    time: "12:30 PM",
    title: "Library & Discussion Spaces",
    image:
      "https://i.pinimg.com/736x/4f/4e/bf/4f4ebf8d16655184500459c4acab1202.jpg",
    desc:
      "Students explore ideas, conduct research and collaborate with peers in modern learning spaces.",
  },

  {
    time: "2:00 PM",
    title: "Laboratories & Practical Learning",
    image:
      "https://i.pinimg.com/1200x/6b/4c/6c/6b4c6c54c206b50db450e93d3d2b0cd1.jpg",
    desc:
      "Practical sessions transform theoretical concepts into real-world skills through modern laboratories.",
  },

  {
    time: "4:00 PM",
    title: "Clubs, Sports & Student Activities",
    image:
      "https://i.pinimg.com/1200x/c9/f2/26/c9f22612a200ff4ba90087cb3c7e9099.jpg",
    desc:
      "Sports, clubs and cultural activities build confidence, teamwork and leadership beyond academics.",
  },

  {
    time: "6:00 PM",
    title: "A Day Filled With New Experiences",
    image:
      "https://i.pinimg.com/1200x/ed/d2/78/edd278f853728b24fb3fc7102ff00f0c.jpg",
    desc:
      "As the sun sets, students leave with new friendships, fresh knowledge and memories that shape their future.",
  },
];


 const campusEnvironmentData = {
  badge: "Campus Environment",

  heading: "Designed For Learning, Built For Growth",

  description:
    "A university should inspire learning beyond classrooms. At IPS University, every space is thoughtfully designed to encourage academic excellence, creativity, collaboration and personal development.",

  image:
    "https://images.unsplash.com/photo-1562774053-701939374585",

  features: [
    {
      title: "Green Campus",
      description:
        "A peaceful environment that promotes focus, wellbeing and an enjoyable learning experience.",
    },

    {
      title: "Modern Learning Spaces",
      description:
        "Smart classrooms equipped to support interactive and engaging teaching methods.",
    },

    {
      title: "Advanced Laboratories",
      description:
        "Hands-on practical learning with modern laboratories across disciplines.",
    },

    {
      title: "Central Library",
      description:
        "Thousands of academic resources, digital references and quiet study areas.",
    },

    {
      title: "Sports & Wellness",
      description:
        "Facilities that encourage physical fitness, teamwork and balanced student life.",
    },

    {
      title: "Safe Student Environment",
      description:
        "A welcoming campus focused on security, inclusivity and student well-being.",
    },
  ],
};

 const studentLifeData = {
  badge: "Student Life",

  heading: "Learning Continues Beyond The Classroom",

  description:
    "University life is shaped not only by lectures but also by experiences that build confidence, leadership and lifelong friendships.",

  activities: [
    {
      title: "Technical Clubs",
      description:
        "Coding clubs, robotics, hackathons and technical communities encourage innovation and teamwork.",

      image:
        "https://i.pinimg.com/736x/f8/c5/ef/f8c5ef5e69be14200ff3672ea2a98bf2.jpg",
    },

    {
      title: "Cultural Festivals",
      description:
        "Annual celebrations, music, dance and creative performances bring the campus together.",

      image:
        "https://i.pinimg.com/736x/e0/6d/81/e06d81cce845e0747c5e795f72899783.jpg",
    },

    {
      title: "Innovation & Entrepreneurship",
      description:
        "Students transform ideas into projects through innovation cells and entrepreneurial initiatives.",

      image:
        "https://i.pinimg.com/736x/43/ea/38/43ea387cdec9a7e1c5c5fd855c3091c5.jpg",
    },

    {
      title: "Sports & Fitness",
      description:
        "Sports facilities promote teamwork, discipline and a healthy lifestyle.",

      image:
        "https://i.pinimg.com/736x/81/71/9b/81719b6d22e96bb4bcf0ade93e6cd26b.jpg",
    },
  ],
};

 const careerJourneyData = {
  badge: "Career Readiness",

  heading: "Preparing Students For Successful Careers",

  description:
    "Career success is built step by step. At IPS University, students gain practical exposure, professional skills and industry insights throughout their academic journey.",

  steps: [
    {
      year: "01",
      title: "Strong Academic Foundation",
      description:
        "Concept-based learning supported by experienced faculty and modern teaching methods.",
    },

    {
      year: "02",
      title: "Projects & Practical Learning",
      description:
        "Hands-on projects, laboratories and real-world problem solving strengthen technical skills.",
    },

    {
      year: "03",
      title: "Internships & Industry Exposure",
      description:
        "Students interact with industry professionals through internships, workshops and industrial visits.",
    },

    {
      year: "04",
      title: "Professional Skill Development",
      description:
        "Communication, teamwork, aptitude and leadership training prepare students for professional environments.",
    },

    {
      year: "05",
      title: "Placement Support",
      description:
        "Career guidance, mock interviews, resume building and recruitment drives help students begin successful careers.",
    },
  ],
};

const testimonialsData = {
  badge: "Voices of Trust",

  heading: "Trusted By Students, Parents & Recruiters",

  description:
    "A university is best defined by the experiences of the people who are part of it. Their journey reflects our commitment towards quality education and holistic development.",

  testimonials: [
    {
      type: "Student",
      name: "Aarav Sharma",
      role: "B.Tech Computer Science",
      image:
        "https://i.pinimg.com/736x/9a/55/5b/9a555bf6bbe51b3e1ef11bd8b47dbc29.jpg",
      review:
        "IPS University gave me opportunities beyond academics. The practical learning, faculty support and campus environment helped me grow with confidence.",
    },

    {
      type: "Parent",
      name: "Meera Verma",
      role: "Parent",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      review:
        "As parents, we wanted a safe environment with quality education. IPS provided both. We have seen tremendous positive changes in our child's confidence and personality.",
    },

    {
      type: "Recruiter",
      name: "Rahul Mehta",
      role: "Talent Acquisition Manager",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      review:
        "Students from IPS demonstrate strong technical knowledge, adaptability and professional ethics, making them valuable additions to our workforce.",
    },
  ],
};


const WhyIps = () => {

   const sectionRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset:["start end","end start"]
});


const imageScale = useTransform(
  scrollYProgress,
  [1,1.2,1],
  [0,0.5,1],
  
);






return(

<>





<section
  className="relative  overflow-hidden flex items-center mt-30 py-10"
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
          Why IPS University
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
          max-w-xl
        "
      >
        Where
       
        Ambition Meets
       
        Opportunity
      </h1>

      {/* Description */}

      <p
        className="
          mt-7
          text-base
          md:text-md
          leading-6
          text-gray-200
          max-w-xl
        "
      >
        Choosing the right university is about more than earning a
        degree. It is about becoming part of an environment that
        nurtures knowledge, values, innovation and lifelong success.
        At IPS University, every student is encouraged to learn,
        lead and grow with confidence.
      </p>

      {/* Buttons */}

     

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
          to="/about"
          className="hover:text-[#578B07] transition"
        >
          About
        </Link>

        <ArrowRight size={15} />

        <span className="text-[#578B07] font-semibold">
          Why IPS University
        </span>

      </div>

    </div>

  </div>

</section>



<section
  ref={sectionRef}
  className="py-24 bg-white overflow-hidden"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div
      className="
        grid
        lg:grid-cols-2
        gap-16
        items-center
      "
    >


      {/* LEFT IMAGE */}

      <div className="relative">


        <div
          className="
            absolute
            -left-5
            -bottom-5
            w-full
            h-full
            border-2
            border-[#578B07]/20
            rounded-[32px]
          "
        />


        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            shadow-xl
          "
        >

          <motion.img
            src={ctmStudent}
            alt="Students at IPS"

           

            className="
              w-full
              h-[580px]
              object-cover
            "
          />

        </div>


      </div>





      {/* RIGHT CONTENT */}


      <div>


        <div
          className="
            flex
            items-center
            gap-3
            mb-6
          "
        >

          <div
            className="
              w-12
              h-[2px]
              bg-[#578B07]
            "
          />


          <span
            className="
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
              text-[#578B07]
            "
          >
            A Promise To Parents
          </span>

        </div>





        <h2
          className="
            text-4xl
            lg:text-5xl
            font-bold
            leading-tight
            text-[#31572c]
          "
        >

          Education You Can Trust.
          <br />
          A Future They Can Build.

        </h2>





        <div
          className="
            w-24
            h-1
            rounded-full
            bg-[#578B07]
            my-8
          "
        />





        <p
          className="
            text-gray-600
            leading-8
            text-lg
          "
        >

          At IPS University, education extends far beyond classrooms.
          We cultivate curiosity, discipline and confidence while
          creating opportunities for every learner to discover
          their strengths and achieve meaningful success.

        </p>




        <p
          className="
            mt-6
            text-gray-600
            leading-8
            text-lg
          "
        >

          Parents are not simply choosing an institution.
          They are choosing mentors, values, lifelong friendships
          and an environment that influences the future of
          their children every single day.

        </p>






        <div
          className="
            mt-10
            border-l-4
            border-[#578B07]
            pl-6
          "
        >

          <p
            className="
              text-2xl
              leading-10
              italic
              text-[#31572c]
            "

            style={{
              fontFamily:"Fraunces, serif"
            }}
          >

            "A university should inspire students to become
            responsible professionals, thoughtful leaders
            and compassionate human beings."

          </p>


        </div>






        <div className="mt-10">


          <div
            className="
              w-14
              h-[2px]
              bg-[#578B07]
              mb-4
            "
          />


          <h4
            className="
              text-xl
              font-semibold
              text-[#31572c]
            "
          >
            IPS University
          </h4>


          <p className="text-gray-500">
            Building Futures Since 2005
          </p>


        </div>



      </div>


    </div>


  </div>


</section>






<section className="py-24 bg-[#fafafa]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        The IPS Difference
      </span>

      <h2
        className="
          text-4xl
          lg:text-5xl
          mt-5
          leading-tight
          font-bold
          text-[#31572c]
        "
      >
        What Makes Learning
        Different At IPS?
      </h2>

      <div className="w-24 h-1 bg-[#578B07] rounded-full mx-auto my-7" />

      <p className="text-gray-600 leading-8 text-lg">
        Every university offers classrooms.
        What truly defines an institution is the
        environment it creates for learning,
        innovation and personal growth.
      </p>

    </div>

    {/* Cards */}

    <div
      className="
        mt-20
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
    >

      {differenceData.map((item) => (

        <div
          key={item.number}
          className="
            group
            relative
            bg-white
            rounded-[28px]
            p-8
            border
            border-gray-200
            hover:border-[#578B07]
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >

          {/* Number */}

          <h1
            className="
              text-6xl
              font-bold
              text-[#31572c]/10
              mb-6
              group-hover:text-[#578B07]/20
              transition
            "
          >
            {item.number}
          </h1>

          {/* Line */}

          <div
            className="
              w-12
              h-[3px]
              rounded-full
              bg-[#578B07]
              mb-6
            "
          />

          {/* Title */}

          <h3
            className="
              text-2xl
              font-bold
              text-[#31572c]
              mb-5
            "
          >
            {item.title}
          </h3>

          {/* Description */}

          <p
            className="
              text-gray-600
              leading-8
            "
          >
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>






<section className="py-28 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[5px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Our Foundation
      </span>


      <h2
        className="
          mt-5
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
          leading-tight
        "
        style={{
          fontFamily:"Fraunces, serif"
        }}
      >
        Four Pillars That Define
        <br/>
        The IPS Journey
      </h2>


      <div
        className="
          w-20
          h-1
          bg-[#578B07]
          rounded-full
          mx-auto
          my-7
        "
      />


      <p className="
        text-gray-600
        text-lg
        leading-8
      ">
        Built on strong values and a clear vision,
        these four foundations guide every student's
        growth and success.
      </p>

    </div>



    {/* Pillars */}


    <div className="
      mt-20
      grid
      sm:grid-cols-2
      lg:grid-cols-4
      gap-8
    ">


      {pillars.map((item,index)=>(


        <div
          key={index}
          className="
            relative
            bg-[#fbfcf7]
            rounded-3xl
            p-8
            pt-12
            text-center
            border
            border-[#e5ecd7]
            hover:shadow-xl
            transition
            duration-300
          "
        >


          {/* Number */}

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-16
              h-16
              rounded-full
              bg-[#31572c]
              flex
              items-center
              justify-center
              text-white
              text-xl
              font-bold
              border-4
              border-white
              shadow-lg
            "
          >
            0{index+1}
          </div>



          {/* Icon */}

          <div
            className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-[#ecf39e]
              flex
              items-center
              justify-center
              text-[#31572c]
              text-3xl
            "
          >
            ✦
          </div>



          {/* Title */}

          <h3
            className="
              mt-7
              text-2xl
              font-bold
              text-[#31572c]
            "
          >
            {item.title}
          </h3>



          {/* Description */}

          <p
            className="
              mt-4
              text-gray-600
              leading-7
            "
          >
            {item.desc}
          </p>



          {/* Bottom Line */}

          <div
            className="
              mt-7
              w-12
              h-[3px]
              bg-[#90a955]
              mx-auto
              rounded-full
            "
          />


        </div>


      ))}


    </div>


  </div>

</section>







<section className="py-24 bg-[#fafafa]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        IPS At A Glance
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
        Numbers That Reflect
        Our Journey
      </h2>

      <div className="w-24 h-1 bg-[#578B07] rounded-full mx-auto my-7" />

      <p className="text-gray-600 leading-8 text-lg">
        Behind every achievement is a commitment to quality education,
        innovation and continuous growth.
      </p>

    </div>

    <div
      className="
        mt-20
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-7
      "
    >

      {stats.map((item, index) => (

        <div
          key={index}
          className="
            bg-white
            rounded-[28px]
            border
            border-gray-200
            p-8
            text-center
            hover:-translate-y-2
            hover:border-[#578B07]
            transition-all
            duration-300
          "
        >

          <h2
            className="
              text-5xl
              font-bold
              text-[#31572c]
            "
          >
            {item.number}
          </h2>

          <div className="w-12 h-[3px] bg-[#578B07] rounded-full mx-auto my-5" />

          <h3
            className="
              text-xl
              font-semibold
              text-[#31572c]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-4
              text-gray-600
              leading-7
            "
          >
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>



<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6 lg:px-10">


<div className="text-center max-w-3xl mx-auto">

<span className="
uppercase
tracking-[4px]
text-sm
font-semibold
text-[#578B07]
">
Experience IPS
</span>


<h2 className="
text-5xl
font-bold
text-[#31572c]
mt-5
">
A Day At IPS University
</h2>


<div className="
w-24
h-1
bg-[#578B07]
rounded-full
mx-auto
my-7
"/>


<p className="
text-lg
text-gray-600
leading-8
">
Discover how every hour on campus contributes to learning,
friendship and personal growth.
</p>


</div>





<div className="mt-24 space-y-24">


{timeline.map((item,index)=>{


const imageRef = useRef(null);


const {scrollYProgress} = useScroll({

target:imageRef,

offset:[
"start end",
"end start"
]

});


const imageScale = useTransform(

scrollYProgress,

[0,0.5,1],

[1,1.12,1]

);



return (

<div
key={index}
className={`
grid
lg:grid-cols-2
gap-14
items-center
${index%2===1 ? "lg:[&>*:first-child]:order-2" : ""}
`}
>



{/* Image */}

<div ref={imageRef}>

<div
className="
overflow-hidden
rounded-[28px]
shadow-xl
"
>


<motion.img

src={item.image}

alt={item.title}

style={{
scale:imageScale
}}

className="
w-full
h-[420px]
object-cover
"

/>


</div>


</div>






{/* Content */}


<div>


<div
className="
inline-flex
px-5
py-2
rounded-full
bg-[#31572c]
text-white
font-semibold
"
>

{item.time}

</div>




<h3
className="
text-4xl
font-bold
text-[#31572c]
mt-6
leading-tight
"
>

{item.title}

</h3>




<div
className="
w-20
h-1
bg-[#578B07]
rounded-full
my-7
"
/>





<p
className="
text-lg
leading-8
text-gray-600
"
>

{item.desc}

</p>


</div>



</div>


)

})}



</div>



</div>


</section>


{/* ===================================================== */}
{/* CAMPUS ENVIRONMENT SECTION START                      */}
{/* Next -> Student Life Section                          */}
{/* ===================================================== */}

<section className="py-28 bg-[#fafafa]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-1 gap-20 items-center">

      {/* Image */}

    

      {/* Content */}

      <div>

        <span
          className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[#578B07]
          "
        >
          {campusEnvironmentData.badge}
        </span>

        <h2
          className="
            text-5xl
            font-bold
            text-[#31572c]
            mt-5
            leading-tight
          "
        >
          {campusEnvironmentData.heading}
        </h2>

        <div className="w-24 h-1 bg-[#578B07] rounded-full my-7" />

        <p
          className="
            text-lg
            leading-8
            text-gray-600
          "
        >
          {campusEnvironmentData.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">

          {campusEnvironmentData.features.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-6
                border
                border-gray-200
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                  text-[#31572c]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  text-gray-600
                  leading-7
                "
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* ===================================================== */}
{/* CAMPUS ENVIRONMENT SECTION END                        */}
{/* Paste Student Life Section Below                      */}
{/* ===================================================== */}

{/* ===================================================== */}
{/* STUDENT LIFE SECTION START                            */}
{/* Paste Below Campus Environment                        */}
{/* Next -> Industry & Career Section                     */}
{/* ===================================================== */}

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6 lg:px-10">


<div className="text-center max-w-3xl mx-auto">

<span className="
uppercase
tracking-[4px]
text-sm
font-semibold
text-[#578B07]
">
{studentLifeData.badge}
</span>


<h2
className="
text-5xl
font-bold
text-[#31572c]
mt-5
leading-tight
"
>
{studentLifeData.heading}
</h2>


<div className="
w-24
h-1
bg-[#578B07]
rounded-full
mx-auto
my-7
"/>


<p
className="
text-lg
leading-8
text-gray-600
"
>
{studentLifeData.description}
</p>


</div>





<div className="mt-24 space-y-24">


{studentLifeData.activities.map((item,index)=>{


const imageRef = useRef(null);


const {scrollYProgress} = useScroll({

target:imageRef,

offset:[
"start end",
"end start"
]

});


const imageScale = useTransform(

scrollYProgress,

[0,0.5,1],

[1,1.12,1]

);



return (

<div
key={index}
className={`
grid
lg:grid-cols-2
gap-16
items-center
${index%2!==0 ? "lg:[&>*:first-child]:order-2" : ""}
`}
>



{/* IMAGE */}

<div ref={imageRef}>

<div
className="
overflow-hidden
rounded-[30px]
shadow-xl
"
>


<motion.img

src={item.image}

alt={item.title}

style={{
scale:imageScale
}}

className="
w-full
h-[420px]
object-cover
"

/>


</div>


</div>






{/* CONTENT */}


<div>


<span
className="
inline-block
px-5
py-2
rounded-full
bg-[#31572c]
text-white
text-sm
"
>
0{index+1}
</span>




<h3
className="
text-4xl
font-bold
text-[#31572c]
mt-6
leading-tight
"
>
{item.title}
</h3>





<div
className="
w-20
h-1
bg-[#578B07]
rounded-full
my-7
"
/>





<p
className="
text-lg
leading-8
text-gray-600
"
>
{item.description}
</p>



</div>



</div>

)

})}



</div>



</div>


</section>

{/* ===================================================== */}
{/* STUDENT LIFE SECTION END                              */}
{/* Paste Industry & Career Section Below                 */}
{/* ===================================================== */}


{/* ===================================================== */}
{/* INDUSTRY & CAREER SECTION START                       */}
{/* Paste Below Student Life                              */}
{/* Next -> Voices of Trust                               */}
{/* ===================================================== */}

<section className="py-28 bg-[#fafafa]">

<div className="max-w-6xl mx-auto px-6 lg:px-10">

<div className="text-center max-w-3xl mx-auto">

<span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
{careerJourneyData.badge}
</span>

<h2
className="
text-5xl
font-bold
text-[#31572c]
mt-5
leading-tight
"
>
{careerJourneyData.heading}
</h2>

<div className="w-24 h-1 bg-[#578B07] rounded-full mx-auto my-7"/>

<p
className="
text-lg
leading-8
text-gray-600
"
>
{careerJourneyData.description}
</p>

</div>

<div className="relative mt-24">

{/* Vertical Line */}

<div
className="
hidden
md:block
absolute
left-8
top-0
bottom-0
w-[2px]
bg-[#31572c]/10
"
/>

<div className="space-y-14">

{careerJourneyData.steps.map((item,index)=>(

<div
key={index}
className="
relative
flex
gap-8
items-start
"
>

{/* Circle */}

<div
className="
relative
z-10
w-16
h-16
rounded-full
bg-[#31572c]
text-white
flex
items-center
justify-center
font-bold
text-lg
shadow-lg
flex-shrink-0
"
>
{item.year}
</div>

{/* Card */}

<div
className="
bg-white
rounded-[28px]
border
border-gray-200
p-8
w-full
hover:border-[#578B07]
transition-all
duration-300
"
>

<h3
className="
text-2xl
font-bold
text-[#31572c]
"
>
{item.title}
</h3>

<div className="w-16 h-1 bg-[#578B07] rounded-full my-5"/>

<p
className="
text-gray-600
leading-8
"
>
{item.description}
</p>

</div>

</div>

))}

</div>

</div>

</div>

</section>

{/* ===================================================== */}
{/* INDUSTRY & CAREER SECTION END                         */}
{/* Paste Voices of Trust Below                           */}
{/* ===================================================== */}

{/* ===================================================== */}
{/* VOICES OF TRUST SECTION START                         */}
{/* Paste Below Industry Section                          */}
{/* Next -> Final CTA Banner                              */}
{/* ===================================================== */}

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6 lg:px-10">

<div className="text-center max-w-3xl mx-auto">

<span
className="
uppercase
tracking-[4px]
text-sm
font-semibold
text-[#578B07]
"
>
{testimonialsData.badge}
</span>

<h2
className="
text-5xl
font-bold
text-[#31572c]
mt-5
leading-tight
"
>
{testimonialsData.heading}
</h2>

<div className="w-24 h-1 bg-[#578B07] rounded-full mx-auto my-7" />

<p
className="
text-lg
leading-8
text-gray-600
"
>
{testimonialsData.description}
</p>

</div>

<div
className="
grid
lg:grid-cols-3
gap-8
mt-20
"
>

{testimonialsData.testimonials.map((item,index)=>(

<div
key={index}
className="
bg-[#fafafa]
rounded-[30px]
overflow-hidden
border
border-gray-200
hover:border-[#578B07]
transition-all
duration-300
hover:-translate-y-2
"
>

<img
src={item.image}
alt={item.name}
className="
w-full
h-72
object-cover
"
/>

<div className="p-8">

<span
className="
inline-block
px-4
py-2
rounded-full
bg-[#31572c]
text-white
text-sm
"
>

{item.type}

</span>

<h3
className="
text-2xl
font-bold
text-[#31572c]
mt-6
"
>

{item.name}

</h3>

<p
className="
text-[#578B07]
mt-2
font-medium
"
>

{item.role}

</p>

<div
className="
w-16
h-1
bg-[#578B07]
rounded-full
my-6
"
/>

<p
className="
text-gray-600
leading-8
"
>

"{item.review}"

</p>

</div>

</div>

))}

</div>

</div>

</section>

{/* ===================================================== */}
{/* VOICES OF TRUST SECTION END                           */}
{/* Paste Final CTA Banner Below                          */}
{/* ===================================================== */}















</>



)






}


export default WhyIps