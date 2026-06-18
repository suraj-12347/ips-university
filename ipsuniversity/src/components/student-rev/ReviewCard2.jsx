const ReviewCard2 = () => {
  return (
    <div className="bg-[#f8f8f8] rounded-[32px] p-10 max-w-2xl relative overflow-hidden">
      
      <div className="absolute top-6 left-8 text-[90px] leading-none text-[var(--grass)] opacity-20">
        "
      </div>

      <p className="relative z-10 text-[24px] md:text-[30px] leading-[1.7] font-light text-[var(--forest)]">
        IPS University gave me confidence, exposure and the right environment
        to build both technical and personal skills.
      </p>

      <div className="mt-10 flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100?img=32"
          alt=""
          className="w-14 h-14 rounded-full"
        />

        <div>
          <h4 className="font-semibold text-[var(--forest)]">
            Priyanshi Jain
          </h4>

          <p className="text-sm text-gray-500">
            MBA Student
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard2;