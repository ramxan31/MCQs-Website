import React, { Component } from "react";
import McqsHandler from './McqsHandler'
import { Link } from "react-router-dom";
import { ch1 } from "../MCQs/PhyElevenMcqs";
import { ch2 } from "../MCQs/PhyElevenMcqs";
import { ch3 } from "../MCQs/PhyElevenMcqs";
import { ch4 } from "../MCQs/PhyElevenMcqs";

export default class Maths9th extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Mcqs : '',
      chapterName : '',
      Name : 'phyMcqsEleven',
      change: 'home',
      mcqsClass : 'mcqsContent phyMcqsContentEleven',
    }
  }

  backHandler = ()=>{
    this.setState({change : 'home', mcqsClass : 'mcqsContent phyMcqsContentEleven'})
  }

  chapter1Handler = ()=>{
    this.setState({Mcqs : ch1, chapterName : 'Chapter 1', change: '', mcqsClass : ''})

  }

  chapter2Handler = ()=>{
    this.setState({Mcqs : ch2, chapterName : 'Chapter 2'})
  }

  chapter3Handler = ()=>{
    this.setState({Mcqs : ch3, chapterName : 'Chapter 3'})
  }

  chapter4Handler = ()=>{
    this.setState({Mcqs : ch4, chapterName : 'Chapter 4'})
  }

//   chapter5Handler = ()=>{
//     this.setState({Mcqs : ch5, chapterName : 'Chapter 5'})
//   }

//   chapter6Handler = ()=>{
//     this.setState({Mcqs : ch6, chapterName : 'Chapter 6'})
//   }

//   chapter7Handler = ()=>{
//     this.setState({Mcqs : ch7, chapterName : 'Chapter 7'})
//   }


  render() {
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
          <div  className={this.state.mcqsClass}>
            {this.state.change === 'home' ?
            <div>
            <div>
              <h1>
                Physics Class 11<sup>th</sup> MCQs with Answers
              </h1>

              <p>
                We displays a series of Multiple Choice Questions (MCQs) and
                answers based quizzes for online learning on grade 11 physics
                including topics listed as:
              </p>
              <div className='main phy-main'>
                <div className='chapter'>
                  <p>Chapter 1:</p>
                  <p className='mainTitle'>
                    Measurements
                  </p>
                  <div className='btn'>
                    <a>
                      <button className='mcBtn' onClick={this.chapter1Handler}>MCQs</button>
                    </a>
                    <a id="qz-btn-chap1" href="#qz-chapter1">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 2:</p>
                  <p className='mainTitle'>
                    Vectors and Equilibrium
                  </p>
                  <div className='btn'>
                    <a id="mc-btn-chap2" href="#mcqs">
                      <button className='mcBtn' onClick={this.chapter2Handler}>MCQs</button>
                    </a>
                    <a id="qz-btn-chap2" href="#qz-chapter2">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 3:</p>
                  <p className='mainTitle'>Motion and Force</p>
                  <div className='btn'>
                    <a id="mc-btn-chap3" href="#mcqs">
                      <button className='mcBtn' onClick={this.chapter3Handler}>MCQs</button>
                    </a>
                    <a id="qz-btn-chap3" href="#qz-chapter3">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 4:</p>
                  <p className='mainTitle'>
                    Work and Energy
                  </p>
                  <div className='btn'>
                    <a id="mc-btn-chap4" href="#mcqs">
                      <button className='mcBtn' onClick={this.chapter4Handler}>MCQs</button>
                    </a>
                    <a id="qz-btn-chap4" href="#qz-chapter4">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 5:</p>
                  <p className='mainTitle'>Rotational and Circular motion</p>
                  <div className='btn'>
                    <a id="mc-btn-chap5" href="#mcqs">
                      <button className='mcBtn' onClick={this.chapter5Handler}>MCQs</button>
                    </a>
                    <a id="qz-btn-chap5" href="#qz-chapter5">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 6:</p>
                  <p className='mainTitle'>Fluid Dynamics</p>
                  <div className='btn'>
                    <a id="mc-btn-chap6" href="#mcqs">
                      <button className='mcBtn' onClick={this.chapter6Handler}>MCQs</button>
                    </a>
                    <a id="qz-btn-chap6" href="#qz-chapter6">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 7:</p>
                  <p className='mainTitle'>
                    Oscillation
                  </p>
                  <div className='btn'>
                    <a id="mc-btn-chap7" href="#mcqs">
                      <button className='mcBtn' onClick={this.chapter7Handler}>MCQs</button>
                    </a>
                    <a id="qz-btn-chap7" href="#qz-chapter7">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 8:</p>
                  <p className='mainTitle'>
                    Waves
                  </p>
                  <div className='btn'>
                    <a id="mc-btn-chap8" href="#mcqs">
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a id="qz-btn-chap8" href="#qz-chapter8">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 9:</p>
                  <p className='mainTitle'>
                    Physical optics
                  </p>
                  <div className='btn'>
                    <a id="mc-btn-chap9" href="#mcqs">
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a id="qz-btn-chap9" href="#qz-chapter9">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 10:</p>
                  <p className='mainTitle'>Optical instruments</p>
                  <div className='btn'>
                    <a id="mc-btn-chap10" href="#mcqs">
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a id="qz-btn-chap10" href="#qz-chapter10">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
                </div>
                <div className='chapter'>
                  <p>Chapter 11:</p>
                  <p className='mainTitle'>
                    Heat and Thermodynamics
                  </p>
                  <div className='btn'>
                    <a id="mc-btn-chap11" href="#mcqs">
                      <button className='mcBtn'>MCQs</button>
                    </a>
                    <a id="qz-btn-chap11" href="#qz-chapter11">
                      <button className='qzBtn'>Quiz</button>
                    </a>
                  </div>
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
