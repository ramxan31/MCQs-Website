import React, {useState} from 'react';
import './Topbar.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


export default function Topbar() {
  const [status, setStatus] = useState('Online! 😍')
  const [internetAlert, setInternetAlert] = useState('')
  const[alertClass, setAlertClass] = useState('')

  
   //Show online/offline Status
   window.addEventListener('offline', (e) => { 
    setStatus('offline! 😥')
    setInternetAlert('Please check your internet connection')
    setAlertClass('internet-status-error')
  });
  window.addEventListener('online', (e) => {
    setStatus('Online! 😍')
    setInternetAlert('Internet connection restored 🤗', setInterval(() => {
      setInternetAlert('')
    }, 5000))
    setAlertClass('internet-status-succes')
  });


    let d = new Date();
    let time = d.getHours +''+d.getMinutes()+''+d.getSeconds();
  return (
    <div className='topbar'>
        <div className='box1'>
            <p>Welcome to <span>R2school</span> complete MCQs solution <button type='button' className='status-btn'>{status}</button></p>
        </div>
        <div className={alertClass}>{internetAlert}</div>
        <div className='box2'>
            <a>
            <span className='social'><FaFacebookSquare /></span>
            </a>
            <span className='social'><FaLinkedin/></span>
            <span className='social'><FaTwitterSquare /></span>
        </div>
    </div>
  )
}
