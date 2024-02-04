import React from 'react'
import "./Footer.css"
import {  IoLogoInstagram } from "react-icons/io";
import { FaFacebookF, FaDiscord , FaTwitter, FaYoutube , FaTiktok   } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer container'>

        <h2>Join the #HyperXFamily on social!</h2>
        <p>Get a sneak peek at our new products when you sign up to <br /> join the HyperX Family.</p>
        <div className="footer__logo">
            <a href="">
            <IoLogoInstagram/>
            </a>
            <a href="">
            <FaFacebookF/>
            </a>
            <a href="">
            <FaTwitter />
            </a>
            <a href="">
            <FaDiscord />
            </a>
            <a href="">
            <FaTiktok />
            </a>
            <a href="">
            <FaYoutube />
            </a>
        </div>
    </div>
  )
}

export default Footer