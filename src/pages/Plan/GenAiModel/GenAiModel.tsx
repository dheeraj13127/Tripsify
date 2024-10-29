import { GoogleGenerativeAI } from "@google/generative-ai";
export const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);
export const genAiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
