import React from 'react';
import './Projects.css';
import p1 from '../projectimages/Screenshot 2024-02-09 234418.png';
import p2 from '../projectimages/Screenshot 2024-02-09 225826.png';
import p3 from '../projectimages/Screenshot 2024-02-09 234653.png';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Some of my recent projects</h1>
      <div className='p-row'>
        <div className='p-card'>
          <img className='pimg' src={p1} alt="" />
          <h2>Ecommerce Website</h2>
          <p className='p-p'>Our e-commerce platform, powered by Spring Boot, offers a comprehensive online shopping experience for users without the hassle of payment integration in both the user and admin interfaces. With a user-friendly interface and robust backend architecture, our platform enables users to explore a wide range of products, add items to their cart, and manage their orders seamlessly.</p>
          <a href="https://github.com/SudhakarAnnavari/EcommerceWebsite" target="_blank" rel="noopener noreferrer">
            <button className='project-btn' >Github Link</button>
          </a>
        </div>
        <div className='p-card'>
          <img className='pimg' src={p2} alt="" />
          <h2>Fullstack CRUD project</h2>
          <p className='p-p'>Our CRUD application, developed using Spring Boot and ReactJS, offers a streamlined solution for managing data with Create, Read, Update, and Delete operations. With a RESTful API architecture and MySQL database integration, our platform provides a seamless experience for handling data efficiently.</p>
          <a  href="https://github.com/SudhakarAnnavari/FullstackCRUD_Project" target="_blank" rel="noopener noreferrer">
            <button className='project-btn2' >Github Link</button>
          </a>
        </div>
        <div className='p-card'>
          <img className='pimg' src={p3} alt="" />
          <h2>Netflix Clone</h2>
          <p className='p-p'>Our Netflix clone app offers a captivating streaming experience, reminiscent of the popular streaming platform, while leveraging the power of ReactJS and Firebase authentication. With a sleek user interface and seamless integration with Firebase for authentication, our app provides users with access to a wide range of movies and TV shows.</p>
          <a href="https://github.com/SudhakarAnnavari/NetflixClone" target="_blank" rel="noopener noreferrer">
            <button className='project-btn3' >Github Link</button>
          </a>
        </div>
      </div>
      <h2>For more projects, visit my <a href="https://github.com/SudhakarAnnavari?tab=repositories">GitHub</a>.</h2>
    </div>
  );
};

export default Projects;
