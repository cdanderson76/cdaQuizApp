import { useState, useRef } from 'react'
import { data } from './data';
import './index.css'

import fail from './images/fail.gif';

export default function App() {

  return (
    <>
      <div className='canvas'>
        <Quiz data={data}/>
      </div>
    </>
  )
}

function Quiz({data}) {

  const [ questionIndex, setQuestionIndex ] = useState(0);
  const [ score, setScore ] = useState(0);
  const [ answerLock, setAnswerLock ] = useState(false);

  const current = data[questionIndex];

  const answer1 = useRef(null);
  const answer2 = useRef(null);
  const answer3 = useRef(null);
  const answer4 = useRef(null);

  const option_array = [ answer1, answer2, answer3, answer4 ];

  function checkAnswer(e, ans) {
    if(answerLock === false) {
      if(current.ans === ans) {
        e.target.classList.add('correct');
        setScore(prev => prev + 1);
        setAnswerLock(true);
      } else {
        e.target.classList.add('wrong');
        setAnswerLock(true);
        option_array[data[questionIndex].ans - 1].current.classList.add('correct');
      }
    }
  };

  function nextQuestion() {
    if(answerLock === true) {
      setQuestionIndex(prev => prev + 1);
      option_array.map(answer => {
        answer.current.classList.remove('correct');
        answer.current.classList.remove('wrong');
        setAnswerLock(false);
      })
    }
  }
  
  return (
    <div className='container'>
      { questionIndex !== data.length ?
        <>
          <h1>Quiz App</h1>
          <h3>({current.title})</h3>
          <hr />
          <div className='question-container'>
            <h2>{questionIndex + 1}. {current.question}</h2>
            { current.facility && <img src={current.facility} alt="" /> }
            <ul>
              <li ref={answer1} onClick={(e) => checkAnswer(e, 1)}>{current.option1}</li>
              <li ref={answer2} onClick={(e) => checkAnswer(e, 2)}>{current.option2}</li>
              <li ref={answer3} onClick={(e) => checkAnswer(e, 3)}>{current.option3}</li>
              <li ref={answer4} onClick={(e) => checkAnswer(e, 4)}>{current.option4}</li>
            </ul>
            <button className='btn' onClick={nextQuestion}>
              { questionIndex + 1 === data.length ? 'Submit' : 'Next' }
            </button>
            { questionIndex + 1 !== data.length && <p>question {questionIndex + 1} out of {data.length}</p> }
          </div>
        </> :
        <>
          <h1>Quiz App</h1>
          <hr />
          <div className='question-container'>
            <div className='summary'>
              { score <= 5 && <img src={fail} alt="Stephen A Smith rolling his eyes at you" /> }
              <button className="btn">Restart</button>
            </div>
          </div>
        </>
      }
    </div>
  )
}