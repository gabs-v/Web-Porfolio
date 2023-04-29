import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Contact from './Contact';
import Projects from './Projects';
import '../stylesheets/Navbar.css'

const Navbar = () => {

    return (
    <div id='nav'>
        
        <ul>
        <h3>Gaby Vazquez</h3>
            <li>
                <Link to={'/'} element={<Home/>}>Home</Link>
            </li>
            <li>
                <Link to={'/about'} element={<About/>}>About</Link>
            </li>
            <li>
                <Link to={'/skills'} element={<Skill/>}>Skills</Link>
            </li>
            <li>
                <Link to={'/projects'} element={<Projects/>}>Projects</Link>
            </li>
            <li>
                <Link to={'/contact'} element={<Contact/>}>Contact</Link>
            </li>
        </ul>
    </div>
)
}

export default Navbar