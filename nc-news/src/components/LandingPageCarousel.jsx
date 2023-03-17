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
          src="carousel_imgs/holly_and_pebbles.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Holly & Pebbles</h3>
          <p>The terrible twins!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/mrmush.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mr Mush</h3>
          <p>Trouble maker extraordinaire</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/brawndo.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Brawndo</h3>
          <p>HAS WHAT PLANTS CRAVE!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/whitby.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Whitby</h3>
          <p>Has vampires & chips!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/talacre.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Talacre</h3>
          <p>Leaning lighthouse</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/poppyfields.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Poppy Fields</h3>
          <p>You've got red on you!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/lincolnshire.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dark Skies</h3>
          <p>The mid 90's SciFi series!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/windmills.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Windmills</h3>
          <p>
            Round like a circle in a spiral, like a wheel within a wheel
            <br /> Never ending or beginning on an ever spinning reel
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel_imgs/filey.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sky's On Fire</h3>
          <p>
            The World's On Fire The World's On Fire
            <br /> And it's too close to the wire
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LandingPageCarousel;