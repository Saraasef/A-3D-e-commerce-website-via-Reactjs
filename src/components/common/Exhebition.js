import React from "react";
import "./Exhebition.css";
import { Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Three from "../Three/Three";
import Footer  from "./Footer";

function Exhebition() {
  return (
    <>
    <Row>
      <Col xl={12} xs={6} className="rowformexhebition">
        <Carousel className="Caroudimention">
          <Carousel.Item className="formdimentions">
            <Three className="imagesdimenion" />
            <Carousel.Caption>
              <h3 className="textthree">نمایشگاه مجازی محصولات ما بصورت 3D</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="formdimentions">
            <Three className="imagesdimenion" />
            <Carousel.Caption>
              <h3 className="textthree">نمایشگاه مجازی محصولات ما بصورت 3D</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="formdimentions">
            <Three className="imagesdimenion" />
            <Carousel.Caption>
              <h3 className="textthree">نمایشگاه مجازی محصولات ما بصورت 3D</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Footer/>
    </>
  );
}

export default Exhebition;
