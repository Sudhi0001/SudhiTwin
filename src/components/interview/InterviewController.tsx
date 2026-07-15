import { useEffect } from "react";

import { useInterviewStore } from "../../store/interviewStore";
import { useContextStore } from "../../contexts/contextStore";

function InterviewController() {
  const { isInterviewActive } = useInterviewStore();

  const { setAIMode } = useContextStore();

  useEffect(() => {
    if (isInterviewActive) {
      setAIMode("interview");
    } else {
      setAIMode("assistant");
    }
  }, [isInterviewActive, setAIMode]);

  return null;
}

export default InterviewController;