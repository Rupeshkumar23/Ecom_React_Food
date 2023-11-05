/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp,faXmark} from '@fortawesome/free-solid-svg-icons';
import Menucss from './Menu.module.css'
function Tour({ tour, removeTour }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleRemoveTour = () => {
    removeTour(tour.id);
  };

  return (
    <Container>
    <Card className="tour rounded p-3 top_1">
      <div className="img-container">
        <Card.Img  src={tour.img} alt="Pic" className="Img_card" />
        <span className="close-btn" onClick={handleRemoveTour}>
        <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
      <Card.Body className="tour-info">
        <Card.Title className="mb-2 text-black fw-bold text-center bg-white p-1 ">{tour.city}</Card.Title>
        <Card.Subtitle className="mb-2 text-black fw-bold text-center bg-white p-1">{tour.name}</Card.Subtitle>
        <Card.Text className='para'>
          {showInfo && <p>{tour.info}</p>}
        </Card.Text>
        <Button className="Btn " onClick={() => setShowInfo(!showInfo)}>
      {showInfo ? (
        <span>
         Hide Info  <FontAwesomeIcon icon={faCaretUp} />
        </span>
      ) : (
        <span>
           Show Info <FontAwesomeIcon icon={faCaretDown} />
        </span>
      )}
    </Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default Tour;
