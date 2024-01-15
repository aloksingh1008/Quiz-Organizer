import CreatingQuestion from "./CreatingQuestion.js";
import { useState } from "react";
export default function CreateNewQuiz({ addNewQuiz }) {
  const [allQuestions, updateAllQuestion] = useState([]);
  const [title, updateTitle] = useState("");
  //   let lastQuestionIndex=allQuestions.length;
  function handleUpdateTitle(newTitle) {
    updateTitle(newTitle);
  }
  function handleCreatequiz() {
    if (allQuestions.length === 0) {
      console.log("Wrong Quiz");
    }
    let x = 0;
    allQuestions.forEach((ques) => {
      if (ques.question === "") {
        x++;
      }
      ques.answers.forEach((ans) => {
        if (ans === "") {
          x++;
          return;
        }
      });
    });
    if (x) {
      console.log("Wrong Quiz");
    } else {
      addNewQuiz({
        title,
        allQuestions,
      });
      console.log("Correct Quiz");
    }
    return;
  }

  function handleAddNewQuestion() {
    updateAllQuestion((prev) => {
      let newQuestions = [
        ...prev,
        {
          question: "",
          answers: ["", "", "", ""],
        },
      ];
      return newQuestions;
    });
  }

  function handleEditQuestion(index, event) {
    updateAllQuestion((prev) => {
      let newQuestions = [...prev];
      // console.log(index, event.target.value)
      newQuestions[index].question = event.target.value;
      return newQuestions;
    });
  }
  function handleEditAnswer(qindex, ansindex, event) {
    updateAllQuestion((prev) => {
      let newQuestions = [...prev];
      // console.log(newQuestions[qindex])
      newQuestions[qindex].answers[ansindex] = event.target.value;
      return newQuestions;
    });
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center text-purple-800 font-bold text-4xl my-5">
          <h1>Createing A New Quiz</h1>
        </div>
        <div className="flex mb-8 w-full justify-center">
          <h2 className="mx-4 text-2xl">Title:</h2>{" "}
          <input
            className="focus:bg-stone-200 w-3/5 focus:outline-none border-b-2  border-black focus:border-purple-700"
            type="text"
            value={title}
            onChange={(event) => handleUpdateTitle(event.target.value)}
          />
        </div>
        {allQuestions.map((ques, index) => {
          return (
            <CreatingQuestion
              key={index}
              onQuestionEdit={handleEditQuestion}
              onAnswerEdit={handleEditAnswer}
              ques={ques}
              quesindex={index}
            />
          );
        })}

        {/* <CreatingQuestion onQuestionEdit={handleEditQuestion} /> */}
      </div>
      <div className="flex flex-row justify-around my-10">
        <button onClick={handleAddNewQuestion}>+ ADD NEW QUESTION</button>
        <button onClick={handleCreatequiz}>CREATE QUIZ</button>
      </div>
    </>
  );
}
