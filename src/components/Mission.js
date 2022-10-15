import React, { useState } from 'react';
import { FaPlus,FaMinus, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Mission = () => {
    const [icon, setIcon] = useState(true);
    const [click, setClick] = useState();
    const faq = [
        {
            id:1,
            question: "What type of educational material is available at R2school?",
            answer : "Multiple Choice Question of different class are chapter wise available at this platform."
        },
        {
            id:2,
            question: "Do you have uploaded E-Books?",
            answer : "Yes, we have uploaded books of almost related to all MCQs that are available her."
        },
        {
            id:3,
            question: "Do you have MCQs only?",
            answer : "No, I have developed Quizzes for all class chapterwise."
        },
        {
            id:4,
            question: "Will you provide past papers?",
            answer : "Our team is working on past papers stuff, soon will be provided."
        },
    ];
    const showIconHandler = (id)=>{
        setIcon(false);
        setClick(id)
    }
    const hideIconHandler = (id)=>{
        setIcon(true);
        setClick(id);
    }
  return (
    <div>
        <div className='our-mission'>
            <h1>Our expedition</h1>
            <p>We are working on MCQs and Quizzes because every exam depends upon Multiple Choice Questions. Many student don't give special importance to Multiple Choice Questions and couldn't able to achieve good marks. This website will provide the platform to the students where they will be able to prepare their exams by practicing different Quizzes again and again. I am sure, students will be able to attempt many MCQs in their exams after visiting this website.</p>
        </div>
        <div className='FAQ'>
            <h1>FAQ</h1>
            <div className='bg-radish'>
                {faq.map((q)=>{
                return <div key={q.id} className={icon === false & click=== q.id ?'radish' : ''}>
                    <div className={icon === false & click=== q.id ? 'question blue' : 'question'}>
                        <h2 className={icon === false & click=== q.id ? 'white' :''}>{q.question}</h2>
                        <div className={icon === false & click=== q.id ? 'faq-icon white' : 'faq-icon'}  >
                            {icon===false & click=== q.id ? <FaChevronUp onClick={()=>hideIconHandler(q.id)}/> : <FaChevronDown onClick={()=>showIconHandler(q.id)}/>}
                        </div>
                    </div>
                    {icon === false & click=== q.id ? <p className='answer'>{q.answer}</p> : ''}
                </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Mission