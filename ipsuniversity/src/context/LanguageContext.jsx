import React, {
  createContext,
  useContext,
  useState,
} from "react";

const translations = {
  en: {
    lang: "Eng",

    scholarship: "Scholarship Policy",
    calendar: "Academic Calendar",
    admission: "Admission Portal",
    login: "Login →",
    welcome: "Welcome To Our University",

    enquiry: "Enquiry",

    enquiryDesc:
      "Explore world-class education, placements, innovation and smart campus life.",

    placementAssist:
      "100% Placement Assistance",

    aicte:
      "AICTE Approved Courses",

    campus:
      "80 Acres Smart Campus",

    getStarted:
      "Get Started",

    formDesc:
      "Fill your details and our team will contact you.",

    fullName:
      "Full Name",

    mobile:
      "Mobile Number",

    email:
      "Email Address",

    selectCourse:
      "Select Course",

    message:
      "Your Message",

    submit:
      "Submit Enquiry",

    collaborators:
      "Our Collaborators",

    collaboratorsDesc:
      "Companies across the world build, scale, and ship with us.",

    footerAbout:
      "Institute of Professional Studies (IPS University), an organically growing institution in Gwalior with a sprawling 80-acre campus. Committed to quality education, research & innovation — Planting Future, one student at a time.",

    quickLinks:
      "Quick Links",

    academics:
      "Academics",

    contactUs:
      "Contact Us",

    subscribe:
      "Subscribe →",

    emailPlaceholder:
      "Enter your email",

    privacy:
      "Privacy Policy",

    terms:
      "Terms of Use",

    sitemap:
      "Sitemap",

    grievance:
      "Grievance",

    rights:
      "All Rights Reserved.",
  },

  hi: {
    lang: "हिं",

    scholarship: "छात्रवृत्ति नीति",
    calendar: "शैक्षणिक कैलेंडर",
    admission: "प्रवेश पोर्टल",
    login: "लॉगिन →",

    welcome:
      "हमारे विश्वविद्यालय में आपका स्वागत है",

    enquiry:
      "पूछताछ",

    enquiryDesc:
      "विश्वस्तरीय शिक्षा, प्लेसमेंट और स्मार्ट कैंपस जीवन का अनुभव करें।",

    placementAssist:
      "100% प्लेसमेंट सहायता",

    aicte:
      "AICTE स्वीकृत कोर्स",

    campus:
      "80 एकड़ स्मार्ट कैंपस",

    getStarted:
      "शुरू करें",

    formDesc:
      "अपनी जानकारी भरें, हमारी टीम आपसे संपर्क करेगी।",

    fullName:
      "पूरा नाम",

    mobile:
      "मोबाइल नंबर",

    email:
      "ईमेल पता",

    selectCourse:
      "कोर्स चुनें",

    message:
      "आपका संदेश",

    submit:
      "पूछताछ भेजें",

    collaborators:
      "हमारे सहयोगी",

    collaboratorsDesc:
      "दुनिया भर की कंपनियाँ हमारे साथ निर्माण, विस्तार और नवाचार करती हैं।",

    footerAbout:
      "आईपीएस यूनिवर्सिटी ग्वालियर की एक तेजी से विकसित होती संस्था है, जो 80 एकड़ के विशाल कैंपस में गुणवत्तापूर्ण शिक्षा और नवाचार प्रदान करती है।",

    quickLinks:
      "त्वरित लिंक",

    academics:
      "शैक्षणिक विभाग",

    contactUs:
      "संपर्क करें",

    subscribe:
      "सब्सक्राइब करें →",

    emailPlaceholder:
      "अपना ईमेल दर्ज करें",

    privacy:
      "गोपनीयता नीति",

    terms:
      "उपयोग की शर्तें",

    sitemap:
      "साइटमैप",

    grievance:
      "शिकायत",

    rights:
      "सभी अधिकार सुरक्षित।",
  },

  es: {
    lang: "Esp",
  },

  fr: {
    lang: "Fr",
  },
};

const LanguageContext =
  createContext();

export const LanguageProvider = ({
  children,
}) => {
  const [language, setLanguage] =
    useState("en");

  const t =
    translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () =>
  useContext(LanguageContext);