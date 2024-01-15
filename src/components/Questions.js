export default function Questions({ ques, addAnswer }) {
  return (
    <>
      <div className="bg-purple-700 shadow-xl rounded-2xl mb-6 py-2 px-4">{ques.question}</div>
      <div>
        {ques.answers.map((ans, index) => {
          return <button className="bg-purple-700 shadow-xl rounded-full w-3/4 mx-auto my-2 py-2 px-4 hover:bg-amber-500" key={index} onClick={()=>addAnswer(ans)}>{ans} </button>;
        })}
      </div>
    </>
  );
}
