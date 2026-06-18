const ReviewCard4 = () => {
  return (
    <div className="relative max-w-md">
      
      <div className="absolute inset-0 bg-[var(--grass)] rounded-[30px] translate-x-3 translate-y-3 opacity-20"></div>

      <div className="relative bg-[var(--white)] rounded-[30px] p-8 border border-[rgba(0,0,0,0.05)]">
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[22px] font-semibold text-[var(--forest)]">
              Sneha Patel
            </h3>

            <p className="text-sm text-gray-500">
              BCA Student
            </p>
          </div>

          <img
            src="https://i.pravatar.cc/100?img=22"
            alt=""
            className="w-16 h-16 rounded-full"
          />
        </div>

        <p className="mt-6 text-gray-600 leading-8">
          The university atmosphere is peaceful and the learning experience
          feels industry-oriented rather than purely theoretical.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard4;