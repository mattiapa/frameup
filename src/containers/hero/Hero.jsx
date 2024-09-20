import './hero.css'
import { Button, Icons } from '../../components'

const Hero = () => {
  return (
    <div className='section'>
      <h1 className='gradient__text'>Frame Up</h1>
      <Button
        buttonText={'ascolta ora'}
        type='btn-primary'
        href={"https://www.youtube.com/channel/UCF2Dosdhyba_x8g4ChmMBmQ"}
       />
       <div className="hero-bottom">
        <p>Segui. Condividi. Ascolta.</p>
        <div >
          <Icons className="hero-icons"/>
        </div>
       </div>
    </div>
  )
}

export default Hero