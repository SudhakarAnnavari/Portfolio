import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='r-icons'>
        <a href="https://www.linkedin.com/in/sudhakar-annavari-939369254/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='f-icon' />
        </a>
        <a href="https://github.com/SudhakarAnnavari?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub className='f-icon' />
        </a>
        <a href="https://www.instagram.com/iam_sudhakar07?igsh=MWJ4dTZyOTJxNWEzaw==" target="_blank" rel="noopener noreferrer">
          <FaSquareInstagram className='f-icon' />
        </a>
        <a href="mailto:annavrisudhakar@gmail.com" target="_blank" rel="noopener noreferrer">
           <IoMdMail className='f-icon'/>
        </a>
    
      </div>
      <h1 className='f-h'>© 2023 Copyright: Annavari Sudhakar</h1>
    </div>
  );
};

export default Footer;
