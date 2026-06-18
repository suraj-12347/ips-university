import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    "About University",
    "Admissions 2025–26",
    "All Programmes",
    "Placements & T&P",
    "Research & R&D",
    "Alumni Portal",
    "Downloads",
  ];

  const academics = [
    "School of Engineering",
    "School of Management",
    "School of Pharmacy",
    "School of Education",
    "School of Sciences",
    "Doctoral Studies",
    "Academic Calendar",
  ];

  const contact = [
    { icon: "📍", text: "P.O. IPS College, Shivpuri Link Road Gwalior (M.P.), India - 474001" },
    { icon: "📞", text: "+91-7247551411" },
    { icon: "✉️", text: "admissions@ipsuniversity.ac.in" },
    { icon: "🌐", text: "www.ipsuniversity.ac.in" },
    { icon: "⏰", text: "Mon–Sat: 9:00 AM – 5:00 PM" },
  ];

  return (
    <footer className="w-full bg-[var(--forest)] text-white pt-14 px-4 md:px-10">

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

        {/* ABOUT */}
        <div>
          <h2 className="text-2xl font-bold">IPS University</h2>

          <span className="text-white/60 text-sm">
            Gwalior, Madhya Pradesh · Est. 2005
          </span>

          <p className="text-white/70 text-sm mt-4 leading-6 text-justify">
            Institute of Professional Studies (IPS University), an organically growing institution in Gwalior with a sprawling 80-acre campus. Committed to quality education, research & innovation — Planting Future, one student at a time.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-3 mt-5">
            {["f", "𝕏", "▶", "in", "📷"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white  transition hover:text-[var(--forest)]"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* NEWSLETTER */}
          <div className="mt-5 flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-lg bg-white/10 outline-none"
            />
            <button className="bg-white text-[var(--forest)] py-2 rounded-lg font-semibold hover:opacity-90">
              Subscribe →
            </button>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-[var(--white)] font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-white/70">
            {quickLinks.map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ACADEMICS */}
        <div>
          <h4 className="text-[var(--white)] font-semibold mb-4">
            Academics
          </h4>

          <ul className="space-y-2 text-white/70">
            {academics.map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-[var(--white)] font-semibold mb-4">
            Contact Us
          </h4>

          <ul className="space-y-3 text-white/70 text-sm">
            {contact.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">

        <p>© 2026 IPS University, Gwalior. All Rights Reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0 flex-wrap justify-center">
          {["Privacy Policy", "Terms of Use", "Sitemap", "RTI", "Grievance"].map((item, i) => (
            <a key={i} href="#" className="hover:text-white">
              {item}
            </a>
          ))}
        </div>

      </div>

    </footer>
  );
};

export default Footer;