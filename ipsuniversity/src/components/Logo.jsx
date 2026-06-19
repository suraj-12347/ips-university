import React, { useState, useEffect } from "react";

import logored from "../images1/ipslogored.png";
import logogreen from "../images1/ipslogogreen2.png";
import logopurple from "../images1/ipslogopurple.png";
import logoblue from "../images1/ipslogogreen2.png";
import logodark from "../images1/ipslogogreen2.png";
import orange from "../images1/ipslogogreen2.png";

const themeLogos = {
  green: logogreen,
  red: logored,
  purple: logopurple,
  blue: logoblue,
  dark: logodark,
  orange: orange,
};

const Logo = () => {
  const [theme, setTheme] = useState("green");

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;

      if (html.classList.contains("red")) setTheme("red");
      else if (html.classList.contains("purple")) setTheme("purple");
      else if (html.classList.contains("blue")) setTheme("blue");
      else if (html.classList.contains("dark")) setTheme("dark");
      else setTheme("green");
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <a
  href="/"
  className="flex items-center justify-start shrink-0"
>
  <img
    src={themeLogos[theme]}
    alt="logo"
    className="
      h-[60px]
      sm:h-[55px]
      md:h-[50px]
      lg:h-[70px]
      object-contain
    "
  />

  <h2
    className="
      ml-1
      text-[18px]
      sm:text-[22px]
      md:text-[28px]
     
      font-bold
      text-[var(--forest)]
      md:hidden xl:block
    "
  >
    IPS
  </h2>

  <p
    className="
      ml-1
      text-[12px]
      sm:text-[15px]
      md:text-[18px]
     
      font-bold
      text-[var(--forest)]
      md:hidden xl:block
    "
  >
    UNIVERSITY
  </p>
</a>
  );
};

export default Logo;