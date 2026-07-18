import React from "react";
import { ChevronDown } from "lucide-react";

const DropdownMenu = ({ title, items = [] }) => {
  if (!items.length) {
    return (
      <a
        href="#"
        className="
        relative
        text-[15px]
        font-medium
        text-gray-700
        hover:text-[var(--forest)]
        transition
        duration-300
      "
      >
        {title}
      </a>
    );
  }

  return (
    <div className="relative group">

      <button
        className="
        flex
        items-center
        gap-1
        text-[15px]
        font-medium
        text-gray-700
        hover:text-[var(--forest)]
        transition
        duration-300
      "
      >
        {title}

        <ChevronDown
          size={17}
          className="
          transition-transform
          duration-300
          group-hover:rotate-180
        "
        />
      </button>

      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        top-[55px]
        w-64
        bg-white
        rounded-3xl
        shadow-2xl
        opacity-0
        invisible
        translate-y-4
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        transition-all
        duration-300
        overflow-hidden
        border
        border-gray-100
      "
      >
        <div className="py-3">

          {items.map((item) => (

            <a
              key={item}
              href="#"
              className="
              flex
              items-center
              px-6
              py-3
              text-[15px]
              text-gray-700
              hover:bg-[var(--forest)]
              hover:text-white
              transition-all
              duration-300
            "
            >
              {item}
            </a>

          ))}

        </div>
      </div>

    </div>
  );
};

export default DropdownMenu;