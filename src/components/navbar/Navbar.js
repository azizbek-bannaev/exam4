import React from 'react'
import "./Navbar.css"
import { IoMdSearch  } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  
  return (
    <div className='navbar container'>
      <div className="navbar__collection">
        <li className="nav__item">
          hyperx
        </li>
        <li className="nav__item">
        Shop By Category
        </li>
        <li className="nav__item">
        Shop By Platform
        </li>
        <li className="nav__item">
        We're All Gamers
        </li>
        <li className="nav__item">
        Support
        </li>
      </div>
      <div className="katalog">
      <IoMenu/>
      </div>
      <div className="navbar__logo">
        <IoMdSearch/>
      </div>
    </div>
  )
}

export default Navbar