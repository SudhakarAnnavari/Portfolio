import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
const Pages = () => {
  return (
    <div>
      <Navbar/>
        <div id="home">
    <Home/>
</div>
<div id="about">
    <About/>
</div>
<div id="skills">
    <Skills/>
</div>
<div id="projects" className='page-projects'>
    <Projects/>
</div>
<div id="contact">
    <ContactForm/>
</div>
<Footer/>

    </div>
  )
}

export default Pages