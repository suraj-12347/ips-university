import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingButton = ({ isOpen, onClick }) => {
  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse Ring */}
      <div
        className="absolute inset-0 rounded-full animate-ping"
        style={{
          background: "rgba(58,109,51,0.25)",
        }}
      />

      {/* Main Button */}
      <button
        onClick={onClick}
        className="
          relative
          h-16
          w-16
          rounded-full
          flex
          items-center
          justify-center
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
        "
        style={{
          background:
            "linear-gradient(135deg,#3a6d33,#578B07)",
          boxShadow:
            "0 10px 30px rgba(20,83,45,0.45)",
        }}
      >
        <MessageCircle size={28} />
      </button>

      {/* Tooltip */}
      <div
        className="
          absolute
          right-20
          top-1/2
          -translate-y-1/2
          whitespace-nowrap
          px-3
          py-2
          rounded-lg
          text-sm
          font-medium
          text-white
          opacity-100
        "
        style={{
          background: "#3a6d33",
        }}
      >
        Chat with IPS
      </div>
    </div>
  );
};

export default FloatingButton;