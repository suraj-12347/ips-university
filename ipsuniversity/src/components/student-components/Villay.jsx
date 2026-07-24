import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const culturalVideos = [
  {
    title:"Dance Performances",
    desc:"Energetic solo and group dance performances showcasing different styles and cultures.",
    type:"video",
    video:"https://www.w3schools.com/html/mov_bbb.mp4",
    poster:"https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80"
  },

  {
    title:"Music & Singing",
    desc:"Melodious performances including solo singing, bands and instrumental showcases.",
    type:"youtube",
    video:"https://www.youtube.com/embed/jjBO1jBqLIY",
    poster:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
  },

  {
    title:"Fashion Show",
    desc:"A creative platform where students present fashion, confidence and personality.",
    type:"video",
    video:"https://www.w3schools.com/html/movie.mp4",
    poster:"https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    title:"Drama & Theatre",
    desc:"Powerful storytelling through plays, acting performances and social themes.",
    type:"video",
    video:"https://www.w3schools.com/html/mov_bbb.mp4",
    poster:"https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80"
  },

  {
    title:"DJ Night & Celebration",
    desc:"A memorable evening filled with music, lights and celebration.",
    type:"video",
    video:"https://www.w3schools.com/html/movie.mp4",
    poster:"https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80"
  },

  {
    title:"Talent Hunt",
    desc:"Students get the opportunity to showcase unique skills and hidden talents.",
    type:"video",
    video:"https://www.w3schools.com/html/mov_bbb.mp4",
    poster:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=80"
  }
];


