// import React, { useState, useEffect } from 'react'
import './Nav.css'
import logo from './images/Netflix-Logo.png'
import avatar from './images/Netflix-avatar.png'

function Nav() {
    // const [show, handleShow] = useState(false)

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //             handleShow(true);
    //         } else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // }, []);

    return (
        // <div className={`nav ${show && "nav__black"}`} >
        <div className="nav" >
            <img
                className='nav__logo'
                src={logo}
                alt='Netflix logo'
            />
            <img
                className='nav__avatar'
                src={avatar}
                alt='Netflix avatar'
            />
        </div>
    )
}

export default Nav