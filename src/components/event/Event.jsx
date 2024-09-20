import React from 'react'
import './event.css'

const Event = ({data, caption, photoUrl}) => {
  return (
    <div className='event-wrapper'>
      <div className="event-info">
        <h2 className='event-name'>{data}</h2>
        <h3 className='event-caption'>{caption}</h3>
      </div>
        <img className='event-image' src={photoUrl} alt="" />
    </div>
  )
}

export default Event