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
            
          <div key={index} className="my-8 font-bold">
            <p>
              Q{index + 1}
              {`) `}
              {ques.question}
            </p>
            <p className={tempclass}>
              
              {answers[index]!=null && `Selected Answer:  ${answers[index]}`}
              {answers[index]==null && `Answer:  ${ques.answers[0]}`}
            </p>
          </div>
        );
      })}
      <p></p>
    </div>
  );
}
