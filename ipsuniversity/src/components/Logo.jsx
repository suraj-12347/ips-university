import React,{useState,useEffect} from 'react'


import logored from "../images1/ipslogored.png";
import logogreen from "../images1/ipslogogreen2.png";
import Topbar2 from "./Topbar2";
import Topbar3 from './Topbar3'

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
 const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("green");

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;

      if (html.classList.contains("red")) {
        setTheme("red");
      } 
      else if (html.classList.contains("purple")) {
        setTheme("purple");
      } 
      else if (html.classList.contains("blue")) {
        setTheme("blue");
      } 
      else if (html.classList.contains("dark")) {
        setTheme("dark");
      } 
      else {
        setTheme("green");
      }
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
    <div className='flex w-10 md:w-30 items-center  justify-start'>
         <a href="/page2" className="flex items-center shrink-0 mb-5">
           <img
            src={themeLogos[theme]}
            alt="logo"
            className="md:h-[70px] h-[60px] object-contain "
          />
        </a>
        <h2 className="text-3xl font-roboto font-bold text-[var(--forest)]  mb-5  mr-1 .logo ">IPS 

            
        </h2>
        <p className='text-xl font-roboto font-bold text-[var(--forest)] mb-5 '>UNIVERSITY</p>
      
    </div>
  )
}

export default Logo
