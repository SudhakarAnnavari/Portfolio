import { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500, 
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <animated.div className={`nav ${isOpen ? 'open' : ''}`} style={styles}>
            <h1 className='nav-heading'><ScrollLink to='home' smooth={true} duration={800}>Sudhakar</ScrollLink></h1>
            <div className="hamburger" onClick={toggleMenu}>
            <GiHamburgerMenu />
            </div>
            <ul>
                <li><ScrollLink to='home' smooth={true} duration={800}>Home</ScrollLink></li>
                <li><ScrollLink to='about' smooth={true} duration={800}>About</ScrollLink></li>
                <li><ScrollLink to='skills' smooth={true} duration={800}>Skills</ScrollLink></li>
                <li><ScrollLink to='projects' smooth={true} duration={800}>Projects</ScrollLink></li>
                <li><ScrollLink to='contact' smooth={true} duration={800}>Contact</ScrollLink></li>
            </ul>
        </animated.div>
    );
};

export default Navbar
