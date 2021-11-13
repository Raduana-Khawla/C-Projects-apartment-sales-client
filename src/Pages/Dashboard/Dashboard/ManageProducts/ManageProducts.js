import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div class="container my-5">
      <div class="section-title text-center">
        <span class="sp-color-2">ALL PROPERTY</span>
        <h2>Our Property and Its Availabilities</h2>
      </div>
      <div class="row">
        {services?.map((pd, index) => (
          <div class="col-sm-12 col-md-4">
            <div class="property-card">
              <div class="property-card-img">
                <a href="property-details.html">
                  <img className="w-100" src={pd?.imageURL} alt="Images" />
                </a>
              </div>
              <h4>
                $<p>{pd.price}</p>/m
              </h4>
              <div class="content">
                <h4>
                  {pd.name}{" "}
                  <span>
                    <i class="bx bx-location-plus"></i>Dallas
                  </span>{" "}
                </h4>
                <p>
                  <small>{pd.description}</small>
                </p>
                <div className="d-flex">
                  <ul>
                    <li>Dining: 01</li>
                    <li>Sq. feet: 120</li>
                    <li>Bathroom: 03</li>
                  </ul>
                  <ul>
                    <li>Garage: 01</li>
                    <li>Drawing: 03</li>
                    <li>Bathroom: 04</li>
                  </ul>
                </div>
              </div>
              <div class="property-card-btn">
                <Link to={`/service/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
