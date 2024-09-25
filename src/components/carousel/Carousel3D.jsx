import React from "react";
import Carousel from "react-spring-3d-carousel";
import {config} from "react-spring";

export default function Carousel3D({cards, goToSlide}) {
    return (
        <Carousel
            slides={cards}
            goToSlide={goToSlide}
            showNavigation={true}
            animationConfig={config.gentle}
        />
    );
}
