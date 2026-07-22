import React from "react";
import { X } from "lucide-react";

const ChatHeader = ({ onClose }) => {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 text-white"
      style={{
        background:
          "linear-gradient(135deg,#3a6d33,#578B07)",
      }}
    >
      {/* Left Side */}

      <div className="flex items-center gap-3">

        <img
          src="/images/chat-assistant.png"
          alt="IPS Assistant"
          className="
            h-11
            w-11
            rounded-full
            object-cover
            border-2
            border-white
            shadow-md
          "
        />

        <div>
          <h3 className="font-bold text-lg leading-none tracking-wide">
            IPS UNIVERSITY
          </h3>

          <p className="text-xs text-green-100 mt-1">
            Virtual Assistant
          </p>
        </div>

      </div>

      {/* Close Button */}

      <button
        onClick={onClose}
        className="
          h-9
          w-9
          rounded-full
          bg-white/15
          hover:bg-red-500
          transition-all
          duration-300
          flex
          items-center
          justify-center
        "
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default ChatHeader;