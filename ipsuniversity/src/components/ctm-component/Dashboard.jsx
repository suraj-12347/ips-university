import React from "react";
import ctmprincipal from "../../images1/ctminnerbuilding.png";
import ctmdashboard from "../../images1/ctmmain.png";

const CTMDashboard = () => {
  return (
   <div className="min-h-screen px-3 sm:px-4 md:px-4 mb-20">
  <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">

    {/* LEFT COLUMN */}
    <div className="col-span-12 lg:col-span-8 flex flex-col gap-4 md:gap-6">

      {/* Large Feature Card */}
      <div className="bg-white overflow-hidden rounded-xl">
        <img
          src={ctmdashboard}
          alt=""
          className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
        />

        <div className="p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4 text-[var(--forest)]">
            IPS College of Technology & Management
          </h2>

          <p className="text-gray-700 leading-7 md:leading-8 text-sm md:text-lg text-justify">
            IPS College of Technology and Management was established
            in the year 2007 with the vision of becoming the most
            preferred engineering college in Central India...
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        {/* Image Card */}
        <div className="bg-white overflow-hidden rounded-xl">
          <img
            src={ctmprincipal}
            alt=""
            className="w-full h-[250px] md:h-full object-cover"
          />
        </div>

        {/* Text Card */}
        <div className="bg-white p-4 md:p-6 rounded-xl">
          <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-[var(--forest)]">
            Modern Infrastructure
          </h3>

          <p className="text-gray-700 text-justify text-sm md:text-base leading-7">
            The institute continuously upgrades its infrastructure
            and state-of-the-art equipment to provide students with
            a technologically advanced and intellectually inspiring
            environment.
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6">

      {/* Excellence Card */}
      <div className=" bg-gray-100 p-4 md:p-6 rounded-xl ">
        <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4 text-[var(--forest)]">
          Excellence in Education
        </h3>

        <p className="text-gray-700 text-justify text-sm md:text-base leading-7">
          IPSCTM endeavors to make students technologically superior
          and ethically strong.
        </p>
      </div>

      {/* Engineering Card */}
      <div className="bg-[#dce8ec] overflow-hidden rounded-xl shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
          alt=""
          className="w-full h-[180px] sm:h-[220px] object-cover"
        />

        <div className="p-4 md:p-6">
          <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4 text-[var(--forest)]">
            Engineering for Tomorrow
          </h3>

          <p className="text-gray-700 text-justify text-sm md:text-base leading-7">
            Engineering is a profession that combines knowledge,
            innovation, and practical application.
          </p>
        </div>
      </div>

    </div>

  </div>
</div>
  );
};

export default CTMDashboard;