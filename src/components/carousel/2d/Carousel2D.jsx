import React, {useState} from "react";
import "./carousel-2d.css"

export default function Carousel2D({slides}) {

    const [goToSlide, setGoToSlide] = useState(0);

    const handleNextSlide = () => {
        setGoToSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePreviousSlide = () => {
        setGoToSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div id="carousel2d" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div className={`carousel-item ${index === goToSlide ? 'active' : ''}`} key={index}>
                        {slide.render()}
                        <div className="carousel-arrows">
                            <button className="carousel-control-prev" data-slide="prev"
                                    onClick={handlePreviousSlide}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next" data-slide="next"
                                    onClick={handleNextSlide}>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
