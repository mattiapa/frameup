import React from 'react'
import { Event } from '../../components'
import { events } from '../../constants'
import './eventi.css'

const Eventi = () => {
  return (
    <div className='section' id="eventi">
      <h1 className='gradient__text'>Eventi</h1>

      <div className="events-gallery">
        {events.map((eventItem) => (
        <Event
          data={eventItem.data}
          caption={eventItem.caption}
          photoUrl={eventItem.photoUrl}
        />
        ))}
      </div>

    </div>
  )
}

export default Eventi