
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DotedRing2 from "./DotedRing2";
import React, { useRef, useState } from "react";
import pharma from '../images1/flower.jpeg'

import rajusir from '../images1/rajusir.JPG'
import directersir from '../images1/directersir.JPG'
import dj from '../images1/dj.JPG'
import mrfr from '../images1/mrfr.jpeg'
import skmic from '../images1/skmic.jpeg'
import neeraj from '../images1/neeraj2.jpeg'

import {
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const slidesData = [
  {
    id: 1,
    caption: "Campus Tour",
    src: dj,
    subImages: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 2,
    caption: "Student Life",
    src: directersir,
    subImages: [
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 3,
    caption: "Events & Activities",
    src: rajusir,
    subImages: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 4,
    caption: "Modern Infrastructure",
    src: neeraj,
    subImages: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 5,
    caption: "Library Facilities",
    src: mrfr,
    subImages: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 6,
    caption: "Innovation & Research",
    src: skmic,
    subImages: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 7,
    caption: "Sports & Recreation",
    src: dj,
    subImages: [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 8,
    caption: "Cultural Festivals",
    src: directersir,
    subImages: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

const GalleryCarousel2 = () => {
 
  const prevRef = useRef(null);
const nextRef = useRef(null);
const swiperRef = useRef(null);
const [activeIndex, setActiveIndex] = useState(0);
const [expandedReview, setExpandedReview] = useState(null);

const galleryImages = slidesData.slice(0, 8);
const [popupImages, setPopupImages] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);

const openPopup = (images) => {
  setPopupImages(images);
  setCurrentIndex(0);
};

const closePopup = () => {
  setPopupImages([]);
};

const nextImage = () => {
  setCurrentIndex((prev) => (prev + 1) % popupImages.length);
};

const prevImage = () => {
  setCurrentIndex(
    (prev) => (prev - 1 + popupImages.length) % popupImages.length
  );
};
 

 

  return (
  <>
    <section className="w-full  py-5 pb-10 mt-20 relative overflow-hidden rounded-xl bg-transparent flex justify-center items-center flex-col gap-10"
    // style={{
    //           backgroundImage: `url(${pharma})`,
    //           backgroundSize: "cover",
    //           backgroundPosition: "center",
    //         }}
    >

       {/* <div className="absolute inset-0 bg-[var(--moss)] "></div> */}


       
       
    


      {/* Rings */}
      {/* <div className="absolute right-25 -top-80 rotate-180">
        <DotedRing2 height={550} width={550} />
      </div>

      <div className="absolute left-10 -bottom-80">
        <DotedRing2 height={550} width={550} />
      </div> */}

      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-12 mb-10 relative z-4">

        <div className="flex flex-col items-center">
          <p className="text-[var(--forest)]/80 text-md font-semibold tracking-[3px] uppercase">
            Campus Life
          </p>

          <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-extrabold text-[var(--forest)] mt-2 leading-tight">
            Explore IPS Moments
          </h2>
        </div>

        {/* Navigation */}
        {/* <div className="flex items-center gap-3 ml-10">

          <button
            ref={prevRef}
            className="w-14 h-14 border text-[var(--forest)] border-[var(--forest)] flex items-center justify-center hover:bg-[var(--forest)] hover:text-white transition-all duration-300 mt-8"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            ref={nextRef}
            className="w-14 h-14 border border-[var(--forest)] text-[var(--forest)] flex items-center justify-center hover:bg-[var(--forest)] hover:text-white transition-all duration-300 mt-8"
          >
            <ChevronRight size={24} />
          </button>

        </div> */}
      </div>

      {/* Main Slider */}
     {/* Main Slider */}
<div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-2 items-stretch w-full px-1">

  {/* Big Square */}
  <div
    onClick={() => openPopup(galleryImages[0].subImages)}
    className="relative group w-full sm:w-[48%] lg:w-[260px] h-[260px] overflow-hidden rounded-xl cursor-pointer"
  >
    <img
      src={galleryImages[0].src}
      alt={galleryImages[0].caption}
      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
    />

    {/* Photos Count */}
    <div className="absolute top-4 right-4 bg-[var(--forest)]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
      {galleryImages[0].subImages.length} Photos
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)] via-[var(--forest)]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

    <h3 className="absolute bottom-5 left-5 right-5 text-white font-semibold text-lg opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      {galleryImages[0].caption}
    </h3>
  </div>

  {/* Middle */}
  <div className="flex flex-col gap-2 w-full sm:w-[48%] lg:w-auto">

    <div className="flex gap-2">

      {[1, 2].map((i) => (
        <div
          key={i}
          onClick={() => openPopup(galleryImages[i].subImages)}
          className="relative group flex-1 lg:w-[120px] h-[130px] overflow-hidden rounded-xl cursor-pointer"
        >

          <img
            src={galleryImages[i].src}
            alt={galleryImages[i].caption}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Photos Count */}
          <div className="absolute top-2 right-2 bg-[var(--forest)]/90 backdrop-blur-md text-white px-2 py-1 rounded-full text-[10px] font-semibold z-10">
            {galleryImages[i].subImages.length}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)] via-[var(--forest)]/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

          <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            {galleryImages[i].caption}
          </p>

        </div>
      ))}

    </div>

    {/* Bottom Small */}
    <div
      onClick={() => openPopup(galleryImages[3].subImages)}
      className="relative group h-[120px] overflow-hidden rounded-xl cursor-pointer"
    >

      <img
        src={galleryImages[3].src}
        alt={galleryImages[3].caption}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Photos Count */}
      <div className="absolute top-2 right-2 bg-[var(--forest)]/90 backdrop-blur-md text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
        {galleryImages[3].subImages.length} Photos
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)] via-[var(--forest)]/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        {galleryImages[3].caption}
      </p>

    </div>

  </div>

  {/* Big Rectangle */}
  <div
    onClick={() => openPopup(galleryImages[4].subImages)}
    className="relative group w-full lg:w-[420px] h-[260px] overflow-hidden rounded-xl cursor-pointer"
  >

    <img
      src={galleryImages[4].src}
      alt={galleryImages[4].caption}
      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
    />

    {/* Photos Count */}
    <div className="absolute top-4 right-4 bg-[var(--forest)]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
      {galleryImages[4].subImages.length} Photos
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)] via-[var(--forest)]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

    <h3 className="absolute bottom-5 left-5 right-5 text-white font-semibold text-lg opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      {galleryImages[4].caption}
    </h3>

  </div>

  {/* Right Small */}
  <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-auto">

    {[5, 6].map((i) => (
      <div
        key={i}
        onClick={() => openPopup(galleryImages[i].subImages)}
        className="relative group flex-1 lg:w-[120px] h-[130px] overflow-hidden rounded-xl cursor-pointer"
      >

        <img
          src={galleryImages[i].src}
          alt={galleryImages[i].caption}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Photos Count */}
        <div className="absolute top-2 right-2 bg-[var(--forest)]/90 backdrop-blur-md text-white px-2 py-1 rounded-full text-[10px] font-semibold z-10">
          {galleryImages[i].subImages.length}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)] via-[var(--forest)]/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {galleryImages[i].caption}
        </p>

      </div>
    ))}

  </div>

  {/* Last Vertical */}
  <div
    onClick={() => openPopup(galleryImages[7].subImages)}
    className="relative group w-full sm:w-[48%] lg:w-[150px] h-[260px] overflow-hidden rounded-xl cursor-pointer"
  >

    <img
      src={galleryImages[7].src}
      alt={galleryImages[7].caption}
      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
    />

    {/* Photos Count */}
    <div className="absolute top-4 right-4 bg-[var(--forest)]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
      {galleryImages[7].subImages.length} Photos
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)] via-[var(--forest)]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

    <h3 className="absolute bottom-5 left-4 right-4 text-white font-semibold text-sm opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      {galleryImages[7].caption}
    </h3>

  </div>

</div>

   {/* Pagination */}
    {/* <div className="flex justify-center items-center gap-2 mt-6">
  {slidesData.map((_, index) => (
    <button
      key={index}
      onClick={() => swiperRef.current?.slideToLoop(index)}
      className={`transition-all duration-300 rounded-full ${
        activeIndex === index
          ? "w-8 h-2 bg-[var(--forest)]"
          : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
      }`}
    />
  ))}
</div> */}
    </section>

    {/* Popup */}
   {popupImages.length > 0 && (
  <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center pt-20">

    <button
      onClick={closePopup}
      className="absolute top-15 right-8 text-white"
    >
      <X size={34}/>
    </button>

    <button
      onClick={prevImage}
      className="absolute left-8 text-white"
    >
      <ChevronLeft size={42}/>
    </button>

    <img
      src={popupImages[currentIndex]}
      className="max-h-[80vh] max-w-[90vw] object-contain"
    />

    <button
      onClick={nextImage}
      className="absolute right-8 text-white"
    >
      <ChevronRight size={42}/>
    </button>

  </div>
)}
  </>
);
};

export default GalleryCarousel2;