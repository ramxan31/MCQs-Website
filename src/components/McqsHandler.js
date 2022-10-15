import { useEffect, useState } from "react";
import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function McqsHandler(props) {
  const [page, pageSet] = useState(1);
  const [selected, setSelected] = useState();
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(5)
  const [mcqs, setMcqs] = useState([])
  const [action, setAction] = useState(false)

  useEffect(()=>{
    setMcqs(props.Mcqs)
  },[])

  const arr = mcqs.slice(start,end)

  const nextHandler = () => {
    if (end < mcqs.length-1) {
      setStart(start + 5);
      setEnd(end + 5)
      pageSet(page + 1);
    }
    if (page < mcqs.length) {
    }
  };
  const backHandler = () => {
    if (start > 0) {
      setStart(start - 5);
      setEnd(end - 5)
    }
    if (page > 1) {
      pageSet(page - 1);
    }
  };

  const toggleSelected = (id) => {
    setSelected(id);
    setAction(!action);
  };

  return (
    <div className={props.NameClass}>
      <div className="btn-container">
        <button className="normal" onClick={props.back}>
          <FaTimes />
        </button>
      </div>
      <h2>{props.chapName}</h2>
      <div className="mcqs-box">
        {arr.map((ques, index) => {
          return (
            <div className="" key={index}>
              <h4 className="ques-text">
                <span>{ques.numb}.</span>
                <span dangerouslySetInnerHTML={{__html :ques.question}} />
              </h4>
              <ol>
                {ques.options.map((opt, i) => {
                  return (
                    <li key={i} className="option">
                      <span dangerouslySetInnerHTML={{__html : opt}} />
                    </li>
                  );
                })}
              </ol>
              <button className="show-answer" onClick={()=>toggleSelected(ques.numb)}>{action && selected === ques.numb ? "Hide Answer" : "Show Answer"}</button>
              <div className="ans">
                {action && selected === ques.numb ?
                <p>
                  correct answer is: <span dangerouslySetInnerHTML={{__html : ques.answer}} />
                </p>
                : ''
                }
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination-container">
        <button onClick={backHandler} className="next">
          <FaAngleLeft />
          Prev
        </button>
        <button className="next">{page}</button>
        <button onClick={nextHandler} className="next">
          Next
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
