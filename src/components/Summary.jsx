import React from 'react';

export default function Summary({fail, alright, great, score, data, restart}) {

  const scoreStyle = {
    color: score <= 5 ? 'red' : score <= 12 ? '#d58c28' : '#288d27'
  };

  return (
    <>
      <h1>Quiz App</h1>
      <hr />
      <div className='question-container'>
        <br />
        <h2 className='score'>Your score: <span style={scoreStyle}>{score}</span> points</h2>
        <h2 className='questions'>Number of questions: {data.length}</h2>
        <div className='summary'>
          { score <= 5 &&   <>
                              <img src={fail} alt="Stephen A Smith rolling his eyes at you" />
                              <h3>Stephen A thinks you know absolutely NOTHING about the NFL and NBA 😑</h3>
                            </> 
          }
          { score > 5 && score <= 12 &&  <>
                              <img src={alright} alt='Stephen A Smith asking to help you out' />
                              <h3>Stephen A wants you to get your mind right, and try again 🤦🏾‍♂️</h3>
                            </>
          }
          { 
            score > 12 && 
                          <>
                            <img src={great} alt='Stephen A doing his happy dance' /> 
                            <h3>Stephen A approves this message!! 🔥🔥🔥</h3>
                          </>
          }
          <button className="btn" onClick={restart}>Restart</button>
        </div>
      </div>
    </>
  )
}