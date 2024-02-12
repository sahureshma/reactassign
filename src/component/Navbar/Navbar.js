import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
function Navbar() {
  return (
    
        <nav>
            <NavLink to='/title' className="titl">Title</NavLink>
            <ul>
                <li><NavLink to ="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                    </li>
                <li>
                    <NavLink to="/button">Button</NavLink>
                    </li>
            </ul>
        </nav>

  )
}

export default Navbar;