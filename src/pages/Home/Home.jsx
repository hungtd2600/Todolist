import React from "react";
import ButtonHome from "../../components/common/Button/ButtonHome";
import images from "../../assets/images";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src={images.done} alt="" />
      </div>
      <div className="content-home">
        <div className="content-title">
          <span>Welcome to</span>
          <h3>OUR REMINDER</h3>
        </div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
        </span>
      </div>
      <div className="button-start">
        <ButtonHome />
      </div>
    </div>
  );
};

export default Home;
