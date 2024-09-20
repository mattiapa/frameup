import React from 'react'
import './header.css'
import {Logo, Navbar} from '../../components'

const Header = () => {
  return (
    <div className="header">
    <Logo />
    <Navbar />
    </div>
  )
}

export default Header