import React from "react";
import Contact from "../../Contact/Contact";
import Banner from "../../Shared/Banner/Banner";
import Design from "../Design/Design";
import ServiceItems from "../../ServiceItems/ServiceItems";
import Services from "../../Services/Services";
import PersonReview from "../../Review/PersonReview/PersonReview";
import ReviewShows from "../../Review/ReviewShows/ReviewShows";

const Home = () => {
  return (
    <div>
      <h2>welcome to Noor Construction</h2>
      <Banner></Banner>
      <Design></Design>
      <ServiceItems></ServiceItems>
      <Services></Services>
      <Contact></Contact>
      <ReviewShows></ReviewShows>
    </div>
  );
};
export default Home;
