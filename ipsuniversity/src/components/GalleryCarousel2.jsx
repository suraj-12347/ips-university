
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import DotedRing2 from "./DotedRing2";
import React, { useRef, useState } from "react";
import pharma from '../images1/flower.jpeg'

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
    title: "Campus Tour",
    coverImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",

    miniCarouselImages: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 2,
    title: "Student Life",
    coverImage:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop",

    miniCarouselImages: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 3,
    title: "Events & Activities",
    coverImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",

    miniCarouselImages: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 4,
    title: "Sports Events",
    coverImage:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",

    miniCarouselImages: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 5,
    title: "Library",
    coverImage:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",

    miniCarouselImages: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 6,
    title: "Labs",
    coverImage:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",

    miniCarouselImages: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1516321310764-8d5d3c2c4d7f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 7,
    title: "Workshops",
    coverImage:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",

    miniCarouselImages: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 8,
    title: "Cultural Fest",
    coverImage:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop",

    miniCarouselImages: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  // SAME PATTERN FOLLOW KARKE
  // id: 9 se id: 24 tak aur add kar sakte ho
];

const GalleryCarousel2 = () => {
  const [popupImages, setPopupImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevRef = useRef(null);
const nextRef = useRef(null);

  const openPopup = (popupImages, index = 0) => {
    setPopupImages(popupImages);
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setPopupImages([]);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === popupImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? popupImages.length - 1 : prev - 1
    );
  };

  return (
  <>
    <section className="w-full  py-5 pb-10 mt-20 relative overflow-hidden"
    style={{
              backgroundImage: `url(${pharma})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
    >

       {/* <div className="absolute inset-0 bg-[var(--moss)] "></div> */}


        <div
        className="absolute -bottom-2 left-0 w-full h-[70%] z-[1]"
        style={{
          background:
            "linear-gradient(to top, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute -top-2 left-0 w-full h-[70%] z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px]"></div>


      {/* Rings */}
      {/* <div className="absolute right-25 -top-80 rotate-180">
        <DotedRing2 height={550} width={550} />
      </div>

      <div className="absolute left-10 -bottom-80">
        <DotedRing2 height={550} width={550} />
      </div> */}

      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-12 mb-10 relative z-4">

        <div>
          <p className="text-[var(--forest)]/80 text-sm font-semibold tracking-[3px] uppercase">
            Campus Life
          </p>

          <h2 className="text-3xl text-[var(--forest)] md:text-5xl font-bold mt-2">
            Explore IPS Moments
          </h2>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3 40">

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

        </div>
      </div>

      {/* Main Slider */}
     {/* Main Slider */}
<Swiper
  modules={[Navigation]}
  slidesPerView={1}
  spaceBetween={20}
  observer={true}
  observeParents={true}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  className="w-full"
>
  {slidesData.map((slide) => (
    <SwiperSlide key={slide.id}>
      
      {/* Desktop */}
      <div className="hidden xl:flex gap-4 items-stretch w-full px-6 z-40">

        {/* Big Square */}
        <div
          onClick={() =>
            openPopup(
              slide.miniCarouselImages.map((img) => img.image),
              0
            )
          }
          className="relative group min-w-[260px] h-[260px] overflow-hidden cursor-pointer"
        >
          <img
            src={slide.coverImage}
            alt=""
            className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <ImageIcon size={30} className="text-white" />
          </div>
        </div>

        {/* Middle */}
        <div className="flex flex-col gap-4">

          <div className="flex gap-4">
            {[0, 1].map((i) => (
              <div
                key={i}
                onClick={() =>
                  openPopup(
                    slide.miniCarouselImages.map((img) => img.image),
                    i
                  )
                }
                className="relative group w-[120px] h-[120px] overflow-hidden cursor-pointer"
              >
                <img
                  src={slide.miniCarouselImages[i].image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <ImageIcon size={22} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          <div
            onClick={() =>
              openPopup(
                slide.miniCarouselImages.map((img) => img.image),
                2
              )
            }
            className="relative group h-[120px] overflow-hidden cursor-pointer"
          >
            <img
              src={slide.miniCarouselImages[2].image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <ImageIcon size={26} className="text-white" />
            </div>
          </div>
        </div>

        {/* Big Rectangle */}
        <div
          onClick={() =>
            openPopup(
              slide.miniCarouselImages.map((img) => img.image),
              3
            )
          }
          className="relative group min-w-[420px] h-[260px] overflow-hidden cursor-pointer"
        >
          <img
            src={slide.miniCarouselImages[3].image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <ImageIcon size={34} className="text-white" />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          {[0, 1].map((i) => (
            <div
              key={i}
              onClick={() =>
                openPopup(
                  slide.miniCarouselImages.map((img) => img.image),
                  i
                )
              }
              className="relative group w-[120px] h-[120px] overflow-hidden cursor-pointer"
            >
              <img
                src={slide.miniCarouselImages[i].image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <ImageIcon size={22} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Last Big */}
        <div
          onClick={() =>
            openPopup(
              slide.miniCarouselImages.map((img) => img.image),
              2
            )
          }
          className="relative group min-w-[260px] h-[260px] overflow-hidden cursor-pointer"
        >
          <img
            src={slide.coverImage}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <ImageIcon size={30} className="text-white" />
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:grid xl:hidden grid-cols-2 gap-4 px-4">

        {[slide.coverImage, ...slide.miniCarouselImages.map((i) => i.image)]
          .slice(0, 6)
          .map((img, index) => (
            <div
              key={index}
              onClick={() =>
                openPopup(
                  [slide.coverImage, ...slide.miniCarouselImages.map((i) => i.image)],
                  index
                )
              }
              className={`relative group overflow-hidden cursor-pointer
              ${index === 0 ? "col-span-2 h-[320px]" : "h-[220px]"}`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <ImageIcon size={28} className="text-white" />
              </div>
            </div>
          ))}
      </div>

      {/* Mobile */}
      <div className="grid md:hidden grid-cols-1 gap-3 px-4">

        {[slide.coverImage, ...slide.miniCarouselImages.map((i) => i.image)]
          .slice(0, 5)
          .map((img, index) => (
            <div
              key={index}
              onClick={() =>
                openPopup(
                  [slide.coverImage, ...slide.miniCarouselImages.map((i) => i.image)],
                  index
                )
              }
              className={`relative group overflow-hidden cursor-pointer
              ${index === 0 ? "h-[260px]" : "h-[180px]"}`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <ImageIcon size={24} className="text-white" />
              </div>
            </div>
          ))}
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </section>

    {/* Popup */}
    {popupImages.length > 0 && (
      <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center top-30">

        {/* Close */}
        <button
          onClick={closePopup}
          className="absolute top-6 right-6 text-white z-20"
        >
          <X size={34} />
        </button>

        {/* Prev */}
        <button
          onClick={prevImage}
          className="absolute left-6 text-white z-20"
        >
          <ChevronLeft size={44} />
        </button>

        {/* Image */}
        <div className="h-[400px] flex items-center justify-center px-10">
          <img
            src={popupImages[currentIndex]}
            alt=""
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Next */}
        <button
          onClick={nextImage}
          className="absolute right-6 text-white z-20"
        >
          <ChevronRight size={44} />
        </button>
      </div>
    )}
  </>
);
};

export default GalleryCarousel2;