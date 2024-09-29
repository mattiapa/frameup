import React from 'react'
import {events} from '../../constants'
import './eventi.css'
import EventsCarousel from "../../components/carousel/events-carousel/EventsCarousel";

const Eventi = () => {
  return (
    <div className='section' id="eventi">
      <h1 className='gradient__text'>Eventi</h1>
      <div className="events-gallery">
          <EventsCarousel
              slides={events}
          ></EventsCarousel>
      </div>
    </div>
  )
}

export default Eventi