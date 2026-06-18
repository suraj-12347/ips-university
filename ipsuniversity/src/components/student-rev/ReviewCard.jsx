const ReviewCard1 = () => {
  return (
    <div className="bg-[var(--white)] border border-[rgba(0,0,0,0.06)] rounded-[28px] p-7 max-w-md shadow-sm">
      
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt=""
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-[18px] font-semibold text-[var(--forest)]">
            Aarav Sharma
          </h3>

          <p className="text-sm text-gray-500">
            B.Tech CSE • 3rd Year
          </p>
        </div>
      </div>

      <p className="mt-6 leading-7 text-gray-600 text-[15px]">
        The campus environment feels calm and motivating. Faculty support and
        practical learning opportunities genuinely helped me grow.
      </p>

      <div className="mt-5 flex gap-1 text-[var(--grass)] text-lg">
        ★ ★ ★ ★ ★
      </div>
    </div>
  );
};

export default ReviewCard1;