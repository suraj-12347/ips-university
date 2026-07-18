import React, { useState } from "react";
import GalleryPopup from "./GalleryPopup";


const images = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    caption: "Interactive Learning",
    subImages: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    caption: "Teaching Practice",
    subImages: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    caption: "Smart Classroom",
    subImages: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    caption: "Library Resources",
    subImages: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
    caption: "Educational Workshops",
    subImages: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    caption: "Student Activities",
    subImages: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    caption: "Campus Events",
    subImages: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    caption: "Seminars & Conferences",
    subImages: [
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    caption: "Future Educators",
    subImages: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
   {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    caption: "Future Educators",
    subImages: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
   {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    caption: "Future Educators",
    subImages: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

const EducationGallery = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupImages, setPopupImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const openPopup = (subImages) => {
    setPopupImages(subImages);
    setCurrentIndex(0);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <section className="py-20 bg-[#f8fbf6] overflow-hidden">
        <div className="max-w-[1700px] mx-auto">

          <div className="mb-12 text-center">
            <span className="uppercase tracking-[4px] text-xs font-semibold text-[var(--grass)]">
              Gallery
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--forest)] mt-3">
              Life at School of Education
            </h2>
          </div>

          {/* Gallery */}
         {/* Gallery */}


<div>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
    {(showAll ? images : images.slice(0, 5)).map((item, index) => (
      <div
        key={index}
        onClick={() => openPopup(item.subImages)}
        className="
          group
          relative
          h-[180px]
          md:h-[220px]
          lg:h-[260px]
          xl:h-[300px]
          overflow-hidden
          cursor-pointer
        "
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
            ease-out
            group-hover:scale-125
          "
        />

        {/* Overlay */}
       <div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-[var(--forest)]
   
    via-60%
    to-transparent
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
  "
/>

        {/* Caption */}
        <div
          className="
            absolute
            left-0
            bottom-0
            w-full
            p-5
            translate-y-6
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        >
         

          <h3 className="text-white text-lg font-semibold">
            {item.caption}
          </h3>
        </div>
      </div>
    ))}
  </div>

  {/* View More / Show Less */}
  {images.length > 5 && (
    <div className="flex justify-center mt-12">
      <button
        onClick={() => setShowAll(!showAll)}
        className="
          px-8
          py-3
          bg-[var(--forest)]
          text-white
          font-medium
          tracking-wide
          rounded-full
          transition-all
          duration-300
          hover:bg-[var(--grass)]
        "
      >
        {showAll ? "Show Less" : "View More"}
      </button>
    </div>
  )}
</div>
        </div>
      </section>

      <GalleryPopup
        open={popupOpen}
        onClose={closePopup}
        images={popupImages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
};

export default EducationGallery;