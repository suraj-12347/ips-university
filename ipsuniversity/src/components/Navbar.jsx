import React, { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import { ArrowRight } from "lucide-react";
import edubuild3 from "../images1/edubuild7.png";
// import edubuild3 from "../images1/edu2.jpeg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    {
      title: "About",
      dropdown: [
        "Overview",
        "Vision & Mission",
        "Leadership",
        "Infrastructure",
      ],
    },
    {
      title: "Academics",
      dropdown: [
        "Schools",
        "Programmes",
        "Research",
        "Faculty",
      ],
    },
    {
      title: "Admissions",
      dropdown: [
        "Apply",
        "Fee Structure",
        "Scholarship",
      ],
    },
    {
      title: "Campus",
      dropdown: [
        "Hostel",
        "Sports",
        "Library",
      ],
    },
    {
      title: "Placements",
      dropdown: [
        "Training",
        "Recruiters",
      ],
    },
    {
      title: "Contact",
      dropdown: [],
    },
  ];

  return (
    <>
      <header className="relative w-full z-[9998] py-15"
      
        style={{
                      backgroundImage: `url(${edubuild3})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}>


              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-0"></div>                
  <div className="max-w-[1450px] mx-auto px-8 flex items-center gap-5">

    {/* LOGO CARD */}
    <div
      className="
        w-[270px]
        h-[105px]
        bg-white
       
       
        
        
        flex
        items-center
        justify-center
        px-5
        rounded-xl
        shrink-0
        z-10
      "
      // style={{
      //   clipPath: "polygon(18% 0%,100% 0%,100% 100%,0% 100%,0% 28%)",
      // }}
    >
      <Logo />
    </div>

    {/* NAVBAR */}
   <div className="py-2 px-2  rounded-xl backdrop-blur-lg bg-white/30 flex-1">
     <div
      className="
        flex-1
        h-[88px]
        bg-white
        
       z-50
        
        rounded-xl
       
 bg-white
 
        px-8
        flex
        items-center
        justify-between
         backdrop-blur-md
      "
    >
      {/* LINKS */}
      <nav className="hidden lg:flex items-center gap-7 flex-1">

        {navLinks.map((item) => (
          <DropdownMenu
            key={item.title}
            title={item.title}
            items={item.dropdown}
          />
        ))}

      </nav>

      {/* BUTTON */}
      <div className="hidden lg:flex shrink-0 ml-8">

        <button
          className="
            group
            h-[50px]
            bg-[var(--forest)]
            rounded-full
            pl-6
            pr-2
            text-white
            text-[15px]
            font-semibold
            flex
            items-center
            gap-3
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-lg
          "
        >
          <span>Enquiry Now</span>

          <span
            className="
              w-10
              h-10
              rounded-full
              bg-white
              flex
              items-center
              justify-center
              transition-all
              duration-300
              group-hover:translate-x-1
            "
          >
            <ArrowRight
              size={18}
              className="text-[var(--forest)]"
            />
          </span>
        </button>

      </div>

      {/* MOBILE */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden"
      >
        <Menu size={30} />
      </button>
    </div>
   </div>

  </div>
</header>

      <MobileMenu
        open={mobileOpen}
        setOpen={setMobileOpen}
        links={navLinks}
      />
    </>
  );
};

export default Navbar;