import React from 'react'
import { Contactform } from '../../components'

const Contacts = () => {
  return (
    <div className="section" id="contatti">
      <h1 className='gradient__text'>Inviaci un messaggio</h1>
      <p className="contact-info">
        Ci puoi contattare tramite email, cellulare oppure compilando il form qui sotto!
      </p>
      <Contactform />
    </div>
  )
}

export default Contacts