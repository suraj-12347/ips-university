import React from "react";
import {
  ShieldCheck,
  Globe,
  Code,
  Cpu,
  Network,
  Lock,
  Database,
  GitBranch,
  GraduationCap,
  Radio,
  Bot,
  TrendingUp,
} from "lucide-react";

const ScopeSection = () => {
  const scopeData = [
    {
      icon: ShieldCheck,
      title: "Government R&D Organisations",
      desc: "DRDO, ISRO, ECIL and BEL offer exciting roles to computer science graduates in defence, space and electronics research.",
    },
    {
      icon: Globe,
      title: "Software Multinationals",
      desc: "Microsoft, Google, Amazon, IBM, Oracle, Infosys, TCS and Wipro recruit computer engineers globally.",
    },
    {
      icon: Code,
      title: "Software Development & Testing",
      desc: "Opportunities in development, testing, support, networking, security and DevOps with excellent career growth.",
    },
    {
      icon: Cpu,
      title: "Hardware Engineering",
      desc: "Design and development of circuits, microchips, servers and hardware infrastructure powering modern technology.",
    },
    {
      icon: Network,
      title: "Computer Network Architecture",
      desc: "Network architects manage communication infrastructure and data-sharing systems across organizations.",
    },
    {
      icon: Lock,
      title: "Information Security Analysis",
      desc: "Cyber security professionals protect systems, applications and critical business data from threats.",
    },
    {
      icon: Database,
      title: "Database Administration",
      desc: "Database administrators manage, secure and optimize valuable organizational data.",
    },
    {
      icon: GitBranch,
      title: "System Design & Analysis",
      desc: "Designing efficient information systems and solving business challenges through technology.",
    },
    {
      icon: GraduationCap,
      title: "Academia & Research",
      desc: "Teaching, higher studies, innovation and advanced research opportunities in Computer Science.",
    },
    {
      icon: Radio,
      title: "Telecommunications",
      desc: "Roles in communication networks, protocols, infrastructure management and telecom software.",
    },
    {
      icon: Bot,
      title: "Cyber Security & Robotics",
      desc: "High-demand careers in AI, Machine Learning, Robotics and Cyber Security industries.",
    },
    {
      icon: TrendingUp,
      title: "Entrepreneurship",
      desc: "Build startups, launch products and create innovative solutions that transform industries.",
    },
  ];

  return (
    <section
      className="relative py-20 px-4 md:px-8 bg-cover "
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/dd/18/fb/dd18fbe712c646ba9e343cfc0d6889c1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[3px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-[var(--forest)] text-sm font-semibold">
            Career Pathways
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[var(--forest)] mt-3">
            Scope of Computer Science & Engineering
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5 leading-relaxed">
            A CSE degree from IPS University opens doors across government,
            private, research and entrepreneurial sectors in India and
            internationally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopeData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--forest)]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-[var(--forest)]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[var(--forest)] text-lg mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;