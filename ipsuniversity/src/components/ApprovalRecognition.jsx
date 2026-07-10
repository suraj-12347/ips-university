import aicte from "../images1/aicte.gif"
import pci from "../images1/pharmacy-council-India.jpg"
import ncte from "../images1/nctelogo.gif"
import mpGov from "../images1/mphighereducation.gif"
import university from "../images1/RGTU.jpg"
import naac from "../images1/naac1.jpg"

export const affiliations = [
  {
    name: "AICTE",
    image: aicte,
    link: "#",
  },
  {
    name: "PCI",
    image: pci,
    link: "#",
  },
  {
    name: "NCTE",
    image: ncte,
    link: "#",
  },
  {
    name: "MP Government",
    image: mpGov,
    link: "#",
  },
  {
    name: "University",
    image: university,
    link: "#",
  },
  {
    name: "NAAC",
    image: naac,
    link: "#",
  },
];



const ApprovalRecognition = () => {
  return (
  <section className="w-full py-4 px-4 bg-transparent -mb-15 max-w-[100vw] flex justify-center">
  <div className="lg:max-w-[60vw] w-full flex items-center justify-center flex-col ">
    <h1 className="text-center text-xl lg:text-3xl font-bold text-[var(--forest)] mb-8">
      Approval, Recognition, and Affiliation
    </h1>

 <div className="flex items-center gap-1 sm:gap-3 md:gap-4">
  {affiliations.map((item, index) => (
    <a
      key={index}
      href={item.link}
      className="group relative flex-1 aspect-square max-w-[130px] min-w-[60px]"
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover rounded-lg border-2 border-[var(--forest)] bg-white p-1 transition-all duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 rounded-lg bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-white text-[10px] sm:text-xs font-semibold text-center px-2">
          {item.name}
        </span>
      </div>
    </a>
  ))}
</div>
  </div>
</section>
  );
};

export default ApprovalRecognition;