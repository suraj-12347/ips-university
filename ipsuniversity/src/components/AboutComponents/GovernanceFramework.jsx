import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ctm1900 from '../../images1/ctm1900.png'


const GovernanceFramework = () => {


  const frameworkItems = [
    "Act",
    "Statutes",
    "Organogram",
    "Ordinances",
    "Regulations",
    "Policies",
    "Guidelines",
    "SOPs",
    "Strategic Plan",
    "Annual Reports",
    "Delegation",
    "KRAs",
    "Orders, Notices & Circulars",
    "Audit Formats",
    "Regulatory & Funding Updates"
  ];



  const structure = [
    {
      title:"Board of Management",
      desc:"Provides strategic direction, policy framework and ensures sustainable institutional growth.",
      icon:"01"
    },

    {
      title:"Chancellor & Vice Chancellor",
      desc:"Provides academic vision, leadership and overall guidance for university development.",
      icon:"02"
    },

    {
      title:"Registrar & Administration",
      desc:"Ensures effective administration, implementation of policies and smooth operations.",
      icon:"03"
    },

    {
      title:"Deans & Academic Heads",
      desc:"Responsible for academic quality, research development and departmental excellence.",
      icon:"04"
    }
  ];



  return (

    <>

    {/* ================= HERO ================= */}

    <section className="relative h-[430px] overflow-hidden mt-30">


      <img
        src={ctm1900}
        alt="Governance Framework"
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
          via-[#31572c]/70
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
          Governance
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
          Governance Framework
        </h1>


        <p
          className="
            text-white/80
            max-w-2xl
            mt-5
            leading-7
          "
        >
          A comprehensive framework of acts, policies,
          regulations and procedures that guides the
          functioning and administration of IPS University.
        </p>

                  <div className="flex items-center text-white gap-2 mt-8 text-sm">

  <Link
    to="/"
    className="hover:text-[var(--grass)] transition"
  >
    Home
  </Link>


  <ArrowRight size={16} />


  <Link
    to="/about"
    className="hover:text-[var(--grass)] transition"
  >
    About
  </Link>


  <ArrowRight size={16} />


  <span className="text-[#cde8a3] font-semibold">
    Governance-Framwork
  </span>

</div>


      </div>


    </section>





    {/* ================= INTRO ================= */}


 <section className="py-24 bg-[#f7f9f3]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    <div
      className="
        relative
        bg-white
        rounded-[35px]
        shadow-lg
        overflow-hidden
        p-8
        md:p-14
      "
    >


      {/* Decorative Shape */}

      <div
        className="
          absolute
          -top-20
          -right-20
          w-64
          h-64
          rounded-full
          bg-[#ecf39e]/60
          blur-3xl
        "
      />


      <div
        className="
          relative
          z-10
          grid
          lg:grid-cols-[1.5fr_1fr]
          gap-10
          items-center
        "
      >


        {/* Content */}

        <div>


          <span
            className="
              text-[#578B07]
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
            "
          >
            Governance Framework
          </span>



          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-[#31572c]
              mt-4
              leading-tight
            "
          >
            Ensuring Transparency,
            Accountability & Excellence
          </h2>



          <div
            className="
              w-20
              h-1
              bg-[#8BAE45]
              rounded-full
              my-6
            "
          />



          <p
            className="
              text-gray-600
              leading-8
              text-lg
            "
          >
            This section provides access to the legal and
            administrative framework governing IPS University's
            operations. It includes institutional policies,
            regulations, guidelines and procedures that define
            our commitment towards transparent and effective
            governance.
          </p>


        </div>





        {/* Right Highlights */}

        <div
          className="
            bg-[#31572c]
            rounded-[30px]
            p-8
            text-white
          "
        >


          <h3
            className="
              text-2xl
              font-bold
              mb-6
            "
          >
            Governance Essentials
          </h3>



          <div className="space-y-5">


            {[
              "Acts & Statutes",
              "Policies & Regulations",
              "Institutional Guidelines",
              "Standard Operating Procedures"
            ].map((item,index)=>(


              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                "
              >

                <div
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-[#ecf39e]
                    text-[#31572c]
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-sm
                  "
                >
                  {index+1}
                </div>


                <p className="text-white/90">
                  {item}
                </p>


              </div>


            ))}


          </div>


        </div>


      </div>


    </div>


  </div>


</section>





    {/* ================= GOVERNANCE STRUCTURE ================= */}


    <section className="py-24 bg-[#f7f9f3]">

    <div className="max-w-6xl mx-auto px-6 lg:px-10">


    <div className="text-center mb-16">


      <span
        className="
          text-[#578B07]
          uppercase
          tracking-[3px]
          text-sm
          font-semibold
        "
      >
        Governance
      </span>


      <h2
        className="
          text-4xl
          font-bold
          text-[#31572c]
          mt-3
        "
      >
        University Governance Structure
      </h2>


    </div>




    <div className="relative">


      <div
        className="
          hidden
          md:block
          absolute
          left-1/2
          top-0
          bottom-0
          w-[2px]
          bg-[#cfe8a9]
        "
      />



      <div className="space-y-10">


      {structure.map((item,index)=>(


      <div
        key={index}
        className={`
          relative
          flex
          flex-col
          md:flex-row
          items-center
          gap-8
          ${index%2!==0 ? "md:flex-row-reverse":""}
        `}
      >


      <div
        className="
          md:w-1/2
          bg-white
          rounded-[28px]
          p-8
          shadow-md
          hover:shadow-xl
          transition
        "
      >

        <span
          className="
            text-[#8BAE45]
            font-bold
            text-3xl
          "
        >
          {item.icon}
        </span>


        <h3 className="
          text-2xl
          font-bold
          text-[#31572c]
          mt-4
        ">
          {item.title}
        </h3>


        <p className="
          text-gray-600
          mt-3
          leading-7
        ">
          {item.desc}
        </p>


      </div>



      <div
        className="
          hidden
          md:block
          absolute
          left-1/2
          -translate-x-1/2
          w-5
          h-5
          rounded-full
          bg-[#8BAE45]
          border-4
          border-white
        "
      />



      </div>


      ))}


      </div>


    </div>


    </div>

    </section>





    {/* ================= DOCUMENT FRAMEWORK ================= */}


    <section className="py-24 bg-white">


    <div className="max-w-7xl mx-auto px-6 lg:px-10">


    <div className="text-center mb-14">

      <span className="
        text-[#578B07]
        uppercase
        tracking-[3px]
        text-sm
        font-semibold
      ">
        Legal Repository
      </span>


      <h2 className="
        text-4xl
        font-bold
        text-[#31572c]
        mt-3
      ">
        Institutional Documents
      </h2>

    </div>



    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      "
    >

    {frameworkItems.map((item,index)=>(


      <div
        key={index}
        className="
          bg-[#f7f9f3]
          rounded-2xl
          p-6
          text-center
          font-semibold
          text-[#31572c]
          hover:bg-[#31572c]
          hover:text-white
          transition
          duration-300
          shadow-sm
        "
      >

        {item}

      </div>


    ))}


    </div>


    </div>


    </section>



    </>

  );

};


export default GovernanceFramework;