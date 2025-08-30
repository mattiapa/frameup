import './hero.css'
import {Button, Icons} from '../../components'
import React from "react";

const Hero = () => {
    return (
        <div className="hero-image">
            <div className='section hero-section' id="hero">
                <div className="hero-elements">
                    {/* <h1 className='gradient__text hero-title'>Frame Up</h1> */}
                    <h1 className='hero-title'>Frame Up</h1>
                    <Button
                        buttonText={'ascolta ora'}
                        type='btn-primary'
                        href={"https://www.youtube.com/channel/UCF2Dosdhyba_x8g4ChmMBmQ"}
                    />
                    <div className="hero-bottom">
                        <p>Segui. Condividi. Ascolta.</p>
                        <div>
                            <Icons className="hero-icons"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero