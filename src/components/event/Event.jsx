import React from 'react';
import './event.css';

const Event = ({title, caption, photoUrl, externalLink,externalLabel}) => {
    return (
        <div className="event-wrapper">
            <img className="event-image" src={photoUrl} alt=""/>
            <div className="event-name">{title}
                <div>
                    {caption.split('\n').map((line, index) => (
                        <p className='event-caption' key={index}>{line}</p>
                    ))}
                </div>
                {externalLink && ( // Controlla se externalLink è popolata
                    <div className="event-link">
                        <a href={externalLink}>{externalLabel}</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Event;
