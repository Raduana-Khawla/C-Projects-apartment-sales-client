import React from "react";
import Contact from "../../Contact/Contact";
import Banner from "../../Shared/Banner/Banner";
import Design from "../Design/Design";
import Services from "../../Services/Services";
import Properties from "../../Properties/Properties";

const Home = () => {
  return (
    <div>
      <h2>welcome to Noor Construction</h2>
      <Banner></Banner>
      <Design></Design>
      <Services></Services>
      <Properties></Properties>
      <Contact></Contact>
    </div>
  );
};
export default Home;
