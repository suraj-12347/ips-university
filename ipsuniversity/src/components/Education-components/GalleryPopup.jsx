import React, { useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const GalleryPopup = ({
  open,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) => {
  if (!open) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [currentIndex, images]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-red-400 transition"
      >
        <X size={34} />
      </button>

      {/* Left */}
      {images.length > 1 && (
        <button
          onClick={prevSlide}
          className="absolute left-5 lg:left-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Image */}
      <div className="w-[92%] lg:w-[78%] h-[80vh] flex items-center justify-center">

        <img
          src={images[currentIndex]}
          alt=""
          className="
            max-w-full
            max-h-full
            object-contain
            rounded-lg
            shadow-2xl
          "
        />

      </div>

      {/* Right */}
      {images.length > 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-5 lg:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white text-sm tracking-wider">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default GalleryPopup;