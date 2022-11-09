import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "../components/Navitems";
import NineDropdown from "./NineDropdown";
import TenDropdown from "./TenDropdown";
import ElevenDropdown from "./ElevenDropdown";
import TwelveDropdown from "./TwelveDropdown";
import BooksDropdown from "./BooksDropdown"
import {FaBars,FaTimes} from 'react-icons/fa';
import r2logo from '../assets/r2logo.png'

export default function Navbar() {
  const [ninedropdown, setNineDropdown] = useState(false);
  const [tendropdown, setTenDropdown] = useState(false);
  const [elevendropdown, setElevenDropdown] = useState(false);
  const [twelvedropdown, setTwelveDropdown] = useState(false);
  const [booksdropdown, setBooksDropdown] = useState(false);
  const [show, showSet] = useState(false);
  const [navbar, setNavbar] = useState(false)
  const [status, setStatus] = useState('Online! 😍')


  const showHandler = ()=>{
    showSet(!show)
  }
  const hideHandler = ()=>{
    showSet(!show)
  }
  const mobileMenuHide = ()=>{
    showSet(false)
  }
  window.addEventListener('scroll', mobileMenuHide);

  const changeBackground = ()=>{
    if (window.scrollY>=64) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);


  //Show online/offline Status
  window.addEventListener('offline', (e) => { 
    setStatus('offline! 😥')
  });
  window.addEventListener('online', (e) => {
    setStatus('Online! 😍')
  });
 


  return (
    <>
    
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Link to="/" className="logo">
          <div className="navbar-logo"><img className="logoImg" src={r2logo} alt="Logo" /></div>
        </Link>
        <div className="disktop-menu">
        <ul className="nav-menu">
          <li className="nav-item"><Link to='./' className="icon">Home</Link></li>
          {navItems.map((item) => {
            if (item.title === "9th Class") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setNineDropdown(true)}
                  onMouseLeave={() => setNineDropdown(false)}
                >
                  <a className="icon">{item.title}</a>
                  {ninedropdown && <NineDropdown />}
                </li>
              );
            } else if (item.title === "10th Class") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setTenDropdown(true)}
                  onMouseLeave={() => setTenDropdown(false)}
                >
                  <a className="icon">{item.title}</a>
                  {tendropdown && <TenDropdown />}
                </li>
              );
            } else if (item.title === "11th Class") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setElevenDropdown(true)}
                  onMouseLeave={() => setElevenDropdown(false)}
                >
                  <a className="icon">{item.title}</a>
                  {elevendropdown && <ElevenDropdown />}
                </li>
              );
            }else if (item.title === "12th Class") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setTwelveDropdown(true)}
                  onMouseLeave={() => setTwelveDropdown(false)}
                >
                  <a className="icon">{item.title}</a>
                  {twelvedropdown && <TwelveDropdown />}
                </li>
              );
            } else if (item.title === "E-Books") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setBooksDropdown(true)}
                  onMouseLeave={() => setBooksDropdown(false)}
                >
                  <a >{item.title}</a>
                  {booksdropdown && <BooksDropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                {item.title}
              </li>
            );
          })}
        </ul>
        </div>
          {show === true ? <button className="bars" onMouseLeave={showHandler} onMouseEnter={hideHandler}><FaTimes /></button> :<button className="bars" onClick={showHandler}><FaBars /></button>}
        {show === true ?
        <div className="nav-items mobile-menu">
        <ul className="nav-menu">
        <li className="nav-item"><Link to='./'>Home</Link></li>
          {navItems.map((item) => {
            if (item.title === "9th Class") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setNineDropdown(true)}
                  onMouseLeave={() => setNineDropdown(false)}
                >
                  <a>{item.title}</a>
                  {ninedropdown && <NineDropdown />}
                </li>
              );
            } else if (item.title === "10th Class") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setTenDropdown(true)}
                  onMouseLeave={() => setTenDropdown(false)}
                >
                  <a>{item.title}</a>
                  {tendropdown && <TenDropdown />}
                </li>
              );
            } else if (item.title === "11th Class") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setElevenDropdown(true)}
                  onMouseLeave={() => setElevenDropdown(false)}
                >
                  <a>{item.title}</a>
                  {elevendropdown && <ElevenDropdown />}
                </li>
              );
            }else if (item.title === "12th Class") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setTwelveDropdown(true)}
                  onMouseLeave={() => setTwelveDropdown(false)}
                >
                  <a>{item.title}</a>
                  {twelvedropdown && <TwelveDropdown />}
                </li>
              );
            } else if (item.title === "E-Books") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setBooksDropdown(true)}
                  onMouseLeave={() => setBooksDropdown(false)}
                >
                  <a>{item.title}</a>
                  {booksdropdown && <BooksDropdown />}
                </li>
              );
            }
          })}
        </ul>
        </div> : ''}
      </nav>
    </>
  );
}
