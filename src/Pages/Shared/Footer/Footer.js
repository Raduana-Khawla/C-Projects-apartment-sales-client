import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots, faHome, faPlus,faPlane } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="py-3">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-4 d-flex bg-dark p-3 rounded">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize:'40px'}} />
                        <p className="ms-2 fw-bolder">House-37,�Road-13/Ranavola Avenue,�Sector-10,Uttara</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4>Quick Links</h4>
                        <div>
                        <ul className="list-unstyled">
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Booking Package</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                    <FontAwesomeIcon icon={faPlane} /> <span>Packages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
       </div>
    </div>
    <div className="col-md-4">
     <div className="rounded-circle p-5 color">
        <h4>About Us</h4>
        <p className="">All schedule/non-schedule domestic passenger flights and charter flights of Helicopter/General Aviation will remain suspended. Revised travel restrictions due COVID-19 pandemic. Mandatory 14 Days Institutional Quarantine for the Passengers Coming To Bangladesh.</p>
     </div>
        <br />
        <div className='d-flex justify-content-evenly'    style={{fontSize:'2em'}}>
           <FontAwesomeIcon icon={faFacebook}/>
           <FontAwesomeIcon icon={faInstagram}/>
           <FontAwesomeIcon icon={faTwitter}/>
           <FontAwesomeIcon icon={faWhatsapp}/>
         </div>
        </div>
       </div>
     </div>
    <p className="mb-0  text-center text-white">Tour and Travel © 2021</p>
</footer>
    );
};

export default Footer;