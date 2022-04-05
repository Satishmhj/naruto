import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { narutoApi } from "../Redux/Actions/NarutoApiAction";
import { FaFilter } from "react-icons/fa";
import FilterModal from "./FilterModal";

const Series = () => {
  const [show, setShow] = useState(false);
  const naruto = useSelector((state) => state.naruto.naruto);

  console.log(naruto);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(narutoApi());
  }, []);
  return (
    <>
      {show && <FilterModal show={show} setShow={setShow} />}
      <Container>
        <div className="display-6  p-3 text-black">
          Series
          <Button
            classname="d-flex flex-row-reverse"
            style={{ float: "right" }}
            onClick={() => {
              setShow(true);
            }}
          >
            <FaFilter /> Filter
          </Button>
        </div>
        <Row>
          {naruto.results?.map((items) => {
            return (
              <>
                <Col style={{ padding: "5px" }}>
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
