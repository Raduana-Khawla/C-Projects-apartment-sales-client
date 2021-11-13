import React from "react";
import "./Design.css";
import design1 from "../../../images/design1.png";
import design12 from "../../../images/design12.png";
import design2 from "../../../images/design2.png";
import design3 from "../../../images/design3.png";

const Design = () => {
  return (
    <div className="m-5">
      <div className="row">
        <div className="card w-25 h-50 item1 col-md-3">
          <div class="card-body text-center">
            <img src={design1} className="h-25 w-25" alt="" />
            <h5 class="card-title">Duplex Layout</h5>
            <p class="card-text">
              We have a lot of duplex and luxury rooms for you and you can
              easily buy this.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="card w-25 h-50 item1 col-md-3">
          <div className="card-body text-center">
            <img src={design12} className="h-50 w-25" alt="" />
            <h5 className="card-title">High-Level Security</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="card w-25 h-50 item1 col-md-3">
          <div className="card-body text-center">
            <img src={design2} className="h-50 w-25" alt="" />
            <h5 className="card-title">Royal Touch Paint</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="card w-25 h-50 item1 col-md-3">
          <div className="card-body text-center">
            <img src={design3} className="h-50 w-25" alt="" />
            <h5 className="card-title">Large Playground</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
