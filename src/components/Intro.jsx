import React from 'react';
import startLogo from '../images/startlogo.jpg';

export default function Intro({toggleStart}) {
  
  return (
    <div className='container'>
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
};