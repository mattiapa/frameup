import React from 'react'
import './about.css'
import AboutUsCarousel from "../../components/carousel/about/AboutUsCarousel";
import {staffMembers} from "../../constants";
import { Hlink } from '../../components';


const About = () => {

    return (
        <div className="section" id='chi-siamo'>
            <h1 className='gradient__text'>Chi siamo</h1>
            <p>Siamo i <span>Frame Up</span>, una band che non ha bisogno di strumenti: per fare musica ci
                bastano <span>cinque voci</span> e un <span>beatboxer</span>!</p>

            <p>Il quartier generale si trova a Brugherio, dove prendono forma i nostri originali arrangiamenti a
                cappella.</p>

            <p>Dal pop al gospel, dal sacro al profano, il nostro repertorio si adatta ad <span>ogni occasione</span>,
                creando l'atmosfera giusta per eventi, feste e matrimoni!</p>

            <p>Per conoscerci meglio, seguici su <Hlink href="https://www.youtube.com/@frameupvocalband" name="YouTube"/>, <Hlink href="https://www.instagram.com/frameup.vocalband/" name="Instagram"/>, <Hlink href="https://www.facebook.com/FrameUPVocalBand" name="Facebook"/> e <Hlink href="https://open.spotify.com/artist/7Dgll7k2UpfixdJow80D9u?si=8LHrQqZZQPyQLpsQxs37yA" name="Spotify"/>, dove potrai ascoltare alcuni dei nostri brani e rimanere sempre aggiornato
                su appuntamenti ed altre news.</p>

            <p><span>Ti Aspettiamo!</span></p>

            <div className="about-staff">
                <AboutUsCarousel
                    slides={staffMembers}
                ></AboutUsCarousel>
            </div>

        </div>
    )
}

export default About