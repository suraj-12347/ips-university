import { useState, useCallback } from "react";
import voiceRecognition from "../services/voiceRecognition";

const useVoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);

  const startListening = useCallback(
    (language = "hi-IN") => {
      if (!voiceRecognition.supported()) {
        setError(
          "Voice Recognition is not supported in this browser."
        );
        return;
      }

      setTranscript("");
      setError(null);

      voiceRecognition.setLanguage(language);

      voiceRecognition.start({
        onStart: () => {
          setIsListening(true);
        },

       onResult: (text, isFinal) => {
  console.log("VOICE:", text);
  console.log("FINAL:", isFinal);

  setTranscript(text);
},


        onEnd: () => {
          setIsListening(false);
        },

        onError: (err) => {
          setError(err);
          setIsListening(false);
        },
      });
    },
    []
  );

  const stopListening = useCallback(() => {
    voiceRecognition.stop();
    setIsListening(false);
  }, []);

  const toggleListening = useCallback(
    (language = "hi-IN") => {
      if (isListening) {
        stopListening();
      } else {
        startListening(language);
      }
    },
    [isListening, startListening, stopListening]
  );

  const clearTranscript = () => {
    setTranscript("");
  };

  return {
    transcript,
    isListening,
    error,

    startListening,
    stopListening,
    toggleListening,

    clearTranscript,
  };
};

export default useVoiceRecognition;