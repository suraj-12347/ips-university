import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, ChevronUp, Dot } from "lucide-react";
import edubuild3 from "../images1/navbarimage2.png";
import Logo from "./Logo2";
import Topbar3 from "./Topbar3";
import { Link } from "react-router-dom";
import ctm from "../images1/ctmlongpng4.png";
import pharmacy from "../images1/pharma4.png";
import education from "../images1/edubuild8.png";
import education1 from "../images1/edubuild2.png";

const aboutLinks = [
  { title: "Overview", path: "/about/overview" },
  { title: "Vision & Mission", path: "/about/vision-mission" },
  { title: "Leadership", path: "/about/leadership" },
  { title: "Officials", path: "/about/officials" },
  { title: "Governance / Administration", path: "/about/governance-administration" },
  { title: "Governance Framework", path: "/about/governance-framework" },
  { title: "Recognition / Approvals", path: "/about/recognition-approvals" },
  { title: "Advisors", path: "/about/advisors" },
  { title: "Why IPS University", path: "/about/why-ips-university" },
  { title: "Ordinance", path: "/about/ordinance" },
];

const admissionLinks = [
  { title: "Apply online & e-payment", path: "/about/overview" },
  { title: "Important dates", path: "/about/vision-mission" },
  { title: "Scholarship policy", path: "/about/leadership" },
  { title: "Downloads Brochure 2026-27", path: "/about/officials" },
  { title: "Fee refund policy 2026-27", path: "/about/governance-administration" },
  { title: "Hostel fee", path: "/about/governance-framework" },
  { title: "Fee structure 2026-27", path: "/about/governance-framework" },
];

