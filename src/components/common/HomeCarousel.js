import React from "react";
import "./HomeCarousel.css";
import { Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import image1 from "../../images/Image1.jpg";
import image2 from "../../images/Image2.jpg";
import image3 from "../../images/Image3.jpg";
import arrow from "../../images/arrow.gif";
import Three from "../Three/Three";
// import Shoe from '../Three/Shoe';

function HomeCarousel() {
  return (
    <Row className="rowform">
      <Col xl={12} xs={6} className="colsecond">
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
      <Col xl={12} xs={6} className="colsecond">
        <Carousel className="Caroudimention">
          <Carousel.Item className="formdimentions">
            <img className="imagesdimenion" alt="900x500" src={image2} />
            <Carousel.Caption>
              <h3 className="textthree">شیک و زیبا</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="formdimentions">
            <img className="imagesdimenion" alt="900x500" src={image1} />
            <Carousel.Caption>
              <h3 className="textthree"> کیفیت بالا</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="formdimentions">
            <img className="imagesdimenion" alt="900x500" src={image3} />
            <Carousel.Caption>
              <h3 className="textthree">قیمت مناسب</h3>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default HomeCarousel;
