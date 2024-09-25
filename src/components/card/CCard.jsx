import './card.css'
import React from 'react'
import { Card } from "react-bootstrap";

const CCard = ({ nome, role, caption, photoUrl, showDetails }) => {
    return (
        <Card>
            <Card.Img variant="top" src={photoUrl} alt="" />
            <div className="card-body-wrapper">
                <Card.Body>
                    <Card.Title>{nome}</Card.Title>
                    <Card.Text>
                        <h3 className='card-role'>{role}</h3>
                        <div>
                            {caption.split('\n').map((line, index) => (
                                <p className='card-caption' key={index}>{line}</p>
                            ))}
                        </div>
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
}

export default CCard;
