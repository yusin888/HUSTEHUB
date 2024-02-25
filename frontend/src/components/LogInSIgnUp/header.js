import React, { useState } from 'react';
import './Header.css';
import logo from "../Assets/logo.png";
import accountIcon from "../Assets/person.png";
import BsTabs from './BsTabs'; 
import ControlledCarousel from './hero';
const Header=()=>{
    const [showForms,setShowForms]=useState(false);
    const toggleForms=()=>{
        setShowForms(!showForms);
    };

    return(
        <>
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li onClick={toggleForms}>
                        <img src={accountIcon} alt="account"/>
                    </li>
                </ul>
            </nav>
        </header>
        {/* carousel welcoming clients */}
        <div className='caroussel-container'>
            <ControlledCarousel/>
        </div>
        <div className={`forms-container ${showForms ?'show':''}`}>
            <BsTabs/>
        </div>
        </>

    )
}
export default Header;