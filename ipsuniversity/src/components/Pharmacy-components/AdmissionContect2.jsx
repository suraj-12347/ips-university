import studentImg from "../../images1/pharmapractical3.png"; // Google se transparent students PNG use kar lena

export default function AdmissionContact() {
  return (
   <section
  className=" overflow-visible mt-20"
//   style={{ background: "var(--forest)" }}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-10 items-center max-h-full">

      {/* Left Image */}
     <div className="relative flex flex-col items-center overflow-visible w-full">

  <img
    src={studentImg}
    alt="Students"
    className="
      relative
      z-10
      h-full
   
      object-contain

      
      

    "
  />

  {/* <div className="text-center  max-w-md ">
    <h2 className="text-3xl font-bold text-[var(--forest)]">
      Your Journey Begins Here
    </h2>

    <p className="text-gray-700 mt-2 leading-relaxed text-md">
      Connect with our admission team for personalized guidance on
      programs, eligibility, scholarships, and the admission process.
    </p>
  </div> */}

</div>

      {/* Right Contact */}
     {/* <div className="bg-white rounded-2xl h-[250px] max-w-md p-6 shadow-xl flex flex-col justify-between md:mt-20 md:ml-10">

  <div>
    <span
      className="uppercase tracking-[3px] text-[11px] font-semibold"
      style={{ color: "var(--grass)" }}
    >
      Admission Open
    </span>

    <h2
      className="text-2xl font-bold mt-1"
      style={{ color: "var(--forest)" }}
    >
      Contact Us
    </h2>
  </div>

  <div className="space-y-2 text-[15px] text-gray-700">

    <div className="flex justify-between gap-4">
      <span className="font-semibold text-black">Office</span>
      <span className="text-right">Admission Office</span>
    </div>

    <div className="flex justify-between gap-4">
      <span className="font-semibold text-black">Address</span>
      <span className="text-right">Gwalior, M.P.</span>
    </div>

    <div className="flex justify-between gap-4">
      <span className="font-semibold text-black">Phone</span>
      <span>+91 98765 43210</span>
    </div>

    <div className="flex justify-between gap-4">
      <span className="font-semibold text-black">Email</span>
      <span className="text-right break-all">
        admissions@ips.edu.in
      </span>
    </div>

    <div className="flex justify-between gap-4">
      <span className="font-semibold text-black">Hours</span>
      <span>9 AM – 5 PM</span>
    </div>

  </div>

</div> */}

    </div>
  </div>
</section>
  );
}