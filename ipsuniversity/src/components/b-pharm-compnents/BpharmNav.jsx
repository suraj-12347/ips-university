import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function CourseNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Overview");

  const links = [
    { name: "Overview", id: "overview" },
    { name: "Faculty", id: "faculty" },
    { name: "Curriculum", id: "curriculum" },
    { name: "Admissions", id: "admissions" },
    { name: "Placements", id: "placements" },
    { name: "Contact", id: "contact" },
  ];

const smoothScrollTo = (targetY, duration = 1500) => {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime = null;

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Linear movement (no easing)
    const currentY = startY + distance * progress;

    window.scrollTo(0, currentY);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const handleClick = (link) => {
  setActive(link.name);
  setOpen(false);

  // URL me #curriculum aa jayega
  window.location.hash = link.id;

  const section = document.getElementById(link.id);

  if (section) {
    const offset = 120;
    const top =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

 smoothScrollTo(top, 1200); // Slow
  }
};

  return (
    <div
      className="
        absolute
        left-1/2
        lg:-bottom-18
        -bottom-25
        -translate-x-1/2
        w-[95%]
        lg:w-[70%]
        max-w-6xl
        z-50
      "
    >
      <nav className="bg-transparent rounded-2xl">
        {/* Desktop */}
        <div className="hidden lg:flex justify-center items-center h-20 px-8">
          <div className="flex items-center gap-4">
            {links.map((link) => (
              <div
                key={link.id}
                className="bg-white flex items-center justify-center pt-3 pb-4 rounded-2xl min-w-[130px]"
              >
                <button
                  onClick={() => handleClick(link)}
                  className="group"
                >
                  <span
                    className={`relative inline-block pb-2 text-[16px] font-semibold transition-colors duration-300 ${
                      active === link.name
                        ? "text-[var(--grass)]"
                        : "text-gray-700 group-hover:text-[var(--grass)]"
                    }`}
                  >
                    {link.name}

                    <span
                      className={`absolute left-0 bottom-0 h-[2.5px] rounded-full bg-[var(--grass)] transition-all duration-300 ${
                        active === link.name
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative">
          <div className="flex justify-between items-center h-16 px-5 bg-white rounded-2xl">
            <h3 className="font-semibold text-lg text-[var(--forest)]">
              Navigation
            </h3>

            <button
              onClick={() => setOpen(!open)}
              className="text-[var(--forest)]"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div
            className={`absolute top-full left-0 w-full bg-white rounded-b-2xl shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
              open
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link)}
                className={`block w-full text-left px-6 py-4 font-medium transition-colors ${
                  active === link.name
                    ? "text-[var(--grass)] bg-green-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}