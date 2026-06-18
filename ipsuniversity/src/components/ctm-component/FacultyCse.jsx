import React from "react";

const hod = {
  name: "Dr. Soumya Bajpai",
  designation: "Head of Department",
  qualification: "Ph.D.",
  specialization: "Computer Science & Engineering",
  image: "https://ipsgwalior.org/newctm/cse/soumya.jpg",
};

const facultyMembers = [
  {
    name: "Vineet Raj Singh Kushwah",
    designation: "Associate Professor",
    image: "https://ipsgwalior.org/newctm/cse/vineet.jpg",
    details: "B.E., M.Tech | 12 Yrs | Software Engineering",
    badges: ["Int'l: 2", "Patent: 1", "Book: 1", "GATE"],
  },
  {
    name: "Purushottam Verma",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/purushottam.jpg",
    details: "B.E., M.Tech | 10 Yrs | Computer Science",
    badges: ["Int'l: 3", "MTA Certified"],
  },
  {
    name: "Sushil Chaturvedi",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/sushil.jpg",
    details: "B.E., M.Tech | 11 Yrs | Computer Science",
    badges: ["Int'l: 3"],
  },
  {
    name: "Vaibhav Raj Chauhan",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/Vaibhav.jpg",
    details: "B.E., M.Tech | Computer Science",
    badges: ["CS Specialisation"],
  },
  {
    name: "Aarti Vig",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/arti_vig.jpg",
    details: "B.E., M.Tech | 7 Yrs | Computer Science",
    badges: ["Int'l: 2"],
  },
  {
    name: "Neha Sharma",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/neha.jpg",
    details: "B.E., M.Tech | 3 Yrs | Computer Science",
    badges: ["Int'l: 2"],
  },
  {
    name: "Akanksha Gahoi",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/ankansha.jpg",
    details: "B.E., M.Tech | 1 Yr | Computer Science",
    badges: ["Nat'l: 1"],
  },
  {
    name: "Richa Pathak",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/richa.jpg",
    details: "B.E., M.Tech | 3 Yrs | Computer Science",
    badges: ["Int'l: 1"],
  },
  {
    name: "Saira Baghel",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/saira.jpg",
    details: "B.E., M.Tech | Computer Science",
    badges: ["Int'l: 1"],
  },
  {
    name: "Ashok Kumar Nagar",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/ashok.jpg",
    details: "B.E., M.Tech | Computer Science",
    badges: ["CS Specialisation"],
  },
  {
    name: "Shikha Parashar",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/shikha.jpg",
    details: "B.E., M.Tech | 2 Yrs | Information Technology",
    badges: ["Int'l: 2"],
  },
  {
    name: "Deepika Tomar",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/deepika.jpg",
    details: "B.E., M.Tech | 1 Yr | Information Technology",
    badges: ["IT Specialisation"],
  },
  {
    name: "Tanvi Upadhyay",
    designation: "Assistant Professor",
    image: "https://ipsgwalior.org/newctm/cse/tanvi.jpg",
    details: "B.E., M.Tech | 1 Yr | Information Technology",
    badges: ["Int'l: 2"],
  },
];

export default function FacultySection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#16332a]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="mb-12">
          <span className="uppercase tracking-[3px] text-[#e9a13b] text-xs font-bold">
            Our Team
          </span>

          <h2 className="text-white text-4xl md:text-5xl font-serif mt-3 mb-4">
            Faculty Members
          </h2>

          <p className="text-[#e3f0e1] max-w-3xl leading-8">
            A team of qualified, experienced and research-active faculty
            members committed to delivering quality engineering education.
          </p>
        </div>

        {/* HOD Card */}
        <div className="mb-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[18px] p-6 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <img
                src={hod.image}
                alt={hod.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#e9a13b]"
              />

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-white text-2xl font-semibold">
                  {hod.name}
                </h3>

                <p className="text-[#e9a13b] uppercase tracking-wider text-sm mt-1">
                  {hod.designation}
                </p>

                <p className="text-[#e3f0e1] mt-2">
                  {hod.qualification}
                  {" | "}
                  {hod.specialization}
                </p>
              </div>

              <div className="flex gap-2 flex-wrap justify-center">
                <span className="px-3 py-1 rounded-full bg-[#e9a13b]/20 text-[#e9a13b] text-xs">
                  Leadership
                </span>

                <span className="px-3 py-1 rounded-full bg-[#e9a13b]/20 text-[#e9a13b] text-xs">
                  Research
                </span>

                <span className="px-3 py-1 rounded-full bg-[#e9a13b]/20 text-[#e9a13b] text-xs">
                  Excellence
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {facultyMembers.map((faculty) => (
            <div
              key={faculty.name}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[18px] p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#e9a13b]/50"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-[88px] h-[88px] mx-auto rounded-full object-cover border-[3px] border-[#e9a13b]"
              />

              <h4 className="text-white text-[15px] font-semibold mt-4">
                {faculty.name}
              </h4>

              <div className="text-[#e9a13b] uppercase tracking-wider text-[11px] mt-1">
                {faculty.designation}
              </div>

              <div className="text-[#e3f0e1] text-xs mt-2 leading-5">
                {faculty.details}
              </div>

              <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                {faculty.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-1 rounded-full text-[10px] bg-[#e9a13b]/15 border border-[#e9a13b]/30 text-[#e9a13b]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}