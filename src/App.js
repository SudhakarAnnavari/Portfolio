import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import Pages from './Pages/Pages';
import Footer from './components/Footer';

const App = () => {
    return (
      <>
      <Pages/>
        <Routes>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/skills' component={Skills} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact'  component={ContactForm} />
                <Route path='/Footer' component={Footer} />
        </Routes>
      </>
    );
}

export default App;
