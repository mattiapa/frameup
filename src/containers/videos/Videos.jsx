import React from 'react';
import './videos.css';
import { videos } from '../../constants';
import { Video } from '../../components'

const Videos = () => {
  return (
    <div className="section" id='ascolta'>
      <h1 className='gradient__text'>I Nostri Video</h1>
      <div className="video-gallery">
        {videos.map((videoItem) => (
        <Video
          title={videoItem.title}
          author={videoItem.author}
          embedId={videoItem.embedId}
        />
        ))}
      </div>
    </div>
  )
}

export default Videos