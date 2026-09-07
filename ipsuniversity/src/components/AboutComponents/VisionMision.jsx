import { Target, Eye, Lightbulb,ArrowRight,ListCheck, School,Dot } from "lucide-react";
import { Link } from "react-router-dom";
import ctm1900 from '../../images1/ctm1900.png'

const VisionMissionObjective = () => {

  const data = [
    {
      icon: <Eye size={32} />,
      title: "Our Vision",
      text:
        "To become a leading institution of higher learning by providing quality education, fostering innovation, encouraging research, and developing responsible professionals who contribute to society."
    },

    {
      icon: <Target size={32} />,
      title: "Our Mission",
      text:
        "To provide a transformative learning environment through excellence  in teaching , industry - oriented education , research opportunities and holistic development of students ."
    },

    {
      icon: <Lightbulb size={32} />,
      title: "Our Objectives",
      text:
        "To promote  academic excellence , encourage creativity and innovation , develop leadership  qualities and create skilled professionals ready to face global challenge"
    },

    
  ];

  const data2 = [
    {
      icon: <Dot size={32} />,
      
      text:
        "IPS University aims to provide opportunity to young talents for manifestation of their potential ."
    },

     {
      icon: <Dot size={32} />,
     
      text:
        " The University committed to dedicate itself to offer a congenial atmosphere for intellectual , physical and emotional development of every individuals student."
    },
     {
      icon: <Dot size={32} />,
      
      text:
        "The focus will be on transforming the individuals fully equipped which updated knowledge , skill and appropriate attitude ."
    },

     {
      icon: <Dot size={32} />,
      
      text:
        "At IPS fundamental doctoring asserts that all individuals without exception to their background , religion , caste , or up-bringing posses considerable potential."
    }
  
  
  
  
  ]


  return (
    <>
    <section className="relative h-[430px] overflow-hidden mt-30">

  <img
    src={ctm1900}
    alt="IPS University Campus"
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
      from-[#31572c]/90
      
      to-transparent
    "
  />


  <div
    className="
      relative
      z-10
      max-w-7xl
      mx-auto
      px-6
      lg:px-10
      h-full
      flex
      flex-col
      justify-center
    "
  >

    <span
      className="
        text-[#cfe8a9]
        uppercase
        tracking-[4px]
        text-sm
        font-semibold
      "
    >
      About IPS University
    </span>


    <h1
      className="
        text-5xl
        md:text-6xl
        font-bold
        text-white
        mt-4
      "
    >
      Vision, Mission & Objectives
    </h1>


    <p
      className="
        text-white/80
        max-w-xl
        mt-5
        leading-7
      "
    >
      Discover the vision, mission and objectives that guide IPS University
      towards academic excellence, innovation, research and holistic
      development of students.
    </p>

     <div className="flex items-center text-white gap-2 mt-8 text-sm">

  <Link
    to="/"
    className="text-[var(--white)] transition"
  >
    Home
  </Link>


  <ArrowRight size={16} />


  <Link
    to="/about"
    className="text-[var(--white)] transition"
  >
    About
  </Link>


  <ArrowRight size={16} />


  <span className="text-[#cde8a3] font-semibold">
    VisionMision
  </span>

</div>


  </div>

</section>

    <section className="py-24 bg-[#f7f9f3]">


      <div className="max-w-7xl mx-auto px-6 lg:px-10">


        {/* Heading */}
       




        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >

          {data.map((item,index)=>(


            <div
              key={index}
              className="
                group
                bg-white
                rounded-[30px]
                p-8
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                border
                border-[#ecf39e]
              "
            >


              {/* Icon */}

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#31572c]
                  text-[#ecf39e]
                  flex
                  items-center
                  justify-center
                  mb-6
                  group-hover:scale-110
                  transition
                "
              >
                {item.icon}
              </div>



              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#31572c]
                  mb-4
                "
              >
                {item.title}
              </h3>



              <p
                className="
                  text-gray-600
                  leading-7
                  text-sm
                "
              >
                {item.text}
              </p>



            </div>

            


          ))}


        </div>
        


      </div>


<div className="max-w-7xl w-[90%] mx-auto px-6 lg:px-10 flex flex-col items-start gap-5 justify-start py-5 mt-10
     
     
     
                 group
                bg-white
                rounded-[30px]
               
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                border
                border-[#ecf39e]
                mb-6
     
     
     
     
     ">


        {/* Heading */}
       


  <div className="flex items-center justify-center gap-4">
    <div className="  w-16
                  h-16
                  rounded-2xl
                  bg-[#31572c]
                  text-[#ecf39e]
                  flex
                  items-center
                  justify-center
                 
                  group-hover:scale-110
                  transition"><ListCheck size={32}/></div><h2 className="text-2xl font-bold text-[#31572c]">Core Values</h2>


  </div>

        {/* Cards */}

       

          {data2.map((item,index)=>(


            <div
              key={index}
              className=" flex items-center justify-start gap-2
              
              
              "
            >


              {/* Icon */}

           
             <div className="text-[var(--forest)]">
                {item.icon}
             </div>
              <p
                className="
                  text-gray-600
                  leading-7
                  text-sm
                "
              >
                {item.text}
              </p>

             



              



            </div>

            


          ))}


        </div>
    </section>
    
    
    
    
    <section>


      
     

        
        


    </section>
    
    
    </>

  );
};


export default VisionMissionObjective;