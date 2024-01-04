export default function AnswerOption({index, option, onAnswerEdit, quesindex}){
    return <li>
        <label className="mx-2">{index+1}.</label>
        <input type="text" placeholder={`Option ${index+1} ${index===0?'(Correct Option)':''}`} value={option} onChange={(event)=>onAnswerEdit(quesindex, index, event)} className="w-2/5 focus:bg-stone-200 focus:outline-none focus:border-purple-700 focus:border-b-2"/>
    </li>
}