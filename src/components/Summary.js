export default function Summary({ quiz, answers }) {
    const correct='text-green-500';
    const wrong='text-red-500';
    const skipped='text-white';
  return (
    <div className="bg-purple-600 w-3/4 mx-auto my-10 p-4">
      <h1>Summary</h1>
      {quiz.allQuestions.map((ques, index) => {
        let tempclass=wrong;
            if(answers[index]===ques.answers[0]){
                tempclass=correct;
            }
            else if(answers[index]===null){
                tempclass=skipped
            }
        return (
            
          <p key={index} className="my-8 font-bold">
            <p>
              Q{index + 1}
              {`) `}
              {ques.question}
            </p>
            <p className={tempclass}>
              Selected Answer:{` `}
              {answers[index]}
            </p>
          </p>
        );
      })}
      <p></p>
    </div>
  );
}
