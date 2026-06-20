import React, { useState, useEffect } from "react";

import rajusir from '../../images1/rajusir.JPG'
import directersir from '../../images1/directersir.JPG'
import dj from '../../images1/dj.JPG'
import mrfr from '../../images1/mrfr.jpeg'
import skmic from '../../images1/skmic.jpeg'
import neeraj from '../../images1/neeraj2.jpeg'
import { ArrowRightToLine } from "lucide-react";

const images = [
  {
    src: dj,
    caption: "Campus Life",
  },
  {
    src:rajusir,
    caption: "Industry Visits",
  },
  {
    src: skmic,
    caption: "Smart Classrooms",
  },
  {
    src: directersir,
    caption: "Modern Infrastructure",
  },
  {
    src:mrfr,
    caption: "Library Facilities",
  },
  {
    src: dj,
    caption: "Technical Workshops",
  },
  {
    src:neeraj,
    caption: "Student Achievements",
  },
  {
    src: directersir,
    caption: "Cultural Events",
  },




   {
    src: dj,
    caption: "Campus Life",
  },
  {
    src:rajusir,
    caption: "Industry Visits",
  },
  {
    src: skmic,
    caption: "Smart Classrooms",
  },
  {
    src: directersir,
    caption: "Modern Infrastructure",
  },
  {
    src:mrfr,
    caption: "Library Facilities",
  },
  {
    src: dj,
    caption: "Technical Workshops",
  },
  {
    src:neeraj,
    caption: "Student Achievements",
  },
  {
    src: directersir,
    caption: "Cultural Events",
  },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

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
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="py-10 bg-white mt-10 mb-10">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-[var(--forest)]">
      Gallery
    </h2>

    <div className="relative">
      
      {/* Gallery */}
      <div
        id="gallery-scroll"
        className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden pb-4 scrollbar scroll-smooth scrollb"
      >
        {images.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="
              relative
              min-w-[240px]
              sm:min-w-[280px]
              md:min-w-[320px]
              h-[180px]
              sm:h-[220px]
              overflow-hidden
              rounded-2xl
              shadow-lg
              group
              cursor-pointer
              flex-shrink-0
            "
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm md:text-lg">
                  {item.caption}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow */}
      <button
        onClick={() => {
          document
            .getElementById("gallery-scroll")
            ?.scrollBy({ left: 350, behavior: "smooth" });
        }}
        className="
          absolute
          right-2
          md:-right-6
          top-1/2
          -translate-y-1/2
          bg-white
          rounded-full
          shadow-lg
         
          p-2
          md:p-3
          z-10
          hover:scale-110
          transition
        "
      >
        <ArrowRightToLine
          size={22}
          className="md:w-7 md:h-7 text-[var(--forest)]"
        />
      </button>
    </div>

    {/* Modal */}
    {selectedIndex !== null && (
      <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4 mt-30 pt-10">

        {/* Close */}
        <button
          onClick={() => setSelectedIndex(null)}
          className="absolute top-4 right-4 text-white text-3xl md:text-4xl"
        >
          ✕
        </button>

        {/* Prev */}
        <button
          onClick={prevImage}
          className="
            absolute
            left-2
            md:left-8
            text-white
            bg-white/10
            hover:bg-white/20
            w-10 h-10
            md:w-14 md:h-14
            rounded-full
            flex items-center justify-center
            text-2xl md:text-5xl
          "
        >
          ❮
        </button>

        {/* Content */}
        <div className="w-full max-w-5xl flex flex-col items-center">
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].caption}
            className="
              w-full
              max-w-[90vw]
              md:max-w-[80vw]
              max-h-[300px]
              sm:max-h-[300px]
              md:max-h-[400px]
              object-contain
              rounded-2xl
            "
          />

          <div className="mt-4 text-center px-4">
            <h3 className="text-white text-lg md:text-2xl font-semibold">
              {images[selectedIndex].caption}
            </h3>

            <p className="text-gray-400 text-sm md:text-base mt-1">
              {selectedIndex + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* Next */}
        <button
          onClick={nextImage}
          className="
            absolute
            right-2
            md:right-8
            text-white
            bg-white/10
            hover:bg-white/20
            w-10 h-10
            md:w-14 md:h-14
            rounded-full
            flex items-center justify-center
            text-2xl md:text-5xl
          "
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