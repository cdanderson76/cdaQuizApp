import { useState } from 'react'
import './index.css'
import delta from './images/delta-center.jpg';

export default function App() {

  return (
    <>
      <div className='canvas'>
        <Quiz />
      </div>
    </>
  )
}

function Quiz() {
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <h3>(Stadiums and Arenas)</h3>
      <hr />
      <QuizItem />
    </div>
  )
}

function QuizItem() {
  return (
    <div className='question-container'>
      <h2>What NBA basketball team host home games in this arena?</h2>
      <img src={delta} alt="" />
      <ul>
        <li>Chicago Bulls</li>
        <li>Utah Jazz</li>
        <li>Oklahoma City Thunder</li>
        <li>Phoenix Suns</li>
      </ul>
      <button className='btn'>Next</button>
    </div>
  )
}
