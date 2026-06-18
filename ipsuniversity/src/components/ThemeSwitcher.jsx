// ThemeSwitcher.jsx

import React, { useEffect, useState } from "react";

const themes = [
  {
    name: "green",
    color: "bg-green-700",
  },
  {
    name: "red",
    color: "bg-red-700",
  },
  {
    name: "purple",
    color: "bg-purple-700",
  },
  
];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("green");

  useEffect(() => {
    document.documentElement.classList.remove(
      "red",
      "purple",
      "blue",
      "orange",
      "dark"
    );

    if (theme !== "green") {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className="flex flex-col items-center gap-2 p-4 fixed top-30 -left-2 z-50">

      {themes.map((item, index) => (
        <button
          key={index}
          onClick={() => setTheme(item.name)}
          className={`
            relative
            w-3
            h-3
            
            cursor-pointer
            transition-all
            duration-300
            hover:scale-120
            ${item.color}
          `}
        >

          {/* Active Ring */}
          {theme === item.name && (
            <span
              className="
                absolute
                inset-[-4px]
                
                
              "
            ></span>
          )}

        </button>
      ))}

    </div>
  );
};

export default ThemeSwitcher;