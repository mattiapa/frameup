import './card.css'
import React from 'react'
import { Card } from "react-bootstrap";

const CCard = ({nome, role, caption, photoUrl}) => {
  return (
      <Card>
          <Card.Img variant="top" src={photoUrl} alt="" />
          <Card.Body>
              <Card.Title>{nome}</Card.Title>
              <Card.Text>
                  <h3 className='card-role'>{role}</h3>
                  <p className='card-caption'>{caption}</p>
              </Card.Text>
          </Card.Body>
      </Card>
  )
}

export default CCard