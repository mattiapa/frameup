import React from 'react'
import './about.css'
import { staffMembers } from '../../constants'
import CCard from "../../components/card/CCard";


const About = () => {
  return (
    <div className="section" id='chi-siamo'>
      <h1 className='gradient__text'>Chi siamo</h1>
      <p>Siamo i <span>Frame Up</span>, una band che non ha bisogno di strumenti: per fare musica ci bastano <span>cinque voci</span> e un <span>beatboxer</span>!</p>

      <p>Il quartier generale si trova a Brugherio, dove prendono forma i nostri originali arrangiamenti a cappella.</p>

      <p>Dal pop al gospel, dal sacro al profano, il nostro repertorio si adatta ad <span>ogni occasione</span>, creando l'atmosfera giusta per eventi, feste e matrimoni!</p>

      <p>Per conoscerci meglio, seguici su <a href="https://www.youtube.com/@frameupvocalband" target="_blank" rel="noreferrer">YouTube</a>, <a href="https://www.instagram.com/frameup.vocalband/" target="_blank" rel="noreferrer">Instagram</a>, <a href="https://www.facebook.com/FrameUPVocalBand" target="_blank" rel="noreferrer">Facebook</a> e <a href="https://open.spotify.com/artist/7Dgll7k2UpfixdJow80D9u?si=8LHrQqZZQPyQLpsQxs37yA" target="_blank" rel="noreferrer">Spotify</a>, dove potrai ascoltare alcuni dei nostri brani e rimanere sempre aggiornato su appuntamenti ed altre news.</p>

      <p><span>Ti Aspettiamo!</span></p>


      <div className="about-staff">
        {staffMembers.map((staff) => (
          <CCard
            nome={staff.name}
            role={staff.role}
            caption={staff.caption}
            photoUrl={staff.photo}
          />
        ))}
      </div>

    </div>
  )
}

export default About