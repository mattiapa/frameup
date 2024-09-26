import React, {useEffect, useState} from "react";
import Carousel2D from "../2d/Carousel2D";
import Carousel3D from "../3d/Carousel3D";
import {CCard} from "../../index";
import "./about-us-carousel.css"

const mobile_size = 990;

export default function AboutUsCarousel(props) {
    const [goToSlide, setGoToSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= mobile_size);
    const cards = remapCards(props, setGoToSlide);
    const slides = remapSlides(props);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= mobile_size);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="carousel-container">
            {isMobile ? (
                <Carousel2D
                    slides={slides}
                    goToSlide={goToSlide}
                />
            ) : (
                <Carousel3D
                    cards={cards}
                    goToSlide={goToSlide}
                />
            )}
        </div>
    );
}

function remapCards(props, setGoToSlide) {
    return props.slides.map((staff, index) => {
        return {
            key: index,
            content: (
                <CCard
                    nome={staff.name}
                    role={staff.role}
                    caption={staff.caption}
                    photoUrl={staff.photo}
                />
            ),
            onClick: () => setGoToSlide(index)
        };
    });
}

function remapSlides(props) {
    return props.slides.map((member) => ({
        render: () => (
            <CCard
                nome={member.name}
                role={member.role}
                caption={member.caption}
                photoUrl={member.photo}
            />
        ),
    }));
}

