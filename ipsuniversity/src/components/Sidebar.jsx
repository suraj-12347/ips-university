import React, { useState } from "react";
import pharma from "../images1/edu2.jpeg";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  Building2,
  Users,
  Briefcase,
  Microscope,
  CalendarDays,
  Phone,
  BookOpen,
  Newspaper,
  Award,
  Image,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: "",
      name: "Overview",
      icon: <LayoutDashboard size={18} />,
    },

    {
      id: "hod-message",
      name: "HOD Message",
      icon: <Building2 size={18} />,
    },

    {
      id: "faculty",
      name: "Faculty",
      icon: <GraduationCap size={18} />,
    },

    {
      id: "scope",
      name: "Scope",
      icon: <BookOpen size={18} />,
    },

    {
      id: "activity",
      name: "Activity",
      icon: <Users size={18} />,
    },

    {
      id: "features",
      name: "Salient Features",
      icon: <Microscope size={18} />,
    },

    {
      id: "testimonials",
      name: "Testimonials",
      icon: <Briefcase size={18} />,
    },

    {
      id: "research",
      name: "Research",
      icon: <Award size={18} />,
    },

    {
      id: "events",
      name: "Events",
      icon: <CalendarDays size={18} />,
    },

    {
      id: "achievements",
      name: "Achievements",
      icon: <Newspaper size={18} />,
    },

    {
      id: "gallery",
      name: "Gallery",
      icon: <Image size={18} />,
    },

   
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-35 left-1 z-[9999] md:hidden bg-[var(--forest)] text-white p-2 rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[10] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-35 left-0 z-20
         
          h-[90vh] w-[250px]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          md:static
          md:w-[210px]
          
          bg-[var(--forest)]
          text-white
          
        `}
        // style={{
        //   backgroundImage: `url(${pharma})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "left top",
        // }}
      >
        {/* <div className="absolute inset-0 bg-black/40 rounded-tr-4xl " /> */}

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 text-white md:hidden"
        >
          <X size={24} />
        </button>

        {/* Links */}
        <div className="relative z-10 pt-14 md:pt-5 pl-3 flex flex-col gap-1 rounded-tr-4xl ">
          {links.map((item) => (
            <NavLink
              key={item.id}
              to={item.id ? `/page5/${item.id}` : "/page5"}
              end={item.id === ""}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-l-xl transition-all duration-300 ${
                  isActive
                    ? "bg-white text-[var(--forest)]"
                    : "text-white hover:bg-white/10"
                }`
              }
            >
              {item.icon}
              <span className="text-sm font-medium">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;