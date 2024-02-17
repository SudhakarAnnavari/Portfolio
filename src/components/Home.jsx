import React from 'react';
import './Home.css';
import himage from '../images/main_img.jpg';
import resumePDF from '../Files/sudhakar_Resume.pdf';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div>
          <h2>Hello Welcome</h2>
          <h1 className='myname'>I'm Sudhakar</h1>
          <h1>Java FullStack Developer</h1>
          <a href={resumePDF} download className='home-btn'> Resume</a>
          <p className='description'>Enthusiastic and skilled Java Full Stack Developer graduate with hands-on experience in front-end and back-end technologies. Proficient in Java and React.js with a keen eye for creating seamless and responsive user experiences. Eager to contribute innovative solutions and collaborate within a dynamic development team.</p>
        </div>
        <div>
          <img className='image' alt='' src={himage}/>
        </div>
      </div>
    </>
  );
};

export default Home;
