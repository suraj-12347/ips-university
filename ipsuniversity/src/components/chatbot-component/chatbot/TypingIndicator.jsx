import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start px-4 py-2">
      <div
        className="
          flex
          items-center
          gap-1
          px-4
          py-3
          rounded-2xl
          rounded-bl-md
          shadow-sm
        "
        style={{
          background: "#ecf39e",
          color: "#3a6d33",
        }}
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            animate-bounce
          "
          style={{
            background: "#3a6d33",
            animationDelay: "0ms",
          }}
        />

        <span
          className="
            h-2
            w-2
            rounded-full
            animate-bounce
          "
          style={{
            background: "#3a6d33",
            animationDelay: "150ms",
          }}
        />

        <span
          className="
            h-2
            w-2
            rounded-full
            animate-bounce
          "
          style={{
            background: "#3a6d33",
            animationDelay: "300ms",
          }}
        />
      </div>
    </div>
  );
};

export default TypingIndicator;