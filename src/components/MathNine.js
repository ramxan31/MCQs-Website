import React, { Component } from "react";
import McqsHandler from './McqsHandler'
import { Link } from "react-router-dom";
import {ch1mcqs, ch2mcqs, ch3mcqs, ch4mcqs, ch5mcqs, ch6mcqs, ch7mcqs, ch8mcqs, ch9mcqs, ch10mcqs} from '../MCQs/MathNineMcqs'
import QuizHandler from "./Quiz/QuizHandler";
import Mission from "./Mission";


export default class Maths9th extends Component {
  constructor(props) {
    super(props)
    this.state = {
       Mcqs : '',
       chapterName : '',
       Name : 'mathMcqs',
       change: 'home',
       mcqsClass : 'mcqsContent mathMcqsContent',
    }
  }

  backHandler = ()=>{
    this.setState({change : 'home', mcqsClass : 'mcqsContent mathMcqsContent'})
  }
  QuizExitHandler = (exit)=>{
    this.setState({change : exit , mcqsClass : 'mcqsContent mathMcqsContent'});
  }

  chapter1Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 1', change: 'mcqs', mcqsClass : ''})
  }

  quizch1Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 1', change: 'quiz', mcqsClass : ''})
  }

  chapter2Handler = ()=>{
    this.setState({Mcqs : ch2mcqs, chapterName : 'Chapter 2', change: 'mcqs', mcqsClass : ''})
  }
  quizch2Handler = ()=>{
    this.setState({Mcqs : ch2mcqs, chapterName : 'Chapter 2', change: 'quiz', mcqsClass : ''})
  }

  chapter3Handler = ()=>{
    this.setState({Mcqs : ch3mcqs, chapterName : 'Chapter 3', change: 'mcqs', mcqsClass : ''})
  }
  quizch3Handler = ()=>{
    this.setState({Mcqs : ch3mcqs, chapterName : 'Chapter 3', change: 'quiz', mcqsClass : ''})
  }

  chapter4Handler = ()=>{
    this.setState({Mcqs : ch4mcqs, chapterName : 'Chapter 4', change: 'mcqs', mcqsClass : ''})
  }
  quizch4Handler = ()=>{
    this.setState({Mcqs : ch4mcqs, chapterName : 'Chapter 4', change: 'quiz', mcqsClass : ''})
  }

  chapter5Handler = ()=>{
    this.setState({Mcqs : ch5mcqs, chapterName : 'Chapter 5', change: 'mcqs', mcqsClass : ''})
  }
  quizch5Handler = ()=>{
    this.setState({Mcqs : ch5mcqs, chapterName : 'Chapter 5', change: 'quiz', mcqsClass : ''})
  }

  chapter6Handler = ()=>{
    this.setState({Mcqs : ch6mcqs, chapterName : 'Chapter 6', change: 'mcqs', mcqsClass : ''})
  }
  quizch6Handler = ()=>{
    this.setState({Mcqs : ch6mcqs, chapterName : 'Chapter 6', change: 'quiz', mcqsClass : ''})
  }

  chapter7Handler = ()=>{
    this.setState({Mcqs : ch7mcqs, chapterName : 'Chapter 7', change: 'mcqs', mcqsClass : ''})
  }
  quizch7Handler = ()=>{
    this.setState({Mcqs : ch7mcqs, chapterName : 'Chapter 7', change: 'quiz', mcqsClass : ''})
  }

  chapter8Handler = ()=>{
    this.setState({Mcqs : ch8mcqs, chapterName : 'Chapter 8', change: 'mcqs', mcqsClass : ''})
  }
  quizch8Handler = ()=>{
    this.setState({Mcqs : ch8mcqs, chapterName : 'Chapter 8', change: 'quiz', mcqsClass : ''})
  }

  chapter9Handler = ()=>{
    this.setState({Mcqs : ch9mcqs, chapterName : 'Chapter 9', change: 'mcqs', mcqsClass : ''})
  }
  quizch9Handler = ()=>{
    this.setState({Mcqs : ch9mcqs, chapterName : 'Chapter 9', change: 'quiz', mcqsClass : ''})
  }


  chapter10Handler = ()=>{
    this.setState({Mcqs : ch10mcqs, chapterName : 'Chapter 10', change: 'mcqs', mcqsClass : ''})
  }
  quizch10Handler = ()=>{
    this.setState({Mcqs : ch10mcqs, chapterName : 'Chapter 10', change: 'quiz', mcqsClass : ''})
  }


  quizch11Handler = ()=>{
    console.log('I am working ch11')
  }

  quizch12Handler = ()=>{
    console.log('I am working ch12')
  }

  quizch13Handler = ()=>{
    console.log('I am working ch13')
  }

  quizch14Handler = ()=>{
    console.log('I am working ch14')
  }

  quizch15Handler = ()=>{
    console.log('I am working ch15')
  }

  quizch16Handler = ()=>{
    console.log('I am working ch16')
  }

  quizch17Handler = ()=>{
    console.log('I am working ch17')
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
          <div className="content">
          <div className={this.state.mcqsClass}>
          {this.state.change === 'home' &&
            <div>
              <h1>
                Mathematics Class 9<sup>th</sup> MCQs with Answers
              </h1>

              <p>
                We displays a series of Multiple Choice Questions (MCQs) and
                answers based quizzes for online learning on grade 9 mathematics
                including topics listed as:
              </p>
              <div className='main'>
                <div className='chapter'>
                  <p>Chapter 1:</p>
                  <p className='mainTitle'>
                    Matrices and Determinants
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
                    Real and Complex Numbers
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
                  <p className='mainTitle'>Logarithms</p>
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
                    Algebraic Expressions and Algebraic Formulas
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
                  <p className='mainTitle'>Factorizations</p>
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
                  <p className='mainTitle'>Algebraic Manipulation</p>
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
                    Linear Equations and Inequalities
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
                    Linear Graphs & their Application
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
                    Introduction to Coordinate geometry
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
                <div className='chapter'>
                  <p>Chapter 10:</p>
                  <p className='mainTitle'>Congruent Triangles</p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter10Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch10Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 11:</p>
                  <p className='mainTitle'>
                    Parallelograms and Triangles
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch11Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 12:</p>
                  <p className='mainTitle'>
                    Line Bisectors and Angle Bisectors
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch12Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 13:</p>
                  <p className='mainTitle'>
                    Sides and Angles of a Triangles
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch13Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 14:</p>
                  <p className='mainTitle'>Ratio and Proportion</p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch14Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 15:</p>
                  <p className='mainTitle'>Pythagoras Theorem</p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch15Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 16:</p>
                  <p className='mainTitle'>
                    Theorems Related with Area
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch16Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 17:</p>
                  <p className='mainTitle'>
                    Practical Geometry-Triangles
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn' onClick={this.quizch17Handler}>Quiz</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
          {this.state.change === 'mcqs' &&
          <McqsHandler next={this.nextHandler} previous = {this.previousHandler} back={this.backHandler} chapName = {this.state.chapterName}  NameClass={this.state.Name} Mcqs = {this.state.Mcqs} />
          }
          {this.state.change === 'quiz' &&
          <QuizHandler  exit={this.QuizExitHandler} chapName = {this.state.chapterName} Mcqs = {this.state.Mcqs} />
          }
          </div>
          <div className="mission-section">
          <Mission />
          </div>
          </div>
      </div>  
    );
  }
}
