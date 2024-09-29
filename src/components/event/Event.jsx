import React from 'react'
import './event.css'

const Event = ({title, caption, photoUrl}) => {
    return (
        <div className="event-wrapper">
            <img className="event-image" src={photoUrl} alt=""/>
            <div className="event-name">{title}
                <div>
                    {caption.split('\n').map((line, index) => (
                        <p className='event-caption' key={index}>{line}</p>
                    ))}
                </div>
            </div>
        </div>)
}

export default Event