import React from 'react'
import './matrimoni.css'
import VideoCarousel from "../../components/carousel/video/VideoCarousel";
import {videoMatrimoni} from '../../constants'

const Matrimoni = () => {
    return (
        <div className="section" id='matrimoni'>
            <h1 className='gradient__text'>Matrimoni</h1>
            <p>Fare da colonna sonora ad un momento speciale come l'unione tra due persone è sempre una grande emozione
                e noi, di emozioni, non ne abbiamo mai abbastanza. Per questo, il matrimonio è uno dei nostri eventi
                preferiti. Abbiamo cantato per decine di coppie che si sono sposate in Lombardia, ma i Frame-Up Vocal
                Band sono disponibili anche per brevi trasferte in altre regioni d'Italia!</p>
            <p>Se cerchi cantanti diversi dal solito per il tuo matrimonio allora contattaci, perché
                i <span>Frame Up</span> sono la band musicale che fa proprio al caso tuo! Non vediamo l'ora di rendere
                memorabile il tuo grande giorno!</p>
            <p>Possiamo accompagnarvi durante:</p>
            <ul>
                <li>Cerimonia (Rito religioso o civile)</li>
                <li>Aperitivo (Fino ad un massimo di due ore)</li>
                <li>Cerimonia + Aperitivo</li>
            </ul>
            <p>Puoi vedere i demo che abbiamo preparato per riassumere parte del repertorio adatto ai riti religioso e
                civile proprio qui sotto!</p>

            <p><span>Contattaci per maggiori informazioni!</span></p>

            <div className="video-gallery video-wedding">
                <VideoCarousel
                    slides={videoMatrimoni}
                ></VideoCarousel>
            </div>

        </div>
    )
}

export default Matrimoni