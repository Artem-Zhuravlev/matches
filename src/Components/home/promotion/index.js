import React from "react";
import PromotionAnimation from "./Enroll";
import Enroll from "./Animation";

const Promotion = () => {
  return (
    <div className="promotion_wrapper" style={{ background: "#fff" }}>
      <div className="container">
        <PromotionAnimation />
        <Enroll />
      </div>
    </div>
  );
};

export default Promotion;
