import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardDisplay = ({ cardData }) => {
  const renderProjects = () => {
    return cardData.map((card, index) => (
      <Card key={index} className="custom-card">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <Button variant="primary" href={card.link} target="_blank">{card.buttonText}</Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div className="card-display-container">
      {renderProjects()}
    </div>
  );
};

export default CardDisplay;
