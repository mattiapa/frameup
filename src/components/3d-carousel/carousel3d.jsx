import Carousel from "react-spring-3d-carousel";
import React, {useState, useEffect} from "react";
import {staffMembers} from "../../constants";
import {CCard} from "../index";
import {config} from "react-spring";
import "./carousel3d.css"; // Importiamo il file CSS

export default function Carousel3d(props) {
    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(true);
    const [goToSlide, setGoToSlide] = useState(0); // Iniziamo dalla prima slide

    // Creiamo le cards per il carosello
    const cards = staffMembers.map((staff, index) => {
        const position = index - goToSlide; // Determiniamo la posizione della slide rispetto alla slide attiva

        // Mostriamo solo 1 slide a sinistra e 1 a destra
        const isVisible = Math.abs(position) <= 1;
        const isBehind = Math.abs(position) === 1; // Slide immediatamente dietro

        return {
            key: index,
            content: (
                <div className={isVisible ? (isBehind ? 'behind-slide' : 'active-slide') : 'hidden-slide'}>
                    <CCard
                        nome={staff.name}
                        role={staff.role}
                        caption={staff.caption}
                        photoUrl={staff.photo}
                    />
                </div>
            ),
            onClick: () => setGoToSlide(index)
        };
    });

    useEffect(() => {
        setOffsetRadius(props.offset || 2);
        setShowArrows(props.showArrows || true);
    }, [props.offset, props.showArrows]);

    return (
        <div
            style={{
                width: props.width || "800px",
                height: props.height || "400px",
                margin: props.margin || "0 auto",
                overflow: "hidden",
                position: "relative",
                zIndex:0
            }}
            className="carousel-container"
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    );
}
