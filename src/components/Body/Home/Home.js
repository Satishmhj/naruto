import { Carousel } from "react-bootstrap";
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.teahub.io/photos/full/180-1808332_naruto-and-friends-wallpaper-best-wallpaper-anime-naruto.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Uzumaki Naruto and his family.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/3c/99/9c/3c999cd310f95f8878f38589b7ac8167.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Uzumaki Naruto and Nine tails.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/229970.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Naruto shipudden</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
