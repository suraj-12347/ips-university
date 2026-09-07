import { useState } from "react";
import { Calendar, Download } from "lucide-react";

const campusFeedData = [
    {
        id: 1,
        type: "news",
        title: "National Hackathon & Robotics Championship 2026",
        subtitle:
            "Over 400 collegiate teams showcasing innovations in AI and Embedded Systems.",
        dept: "Computer Science & Engineering",
        school: "School of Engineering",
        image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80",
        starting_date: "2026-09-14",
        ending_date: "2026-09-16",
        last_date: null,
        status: "active",
        created_at: "2026-09-01",
        updated_at: "2026-09-01",
    },

    {
        id: 2,
        type: "event",
        title: "International Symposium on Sustainable Technologies",
        subtitle:
            "Keynote sessions delivered by researchers from IITs and overseas partner universities.",
        dept: "Mechanical Engineering",
        school: "School of Engineering",
        image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80",
        starting_date: "2026-08-28",
        ending_date: "2026-08-29",
        last_date: null,
        status: "active",
        created_at: "2026-08-20",
        updated_at: "2026-08-20",
    },

    {
        id: 3,
        type: "event",
        title: "Tarang: Annual Inter-College Cultural Gathering",
        subtitle:
            "Music, dance, theatrical arts, and photography competitions over 3 power-packed days.",
        dept: "All Departments",
        school: "School of Arts & Humanities",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
        starting_date: "2026-08-12",
        ending_date: "2026-08-14",
        last_date: null,
        status: "active",
        created_at: "2026-08-01",
        updated_at: "2026-08-01",
    },

    {
        id: 4,
        type: "notice",
        title: "Odd Semester End-Term Examination Schedule Released (Autumn 2026)",
        subtitle: "The examination schedule for the Odd Semester has been released.",
        dept: "All Departments",
        school: "IPS University",
        image: null,
        starting_date: null,
        ending_date: null,
        last_date: "2026-09-10",
        status: "active",
        created_at: "2026-09-01",
        updated_at: "2026-09-01",
    },

    {
        id: 5,
        type: "notice",
        title: "State & National Merit Scholarship Application Submission Deadline",
        subtitle:
            "Students are advised to submit their scholarship applications before the deadline.",
        dept: "All Departments",
        school: "IPS University",
        image: null,
        starting_date: null,
        ending_date: null,
        last_date: "2026-09-15",
        status: "active",
        created_at: "2026-09-01",
        updated_at: "2026-09-01",
    },

    {
        id: 6,
        type: "notice",
        title: "Re-opening of Hostels and Transportation Route Verification Notice",
        subtitle:
            "Students are requested to verify hostel and transportation route details.",
        dept: "All Departments",
        school: "IPS University",
        image: null,
        starting_date: null,
        ending_date: null,
        last_date: "2026-09-12",
        status: "active",
        created_at: "2026-09-01",
        updated_at: "2026-09-01",
    },
];


const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};


const getTypeLabel = (type) => {
    switch (type) {
        case "news":
            return "News";

        case "event":
            return "Event";

        case "notice":
            return "Notice";

        default:
            return type;
    }
};


const getTypeStyle = (type) => {
    switch (type) {
        case "news":
            return "bg-blue-100 text-blue-800";

        case "event":
            return "bg-emerald-100 text-emerald-800";

        case "notice":
            return "bg-amber-100 text-amber-800";

        default:
            return "bg-gray-100 text-gray-700";
    }
};


