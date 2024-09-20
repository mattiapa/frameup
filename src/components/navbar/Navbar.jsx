import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <p><a className="navbar-item" href="#chi-siamo">Chi siamo</a></p>
        <p><a className="navbar-item" href="#ascolta">Ascolta</a></p>
        <p><a className="navbar-item" href="#matrimoni">Matrimoni</a></p>
        <p><a className="navbar-item" href="#eventi">Eventi</a></p>
        <p><a className="navbar-item" href="#contatti">Contattaci</a></p>
      </div>
    </div>
  )
}

export default Navbar