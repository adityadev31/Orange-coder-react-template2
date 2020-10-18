import React from 'react'
import './Navbar.css'
import LOGO from '../../images/Orange-coder-logo-2.png'

function Navbar() {
    return (
        <>
            <nav className="nav__box">
                <div className="nav__logo"><img src={LOGO} className="img-fluid" /></div>
                <div className="nav__search__bar">
                    <input type="text" className="px-3" placeholder="Search something awesome...." />
                    <div className="search__icon"><i class="fas fa-search"></i></div>
                </div>
                <div className="nav__menu__side">
                    <a href="#" className="nav__studio"><i class="fas fa-store"></i></a>
                    <a href="#" className="nav__login">Login</a>
                </div>
            </nav>
            <div className="nav__lower">
                <a href="#" className="nav__links">Home</a>
                <a href="#" className="nav__links">Categories</a>
                <a href="#" className="nav__links">What we do ?</a>
                <a href="#" className="nav__links">How to earn</a>
                <a href="#" className="nav__links">Careers</a>
            </div>
        </>
    )
}

export default Navbar
