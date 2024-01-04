import AnswerOption from "./AnswerOption.js";

export default function CreatingQuestion({ques, onQuestionEdit, quesindex, onAnswerEdit}) {
  return (
    <div className="w-4/5 m-4 p-4 border-2">
      <div className="flex flex-row justify-between">
        <div className="w-full">
          <input type="text" className="h-8 w-4/5 mx-4 my-2 focus:bg-stone-200 focus:outline-none border-b-2  border-black focus:border-purple-700" placeholder={`Question ${quesindex+1}`} value={ques.question} onChange={(event)=>onQuestionEdit(quesindex, event)} />
          <ul>
            {
                ques.answers.map((opt, ansindex)=>{
                    return <AnswerOption key={ansindex} quesindex={quesindex} index={ansindex} option={opt} onAnswerEdit={onAnswerEdit}/>
                })
            }
        </ul>
        </div>
        <div className="mx-4">
          <label>type</label>
          <label>Multiple</label>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
