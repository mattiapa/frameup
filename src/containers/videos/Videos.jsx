import React from 'react';
import {videos} from '../../constants';
import VideoCarousel from "../../components/carousel/video/VideoCarousel";

const Videos = () => {
    return (
        <div className="section" id='ascolta'>
            <h1 className='gradient__text'>I Nostri Video</h1>
            <VideoCarousel
                slides={videos}
            ></VideoCarousel>
        </div>
    )
}

export default Videos