
import React from "react";
import students from "../images1/students_ground2.png";

const Brochure = () => {
    return (
        <section className="relative w-full h-[530px] max-h-[350px]  overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <div
                className="
                    absolute inset-0
                    bg-cover
                    bg-center
                    bg-no-repeat
                    scale-[1.02]
                "
                style={{
                    backgroundImage:
                            `url('${students}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                }}
           
               
            />

            {/* DARK GREEN OVERLAY */}
            {/* <div
                className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-[#103c24]/95
                    via-[#16452a]/85
                    to-[#16452a]/45
                "
            />

           
            <div
                className="
                    absolute inset-0
                    bg-white/[0.06]
                    backdrop-blur-[2px]
                    border-y
                    border-white/10
                "
            /> */}
             <div className="absolute inset-0 bg-green-900/80 z-0"></div>

            {/* CONTENT */}
           <div
    className="
        relative z-10
        h-full
        max-w-[1240px]
        mx-auto
        px-6 md:px-[45px]
        w-full
        flex
        items-center
        justify-between
        gap-8
    "
>
    {/* LEFT CONTENT */}
    <div className="max-w-[720px]">

        <div
            className="
                mb-2
                text-[#c69a45]
                text-[10px]
                md:text-[11px]
                font-bold
                uppercase
                tracking-[2.5px]
            "
        >
            DISCOVER YOUR FUTURE
        </div>

        <h2
            className="
                m-0
                text-white
                font-serif
                text-[32px]
                md:text-[40px]
                lg:text-[44px]
                font-semibold
                leading-[1.05]
                tracking-[-1px]
            "
        >
           Ready To Plant Your Future!! <br />
        </h2>

        <p
            className="
                mt-3
                mb-0
                max-w-[680px]
                text-white/75
                text-[12px]
                md:text-[13px]
                leading-[1.55]
            "
        >
           Transform your future with world-class education, industry-focused learning, and endless opportunities at IPS University, Gwalior.
        </p>

    </div>


    {/* RIGHT BUTTON */}
    <div className="shrink-0">

        <button
            type="button"
            onClick={() => window.open("/brochure.pdf", "_blank")}
            className="
                group
                inline-flex
                items-center
                gap-2
                px-[20px]
                py-[12px]
                rounded-lg
                border
                border-white/20
                bg-[var(--white)]
                text-[var(--forest)]
                text-[11px]
                font-bold
                whitespace-nowrap
                cursor-pointer
                transition-all
                duration-300
               
                hover:-translate-y-[2px]
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                shadow-[0_5px_15px_rgba(0,0,0,0.15)]
            "
        >
            <span>Download Brochure</span>

            <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-[2px]
                "
            >
                <path
                    d="M12 3V16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />

                <path
                    d="M7 11L12 16L17 11"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    d="M5 21H19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        </button>

    </div>
</div>

        </section>
    );
};

export default Brochure;