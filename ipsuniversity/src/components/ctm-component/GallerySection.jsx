import React, { useState, useEffect } from "react";

import rajusir from '../../images1/rajusir.JPG'
import directersir from '../../images1/directersir.JPG'
import dj from '../../images1/dj.JPG'
import mrfr from '../../images1/mrfr.jpeg'
import skmic from '../../images1/skmic.jpeg'
import neeraj from '../../images1/neeraj2.jpeg'
import { ArrowRightToLine } from "lucide-react";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: dj,
    caption: "Campus Life",
    subImages: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      "https://images.unsplash.com/photo-1562774053-701939374585",
    ],
  },
 
  {
    src: mrfr,
    caption: "Library Facilities",
    subImages: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    ],
  },
  {
    src: dj,
    caption: "Technical Workshops",
    subImages: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
    ],
  },
   {
    src: skmic,
    caption: "Smart Classrooms",
    subImages: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    ],
  },
 
  {
    src: directersir,
    caption: "Cultural Events",
    subImages: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    ],
  },
  

   {
    src: dj,
    caption: "Technical Workshops",
    subImages: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
    ],
  },
   

   {
    src: rajusir,
    caption: "Industry Visits",
    subImages: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    ],
  },
  {
    src: neeraj,
    caption: "Student Achievements",
    subImages: [
      "https://images.unsplash.com/photo-1522204502588-8f39b3b3b16f",
      "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    ],
  },
 
  {
    src: directersir,
    caption: "Modern Infrastructure",
    subImages: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    ],
  },
  
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  
const [currentSubIndex, setCurrentSubIndex] = useState(0);
const [showAll, setShowAll] = useState(false);

const nextSubImage = () => {
  const total = images[selectedIndex].subImages.length;

  setCurrentSubIndex((prev) =>
    prev === total - 1 ? 0 : prev + 1
  );
};

const prevSubImage = () => {
  const total = images[selectedIndex].subImages.length;

  setCurrentSubIndex((prev) =>
    prev === 0 ? total - 1 : prev - 1
  );
};

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };


 useEffect(() => {
  const handleKey = (e) => {
    if (selectedIndex === null) return;

    if (e.key === "ArrowRight") nextSubImage();
    if (e.key === "ArrowLeft") prevSubImage();
    if (e.key === "Escape") setSelectedIndex(null);
  };

  window.addEventListener("keydown", handleKey);

  return () => window.removeEventListener("keydown", handleKey);
}, [selectedIndex, currentSubIndex]);

  return (
   <section className="py-24 bg-[#f8fbf6]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Campus Gallery
      </span>

      <h2
        className="
          text-4xl
          lg:text-5xl
          text-[#31572c]
          mt-5
          relative
        "
        style={{
          fontFamily: "Fraunces, serif",
        }}
      >
        Capturing
        <br />
        Campus Moments
      
      
      <span
      className="
        absolute
        left-1/2
        -bottom-3
        -translate-x-1/2
        w-24
        h-[3px]
        bg-[var(--grass)]
        rounded-full
      "
    />
      </h2>
       

      <p
        className="
          mt-6
          text-gray-600
          leading-8
          max-w-2xl
          mx-auto
        "
      >
        Explore memorable moments, achievements,
        academic activities and vibrant campus life
        through our gallery.
      </p>

    </div>





    {/* Gallery */}

    <div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[140px] gap-4 mt-16 px-10">

  {(showAll ? images : images.slice(0, 8)).map((item, index) => {

    const pattern = index % 6;

    const classes = [
      "lg:col-span-2 lg:row-span-2",
      "",
      "",
      "lg:row-span-2",
      "",
      ""
    ][pattern];

    return (
      <div
        key={index}
        onClick={() => {
          setSelectedIndex(index);
          setCurrentSubIndex(0);
        }}
        className={`
          relative
          overflow-hidden
          rounded-[22px]
          cursor-pointer
          group
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-500
          border-4
          border-white
          ${classes}
        `}
      >

        {/* Image */}
        <img
          src={item.src}
          alt={item.caption}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        />

        {/* Hover Content */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-4
            translate-y-6
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        >
          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {item.caption}
              </h3>

              <p className="text-white/80 text-xs md:text-sm mt-1">
                {item.subImages.length} Photos
              </p>
            </div>

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-white/20
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-white
                text-lg
                transition-all
                duration-500
                group-hover:rotate-45
              "
            >
              +
            </div>

          </div>
        </div>

        {/* Badge */}
        <div
          className="
            absolute
            top-4
            right-4
            bg-black/55
            backdrop-blur-md
            text-white
            text-xs
            font-medium
            px-2.5
            py-1
            rounded-full
          "
        >
          {item.subImages.length} Photos
        </div>

      </div>
    );

  })}

</div>

  {/* View All Button */}

  {images.length > 8 && (
    <div className="flex justify-center mt-14">

      <button
  onClick={() => setShowAll(!showAll)}
  className="
    group
    relative
    inline-flex
    items-center
    gap-4
    px-4
    py-2
    rounded-full
    bg-white
    border
    border-[#31572c]/20
    text-[#31572c]
    font-semibold
    shadow-md
    overflow-hidden
    transition-all
    duration-500
    hover:shadow-2xl
    hover:-translate-y-1
  "
>
  {/* Hover Background */}
  <span
    className="
      absolute
      inset-0
      bg-[#31572c]
      scale-x-0
      origin-left
      transition-transform
      duration-500
      group-hover:scale-x-100
    "
  />

  {/* Text */}
  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
    {showAll ? "Show Less" : "View All Events"}
  </span>

  {/* Arrow */}
  <span
    className="
      relative
      z-10
      w-10
      h-10
      rounded-full
      bg-[#31572c]
      flex
      items-center
      justify-center
      transition-all
      duration-500
      group-hover:bg-white
      group-hover:translate-x-1
    "
  >
    <ArrowRight
      size={18}
      className="text-white group-hover:text-[#31572c]"
    />
  </span>
</button>

    </div>
  )}

</div>

{selectedIndex !== null && (
  <div className="fixed inset-0 top-30 bg-black/95 z-50 flex items-center justify-center">

    {/* Close */}
    <button
      onClick={() => setSelectedIndex(null)}
      className="absolute top-6 right-6 text-white text-5xl"
    >
      ×
    </button>

    {/* Prev */}
    <button
      onClick={() =>
        setCurrentSubIndex((prev) =>
          prev === 0
            ? images[selectedIndex].subImages.length - 1
            : prev - 1
        )
      }
      className="absolute left-6 text-white text-6xl"
    >
      ❮
    </button>

    {/* Image */}
    <div className="max-w-2xl  px-10 mt-3">

      <img
        src={images[selectedIndex].subImages[currentSubIndex]}
        className="w-full max-h-[80vh] object-contain rounded-3xl"
      />

      <h2 className="text-white text-xl text-center mt-3">
        {images[selectedIndex].caption}
      </h2>

      <p className="text-center text-sm text-gray-300 mt-1">
        {currentSubIndex + 1} / {images[selectedIndex].subImages.length}
      </p>

    </div>

    {/* Next */}
    <button
      onClick={() =>
        setCurrentSubIndex((prev) =>
          prev === images[selectedIndex].subImages.length - 1
            ? 0
            : prev + 1
        )
      }
      className="absolute right-6 text-white text-6xl"
    >
      ❯
    </button>

  </div>
)}

  </div>

</section>
  );
};

export default GallerySection;