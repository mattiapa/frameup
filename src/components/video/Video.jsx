import React from 'react'
import './video.css'

const Video = ({ title, author, embedId, width="300", height="180" }) => {
  return (
    <div class='video-card'>
      <h2 className="video-title">{title}</h2>
      {author && <h3 className="video-author">{author}</h3>}
      <iframe
        className='video-link'
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  )
}

export default Video