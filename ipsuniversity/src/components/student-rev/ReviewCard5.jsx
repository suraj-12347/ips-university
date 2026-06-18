const ReviewCard5 = () => {
  return (
    <div className="text-center max-w-3xl mx-auto px-6">
      
      <img
        src="https://i.pravatar.cc/100?img=14"
        alt=""
        className="w-20 h-20 rounded-full mx-auto"
      />

      <p className="mt-8 text-[22px] md:text-[28px] leading-[1.8] text-[var(--forest)] font-light">
        “The supportive faculty, peaceful campus and practical exposure helped
        me become more confident in both academics and career preparation.”
      </p>

      <div className="mt-8">
        <h3 className="font-semibold text-[20px] text-[var(--forest)]">
          Aditya Mishra
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          MCA Student
        </p>
      </div>
    </div>
  );
};

export default ReviewCard5;