import { useState } from 'react';
import { data } from './data';
import Quiz from './components/Quiz';
import startLogo from './images/startlogo.jpg';
import './index.css'

export default function App() {

  const [ isQuizStarted, setIsQuizStarted ] = useState(false);

  function toggleStart() {
    setIsQuizStarted(prev => !prev)
  }

  return (
    <>
      <div className='canvas'>
        { isQuizStarted ? 
          <Quiz data={data}/> :
          <Intro toggleStart={toggleStart}/>
        }
      </div>
    </>
  )
}

function Intro({toggleStart}) {

  const myMargin = {
    margintTop: '1.5em'
  }

  return (
    <div className='container' style={myMargin}>
      <h1>The Quiz App</h1>
      <hr />
      <div className="question-container">
        <img src={startLogo} alt="logo of NFL vs. NBA" />
        <h3 className='subtitle'>🏀NBA vs NFL🏈</h3>
        <p>Let's test that sports knowledge, shall we?</p>
        <button className='start-btn' onClick={toggleStart}>Start Quiz</button>
      </div>
    </div>
  )
} 