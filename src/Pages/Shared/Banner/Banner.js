import React from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../../Video/pexels-kindel-media-7578552.mp4";
import banner1 from "../../../images/sale1.jpg";
import banner2 from "../../../images/sale2.jpg";
import banner3 from "../../../images/sale3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={banner} type="video/mp4" />
        </video>
      </div>
      <div className="row my-3">
        <div className="col-md-5 m-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block item rounded"
                src={banner1}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block item rounded"
                src={banner2}
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Family Care Dental Zone</h3>
      <p>From Simple Procedures to complex Surgeries.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block item rounded"
                src={banner3}
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-4 my-5 text-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          natus illum rem, fugit assumenda fugiat repellat nulla nobis
          cupiditate mollitia quaerat reprehenderit, velit veniam molestiae
          doloremque non atque accusantium repellendus.
        </div>
      </div>
    </section>
  );
};

export default Banner;
