import { chatbotKnowledgeBase } from "../data/chatbotKnowledgeBase";

class ChatbotService {
  constructor() {
    this.kb = chatbotKnowledgeBase;
  }

  normalizeText(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, "");
  }

  findResponse(message) {
    const text = this.normalizeText(message);

    // Greetings
    if (
      this.kb.greetings.some((word) =>
        text.includes(word.toLowerCase())
      )
    ) {
      return "👋 Namaste! Welcome to IPS University. How can I help you today?";
    }

    // Check all categories
    const categories = [
      "admission",
      "fees",
      "courses",
      "scholarship",
      "placement",
      "hostel",
      "transport",
      "campus",
      "contact",
    ];

    for (const category of categories) {
      const item = this.kb[category];

      const matched = item.keywords.some((keyword) =>
        text.includes(keyword.toLowerCase())
      );

      if (matched) {
        return item.response;
      }
    }

    return this.kb.defaultResponse;
  }

  generateBotMessage(userMessage) {
    return {
      id: Date.now(),
      sender: "bot",
      text: this.findResponse(userMessage),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  }

  generateUserMessage(message) {
    return {
      id: Date.now(),
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  }
}

const chatbotService = new ChatbotService();

export default chatbotService;