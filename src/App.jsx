import { useState } from 'react'
import { data } from './data';
import './index.css'
import delta from './images/delta-center.jpg';

export default function App() {

  return (
    <>
      <div className='canvas'>
        <Quiz data={data} />
      </div>
    </>
  )
}

function Quiz({data}) {

  const [ questionIndex, setQuestionIndex ] = useState(0);

  const current = data[questionIndex];

  function checkAnswer(e, ans) {
    if(current.ans === ans) {
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('wrong');
    }
  }
  
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <h3>(Stadiums and Arenas)</h3>
      <hr />
      <div className='question-container'>
        <h2>{current.question}</h2>
        <img src={delta} alt="" />
        <ul>
          <li  onClick={(e) => checkAnswer(e, 1)}>{current.option1}</li>
          <li  onClick={(e) => checkAnswer(e, 2)}>{current.option2}</li>
          <li  onClick={(e) => checkAnswer(e, 3)}>{current.option3}</li>
          <li  onClick={(e) => checkAnswer(e, 4)}>{current.option4}</li>
        </ul>
        <button className='btn'>Next</button>
      </div>
    </div>
  )
}