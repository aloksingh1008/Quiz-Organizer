export default function RecentAddedQuizBlock({ allQuiz }) {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <div className="w-4/5 bg-purple-600 rounded-lg text-start flex flex-row">
          <div className="m-2 w-3/4 text-center">Title</div>
          <div className="m-2 w-1/4 text-center">Code</div>
        </div>
      </div>
      {allQuiz.map((quiz, index) => {
        return (
          <button className="w-full flex justify-center" key={index}>
            <div className="w-4/5 bg-stone-200 text-start flex flex-row">
              <div className="m-2 w-3/4">{quiz.title}</div>
              <div className="m-2 w-1/4 text-center">{quiz.code}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
