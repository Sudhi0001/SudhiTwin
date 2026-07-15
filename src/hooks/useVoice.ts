import { useEffect, useRef, useState } from "react";

interface SpeechRecognition {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  onstart?: () => void;
  onend?: () => void;
  onerror?: (event: Event) => void;
  onresult?: (event: SpeechRecognitionEvent) => void;
  start: () => void;
  stop: () => void;
}

interface SpeechRecognitionEvent {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

type SpeechRecognitionConstructor = new () => SpeechRecognition;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

export function useVoice(
  onResult: (text: string) => void
) {
  const recognition = useRef<SpeechRecognition | null>(null);

  const [listening, setListening] = useState(false);
  const [supported] = useState(() =>
    typeof window !== "undefined" &&
    !!(window.SpeechRecognition ?? window.webkitSpeechRecognition)
  );

  useEffect(() => {
    const SpeechRecognitionClass =
      window.SpeechRecognition ??
      window.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) return;

    const recognitionInstance =
      new SpeechRecognitionClass();

    recognitionInstance.lang = "en-US";
    recognitionInstance.interimResults = false;
    recognitionInstance.continuous = false;
    recognitionInstance.maxAlternatives = 1;

    recognitionInstance.onstart = () =>
      setListening(true);

    recognitionInstance.onend = () =>
      setListening(false);

    recognitionInstance.onerror = () =>
      setListening(false);

    recognitionInstance.onresult = (
      event: SpeechRecognitionEvent
    ) => {
      const transcript =
        event.results[0][0].transcript;

      onResult(transcript);
    };

    recognition.current = recognitionInstance;

    return () => {
      recognitionInstance.stop();
    };
  }, [onResult]);

  function startListening() {
    recognition.current?.start();
  }

  return {
    listening,
    supported,
    startListening,
  };
}