// ==========================================================================
// 13 SCHOOLS — per Ordinance No. 2 (IPS University, Gwalior)
// Each School is now a standalone top-level entry (no 2 schools merged into
// one Faculty block). A "Certificate" program has been added to every
// School as requested.
// ==========================================================================
const schools = [
  {
    title: "Faculty of Engineering & Technology",
    image:
      ctm,
    description:
      "Empowering future engineers through innovation, research, and industry-oriented technical education.",
    programs: [
      {
        title: "Undergraduate",
        courses: [
          "B.Tech. Computer Science & Engineering",
          "B.Tech. Artificial Intelligence & Data Science",
          "B.Tech. Artificial Intelligence & Machine Learning",
          "B.Tech. Electronics & Communication Engineering",
          "B.Tech. Electrical Engineering",
          "B.Tech. Mechanical Engineering",
          "B.Tech. Civil Engineering",
          "B.Tech. Automobile Engineering",
        ],
      },
      {
        title: "Postgraduate",
        courses: [
          "M.Tech. Construction Technology & Management",
          "M.Tech. Structural Engineering",
          "M.Tech. Machine Design",
          "M.Tech. Production & Industrial Engineering",
          "M.Tech. Computer Science & Engineering (CSE)",
          "M.Tech. Cyber Security",
          "M.Tech. Data Science & Analytics",
          "M.Tech. Artificial Intelligence & Machine Learning",
        ],
      },
      {
        title: "Diploma",
        courses: ["Diploma in Engineering"],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Engineering & Technology (All Disciplines)"],
      },
      {
        title: "Certificate",
        courses: ["Certificate in Full Stack Web Development", "Certificate in AutoCAD & Design"],
      },
    ],
  },

   {
    title: "Faculty of Pharmaceutical Sciences",
    image:
      pharmacy,
    description:
      "Advancing healthcare through excellence in pharmaceutical education, research, and innovation.",
    programs: [
      {
        title: "Undergraduate",
        courses: ["Bachelor of Pharmacy (B.Pharm)"],
      },
      {
        title: "Postgraduate",
        courses: [
          "M.Pharm. Pharmaceutics",
          "M.Pharm. Pharmacology",
          "M.Pharm. Pharmaceutical Chemistry",
          "M.Pharm. Pharmacognosy",
        ],
      },
      {
        title: "Diploma",
        courses: ["Diploma in Pharmacy (D.Pharm)"],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Pharmaceutical Sciences (All Disciplines)"],
      },
      {
        title: "Certificate",
        courses: ["Certificate in Clinical Research", "Certificate in Pharmacovigilance"],
      },
    ],
  },

  {
    title: "Faculty of Business Studies & Commerce",
    image:
      education,
    description:
      "Developing future business leaders and entrepreneurs through quality management education.",
    programs: [
      {
        title: "Undergraduate",
        courses: ["Bachelor of Business Administration (BBA)",
                   "Bachelor of Commerce (Plain)",
                   "Bachelor of Commerce (Computer Application)",
        ],
      },
      {
        title: "Postgraduate",
        courses: [
          "MBA - Dual Specialization",
          "MBA - Digital Marketing",
          "MBA - Health Care Management",
          "MBA - Finance Technology",
          "MBA - Data Science",
          "MBA - Pharmaceutical Management",
          "MBA - Sports Management",
          "Master of Commerce (M.Com)"
        ],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Business Studies",
                  "Ph.D. in Commerce"
        ],
      },
       {
        title: "Diploma",
        courses: [
          "Diploma in Business Management",
          "Diploma in Retail Management",
          "Diploma in Floor Management",
          "Diploma in Hospital Management",
        ],
      },
      {
        title: "Certificate",
        courses: ["Certificate in Digital Marketing",
           "Certificate in Entrepreneurship Development",
           "Certificate in Taxation & GST", 
           "Certificate in Tally & Accounting"
          ],
      },
    ],
  },

  // {
  //   title: "School of Commerce",
  //   image:
  //     "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  //   description:
  //     "Building commerce and finance professionals through industry-relevant academic programs.",
  //   programs: [
  //     {
  //       title: "Undergraduate",
  //       courses: [
  //         "Bachelor of Commerce (Plain)",
  //         "Bachelor of Commerce (Computer Application)",
  //       ],
  //     },
  //     {
  //       title: "Postgraduate",
  //       courses: ["Master of Commerce (M.Com)"],
  //     },
  //     {
  //       title: "Diploma",
  //       courses: [
  //         "Diploma in Business Management",
  //         "Diploma in Retail Management",
  //         "Diploma in Floor Management",
  //         "Diploma in Hospital Management",
  //       ],
  //     },
  //     {
  //       title: "Doctorate",
  //       courses: ["Ph.D. in Commerce"],
  //     },
  //     {
  //       title: "Certificate",
  //       courses: ["Certificate in Taxation & GST", "Certificate in Tally & Accounting"],
  //     },
  //   ],
  // },

  {
    title: "Faculty of Science & Computer Application",
    image:
      education1,
    description:
      "Providing quality education in pure and applied sciences with a strong focus on research and innovation.",
    programs: [
      {
        title: "Undergraduate",
        courses: [
          "B.Sc. Physics, Chemistry & Mathematics (PCM)",
          "B.Sc. Physics, Chemistry & Biology (PCB)",
          "B.Sc. Computer Science",
          "Bachelor of Computer Applications (BCA)"
        ],
      },
      {
        title: "Postgraduate",
        courses: ["M.Sc. Mathematics",
                  "M.Sc. Chemistry",
                  "M.Sc. Physics",
                  "M.Sc. Computer Science",
                  "Master of Computer Applications (MCA)"
                ],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Science (All Disciplines)",
                  "Ph.D. in Computer Applications"
        ],
      },
      {
        title: "Certificate",
        courses: ["Certificate in Data Analysis using Python", "Certificate in Basic Laboratory Techniques",
                  "Certificate in Web Development", "Certificate in Cloud Computing Fundamentals"
        ],
      },
    ],
  },

  // {
  //   title: "School of Computer Applications",
  //   image:
  //     "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
  //   description:
  //     "Shaping future IT professionals through hands-on computer applications education and emerging technologies.",
  //   programs: [
  //     {
  //       title: "Undergraduate",
  //       courses: ["Bachelor of Computer Applications (BCA)"],
  //     },
  //     {
  //       title: "Postgraduate",
  //       courses: ["Master of Computer Applications (MCA)"],
  //     },
  //     {
  //       title: "Doctorate",
  //       courses: ["Ph.D. in Computer Applications"],
  //     },
  //     {
  //       title: "Certificate",
  //       courses: ["Certificate in Web Development", "Certificate in Cloud Computing Fundamentals"],
  //     },
  //   ],
  // },

  {
    title: "Faculty of Education & Physical Education",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    description:
      "Preparing skilled educators through quality teaching, training, and research in education.",
    programs: [
      {
        title: "Undergraduate",
        courses: ["Bachelor of Education (B.Ed.)",
                  "Bachelor of Physical Education (B.P.Ed.)"
        ],
      },
      {
        title: "Postgraduate",
        courses: ["Master of Education (M.Ed.)",
                 "Master of Physical Education (M.P.Ed.)"
        ],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Education",
                 "Ph.D. in Physical Education"
        ],
      },
       {
        title: "Diploma",
        courses: [
          "Diploma in Yoga & Naturopathy",
          "Diploma in Fitness Center Management",
          "Diploma in Strength Training & Conditioning",
          "Diploma in Sports Journalism",
        ],
      },
      {
        title: "Certificate",
        courses: ["Certificate in Early Childhood Education", "Certificate in Educational Technology",
                  "Certificate in Sports Nutrition", "Certificate in Yoga Instructor Training"
        ],
      },
    ],
  },

  // {
  //   title: "School of Physical Education",
  //   image:
  //     "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
  //   description:
  //     "Training sports and fitness professionals through quality physical education, coaching, and research.",
  //   programs: [
  //     {
  //       title: "Undergraduate",
  //       courses: ["Bachelor of Physical Education (B.P.Ed.)"],
  //     },
  //     {
  //       title: "Postgraduate",
  //       courses: ["Master of Physical Education (M.P.Ed.)"],
  //     },
  //     {
  //       title: "Diploma",
  //       courses: [
  //         "Diploma in Yoga & Naturopathy",
  //         "Diploma in Fitness Center Management",
  //         "Diploma in Strength Training & Conditioning",
  //         "Diploma in Sports Journalism",
  //       ],
  //     },
  //     {
  //       title: "Doctorate",
  //       courses: ["Ph.D. in Physical Education"],
  //     },
  //     {
  //       title: "Certificate",
  //       courses: ["Certificate in Sports Nutrition", "Certificate in Yoga Instructor Training"],
  //     },
  //   ],
  // },

  {
    title: "Faculty of Law",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    description:
      "Building legal professionals through comprehensive education in constitutional, corporate, criminal, and public law.",
    programs: [
      {
        title: "Undergraduate",
        courses: [
          "LL.B. (3 Years)",
          "B.A. LL.B. (Hons.) - 5 Years",
          "B.Com. LL.B. (Hons.) - 5 Years",
          "B.Sc. LL.B. (Hons.) - 5 Years",
        ],
      },
      {
        title: "Postgraduate",
        courses: [
          "LL.M. Public Policy",
          "LL.M. Constitutional & Administrative Law",
          "LL.M. Criminal & Security Laws",
          "LL.M. Corporate Law",
          "LL.M. Industrial & Labour Laws",
        ],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Law"],
      },
      {
        title: "Certificate",
        courses: ["Certificate in Cyber Law", "Certificate in Alternative Dispute Resolution"],
      },
    ],
  },

  {
    title: "Faculty of Fine Arts",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    description:
      "Encouraging creativity and artistic excellence through professional education in visual and fine arts.",
    programs: [
      {
        title: "Undergraduate",
        courses: ["Bachelor of Arts (Fine Arts)"],
      },
      {
        title: "Diploma",
        courses: ["Diploma in Sculpturing", "Diploma in Painting"],
      },
      {
        title: "Certificate",
        courses: ["Certificate in Photography", "Certificate in Graphic Designing"],
      },
    ],
  },

  {
    title: "Faculty of Languages",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    description:
      "Promoting linguistic excellence through Indian and foreign language education, research, and cultural studies.",
    programs: [
      {
        title: "Postgraduate",
        courses: ["M.A. English", "M.A. Hindi", "M.A. Sanskrit"],
      },
      {
        title: "Foreign Languages",
        courses: ["French", "German", "Spanish"],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Languages"],
      },
      {
        title: "Certificate",
        courses: ["Certificate in Spoken English", "Certificate in French Language (Basic)"],
      },
    ],
  },

  {
    title: "Faculty of Agriculture, Horticulture & Forestry",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80",
    description:
      "Advancing agricultural education through modern farming practices and scientific research.",
    programs: [
      {
        title: "Undergraduate",
        courses: ["B.Sc. Agriculture","B.Sc. Horticulture", "B.Sc. Forestry"],
      },
      {
        title: "Postgraduate",
        courses: ["M.Sc. Agronomy", "M.Sc. Horticulture", "M.Sc. Soil Science"],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Agriculture"],
      },
      {
        title: "Certificate",
        courses: ["Certificate in Organic Farming", "Certificate in Precision Agriculture",
                  "Certificate in Nursery Management", "Certificate in Landscape Gardening"
        ],
      },
    ],
  },

  // {
  //   title: "School of Horticulture & Forestry",
  //   image:
  //     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  //   description:
  //     "Advancing horticultural and forestry education through hands-on training in gardens, nurseries, and forests.",
  //   programs: [
  //     {
  //       title: "Undergraduate",
  //       courses: ["B.Sc. Horticulture", "B.Sc. Forestry"],
  //     },
  //     {
  //       title: "Certificate",
  //       courses: ["Certificate in Nursery Management", "Certificate in Landscape Gardening"],
  //     },
  //   ],
  // },
];
const RDLinks = [
  { title: "Innovation Cell", path: "/innovation/innovation-cell" },
  { title: "Startup / Innovation / Incubation Cell", path: "/innovation/startup-incubation" },
  { title: "MoUs / Collaborations", path: "/innovation/mous-collaborations" },
  { title: "Patents", path: "/innovation/patents" },
  { title: "Govt. Funded Projects", path: "/innovation/grant-funded-projects" },
  {
    title: "Publications",
    children: [
      { title: "Research Articles", path: "/innovation/publications/research-articles" },
      { title: "Books / Book Chapters", path: "/innovation/publications/books-book-chapters" },
      { title: "Published Conference Papers", path: "/innovation/publications/conference-papers" },
      { title: "Journals", path: "/innovation/publications/journals" },
    ],
  },
  { title: "Activities", path: "/innovation/activities" },
];

