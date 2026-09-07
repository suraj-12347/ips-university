import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import suraj from '../../images1/suraj.jpeg'
import neeraj from '../../images1/neerajwhite.png'
import indiangirl from '../../images1/indiangirl.png'
import prasansha from '../../images1/prasansha2.png'

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        id: 1,
        full_name: "Suraj kushwah",
        message:
            "A supportive environment, practical learning and opportunities that helped me grow with confidence.",
        dept: "B.Tech, CSE",
        school: "School of Engineering",
        image: suraj,
        company: "Batch 2024",
        linkedin: "",
        status: 1,
        created_at: "",
        updated_at: "",
    },
    {
        id: 2,
        full_name: "Neeraj",
        message:
            "The university provided me with the right platform to improve my technical skills and become industry ready.",
        dept: "B.Tech, CSE",
        school: "School of Engineering",
        image: neeraj,
        company: "Batch 2024",
        linkedin: "",
        status: 1,
        created_at: "",
        updated_at: "",
    },
    {
        id: 3,
        full_name: "Priya Singh",
        message:
            "The practical exposure and guidance from faculty helped me build confidence and achieve my career goals.",
        dept: "B.Tech, IT",
        school: "School of Engineering",
        image: "/images/student3.jpg",
        company: "Batch 2023",
        linkedin: "",
        status: 1,
        created_at: "",
        updated_at: "",
    },
    {
        id: 4,
        full_name: "Arjun Patel",
        message:
            "A great learning environment with opportunities to explore, experiment and grow both technically and personally.",
        dept: "B.Tech, CSE",
        school: "School of Engineering",
        image: "/images/student4.jpg",
        company: "Batch 2023",
        linkedin: "",
        status: 1,
        created_at: "",
        updated_at: "",
    },
];

const Testimonials = () => {
   return (
    <>
        <section
            className="text-white bg-[#16452a] mt-20 h-[350px]"
            style={{
               
                minHeight: "310px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div className="w-full max-w-[1240px] mx-auto px-[45px]">

             <Swiper
    modules={[Pagination, Autoplay]}
    autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    }}
    speed={800}
    slidesPerView={1}
    loop={true}
    pagination={{
        clickable: true,
    }}
    className="testimonial-swiper"
>
    {testimonials.map((item) => (
        <SwiperSlide key={item.id}>

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-[290px_minmax(0,1fr)_290px]
                    items-center
                    gap-[35px]
                    mb-10
                    mt-10
                "
            >

                {/* LEFT */}
                <div className="self-center">
                    <div
                        className="
                            text-[#c69a45]
                            uppercase
                            font-semibold
                            text-[11px]
                            tracking-[2px]
                            mb-[12px]
                        "
                    >
                        STUDENT VOICE
                    </div>

                    <div
                        className="
                            text-white
                            uppercase
                            font-medium
                            text-[16px]
                        "
                    >
                        WHAT STUDENTS SAY
                    </div>
                </div>

                {/* MIDDLE */}
                <div
                    className="
                        font-serif
                        text-[clamp(28px,4vw,40px)]
                        font-semibold
                        leading-[1.1]
                        tracking-[-0.5px]
                        max-w-[650px]
                    "
                >
                    “{item.message}”
                </div>

                {/* RIGHT */}
                <div
                    className="
                        flex
                        items-center
                        gap-[14px]
                        justify-self-start
                        lg:justify-self-end
                    "
                >
                    <img
                        src={item.image}
                        alt={item.full_name}
                        className="
                            w-[72px]
                            h-[72px]
                            rounded-full
                            object-cover
                            shrink-0
                        "
                    />

                    <div className="leading-none">
                        <div
                            className="
                                text-white
                                text-[14px]
                                font-bold
                                mb-[5px]
                            "
                        >
                            {item.full_name}
                        </div>

                        <div
                            className="
                                text-white/55
                                text-[9px]
                                font-normal
                                whitespace-nowrap
                            "
                        >
                            {item.dept}
                            {item.company && ` · ${item.company}`}
                        </div>
                    </div>
                </div>

            </div>

        </SwiperSlide>
    ))}
</Swiper>

            </div>
        </section>


        <style>{`

            .testimonial-swiper {
                width: 100%;
            }

            .testimonial-swiper .swiper-wrapper {
                align-items: center;
            }

            .testimonial-swiper .swiper-slide {
                height: auto;
            }


            /* --------------------------------
               TABLET
            -------------------------------- */

            @media (max-width: 1024px) {

                .testimonial-swiper {
                    padding: 45px 0;
                }

            }


            /* --------------------------------
               MOBILE
            -------------------------------- */

            @media (max-width: 768px) {

                section {
                    min-height: auto !important;
                }

                .testimonial-swiper {
                    padding: 50px 0;
                }

                .testimonial-swiper .swiper-slide > div {
                    gap: 28px;
                }

            }

        `}</style>
    </>
);
};

export default Testimonials;