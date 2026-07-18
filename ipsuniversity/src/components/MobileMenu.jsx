import React from "react";
import { X, ChevronDown } from "lucide-react";

const MobileMenu = ({ open, setOpen, links }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b">
          <h2 className="text-xl font-bold text-[var(--forest)]">
            IPS University
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="py-5">

          {links.map((item, index) => (

            <details
              key={index}
              className="group border-b border-gray-100"
            >
              <summary
                className="
                  list-none
                  flex
                  justify-between
                  items-center
                  px-6
                  py-4
                  cursor-pointer
                  text-gray-700
                  font-medium
                  hover:bg-gray-50
                "
              >
                {item.title}

                {item.dropdown?.length > 0 && (
                  <ChevronDown
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-open:rotate-180
                    "
                  />
                )}
              </summary>

              {item.dropdown?.length > 0 && (
                <div className="pb-3">

                  {item.dropdown.map((sub) => (

                    <a
                      key={sub}
                      href="#"
                      className="
                        block
                        py-3
                        pl-10
                        text-[15px]
                        text-gray-500
                        hover:text-[var(--forest)]
                        hover:bg-green-50
                        transition
                      "
                    >
                      {sub}
                    </a>

                  ))}

                </div>
              )}
            </details>

          ))}

          {/* Button */}

          <div className="px-6 mt-8">

            <button
              className="
                w-full
                h-12
                rounded-full
                bg-[var(--forest)]
                text-white
                font-semibold
                hover:scale-105
                transition
                duration-300
              "
            >
              Enquiry Now
            </button>

          </div>

        </div>
      </div>
    </>
  );
};

export default MobileMenu;