import { useCallback, useState } from "react";
import Questions from "./Questions.js";
import Summary from "./Summary.js";

export default function TakeQuiz({ quiz }) {
  const [answers, updateAnswer] = useState([]);
  const activeQuestionIndex = answers.length;
//   console.log(activeQuestionIndex)
  const handleAnswer=useCallback(function handleAnswer(ans) {
    updateAnswer((prev) => {
      return [...prev, ans];
    });
  },[])
  const quizended = activeQuestionIndex >= quiz.allQuestions.length;
//   console.log(quizended)
  return (
    <div className="text-center">
      {!quizended && (
        <div className="w-2/3 bg-purple-500 mx-auto my-8 min-h-80 rounded-2xl p-10">
          <Questions
          key={activeQuestionIndex}
            ques={quiz.allQuestions[activeQuestionIndex]}
            addAnswer={handleAnswer}
            time={5}
          />
        </div>
      )}
      {quizended && <Summary quiz={quiz} answers={answers} />}
    </div>
  );
}
