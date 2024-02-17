import React from 'react'
import './Skills.css'
import html from '../images/html.png'
import bootstrap from'../images/bootstrap-logo.png'
import css from '../images/css.jpeg'
import java from '../images/java-logo-2.png'
import js from '../images/js.png'
import react from '../images/react-logo-1.png'
import sql from '../images/mysql-logo-1.png'
import springboot from '../images/springboot.png'
import spring from '../images/spring-logo.png'
import tailwindcss from '../images/tailwind.png'


const Skills = () => {
  return (
    <div className='skills'>
        <center><h1>Skills</h1></center>
        <div className='row1'>
            <div className='card-i'>
                <img className='icon' src={html} alt="" />
                <h1 className='logo-h'>HTML</h1>
            </div>
            <div className='card-i'>
                <img className='icon' src={css} alt="" />
                <h1 className='logo-h'>CSS</h1>
            </div>
            <div className='card-i'>
                <img className='icon' src={js} alt="" />
                <h1 className='logo-h'>javaScript</h1>
            </div>
            <div className='card-i'>
                <img className='icon' src={react} alt="" />
                <h1 className='logo-h'>ReactJs</h1>
            </div>
            <div className='card-i'>
                <img className='icon' src={bootstrap} alt="" />
                <h1 className='logo-h'>BootStrap</h1>
            </div>
        </div>
        <div className='row2'>
            <div className='card-i'>
                <img className='icon' src={tailwindcss} alt="" />
                <h1 className='logo-h'>TailwindCss</h1>
            </div>
            <div className='card-i'>
                <img className='icon' src={sql} alt="" />
                <h1 className='logo-h'>MySQL</h1>
            </div>
            <div className='card-i'>
                <img className='icon' src={java} alt="" />
                <h1 className='logo-h'>java</h1>
            </div>
            <div className='card-i'>
                <img className='icon' src={spring} alt="" />
                <h1 className='logo-h'>spring</h1>
            </div>
            <div className='card-i'>
                <img className='icon' src={springboot} alt="" />
                <h1 className='logo-h'>springBoot</h1>
            </div>
        </div>
    </div>
  )
}

export default Skills