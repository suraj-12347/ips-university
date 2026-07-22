import React, { useEffect, useState } from "react";
import {
  Send,
  Mic,
  MicOff
} from "lucide-react";

const ChatInput = ({
  onSend,
  transcript = "",
  isListening = false,
  onVoiceStart,
  onVoiceStop
}) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
  if (transcript) {
    setMessage(transcript);
  }
}, [transcript]);

  const handleSend = () => {
    const text = message.trim();

    if (!text) return;

    onSend(text);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white border-t border-green-100 p-3">

      {/* Listening Status */}

      {isListening && (
        <div className="mb-2 flex items-center gap-2 text-red-500 text-sm animate-pulse">
          <Mic size={16} />
          Listening...
        </div>
      )}

      <div className="flex items-center gap-2">

        {/* Input */}

        <div className="flex-1 relative">

          <input
            type="text"
            value={message}
            placeholder="Ask IPS University..."
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={handleKeyDown}
            className="
              w-full
              rounded-full
              border
              border-green-200
              px-5
              py-3
              pr-14
              outline-none
              focus:border-green-600
              transition-all
            "
          />

        </div>

        {/* Voice */}

        <button
          onClick={() =>
            isListening
              ? onVoiceStop()
              : onVoiceStart()
          }
          className={`
            h-12
            w-12
            rounded-full
            flex
            items-center
            justify-center
            transition-all
            duration-300
          `}
          style={{
            background: isListening
              ? "#ef4444"
              : "#ecf39e",
            color: isListening
              ? "#fff"
              : "#3a6d33"
          }}
        >
          {isListening ? (
            <MicOff size={18} />
          ) : (
            <Mic size={18} />
          )}
        </button>

        {/* Send */}

        <button
          onClick={handleSend}
          className="
            h-12
            w-12
            rounded-full
            flex
            items-center
            justify-center
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
          style={{
            background:
              "linear-gradient(135deg,#3a6d33,#578B07)"
          }}
        >
          <Send size={18} />
        </button>

      </div>
    </div>
  );
};

export default ChatInput;