import React from "react";
import "../styles/main.css";
import shoe_image from "../assets/shoe_image.webp";
import amazon from "../assets/amazon.webp";
import flipkart from "../assets/flipkart.webp";

const Main = () => {
  return (
    <div>
      <main className="main">
        <div className="page-main-part">
          <div className="heading-div">
            <h1>Your feet deserve the best</h1>
          </div>
          <div className="para-div">
            <p>
              Your feet deserve the best and we're here to help you with our
              shoes. your feet deserve the best and we're here to help you with
              our shoes
            </p>
          </div>
          <div className="btns-div">
            <button className="shop-now-btn">Shop now</button>
            <button className="category-btn">Category</button>
          </div>
          <div className="available-div">
            <p>Also available on</p>
            <div className="amazon-flipkart-div">
              <img
                style={{ width: "32px", height: "32px", cursor: "pointer" }}
                src={flipkart}
                alt="Flipkart icon"
                loading="lazy"
              />
              <img
                style={{ width: "32px", height: "32px", cursor: "pointer" }}
                src={amazon}
                alt="Amazon icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="page-img-part">
          <img
            src={shoe_image}
            alt="Shoe image"
            width="300"
            height="300"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
