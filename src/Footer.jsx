import React from 'react'
import './Footer.css'

function footer() {
  return (
    <footer>
        <div class="container">
            <div class="left">
                <div>
                    <img src="./public/footer_logo.png" alt="footer logo.png"/>
                    <h2>Let's go on vacation, Make your day</h2>
                    <a href="#">Terms & Conditions</a>
                    <div class="icon">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="get_started">
                        <a class="ready" href="#">Ready to explore?</a>
                        <a class="started" href="#">Get Started</a>
                </div>

              <div class="main">
                <div class="list_item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="">Email Marketing</a></li>
                        <li><a href="">Campaigns</a></li>
                        <li><a href="">Branding</a></li>
                        <li><a href="">Offline</a></li>
                    </ul>
                    </div>
                    <div class="list_item footer_about">
                        <h3>About</h3>
                        <ul>
                            <li><a href="">Our Story</a></li>
                            <li><a href="">Benefits</a></li>
                            <li><a href="">Term</a></li>
                            <li><a href="">Career</a></li>
                        </ul>
                    </div>
                    <div class="list_item">
                        <h3>Help</h3>
                        <ul>
                            <li><a href="">FAQ’S</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>
              </div>
            </div>
        </div>
        <p>Copyright 2023 QWERy</p>
    </footer>
  )
}

export default footer