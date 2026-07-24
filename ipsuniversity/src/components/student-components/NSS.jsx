import {Link} from "react-router-dom"
import { ArrowRight } from "lucide-react";
  
 const impactImage =
    "https://i.pinimg.com/1200x/14/1f/6d/141f6de0f62e0313367df41ccdd21a59.jpg"; 
  // Hero
const heroImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80";

// About Section
const aboutImg =
  "https://i.pinimg.com/1200x/0a/da/94/0ada94ffadab45e59f80be0c066aa6b0.jpg";

// Serving Communities
const impactImg =
  "https://i.pinimg.com/1200x/14/1f/6d/141f6de0f62e0313367df41ccdd21a59.jpg";

// Featured Activities
const activityImage =
  "https://i.pinimg.com/1200x/d8/76/90/d87690aeea8119f92a2901238c026738.jpg";

const activityImage2 =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80";

// Impact Section

// NSS Motto
const mottoImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80";

// Event Highlights
const event1 =
  "https://i.pinimg.com/1200x/eb/c1/cf/ebc1cff2cc14ab4025fd07c70907a91f.jpg";

const event2 =
  "https://i.pinimg.com/1200x/3f/ec/65/3fec6535cc3d7667c9cdf23890f2fb69.jpg";

// Volunteer Memories
const gallery1 =
  "https://i.pinimg.com/736x/07/39/c9/0739c9de81bf1e42d6860105e00a2eca.jpg";

const gallery2 =
  "https://i.pinimg.com/1200x/81/ec/4a/81ec4a4447aa17214b0f6b089aa607d5.jpg";

const gallery3 =
  "https://i.pinimg.com/736x/bd/fe/f8/bdfef852d0574cfb24c9f1432468c77c.jpg";

const gallery4 =
  "https://i.pinimg.com/1200x/3d/51/ae/3d51ae90a7ae721a71e9fa3165d6e431.jpg";

// CTA
const ctaImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80";
  
  
  
  
  const volunteersImage1 =
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80";

const volunteersImage2 =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80";

const volunteersImage3 =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80";

const volunteersImage4 =
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80";
  
  // Change image

