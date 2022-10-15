import React, { useState, useEffect, useRef } from "react";
import "./Quiz.css";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="Quiz-box">
      <div className="quiz-content">
        <h2 className="question">
          <span>{data.numb}.</span>
          {<span dangerouslySetInnerHTML={{__html :data.question}} />}
        </h2>
        <div className="control" ref={radiosWrapper}>
          {data.options.map((choice, i) => (
            <label className="radio" key={i}>
              <input
                type="radio"
                name="answer"
                value={choice}
                onChange={changeHandler}
              />
              {<span dangerouslySetInnerHTML={{__html :choice}} />}
            </label>
          ))}
        </div>
        {error && <div className="text-danger">{error}</div>}
        <div className="button-container">
          <button className="next-button" onClick={nextClickHandler}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
