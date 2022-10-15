import "./Quiz.css";

import React, { useState, useEffect } from 'react';
import Start from './Start';
import Question from './Question';
import End from './End';
import Modal from './Modal';

let interval;

const QuizHandler = (props) => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  const exit = 'home';
  const mcq = props.Mcqs;
  const chapName = props.chapName;

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizExitHandler = ()=>{
    props.exit(exit);
  }

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <div >
      {step === 1 && <Start onQuizStart={quizStartHandler} onQuizExit = {quizExitHandler} chapName={chapName} />}
      {step === 2 && <Question 
        data={mcq[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={mcq.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={mcq}
        onReset={resetClickHandler}
        onAnswersCheck={() => {setShowModal(true);}}
        time={time}
        exit={quizExitHandler}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={mcq}
      />}
    </div>
  );
}

export default QuizHandler;