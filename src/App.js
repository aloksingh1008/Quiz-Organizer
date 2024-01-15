import CreateNewQuiz from "./components/CreateNewQuiz.js";
import RecentAddedQuizBlock from "./components/RecentAddedQuizBlock.js";
import TakeQuiz from "./components/TakeQuiz.js";
import createquiz from "./images/createquiz.jpg";
import { useState, useRef } from "react";
function App() {
  const [whichQuiz, setQuiz] = useState("takequiz");
  const [activeQuiz, setActiveQuiz] = useState(
    {
      title: "This is the First Quiz",
      code:'hare',
      allQuestions: [
        {
          question: "this is trail question, lets check is it warping or not this is trail question, lets check is it warping or not this is trail question, lets check is it warping or not this is trail question, lets check is it warping or not this is trail question, lets check is it warping or not",
          answers: ["all let elengate the answer to check it let elengate the answer to check it", "yes", "no", "may be"],
        },
        {
          question: "this is trail question 2",
          answers: ["all let elengate the answer to check it let elengate the answer to check it", "yes", "no", "may be"],
        },
      ],
    });
  const [allQuiz, updateAllQuiz] = useState([
    {
      title: "This is the First Quiz",
      code:'hare',
      allQuestions: [
        {
          question: "this is trail question",
          answers: ["all", "yes", "no", "may be"],
        },
      ],
    },
  ]);
  const code=useRef();
  function handleStartQuiz(){
    console.log(code.current.value)
    if(code.current.value===''){
      console.log('Please enter the code');
      return;
    }
    let x=0;
    allQuiz.forEach((quiz)=>{
      console.log(quiz.code)
      if(quiz.code===code.current.value){
        console.log(quiz)
        x++;
        setActiveQuiz(()=> {return quiz});
      }
    })
    if(x===0){
      console.log('Invalid Code');
      return;
    }
    setQuiz("takequiz");
    console.log('Starting Quiz')

  }

  function handleCreateQuiz() {
    setQuiz("createquiz");
  }

  function handleAddNewQuiz(allQuestions) {
    updateAllQuiz((prev) => {
      return [allQuestions, ...prev];
    });
    setQuiz(null);
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline justify-center">
          Quiz Organizer
        </h1>
      </div>
      {whichQuiz === null && (
        <div className="flex flex-row">
          <div className="w-1/2 text-center">
            {allQuiz.length === 0 && (
              <img
                src={createquiz}
                alt="computer"
                className="w-1/2 m-auto my-10"
              />
            )}
            {allQuiz.length > 0 && <RecentAddedQuizBlock allQuiz={allQuiz} />}
            <button onClick={handleCreateQuiz}>+ Create A New Quiz</button>
          </div>
          <div className="w-1/2 text-center">
            Take Quiz
            <p>
              Enter Code
              <input ref={code} type="text" />
            </p>
            <p>
              <button onClick={handleStartQuiz}>start quiz</button>
            </p>
          </div>
        </div>
      )}
      {whichQuiz === "createquiz" && (
        <CreateNewQuiz addNewQuiz={handleAddNewQuiz} />
      )}
      {
        whichQuiz==="takequiz" && <TakeQuiz quiz={activeQuiz} />
      }
    </>
  );
}

export default App;