const AboutNSS = () => {
  return (
    <>

    <section className="relative h-[430px] overflow-hidden mt-30">
  <img
    src={heroImage}
    alt="National Service Scheme"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/65 to-transparent" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">

    <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
      Not Me But You
    </span>

    <h1
      className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
      style={{ fontFamily: "Fraunces, serif" }}
    >
      National Service
      <br />
      Scheme (NSS)
    </h1>

    <p className="text-white/85 max-w-2xl mt-5 leading-7">
      Empowering students to become responsible citizens through community
      service, leadership, environmental initiatives, and social welfare
      activities while fostering the spirit of selfless service.
    </p>

    <div className="flex items-center gap-2 text-white text-sm mt-8 flex-wrap">
      <Link to="/" className="hover:text-[#cfe8a9] transition">
        Home
      </Link>

      <ArrowRight size={16} />

      <Link
        to="/students-zone"
        className="hover:text-[#cfe8a9] transition"
      >
        Student Zone
      </Link>

      <ArrowRight size={16} />

      <span className="text-[#cfe8a9] font-semibold">
        National Service Scheme
      </span>
    </div>

  </div>
</section>


    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative">

            <img
              src={aboutImg}
              alt="NSS Volunteers"
              className="w-full h-[520px] object-cover rounded-[32px]"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-xl p-7 border border-gray-100 hidden md:block">

              <p className="uppercase tracking-[3px] text-xs font-semibold text-[#578B07]">
                NSS Motto
              </p>

              <h3
                className="text-2xl mt-2 font-bold text-[#31572c]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Not Me,
                <br />
                But You
              </h3>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
              About NSS
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4 leading-tight"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Inspiring Students
              <br />
              Through Service
            </h2>

            <p className="text-gray-600 leading-8 mt-8">
              The National Service Scheme (NSS) is a voluntary public service
              initiative that encourages students to actively participate in
              community development and nation-building. Through meaningful
              social engagement, students cultivate leadership, empathy,
              discipline, and a strong sense of civic responsibility.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              From environmental conservation and health awareness campaigns to
              rural development, cleanliness drives, blood donation camps, and
              educational outreach, NSS provides opportunities for students to
              learn beyond the classroom while making a positive impact on
              society.
            </p>

            {/* Highlights */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              {[
                "Community Service",
                "Leadership Development",
                "Social Awareness",
                "Nation Building",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-[#578B07]" />

                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>


    

{/* Featured Activity */}

<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Image */}

      <div className="relative">

        <img
          src={activityImage} // Plantation / Blood Donation
          alt="NSS Activity"
          className="w-full h-[580px] object-cover rounded-[32px]"
        />

        <img
          src={activityImage2} // Awareness Rally
          alt="Awareness Campaign"
          className="absolute -bottom-10 -right-10 w-60 h-72 object-cover rounded-[28px] border-[8px] border-white shadow-2xl hidden lg:block"
        />

      </div>

      {/* Right */}

      <div>

        <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
          Featured Activities
        </span>

        <h2
          className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4 leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Learning Beyond
          <br />
          The Classroom
        </h2>

        <p className="text-gray-600 leading-8 mt-8">
          NSS encourages students to engage with society through activities that
          develop leadership, empathy, teamwork, and social responsibility.
          Every initiative provides practical learning experiences while making
          a positive contribution to the community.
        </p>

        <div className="space-y-6 mt-10">

          {[
            {
              title: "Tree Plantation",
              desc: "Creating a greener environment through regular plantation drives."
            },
            {
              title: "Blood Donation Camps",
              desc: "Encouraging voluntary blood donation to support healthcare initiatives."
            },
            {
              title: "Community Awareness",
              desc: "Organizing rallies and campaigns on health, hygiene and social issues."
            },
          ].map((item, index) => (

            <div
              key={index}
              className="flex gap-5"
            >

              <div className="w-12 h-12 rounded-full bg-[#31572c] text-white flex items-center justify-center font-semibold">
                0{index + 1}
              </div>

              <div>

                <h4 className="text-xl font-semibold text-[#31572c]">
                  {item.title}
                </h4>

                <p className="text-gray-600 mt-2 leading-7">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>
</section>

{/* Impact In Numbers */}

<section className="py-24 bg-[#f7faf5] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center max-w-3xl mx-auto">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
        Our Contribution
      </span>

      <h2
        className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Impact Through Service
      </h2>

      <p className="text-gray-600 leading-8 mt-6">
        Every NSS initiative reflects our commitment towards creating a
        healthier, greener and more socially responsible community through
        active student participation.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-14 mt-20 items-center">

      {/* Left Stats */}

      <div className="grid grid-cols-2 gap-6">

        {[
          {
            number: "1500+",
            title: "Student Volunteers",
          },
          {
            number: "100+",
            title: "Community Activities",
          },
          {
            number: "50+",
            title: "Awareness Campaigns",
          },
          {
            number: "20+",
            title: "Special Camps",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[28px] p-8 shadow-sm border border-[#edf2e8] hover:-translate-y-2 transition duration-300"
          >

            <h3
              className="text-5xl font-bold text-[#31572c]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              {item.number}
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              {item.title}
            </p>

          </div>

        ))}

      </div>

      {/* Right Image */}

      <div>

        <img
          src={impactImage}
          alt="NSS Volunteers"
          className="rounded-[34px] w-full h-[500px] object-cover"
        />

      </div>

    </div>

  </div>
</section>

{/* NSS Motto */}

<section className="relative py-32 overflow-hidden">

  {/* Background */}

  <img
    src={mottoImage}
    alt="NSS Volunteers"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/75 to-[#31572c]/85" />


  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

    <div className="max-w-4xl mx-auto text-center">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#d8efb5]">
        NSS Philosophy
      </span>

      <h2
        className="text-5xl md:text-7xl text-white font-bold mt-6 leading-tight"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        "Not Me
        <br />
        But You"
      </h2>

      <p className="text-white/85 text-lg leading-8 mt-8 max-w-3xl mx-auto">
        The motto of the National Service Scheme reflects the spirit of
        selfless service. It inspires students to place the needs of the
        community before themselves while developing compassion, leadership,
        and a lifelong commitment to social responsibility.
      </p>

    </div>

    {/* Glass Card */}

    <div className="mt-20 max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 md:p-12">

      <div className="grid md:grid-cols-3 gap-10 text-center">

        <div>
          <h3
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Serve
          </h3>

          <p className="text-white/80 mt-3 leading-7">
            Contributing to society through meaningful community engagement.
          </p>
        </div>

        <div>
          <h3
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Learn
          </h3>

          <p className="text-white/80 mt-3 leading-7">
            Developing leadership, teamwork and life skills beyond classrooms.
          </p>
        </div>

        <div>
          <h3
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Inspire
          </h3>

          <p className="text-white/80 mt-3 leading-7">
            Encouraging positive change through responsibility and compassion.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* Event Highlights */}

<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
        Event Highlights
      </span>

      <h2
        className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Moments That
        <br />
        Made A Difference
      </h2>

      <p className="text-gray-600 mt-6 leading-8">
        Every NSS activity creates opportunities to learn, serve and inspire.
        These moments reflect our commitment towards building a responsible and
        compassionate society.
      </p>

    </div>

    {/* Row 1 */}

    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

      <img
        src={event1}
        alt=""
        className="w-full h-[500px] object-cover rounded-[30px]"
      />

      <div>

        <span className="text-[#578B07] uppercase tracking-[3px] text-sm font-semibold">
          Tree Plantation
        </span>

        <h3
          className="text-3xl font-bold text-[#31572c] mt-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Creating A Greener Tomorrow
        </h3>

        <p className="text-gray-600 mt-6 leading-8">
          Volunteers actively participate in plantation drives, promoting
          environmental awareness and sustainable practices while contributing
          towards a cleaner and greener future.
        </p>

      </div>

    </div>

    {/* Row 2 */}

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div className="order-2 lg:order-1">

        <span className="text-[#578B07] uppercase tracking-[3px] text-sm font-semibold">
          Community Service
        </span>

        <h3
          className="text-3xl font-bold text-[#31572c] mt-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Serving Beyond
          The Campus
        </h3>

        <p className="text-gray-600 mt-6 leading-8">
          Through awareness campaigns, cleanliness drives and outreach
          programmes, students work closely with communities while developing
          empathy, leadership and a strong sense of social responsibility.
        </p>

      </div>

      <img
        src={event2}
        alt=""
        className="order-1 lg:order-2 w-full h-[500px] object-cover rounded-[30px]"
      />

    </div>

  </div>
</section>

{/* Volunteer Memories */}

<section className="py-24 bg-[#f8faf6] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="uppercase tracking-[4px] text-sm font-semibold text-[#578B07]">
        Volunteer Memories
      </span>

      <h2
        className="text-4xl md:text-5xl font-bold text-[#31572c] mt-4"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Every Picture
        <br />
        Tells A Story
      </h2>

      <p className="text-gray-600 mt-6 leading-8">
        Behind every photograph is a moment of learning, teamwork and service.
        These experiences shape responsible citizens and create memories that
        last a lifetime.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <img
        src={gallery1}
        alt=""
        className="w-full h-[430px] object-cover rounded-[28px] hover:scale-105 transition duration-500"
      />

      <img
        src={gallery2}
        alt=""
        className="w-full h-[320px] mt-16 object-cover rounded-[28px] hover:scale-105 transition duration-500"
      />

      <img
        src={gallery3}
        alt=""
        className="w-full h-[430px] object-cover rounded-[28px] hover:scale-105 transition duration-500"
      />

      <img
        src={gallery4}
        alt=""
        className="w-full h-[320px] mt-16 object-cover rounded-[28px] hover:scale-105 transition duration-500"
      />

    </div>

  </div>
</section>

{/* Join NSS CTA */}

<section className="relative py-28 overflow-hidden">

  {/* Background Image */}
  <img
    src='https://i.pinimg.com/1200x/e2/e1/72/e2e1720f35329e035d11382bf3afa0c6.jpg'
    alt="Join NSS"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#31572c]/90 via-[#31572c]/75 to-[#31572c]/85" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    <span className="uppercase tracking-[4px] text-sm font-semibold text-[#cfe8a9]">
      Become A Volunteer
    </span>

    <h2
      className="text-4xl md:text-6xl font-bold text-white mt-5 leading-tight"
      style={{ fontFamily: "Fraunces, serif" }}
    >
      Be The Change
      <br />
      Your Community Needs
    </h2>

    <p className="text-white/85 leading-8 text-lg max-w-3xl mx-auto mt-8">
      Join the National Service Scheme and become part of a movement that
      empowers students to serve society, develop leadership skills, and make a
      meaningful impact through selfless service.
    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-12">

      <Link
        to="/contact"
        className="bg-white text-[#31572c] px-8 py-4 rounded-full font-semibold hover:bg-[#ecf39e] transition-all duration-300"
      >
        Join NSS
      </Link>

      <Link
        to="/gallery"
        className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#31572c] transition-all duration-300"
      >
        Explore Gallery
      </Link>

    </div>

  </div>

</section>

</>

  );
};

export default AboutNSS;