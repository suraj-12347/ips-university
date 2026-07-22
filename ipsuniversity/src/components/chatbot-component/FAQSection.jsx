import { useState } from "react";
import { Plus, Minus, HelpCircle, Phone, Mail } from "lucide-react";

const faqData = [
  {
    category: "About IPS University",
    items: [
      {
        q: "Is IPS College now IPS University?",
        a: "Yes. IPS Group of Colleges, Gwalior is being upgraded to IPS University. All academic programmes, faculty, and campus infrastructure continue under the new university status, with added autonomy in curriculum design, examinations, and degree conferment.",
      },
      {
        q: "Where is IPS University located?",
        a: "The campus is located on Shivpuri Link Road, Gwalior, Madhya Pradesh — an 80-acre campus surrounded by hills, with established academic blocks, hostels, and sports facilities already in place.",
      },
      {
        q: "Is IPS University UGC and AICTE approved?",
        a: "IPS Group of Colleges holds AICTE, PCI, and university-norm approvals for its existing programmes. As the university status is formalised, recognition under the UGC Act is processed accordingly. Aspirants are advised to check the latest approval notification on the official website before applying.",
      },
    ],
  },
  {
    category: "Admissions",
    items: [
      {
        q: "What is the admission process for 2026-27?",
        a: "Applications are submitted online through the official admission portal. After form submission and document upload, candidates go through counselling or merit-based selection depending on the programme, followed by fee payment to confirm the seat.",
      },
      {
        q: "Which entrance exams are accepted?",
        a: "B.Tech admissions are based on JEE Main scores, M.Tech on GATE, and MBA on CMAT or equivalent management entrance scores. Diploma and other UG programmes admit primarily on merit of qualifying examinations.",
      },
      {
        q: "What is the eligibility for B.Tech programmes?",
        a: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics from a recognised board, meeting the minimum aggregate percentage set for the respective academic year.",
      },
      {
        q: "Does IPS University offer scholarships?",
        a: "Merit-based fee concessions and government scholarship schemes (including reserved-category support) are available. Specific scholarship slabs are announced each admission cycle.",
      },
    ],
  },
  {
    category: "Academics & Courses",
    items: [
      {
        q: "What programmes are offered at IPS University?",
        a: "Engineering (B.Tech/M.Tech in CSE, ME, CE, EE, ECE), Pharmacy (B.Pharm/D.Pharm/M.Pharm), Management (BBA/MBA), Education (B.Ed/M.Ed/B.P.Ed/M.P.Ed), Computer Applications (BCA/PGDCA), and Commerce (B.Com).",
      },
      {
        q: "Are the courses NBA accredited?",
        a: "Select engineering programmes hold NBA accreditation, reflecting the outcome-based education standards followed in those departments.",
      },
    ],
  },
  {
    category: "Campus & Placements",
    items: [
      {
        q: "Does the university provide hostel facilities?",
        a: "Yes, separate hostel blocks for boys and girls are available on campus, with furnished rooms, mess facilities, and round-the-clock security.",
      },
      {
        q: "What is the placement record like?",
        a: "The Training & Placement Cell organises campus recruitment drives, internships, and industrial training throughout the year, with a growing list of recruiting companies across engineering, management, and pharmacy sectors.",
      },
      {
        q: "How can I contact the admission office?",
        a: "You can reach the admission helpline or write to the official admissions email listed on the contact page for queries regarding courses, fees, or counselling schedules.",
      },
    ],
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "rgba(20, 83, 45, 0.12)" }}
      
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className="text-[15px] sm:text-base font-medium leading-snug transition-colors"
          style={{ color: isOpen ? "var(--forest)" : "#1f2d1c" }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: isOpen ? "var(--grass)" : "var(--leaf)",
          }}
        >
          {isOpen ? (
            <Minus size={14} strokeWidth={2.5} className="text-white" />
          ) : (
            <Plus size={14} strokeWidth={2.5} style={{ color: "var(--forest)" }} />
          )}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pb-5 pr-10 text-sm sm:text-[15px] leading-relaxed text-gray-600">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const handleCategoryChange = (idx) => {
    setActiveCategory(idx);
    setOpenIndex(0);
  };

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      className="relative w-full py-16 sm:py-20 px-4 sm:px-6"
      
      style={{
                        backgroundImage: `url('https://i.pinimg.com/1200x/0c/ad/12/0cad129d9c0d34eaac50302009a2360c.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
    >
      {/* decorative background blobs */}
      <div
        className="absolute -bottom-2 left-0 w-full h-[70%] z-0"
        style={{
          background:
            "linear-gradient(to top, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute -top-2 left-0 w-full h-[70%] z-0"
        style={{
          background:
            "linear-gradient(to bottom, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[4px] z-0"></div>
      <div
        className="absolute top-10 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: "var(--grass)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: "var(--forest)" }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className=" bg-[var(--forest)]/20 text-[var(--forest)] inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold uppercase tracking-wide"
            
          >
            <HelpCircle size={14} />
            FAQ
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "var(--forest)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to know about admissions, academics, and
            campus life at IPS University, Gwalior.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {faqData.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => handleCategoryChange(idx)}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
              style={
                activeCategory === idx
                  ? {
                      backgroundColor: "var(--forest)",
                      color: "var(--white)",
                    }
                  : {
                      backgroundColor: "var(--white)",
                      color: "var(--forest)",
                      border: "1px solid var(--leaf)",
                      
                    }
              }
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ card */}
        <div
          className="rounded-2xl px-5 sm:px-8 shadow-sm"
          style={{
            backgroundColor: "var(--white)",
            boxShadow: "0 10px 30px -10px var(--inset)",
            border: "1px solid var(--leaf)",
          }}
        >
          {faqData[activeCategory].items.map((item, idx) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

        {/* Contact strip */}
        {/* <div
          className="mt-10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: "var(--forest)" }}
        >
          <div>
            <p className="text-white font-semibold text-base sm:text-lg">
              Still have a question?
            </p>
            <p className="text-sm" style={{ color: "var(--white)" }}>
              Our admission team is here to help you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919285022400"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-transform hover:scale-105 border-2 border-white"
              style={{ backgroundColor: "var(--forest)", color: "var(--white)" }}
            >
              <Phone size={16} />
              Call Us
            </a>
            <a
              href="mailto:info@ipsgwalior.org"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--white)", color: "var(--forest)" }}
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}