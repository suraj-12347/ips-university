
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
  
    <section
        id="campus-life"
        className="w-full py-20 mt-10 relative overflow-hidden bg-white"
    >
        {/* ================= HEADER ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-14">
                <span
                    className="font-bold text-xs uppercase tracking-widest"
                    style={{ color: "var(--grass)" }}
                >
                    Campus Life
                </span>

                <h2
                    className="text-3xl font-extrabold mt-1"
                    style={{ color: "var(--forest)" }}
                >
                    Explore IPS Moments
                </h2>

                <p className="text-gray-600 text-sm mt-2">
                    Discover the vibrant campus life, events, activities,
                    and memorable moments at IPS University.
                </p>
            </div>


            {/* ================= GALLERY ================= */}
{/* ================= GALLERY ================= */}
<div className="w-full overflow-hidden">
    <div
        className="
            grid
            grid-cols-1
            lg:grid-cols-[0.8fr_1fr]
            gap-3
            w-full
            h-auto
            lg:h-[400px]
            lg:max-h-[400px]
            overflow-hidden
        "
    >

        {/* =========================================
            LEFT LARGE IMAGE
        ========================================= */}
        <div
            onClick={() =>
                openPopup(galleryImages[0].subImages)
            }
            className="
                relative
                group
                overflow-hidden
                rounded-2xl
                cursor-pointer
                w-full
                h-[260px]
                sm:h-[300px]
                lg:h-[400px]
                lg:max-h-[400px]
            "
        >
            <img
                src={galleryImages[0].src}
                alt={galleryImages[0].caption}
                className="
                    block
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                "
            />

            {/* Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[var(--forest)]
                    via-[var(--forest)]/30
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                "
            />

            {/* Photos Count */}
            <div
                className="
                    absolute
                    top-3
                    right-3
                    bg-[var(--forest)]/90
                    backdrop-blur-md
                    text-white
                    px-2.5
                    py-1
                    rounded-full
                    text-[10px]
                    font-semibold
                "
            >
                {galleryImages[0].subImages.length} Photos
            </div>

            {/* Caption */}
            <h3
                className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    text-white
                    text-lg
                    font-semibold
                    opacity-0
                    translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                "
            >
                {galleryImages[0].caption}
            </h3>
        </div>


        {/* =========================================
            RIGHT SIDE - 4 IMAGES
            EXACTLY 400px HEIGHT
        ========================================= */}
        <div
            className="
                grid
                grid-cols-2
                grid-rows-2
                gap-3
                w-full
                h-[260px]
                sm:h-[300px]
                lg:h-[400px]
                lg:max-h-[400px]
                overflow-hidden
            "
        >
            {[1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    onClick={() =>
                        openPopup(galleryImages[i].subImages)
                    }
                    className="
                        relative
                        group
                        overflow-hidden
                        rounded-2xl
                        cursor-pointer
                        w-full
                        h-full
                        min-h-0
                    "
                >
                    <img
                        src={galleryImages[i].src}
                        alt={galleryImages[i].caption}
                        className="
                            block
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                        "
                    />

                    {/* Hover Overlay */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[var(--forest)]
                            via-[var(--forest)]/20
                            to-transparent
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-500
                        "
                    />

                    {/* Photos Count */}
                    <div
                        className="
                            absolute
                            top-2
                            right-2
                            bg-[var(--forest)]/90
                            backdrop-blur-md
                            text-white
                            px-2
                            py-1
                            rounded-full
                            text-[10px]
                            font-semibold
                        "
                    >
                        {galleryImages[i].subImages.length}
                    </div>

                    {/* Caption */}
                    <p
                        className="
                            absolute
                            bottom-2
                            left-3
                            right-3
                            text-white
                            text-xs
                            font-semibold
                            opacity-0
                            translate-y-3
                            group-hover:opacity-100
                            group-hover:translate-y-0
                            transition-all
                            duration-500
                        "
                    >
                        {galleryImages[i].caption}
                    </p>
                </div>
            ))}
        </div>

    </div>
</div>
        </div>
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