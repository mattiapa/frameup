import React, {useState} from "react";
import Carousel2D from "../2d/Carousel2D";
import {Event} from "../../index";
import "./events-carousel.css"


export default function EventsCarousel(props) {
    const [goToSlide] = useState(0);
    const slides = remapSlides(props);

    return (
        <div className="events-carousel-container">
            <Carousel2D
                slides={slides}
                goToSlide={goToSlide}
            />
        </div>
    );
}


function remapSlides(props) {
    return props.slides.map((eventItem) => ({
        render: () => (
            <Event
                title={eventItem.title}
                caption={eventItem.caption}
                externalLink={eventItem.externalLink}
                externalLabel={eventItem.externalLabel}
                photoUrl={eventItem.photoUrl}
            />
        ),
    }));
}

