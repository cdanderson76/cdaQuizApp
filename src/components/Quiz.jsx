import React from 'react'
import { useState, useRef } from 'react';
import Loading from './Loading';
import Summary from './Summary';

import fail from '../images/fail.gif';
import alright from '../images/alright.gif';
import great from '../images/great.gif';

export default function Quiz({data}) {

      const [ questionIndex, setQuestionIndex ] = useState(0);
      const [ score, setScore ] = useState(0);
      const [ isLoading, setIsLoading ] = useState(false);
      const [ answerLock, setAnswerLock ] = useState(false);
    
      const current = data[questionIndex];
    
      const answer1 = useRef(null);
      const answer2 = useRef(null);
      const answer3 = useRef(null);
      const answer4 = useRef(null);
    
      const option_array = [ answer1, answer2, answer3, answer4 ];
    
      if(isLoading) {
        return (
          <Loading />
        )
      }
    
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
      };
    
      function submitAns() {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          nextQuestion();
        }, 2000)
      }
    
      function restart() {
        setIsLoading(true)
        setTimeout(() => {
          setScore(0);
          setQuestionIndex(0);
          setIsLoading(false);
        }, 2000);
      };
      
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
                { questionIndex + 1 === data.length ?
                  <>
                    <button className='btn' onClick={submitAns}>
                      Submit
                    </button>
                  </> :
                  <>
                    <button className='btn' onClick={nextQuestion}>
                      Next
                    </button>
                  </>
                }
                { questionIndex + 1 !== data.length && <p>question {questionIndex + 1} out of {data.length}</p> }
              </div>
            </> :
            <Summary fail={fail}
                     alright={alright}
                     great={great}
                     score={score}
                     data={data}
                     restart={restart}
            />
          }
        </div>
      )
};
  
