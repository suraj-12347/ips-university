import React, { useState, useEffect } from "react";

import FloatingButton from "./FloatingButton";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import QuickReplies from "./QuickReplies";
import ChatInput from "./ChatInput";

import chatbotService from "../services/chatbotService";
import navigationService from "../services/navigationService";

import useVoiceRecognition from "../hooks/useVoiceRecognition";
import useChatStorage from "../hooks/useChatStorage";

const defaultMessages = [
  {
    id: crypto.randomUUID(),
    sender: "bot",
    text: "👋 Welcome to IPS University. How can I help you today?",
    time: "Now",
  },
];

const IPSEnterpriseChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const { messages, addMessage } =
    useChatStorage(defaultMessages);

  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    clearTranscript,
  } = useVoiceRecognition();

  useEffect(() => {
  if (
    transcript &&
    transcript.trim()
  ) {
    handleSendMessage(transcript);
    clearTranscript();
  }
}, [transcript]);

  const handleSendMessage = (message) => {
   
    if (!message?.trim()) return;

    // Navigation Trigger
    if (
      navigationService &&
      typeof navigationService.handleNavigation ===
        "function"
    ) {
      navigationService.handleNavigation(message);
    }

    const userMsg =
      chatbotService.generateUserMessage(
        message
      );

    addMessage(userMsg);

    setIsTyping(true);

    setTimeout(() => {
      const botMsg =
        chatbotService.generateBotMessage(
          message
        );

      addMessage(botMsg);

      setIsTyping(false);
    }, 800);

    clearTranscript();
  };

  return (
    <>
      {/* Floating Button */}

      <FloatingButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Chat Window */}

      {isOpen && (
        <div
          className="
            fixed
            bottom-24
            right-5
            z-[99999]
            w-[350px]
            max-w-[95vw]
            h-[500px]
            max-h-[70vh]
            bg-white
            rounded-3xl
            overflow-hidden
            flex
            flex-col
            border
          "
          style={{
            borderColor: "#d9f0b0",
            boxShadow:
              "0 25px 60px rgba(20,83,45,.20)",
          }}
        >
          {/* Header */}

          <ChatHeader
            onClose={() =>
              setIsOpen(false)
            }
          />

          {/* Messages */}

          <div className="flex-1 overflow-hidden">
            <ChatMessages
              messages={messages}
              isTyping={isTyping}
            />
          </div>

          {/* Quick Replies */}

          <QuickReplies
            onSelect={
              handleSendMessage
            }
          />

          {/* Input */}

          <ChatInput
            onSend={
              handleSendMessage
            }
            transcript={
              transcript
            }
            isListening={
              isListening
            }
            onVoiceStart={() =>
              startListening("en-IN")
            }
            onVoiceStop={
              stopListening
            }
          />
        </div>
      )}
    </>
  );
};

export default IPSEnterpriseChatbot;