import React, { Component } from "react";
import McqsHandler from './McqsHandler';
import QuizHandler from "./Quiz/QuizHandler";
import { Link } from "react-router-dom";
import { ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch1mcqs, ch2mcqs, ch3mcqs, ch4mcqs, ch6mcqs, ch7mcqs, ch8mcqs, ch9mcqs } from "../MCQs/PhyTenMcqs";


export default class Maths9th extends Component {
  constructor(props) {
    super(props)
    this.state = {
       Mcqs : false,
       chapterName : '',
       Name : 'phyMcqs',
       change: 'home',
       mcqsClass : 'mcqsContent phyMcqsContent'
    }
  }
  backHandler = ()=>{
    this.setState({change : 'home', mcqsClass : 'mcqsContent phyMcqsContent'})
  }
  QuizExitHandler = (exit)=>{
    this.setState({change : exit , mcqsClass : 'mcqsContent mathMcqsContent'});
  }

  chapter1Handler = ()=>{
    this.setState({Mcqs : ch1, chapterName : 'Chapter 1', change: 'mcqs', mcqsClass : ''})
  }
  quizch1Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 1', change: 'quiz', mcqsClass : ''})
  }

  chapter2Handler = ()=>{
    this.setState({Mcqs : ch2, chapterName : 'Chapter 2', change: 'mcqs', mcqsClass : ''})
  }
  quizch2Handler = ()=>{
    this.setState({Mcqs : ch2mcqs, chapterName : 'Chapter 2', change: 'quiz', mcqsClass : ''})
  }

  chapter3Handler = ()=>{
    this.setState({Mcqs : ch3, chapterName : 'Chapter 3', change: 'mcqs', mcqsClass : ''})
  }
  quizch3Handler = ()=>{
    this.setState({Mcqs : ch3mcqs, chapterName : 'Chapter 3', change: 'quiz', mcqsClass : ''})
  }

  chapter4Handler = ()=>{
    this.setState({Mcqs : ch4, chapterName : 'Chapter 4', change: 'mcqs', mcqsClass : ''})
  }
  quizch4Handler = ()=>{
    this.setState({Mcqs : ch4mcqs, chapterName : 'Chapter 4', change: 'quiz', mcqsClass : ''})
  }

  chapter5Handler = ()=>{
    this.setState({Mcqs : ch5, chapterName : 'Chapter 5', change: 'mcqs', mcqsClass : ''})
  }
  quizch5Handler = ()=>{
    this.setState({Mcqs : ch6mcqs, chapterName : 'Chapter 6', change: 'quiz', mcqsClass : ''})
  }

  chapter6Handler = ()=>{
    this.setState({Mcqs : ch6, chapterName : 'Chapter 6', change: 'mcqs', mcqsClass : ''})
  }
  quizch6Handler = ()=>{
    this.setState({Mcqs : ch6mcqs, chapterName : 'Chapter 6', change: 'quiz', mcqsClass : ''})
  }

  chapter7Handler = ()=>{
    this.setState({Mcqs : ch7, chapterName : 'Chapter 7', change: 'mcqs', mcqsClass : ''})
  }
  quizch7Handler = ()=>{
    this.setState({Mcqs : ch7mcqs, chapterName : 'Chapter 7', change: 'quiz', mcqsClass : ''})
  }

  chapter8Handler = ()=>{
    this.setState({Mcqs : ch8, chapterName : 'Chapter 8', change: 'mcqs', mcqsClass : ''})
  }
  quizch8Handler = ()=>{
    this.setState({Mcqs : ch8mcqs, chapterName : 'Chapter 8', change: 'quiz', mcqsClass : ''})
  }

  chapter9Handler = ()=>{
    this.setState({Mcqs : ch9, chapterName : 'Chapter 9', change: 'mcqs', mcqsClass : ''})
  }
  quizch9Handler = ()=>{
    this.setState({Mcqs : ch9mcqs, chapterName : 'Chapter 9', change: 'quiz', mcqsClass : ''})
  }

  render() {
    return (
        <div className='home-section'>
          <div className='aside'>
            <div className='ebooks-btn'>
              <a href="/books/9th/chemistry.html">
                Download eBooks for Self Study
              </a>
            </div>

            <div className='lftnavtitle'>
              9<sup>th</sup> Class Courses
            </div>
            <ul className=''>
              <li>
                <Link to="books/9th/chemistry">
                  Chemistry Class 9<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="9th/chemistry/mcqs">
                  Chemistry Class 9<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="9th/chemistry/quiz">
                  Chemistry Class 9<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/9th/biology">
                  Biology Class 9<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="9th/biology/mcqs">
                  Biology Class 9<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="9th/biology/quiz">
                  Biology Class 9<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/9th/physics">
                  Physics Class 9<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="9th/physics/mcqs">
                  Physics Class 9<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="9th/physics/quiz">
                  Physics Class 9<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/9th/mathematics">
                  Mathematics Class 9<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="9th/mathematics/mcqs">
                  Mathematics Class 9<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="9th/mathematics/quiz">
                  Mathematics Class 9<sup>th</sup> Quiz
                </Link>
              </li>
            </ul>

            <div className='lftnavtitle'>
              10<sup>th</sup> Class Courses
            </div>
            <ul className=''>
              <li>
                <Link to="books/10th/chemistry">
                  Chemistry Class 10<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="10th/chemistry/mcqs">
                  Chemistry Class 10<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="10th/chemistry/quiz">
                  Chemistry Class 10<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/10th/biology">
                  Biology Class 10<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="10th/biology/mcqs">
                  Biology Class 10<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="10th/biology/quiz">
                  Biology Class 10<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/10th/physics">
                  Physics Class 10<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="10th/physics/mcqs">
                  Physics Class 10<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="10th/physics/quiz">
                  Physics Class 10<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/10th/mathematics">
                  Mathematics Class 10<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="10th/mathematics/mcqs">
                  Mathematics Class 10<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="10th/mathematics/quiz">
                  Mathematics Class 10<sup>th</sup> Quiz
                </Link>
              </li>
            </ul>

            <div className='lftnavtitle'>
              11<sup>th</sup> Class Courses
            </div>
            <ul className=''>
              <li>
                <Link to="books/11th/chemistry">
                  Chemistry Class 11<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="11th/chemistry/mcqs">
                  Chemistry Class 11<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="11th/chemistry/quiz">
                  Chemistry Class 11<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/11th/biology">
                  Biology Class 11<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="11th/biology/mcqs">
                  Biology Class 11<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="11th/biology/quiz">
                  Biology Class 11<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/11th/physics">
                  Physics Class 11<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="11th/physics/mcqs">
                  Physics Class 11<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="11th/physics/quiz">
                  Physics Class 11<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/11th/mathematics">
                  Mathematics Class 11<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="11th/mathematics/mcqs">
                  Mathematics Class 11<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="11th/mathematics/quiz">
                  Mathematics Class 11<sup>th</sup> Quiz
                </Link>
              </li>
            </ul>
            <div className='lftnavtitle'>
              12<sup>th</sup> className Courses
            </div>
            <ul className=''>
              <li>
                <Link to="books/12th/chemistry">
                  Chemistry Class 12<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="12th/chemistry/mcqs">
                  Chemistry Class 12<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="12th/chemistry/quiz">
                  Chemistry Class 12<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/12th/biology">
                  Biology Class 12<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="12th/biology/mcqs">
                  Biology Class 12<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="12th/biology/quiz">
                  Biology Class 12<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/12th/physics">
                  Physics Class 12<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="12th/physics/mcqs">
                  Physics Class 12<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="12th/physics/quiz">
                  Physics Class 12<sup>th</sup> Quiz
                </Link>
              </li>
              <li>
                <Link to="books/12th/mathematics">
                  Mathematics Class 12<sup>th</sup> eBook
                </Link>
              </li>
              <li>
                <Link to="12th/mathematics/mcqs">
                  Mathematics Class 12<sup>th</sup> MCQs
                </Link>
              </li>
              <li>
                <Link to="12th/mathematics/quiz">
                  Mathematics Class 12<sup>th</sup> Quiz
                </Link>
              </li>
            </ul>
          </div>
          <div className={this.state.mcqsClass}>
            {this.state.change === 'home' &&
              <div>
              <h1>
                Physics Class 10<sup>th</sup> MCQs with Answers
              </h1>

              <p>
                We displays a series of Multiple Choice Questions (MCQs) and
                answers based quizzes for online learning on grade 10 physics
                including topics listed as:
              </p>
              <div className='main phy-main'>
                <div className='chapter'>
                  <p>Chapter 1:</p>
                  <p className='mainTitle'>
                    Simple Harmonic Motion and Waves
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter1Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch1Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 2:</p>
                  <p className='mainTitle'>
                    Sound
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter2Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch2Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 3:</p>
                  <p className='mainTitle'>Geometrical optics</p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter3Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch3Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 4:</p>
                  <p className='mainTitle'>
                    Electrostatics
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter4Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch4Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 5:</p>
                  <p className='mainTitle'>Current Electricity</p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter5Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch5Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 6:</p>
                  <p className='mainTitle'>Electromagnetism</p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter6Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch6Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 7:</p>
                  <p className='mainTitle'>
                    Basic Electronics
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter7Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch7Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 8:</p>
                  <p className='mainTitle'>
                    Information technology
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter8Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch8Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 9:</p>
                  <p className='mainTitle'>
                    Atomic and Nuclear Physics
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter9Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch9Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
              </div>
              </div>
              }
              {this.state.change === 'mcqs' &&  <McqsHandler back={this.backHandler} chapName = {this.state.chapterName} NameClass={this.state.Name} Mcqs = {this.state.Mcqs} />
              }
              {this.state.change === 'quiz' &&  <QuizHandler  exit={this.QuizExitHandler} chapName = {this.state.chapterName} Mcqs = {this.state.Mcqs} />
              }
          </div>
        </div>
    );
  }
}
