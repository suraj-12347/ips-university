import React from "react";
import {
  Globe2,
  Laptop,
  Code2,
  Briefcase,
  Users,
  Mic,
  Flower2,
  Building2,
  Factory,
  MapPin,
} from "lucide-react";

const ActivitiesSection = () => {
  const webinars = [
    {
      icon: Globe2,
      tag: "INT'L WEBINAR • SEP 2020",
      title: "Detection of Hoaxes in Social Media",
      desc: "Speaker: Dr. Arkaitz Zubiaga, Queen Mary University, London. Covered AI and NLP-based approaches to identifying misinformation online.",
    },
    {
      icon: Laptop,
      tag: "ONLINE WEBINAR • AUG 2020",
      title: "Web Forensics",
      desc: "Speaker: Dr. Deepak Singh Tomar, Associate Professor, MANIT Bhopal. Topics included digital evidence, web-trail analysis and forensic tools.",
    },
    {
      icon: Code2,
      tag: "ONLINE INTERNSHIP • AUG 2020",
      title: "Python for Machine Learning & Applications",
      desc: "Speaker: Dr. Dushyant Kumar Singh, MNNIT Allahabad. Hands-on sessions on ML fundamentals and Python programming.",
    },
    {
      icon: Briefcase,
      tag: "ONLINE WEBINAR • JUL 2020",
      title: "Bridging the Gap — College to Corporate",
      desc: "Speaker: Mr. Kushagra Tyagi, Data Engineer, Expedia. Insights on transitioning from academic to industry environment.",
    },
    {
      icon: Users,
      tag: "WORKSHOP • MAY 2020",
      title: "Competitive Coding & Placement Preparation",
      desc: "In association with PrepBytes. Covered DSA, competitive programming strategies and interview preparation.",
    },
    {
      icon: Mic,
      tag: "GUEST LECTURE • APR 2020",
      title: "College to Corporate II",
      desc: "Speaker: Mr. Gaurav Gandhi, Associate Consultant, TCS Mumbai. Guidance on professional etiquette and career planning.",
    },
  ];

  const seminarsLeft = [
    {
      date: "Jan 2020",
      text: "Seminar on Research Trends in CS&E — Speaker: Ms. Neha Sharma, Project Fellow, CSIR-CEERI Rajasthan.",
    },
    {
      date: "Jan 2020",
      text: "Seminar on Theory of Computation — Speaker: Mr. Keshav Rawat, Central University of Himachal Pradesh.",
    },
    {
      date: "Nov 2019",
      text: "State Level Computer Quiz 'ComputerVille' with participation from schools across Gwalior Chambal Region.",
    },
    {
      date: "Sep 2018",
      text: "Seminar on Cryptography by Mr. V.K. Arya and Mr. Kailash Agarwal.",
    },
    {
      date: "Sep 2017",
      text: "Five-Day Workshop on Disaster Management under CSI Gwalior Student Chapter.",
    },
  ];

  const seminarsRight = [
    {
      date: "Nov 2016",
      text: "Salesforce Developer User Group Meet by experts from Adobe and Fujitsu.",
    },
    {
      date: "Aug 2015",
      text: "Seminar on Digital India by Mr. Sanjay Pandey, Technical Director, NIC Gwalior.",
    },
    {
      date: "Sep 2014",
      text: "Seminar on Cloud Computing by IMU Infotech, Noida.",
    },
    {
      date: "Jul 2014",
      text: "Guest Lecture on Nano Technology by Dr. Anurag Shrivastava.",
    },
    {
      date: "Sep 2013",
      text: "Two-Day Workshop on Android Technology by Blue Eminence Technology.",
    },
  ];

  const visits = [
    {
      icon: Building2,
      tag: "INDUSTRIAL VISIT • OCT 2018",
      title: "Sebiz Square, Chandigarh",
      desc: "Students explored software product development, agile methodology and industry workflows.",
    },
    {
      icon: Factory,
      tag: "INDUSTRIAL VISIT • AUG 2018",
      title: "Akzonobel, Malanpur",
      desc: "Understanding industrial automation and ERP systems in a manufacturing environment.",
    },
    {
      icon: MapPin,
      tag: "EXCURSION • JAN 2020",
      title: "Sonagir & Pitambara, Datia",
      desc: "Educational and cultural excursion focused on holistic student development.",
    },
  ];

  return (
    <section
      className="relative py-5 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/d9/18/4c/d9184c7deca1df54c402830085babf0f.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
     <div className="absolute inset-0 bg-white/60 backdrop-blur-[3px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p
            className="uppercase tracking-[3px] text-sm font-semibold text-[var(--forest)]"
            style={{
             
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Campus Life
          </p>

          <h2
            className="mt-3 text-4xl md:text-6xl text-[var(--forest)]"
            style={{
              fontFamily: "Fraunces, serif",
            }}
          >
            Activities & Events
          </h2>

          <p
            className="mt-5 max-w-3xl leading-8 text-gray-700"
            style={{
              
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Seminars, workshops, webinars, industrial visits and guest lectures
            keep CSE students connected to industry trends, research frontiers
            and global experts.
          </p>
        </div>

        {/* Recent Events */}
        <div className="flex items-center gap-3 mb-8">
          <Flower2 size={18} className="text-[var(--forest)]" />
          <span
            className="uppercase tracking-[2px] text-sm text-[var(--forest)]"
            style={{
              
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Recent Webinars & Events
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {webinars.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className=" rounded-[18px]   bg-white p-6 hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div
                  className="text-xs uppercase tracking-[1.5px] font-semibold mb-3 text-[var(--forest)]"
                  style={{
                    
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  <Icon size={14} className="inline mr-2" />
                  {item.tag}
                </div>

                <h3
                  className="text-xl text-gray-700 mb-3"
                  style={{
                    fontFamily: "Fraunces, serif",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="leading-7 text-sm text-gray-500"
                  style={{
                    
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Seminars */}
        <div className="flex items-center gap-3 mb-8">
          <Flower2 size={18} className="text-[var(--forest)]"  />
          <span
            className="uppercase tracking-[2px] text-sm text-[var(--forest)]"
            style={{
              
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Conferences & Seminars
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="backdrop-blur-xl rounded-[18px]    bg-white shadow-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {[seminarsLeft, seminarsRight].map((column, idx) => (
              <div key={idx}>
                {column.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 pb-5 mb-5  -b  -white/10"
                  >
                    <div className="w-3 h-3 rounded-full bg-[var(--forest)] mt-2 flex-shrink-0" />

                    <div>
                      <div
                        className="text-sm font-semibold mb-2 text-[var(--forest)]"
                        style={{
                          
                          fontFamily: "Outfit, sans-serif",
                        }}
                      >
                        {item.date}
                      </div>

                      <p
                        className="leading-7 text-sm text-gray-700"
                        style={{
                          
                          fontFamily: "Outfit, sans-serif",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Visits */}
        <div className="flex items-center gap-3 mb-8">
          <Flower2 size={18} className="text-[var(--forest)]"  />
          <span
            className="uppercase tracking-[2px] text-sm text-[var(--forest)]"
            style={{
              
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Industrial Visits
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="backdrop-blur-xl rounded-[18px]    bg-white shadow-xl p-6 hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className="text-xs uppercase tracking-[1.5px] font-semibold mb-3 text-[var(--forest)]"
                  style={{
                   
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  <Icon size={14} className="inline mr-2" />
                  {item.tag}
                </div>

                <h3
                  className="text-xl text-garay-700 mb-3"
                  style={{
                    fontFamily: "Fraunces, serif",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="leading-7 text-sm text-gary-600"
                  style={{
                   
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;