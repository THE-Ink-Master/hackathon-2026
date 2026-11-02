"use client";

import { useState } from "react";
import { gaiCall, hfQuery } from "../utils/ai-api";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    console.log("Submitted prompt:", prompt);

    // hfQuery({
    //   messages: [
    //     {
    //       role: "user",
    //       content: "What is the capital of France?",
    //     },
    //   ],
    //   model: "meta-llama/Llama-3.2-1B:preferred",
    // }).then((response) => {
    //   console.log(JSON.stringify(response));
    // });

    gaiCall()
      .then((d) => {
        console.log(d);
      })
      .catch((e) => {
        console.log(e);
      });
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white p-2 shadow-sm focus-within:border-blue-500">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400"
        />

        <button
          type="submit"
          disabled={!prompt.trim()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </form>
  );
}
