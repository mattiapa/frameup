import React from 'react'
import './icons.css'

const Icons = ({ className="icons" }) => {
  return (
    <div className={className}>      
      <a class="facebook" href="https://www.facebook.com/FrameUPVocalBand" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
      <a class="instagram" href="https://www.instagram.com/frameup.vocalband/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
      <a class="youtube" href="https://www.youtube.com/@frameupvocalband" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a>
      <a class="spotify" href="https://open.spotify.com/artist/7Dgll7k2UpfixdJow80D9u?si=8LHrQqZZQPyQLpsQxs37yA" target="_blank" rel="noreferrer"><i class="fa-brands fa-spotify"></i></a>
    </div>
  )
}

export default Icons