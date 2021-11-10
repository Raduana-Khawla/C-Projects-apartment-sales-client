import React from "react";
import Contact from "../../Contact/Contact";
import Banner from "../../Shared/Banner/Banner";
import Design from "../Design/Design";
import Services from "../../Services/Services";
import Propertys from "../../Propertys/Propertys";

const Home = () => {
  return (
    <div>
      <h2>welcome to Noor Construction</h2>
      <Banner></Banner>
      <Design></Design>
      <Services></Services>
      <Propertys></Propertys>
      <Contact></Contact>
    </div>
  );
};
export default Home;
