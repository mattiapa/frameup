import React from 'react'
import './contacts.css'

const OwnerContact = () => {
  return (
    <div className='contacts'>
      <div className="contacts-formatted">
        <i className="fa-solid fa-envelope"></i>
        <h3>info@frameup-vocalband.com</h3>
      </div>
      <div className="contacts-formatted">
        <i className="fa-solid fa-phone"></i>
        <h3>+39 333 1099 119 (Mattia)</h3>
      </div>
    </div>
  )
}

export default OwnerContact