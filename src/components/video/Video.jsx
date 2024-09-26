import React from 'react';
import ReactPlayer from 'react-player';
import "./video.css"

const Video = ({ title, embedId }) => {
    return (
        <div className="video-container">
            <h2>{title}</h2>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${embedId}`}
                className='react-player'
                width='100%'
                height='100%'
                controls={true}
            />
        </div>
    );
}

export default Video;
