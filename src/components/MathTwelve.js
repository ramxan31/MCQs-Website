import React, { Component } from "react";
import McqsHandler from './McqsHandler'
import { Link } from "react-router-dom";
import {ch1mcqs, ch2mcqs, ch3mcqs, ch4mcqs, ch5mcqs, ch6mcqs, ch7mcqs, ch8mcqs, ch9mcqs, ch10mcqs} from '../MCQs/MathNineMcqs'


export default class Maths9th extends Component {
  constructor(props) {
    super(props)
    this.state = {
       Mcqs : '',
       chapterName : '',
       Name : 'mathMcqs',
       change: 'home',
       mcqsClass : 'mcqsContent mathMcqsContentTwelve',
       next : 1
    }
  }

  backHandler = ()=>{
    this.setState({change : 'home', mcqsClass : 'mcqsContent mathMcqsContentTwelve'})
  }

  chapter1Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 1', change: '', mcqsClass : ''})

  }

  chapter2Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 2', change: '', mcqsClass : ''})
  }

  chapter3Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 3', change: '', mcqsClass : ''})
  }

  chapter4Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 4', change: '', mcqsClass : ''})
  }

  chapter5Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 5', change: '', mcqsClass : ''})
  }

  chapter6Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 6', change: '', mcqsClass : ''})
  }

  chapter7Handler = ()=>{
    this.setState({Mcqs : ch1mcqs, chapterName : 'Chapter 7'})
  }


  render() {
    var next = 1;
    return (
      <div>
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
            {this.state.change === 'home' ?
            <div>
              <h1>
                Mathematics Class 12<sup>th</sup> MCQs with Answers
              </h1>

              <p>
                We displays a series of Multiple Choice Questions (MCQs) and
                answers based quizzes for online learning on grade 12 mathematics
                including topics listed as:
              </p>
              <div className='main'>
                <div className='chapter'>
                  <p>Chapter 1:</p>
                  <p className='mainTitle'>
                    Function and Limits
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter1Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 2:</p>
                  <p className='mainTitle'>
                  Differentiation
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter2Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 3:</p>
                  <p className='mainTitle'>Integration</p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter3Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 4:</p>
                  <p className='mainTitle'>
                    Introduction to Analytic Geometry
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter4Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 5:</p>
                  <p className='mainTitle'>Linear inequalities and Linear programming</p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter5Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 6:</p>
                  <p className='mainTitle'>Conic Section</p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter6Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 7:</p>
                  <p className='mainTitle'>
                    Vectors
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter7Handler}>MCQs</button>
                    </a>
                    <a>
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
              </div>
            </div> 
            :
            <div>
            {<McqsHandler next={this.nextHandler} previous = {this.previousHandler} back={this.backHandler} chapName = {this.state.chapterName}  NameClass={this.state.Name} Mcqs = {this.state.Mcqs} />}
            </div>}
          </div>
          
        </div>
        
      </div>
    );
  }
}
