# ips-university
/




 <div className="relative overflow-hidden" style={{ backgroundColor: "var(--forest)" }}>
        {/* illustration — real <img>, object-fit so it's never cropped or
            squashed, always pinned to the bottom edge */}
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain object-bottom pointer-events-none select-none"
        />

        {/* short dark wash — only strong near the very top, for headline
            legibility — fully transparent by the time it reaches the
            illustration so the artwork stays bright and visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,46,33,0.72) 0%, rgba(15,46,33,0.4) 28%, rgba(15,46,33,0.1) 50%, rgba(15,46,33,0) 62%)",
          }}
        />

        <div className="relative z-10 flex flex-col  items-start gap-10">
        <section className="flex items-center justify-center min-h-[100vh] px-6 sm:px-10 lg:px-20 pb-12 sm:pb-16 w-full">
  <div className="relative z-10 max-w-full mx-auto text-center">
    <p
      className="uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3"
      style={{
        color: "var(--white)",
        fontFamily: "Outfit, sans-serif",
      }}
    >
      About The Sansthan
    </p>

    <h1
      className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-5"
      style={{
        color: "var(--white)",
        fontFamily: "Fraunces, serif",
      }}
    >
      Overview
    </h1>

    <p
      className="text-sm sm:text-base leading-6 max-w-xl mx-auto"
      style={{
        color: "var(--white)",
        opacity: 0.9,
        fontFamily: "Outfit, sans-serif",
      }}
    >
      Registered in 1973, and home to the IPS Group of Colleges since 2005 —
      grown, season by season, into one of Madhya Pradesh's premier
      non-governmental educational institutions.
    </p>
  </div>
</section>

          {/* ============================================================ */}
          {/* GROWTH RINGS — signature element, sits over the building art */}
          {/* ============================================================ */}
          <section className="px-6 sm:px-10 lg:px-20 pb-24 sm:pb-32 bg-transparent">
            {/* <div className="max-w-5xl mx-auto text-center mb-12">
              <h2
                className="text-2xl sm:text-3xl mb-3"
                style={{ color: "var(--white)", fontFamily: "Fraunces, serif" }}
              >
                Grown Like a Tree, Ring by Ring
              </h2>
              <p
                className="max-w-xl mx-auto text-sm sm:text-base"
                style={{ color: "var(--white)", opacity: 0.8, fontFamily: "Outfit, sans-serif" }}
              >
                Every ring marks a season of growth — from a registered society
                to a four-college institution.
              </p>
            </div> */}

            {/* <div className="flex flex-wrap items-end justify-center gap-8 sm:gap-10 lg:gap-14 max-w-5xl mx-auto">
              {rings.map((r) => (
                <div key={r.value} className="flex flex-col items-center">
                  <div
                    className="rounded-full flex items-center justify-center border-[3px] transition-transform duration-300 hover:scale-105"
                    style={{
                      width: r.size,
                      height: r.size,
                      borderColor: "var(--white)",
                      backgroundColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    <span
                      className="font-semibold text-lg sm:text-xl"
                      style={{ color: "var(--white)", fontFamily: "Fraunces, serif" }}
                    >
                      {r.value}
                    </span>
                  </div>
                  <p
                    className="mt-3 text-xs sm:text-sm text-center max-w-[9rem]"
                    style={{ color: "var(--white)", opacity: 0.85, fontFamily: "Outfit, sans-serif" }}
                  >
                    {r.label}
                  </p>
                </div>
              ))}
            </div> */}
          </section>
        </div>
      </div>