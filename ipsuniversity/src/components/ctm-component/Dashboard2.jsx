import React from "react";
import { Eye, Rocket, Target } from "lucide-react";
import pharma from "../../images1/ctmdashboard.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";

const AboutDepartment = () => {

  const slides = [
  {
  title: "Computer Science Department",
  image:
    pharma,
},
  {
    title: "Cultural Festival",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
  {
    title: "DJ Night",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    title: "Laboratory Programs",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
  },
  {
    title: "Industrial Visit",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },
  {
    title: "Seminar & Workshops",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
  },
  {
    title: "Annual Function",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
  },
  {
    title: "Campus Activities",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",
  },
];
  return (
  <section
  id="cse"
  className="relative pb-20 lg:py-2 overflow-hidden"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/736x/97/d2/ea/97d2ea714588e2cb6f757417c14d921f.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* White Overlay */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-[4px]"></div>

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-2 lg:px-4">
        {/* Heading */}
        <div className="text-center mb-2 md:mb-4">
          {/* <span className="text-xs md:text-sm tracking-[3px] md:tracking-[4px] uppercase text-[var(--forest)] font-semibold">
            IPS College of Technology & Management
          </span> */}

          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--forest)] mt-3 leading-tight"
             style={{
        
        
          fontFamily: "'Fraunces', serif",
          fontSize: 34,
          fontWeight: 600,
         
        }}>
            Department of <br className="hidden md:block" />
            Computer Science & Engineering
          
          </h2> */}

          {/* <p className="max-w-3xl mx-auto mt-4 md:mt-4 text-sm sm:text-base text-gray-600 leading-7 md:leading-8">
            Empowering students with modern computing knowledge,
            innovation, research culture and industry-oriented
            education.
          </p> */}
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-start mb-12 md:mb-20">

          {/* Image */}
          {/* <div>
            <img
              src={pharma}
              alt="Department"
              className="rounded-3xl shadow-xl h-[250px] sm:h-[350px] md:h-[450px] w-full object-cover object-top"

            />
          </div> */}
           <div className="w-full overflow-hidden rounded-3xl  shadow-xl">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    loop={true}
    className="w-full h-[250px] sm:h-[350px] md:h-[480px]"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-full">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
            <div className="p-6">
              <h3 className="text-white text-xl md:text-4xl font-bold">
                {slide.title}
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-[var(--forest)]  leading-tight w-full mb-5"
             style={{
        
        
          fontFamily: "'Fraunces', serif",
          
          fontWeight: 600,
         
        }}>
            <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-[var(--forest)]  leading-tight"
              style={{
        
        
          fontFamily: "'Fraunces', serif",
          
          fontWeight: 600,
         
        }}>Department of </p>
             Computer Science & Engineering
          
          </h2>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--forest)] mb-4 md:mb-6">
              About Department
            </h3>

            <p className="text-gray-600 leading-7 md:leading-8 mb-4">
              The Department of Computer Science & Engineering focuses
              on academic excellence, innovation and practical learning
              through modern laboratories and industry-oriented curriculum.
            </p>

            <p className="text-gray-600 leading-7 md:leading-8">
              Students are encouraged to participate in research,
              technical events, hackathons, coding competitions and
              real-world projects that prepare them for successful
              careers in the technology industry.
            </p>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">

          <div className="bg-green-50 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center shadow-sm">
            <h3 className="text-2xl md:text-4xl font-bold text-[var(--forest)]">
              2007
            </h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Established
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center shadow-sm">
            <h3 className="text-2xl md:text-4xl font-bold text-[var(--forest)]">
              300+
            </h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Lab Computers
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center shadow-sm">
            <h3 className="text-2xl md:text-4xl font-bold text-[var(--forest)]">
              16+
            </h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Faculty Members
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center shadow-sm">
            <h3 className="text-2xl md:text-4xl font-bold text-[var(--forest)]">
              AICTE
            </h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Approved
            </p>
          </div>

        </div>

        {/* Vision Mission Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

          <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-100">
            <Eye
              size={40}
              className="text-[var(--forest)] mb-4"
            />

            <h3 className="text-xl font-bold text-[var(--forest)] mb-4">
              Vision
            </h3>

            <p className="text-gray-600 leading-7">
              To be a centre of excellence in Computer Science
              education and produce globally competent engineers.
            </p>
          </div>

          <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-100">
            <Rocket
              size={40}
              className="text-[var(--forest)] mb-4"
            />

            <h3 className="text-xl font-bold text-[var(--forest)] mb-4">
              Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To impart quality education through innovation,
              modern laboratories, research activities and
              industry collaboration.
            </p>
          </div>

          <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-100">
            <Target
              size={40}
              className="text-[var(--forest)] mb-4"
            />

            <h3 className="text-xl font-bold text-[var(--forest)] mb-4">
              Objectives
            </h3>

            <p className="text-gray-600 leading-7">
              Develop technically competent graduates with
              leadership qualities, ethical values and
              lifelong learning skills.
            </p>
          </div>

        </div>

        {/* Gallery Section */}
<div className="mt-16 md:mt-24">
  <div className="text-center mb-10">
    <span className="text-sm uppercase tracking-[4px] text-[var(--forest)] font-semibold">
      Department Gallery
    </span>

    <h3 className="text-3xl md:text-5xl font-bold text-[var(--forest)] mt-3">
      Labs & Campus
    </h3>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <div className="group overflow-hidden rounded-3xl shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
        alt="Computer Lab"
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="bg-white p-4">
        <h4 className="font-semibold text-[var(--forest)]">
          Computer Lab
        </h4>
      </div>
    </div>

    <div className="group overflow-hidden rounded-3xl shadow-lg">
      <img
        src="https://res.cloudinary.com/jerrick/image/upload/v1748346799/6835a7af4e69ad001de96094.jpg"
        alt="Smart Classroom"
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="bg-white p-4">
        <h4 className="font-semibold text-[var(--forest)]">
          Smart Classroom
        </h4>
      </div>
    </div>

    <div className="group overflow-hidden rounded-3xl shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
        alt="Innovation Lab"
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="bg-white p-4">
        <h4 className="font-semibold text-[var(--forest)]">
          Innovation Lab
        </h4>
      </div>
    </div>

    <div className="group overflow-hidden rounded-3xl shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80"
        alt="Campus Environment"
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="bg-white p-4">
        <h4 className="font-semibold text-[var(--forest)]">
          Green Campus
        </h4>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  );
};

export default AboutDepartment;