const Villay = () => {

    const [activeVideo,setActiveVideo] = useState(null);

  return (

    <>

      {/* Hero Section */}

      <section className="relative h-[430px] overflow-hidden mt-30">


        <img
          src="https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1600&q=80"
          alt="Villay Festival"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#31572c]/95
            via-[#31572c]/80
            to-transparent
          "
        />


        <div
          className="
            relative
            z-10
            h-full
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            flex
            flex-col
            justify-center
          "
        >


          <span
            className="
              uppercase
              tracking-[4px]
              text-[#cfe8a9]
              text-sm
              font-semibold
            "
          >
            Cultural Festival
          </span>



          <h1
            className="
              mt-4
              text-5xl
              md:text-6xl
              font-bold
              text-white
            "
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Villay Festival
          </h1>



          <p
            className="
              max-w-2xl
              mt-6
              text-white/85
              leading-8
            "
          >
            Celebrating creativity, culture and student talent through
            music, dance, performances and memorable experiences at
            IPS University.
          </p>



          <div
            className="
              flex
              items-center
              gap-2
              mt-8
              text-white
              text-sm
            "
          >

            <Link
              to="/"
              className="hover:text-[#cfe8a9] transition"
            >
              Home
            </Link>


            <ArrowRight size={15}/>


            <Link
              to="/fest"
              className="hover:text-[#cfe8a9] transition"
            >
              Fest
            </Link>


            <ArrowRight size={15}/>


            <span className="text-[#cfe8a9] font-semibold">
              Villay Festival
            </span>


          </div>


        </div>


      </section>

      {/* aboutsec */}
      <section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    <div className="grid lg:grid-cols-2 gap-14 items-center">


      {/* Image */}

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80"
          alt="Villay Cultural Celebration"
          className="
            w-full
            h-[520px]
            object-cover
            rounded-[32px]
          "
        />


        {/* Small Image */}

        <img
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=500&q=80"
          alt="Music Performance"
          className="
            absolute
            -bottom-10
            -right-10
            w-56
            h-56
            object-cover
            rounded-[28px]
            border-8
            border-white
            hidden
            md:block
          "
        />


      </div>



      {/* Content */}

      <div>


        <span
          className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[var(--grass)]
          "
        >
          About Villay
        </span>



        <h2
          className="
            mt-4
            text-4xl
            lg:text-5xl
            font-bold
            text-[var(--forest)]
          "
          style={{ fontFamily:"Fraunces, serif" }}
        >
          A Celebration of
          Culture & Creativity
        </h2>



        <p
          className="
            mt-6
            text-gray-600
            leading-8
            text-lg
          "
        >
          Villay is the annual cultural festival of IPS University that
          brings together students from different disciplines to
          celebrate creativity, passion and artistic excellence.
        </p>



        <p
          className="
            mt-5
            text-gray-600
            leading-8
          "
        >
          The festival provides a vibrant platform for students to
          showcase their talents through music, dance, theatre,
          fashion, art and various cultural competitions while
          building teamwork and unforgettable memories.
        </p>



        {/* Highlights */}

        <div className="grid grid-cols-2 gap-6 mt-10">


          <div
            className="
              p-6
              rounded-2xl
              bg-[#f4f8ee]
            "
          >

            <h3 className="text-3xl font-bold text-[var(--forest)]">
              10+
            </h3>

            <p className="mt-2 text-gray-600">
              Years of Celebration
            </p>

          </div>



          <div
            className="
              p-6
              rounded-2xl
              bg-[#f4f8ee]
            "
          >

            <h3 className="text-3xl font-bold text-[var(--forest)]">
              1000+
            </h3>

            <p className="mt-2 text-gray-600">
              Student Participants
            </p>

          </div>


        </div>


      </div>


    </div>


  </div>


</section>

 {/* festival journy */}

 <section className="py-24 bg-[#f8faf5] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Behind The Celebration
      </span>


      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{fontFamily:"Fraunces, serif"}}
      >
        Festival Journey &
        Planning Process
      </h2>


      <p className="mt-6 text-lg text-gray-600 leading-8">
        From planning themes to final performances, every stage of
        Villay is prepared with teamwork, creativity and dedication.
      </p>

    </div>



    {/* Steps */}

    <div className="mt-16 space-y-12">


    {[
      {
        step:"01",
        title:"Theme Selection & Planning",
        desc:"The organizing team decides the festival theme, event structure and complete execution plan.",
        image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
      },

      {
        step:"02",
        title:"Event Coordination & Registrations",
        desc:"Teams coordinate cultural events, participant registrations and competition schedules.",
        image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80"
      },

      {
        step:"03",
        title:"Practice & Rehearsals",
        desc:"Students prepare performances through regular dance, music and theatre rehearsals.",
        image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80"
      },

      {
        step:"04",
        title:"Stage Setup & Decoration",
        desc:"Creative teams transform the venue with decorations, lighting and stage arrangements.",
        image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"
      },

      {
        step:"05",
        title:"Final Celebration",
        desc:"The festival concludes with energetic performances, celebrations and memorable moments.",
        image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
      }

    ].map((item,index)=>(


      <div
        key={index}
        className="
          grid
          lg:grid-cols-2
          gap-10
          items-center
        "
      >


        {/* Image */}

        <div
          className={`
            ${index % 2 !== 0 ? "lg:order-2" : ""}
          `}
        >

          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              h-[360px]
              object-cover
              rounded-[32px]
            "
          />

        </div>



        {/* Content */}

        <div
          className={`
            ${index % 2 !== 0 ? "lg:order-1" : ""}
          `}
        >

          <span
            className="
              text-5xl
              font-bold
              text-[#90a955]
            "
          >
            {item.step}
          </span>


          <h3
            className="
              mt-4
              text-3xl
              font-bold
              text-[var(--forest)]
            "
          >
            {item.title}
          </h3>


          <p
            className="
              mt-5
              text-gray-600
              leading-8
              text-lg
            "
          >
            {item.desc}
          </p>


        </div>


      </div>


    ))}


    </div>


  </div>

</section>

{/* coordinators */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Team Behind Villay
      </span>


      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{fontFamily:"Fraunces, serif"}}
      >
        Organizing Committee &
        Festival Teams
      </h2>


      <p className="mt-6 text-lg text-gray-600 leading-8">
        Dedicated faculty members and student teams work together
        to plan, coordinate and execute every aspect of Villay.
      </p>

    </div>



    {/* Faculty Coordinators */}

    <div className="mt-20">

      <h3 className="text-3xl font-bold text-[var(--forest)] mb-10">
        Faculty Coordinators
      </h3>


      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">


      {[
        {
          name:"Dr. Anjali Sharma",
          role:"Cultural Faculty Coordinator",
          image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
        },

        {
          name:"Dr. Rajesh Verma",
          role:"Festival Advisor",
          image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
        },

        {
          name:"Prof. Neha Singh",
          role:"Event Coordinator",
          image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
        },

        {
          name:"Prof. Amit Kumar",
          role:"Student Activity Coordinator",
          image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
        }

      ].map((person,index)=>(

        <div
          key={index}
          className="
            group
            rounded-3xl
            overflow-hidden
            bg-white
            shadow-lg
          "
        >

          <img
            src={person.image}
            alt={person.name}
            className="
              w-full
              h-[300px]
              object-cover
              group-hover:scale-105
              transition
              duration-500
            "
          />


          <div className="p-6">

            <h4 className="text-xl font-bold text-[var(--forest)]">
              {person.name}
            </h4>

            <p className="mt-2 text-gray-600">
              {person.role}
            </p>

          </div>

        </div>

      ))}


      </div>

    </div>





    {/* Student Leadership */}

    <div className="mt-24">

      <h3 className="text-3xl font-bold text-[var(--forest)] mb-10">
        Student Leadership
      </h3>


      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">


      {[
        {
          name:"Aarav Sharma",
          role:"Student President",
          image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
        },

        {
          name:"Riya Patel",
          role:"Cultural Head",
          image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
        },

        {
          name:"Karan Singh",
          role:"Event Head",
          image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
        },

        {
          name:"Sneha Gupta",
          role:"Creative Head",
          image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
        }

      ].map((person,index)=>(

        <div
          key={index}
          className="
            rounded-3xl
            bg-[#f8faf5]
            p-6
            text-center
          "
        >

          <img
            src={person.image}
            alt={person.name}
            className="
              w-32
              h-32
              mx-auto
              rounded-full
              object-cover
            "
          />

          <h4 className="mt-5 text-xl font-bold text-[var(--forest)]">
            {person.name}
          </h4>

          <p className="mt-2 text-gray-600">
            {person.role}
          </p>

        </div>

      ))}


      </div>

    </div>





    {/* Student Teams */}

    <div className="mt-24">

      <h3 className="text-3xl font-bold text-[var(--forest)] mb-10">
        Student Teams
      </h3>


      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">


      {[
        {
          title:"Dance Team",
          image:"https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80"
        },
        {
          title:"Music Team",
          image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80"
        },
        {
          title:"Decoration Team",
          image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80"
        },
        {
          title:"Promotion Team",
          image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80"
        }

      ].map((team,index)=>(

        <div
          key={index}
          className="
            relative
            h-[280px]
            rounded-3xl
            overflow-hidden
          "
        >

          <img
            src={team.image}
            alt={team.title}
            className="
              w-full
              h-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/40
              flex
              items-end
              p-6
            "
          >

            <h4 className="text-white text-2xl font-bold">
              {team.title}
            </h4>

          </div>

        </div>

      ))}


      </div>

    </div>


  </div>

</section>


{/* Gallersy */}

<section className="py-24 bg-[#f8faf5] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Behind The Scenes
      </span>


      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{fontFamily:"Fraunces, serif"}}
      >
        Preparation &
        Creative Process
      </h2>


      <p className="mt-6 text-lg text-gray-600 leading-8">
        The success of Villay comes from weeks of preparation,
        teamwork and creativity behind the stage.
      </p>

    </div>



    {/* Gallery */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">


    {[
      {
        title:"Dance Rehearsals",
        image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80"
      },

      {
        title:"Music Practice",
        image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
      },

      {
        title:"Stage Decoration",
        image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"
      },

      {
        title:"Costume Preparation",
        image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
      },

      {
        title:"Backstage Management",
        image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80"
      },

      {
        title:"Final Stage Setup",
        image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
      }

    ].map((item,index)=>(


      <div
        key={index}
        className="
          group
          relative
          h-[360px]
          rounded-[30px]
          overflow-hidden
        "
      >


        <img
          src={item.image}
          alt={item.title}
          className="
            w-full
            h-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />



        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        />


        <div
          className="
            absolute
            bottom-0
            p-7
            text-white
          "
        >

          <h3 className="text-2xl font-bold">
            {item.title}
          </h3>


          <p className="mt-2 text-white/80">
            Villay preparation moments captured behind the scenes.
          </p>


        </div>


      </div>


    ))}


    </div>


  </div>


</section>


{/* majorevents */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Events & Performances
      </span>



      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{fontFamily:"Fraunces, serif"}}
      >
        Major Cultural Events
        of Villay
      </h2>



      <p className="mt-6 text-lg text-gray-600 leading-8">
        Villay brings together diverse cultural activities where
        students showcase their creativity, passion and talent.
      </p>


    </div>




    {/* Event Cards */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">


    {culturalVideos.map((event,index)=>(

<div
key={index}
className="
group
relative
h-[420px]
rounded-[32px]
overflow-hidden
"
>


{
activeVideo === index ? (

event.type === "youtube" ? (

<iframe
src={`${event.video}?autoplay=1`}
title={event.title}
className="
w-full
h-full
"
allow="autoplay; encrypted-media"
allowFullScreen
></iframe>

) : (

<video
src={event.video}
autoPlay
controls
className="
w-full
h-full
object-cover
"
/>

)

) : (

<>


<img
src={event.poster}
alt={event.title}
className="
absolute
inset-0
w-full
h-full
object-cover
"
/>



<div
className="
absolute
inset-0
bg-black/40
"
/>



<button
onClick={()=>setActiveVideo(index)}
className="
absolute
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
w-16
h-16
rounded-full
bg-white/90
flex
items-center
justify-center
z-10
hover:scale-110
transition
"
>


<svg
xmlns="http://www.w3.org/2000/svg"
fill="currentColor"
viewBox="0 0 24 24"
className="
w-8
h-8
text-[var(--forest)]
ml-1
"
>
<path d="M8 5v14l11-7z"/>
</svg>


</button>


</>

)

}



<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/85
via-black/30
to-transparent
pointer-events-none
"
/>



<div
className="
absolute
bottom-0
left-0
p-8
text-white
z-10
"
>

<h3 className="text-2xl font-bold">
{event.title}
</h3>


<p className="mt-3 text-white/80 leading-7">
{event.desc}
</p>


</div>


</div>

))}


    </div>


  </div>


</section>



{/* achievement */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[var(--grass)]
        "
      >
        Villay Impact
      </span>


      <h2
        className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[var(--forest)]
        "
        style={{fontFamily:"Fraunces, serif"}}
      >
        Achievements &
        Festival Highlights
      </h2>


      <p className="mt-6 text-lg text-gray-600 leading-8">
        Over the years, Villay has grown into a platform that
        celebrates student creativity, teamwork and cultural
        excellence.
      </p>


    </div>




    {/* Statistics */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        mt-16
      "
    >


    {[
      {
        number:"10+",
        title:"Successful Editions",
        desc:"Years of cultural celebrations"
      },

      {
        number:"2000+",
        title:"Participants",
        desc:"Students showcasing talent"
      },

      {
        number:"50+",
        title:"Events Organized",
        desc:"Cultural competitions & shows"
      },

      {
        number:"100+",
        title:"Performances",
        desc:"Music, dance & creative acts"
      }

    ].map((stat,index)=>(


      <div
        key={index}
        className="
          group
          p-8
          rounded-[28px]
          bg-[#f8faf5]
          hover:-translate-y-2
          transition
          duration-300
        "
      >


        <h3
          className="
            text-5xl
            font-bold
            text-[var(--forest)]
          "
        >
          {stat.number}
        </h3>


        <h4
          className="
            mt-5
            text-xl
            font-bold
            text-gray-800
          "
        >
          {stat.title}
        </h4>


        <p className="mt-3 text-gray-600">
          {stat.desc}
        </p>


      </div>


    ))}


    </div>





    {/* Achievement Image */}

    <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">


      <img
        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80"
        alt="Villay Celebration"
        className="
          w-full
          h-[420px]
          object-cover
          rounded-[32px]
        "
      />



      <div>

        <h3
          className="
            text-3xl
            font-bold
            text-[var(--forest)]
          "
        >
          Creating Memories Beyond Events
        </h3>


        <p
          className="
            mt-5
            text-gray-600
            leading-8
            text-lg
          "
        >
          Villay is not only a festival but a journey of
          collaboration, confidence and creativity. It gives
          students opportunities to lead teams, manage events
          and express their artistic abilities.
        </p>


        <p
          className="
            mt-4
            text-gray-600
            leading-8
          "
        >
          Every edition reflects the dedication of students,
          faculty members and organizers who work together to
          create a memorable celebration.
        </p>


      </div>


    </div>


  </div>


</section>


<section className="relative py-28 osverflow-hidden">


  {/* Background Image */}

  <img
    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
    alt="Villay Celebration"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
  />



  {/* Overlay */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#31572c]/95
      via-[#31572c]/80
      to-[#31572c]/60
    "
  />




  <div
    className="
      relative
      z-10
      max-w-5xl
      mx-auto
      px-6
      text-center
    "
  >


    <span
      className="
        uppercase
        tracking-[4px]
        text-sm
        font-semibold
        text-[#cfe8a9]
      "
    >
      Be A Part Of Villay
    </span>



    <h2
      className="
        mt-5
        text-4xl
        md:text-6xl
        font-bold
        text-white
      "
      style={{fontFamily:"Fraunces, serif"}}
    >
      Join The Celebration
      Of Creativity & Culture
    </h2>



    <p
      className="
        mt-6
        max-w-3xl
        mx-auto
        text-lg
        text-white/85
        leading-8
      "
    >
      Experience the energy of performances, competitions and
      unforgettable moments. Be a part of Villay and celebrate
      the spirit of creativity at IPS University.
    </p>




    <div
      className="
        flex
        justify-center
        gap-5
        mt-10
        flex-wrap
      "
    >


      <Link
        to="/contact"
        className="
          px-8
          py-4
          rounded-full
          bg-white
          text-[var(--forest)]
          font-semibold
          hover:bg-[#cfe8a9]
          transition
        "
      >
        Participate Now
      </Link>



      <Link
        to="/gallery"
        className="
          px-8
          py-4
          rounded-full
          border
          border-white/50
          text-white
          font-semibold
          hover:bg-white/10
          transition
        "
      >
        Explore Memories
      </Link>


    </div>



  </div>


</section>


    </>

  );

};


export default Villay;