// Voice Recognition Service

class VoiceRecognitionService {
  constructor() {
    this.recognition = null;
    this.isSupported = false;

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      this.isSupported = true;

      this.recognition = new SpeechRecognition();

      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      // Hindi + English
      this.recognition.lang = "en-IN";
    }
  }

  supported() {
    return this.isSupported;
  }

  setLanguage(language = "en-IN") {
    if (!this.recognition) return;

    this.recognition.lang = language;
  }

  start({
    onResult,
    onStart,
    onEnd,
    onError,
  }) {
    if (!this.recognition) return;

    this.recognition.onstart = () => {
      if (onStart) onStart();
    };

    this.recognition.onend = () => {
      if (onEnd) onEnd();
    };

    this.recognition.onerror = (event) => {
      console.error(
        "Voice Recognition Error:",
        event.error
      );

      if (onError) {
        onError(event.error);
      }
    };

    this.recognition.onresult = (event) => {
      let transcript = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        transcript +=
          event.results[i][0].transcript;
      }

      if (onResult) {
        onResult(
          transcript,
          event.results[
            event.results.length - 1
          ].isFinal
        );
      }
    };

    try {
      this.recognition.start();
    } catch (error) {
      console.error(error);
    }
  }

  stop() {
    if (!this.recognition) return;

    try {
      this.recognition.stop();
    } catch (error) {
      console.error(error);
    }
  }

  abort() {
    if (!this.recognition) return;

    try {
      this.recognition.abort();
    } catch (error) {
      console.error(error);
    }
  }
}

const voiceRecognition =
  new VoiceRecognitionService();

export default voiceRecognition;