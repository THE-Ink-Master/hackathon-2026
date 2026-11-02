import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GK;

export async function hfQuery(data: any) {
  console.log(process.env.NEXT_PUBLIC_HF_TOKEN);

  const response = await fetch(
    "https://router.huggingface.co/v1/chat/completions",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  );
  const result = await response.json();
  return result;
}

export async function gaiCall() {
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: "Why is the sky blue?",
  });
  console.log(response.text);
}
