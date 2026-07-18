import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const GovtFundedProjects = () => {

return (

<>

{/* ================= HERO SECTION ================= */}

<section
className="
relative
overflow-hidden
flex
items-center
mt-30
py-12
min-h-[520px]
"
style={{
backgroundImage:
`url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80)`,
backgroundSize:"cover",
backgroundPosition:"center",
}}
>


{/* Overlay */}

<div
className="
absolute
inset-0
bg-gradient-to-r
from-[#31572c]/95
via-[#31572c]/85
to-transparent
"
/>




{/* Decorative Blur */}

<div
className="
absolute
right-20
top-20
w-72
h-72
rounded-full
bg-[#ECF39E]/20
blur-3xl
"
/>





{/* Content */}

<div
className="
relative
w-full
max-w-7xl
mx-auto
px-6
lg:px-10
"
>


<div
className="
max-w-3xl
text-white
"
>


{/* Label */}

<div
className="
flex
items-center
gap-3
mb-6
"
>

<div
className="
w-12
h-[2px]
bg-[#578B07]
"
/>


<span
className="
uppercase
tracking-[4px]
text-sm
font-semibold
"
>
Research & Development
</span>


</div>







{/* Heading */}

<h1
className="
text-4xl
md:text-5xl
lg:text-6xl
font-bold
leading-[1.15]
"
>

Government Funded
<br/>
Research Projects

</h1>







{/* Description */}

<p
className="
mt-7
text-base
md:text-lg
leading-8
text-gray-200
max-w-2xl
"
>

Supporting innovative research through
government-sponsored projects, grants and
collaborations aimed at solving real-world
challenges.

</p>







{/* Breadcrumb */}

<div
className="
flex
items-center
gap-2
mt-12
text-sm
text-white/80
"
>


<Link
to="/"
className="
hover:text-[#578B07]
transition
"
>
Home
</Link>



<ArrowRight size={15}/>




<Link
to="/innovation"
className="
hover:text-[#578B07]
transition
"
>
Research & Development
</Link>




<ArrowRight size={15}/>




<span
className="
text-[#ECF39E]
font-semibold
"
>
Government Funded Projects
</span>



</div>





</div>



</div>



</section>

{/* ================= GOVERNMENT FUNDING OVERVIEW SECTION ================= */}

<section className="py-24 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    <div
      className="
        grid
        lg:grid-cols-2
        gap-14
        items-center
      "
    >





      {/* Left Content */}

      <div>


        <span
          className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[#578B07]
          "
        >
          Research Funding
        </span>





        <h2
          className="
            text-4xl
            lg:text-5xl
            font-bold
            text-[#31572c]
            mt-5
            leading-tight
          "
        >

          Empowering Research
          <br/>
          Through Government Grants

        </h2>





        <p
          className="
            mt-6
            text-gray-600
            leading-8
          "
        >
          IPS University promotes research excellence by
          participating in government-funded initiatives
          supported by various national agencies and
          funding organizations.
        </p>





        <p
          className="
            mt-5
            text-gray-600
            leading-8
          "
        >
          These sponsored projects provide financial support
          for innovative research, infrastructure development,
          student involvement and technology advancement.
        </p>







        {/* Highlight Box */}

        <div
          className="
            mt-8
            bg-[#f8fbf6]
            rounded-3xl
            p-6
            flex
            gap-5
            items-center
          "
        >


          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#31572c]
              flex
              items-center
              justify-center
              text-3xl
            "
          >
            🏛️
          </div>




          <div>


            <h3
              className="
                text-xl
                font-bold
                text-[#31572c]
              "
            >
              Government Supported Research
            </h3>


            <p
              className="
                text-gray-600
                mt-1
              "
            >
              Building solutions through funded innovation.
            </p>


          </div>



        </div>




      </div>









      {/* Right Dashboard */}

      <div
        className="
          bg-[#31572c]
          rounded-[40px]
          p-10
          relative
          overflow-hidden
        "
      >



        {/* Background Circle */}

        <div
          className="
            absolute
            -right-20
            -top-20
            w-72
            h-72
            rounded-full
            bg-[#578B07]
            opacity-40
            blur-3xl
          "
        />





        <h3
          className="
            relative
            text-3xl
            font-bold
            text-white
          "
        >
          Research Funding Impact
        </h3>



        <p
          className="
            relative
            mt-3
            text-gray-200
          "
        >
          Growth through sponsored research projects
          and innovation programs.
        </p>






        {/* Stats */}

        <div
          className="
            relative
            grid
            grid-cols-2
            gap-5
            mt-10
          "
        >



          {[
            {
              number:"50+",
              title:"Funded Projects"
            },

            {
              number:"₹5Cr+",
              title:"Research Grants"
            },

            {
              number:"25+",
              title:"Faculty Researchers"
            },

            {
              number:"15+",
              title:"Funding Agencies"
            }

          ].map((item,index)=>(


            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-3xl
                p-6
              "
            >


              <h4
                className="
                  text-4xl
                  font-bold
                  text-[#ECF39E]
                "
              >
                {item.number}
              </h4>



              <p
                className="
                  mt-2
                  text-gray-200
                  text-sm
                "
              >
                {item.title}
              </p>



            </div>


          ))}




        </div>





      </div>





    </div>



  </div>


</section>

{/* ================= FUNDING AGENCIES SECTION ================= */}

<section className="py-24 bg-[#f8fbf6]">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div
      className="
        text-center
        max-w-3xl
        mx-auto
      "
    >



      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Funding Partners
      </span>





      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
          mt-5
        "
      >

        Supported By
        <br/>
        National Research Agencies

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Government agencies provide research grants and
        support innovation-driven projects across science,
        technology and interdisciplinary domains.
      </p>



    </div>








    {/* Agency Cards */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-7
        mt-16
      "
    >



      {[
        {
          short:"DST",
          title:"Department of Science & Technology",
          desc:"Supporting scientific research, innovation and technology development."
        },


        {
          short:"AICTE",
          title:"All India Council for Technical Education",
          desc:"Promoting research, innovation and technical education initiatives."
        },


        {
          short:"UGC",
          title:"University Grants Commission",
          desc:"Supporting higher education research and academic development."
        },


        {
          short:"SERB",
          title:"Science & Engineering Research Board",
          desc:"Funding advanced research projects in science and engineering."
        },


        {
          short:"DBT",
          title:"Department of Biotechnology",
          desc:"Supporting biotechnology and life science research."
        },


        {
          short:"ICMR",
          title:"Indian Council of Medical Research",
          desc:"Funding healthcare and biomedical research initiatives."
        },


        {
          short:"DRDO",
          title:"Defence Research & Development Organisation",
          desc:"Supporting defence technology and innovation research."
        },


        {
          short:"MoE",
          title:"Ministry of Education",
          desc:"Supporting educational innovation and research programs."
        },

      ].map((item,index)=>(



        <div
          key={index}
          className="
            group
            bg-white
            rounded-[30px]
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-3
            transition-all
            duration-500
          "
        >



          {/* Agency Logo Style */}

          <div
            className="
              w-20
              h-20
              rounded-3xl
              bg-[#31572c]
              text-white
              flex
              items-center
              justify-center
              text-2xl
              font-bold
              group-hover:bg-[#578B07]
              transition
            "
          >
            {item.short}
          </div>






          <h3
            className="
              mt-6
              text-xl
              font-bold
              text-[#31572c]
              leading-snug
            "
          >
            {item.title}
          </h3>





          <p
            className="
              mt-4
              text-gray-600
              text-sm
              leading-6
            "
          >
            {item.desc}
          </p>




        </div>



      ))}




    </div>




  </div>


</section>

{/* ================= FUNDED PROJECT CATEGORIES SECTION ================= */}

<section className="py-24 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div
      className="
        text-center
        max-w-3xl
        mx-auto
      "
    >



      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Research Domains
      </span>





      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
          mt-5
        "
      >

        Areas Of
        <br/>
        Government Funded Research

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
          max-w-2xl
          mx-auto
        "
      >
        Funded projects focus on emerging technologies,
        societal challenges and innovative solutions
        across multiple research disciplines.
      </p>



    </div>









    {/* Category Cards */}

    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-16
      "
    >




      {[
        {
          icon:"🤖",
          title:"Artificial Intelligence & ML",
          desc:"Research projects focused on AI, machine learning, automation and intelligent systems.",
          image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"⚙️",
          title:"Engineering & Technology",
          desc:"Innovations in mechanical, electrical and advanced engineering solutions.",
          image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"🌱",
          title:"Sustainable Development",
          desc:"Research initiatives focused on renewable energy and environmental solutions.",
          image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"🏥",
          title:"Healthcare & Biotechnology",
          desc:"Government supported research in healthcare, medical technology and life sciences.",
          image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"💻",
          title:"Digital Technologies",
          desc:"Projects related to software systems, cybersecurity and digital transformation.",
          image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"🔬",
          title:"Scientific Research",
          desc:"Interdisciplinary research projects supported through national funding programs.",
          image:
          "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=700&q=80"
        },


      ].map((item,index)=>(



        <div
          key={index}
          className="
            group
            relative
            h-[400px]
            overflow-hidden
            rounded-[35px]
            shadow-lg
          "
        >



          {/* Image */}

          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition
              duration-700
            "
          />





          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#31572c]
              via-[#31572c]/50
              to-transparent
            "
          />







          {/* Content */}

          <div
            className="
              absolute
              bottom-0
              p-8
              text-white
            "
          >



            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-white/20
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-3xl
                mb-5
              "
            >
              {item.icon}
            </div>





            <h3
              className="
                text-2xl
                font-bold
              "
            >
              {item.title}
            </h3>





            <p
              className="
                mt-3
                text-sm
                text-gray-200
                leading-6
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

{/* ================= MAJOR FUNDED PROJECTS SECTION ================= */}

<section className="py-24 bg-[#f8fbf6]">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Sponsored Research
      </span>




      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
          mt-5
        "
      >

        Major Government
        <br/>
        Funded Projects

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
          max-w-2xl
          mx-auto
        "
      >
        Research projects supported by government agencies
        that contribute towards innovation, technology
        development and societal impact.
      </p>


    </div>








    {/* Project Cards */}

    <div
      className="
        grid
        lg:grid-cols-2
        gap-8
        mt-16
      "
    >




      {[
        {
          title:"AI Based Smart Healthcare Monitoring System",
          agency:"DST Sponsored Project",
          investigator:"Dr. Rajesh Sharma",
          department:"Computer Science & Engineering",
          duration:"2024 - 2026",
          amount:"₹25 Lakhs",
          status:"Ongoing"
        },


        {
          title:"Development of IoT Enabled Agricultural Solution",
          agency:"SERB Funded Project",
          investigator:"Dr. Priya Verma",
          department:"Electronics Engineering",
          duration:"2023 - 2025",
          amount:"₹18 Lakhs",
          status:"Completed"
        },


        {
          title:"Renewable Energy Optimization Framework",
          agency:"Ministry Supported Research",
          investigator:"Dr. Amit Singh",
          department:"Mechanical Engineering",
          duration:"2024 - 2027",
          amount:"₹30 Lakhs",
          status:"Ongoing"
        },


        {
          title:"Smart Digital Learning Platform",
          agency:"AICTE Research Grant",
          investigator:"Research Team",
          department:"Information Technology",
          duration:"2023 - 2025",
          amount:"₹15 Lakhs",
          status:"Completed"
        },

      ].map((project,index)=>(



        <div
          key={index}
          className="
            bg-white
            rounded-[35px]
            p-8
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-500
          "
        >





          {/* Top */}

          <div
            className="
              flex
              justify-between
              gap-4
              items-start
            "
          >


            <h3
              className="
                text-2xl
                font-bold
                text-[#31572c]
                leading-snug
              "
            >
              {project.title}
            </h3>



            <span
              className="
                shrink-0
                px-4
                py-2
                rounded-full
                bg-[#ECF39E]
                text-[#31572c]
                text-xs
                font-semibold
              "
            >
              {project.status}
            </span>



          </div>







          {/* Details */}

          <div
            className="
              mt-8
              space-y-4
            "
          >



            <div
              className="
                flex
                gap-3
              "
            >

              <span>
                🏛️
              </span>

              <p className="text-gray-600">
                <b className="text-[#31572c]">
                  Agency:
                </b>
                {" "}
                {project.agency}
              </p>

            </div>





            <div className="flex gap-3">

              <span>
                👨‍🔬
              </span>

              <p className="text-gray-600">
                <b className="text-[#31572c]">
                  Principal Investigator:
                </b>
                {" "}
                {project.investigator}
              </p>

            </div>





            <div className="flex gap-3">

              <span>
                🎓
              </span>

              <p className="text-gray-600">
                <b className="text-[#31572c]">
                  Department:
                </b>
                {" "}
                {project.department}
              </p>

            </div>




            <div className="flex gap-3">

              <span>
                📅
              </span>

              <p className="text-gray-600">
                <b className="text-[#31572c]">
                  Duration:
                </b>
                {" "}
                {project.duration}
              </p>

            </div>




          </div>








          {/* Bottom Grant */}

          <div
            className="
              mt-8
              pt-6
              border-t
              border-gray-100
              flex
              justify-between
              items-center
            "
          >


            <div>

              <p
                className="
                  text-sm
                  text-gray-500
                "
              >
                Grant Amount
              </p>


              <h4
                className="
                  text-2xl
                  font-bold
                  text-[#31572c]
                "
              >
                {project.amount}
              </h4>


            </div>




            <button
              className="
                px-6
                py-3
                rounded-full
                bg-[#31572c]
                text-white
                text-sm
                font-semibold
                hover:bg-[#578B07]
                transition
              "
            >
              View Details
            </button>



          </div>




        </div>



      ))}



    </div>




  </div>


</section>

{/* ================= RESEARCH IMPACT DASHBOARD SECTION ================= */}

<section className="py-24 bg-[#31572c] relative overflow-hidden">


  {/* Background Shapes */}

  <div
    className="
      absolute
      -top-24
      -right-24
      w-96
      h-96
      rounded-full
      bg-[#578B07]/40
      blur-3xl
    "
  />


  <div
    className="
      absolute
      -bottom-20
      -left-20
      w-80
      h-80
      rounded-full
      bg-[#ECF39E]/20
      blur-3xl
    "
  />





  <div
    className="
      relative
      max-w-7xl
      mx-auto
      px-6
      lg:px-10
    "
  >





    {/* Heading */}

    <div
      className="
        text-center
        max-w-3xl
        mx-auto
        text-white
      "
    >


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#ECF39E]
        "
      >
        Research Excellence
      </span>





      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          mt-5
        "
      >

        Impact Of
        <br/>
        Government Funded Research

      </h2>





      <p
        className="
          mt-6
          text-gray-200
          leading-8
        "
      >
        Government supported research projects create
        opportunities for innovation, publications,
        technology development and academic growth.
      </p>



    </div>









    {/* Statistics Cards */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        mt-16
      "
    >



      {[
        {
          icon:"💰",
          number:"₹10Cr+",
          title:"Research Grants"
        },


        {
          icon:"📂",
          number:"100+",
          title:"Funded Projects"
        },


        {
          icon:"👨‍🔬",
          number:"75+",
          title:"Researchers"
        },


        {
          icon:"📚",
          number:"250+",
          title:"Research Publications"
        },


      ].map((item,index)=>(



        <div
          key={index}
          className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-[30px]
            p-8
            text-center
            hover:bg-white/20
            transition
            duration-500
          "
        >



          <div
            className="
              w-16
              h-16
              mx-auto
              rounded-2xl
              bg-[#ECF39E]
              flex
              items-center
              justify-center
              text-3xl
            "
          >
            {item.icon}
          </div>





          <h3
            className="
              mt-6
              text-5xl
              font-bold
              text-white
            "
          >
            {item.number}
          </h3>





          <p
            className="
              mt-3
              text-gray-200
              font-medium
            "
          >
            {item.title}
          </p>




        </div>



      ))}



    </div>









    {/* Bottom Message */}

    <div
      className="
        mt-16
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-[35px]
        p-10
        text-center
        text-white
      "
    >



      <h3
        className="
          text-3xl
          font-bold
        "
      >
        Building A Strong Research Ecosystem
      </h3>




      <p
        className="
          mt-4
          max-w-3xl
          mx-auto
          text-gray-200
          leading-7
        "
      >
        Through government grants and sponsored research,
        IPS University continues to encourage innovation,
        collaboration and knowledge creation for society.
      </p>



    </div>




  </div>


</section>

{/* ================= FUNDING PROCESS TIMELINE SECTION ================= */}

<section className="py-24 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Project Workflow
      </span>





      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
          mt-5
        "
      >

        Research Proposal
        <br/>
        Approval Process

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        A structured process ensures effective planning,
        evaluation and execution of government funded
        research projects.
      </p>



    </div>









    {/* Timeline */}

    <div
      className="
        relative
        mt-20
      "
    >




      {/* Desktop Line */}

      <div
        className="
          hidden
          lg:block
          absolute
          top-12
          left-0
          w-full
          h-[3px]
          bg-[#ECF39E]
        "
      />







      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-6
          gap-8
        "
      >





        {[
          {
            step:"01",
            title:"Idea Generation",
            desc:"Identifying innovative research problems and possible solutions."
          },


          {
            step:"02",
            title:"Proposal Preparation",
            desc:"Developing research proposal with objectives and methodology."
          },


          {
            step:"03",
            title:"Expert Review",
            desc:"Evaluation by funding agency experts and committees."
          },


          {
            step:"04",
            title:"Grant Approval",
            desc:"Approval of project funding and official sanction."
          },


          {
            step:"05",
            title:"Project Execution",
            desc:"Implementation of research activities and milestones."
          },


          {
            step:"06",
            title:"Outcome Reporting",
            desc:"Submission of reports, outcomes and future scope."
          },


        ].map((item,index)=>(



          <div
            key={index}
            className="
              relative
              text-center
            "
          >





            {/* Circle */}

            <div
              className="
                relative
                z-10
                mx-auto
                w-24
                h-24
                rounded-full
                bg-[#31572c]
                border-8
                border-[#ECF39E]
                flex
                items-center
                justify-center
                text-white
                text-2xl
                font-bold
              "
            >
              {item.step}
            </div>







            <h3
              className="
                mt-7
                text-xl
                font-bold
                text-[#31572c]
              "
            >
              {item.title}
            </h3>





            <p
              className="
                mt-3
                text-sm
                text-gray-600
                leading-6
              "
            >
              {item.desc}
            </p>



          </div>



        ))}





      </div>




    </div>




  </div>


</section>

{/* ================= RESEARCH FACILITIES SECTION ================= */}

<section className="py-24 bg-[#f8fbf6]">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div
      className="
        text-center
        max-w-3xl
        mx-auto
      "
    >


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Research Infrastructure
      </span>





      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
          mt-5
        "
      >

        Supporting Research
        <br/>
        Through Advanced Facilities

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Modern laboratories, innovation spaces and research
        facilities provide the foundation for successful
        government funded projects.
      </p>



    </div>









    {/* Facility Cards */}

    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-7
        mt-16
      "
    >



      {[
        {
          icon:"🔬",
          title:"Advanced Research Labs",
          desc:"Specialized laboratories supporting experimental research and innovation.",
          image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"🤖",
          title:"AI & Computing Center",
          desc:"High-performance computing facilities for AI, ML and digital research.",
          image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"⚙️",
          title:"Innovation & Design Labs",
          desc:"Spaces for prototyping, testing and technology development.",
          image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=80"
        },


        {
          icon:"🌐",
          title:"Collaboration Spaces",
          desc:"Research environment supporting interdisciplinary teamwork.",
          image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80"
        },


      ].map((item,index)=>(



        <div
          key={index}
          className="
            group
            bg-white
            rounded-[35px]
            overflow-hidden
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-500
          "
        >





          {/* Image */}

          <div
            className="
              h-52
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
                group-hover:scale-110
                transition
                duration-700
              "
            />

          </div>








          {/* Content */}

          <div
            className="
              p-7
            "
          >



            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#ECF39E]
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              {item.icon}
            </div>





            <h3
              className="
                mt-5
                text-xl
                font-bold
                text-[#31572c]
              "
            >
              {item.title}
            </h3>





            <p
              className="
                mt-3
                text-gray-600
                leading-6
                text-sm
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

{/* ================= RESEARCH OUTCOMES SECTION ================= */}

<section className="py-24 bg-white">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Project Outcomes
      </span>





      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
          mt-5
        "
      >

        Transforming Research
        <br/>
        Into Real Impact

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
          max-w-2xl
          mx-auto
        "
      >
        Government funded projects contribute towards
        knowledge creation, innovation, publications and
        technology solutions for society.
      </p>



    </div>









    {/* Impact Cards */}

    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-7
        mt-16
      "
    >



      {[
        {
          icon:"📄",
          number:"500+",
          title:"Research Publications",
          desc:"Peer-reviewed papers published through funded research."
        },


        {
          icon:"💡",
          number:"75+",
          title:"Innovations",
          desc:"New technologies and solutions developed."
        },


        {
          icon:"📝",
          number:"40+",
          title:"Patents Filed",
          desc:"Intellectual property generated from research."
        },


        {
          icon:"🌍",
          number:"100+",
          title:"Collaborations",
          desc:"Research partnerships with institutions and industries."
        },

      ].map((item,index)=>(



        <div
          key={index}
          className="
            group
            bg-[#f8fbf6]
            rounded-[35px]
            p-8
            text-center
            hover:bg-[#31572c]
            transition-all
            duration-500
          "
        >




          <div
            className="
              w-16
              h-16
              mx-auto
              rounded-2xl
              bg-[#ECF39E]
              flex
              items-center
              justify-center
              text-3xl
              group-hover:scale-110
              transition
            "
          >
            {item.icon}
          </div>






          <h3
            className="
              mt-6
              text-5xl
              font-bold
              text-[#31572c]
              group-hover:text-white
              transition
            "
          >
            {item.number}
          </h3>






          <h4
            className="
              mt-3
              text-xl
              font-bold
              text-[#31572c]
              group-hover:text-[#ECF39E]
              transition
            "
          >
            {item.title}
          </h4>






          <p
            className="
              mt-4
              text-gray-600
              text-sm
              leading-6
              group-hover:text-gray-200
              transition
            "
          >
            {item.desc}
          </p>




        </div>



      ))}




    </div>









    {/* Bottom Highlight */}

    <div
      className="
        mt-16
        rounded-[35px]
        bg-[#31572c]
        p-10
        text-center
        text-white
      "
    >



      <h3
        className="
          text-3xl
          font-bold
        "
      >
        From Research Ideas To Meaningful Solutions
      </h3>




      <p
        className="
          mt-4
          max-w-3xl
          mx-auto
          text-gray-200
          leading-7
        "
      >
        Every funded project contributes towards academic
        excellence, technological advancement and
        solving real-world challenges.
      </p>



    </div>




  </div>


</section>
{/* ================= PROJECT REPOSITORY SECTION ================= */}

<section className="py-24 bg-[#f8fbf6]">


  <div className="max-w-7xl mx-auto px-6 lg:px-10">



    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">


      <span
        className="
          uppercase
          tracking-[4px]
          text-sm
          font-semibold
          text-[#578B07]
        "
      >
        Project Repository
      </span>





      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          text-[#31572c]
          mt-5
        "
      >

        Government Funded
        <br/>
        Research Database

      </h2>





      <p
        className="
          mt-6
          text-gray-600
          leading-8
        "
      >
        Explore funded research initiatives, sponsored
        projects and innovation programs undertaken by
        university researchers.
      </p>



    </div>









    {/* Table Card */}

    <div
      className="
        mt-16
        bg-white
        rounded-[35px]
        shadow-sm
        overflow-hidden
      "
    >



      {/* Header */}

      <div
        className="
          hidden
          md:grid
          grid-cols-5
          bg-[#31572c]
          text-white
          px-8
          py-5
          font-semibold
        "
      >

        <span>
          Project
        </span>

        <span>
          Agency
        </span>

        <span>
          Department
        </span>

        <span>
          Year
        </span>

        <span>
          Status
        </span>

      </div>







      {[
        {
          project:"Smart AI Based Healthcare System",
          agency:"DST",
          dept:"CSE",
          year:"2025",
          status:"Ongoing"
        },


        {
          project:"IoT Based Agriculture Monitoring",
          agency:"AICTE",
          dept:"ECE",
          year:"2024",
          status:"Completed"
        },


        {
          project:"Renewable Energy Optimization",
          agency:"SERB",
          dept:"Mechanical",
          year:"2024",
          status:"Ongoing"
        },


        {
          project:"Digital Learning Innovation Platform",
          agency:"UGC",
          dept:"IT",
          year:"2023",
          status:"Completed"
        },


        {
          project:"Environmental Monitoring System",
          agency:"MoE",
          dept:"Civil Engineering",
          year:"2023",
          status:"Completed"
        },


      ].map((item,index)=>(



        <div
          key={index}
          className="
            grid
            md:grid-cols-5
            gap-4
            px-8
            py-6
            border-b
            border-gray-100
            hover:bg-[#f8fbf6]
            transition
          "
        >



          <div>

            <p
              className="
                font-semibold
                text-[#31572c]
              "
            >
              {item.project}
            </p>

          </div>





          <div
            className="
              text-gray-600
            "
          >
            {item.agency}
          </div>





          <div
            className="
              text-gray-600
            "
          >
            {item.dept}
          </div>





          <div
            className="
              text-gray-600
            "
          >
            {item.year}
          </div>






          <div>

            <span
              className={`
                inline-flex
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold

                ${
                  item.status==="Ongoing"
                  ?
                  "bg-[#ECF39E] text-[#31572c]"
                  :
                  "bg-green-100 text-green-700"
                }
              `}
            >
              {item.status}
            </span>


          </div>





        </div>



      ))}



    </div>





  </div>


</section>
{/* ================= RESEARCH COLLABORATION CTA SECTION ================= */}

<section className="py-24 bg-[#31572c] relative overflow-hidden">


  {/* Background Shapes */}

  <div
    className="
      absolute
      -top-24
      -right-24
      w-96
      h-96
      rounded-full
      bg-[#578B07]/40
      blur-3xl
    "
  />



  <div
    className="
      absolute
      -bottom-24
      -left-24
      w-80
      h-80
      rounded-full
      bg-[#ECF39E]/20
      blur-3xl
    "
  />





  <div
    className="
      relative
      max-w-7xl
      mx-auto
      px-6
      lg:px-10
    "
  >





    <div
      className="
        grid
        lg:grid-cols-2
        gap-12
        items-center
      "
    >





      {/* Left Content */}

      <div
        className="
          text-white
        "
      >



        <span
          className="
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            text-[#ECF39E]
          "
        >
          Research Opportunities
        </span>





        <h2
          className="
            text-4xl
            lg:text-5xl
            font-bold
            mt-5
            leading-tight
          "
        >

          Turn Your Research
          <br/>
          Ideas Into Reality

        </h2>





        <p
          className="
            mt-6
            text-gray-200
            leading-8
            max-w-xl
          "
        >
          IPS University encourages faculty members,
          researchers and students to participate in
          government funded research programs and
          develop innovative solutions.
        </p>








        <div
          className="
            flex
            flex-wrap
            gap-5
            mt-10
          "
        >



          <button
            className="
              px-8
              py-4
              rounded-full
              bg-white
              text-[#31572c]
              font-semibold
              hover:bg-[#ECF39E]
              transition
            "
          >
            Submit Proposal
          </button>





          <button
            className="
              px-8
              py-4
              rounded-full
              border
              border-white/40
              text-white
              font-semibold
              hover:bg-white
              hover:text-[#31572c]
              transition
            "
          >
            Contact R&D Cell
          </button>




        </div>



      </div>









      {/* Right Card */}

      <div
        className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-[40px]
          p-10
          text-white
        "
      >




        <h3
          className="
            text-3xl
            font-bold
          "
        >
          Research Support Includes
        </h3>





        <div
          className="
            mt-8
            space-y-5
          "
        >



          {[
            "Funding Opportunity Guidance",
            "Proposal Development Support",
            "Project Documentation Assistance",
            "Research Collaboration Support",
            "Grant Management Assistance"

          ].map((item,index)=>(



            <div
              key={index}
              className="
                flex
                items-center
                gap-4
                bg-white/10
                rounded-2xl
                px-5
                py-4
              "
            >



              <div
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-[#ECF39E]
                  text-[#31572c]
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >
                ✓
              </div>




              <p
                className="
                  text-gray-100
                "
              >
                {item}
              </p>




            </div>



          ))}



        </div>



      </div>





    </div>



  </div>


</section>


</>

);

};


export default GovtFundedProjects;