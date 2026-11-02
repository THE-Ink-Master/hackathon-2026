import React from "react";
import { parse } from "yaml";
import { QuizData } from "@/types/quiz";

interface QuizPageProps {
  params: Promise<{
    quizId: string;
  }>;
}

// Fetch function to get and parse the YAML file using the `yaml` package
async function getQuizData(quizId: string): Promise<QuizData | null> {
  try {
    console.log("quizId: ", quizId);
    const res = await fetch(`http://localhost:3000/api/file?quizId=${quizId}`, {
      cache: "no-store", // Ensures fresh data on every request
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch quiz: ${res.statusText}`);
    }

    const yamlText = await res.json();

    console.log(yamlText);

    // Parse the YAML text using the `yaml` library
    const parsedData = parse(yamlText.fileData) as QuizData;
    return parsedData;
  } catch (error) {
    console.error("Error loading quiz YAML:", error);
    return null;
  }
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { quizId } = await params;
  const quiz = await getQuizData(quizId);

  if (!quiz || !Array.isArray(quiz)) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">Error Loading Quiz</h1>
        <p className="text-gray-600 mt-2">
          Could not load or parse the quiz with ID: {quizId}
        </p>
      </div>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-8">
      <header className="border-b pb-4">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Quiz ID: {quizId}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Answer the questions below:
        </p>
      </header>

      <div className="space-y-6">
        {quiz.map((item, index) => {
          const { q, a1, a2, a3, a4, correct } = item.question;
          const answers = [
            { id: 1, text: a1 },
            { id: 2, text: a2 },
            { id: 3, text: a3 },
            { id: 4, text: a4 },
          ];

          return (
            <div
              key={index}
              className="p-6 bg-white border rounded-xl shadow-sm space-y-4"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                <span className="text-blue-600 mr-2">Q{index + 1}.</span>
                {q}
              </h2>

              <ul className="space-y-2">
                {answers.map((answer) => {
                  return (
                    <li
                      key={answer.id}
                      className="p-3 border rounded-lg flex items-center justify-between text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span>{answer.text}</span>
                      <span className="text-xs font-medium px-2 py-1 rounded bg-gray-200 text-gray-600">
                        Option {answer.id}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
}
