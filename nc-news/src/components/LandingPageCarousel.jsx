import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const LandingPageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mb-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/node_slide.png"
          alt="Node.js slide"
        />

        <Carousel.Caption>
          <h3>Back End</h3>
          <p>Node.js, the API provider</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/postgres_slide.png"
          alt="Postgresql"
        />

        <Carousel.Caption>
          <h3>Back End</h3>
          <p>PostgreSQL, the database</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/react_slide.png"
          alt="React.js"
        />
        <Carousel.Caption>
          <h3>Front End</h3>
          <p>React, the user interface builder</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/bootstrap_slide.png"
          alt="Bootstrap 5"
        />
        <Carousel.Caption>
          <h3>Front End</h3>
          <p>Bootstrap, components, columns & more</p>
        </Carousel.Caption>
      </Carousel.Item>
      

      
    </Carousel>
  );
}

export default LandingPageCarousel;