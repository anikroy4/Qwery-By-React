import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
     <>
    <div>
         <nav> 
            <div class="container">
                <div class="logo">
                    <a href="#">
                        <img src="public/logo.png" alt="logo.png"/>
                    </a>
                    </div>
                    <div class="menu">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Information</a>
                            </li>
                            <li>
                                <a href="#">Culture</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
     </div>
    </>
  )
}

export default Navbar