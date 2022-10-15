import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <nav className="navbar container">
            <ul className="navbar-items">
                <i className="close far fa-times"></i>
                <li><i className="far fa-home"></i><Link to="/">Home</Link></li>

                {/* <!-- 9th --> */}

                <li><i className="far fa-book-open"></i><a>9<sup>th</sup> Class</a>
                    <div className="sub-menu">
                        <ul>
                            <li><i className="fal fa-atom"></i><Link to="9th/chemistry">Chemistry</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="9th/chemistry/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="9th/chemistry/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="fal fa-turtle"></i><a href="9th/biology.html">Biology</a>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="9th/biology/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="9th/biology/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="far fa-satellite"></i><Link to="9th/physics">Physics</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="9th/physics/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="9th/physics/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="fas fa-calculator-alt"></i><Link to="9th/mathematics">Mathematics</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="9th/mathematics/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="9th/mathematics/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                {/* <!-- 10th --> */}

                <li><i className="far fa-book-open"></i><a>10<sup>th</sup> Class</a>
                    <div className="sub-menu">
                        <ul>
                            <li><i className="fal fa-atom"></i><Link to="10th/chemistry">Chemistry</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="10th/chemistry/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="10th/chemistry/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="fal fa-turtle"></i><a href="10th/biology.html">Biology</a>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="10th/biology/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="10th/biology/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="far fa-satellite"></i><Link to="10th/physics">Physics</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="10th/physics/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="10th/physics/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="fas fa-calculator-alt"></i><Link to="10th/mathematics">Mathematics</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="10th/mathematics/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="10th/mathematics/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                {/* <!-- 11th --> */}

                <li><i className="far fa-book-open"></i><a>11<sup>th</sup> Class</a>
                    <div className="sub-menu">
                        <ul>
                            <li><i className="fal fa-atom"></i><Link to="11th/chemistry">Chemistry</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="11th/chemistry/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="11th/chemistry/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="fal fa-turtle"></i><a href="11th/biology.html">Biology</a>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="11th/biology/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="11th/biology/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="far fa-satellite"></i><Link to="11th/physics">Physics</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="11th/physics/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="11th/physics/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="fas fa-calculator-alt"></i><Link to="11th/mathematics">Mathematics</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="11th/mathematics/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="11th/mathematics/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                {/* <!-- 12th --> */}

                <li><i className="far fa-book-open"></i><a>12<sup>th</sup> Class</a>
                    <div className="sub-menu">
                        <ul>
                            <li><i className="fal fa-atom"></i><Link to="12th/chemistry">Chemistry</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="12th/chemistry/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="12th/chemistry/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="fal fa-turtle"></i><a href="12th/biology.html">Biology</a>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="12th/biology/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="12th/biology/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="far fa-satellite"></i><Link to="12th/physics">Physics</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="12th/physics/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="12th/physics/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><i className="fas fa-calculator-alt"></i><Link to="12th/mathematics">Mathematics</Link>
                                <div className="sub-menu1">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="12th/mathematics/mcqs">MCQs</Link></li>
                                        <li><i className="fal fa-atom"></i><Link to="12th/mathematics/quiz">Quiz</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                {/* <!-- Books --> */}

                <li><i className="far fa-book"></i><a >E-Books</a>
                    <div className="sub-menu books-submenu">
                        <ul>
                            {/* <!-- 9th --> */}

                            <li><a>9<sup>th</sup> Class</a>
                                <div className="sub-menu2">
                                    <ul>
                                        <li><i className="fal fa-atom"></i><Link to="books/9th/chemistry">Chemistry</Link></li>
                                        <li><i className="fal fa-turtle"></i><Link to="books/9th/biology">Biology</Link></li>
                                        <li><i className="far fa-satellite"></i><Link to="books/9th/physics">Physics</Link></li>
                                        <li><i className="fas fa-calculator-alt"></i><Link to="books/9th/mathematics">Mathematics</Link></li>
                                    </ul>
                                </div>
                            </li>

                            {/* <!-- 10th --> */}

                            <li><a>10<sup>th</sup> Class</a>
                                <div className="sub-menu2">
                                <ul>
                                        <li><i className="fal fa-atom"></i><Link to="books/10th/chemistry">Chemistry</Link></li>
                                        <li><i className="fal fa-turtle"></i><Link to="books/10th/biology">Biology</Link></li>
                                        <li><i className="far fa-satellite"></i><Link to="books/10th/physics">Physics</Link></li>
                                        <li><i className="fas fa-calculator-alt"></i><Link to="books/10th/mathematics">Mathematics</Link></li>
                                    </ul>
                                </div>
                            </li>

                            {/* <!-- 11th --> */}

                            <li><a>11<sup>th</sup> Class</a>
                                <div className="sub-menu2">
                                <ul>
                                        <li><i className="fal fa-atom"></i><Link to="books/11th/chemistry">Chemistry</Link></li>
                                        <li><i className="fal fa-turtle"></i><Link to="books/11th/biology">Biology</Link></li>
                                        <li><i className="far fa-satellite"></i><Link to="books/11th/physics">Physics</Link></li>
                                        <li><i className="fas fa-calculator-alt"></i><Link to="books/11th/mathematics">Mathematics</Link></li>
                                    </ul>
                                </div>
                            </li>

                            {/* <!-- 12th --> */}

                            <li><a>12<sup>th</sup> Class</a>
                                <div className="sub-menu2">
                                <ul>
                                        <li><i className="fal fa-atom"></i><Link to="books/12th/chemistry">Chemistry</Link></li>
                                        <li><i className="fal fa-turtle"></i><Link to="books/12th/biology">Biology</Link></li>
                                        <li><i className="far fa-satellite"></i><Link to="books/12th/physics">Physics</Link></li>
                                        <li><i className="fas fa-calculator-alt"></i><Link to="books/12th/mathematics">Mathematics</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <a href="https//ilmkajalwa.com" className="logo">OnlineKnowledge</a>
            <div className="mobile">
                <i  id="bar" className="fas fa-outdent"></i>
            </div>
            </nav>
    </div>
  )
}
