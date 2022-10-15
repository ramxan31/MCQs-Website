import React, { useEffect, useState } from 'react';
import "./Quiz.css";
import { formatTime } from './Time';

const End = ({ results, data, onReset, onAnswersCheck, time, exit }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
      <div className="Quiz-box">
        <div className="result-content">
          <h3>Your Marks</h3>
          <div>
            <p>{correctAnswers} out of {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Your Time:</strong> <span>{formatTime(time)}</span></p>
          </div>
          <div>
          <button className="answer-button" onClick={onAnswersCheck}>Check your answers</button>
          <button className="retake-button" onClick={onReset}>Retake Quiz</button>
          <button className="exit-button" onClick={exit}>Exit Quiz</button>
          </div>
        </div>
      </div>
  );
}

export default End;