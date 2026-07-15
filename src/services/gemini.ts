import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function askGemini(
  prompt: string
): Promise<string> {
  try {
    const result =
      await model.generateContent(prompt);

    return result.response.text().trim();
  } catch (error: unknown) {
    console.error("Gemini Error:", error);

    const message =
      error instanceof Error
        ? error.message
        : String(error);

    if (message.includes("429")) {
      return `⚠️ My AI brain has temporarily reached its Gemini API usage limit.

The rest of my portfolio is still available.

Please try again later or reconnect me with another Gemini API key.`;
    }

    if (message.includes("401")) {
      return `⚠️ Authentication failed.

Please verify the configured Gemini API key.`;
    }

    if (message.includes("403")) {
      return `⚠️ Access to Gemini was denied.

Please check your API permissions.`;
    }

    return `⚠️ I couldn't connect to my AI brain right now.

Please try again in a moment.`;
  }
}