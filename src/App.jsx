import { useState } from 'react';
import { data } from './data';
import Quiz from './components/Quiz';
import Intro from './components/Intro'
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
};