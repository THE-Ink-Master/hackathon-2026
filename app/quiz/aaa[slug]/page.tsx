"use client";

import { notFound, useParams } from "next/navigation";
import { parse } from "yaml";
import React, { ReactElement, useEffect, useState } from "react";

async function getQuizData(idNum: number) {
  function checkAnswer(
    clicked: number,
    correct: number,
    question: string,
    answer1: string,
    answer2: string,
    answer3: string,
    answer4: string,
  ) {
    if (clicked == correct) {
      return;
    } else {
    }
  }
  const response = await fetch(`/api/file?quizId=${idNum}`);

  const quizData = await response.json();
  // console.log(quizData.fileData);

  const data = parse(quizData.fileData);

  const order = Object.keys(data);

  const quiz = [];
  let key = 1;

  for (const app of order) {
    const current = data[app];
    const question = current.question.q;
    const answer1 = current.question.a1;
    const answer2 = current.question.a2;
    const answer3 = current.question.a3;
    const answer4 = current.question.a4;
    const correct = current.question.correct;
    const returnData = (
      <div>
        {order.map((app, index) => {
          const current = data[app];
          const { q: question, a1, a2, a3, a4, correct } = current.question;

          return (
            // Use a stable identifier for the key (like the app name or item ID)
            <div className="question" key={app}>
              <div>
                <p>{question}</p>
              </div>

              <button
                onClick={() =>
                  checkAnswer(1, correct, question, a1, a2, a3, a4)
                }
              >
                {a1}
              </button>
              <button
                onClick={() =>
                  checkAnswer(2, correct, question, a1, a2, a3, a4)
                }
              >
                {a2}
              </button>
              <button
                onClick={() =>
                  checkAnswer(3, correct, question, a1, a2, a3, a4)
                }
              >
                {a3}
              </button>
              <button
                onClick={() =>
                  checkAnswer(4, correct, question, a1, a2, a3, a4)
                }
              >
                {a4}
              </button>
            </div>
          );
        })}
      </div>
    );
    key += 1;
    quiz.push(returnData);
  }

  return <div>{quiz}</div>;
}

export default function Page() {
  const [quizData, setQuizData] = useState<ReactElement | null>(null);
  const params = useParams();
  const slug = params?.slug;
  if (!slug || Array.isArray(slug) || isNaN(parseInt(slug[0]))) {
    console.log("invalid slug");
    notFound();
  }
  const quizNumber = parseInt(slug);

  useEffect(() => {
    const data = async () => {
      const quiz = await getQuizData(quizNumber);
      setQuizData(quiz);
    };
    data();
  }, [slug]);

  return <div>{quizData}</div>;
}
