import React from 'react';
import '../Styles/Navbar.css';
import cloud from '../assets/cloud.png';
function Navbar() {
    return (
        <div className='navbar'>
            <img className="left-cloud" src={cloud} alt="left cloud" />
            <img className="right-cloud" src={cloud} alt="right cloud" />
            <div className='links'>
                <a href='#home'> Home</a>
                <a href='#about'> About</a>
                <a href='#resume'> Resume</a>
                <a href='#contact'> Contact</a>
            </div>
        </div>
    )
}

export default Navbar
