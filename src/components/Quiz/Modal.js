import React from "react";
import "./Quiz.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ onClose, results, data }) => {
  return (
    <div className="answer-box">
      <div className="modal-content">
        <div className="modal-card-head">
          <p className="modal-card-title">Your Answers</p>
          <button className="close-modal" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <section className="modal-card-body">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="answer-list">
                <p>
                  <strong>{<span dangerouslySetInnerHTML={{__html :result.q}} />}</strong>
                </p>
                <p
                  className={
                    result.a === data[i].answer
                      ? "has-background-success has-text-white p-2"
                      : "has-background-danger has-text-white p-2"
                  }
                >
                  Your answer: {<span dangerouslySetInnerHTML={{__html :result.a}} />}
                </p>
                {result.a !== data[i].answer && (
                  <p className="has-background-link has-text-white p-2">
                    Correct answer: {<span dangerouslySetInnerHTML={{__html :data[i].answer}} />}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Modal;
