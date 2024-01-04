import CreateNewQuiz from './components/CreateNewQuiz.js';
import createquiz from './images/createquiz.jpg'
import { useState } from 'react';
function App() {
  const [whichQuiz, setQuiz] = useState(null);

  function handleCreateQuiz(){
    setQuiz('createquiz');
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline justify-center">
          Quiz Organizer
        </h1>
      </div>
      {whichQuiz===null && <div className="flex flex-row">
        <div className="w-1/2 text-center">
          <img src={createquiz} alt="computer" className='w-1/2 m-auto my-10'/>
          <button onClick={handleCreateQuiz}>+ Create Quiz</button>
        </div>
        <div className="w-1/2 text-center">Take Quiz</div>

      </div>}
      {whichQuiz==='createquiz' && <CreateNewQuiz />}
    </>
  );
}

export default App;
