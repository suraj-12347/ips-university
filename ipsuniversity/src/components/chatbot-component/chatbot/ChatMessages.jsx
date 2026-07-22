import React, { useEffect, useRef } from "react";
import TypingIndicator from "./TypingIndicator";

const ChatMessages = ({
  messages = [],
  isTyping = false,
}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div
      className="
        h-full
        overflow-y-auto
        px-4
        py-4
        bg-white
      "
    >
      {/* Welcome Card */}

      {messages.length === 1 && (
        <div
          className="
            mb-5
            rounded-2xl
            p-4
            border
          "
          style={{
            background: "#ecf39e",
            borderColor: "#578B07",
          }}
        >
          <h3
            className="
              font-bold
              text-lg
              mb-1
            "
            style={{
              color: "#3a6d33",
            }}
          >
            🎓 Welcome to IPS University
          </h3>

          <p
            className="text-sm"
            style={{
              color: "#14532d",
            }}
          >
            Ask me about admissions, fees,
            placements, hostel, scholarships,
            transport or campus facilities.
          </p>
        </div>
      )}

      {/* Messages */}

      {messages.map((message) => {
        const isUser =
          message.sender === "user";

        return (
          <div
            key={message.id}
            className={`mb-4 flex ${
              isUser
                ? "justify-end"
                : "justify-start"
            }`}
          >
            {/* Bot Avatar */}

            {!isUser && (
              <div
                className="
                  h-9
                  w-9
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white
                  mr-2
                  flex-shrink-0
                "
                style={{
                  background:
                    "linear-gradient(135deg,#3a6d33,#578B07)",
                }}
              >
                🎓
              </div>
            )}

            {/* Bubble */}

            <div
              className={`
                max-w-[80%]
                px-4
                py-3
                rounded-2xl
                shadow-sm
                text-sm
                whitespace-pre-wrap
              `}
              style={
                isUser
                  ? {
                      background:
                        "linear-gradient(135deg,#3a6d33,#578B07)",
                      color: "#fff",
                      borderBottomRightRadius: "6px",
                    }
                  : {
                      background: "#f8fff2",
                      color: "#14532d",
                      border: "1px solid #d9f0b0",
                      borderBottomLeftRadius: "6px",
                    }
              }
            >
              {message.text}

              <div
                className={`
                  mt-2
                  text-[10px]
                  ${
                    isUser
                      ? "text-white/70"
                      : "text-gray-500"
                  }
                `}
              >
                {message.time ||
                  new Date().toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Typing */}

      {isTyping && (
        <TypingIndicator />
      )}

      {/* Auto Scroll Target */}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;