<div className="w-full flex justify-center flex-col items-center mt-10">
<div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 w-[80%]">
  {(showAll ? images : images.slice(0, 10)).map((item, index) => (
    <div
      key={index}
      onClick={() => openPopup(item.subImages)}
      className="
        group
        relative
        mb-4
        break-inside-avoid
        overflow-hidden
        cursor-pointer
        rounded-sm
        
        border-4
        border-white
      "
    >

      <img
        src={item.src}
        alt={item.caption}
        className="
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      {/* Hover Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
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
          bottom-0
          left-0
          p-4
          translate-y-5
          opacity-0
          group-hover:translate-y-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
      >
        <h3 className="text-white font-semibold text-lg">
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