import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './Navbar.jsx'
import App from './App.jsx'
import About from './About.jsx'
import Bromo from './Bromo.jsx'
import Culture from './Culture.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App/>
    <About />
    <Bromo />
    <Culture />
    <Footer/>
  </React.StrictMode>,
)
