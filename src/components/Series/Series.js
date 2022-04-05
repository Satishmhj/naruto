import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { narutoApi } from "../Redux/Actions/NarutoApiAction";

const Series = () => {
  const naruto = useSelector((state) => state.naruto.naruto);

  console.log(naruto);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(narutoApi());
  }, []);
  return (
    <>
      <Container>
        <div className="display-6 d-flex justify-content-center p-3 text-black">
          Series
        </div>
        <Row>
          {naruto.results?.map((items) => {
            return (
              <>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={`${items.image_url}`} />
                    <Card.Body>
                      <Card.Title>{items.title}</Card.Title>
                      <Card.Text>{items.synopsis}</Card.Text>
                      <div className="d-flex justify-content-center">
                        <Button variant="primary">Order Now</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Series;
