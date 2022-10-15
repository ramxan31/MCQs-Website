import React, { useEffect, useState } from "react";
import { FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Pagination from './Pagination'


export default function McqsHandler(props) {
  const [page, pageSet] = useState(1);
  const [selected, setSelected] = useState();
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(5)
  const [mcqs, setMcqs] = useState([])
  const [action, setAction] = useState(false)
  const [arrayLength, setArrayLength] = useState(0)

  useEffect(()=>{
    setMcqs(props.Mcqs)
  },[mcqs])


  const paginationHandler = (data) =>{
    const {startIndex, endIndex} = data
    setStartIndex(startIndex);
    setEndIndex(endIndex)
  }

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
        {mcqs.slice(startIndex, endIndex).map((ques, index) => {
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
        <Pagination arrayLength = {mcqs.length} paginationHandler={paginationHandler} />
      </div>
    </div>
  );
}
