import React from 'react'
import './footer.css'
import { Icons, OwnerContact } from '../../components'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-divider'>
        <div className="hline"></div>
        <Icons className="footer-icons"/>
        <div className="hline"></div>
      </div>
      <OwnerContact />
      
      <div className="footer-copy">
        <h3 className="footer-title">Frame Up Vocal Band</h3>
        <p className="copy">Copyright 2024 ©, Frame Up Vocal Band</p>
      </div>

    </div>
  )
}

export default Footer