import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center">
          <span className="text-dark">OUR SERVICES</span>
          <h2>Our All Services</h2>
        </div>
        <div className="row pt-3">
          {services?.map((pd, index) => (
            <div className="col-md-4 col-sm-12">
              <div className="card h-100 p-3">
                <img className="w-100 h-50" src={pd?.imageURL} alt="Images" />
                <h3>{pd.name}</h3>
                <p>{pd.description}</p>
                <a href="#" className="read-btn">
                  Read More <i className="flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
