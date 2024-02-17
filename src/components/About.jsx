import React from 'react'
import './About.css'
import image from '../images/sudhakar_img.jpg'

const About = () => {
  return (
   <>
    <div className='about'>
       <h1>About</h1>
       <div className='about-main'>
       <img className='about-image' src={image} alt="" />
       <div>
        <p className='about-p'> My name is Sudhakar Annavari. I finished my Bachelor's in Computer Science from SVCE College. I love building things with HTML, CSS, and JavaScript. I'm also good at using React.js for making cool websites. On the backend side, I'm into Java, Spring, and Spring Boot. They help me create strong and efficient systems. I'm always learning new things and excited to tackle challenges in the tech world. Let's build something awesome together! Outside of coding, you can find me exploring new hobbies, engaging in outdoor activities, or immersing myself in a good book. I believe in the power of diversity and collaboration, and I'm eager to bring my unique perspective and skills to any team or project. Let's connect and create something remarkable together!
         </p> 
       </div>
       </div>
        
    </div>
   </>
  )
}

export default About