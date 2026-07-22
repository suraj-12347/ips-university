import React from "react";

const QuickReplies = ({ onSelect }) => {
  const replies = [
    {
      icon: "🎓",
      text: "Admission Process",
    },
    {
      icon: "💰",
      text: "Fee Structure",
    },
    {
      icon: "📚",
      text: "Courses Offered",
    },
    {
      icon: "🏅",
      text: "Scholarships",
    },
    {
      icon: "🎯",
      text: "Placements",
    },
    {
      icon: "🏨",
      text: "Hostel Facilities",
    },
    {
      icon: "🚌",
      text: "Transport",
    },
    {
      icon: "📞",
      text: "Contact",
    },
  ];

  return (
    <div className="px-3 py-2 border-t border-green-100 bg-white">
      <div className="text-xs font-semibold text-gray-500 mb-2">
        Quick Questions
      </div>

      <div
        className="
          flex
          gap-2
          overflow-x-auto
          scrollbar-hide
        "
      >
        {replies.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item.text)}
            className="
              flex
              items-center
              gap-2
              whitespace-nowrap
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              transition-all
              duration-300
              hover:scale-105
              border
            "
            style={{
              background: "#ffffff",
              borderColor: "#578B07",
              color: "#3a6d33",
            }}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickReplies;