import React from 'react';
import "./Quiz.css";

const Start = ({ onQuizStart, onQuizExit, chapName }) => {


  return(
    <div className="Quiz-box">
      <div className="info_box">
        <h1 className='chap-name'>{chapName}</h1>
          <div className="info-title"><span>Some Rules of this Quiz</span></div>
          <div className="info-list">
            <div className="info">
              1. If you have selected any answer, it can be undone.
            </div>
            <div className="info">
              2. You can't select any option once time goes off.
            </div>
            <div className="info">
              3. You can't exit from the Quiz while you're playing.
            </div>
            <div className="info">
              4. You'll get marks and result in % on the basis of your correct answers.
            </div>
            <div className="info">
              1. Time is runnig behind the scene.
            </div>
            <div className="info">
              1. Time taken by you will be displayed once you finish the quiz.
            </div>
          </div>
          <div className="buttons">
            <button className="quit" onClick={onQuizExit}>Exit Quiz</button>
            <button className="start" onClick={onQuizStart}>Continue</button>
          </div>
        </div>
    </div>
  );
}

export default Start;