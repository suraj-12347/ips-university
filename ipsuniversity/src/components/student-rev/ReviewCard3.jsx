const ReviewCard3 = () => {
  return (
    <div className="w-full bg-[var(--white)] rounded-[30px] border border-[rgba(0,0,0,0.05)] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
      
      <img
        src="https://i.pravatar.cc/120?img=44"
        alt=""
        className="w-24 h-24 rounded-[24px] object-cover"
      />

      <div>
        <div className="flex gap-1 text-[var(--grass)] text-lg mb-3">
          ★ ★ ★ ★ ★
        </div>

        <p className="text-gray-600 leading-8 text-[16px]">
          What impressed me most was the balance between academics and
          extracurricular exposure. The faculty members are approachable and
          supportive throughout the journey.
        </p>

        <div className="mt-5">
          <h3 className="font-semibold text-[20px] text-[var(--forest)]">
            Rahul Verma
          </h3>

          <p className="text-sm text-gray-500">
            BBA • Final Year
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard3;