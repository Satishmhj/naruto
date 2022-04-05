import { Carousel, Card, Button, Container, Row, Col } from "react-bootstrap";
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
              src="https://wallpaperaccess.com/full/8010.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Naruto shipudden</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <b className="display-3 d-flex flex-row">Naruto</b>
        <b className="d-flex flex-row display-6">
          The epic adventures of the world’s greatest ninja!
        </b>
        <b className="d-flex flex-row">Created by Masashi Kishimoto</b>
        <div>
          <button className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
            <b className="p-2">Naruto set-6 Blue-ray trailer</b>
          </button>
        </div>
      </div>
      <div className="container">
        <Container>
          <b className="d-flex flex-row text-black p-3 ">
            Check out Naruto art books, novels and other special releases
          </b>
          <Row>
            <Col sm>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="data:image/jpeg;base64,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"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images-na.ssl-images-amazon.com/images/I/81nuK1RJmjL.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://sep.yimg.com/ay/animebooks-com/naruto-illustrations-uzumaki-naruto-art-book-26.gif"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <footer class="page-footer font-small blue bg-primary">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="/"> MDBootstrap.com</a>
        </div>
      </footer>
    </>
  );
};

export default Home;