export default function CampusFeed() {

    const [activeTab, setActiveTab] = useState("news");

    const newsEvents = campusFeedData.filter(
        (item) =>
            item.type === "news" ||
            item.type === "event"
    );

    const notices = campusFeedData.filter(
        (item) => item.type === "notice"
    );


    return (
       
<section
    id="notices"
    className="
        relative
        overflow-hidden
        py-20
        min-h-[600px]
        bg-[#eef5ee]
    "
    style={{
        backgroundImage:
            `url('https://i.pinimg.com/1200x/ea/4a/81/ea4a814c625289a724d9b4758ecd83c9.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
    }}
>
    {/* BACKGROUND OVERLAY */}
    <div
        className="
            absolute
            inset-0
            z-0
            bg-green-900/70
        "
    />

    {/* OPTIONAL SOFT GRADIENT */}
    <div
        className="
            absolute
            inset-0
            z-0
            bg-gradient-to-b
            from-green-950/30
            via-green-900/20
            to-green-950/60
        "
    />

    {/* CONTENT */}
    <div
        className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
        "
    >

        {/* ================= HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">

            <div>
                <span
                    className="
                        font-bold
                        text-xs
                        uppercase
                        tracking-widest
                    "
                    style={{
                        color: "var(--leaf)",
                    }}
                >
                    Campus Feed
                </span>

                <h2
                    className="
                        text-3xl
                        font-extrabold
                        mt-1
                        text-white
                    "
                >
                    News, Events & Notice Board
                </h2>
            </div>

            {/* ================= TAB BUTTONS ================= */}
            <div className="flex bg-white/20 backdrop-blur-md p-1 rounded-xl w-fit border border-white/20">

                <button
                    onClick={() => setActiveTab("news")}
                    className={`
                        px-5
                        py-2
                        text-xs
                        font-bold
                        rounded-lg
                        transition
                        ${
                            activeTab === "news"
                                ? "bg-white text-[var(--forest)] shadow-sm"
                                : "text-white hover:bg-white/10"
                        }
                    `}
                >
                    News & Events
                </button>

                <button
                    onClick={() => setActiveTab("notices")}
                    className={`
                        px-5
                        py-2
                        text-xs
                        font-bold
                        rounded-lg
                        transition
                        ${
                            activeTab === "notices"
                                ? "bg-white text-[var(--forest)] shadow-sm"
                                : "text-white hover:bg-white/10"
                        }
                    `}
                >
                    Official Notices
                </button>

            </div>
        </div>

        {/* =====================================================
            TAB 1 — NEWS & EVENTS
        ===================================================== */}
        {activeTab === "news" && (

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {newsEvents.map((item) => (

                    <div
                        key={item.id}
                        className="
                            bg-white/90
                            backdrop-blur-md
                            rounded-2xl
                            p-5
                            border
                            border-white/40
                            hover:border-[var(--grass)]
                            hover:shadow-xl
                            transition
                        "
                    >

                        {/* IMAGE */}
                        {item.image && (
                            <div className="h-36 rounded-xl overflow-hidden mb-4">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-transform
                                        duration-500
                                        hover:scale-105
                                    "
                                />

                            </div>
                        )}

                        {/* TYPE */}
                        <span
                            className={`
                                text-[10px]
                                font-bold
                                px-2
                                py-0.5
                                rounded
                                ${getTypeStyle(item.type)}
                            `}
                        >
                            {getTypeLabel(item.type)}
                        </span>

                        {/* TITLE */}
                        <h4
                            className="
                                font-bold
                                text-base
                                text-gray-900
                                mt-2
                            "
                        >
                            {item.title}
                        </h4>

                        {/* SUBTITLE */}
                        <p
                            className="
                                text-xs
                                text-gray-600
                                mt-1.5
                                leading-relaxed
                            "
                        >
                            {item.subtitle}
                        </p>

                        {/* DATE */}
                        {item.starting_date && (
                            <p
                                className="
                                    text-[11px]
                                    text-gray-400
                                    mt-4
                                    flex
                                    items-center
                                    gap-1
                                "
                            >
                                <Calendar className="w-3.5 h-3.5" />

                                {formatDate(item.starting_date)}
                            </p>
                        )}

                    </div>

                ))}

            </div>

        )}

        {/* =====================================================
            TAB 2 — OFFICIAL NOTICES
        ===================================================== */}
        {activeTab === "notices" && (

            <div className="space-y-3">

                {notices.map((item) => (

                    <div
                        key={item.id}
                        className="
                            bg-white/90
                            backdrop-blur-md
                            p-4
                            rounded-xl
                            border
                            border-white/40
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            gap-3
                            hover:bg-white
                            transition
                        "
                    >

                        <div className="flex items-center gap-3">

                            {/* NOTICE TYPE */}
                            <span
                                className="
                                    px-2
                                    py-0.5
                                    bg-red-100
                                    text-red-700
                                    font-bold
                                    text-[10px]
                                    rounded
                                    uppercase
                                    shrink-0
                                "
                            >
                                {getTypeLabel(item.type)}
                            </span>

                            {/* TITLE */}
                            <span
                                className="
                                    font-semibold
                                    text-gray-900
                                    text-sm
                                "
                            >
                                {item.title}
                            </span>

                        </div>

                        {/* DOWNLOAD */}
                        <button
                            onClick={() =>
                                openBrochureModal(item)
                            }
                            className="
                                text-[var(--forest)]
                                font-bold
                                text-xs
                                flex
                                items-center
                                gap-1
                                hover:underline
                                shrink-0
                            "
                        >
                            Download PDF

                            <Download className="w-3.5 h-3.5" />

                        </button>

                    </div>

                ))}

            </div>

        )}

    </div>
</section>


    );
}