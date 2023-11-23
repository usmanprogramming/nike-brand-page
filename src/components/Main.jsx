import React from "react";
import "../styles/main.css";
import shoe_image from "../assets/shoe_image.png";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";

const Main = () => {
  return (
    <div>
      <main className="main">
        <div className="page-main-part">
          <div className="heading-div">
            <h1>
              Your feet
              <br />
              deserve
              <br />
              the best
            </h1>
          </div>
          <div className="para-div">
            <p>
              Your feet deserve the best and we're here to
              <br />
              help you with our shoes. your feet deserve
              <br />
              the best and we're here to help you with our
              <br />
              shoes
            </p>
          </div>
          <div className="btns-div">
            <button className="shop-now-btn">Shop now</button>
            <button className="category-btn">Category</button>
          </div>
          <div className="available-div">
            <p>Also available on</p>
            <div className="amazon-flipkart-div">
              <img style={{ width: "32px", height: "32" }} src={flipkart} />
              <img style={{ width: "32px", height: "32" }} src={amazon} />
            </div>
          </div>
        </div>
        <div className="page-img-part">
          <img src={shoe_image} style={{ width: "530px", height: "487px" }} />
        </div>
      </main>
    </div>
  );
};

export default Main;
