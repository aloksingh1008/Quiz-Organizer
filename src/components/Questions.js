import { useEffect, useState } from "react";

export default function Questions({ ques, addAnswer, time }) {
  const [timeleft, updateTimeleft] = useState(time * 1000);

  useEffect(() => {
    const timmer = setTimeout(() => {
      addAnswer(null);
    }, time * 1000);
    return () => {
      clearTimeout(timmer);
    };
  }, [time, addAnswer]);
  useEffect(() => {
    const interval = setInterval(() => {
      updateTimeleft((prev) => prev - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [time, addAnswer]);

  return (
    <>
      <progress max={time * 1000} value={timeleft} />
      <div className=" mt-4 mb-8 py-2 px-4">{ques.question}</div>
      <div>
        {ques.answers.map((ans, index) => {
          return (
            <button
              className="bg-purple-700 shadow-xl rounded-full w-3/4 mx-auto my-2 py-2 px-4 hover:bg-amber-500"
              key={index}
              onClick={() => addAnswer(ans)}
            >
              {ans}{" "}
            </button>
          );
        })}
      </div>
    </>
  );
}
