// import React from "react";
// import "./Properties.css";
// import Property1 from "../../images/property1.jpg";
// import Property2 from "../../images/property2.jpg";
// import Property3 from "../../images/property3.jpg";
// import Property4 from "../../images/property4.jpg";
// import Property5 from "../../images/property5.jpg";
// import Property6 from "../../images/property6.jpg";

// const Properties = () => {
//   return (
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allProperties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  console.log(properties);
  return (
    <div>
      <h1>Properties</h1>
      <div className="properties">
        <div className="row container">
          {properties?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="property p-3 border border m-2">
                <div className="property-img">
                  <img className="w-50" src={pd?.imageURL} alt="" />
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.description}</p>
                <p>{pd.price}</p>
                <Link to={`/properties/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Properties;

// <div>
//   <div className="property-area-widget pt-100 pb-70">
//     <div className="container">
//       <div className="section-title text-center">
//         <span className="sp-color-2">PROPERTY</span>
//         <h2>Our Property and Its Availabilities and All Other Details</h2>
//       </div>
//       <div className="row pt-45">
//         <div className="col-lg-4 col-md-6">
//           <div className="property-card">
//             <div className="property-card-img">
//               <a href="property-details.html">
//                 <img src={Property1} alt="Images" />
//               </a>
//               <div className="property-card-btn">
//                 <a href="#" className="book-btn">
//                   Book Now
//                 </a>
//               </div>
//               <ul className="property-list">
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-video"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-expand"></i>
//                   </a>
//                 </li>
//               </ul>
//               <h4 className="pricing">$1200/m</h4>
//             </div>
//             <div className="content">
//               <h4>
//                 Apartment{" "}
//                 <span>
//                   <i className="bx bx-location-plus"></i>Dallas
//                 </span>{" "}
//               </h4>
//               <h3>
//                 <a href="property-details.html">Sweet Family Home</a>
//               </h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Duis purus nisi, venenatis quis velit vitae
//               </p>
//               <ul>
//                 <li>Dining: 01</li>
//                 <li>Sq. feet: 120</li>
//                 <li>Bathroom: 03</li>
//               </ul>
//               <ul>
//                 <li>Garage: 01</li>
//                 <li>Drawing: 03</li>
//                 <li>Bathroom: 04</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="property-card">
//             <div className="property-card-img">
//               <a href="property-details.html">
//                 <img src={Property2} />
//               </a>
//               <div className="property-card-btn">
//                 <a href="#" className="book-btn">
//                   Book Now
//                 </a>
//               </div>
//               <ul className="property-list">
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-video"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-expand"></i>
//                   </a>
//                 </li>
//               </ul>
//               <h4 className="pricing">$1400/m</h4>
//             </div>
//             <div className="content">
//               <h4>
//                 Apartment{" "}
//                 <span>
//                   <i className="bx bx-location-plus"></i>Austin
//                 </span>{" "}
//               </h4>
//               <h3>
//                 <a href="property-details.html">Relaxation Apartment</a>
//               </h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Duis purus nisi, venenatis quis velit vitae
//               </p>
//               <ul>
//                 <li>Dining: 01</li>
//                 <li>Sq. feet: 160</li>
//                 <li>Bathroom: 03</li>
//               </ul>
//               <ul>
//                 <li>Garage: 01</li>
//                 <li>Drawing: 03</li>
//                 <li>Bathroom: 04</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="property-card">
//             <div className="property-card-img">
//               <a href="property-details.html">
//                 <img src={Property3} alt="Images" />
//               </a>
//               <div className="property-card-btn">
//                 <a href="#" className="book-btn">
//                   Book Now
//                 </a>
//               </div>
//               <ul className="property-list">
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-video"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-expand"></i>
//                   </a>
//                 </li>
//               </ul>
//               <h4 className="pricing">$1250/m</h4>
//             </div>
//             <div className="content">
//               <h4>
//                 Apartment{" "}
//                 <span>
//                   <i className="bx bx-location-plus"></i>New York
//                 </span>{" "}
//               </h4>
//               <h3>
//                 <a href="property-details.html">Night Valley Apartment</a>
//               </h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Duis purus nisi, venenatis quis velit vitae
//               </p>
//               <ul>
//                 <li>Dining: 01</li>
//                 <li>Sq. feet: 170</li>
//                 <li>Bathroom: 03</li>
//               </ul>
//               <ul>
//                 <li>Garage: 01</li>
//                 <li>Drawing: 03</li>
//                 <li>Bathroom: 04</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="property-card">
//             <div className="property-card-img">
//               <a href="property-details.html">
//                 <img src={Property4} alt="Images" />
//               </a>
//               <div className="property-card-btn">
//                 <a href="#" className="book-btn">
//                   Book Now
//                 </a>
//               </div>
//               <ul className="property-list">
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-video"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-expand"></i>
//                   </a>
//                 </li>
//               </ul>
//               <h4 className="pricing">$1350/m</h4>
//             </div>
//             <div className="content">
//               <h4>
//                 Apartment{" "}
//                 <span>
//                   <i className="bx bx-location-plus"></i>New Jersey
//                 </span>{" "}
//               </h4>
//               <h3>
//                 <a href="property-details.html">Luxury Apartment</a>
//               </h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Duis purus nisi, venenatis quis velit vitae
//               </p>
//               <ul>
//                 <li>Dining: 01</li>
//                 <li>Sq. feet: 130</li>
//                 <li>Bathroom: 02</li>
//               </ul>
//               <ul>
//                 <li>Garage: 01</li>
//                 <li>Drawing: 01</li>
//                 <li>Bathroom: 03</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="property-card">
//             <div className="property-card-img">
//               <a href="property-details.html">
//                 <img src={Property5} alt="Images" />
//               </a>
//               <div className="property-card-btn">
//                 <a href="#" className="book-btn">
//                   Book Now
//                 </a>
//               </div>
//               <ul className="property-list">
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-video"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-expand"></i>
//                   </a>
//                 </li>
//               </ul>
//               <h4 className="pricing">$1450/m</h4>
//             </div>
//             <div className="content">
//               <h4>
//                 Apartment{" "}
//                 <span>
//                   <i className="bx bx-location-plus"></i>Dallas
//                 </span>{" "}
//               </h4>
//               <h3>
//                 <a href="property-details.html">Studio Apartments</a>
//               </h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Duis purus nisi, venenatis quis velit vitae
//               </p>
//               <ul>
//                 <li>Dining: 01</li>
//                 <li>Sq. feet: 120</li>
//                 <li>Bathroom: 02</li>
//               </ul>
//               <ul>
//                 <li>Garage: 01</li>
//                 <li>Drawing: 01</li>
//                 <li>Bathroom: 02</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="property-card">
//             <div className="property-card-img">
//               <a href="property-details.html">
//                 <img src={Property6} alt="Images" />
//               </a>
//               <div className="property-card-btn">
//                 <a href="#" className="book-btn">
//                   Book Now
//                 </a>
//               </div>
//               <ul className="property-list">
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-video"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="bx bx-expand"></i>
//                   </a>
//                 </li>
//               </ul>
//               <h4 className="pricing">$1540/m</h4>
//             </div>
//             <div className="content">
//               <h4>
//                 Apartment{" "}
//                 <span>
//                   <i className="bx bx-location-plus"></i>Austin
//                 </span>{" "}
//               </h4>
//               <h3>
//                 <a href="property-details.html">Modern Luxury Apartment</a>
//               </h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Duis purus nisi, venenatis quis velit vitae
//               </p>
//               <ul>
//                 <li>Dining: 02</li>
//                 <li>Sq. feet: 190</li>
//                 <li>Bathroom: 03</li>
//               </ul>
//               <ul>
//                 <li>Garage: 01</li>
//                 <li>Drawing: 02</li>
//                 <li>Bathroom: 02</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12">
//           <div className="pagination-area">
//             <a href="#" className="prev page-numbers">
//               <i className="bx bx-chevron-left"></i>
//             </a>
//             <span className="page-numbers current" aria-current="page">
//               1
//             </span>
//             <a href="#" className="page-numbers">
//               2
//             </a>
//             <a href="#" className="page-numbers">
//               3
//             </a>
//             <a href="#" className="next page-numbers">
//               <i className="bx bx-chevron-right"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
