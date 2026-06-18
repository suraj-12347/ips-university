// ChatBot.jsx

import React, { useState } from "react";

import {
  X,
  Send,
} from "lucide-react";

import botImg from "../images1/aichat.jpeg";

import { useLanguage } from "../context/LanguageContext";

const ChatBot = () => {

  const { language } = useLanguage();

  const chatbotData = {
    en: {
      assistant: "IPS Assistant",

      online: "🟢 Online — Ask me anything!",

      welcome:
        "👋 Namaste! I'm the IPS University virtual assistant.",

      ask:
        "Ask about Admissions, Courses, Scholarships, Fees & Placements.",

      placeholder: "Type your message...",

      chatNow: "Chat now",

      fallback:
        "Please contact admissions office for detailed information. 😊",

      suggestions: [
        "Admissions",
        "Fee Structure",
        "Scholarships",
        "Courses",
        "Placements",
      ],

      responses: {
        admissions:
          "📝 Admissions Process:\n1. Fill Enquiry Form online\n2. Submit academic documents\n3. Appear for counselling\n4. Pay fee & confirm seat.",

        fee:
          "💰 Fee Structure:\nB.Tech: ₹65,000/year\nBCA/BBA: ₹45,000/year\nMBA: ₹70,000/year\nB.Pharm: ₹75,000/year",

        scholarships:
          "🏅 Scholarships Available:\n• Merit Scholarship\n• MP Govt Scholarship\n• SC/ST/OBC Concession\n• Sports Quota",

        courses:
          "📚 Courses Offered:\n• B.Tech / M.Tech\n• BCA / MCA\n• BBA / MBA\n• B.Pharm / M.Pharm\n• B.Ed / M.Ed\n• Ph.D",

        placements:
          "🎯 Placement Highlights:\n• 95% Placement Support\n• 80+ Recruiters\n• Highest Package: 15 LPA",
      },
    },

    hi: {
      assistant: "IPS सहायक",

      online: "🟢 ऑनलाइन — कुछ भी पूछें!",

      welcome:
        "👋 नमस्ते! मैं IPS University का वर्चुअल असिस्टेंट हूँ।",

      ask:
        "Admissions, Courses, Scholarships, Fees और Placements के बारे में पूछें।",

      placeholder: "अपना संदेश लिखें...",

      chatNow: "चैट करें",

      fallback:
        "कृपया अधिक जानकारी के लिए एडमिशन ऑफिस से संपर्क करें 😊",

      suggestions: [
        "Admission",
        "Fees",
        "Scholarships",
        "Courses",
        "Placements",
      ],

      responses: {
        admissions:
          "📝 प्रवेश प्रक्रिया:\n1. ऑनलाइन फॉर्म भरें\n2. दस्तावेज़ जमा करें\n3. काउंसलिंग में भाग लें\n4. फीस जमा करें",

        fee:
          "💰 फीस संरचना:\nB.Tech: ₹65,000/वर्ष\nBCA/BBA: ₹45,000/वर्ष\nMBA: ₹70,000/वर्ष\nB.Pharm: ₹75,000/वर्ष",

        scholarships:
          "🏅 उपलब्ध छात्रवृत्तियाँ:\n• मेरिट स्कॉलरशिप\n• MP Govt Scholarship\n• SC/ST/OBC छूट\n• स्पोर्ट्स कोटा",

        courses:
          "📚 उपलब्ध कोर्स:\n• B.Tech / M.Tech\n• BCA / MCA\n• BBA / MBA\n• B.Pharm / M.Pharm\n• B.Ed / M.Ed\n• Ph.D",

        placements:
          "🎯 प्लेसमेंट हाइलाइट्स:\n• 95% प्लेसमेंट सपोर्ट\n• 80+ रिक्रूटर्स\n• उच्चतम पैकेज: 15 LPA",
      },
    },

    es: {
      assistant: "Asistente IPS",

      online: "🟢 En línea — ¡Pregúntame lo que quieras!",

      welcome:
        "👋 ¡Hola! Soy el asistente virtual de IPS University.",

      ask:
        "Pregunta sobre admisiones, cursos, becas, tarifas y colocaciones.",

      placeholder: "Escribe tu mensaje...",

      chatNow: "Chatear",

      fallback:
        "Por favor contacte a la oficina de admisiones para más información 😊",

      suggestions: [
        "Admissions",
        "Fees",
        "Scholarships",
        "Courses",
        "Placements",
      ],

      responses: {
        admissions:
          "📝 Proceso de admisión:\n1. Complete el formulario\n2. Envíe documentos\n3. Asista a la orientación\n4. Pague las tarifas",

        fee:
          "💰 Estructura de tarifas:\nB.Tech: ₹65,000/año\nBCA/BBA: ₹45,000/año\nMBA: ₹70,000/año\nB.Pharm: ₹75,000/año",

        scholarships:
          "🏅 Becas disponibles:\n• Beca por mérito\n• Beca del Gobierno MP\n• Concesión SC/ST/OBC\n• Cuota deportiva",

        courses:
          "📚 Cursos ofrecidos:\n• B.Tech / M.Tech\n• BCA / MCA\n• BBA / MBA\n• B.Pharm / M.Pharm\n• B.Ed / M.Ed\n• Ph.D",

        placements:
          "🎯 Aspectos destacados:\n• 95% apoyo en colocación\n• 80+ reclutadores\n• Paquete más alto: 15 LPA",
      },
    },

    fr: {
      assistant: "Assistant IPS",

      online: "🟢 En ligne — Posez-moi vos questions !",

      welcome:
        "👋 Bonjour ! Je suis l'assistant virtuel de IPS University.",

      ask:
        "Posez des questions sur les admissions, cours, bourses et placements.",

      placeholder: "Tapez votre message...",

      chatNow: "Discuter",

      fallback:
        "Veuillez contacter le bureau des admissions pour plus d'informations 😊",

      suggestions: [
        "Admissions",
        "Fees",
        "Scholarships",
        "Courses",
        "Placements",
      ],

      responses: {
        admissions:
          "📝 Processus d'admission:\n1. Remplir le formulaire\n2. Soumettre les documents\n3. Participer au conseil\n4. Payer les frais",

        fee:
          "💰 Structure des frais:\nB.Tech: ₹65,000/an\nBCA/BBA: ₹45,000/an\nMBA: ₹70,000/an\nB.Pharm: ₹75,000/an",

        scholarships:
          "🏅 Bourses disponibles:\n• Bourse au mérite\n• Bourse du gouvernement MP\n• Réduction SC/ST/OBC\n• Quota sportif",

        courses:
          "📚 Cours proposés:\n• B.Tech / M.Tech\n• BCA / MCA\n• BBA / MBA\n• B.Pharm / M.Pharm\n• B.Ed / M.Ed\n• Ph.D",

        placements:
          "🎯 Points forts des placements:\n• 95% support placement\n• 80+ recruteurs\n• Salaire maximum: 15 LPA",
      },
    },
  };

  const t = chatbotData[language];

  const [open, setOpen] = useState(false);

  const [hideAssistant, setHideAssistant] =
    useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: t.welcome,
    },

    {
      type: "bot",
      text: t.ask,
    },
  ]);

  const sendMessage = (text) => {

    if (!text.trim()) return;

    const userMsg = {
      type: "user",
      text,
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
    ]);

    setInput("");

    setTimeout(() => {

      const lower =
        text.toLowerCase();

      let reply =
        t.fallback;

      if (
        lower.includes("admission")
      ) {
        reply =
          t.responses.admissions;
      }

      else if (
        lower.includes("fee")
      ) {
        reply =
          t.responses.fee;
      }

      else if (
        lower.includes("scholar")
      ) {
        reply =
          t.responses.scholarships;
      }

      else if (
        lower.includes("course")
      ) {
        reply =
          t.responses.courses;
      }

      else if (
        lower.includes("placement")
      ) {
        reply =
          t.responses.placements;
      }

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: reply,
        },
      ]);

    }, 700);
  };

  return (
    <>
      {/* Floating Assistant */}
      {!hideAssistant && (
        <div
          onClick={() =>
            setOpen(true)
          }
          className="fixed md:top-120 top-180 right-5 z-[999] cursor-pointer transition-all duration-300 hover:scale-[1.03]"
        >

          <div
            className="relative h-[52px] min-w-[150px] w-[150px] rounded-[18px] px-2 py-3 flex items-center gap-2 border border-white/10 backdrop-blur-xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg,var(--forest),var(--grass))",

              boxShadow:
                "0 10px 25px rgba(49,87,44,.22)",
            }}
          >

            <div
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full blur-2xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg,var(--forest),var(--grass))",
              }}
            />

            {/* Avatar */}
            <div className="relative shrink-0">

              <div
                className="absolute inset-0 rounded-full blur-md opacity-60 scale-110"
                style={{
                  background:
                    "linear-gradient(135deg,var(--forest),var(--grass))",
                }}
              />

              <div className="relative w-[35px] h-[35px] rounded-full overflow-hidden border border-white/20 bg-white">

                <img
                  src={botImg}
                  alt="assistant"
                  className="w-full h-full object-cover scale-[1.05]"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[8px] h-[8px] rounded-full border-2 border-[#403a3d] bg-[#79ff7a]" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <span className="text-white text-[14px] leading-none font-[650] tracking-[0.2px]">
                {t.chatNow}
              </span>
            </div>

            {/* Hide Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();

                setHideAssistant(
                  true
                );
              }}
              className="absolute top-2.5 right-2.5 text-white/75 hover:text-white transition-all"
            >
              <X
                size={14}
                strokeWidth={2.8}
              />
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-[30px] right-6 z-[9998] w-[360px] max-w-[calc(100vw-24px)] bg-white rounded-[22px] overflow-hidden transition-all duration-300 border border-[rgba(49,87,44,.08)] ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
        style={{
          boxShadow:
            "0 20px 60px rgba(0,0,0,.18)",
        }}
      >

        {/* Header */}
        <div
          className="px-5 py-4 flex items-center gap-3"
          style={{
            background:
              "linear-gradient(135deg,var(--forest),var(--grass))",
          }}
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full blur-lg bg-white/30 scale-110" />

            <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden bg-white border border-white/20">

              <img
                src={botImg}
                alt="bot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-[15px]">
              {t.assistant}
            </h4>

            <p className="text-white/75 text-[11px]">
              {t.online}
            </p>
          </div>

          <button
            onClick={() =>
              setOpen(false)
            }
            className="ml-auto text-white/80 hover:text-white transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[340px] overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[rgba(236,243,158,.12)]">

          {messages.map(
            (msg, index) => (
              <div
                key={index}
                className={`max-w-[82%] px-4 py-3 rounded-2xl text-[13px] leading-6 whitespace-pre-line ${
                  msg.type ===
                  "bot"
                    ? "bg-white text-[var(--forest)] rounded-bl-sm self-start shadow-sm"
                    : "text-white rounded-br-sm self-end"
                }`}
                style={
                  msg.type ===
                  "user"
                    ? {
                        background:
                          "linear-gradient(135deg,var(--forest),var(--grass))",
                      }
                    : {}
                }
              >
                {msg.text}
              </div>
            )
          )}
        </div>

        {/* Suggestions */}
        <div className="px-4 py-3 border-t border-[rgba(49,87,44,.08)] flex flex-wrap gap-2 bg-white">

          {t.suggestions.map((item) => (
            <button
              key={item}
              onClick={() =>
                sendMessage(item)
              }
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 border hover:scale-[1.03]"
              style={{
                background:
                  "rgba(236,243,158,.35)",

                borderColor:
                  "rgba(49,87,44,.12)",

                color:
                  "var(--forest)",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-[rgba(49,87,44,.08)] flex items-center gap-2 bg-white">

          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(
                e.target.value
              )
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              sendMessage(input)
            }
            placeholder={t.placeholder}
            className="flex-1 h-[46px] px-4 rounded-xl outline-none border text-[13px]"
            style={{
              borderColor:
                "rgba(49,87,44,.12)",
            }}
          />

          <button
            onClick={() =>
              sendMessage(input)
            }
            className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg,var(--forest),var(--grass))",
            }}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
