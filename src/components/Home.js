import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Mission from "./Mission";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="heading">
          <h2>
            Enhance Your <span>Future</span> With R2school
          </h2>
        </div>
      </div>
      <div className="home-section">
        <div className="aside">
          <div className="ebooks-btn">
            <a target="_blank" href="/books/9th/chemistry.html">
              Download eBooks for Self Study
            </a>
          </div>

          <div className="lftnavtitle">
            9<sup>th</sup> Class Courses
          </div>
          <ul className="left_nav">
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

          <div className="lftnavtitle">
            10<sup>th</sup> Class Courses
          </div>
          <ul className="left_nav">
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

          <div className="lftnavtitle">
            11<sup>th</sup> Class Courses
          </div>
          <ul className="left_nav">
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
          <div className="lftnavtitle">
            12<sup>th</sup> class Courses
          </div>
          <ul className="left_nav">
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
          <div className="home-content-section">
          <h1>
            Multiple Choice Questions and Answers{" "}
            <span className="dw-btn">
              <a href="">PDF Download</a>
            </span>
          </h1>

          <p>
            We displays a series of Multiple Choice Questions (MCQs) to learn
            school level courses for grade 9, grade 10, grade 11, and grade 12.
            We have included courses like Biology, chemistry, Mathematics,
            English, physics and many other courses. Multiple choice questions
            are ordered chapter wise as well as course wise.
          </p>
          <div className="main">
            <h2>
              High School - class 9<sup>th</sup> MCQs &amp; Quizzes
            </h2>
            <div className="main-flex">
              <div className="hm_sb_win">
                <Link to="/9th/physics">
                  <span className="slide_title">
                    9<sup>th</sup> Physics
                  </span>
                </Link>
                <p>
                  <span className="slide_count">1152 MCQs</span>{" "}
                  <span className="slide_count">231 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
                <Link to="/9th/chemistry">
                  <span className="slide_title">
                    9<sup>th</sup> Chemistry
                  </span>
                </Link>
                <p>
                  <span className="slide_count">842 MCQs</span>{" "}
                  <span className="slide_count">169 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
                <Link to="/9th/biology">
                  <span className="slide_title">
                    9<sup>th</sup> Biology
                  </span>
                </Link>
                <p>
                  <span className="slide_count">1855 MCQs</span>{" "}
                  <span className="slide_count">371 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
                <Link to="/9th/mathematics">
                  <span className="slide_title">
                    9<sup>th</sup>
                  </span>{" "}
                  Mathematics
                </Link>
                <p>
                  <span className="slide_count">139 MCQs</span>{" "}
                  <span className="slide_count">28 Quiz</span>
                </p>
              </div>
            </div>
          </div>
          <div className="main">
            <h2>
              High School - class 10<sup>th</sup> MCQs &amp; Quizzes
            </h2>
            <div className="main-flex">
              <div className="hm_sb_win">
                <Link to="/10th/physics">
                  <span className="slide_title">
                    10<sup>th</sup> Physics
                  </span>
                </Link>
                <p>
                  <span className="slide_count">1152 MCQs</span>{" "}
                  <span className="slide_count">231 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
                <Link to="/10th/chemistry">
                  <span className="slide_title">
                    10<sup>th</sup> Chemistry
                  </span>
                </Link>
                <p>
                  <span className="slide_count">842 MCQs</span>{" "}
                  <span className="slide_count">169 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
                <Link to="/10th/biology">
                  <span className="slide_title">
                    10<sup>th</sup> Biology
                  </span>
                </Link>
                <p>
                  <span className="slide_count">1855 MCQs</span>{" "}
                  <span className="slide_count">371 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
                <Link to="/10th/mathematics">
                  <span className="slide_title">
                    10<sup>th</sup>
                  </span>{" "}
                  Mathematics
                </Link>
                <p>
                  <span className="slide_count">139 MCQs</span>{" "}
                  <span className="slide_count">28 Quiz</span>
                </p>
              </div>
            </div>
          </div>

          <div className="main">
            <h2>
              High School - class 11<sup>th</sup> MCQs &amp; Quizzes
            </h2>
            <div className="main-flex">
              <div className="hm_sb_win">
                <Link to="/11th/physics">
                  <span className="slide_title">
                    11<sup>th</sup> Physics
                  </span>
                </Link>
                <p>
                  <span className="slide_count">1152 MCQs</span>{" "}
                  <span className="slide_count">231 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
                <Link to="/11th/chemistry">
                  <span className="slide_title">
                    11<sup>th</sup> Chemistry
                  </span>
                </Link>
                <p>
                  <span className="slide_count">842 MCQs</span>{" "}
                  <span className="slide_count">169 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
                <Link to="/11th/biology">
                  <span className="slide_title">
                    11<sup>th</sup> Biology
                  </span>
                </Link>
                <p>
                  <span className="slide_count">1855 MCQs</span>{" "}
                  <span className="slide_count">371 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
                <Link to="/11th/mathematics">
                  <span className="slide_title">
                    11<sup>th</sup>
                  </span>{" "}
                  Mathematics
                </Link>
                <p>
                  <span className="slide_count">139 MCQs</span>{" "}
                  <span className="slide_count">28 Quiz</span>
                </p>
              </div>
            </div>
          </div>

          <div className="main">
            <h2>
              High School - class 12<sup>th</sup> MCQs &amp; Quizzes
            </h2>
            <div className="main-flex">
              <div className="hm_sb_win">
                <Link to="/12th/physics">
                  <span className="slide_title">
                    12<sup>th</sup> Physics
                  </span>
                </Link>
                <p>
                  <span className="slide_count">1152 MCQs</span>{" "}
                  <span className="slide_count">231 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
              <Link to="/12th/chemistry">
                  <span className="slide_title">
                    12<sup>th</sup> Chemistry
                  </span>
                </Link>
                <p>
                  <span className="slide_count">842 MCQs</span>{" "}
                  <span className="slide_count">169 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
              <Link to="/12th/biology">
                  <span className="slide_title">
                    12<sup>th</sup> Biology
                  </span>
                </Link>
                <p>
                  <span className="slide_count">1855 MCQs</span>{" "}
                  <span className="slide_count">371 Quiz</span>
                </p>
              </div>
              <div className="hm_sb_win">
              <Link to="/12th/mathematics">
                  <span className="slide_title">
                    12<sup>th</sup>
                  </span>{" "}
                  Mathematics
                </Link>
                <p>
                  <span className="slide_count">139 MCQs</span>{" "}
                  <span className="slide_count">28 Quiz</span>
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className="mission-section">
            <Mission />
          </div>
        </div>
      </div>
    </div>
  );
}
