/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Tour from "../Menu/Menu";
import { tourData } from "../../tourData";

function TourList() {
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) => {
    const sortedTours = tours.filter((tour) => tour.id !== id);
    setTours(sortedTours);
  };

  return (
    <Row className="tourlist p-4" xs={1} md={2} lg={3} xl={4}>
      {tours.map((tour) => (
        <Col key={tour.id} className="mb-4" data-aos="fade-right">
          <Tour tour={tour} removeTour={removeTour} />
        </Col>
      ))}
    </Row>
  );
}

export default TourList;
