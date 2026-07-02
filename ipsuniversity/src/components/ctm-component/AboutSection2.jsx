import React from "react";
import ctmprincipal from "../../images1/principal4.png";
import PrincipalCard from "./PrincipalCard";
import {
  Landmark,
  Target,
  Users,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const aboutItems = [
  {
    icon: Landmark,
    text: "Welcome to the Faculty of Engineering at IPS University, where academic excellence, innovation, and ethical values converge to prepare the engineers of tomorrow.",
  },
  {
    icon: Target,
    text: "As we begin a new chapter in 2027, we are committed to delivering industry-oriented education through our core engineering programmes and emerging fields such as Artificial Intelligence, Machine Learning, Artificial Intelligence & Data Science, Cyber Security, and other advanced technologies. Our focus is on nurturing future-ready professionals equipped with the knowledge and skills to excel in a rapidly evolving world.",
  },
  {
    icon: Users,
    text: `At IPS University, education goes beyond classrooms through research, innovation, industry collaborations, internships, and experiential learning. We strive to develop graduates who combine technical expertise with leadership, integrity, creativity, and social responsibility.

We firmly believe that engineering education should foster not only technical competence but also integrity, leadership, sustainability, and social responsibility. Our mission is to nurture professionals who are innovative, compassionate, and committed to improving lives through technology.

I warmly invite students, parents, alumni, academicians, and industry partners to join us in our mission of Planting Future and together engineer a smarter, sustainable, and better tomorrow.`,
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-3 items-center ">

          {/* Image */}
         
         <div className="pt-10"> <PrincipalCard/></div>
          {/* Content */}
        {/* Content */}
<div className="h-[500px] flex flex-col">

  {/* Heading */}
  <span className="uppercase tracking-[2px] text-xs font-semibold text-[#31573a]">
    About SOE
  </span>

  <div className="flex items-center mt-2 mb-2">
    <div className="w-10 h-[2px] bg-[#d6b16c]" />
    <div className="w-2 h-2 mx-2 rotate-45 border border-[#d6b16c]" />
    <div className="w-10 h-[2px] bg-[#d6b16c]" />
  </div>

  <h2 className="text-4xl font-bold text-[#31573a] font-serif leading-tight mb-4">
    School of Engineering
  </h2>

  {/* Timeline */}
  <div className="relative flex-1 overflow-y-auto pr-3 custom-scroll scrollb">

    {/* Vertical Line */}
    <div className="absolute left-[21px] top-5 bottom-5 w-[2px] bg-[#d9d9d9]" />

    {aboutItems.map((item, index) => {
      const Icon = item.icon;

      return (
        <div key={index} className="relative flex gap-4 pb-3">

          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full border bg-[#eef4ec] border-[#d9dfd6] flex-shrink-0">
            <Icon size={20} className="text-[#31573a]" />
          </div>

          {/* Text */}
          <p className="text-[14px] leading-6 text-gray-700 text-justify">
            {item.text}
          </p>

        </div>
      );
    })}

   
  </div>
   <button className="bg-[#31573a] text-white py-2 px-4 rounded-md hover:bg-[#214826] cursor-pointer w-1/4 ml-10 mt-2 transition-colors">
      Read More <ArrowRight size={16} className="inline-block ml-1"/> 
    </button>

</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;