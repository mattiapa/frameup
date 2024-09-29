import React, {useState} from "react";
import Carousel2D from "../2d/Carousel2D";
import {Video} from "../../index";
import "./video-carousel.css"


export default function VideoCarousel(props) {
    const [goToSlide, setGoToSlide] = useState(0);
    const slides = remapSlides(props);

    return (
        <div className="video-carousel-container">
            <Carousel2D
                slides={slides}
                goToSlide={goToSlide}
            />
        </div>
    );
}


function remapSlides(props) {
    return props.slides.map((member) => ({
        render: () => (
            <Video
                title={member.title}
                author={member.author}
                embedId={member.embedId}
            />
        ),
    }));
}

