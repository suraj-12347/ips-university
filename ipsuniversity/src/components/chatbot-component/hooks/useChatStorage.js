import { useEffect, useState } from "react";

const STORAGE_KEY = "ips_university_chat_history";

const useChatStorage = (defaultMessages = []) => {
  const [messages, setMessages] = useState(() => {
    try {
      const stored = localStorage.getItem(
        STORAGE_KEY
      );

      if (stored) {
        return JSON.parse(stored);
      }

      return defaultMessages;
    } catch (error) {
      console.error(
        "Chat Storage Load Error:",
        error
      );

      return defaultMessages;
    }
  });

  // Auto Save

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(messages)
      );
    } catch (error) {
      console.error(
        "Chat Storage Save Error:",
        error
      );
    }
  }, [messages]);

  // Add Message

  const addMessage = (message) => {
    setMessages((prev) => [
      ...prev,
      message,
    ]);
  };

  // Add Multiple Messages

  const addMessages = (newMessages) => {
    setMessages((prev) => [
      ...prev,
      ...newMessages,
    ]);
  };

  // Clear Chat

  const clearChat = () => {
    localStorage.removeItem(
      STORAGE_KEY
    );

    setMessages(defaultMessages);
  };

  // Reset Chat

  const resetChat = () => {
    setMessages(defaultMessages);
  };

  return {
    messages,
    setMessages,

    addMessage,
    addMessages,

    clearChat,
    resetChat,
  };
};

export default useChatStorage;