const Navbar5 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("schools");
  const [selectedSchool, setSelectedSchool] = useState(schools[0]);
  const [selectedProgram, setSelectedProgram] = useState(schools[0].programs[0]);
    const [lockedProgram, setLockedProgram] = useState(false);

  const studentZoneLinks = [
    { title: "Student's Council", path: "/students-zone/students-council" },
    { title: "Duplicate Identity Card Request", path: "/students-zone/duplicate-id-card-request" },
    { title: "Facilities for Differently-Abled", path: "/students-zone/facilities-for-differently-abled" },
    { title: "Student Feedback", path: "/students-zone/student-feedback" },
    {
      title: "Professional Clubs",
      children: [
        { title: "CSI", path: "/students-zone/professional-clubs/csi" },
        { title: "ISTE", path: "/students-zone/professional-clubs/iste" },
        { title: "Standard Club", path: "/students-zone/professional-clubs/standard-club" },
        { title: "Administrative Club", path: "/students-zone/professional-clubs/administrative-club" },
      ],
    },
    {
      title: "Social Committee",
      children: [
        { title: "NSS", path: "/students-zone/social-committee/nss" },
        { title: "NCC", path: "/students-zone/social-committee/ncc" },
        { title: "pahal", path: "/students-zone/social-committee/pahal" },
      ],
    },
    // { title: "Airboys Club", path: "/students-zone/airboys-club" },
    {
      title: "Fest",
      children: [
        { title: "Techno Parv", path: "/students-zone/fest/photos" },
        { title: "Villay", path: "/students-zone/fest/videos" },
      ],
    },
  ];

  const TPCellLinks = [
    { title: "About T&P Cell", path: "/training-placement/about" },
    { title: "Leading Recruiters", path: "/training-placement/leading-recruiters" },
    {
      title: "Placements",
      children: [
        { title: "Placement Statistics", path: "/training-placement/placements/statistics" },
        { title: "Placement Records", path: "/training-placement/placements/records" },
      ],
    },
    { title: "Prominent Alumni", path: "/training-placement/prominent-alumni" },
    { title: "Contact Info", path: "/training-placement/contact" },
    { title: "Industrial Training / Internship", path: "/training-placement/industrial-training-internship" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[9998]  ">
     

      <div className="[100vw]  -mt-20 ">
        <div className="h-[130px] bg-white  shadow-md flex items-center justify-center pl-8 w-full gap-1 md:gap-2">
          {/* LOGO */}
          <div className="flex-shrink-0 z-20 mt-20 md:mt-15 lg:mt-20 md:w-1/22 lg:w-1/6 md:hidden lg:block max-w-50">
            <Logo />
          </div>
          <div className="hidden md:block lg:hidden flex-shrink-0 z-20 mt-20 md:mt-15 lg:mt-20 md:w-1/15 absolute -top-2 left-2  justify-start">
            <Logo />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex  justify-center ml-25 lg:ml-0  w-full   ">
            <div
              className="
                relative
                flex
                items-center
                justify-center
                px-8
                h-[160px]
                rounded-full
                overflow-visible
                3xl:w-[100%]
                 w-[90%] 
                
              "
             
            >
            

              <ul className="relative z-10 flex items-center justify-center w-full mt-20">
                {/* ABOUT */}
                <li className="relative group">
                  <a
                    href="#about"
                    onClick={() => setActive("about")}
                    className={`flex items-center  xl:px-4  py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active === "about"
                        ? "bg-white text-[var(--forest)]"
                        : "text-[var(--forest)] hover:bg-white/15"
                    }`}
                  >
                    About
                    <ChevronDown size={14} />
                  </a>

                  <div className="flex flex-col p-2 bg-white rounded-xl shadow-lg mt-2 absolute top-full left-1/2 -translate-x-1/2 w-[250px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="
                          flex items-center
                          gap-3
                          px-4
                          py-1
                          
                          text-[14px]
                          font-medium
                          text-gray-700
                          hover:bg-[var(--forest)]
                          hover:text-white
                          transition-all
                          duration-200
                          border-b border-[var(--forest)]/80 last:border-b-0
                        "
                      >
                        
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </li>

                {/* ADMISSIONS */}
                <li className="relative group">
                  <a
                    href="#admissions"
                    onClick={() => setActive("admissions")}
                    className={`flex items-center  xl:px-4 px-2 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active === "admissions"
                        ? "bg-white text-[var(--forest)]"
                        : "text-[var(--forest)] hover:bg-white/15"
                    }`}
                  >
                    Admissions
                    <ChevronDown size={14} />
                  </a>

                  <div className="flex flex-col p-2 bg-white rounded-xl shadow-lg mt-2 absolute top-full left-1/2 -translate-x-1/2 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {admissionLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="
                          flex items-center
                          gap-3
                          px-4
                          py-1
                          border-b border-[var(--forest)]/80 last:border-b-0
                          text-[14px]
                          font-medium
                          text-gray-700
                          hover:bg-[var(--forest)]
                          hover:text-white
                          transition-all
                          duration-200
                        "
                      >
                        
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </li>

                {/* R&D */}
                <li className="relative group">
                  <a
                    href="#about"
                    onClick={() => setActive("R&D")}
                    className={`flex items-center  xl:px-4 px-2 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active === "R&D"
                        ? "bg-white text-[var(--forest)]"
                        : "text-[var(--forest)] hover:bg-white/15"
                    }`}
                  >
                    R&D
                    <ChevronDown size={14} />
                  </a>

                  <div className="flex flex-col p-2 bg-white rounded-xl shadow-lg mt-2 absolute top-full left-1/2 -translate-x-1/2 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {RDLinks.map((item) =>
                      item.children ? (
                        <div key={item.title} className="group/sub relative">
                          <div className="flex items-center justify-between px-4 py-1  hover:bg-[var(--forest)] hover:text-white cursor-pointer text-[14px]  border-b border-[var(--forest)]/80 last:border-b-0">
                            <span className="flex items-center gap-3 ">
                             
                              {item.title}
                            </span>
                            <ChevronRight size={16} />
                          </div>

                          <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="flex items-center gap-3 px-4 py-1 text-[14px]  border-b border-[var(--forest)]/80 last:border-b-0 hover:bg-[var(--forest)] hover:text-white"
                              >
                                
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 px-4 py-1 text-[14px] border-b border-[var(--forest)]/80 last:border-b-0 hover:bg-[var(--forest)] hover:text-white"
                        >
                          
                          {item.title}
                        </Link>
                      )
                    )}
                  </div>
                </li>

                {/* ========================= SCHOOLS MENU ========================= */}
               <li className="relative group">
                                 <a
                                   href="#academics"
                                   onClick={() => setActive("academics")}
                                   className={`flex items-center  xl:px-4 px-2 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                     active === "academics"
                                      ? "bg-white text-[var(--forest)]"
                        : "text-[var(--forest)] hover:bg-white/15"
                                   }`}
                                 >
                                   Academics
                                   <ChevronDown size={15} className="ml-1" />
                                 </a>
               
                                 <div
                                   className="
                                     absolute
                                     top-full
                                     left-10
                                     -translate-x-1/2
                                     mt-5
                                     w-[1100px]
                                     max-h-[80vh]
                                     bg-white
                                     rounded-[20px]
                                     shadow-[0_25px_70px_rgba(0,0,0,.15)]
                                     border
                                     border-gray-100
                                     opacity-0
                                     invisible
                                     translate-y-4
                                     group-hover:opacity-100
                                     group-hover:visible
                                     group-hover:translate-y-0
                                     transition-all
                                     duration-300
                                      max-h-[450px]
                                      overflow-y-hidden
                                     z-50
                                   "
                                 >
                                   <div className="grid grid-cols-[280px_1fr_320px] min-h-[520px]">
                                     {/* LEFT COLUMN — all 13 schools, scrollable */}
                                     <div className="border-r border-gray-100 bg-gray-50/70 p-6 overflow-y-auto max-h-[400px]">
                                       <h2 className="text-xl font-bold text-[var(--forest)] mb-6">
                                         Academic Faculties
                                       </h2>
               
                                       <div className="space-y-2">
                                         {schools.map((school) => (
                                           <button
                                             key={school.title}
                                             onMouseEnter={() => {
                                               setSelectedSchool(school);
                                               setSelectedProgram(school.programs[0]);
                                             }}
                                             className={`
                                               w-full
                                               flex
                                               items-center
                                               justify-between
                                               text-left
                                               rounded-2xl
                                               px-4
                                               py-3
                                               transition-all
                                               duration-300
                                               ${
                                                 selectedSchool.title === school.title
                                                   ? "bg-[var(--forest)] text-white shadow-lg"
                                                   : "bg-white text-gray-700 hover:bg-green-50 hover:shadow-md"
                                               }
                                             `}
                                           >
                                             <div className="flex flex-col">
                                               <span className="font-semibold text-[14px]">
                                                 {school.title}
                                               </span>
                                               <span
                                                 className={`text-xs mt-1 ${
                                                   selectedSchool.title === school.title
                                                     ? "text-white/80"
                                                     : "text-gray-500"
                                                 }`}
                                               >
                                                 {school.programs.length} Programs
                                               </span>
                                             </div>
               
                                             <ChevronRight
                                               size={18}
                                               className={`transition-all duration-300 ${
                                                 selectedSchool.title === school.title
                                                   ? "translate-x-1"
                                                   : ""
                                               }`}
                                             />
                                           </button>
                                         ))}
                                       </div>
                                     </div>
               
                                     {/* CENTER COLUMN — Programs + Courses */}
                                     <div className="p-6 flex flex-col overflow-y-auto max-h-[400px]">
                                       <h2 className="text-xl font-bold text-[var(--forest)] mb-6">
                                         Programs
                                       </h2>
               
                                       <div className="flex flex-wrap gap-2 mb-6">
                                         {selectedSchool.programs.map((program) => {
                 const isActive = selectedProgram.title === program.title;
               
                 return (
                   <button
                     key={program.title}
                     onMouseEnter={() => {
                       // Sirf jab koi lock nahi hai tab hover se change hoga
                       if (!lockedProgram) {
                         setSelectedProgram(program);
                       }
                     }}
                     onClick={() => {
                       // Click hamesha work karega
                       setSelectedProgram(program);
                       setLockedProgram(true);
                     }}
                     className={`
                       px-4
                       py-2
                       rounded-xl
                       text-sm
                       font-medium
                       transition-all
                       duration-300
               
                       ${
                         isActive
                           ? "bg-[var(--forest)] text-white shadow-md"
                           : "bg-gray-100 text-gray-700"
                       }
               
                       ${
                         !lockedProgram
                           ? "hover:bg-green-50 hover:text-[var(--forest)] cursor-pointer"
                           : "cursor-pointer"
                       }
                     `}
                   >
                     {program.title}
                   </button>
                 );
               })}
                                       </div>
               
                                       <div className="flex-1 overflow-y-auto max-h-[520px]">
                                         <h3 className="text-[15px] font-semibold text-gray-800 mb-4">
                                           Courses
                                         </h3>
               
                                         <div className="grid grid-cols-2 gap-3">
                                           {selectedProgram.courses.map((course) => (
                                             <a
                                               key={course}
                                               href="#"
                                               className="
                                                 group
                                                 flex
                                                 items-center
                                                 justify-between
                                                 rounded-xl
                                                 border
                                                 border-gray-200
                                                 bg-white
                                                 px-4
                                                 py-3
                                                 text-sm
                                                 text-gray-700
                                                 transition-all
                                                 duration-300
                                                 hover:border-[var(--forest)]
                                                 hover:bg-green-50
                                               "
                                             >
                                               <span>{course}</span>
               
                                               <ChevronRight
                                                 size={16}
                                                 className="
                                                   text-gray-400
                                                   transition-transform
                                                   duration-300
                                                   group-hover:translate-x-1
                                                   group-hover:text-[var(--forest)]
                                                 "
                                               />
                                             </a>
                                           ))}
                                         </div>
                                       </div>
                                     </div>
               
                                     {/* RIGHT COLUMN — school summary */}
                                     <div className="border-l border-gray-100 bg-gray-50/60 p-6 flex flex-col max-h-[450px]">
                                       <div className="rounded-3xl">
                                         <img
                                           src={selectedSchool.image}
                                           alt={selectedSchool.title}
                                           className="w-full h-[220px] object-cover transition-transform duration-500 hover:scale-105"
                                         />
                                       </div>
               {/*                       
                                       <h2 className="mt-6 text-2xl font-bold text-[var(--forest)] leading-snug">
                                         {selectedSchool.title}
                                       </h2>
               
                                       <p className="mt-3 text-sm leading-7 text-gray-600">
                                         {selectedSchool.description}
                                       </p> */}
               
                                       <div className="grid grid-cols-2 gap-4 mt-3">
                                         <div className="rounded-2xl bg-white border border-gray-200 p-2">
                                           <p className="text-xs uppercase tracking-wide text-gray-500">
                                             Programs
                                           </p>
                                           <h3 className="mt-2 text-2xl font-bold text-[var(--forest)]">
                                             {selectedSchool.programs.length}
                                           </h3>
                                         </div>
               
                                         <div className="rounded-2xl bg-white border border-gray-200 p-2">
                                           <p className="text-xs uppercase tracking-wide text-gray-500">
                                             Courses
                                           </p>
                                           <h3 className="mt-2 text-2xl font-bold text-[var(--forest)]">
                                             {selectedProgram.courses.length}
                                           </h3>
                                         </div>
                                       </div>
               
                                       <a
                                         href="http://localhost:5173/ipsctm"
                                         className="
                                           mt-5
                                           w-full
                                           rounded-2xl
                                           bg-[var(--forest)]
                                           py-3
                                           text-center
                                           text-white
                                           font-semibold
                                           transition-all
                                           duration-300
                                           hover:shadow-xl
                                           hover:scale-[1.02]
                                         "
                                       >
                                         Explore School
                                       </a>
                                     </div>
                                   </div>
                                 </div>
                               </li>
                 {/* T&P Cell */}
                <li className="relative group">
                  <a
                    href="#training-placement"
                    onClick={() => setActive("T&P Cell")}
                    className={`flex items-center xl:px-4 px-2 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active === "T&P Cell"
                        ? "bg-white text-[var(--forest)]"
                        : "text-[var(--forest)] hover:bg-white/15"
                    }`}
                  >
                    T&P Cell
                    <ChevronDown size={14} />
                  </a>

                  <div className="flex flex-col p-2 bg-white rounded-xl shadow-lg mt-2 absolute top-full left-1/2 -translate-x-1/2 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {TPCellLinks.map((item) =>
                      item.children ? (
                        <div key={item.title} className="group/sub relative">
                          <div className="flex items-center justify-between px-4 py-1  border-b border-[var(--forest)]/80 last:border-b-0 hover:bg-[var(--forest)] hover:text-white cursor-pointer text-[14px]">
                            <span className="flex items-center gap-3">
                              
                              {item.title}
                            </span>
                            <ChevronRight size={16} />
                          </div>

                          <div className="absolute left-full top-0 ml-2 w-[70%] bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="flex items-center gap-3 px-4 py-1 text-[14px] border-b border-[var(--forest)]/80 last:border-b-0 hover:bg-[var(--forest)] text-white"
                              >
                                
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 px-4 py-1 text-[14px] border-b border-[var(--forest)]/80 last:border-b-0 hover:bg-[var(--forest)] hover:text-white"
                        >
                        
                          {item.title}
                        </Link>
                      )
                    )}
                  </div>
                </li>

                {/* Student Zone */}
                <li className="relative group">
                  <a
                    href="#students-zone"
                    onClick={() => setActive("Student Zone")}
                    className={`flex items-center xl:px-4 px-2 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active === "Student Zone"
                        ? "bg-white text-[var(--forest)]"
                        : "text-[var(--forest)] hover:bg-white/15"
                    }`}
                  >
                    Student Zone
                    <ChevronDown size={14} />
                  </a>

                  <div className="flex flex-col p-2 bg-white rounded-xl shadow-lg mt-2 absolute top-full left-1/2 -translate-x-1/2 w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {studentZoneLinks.map((item) =>
                      item.children ? (
                        <div key={item.title} className="group/sub relative">
                          <div className="flex items-center justify-between px-4 py-1 border-b border-[var(--forest)]/80 last:border-b-0 hover:bg-[var(--forest)] hover:text-white cursor-pointer text-[14px]">
                            <span className="flex items-center gap-3">
                              
                              {item.title}
                            </span>
                            <ChevronRight size={16} />
                          </div>

                          <div className="absolute right-full top-0 ml-2 w-[75%] bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="flex items-center gap-3 px-4 py-1 text-[14px] border-b border-[var(--forest)]/80 last:border-b-0 hover:bg-[var(--forest)] hover:text-white"
                              >
                                
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 px-4 py-1 text-[14px] border-b border-[var(--forest)]/80 last:border-b-0 hover:bg-[var(--forest)] hover:text-white"
                        >
                          
                          {item.title}
                        </Link>
                      )
                    )}
                  </div>
                </li>

                
              </ul>
            </div>
          </div>

          {/* ENQUIRY BUTTON */}
          <a
            href="#"
            className="
              lg:h-[42px]
              h-[35px]
             
              text-white
              lg:text-sm
              text-[10px]
              font-semibold
              lg:flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              mt-20  
              w-30 lg:w-50
              bg-[var(--forest)]
              hidden 
              
            "
          >
             Enquiry Now {/*<span className="bg-white p-1 text-[var(--forest)] "><a href="/#">Login</a></span> */}
          </a>

          
            
       

          {/* MOBILE MENU BTN */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden ml-auto mr-3 text-[var(--forest)] mt-20"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            xl:hidden
            overflow-hidden
            transition-all
            duration-300
            bg-white
            rounded-b-2xl
            shadow-lg
            ${mobileMenu ? "max-h-[600px] py-4" : "max-h-0"}
          `}
        >
          <div className="flex flex-col lg:px-4 px-2">
            {[
              "Home",
              "About Us",
              "Schools",
              "Programmes",
              "Admissions",
              "Research",
              "Student Zone",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  py-3
                  border-b
                  border-gray-100
                  hover:text-white
                  transition-all
                "
              >
                {item}
              </a>
            ))}

            <a
              href="#"
              className="
                mt-4
                h-[45px]
                rounded-xl
                text-[var(--forest)]
                font-semibold
                flex
                items-center
                justify-center
                bg-[var(--forest)]
              "
            >
              Enquiry Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar5;